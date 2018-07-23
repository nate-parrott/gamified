import React from 'react'
import './activity.css';
import coin from '../images/coin.png';

const Action = ({children, onClick}) => (
	<span className='action' onClick={onClick}>{children}</span>
)

const Bubble = ({children}) => {
	return <span className='bubble'>{children}</span>;
}

export default class Activity extends React.Component {
	render() {
		let coins = 0;
		let messages = [
			{from: 'admin', content: <Bubble>👋 Hey! This is your <em>activity log</em>, where you’ll see all the data I’m relentlessly collecting about you!</Bubble>},
			{from: 'admin', content: <Bubble>To fully experience this site, you’ll need to engage and interact to earn coins. But here’s a freebie!</Bubble>},
			{from: 'admin', content: <Action onClick={this.giveFreebie.bind(this)}>Collect Coin!</Action>},
			{from: 'system', content: <Bubble>Data collected!{'\n'}Browser: Chrome{'\n'}Approx. location: New York</Bubble>}
			
		]
		return (
			<div className='activity expanded'>
				<div className='coin-count'>
					<img src={coin} /><label>{coins} coins</label>
				</div>
				<div className='chat'>
					{messages.map((message, i) => (
						<div className={`message from-${message.from}`}>{message.content}</div>
					))}
				</div>
			</div>
		)
	}
	giveFreebie() {
		
	}
}
