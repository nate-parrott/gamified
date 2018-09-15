import Announcer from './announcer.js';
import { uuid } from './utils.js';

const windowGlobal = typeof window !== 'undefined' && window;

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
	from: admin/system/user, ('system' messages are monospace)
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
			from: 'admin'
		});
		this.changeAnnouncer.announce(this);
	}
	addMessage(message) {
		this.messages.push({
			...message,
			id: uuid()
		});
		this.changeAnnouncer.announce(this);
	}
}
