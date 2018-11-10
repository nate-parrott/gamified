import Announcer from './announcer.js';
import { uuid } from './utils.js';
import TrophyLogicTracker from './trophyLogic.js';

const windowGlobal = typeof window !== 'undefined' && window;

export function GetGlobalActivityStore() {
	let existing = windowGlobal ? windowGlobal.activityStore : null;
	if (!existing) {
		existing = new ActivityStore(new LocalActivityStorage('activity'));
		if (windowGlobal) windowGlobal.activityStore = existing;
	}
	return existing;
}

const STARTING_COINS = 0;

export class LocalActivityStorage {
	constructor(key) {
		this.key = key;
	}
	read() {
		if (!windowGlobal) {
			return {};
		}
		if (windowGlobal.localStorage[this.key]) {
			return JSON.parse(windowGlobal.localStorage[this.key]);
		} else {
			return {};
		}
	}
	write(data) {
		windowGlobal.localStorage[this.key] = JSON.stringify(data);
	}
}

/*
Award schema:
{
	id: 'myAward',
	name: "My Award!",
	coins: 5,
	activityText: "You unlocked a cool award!",
	suppressDefaultNotification: false,
	category: 'content'
}

Message schema:
{
	text: "My message!",
	type: admin/system/user/divider, ('system' messages are monospace)
  coins: 1,
  // special fields:
	specialType: freeCoin/?,
  id: uuid
}
*/

export default class ActivityStore {
	constructor(storage) {
		this.storage = storage;
		
		let data = this.storage.read();
		this.awards = data.awards || {};
		this.messages = data.messages || [];
		this.values = data.values || {};
		this.unlockedIncentives = data.unlockedIncentives || {};
		this.changeAnnouncer = new Announcer();
		this.newAwardAnnouncer = new Announcer();
		if (this.messages.length === 0) {
			this.sendOnboardingMessages();
		}
		this.trophyLogicTracker = new TrophyLogicTracker(this);
		for (let message of this.messages) {
			this.processMessageDirectives(message);
		}
	}
	save() {
		this.storage.write({
			awards: this.awards,
			messages: this.messages,
			values: this.values,
			unlockedIncentives: this.unlockedIncentives
		});
	}
	unsave() {
		this.storage.write({});
	}
	coinBalance() {
		let coins = STARTING_COINS;
		let multiplier = 1;
		for (let message of this.messages) {
			let msgCoins = message.coins || 0;
			if (msgCoins > 0) {
				msgCoins *= multiplier; // multiplier does not apply to negative coins (expenditures)
			}
			coins += msgCoins;
			multiplier *= message.coinMultiplier || 1;
		}
		return coins;
	}
	sendOnboardingMessages() {
		// insert in reverse order:
		this.addMessage({
			type: 'admin',
			text: 'On my site, everything’s a ~game~. Go explore, earn coins, and they’ll show up here...'
		});
		this.addMessage({
			type: 'admin',
			text: '👋 Hey! I’m Nate.'
		});
		this.addMessage({ type: 'divider' });
		// this.activityStore.unlockAward({
		// 	id: 'myAward',
		// 	activityText: "you got an award",
		// 	name: "My award!",
		// 	coins: 11
		// })
	}
	onChange(callback) {
		return this.changeAnnouncer.listen(callback);
	}
	hasAward(awardId) {
		return !!this.awards[awardId];
	}
	unlockAward(award) {
		if (this.hasAward(award.id)) {
			return;
		}
		this.awards[award.id] = award;
		this.coins += (award.coins || 0);
		this.addMessage({
			text: award.activityText,
			coins: award.coins,
			type: 'admin'
		});
		this.changeAnnouncer.announce(this);
		this.newAwardAnnouncer.announce(award);
		this.save();
	}
	hasIncentive(incentiveId) {
		return !!this.unlockedIncentives[incentiveId];
	}
	unlockIncentive(incentive) {
		if (this.hasIncentive(incentive.id)) return;
		this.unlockedIncentives[incentive.id] = 1;
		if (incentive.activityText) {
			this.addMessage({ type: 'admin', text: incentive.activityText, coins: -incentive.cost, coinMultiplier: incentive.coinMultiplier || 1, cssUnlock: incentive.cssUnlock });
		}
		this.changeAnnouncer.announce(this);
		this.save();
	}
	addMessage(message) {
		this.messages.push({
			...message,
			id: uuid()
		});
		this.processMessageDirectives(this.messages[this.messages.length - 1]);
		this.changeAnnouncer.announce(this);
		this.save();
	}
	mostRecentMessagesReversed() {
		const count = Math.min(60, this.messages.length);
		let messages = this.messages.slice(this.messages.length - count);
		messages.reverse();
		return messages;
	}
	processMessageDirectives(message) {
		if (message.cssUnlock && windowGlobal) {
			windowGlobal.document.body.classList.add(message.cssUnlock);
		}
	}
}
