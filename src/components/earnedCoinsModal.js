import React from 'react'
import './earnedCoinsModal.css';
import sunburst from '../images/sunburst.svg';
import coin from '../images/coin.png';

export default class EarnedCoinsModal extends React.Component {
	render() {
		let {coins, title, subtitle, onDismiss} = this.props;
		return (
			<div className='EarnedCoinsModal'>
				<FallingCoins count={coins} />
				<img src={ sunburst } className='sunburst' />
				<div className='blurb'>
					<div className='dummy'>
					<div className='title'>{ title }</div>
					<div className='subtitle'>{ subtitle }</div>
						<div className='doneButton' onClick={onDismiss}>Let’s get more!</div>
					</div>
					<div className='count'>{ coins } coins!</div>
					<div className='title'>{ title }</div>
					<div className='subtitle'>{ subtitle }</div>
					<div className='doneButton' onClick={onDismiss}>Let’s get more!</div>
				</div>
			</div>
		)
	}
}

const FallingCoins = ({count}) => {
	let coins = [];
	for (let i=0; i<count; i++) {
		coins.push(<div key={i} left={(i + 0.5) / count} />);
	}
	return (
		<div className='FallingCoins'>{coins}</div>
	)
}
