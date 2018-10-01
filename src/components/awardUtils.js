import { pick1 } from '../components/utils.js';
import React from 'react'
import {ModalItem, ModalPlaylist} from '../components/modalPlayer.js';
import EarnedCoinsModal from '../components/earnedCoinsModal.js';
import { BasicPageItem } from '../components/trophy.js';

export function playlistWithAward(awardId, items, activityStore, onDismiss, coins) {
	coins = coins || 5;
	let rewardEmoji = pick1(['💅', '👌', '💋', '🌝', '💕', '✨', '🌈', '💰', '💸', '😻', '🤑']);
	let rewardCongrats = pick1(['Nice going!', 'Wow!', 'Keep it up!', 'You got it!', 'As promised!', 'Exceptional!', 'Wild!']);
	if (!activityStore.hasAward(awardId)) {
		let awardItem = new ModalItem(({full}) => {
			if (!full) return;
			if (!activityStore.hasAward(awardId)) {
				// unlock in the next run loop:
				setTimeout(() => {
					activityStore.unlockAward({
						id: awardId,
						coins: coins,
						activityText: `🤑 You earned ${coins} coins for content consumption!`,
						suppressDefaultNotification: true
					});
				}, 0);
			}
			let title = rewardEmoji + ' ' + rewardCongrats;
			return <EarnedCoinsModal coins={coins} title={title} subtitle={`You’ve earned ${coins} coins for viewing!`} onDismiss={onDismiss} />;
		}, 'earnedCoinsModalItem');
		items = [...items, awardItem];
	}
	return new ModalPlaylist(items);
}

export function comingSoonPage() {
	return BasicPageItem({
		title: "Coming soon!",
		subtitle: "I guess you can have the coins anyway, though.",
		nextButtonTitle: "Whatever"
	})
}
