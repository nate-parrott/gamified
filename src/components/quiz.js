import React from 'react'
import { shuffle } from './utils.js';
import './quiz.css';

let questions = [
	{
		id: 'middlename',
		q: 'What is my middle name?',
		correct: 'Plattus',
		incorrect: ['Percival', 'Penzance', 'Petrol']
	},
	{
		id: 'squares',
		q: 'Which company have I never interned at?',
		correct: 'Square Enix',
		incorrect: ['Squarespace', 'Square', 'Foursquare']
	},
	{
		id: 'born',
		q: 'Where was I born?',
		correct: 'Mt. Sinai Hospital',
		incorrect: ['Methodist Hospital', 'The USS Intrepid', 'Berlin']
	}
];

/*
	id: 'myAward',
	name: "My Award!",
	coins: 5,
	activityText: "You unlocked a cool award!",
	suppressDefaultNotification: false,
	category: 'content'
*/

for (let q of questions) {
	q.correctAward = {
		id: `quiz-${q.id}`,
		name: "Quiz Question",
		coins: 10,
		activityText: '10 coins for answering a quiz question right!',
		category: 'quiz'
	}
	q.incorrectAward = {
		id: `quiz-${q.id}`,
		name: "Quiz Question",
		coins: 1,
		activityText: 'You answered a quiz question wrong! 1 coin for trying, though.',
		category: 'quiz'
	}
	q.options = [q.correct, ...q.incorrect];
	shuffle(q.options);
}

let QuizCell = ({ title, subtitle, options, correctOption, selectedOption, onSelectOption, nextButton }) => {
	if (!onSelectOption) onSelectOption = (_) => {}
	return (
		<div className={'QuizCell ' + (selectedOption ? 'answered' : 'unanswered')}>
			<div className='q'>
				<h4>{title}</h4>
				<p>{subtitle}</p>
			</div>
			<div className='right-pane'>
				<div className='options'>
					{ options.map((option, i) => {
						let width = 60 + (1 - i / options.length) * 40;
						let classNames = [];
						if (option === correctOption) classNames.push('correct');
						if (option === selectedOption) classNames.push('selected');
						return <div onClick={() => onSelectOption(option)} className={classNames.join(' ')} key={i}><div>{option}</div></div>;
					}) }
				</div>
				{ nextButton }
			</div>
		</div>
	)
}

class QuizContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentQuestionId: null,
			selectedOption: null
		};
	}
	componentDidMount() {
		this.advanceQuestion();
	}
	advanceQuestion() {
		this.setState({ currentQuestionId: this.getNextQuestion(), selectedOption: null }); 
	}
	getNextQuestion() {
		let { activityStore } = this.props;
		let unanswered = questions.filter((q) => {
			return !activityStore.hasAward(q.correctAward.id);
		});
		return unanswered.length ? unanswered[0].id : null;
	}
	render() {
		let { activityStore } = this.props;
		let {currentQuestionId, selectedOption} = this.state;
		if (!currentQuestionId) {
			return <QuizCell title="No more questions!" subtitle="Come back later, maybe?" options={[]} />;
		}
		let q = questions.filter((q) => q.id === currentQuestionId)[0];
		let onSelectOption = null;
		let onNext = null;
		if (selectedOption) {
			onNext = () => this.advanceQuestion();
		} else {
			onSelectOption = (option) => {
				activityStore.unlockAward( (option === q.correct) ? q.correctAward : q.incorrectAward);
				this.setState({ selectedOption: option });
			}
		}
		let nextButton = <div className={ onNext ? 'next' : 'next disabled' } onClick={ onNext }>Next</div>;
		return <QuizCell 
						title={ selectedOption ? (selectedOption === q.correct ? 'Correct!' : 'Incorrect!') : 'Question:' }
						subtitle={ q.q }
						options={ q.options }
						selectedOption={selectedOption}
						correctOption={ selectedOption ? q.correct : null }
						onSelectOption={onSelectOption} nextButton={nextButton} />;
	}
}

export default class QuizSection extends React.Component {
	render() {
		let { activityStore } = this.props;
		return (
			<div className='readable-width boxed-content section'>
				<h3>Quiz!</h3>
				<QuizContent activityStore={activityStore} />
			</div>
		)
	}
}
