import React from 'react'
import {ModalItem, ModalPlaylist} from '../components/modalPlayer.js';
import './coinUnlockModalItem.css';
import unlockCardBack from '../images/unlock-card-back.svg';
import unlockCardCoin from '../images/unlock-card-coin.svg';
import unlockCardFront from '../images/unlock-card-front.svg';
import unlockCardNope from '../images/unlock-card-nope.svg';

class CoinUnlockModalContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {stage: 'preAppear'};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({stage: 'appear'})
		}, 50);
	}
	render() {
		let {onForward, nopeState} = this.props;
		let {stage} = this.state;
		let onClick = null;
		if (stage === 'appear') {
			onClick = () => {
				this.setState({ stage: 'disappear' });
				setTimeout(() => {
					onForward();
				}, 700);
			}
		}
		let rootClass = `CoinUnlockModalContainer stage-${stage}`;
		if (nopeState) {
			return (
			 <div className={rootClass} onClick={onClick}>
				<img src={unlockCardNope} className='nope' />
			 </div>
			)
		}
		return (
			<div className={rootClass} onClick={onClick}>
				<img src={unlockCardBack} className='coinBack' />
				<img src={unlockCardCoin} className='coin' />
				<img src={unlockCardFront} className='coinFront' />
			</div>
		)
	}
}

export let coinUnlockModalItem = (onOk, nopeState) => {
	let item = new ModalItem(({ full, onForward }) => {
		return <CoinUnlockModalContainer nopeState={nopeState} onForward={() => {
			onForward();
			onOk();
		}} />
	}, 'CoinUnlockModal');
	item.borderless = true;
	return item;
}
