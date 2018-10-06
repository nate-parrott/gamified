import { ModalItem } from './modalPlayer.js';
import { BasicPageItem } from './trophy.js';
import HScroll from './hscroll.js';
import React from 'react'
import './incentives.css';

export let Incentives = [
	{
		cost: 5,
		id: 'resume',
		name: "Download my Resume",
		playlist: [BasicPageItem({ title: 'Test!' })],
		activityText: "You paid 5 coins to download my resume!"
	},
	{
		cost: 5,
		id: 'resume2',
		name: "Download my Resume",
		playlist: [BasicPageItem({ title: 'Test!' })],
		activityText: "You paid 5 coins to download my resume!"
	},
	{
		cost: 5,
		id: 'resume3',
		name: "Download my Resume",
		playlist: [BasicPageItem({ title: 'Test!' })],
		activityText: "You paid 5 coins to download my resume!"
	}
]

const IncentiveView = ({ name, cost }) => (
  <div className='IncentiveView'>
		<div className='lock'>
			<label>{cost}</label>
		</div>
		<h6>{name}</h6>
	</div>
)

const IncentivesSection = ({ playItems, activityStore }) => {
	return (
		<HScroll>
			{ Incentives.map((incentive, i) => {
				return <IncentiveView key={i} name={incentive.name} cost={incentive.cost} />
			} ) }
		</HScroll>
	)
}

export default IncentivesSection;
