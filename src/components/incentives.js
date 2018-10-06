import { ModalItem, ModalPlaylist } from './modalPlayer.js';
import { BasicPageItem } from './trophy.js';
import HScroll from './hscroll.js';
import React from 'react'
import './incentives.css';
import { coinUnlockModalItem } from './coinUnlockModalItem.js';

export let Incentives = [
	{
		cost: 5,
		id: 'resume',
		name: "Download my Resume",
		playlist: [BasicPageItem({ title: 'My resume!' })],
		activityText: "You paid 5 coins to download my resume!"
	},
	{
		cost: 5,
		id: 'resume2',
		name: "Test 2!",
		playlist: [BasicPageItem({ title: 'Test 2!' })],
		activityText: "You paid 5 coins to download my resume!"
	},
	{
		cost: 5,
		id: 'resume3',
		name: "Another test thing ok?",
		playlist: [BasicPageItem({ title: 'Test 3!' })],
		activityText: "You paid 5 coins to download my resume!"
	}
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
