import { ModalItem, ModalPlaylist } from './modalPlayer.js';
import { BasicPageItem } from './trophy.js';
import HScroll from './hscroll.js';
import React from 'react'
import './incentives.css';
import { coinUnlockModalItem } from './coinUnlockModalItem.js';
import { withPrefix } from 'gatsby-link'

export let Incentives = [
	{
		cost: 5,
		id: 'resume',
		name: "Download my Resume",
		playlist: [BasicPageItem({ title: "Here's my (2018) resume!", bigText: '📄 Resume', bigTextUrl: withPrefix('/Resume2018.pdf'), nextButtonTitle: 'Fine, whatever' })],
		activityText: "You paid 5 coins to download my resume!"
	},
	{
		cost: 15,
		id: 'email',
		name: "Send Me an Email",
		playlist: [BasicPageItem({ title: "Send me an email!", bigText: '💌 nate@nateparrott.com', bigTextUrl: 'mailto:nate@nateparrott.com', nextButtonTitle: 'Ok...' })],
		activityText: "You paid 15 coins to send me an email!"
	},
	{
		cost: 24,
		id: '2x',
		name: "Earn 2x for every Coin",
		playlist: [BasicPageItem({ title: "Double coins bonus unlocked!", subtitle: "Move over, Mr. Moneybags.", bigText: '🤑🤑🤑', nextButtonTitle: 'Take advantage!' })],
		activityText: "Paid 24 coins to unlock 💰 DOUBLE COINS 💰 going forward",
		coinMultiplier: 2
	},
	// https://m.me/join/AbbqCUCEphSULk3r
	{
		cost: 42,
		id: 'chatroom',
		name: "Join the VIP Chatroom",
		playlist: [BasicPageItem({ bigText: '🤝 Join', title: 'Please don’t be weird.', nextButtonTitle: 'Done' })],
		activityText: "You paid 42 coins to join the exclusive VIP chatroom. Why would you do that?"
	},
	{
		cost: 56,
		id: 'goldmode',
		name: "Unlock 🏆Gold Mode🏆",
		playlist: [BasicPageItem({ bigText: '🏆 Gold Mode 🏆', title: 'You’ve unlocked gold mode.', subtitle: 'This is what the kids would call a "weird flex."', nextButtonTitle: 'Swoosh' })],
		activityText: "You paid 56 coins to unlock 🏆 Gold Mode 🏆!",
		cssUnlock: 'goldMode'
	},
	{
		cost: 152,
		id: 'sticker',
		name: "Get a Sticker in the Mail",
		playlist: [BasicPageItem({ title: "Email me, and I’ll send you a sticker!", subtitle: "Just tell me where to send it.", bigText: '📭 Request', bigTextUrl: 'mailto:nate@nateparrott.com?subject=I%20want%20a%20sticker', nextButtonTitle: 'Done' })],
		activityText: "You paid 152 coins to send me an email requesting a sticker. Good luck receiving it."
	},
]

const IncentiveView = ({ name, cost, unlocked, onClick }) => {
	let className = 'IncentiveView ' + (unlocked ? 'unlocked' : '');
	return (
	  <div className='IncentiveView' onClick={onClick}>
			<div className='lock'>
				<label>{cost}</label>
			</div>
			<h6>{name}</h6>
		</div>
	);
}

const IncentivesSection = ({ playPlaylist, activityStore }) => {
	return (
		<HScroll>
			{ Incentives.map((incentive, i) => {
				let unlocked = activityStore.hasIncentive(incentive.id);
				let onClick = () => {
					let showIncentiveContent = () => {
						playPlaylist(new ModalPlaylist(incentive.playlist));
					};
					if (activityStore.hasIncentive(incentive.id)) {
						showIncentiveContent();
						return;
					}
					let canUnlock = activityStore.coinBalance() >= incentive.cost;
					playPlaylist(new ModalPlaylist([coinUnlockModalItem(() => {
						if (!canUnlock) {
							return;
						}
						activityStore.unlockIncentive(incentive);
						setTimeout(() => {
							showIncentiveContent();
						}, 200);
					}, !canUnlock)]));
				};
				return <IncentiveView key={i} name={incentive.name} cost={incentive.cost} onClick={onClick} unlocked={unlocked} />
			} ) }
		</HScroll>
	)
}

export default IncentivesSection;
