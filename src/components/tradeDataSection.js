import React from 'react'

const coins = 7;

export let TradeEmailDataSection = ({activityStore}) => {
	let activityTextGenerator = (value) => `${value}? Really? Whatever. Here’s ${coins} coins. 🙃`;
	return <TradeDataSection formFieldType="email" awardId="tradeEmailData" placeholder="What’s your email?" activityTextGenerator={activityTextGenerator} activityStore={activityStore} />
}

export let TradeNameDataSection = ({activityStore}) => {
	let activityTextGenerator = (value) => `Nice to meet you, ${value}! ${coins} coins for the data. 💸🤑`;
	return <TradeDataSection formFieldType="text" awardId="tradeNameData" placeholder="What’s your name?" activityTextGenerator={activityTextGenerator} activityStore={activityStore} />;
}

let TradeDataSection = ({activityStore, header, placeholder, formFieldType, activityTextGenerator, awardId}) => {
	if (activityStore.hasAward(awardId)) return null;
	
	let onSubmit = e => {
		e.preventDefault();
		let value = e.target.elements.namedItem("value").value;
		activityStore.unlockAward({
			id: awardId,
			coins: coins,
			activityText: activityTextGenerator(value),
			suppressDefaultNotification: false
		})
	}
	
	return (
		<div className='readable-width boxed-content section'>
			<h3>Sharing is caring!</h3>
			<div className='two-pane'>
				<div className='hides-on-phone'>
					<div className="free-points-graphic" alt='Free coins for sharing your data!' />
				</div>
				<form className='trade-data' onSubmit={onSubmit}>
					<input name="value" type={ formFieldType } placeholder={ placeholder } />
					<input type="submit" value={`Earn ${coins} free coins!`} />
				</form>
			</div>
		</div>
	)
}

export default TradeDataSection;

