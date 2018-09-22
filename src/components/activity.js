import React from 'react'
import './activity.css';
import coin from '../images/coin.png';

const ActivityMessage = ({ message, activityStore }) => {
	if (message.type === 'divider') {
		return <div className='divider' />;
	}
	return (
		<div className={`message type-${message.type}`}>
			<div className='bubble'>
				{message.text}
			</div>
		</div>
	);
}

export default class Activity extends React.Component {
	constructor(props) {
		super(props);
		this.state = { messages: [] };
	}
	componentDidMount() {
		let { activityStore } = this.props;
		this.cancelChangeListener = activityStore.onChange(() => {
			this.setState({ messages: activityStore.messages });
		});
	}
	componentWillUnmount() {
		if (this.cancelChangeListener) {
			this.cancelChangeListener();
			this.cancelChangeListener = null;
		}
	}
	render() {
		let { activityStore } = this.props;
		let { messages, coins } = activityStore;
		// let coins = 0;
		// let messages = [
		// 	{id: 0, from: 'admin', content: <Bubble>👋 Hey! This is your <em>activity log</em>, where you’ll see all the data I’m relentlessly collecting about you!</Bubble>},
		// 	{id: 1, from: 'admin', content: <Bubble>To fully experience this site, you’ll need to engage and interact to earn coins. But here’s a freebie!</Bubble>},
		// 	{id: 2, from: 'admin', content: <Action onClick={this.giveFreebie.bind(this)}>Collect Coin!</Action>},
		// 	{id: 3, from: 'system', content: <Bubble>Data collected!{'\n'}Browser: Chrome{'\n'}Approx. location: New York</Bubble>}
		//
		// ]
		
		return (
			<div className='activity expanded'>
				<div className='coin-count'>
					<img src={coin} /><label>{coins} coins</label>
				</div>
				<div className='chat'>
					{activityStore.mostRecentMessagesReversed().map((message) => (
						<ActivityMessage key={message.id} message={message} activityStore={activityStore} />
					))}
				</div>
			</div>
		)
	}
	giveFreebie() {
		
	}
}
