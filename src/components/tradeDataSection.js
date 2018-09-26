import React from 'react'

const coins = 7;

export let TradeEmailDataSection = ({activityStore}) => {
	let activityTextGenerator = (value) => `Thanks, ${value}! Here’s ${coins} coins. 🙃`;
	return <TradeDataSection formFieldType="email" awardId="tradeEmailData" placeholder="What’s your email?" activityTextGenerator={activityTextGenerator} activityStore={activityStore} valueKey="email" />
}

export let TradeNameDataSection = ({activityStore}) => {
	let activityTextGenerator = (value) => `Nice to meet you, ${value}! ${coins} coins for the data. 💸🤑`;
	return <TradeDataSection formFieldType="text" awardId="tradeNameData" placeholder="What’s your name?" activityTextGenerator={activityTextGenerator} activityStore={activityStore} valueKey="name" />;
}

let TradeDataSection = ({activityStore, header, placeholder, formFieldType, activityTextGenerator, awardId, valueKey}) => {
	let form = null;
	if (activityStore.hasAward(awardId)) {
		// form has already been filled out:
		form = (
			<div className='data-collected'>
				<h4>Data collected</h4>
				<div className='data'>{ activityStore.values[valueKey] }</div>
				<h4>Thanks! Your data is safe with me. 🙊</h4>
			</div>
		);
	} else {
		let onSubmit = e => {
			e.preventDefault();
			let value = e.target.elements.namedItem("value").value;
			activityStore.unlockAward({
				id: awardId,
				coins: coins,
				activityText: activityTextGenerator(value),
				suppressDefaultNotification: false
			});
			activityStore.values[valueKey] = value;
		}
		form = (
				<form className='trade-data' onSubmit={onSubmit}>
					<input name="value" type={ formFieldType } placeholder={ placeholder } />
					<input type="submit" value={`Earn ${coins} free coins!`} />
				</form>
		);
	}
	
	return (
		<div className='readable-width boxed-content section'>
			<h3>Sharing is caring!</h3>
			<div className='two-pane'>
				<div className='hides-on-phone'>
					<div className="free-points-graphic" alt='Free coins for sharing your data!' />
				</div>
				{ form }
			</div>
		</div>
	)
}

export default TradeDataSection;

