import React from 'react'
import './trophy.css';

let range = (x) => {
	let numbers = [];
	for (let i=0; i<x; i++) numbers.push(i);
	return numbers;
}

const Trophy = ({ emoji, name, desc, value, action, unlocked }) => (
  <div className={`trophy ${unlocked ? 'unlocked' : 'locked'}`}>
		<div className='emoji'><span>{emoji}</span></div>
		<div className='name'>{name}</div>
		<div className='desc'>{desc}</div>
		<UnlockButton action={action} unlocked={unlocked} />
	</div>
)

const UnlockButton = ({ action, unlocked }) => {
	if (unlocked) {
		return <div className='unlocked'>Unlocked!</div>
	}
	if (action) {
		return <div className='unlock' onClick={action}>Click here!</div>
	}
	return <div className='not-unlocked'>Not unlocked</div>
}

		// <div className='stars'>{ range(value).map((i) => <div />) }</div>

export default Trophy
