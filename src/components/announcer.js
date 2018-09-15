
export default class Announcer {
	constructor() {
		this.lastCallbackId = 0;
		this.callbacks = {};
	}
	listen(callback) {
		// returns a function to unregister the listener when called
		let id = this.lastCallbackId++;
		this.callbacks[id] = callback;
		return () => {
			delete this.callbacks[id];
		}
	}
	announce(obj) {
		for (let callback of Object.values(this.callbacks)) {
			callback(obj);
		}
	}
}
