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
	let widthOfColumnFraction = 0.6;
	let widthPercent = widthOfColumnFraction / count * 100;
	
	let coins = [];
	for (let i=0; i<count; i++) {
		let centerXPercent = (i + 0.5) / count * 100;
		coins.push(<FallingCoin key={i} widthPercent={widthPercent} centerXPercent={centerXPercent} />);
	}
	return (
		<div className='FallingCoins'>{coins}</div>
	)
}

const randAngle = () => Math.random() * Math.PI * 2;
const randSign = () => Math.random() < 0.5 ? -1 : 1;

class FallingCoin extends React.Component {
	constructor(props) {
		super(props);
		this.startAngle = randAngle();
		this.endAngle = this.startAngle + Math.PI * 2 * randSign();
		this.state = {angle: this.startAngle, bottom: '100%'};
	}
	componentDidMount() {
		let delaySeconds = Math.random() * 0.5 + 0.2;
		setTimeout(() => {
			this.setState({angle: this.endAngle, bottom: '-50%'});
		}, delaySeconds * 1000);
	}
	render() {
		let { widthPercent, centerXPercent } = this.props;
		let {angle, bottom} = this.state;
		let style = {
			left: (centerXPercent) + '%',
			width: widthPercent + '%',
			marginLeft: -widthPercent / 2 + '%',
			transform: 'rotate(' + angle + 'rad)',
			bottom: bottom
		};
		return <img src={coin} style={style} />
	}
}
