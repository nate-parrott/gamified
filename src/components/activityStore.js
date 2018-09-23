import Announcer from './announcer.js';
import { uuid } from './utils.js';

const windowGlobal = typeof window !== 'undefined' && window;

export function GetGlobalActivityStore() {
	let existing = windowGlobal ? windowGlobal.activityStore : null;
	if (!existing) {
		existing = new ActivityStore(new LocalActivityStorage('activity'));
		if (windowGlobal) windowGlobal.activityStore = existing;
	}
	return existing;
}

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
	suppressDefaultNotification: false
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
		this.coins = 0;
		for (let message of Object.values(this.awards)) {
			this.coins += message.coins || 0;
		}
		this.changeAnnouncer = new Announcer();
		this.newAwardAnnouncer = new Announcer();
		if (this.messages.length === 0) {
			this.sendOnboardingMessages();
		}
	}
	sendOnboardingMessages() {
		// insert in reverse order:
		this.addMessage({
			type: 'admin',
			text: 'Here, everything’s a ~game~. Go explore, earn coins, and they’ll show up here...'
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
	save() {
		this.storage.write({
			awards: this.awards,
			messages: this.messages
		});
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
	}
	addMessage(message) {
		this.messages.push({
			...message,
			id: uuid()
		});
		this.changeAnnouncer.announce(this);
	}
	mostRecentMessagesReversed() {
		const count = Math.min(60, this.messages.length);
		let messages = this.messages.slice(this.messages.length - count);
		messages.reverse();
		return messages;
	}
}
