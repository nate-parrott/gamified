
const windowGlobal = typeof window !== 'undefined' && window;

let clickCountTrophies = [
	{
		clicks: 20,
		award: {
			id: 'clicker-clique',
			name: 'Clicker Clique',
			coins: 10,
			activityText: '🕹 Nice clicking! You’ve unlocked the CLICKER CLIQUE trophy for clicking 20 times. Here’s 10 coins.'
		}
	},
	{
		clicks: 100,
		award: {
			id: 'big-click-energy',
			coins: 20,
			activityText: '🤞 Finger-clickin’ good! You’ve unlocked the BIG CLICK ENERGY trophy for clicking 100 times. Enjoy the prestige and luxury that comes with 25 COINS!',
			name: 'Big Click Energy',
		}
	},
];

let categoryTrophies = [
	{
		category: 'content',
		count: 5,
		award: {
			id: 'reading-rainbow',
			name: 'Reading Rainbow',
			coins: 30,
			activityText: '🌈 Looks like you love reading! Here’s a READING RAINBOW badge for reading 5 pieces of content. I know knowledge is the real reward, but here’s 30 coins on the side.'
		}
	}
]

export default class TrophyLogicTracker {
	constructor(activityStore) {
		this.activityStore = activityStore;
		let body = windowGlobal ? windowGlobal.document.body : null;
		if (body) {
			body.addEventListener('click', () => {
				this.click();
			});
		}
		activityStore.newAwardAnnouncer.listen((award) => {
			setTimeout(() => {
				this.triggerCategoryAwards();
			}, 1200);
		});
	}
	click() {
		this.activityStore.values.clicks = (this.activityStore.values.clicks || 0) + 1;
		for (let trophy of clickCountTrophies) {
			if (this.activityStore.hasAward(trophy.award.id)) continue;
			if (this.activityStore.values.clicks >= trophy.clicks) {
				this.activityStore.unlockAward(trophy.award);
			}
		}
	}
	triggerCategoryAwards() {
		let categoryCounts = {};
		for (let award of Object.values(this.activityStore.awards)) {
			if (award.category) {
				categoryCounts[award.category] = (categoryCounts[award.category] || 0) + 1;
			}
		}
		for (let trophy of categoryTrophies) {
			if (this.activityStore.hasAward(trophy.award.id)) continue;
			if (categoryCounts[trophy.category] >= trophy.count) {
				this.activityStore.unlockAward(trophy.award);
			}
		}
	}
}
