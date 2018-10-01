import React from 'react'
import './trophy.css';
import { ModalItem } from './modalPlayer.js';
import HScroll from './hscroll.js';
import snapcodeBitmoji from '../images/snapcodeBitmoji.svg'

let range = (x) => {
	let numbers = [];
	for (let i=0; i<x; i++) numbers.push(i);
	return numbers;
}

const Trophy = ({ emoji, name, desc, value, action, unlocked }) => (
  <div className={`trophy ${unlocked ? 'unlocked' : 'locked'}`} onClick={action}>
		<div className='emoji'><span>{emoji}</span></div>
		<div className='name'>{name}</div>
		<div className='desc'>{desc}</div>
		<UnlockButton hasAction={!!action} unlocked={unlocked} />
	</div>
)

const UnlockButton = ({ hasAction, unlocked }) => {
	if (unlocked) {
		return <div className='unlocked'>Unlocked!</div>
	}
	if (hasAction) {
		return <div className='unlock'>Click here!</div>
	}
	return <div className='not-unlocked'>Not unlocked</div>
}

let BasicPageItem = ({ bigText, bigTextUrl, bigImage, title, subtitle, nextButtonTitle, pageClass }) => {
	return new ModalItem(({ full, onForward }) => {
		let content = null;
		if (full) {
			content = [
					bigText ? <a key='bigText' className='bigText' href={bigTextUrl} target='_blank'>{bigText}</a> : null,
					bigImage ? <img key='bigImage' className="bigImage" src={bigImage} /> : null,
					title ? <h1 key='title' className='title'>{title}</h1> : null,
					subtitle ? <div key='subtitle' className='subtitle'>{subtitle}</div> : null,
					nextButtonTitle ? <div key='nextButton' className='nextButton' onClick={ onForward }>{nextButtonTitle}</div> : null
			];
		}
		return <div>{content}</div>;
	}, 'BasicPageItem ' + (pageClass || ''));
}

let policePage = () => {
	return BasicPageItem({
		title: "👮‍♀️ Hey you!",
		subtitle: "I can’t actually check if you’ve done this before giving you the coins. But if I realize you’ve lied...",
		nextButtonTitle: "I Promise! 🤝"
	})
}

let instagramPage = () => {
	let handle = 'nates_linkedin';
	return BasicPageItem({
		bigText: '@' + handle,
		bigTextUrl: `https://instagram.com/${handle}`,
		subtitle: "Go ahead, smash the follow button...",
		nextButtonTitle: "I did, I promise 👮‍♀️",
		pageClass: "instagram"
	});
}

let snapchatPage = () => {
	return BasicPageItem({
		bigImage: snapcodeBitmoji,
		subtitle: "Go ahead, scan that code...",
		nextButtonTitle: "Did it! 👮‍♀️",
		pageClass: "snapchat"
	});
}

let cashAppPage = () => {
	let cashtag = 'n8p';
	return BasicPageItem({
		bigText: "$" + cashtag,
		bigTextUrl: "https://cash.me/$" + cashtag,
		subtitle: "Go ahead, send that $3...",
		nextButtonTitle: "Sent! 👮‍♀️",
		pageClass: "cashApp"
	})
}

export let Trophies = ({ activityStore, playWithRewards }) => {
	
	return (
		<HScroll>
			<Trophy emoji="🌈" name="Reading Rainbow" desc="Read 5 pieces of content!" value={10} />
			<Trophy emoji="🕹" name="Clicker Clique" desc="Click 20 times anywhere!" value={5} unlocked={true} />
			<Trophy emoji="🤞" name="Big Click Energy" desc="Click 100 times anywhere!" value={5} />
			<Trophy emoji="👀" name="Eyewitness" desc="Follow me on Instagram!" value={5} unlocked={activityStore.hasAward('instagram')} action={() => playWithRewards('instagram', [policePage(), instagramPage()], 5)} />
			<Trophy emoji="👻" name="Toasty Ghost" desc="Add me on the Snapchat!" value={7} unlocked={activityStore.hasAward('snapchat')} action={() => playWithRewards('snapchat', [policePage(), snapchatPage()], 7) } />
			<Trophy emoji="🐮" name="Cash Cow" desc="Send me $3 on Square Cash" value={10} unlocked={activityStore.hasAward('cashApp')} action={() => playWithRewards('cashApp', [policePage(), cashAppPage()], 7) } />
		</HScroll>
	)
}

