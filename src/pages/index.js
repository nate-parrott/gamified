import React from 'react'
import Link from 'gatsby-link'
import HScroll from '../components/hscroll.js';
import Unlockable from '../components/unlockable.js';
import intro from "../images/intro.svg"
import workflow from "../images/workflow.svg"
import Trophy from '../components/trophy.js';
import ModalPlayer, {ModalItem, ModalPlaylist} from '../components/modalPlayer.js';
import { web } from '../components/playlistHelpers.js';
import { withPrefix } from 'gatsby-link'
import EarnedCoinsModal from '../components/earnedCoinsModal.js';

// tiles:
import hab from '../images/tiles/hab.svg'
import flashlight from '../images/tiles/flashlight.svg'
import zest from '../images/tiles/zest.svg'
import subway from '../images/tiles/subway.svg'
import stacks from '../images/tiles/stacks.svg'
import rwr from '../images/tiles/rwr.svg'
import babynames from '../images/tiles/babynames.svg'
import table from '../images/tiles/table.svg'
import instagrade from '../images/tiles/instagrade.svg'
import content from '../images/tiles/content.svg'

export default class IndexPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {playlist: null};
	}
	testPlaylist() {
		// let items = [0,1,2,3,4,5].map((i) => new ModalItem(() => <div className='testItem'>Page {i}</div>));
		let itemToRead = new ModalItem(() => <div className='testItem'>READ ME!</div>);
		let reward = new ModalItem(({full}) => {
			if (!full) return null;
			return <EarnedCoinsModal coins={5} title="🏆 Super Clicker" subtitle="For clicking 20 times! Keep it up!" onDismiss={() => this.setState({playlist: null})} />;
		}, 'earnedCoinsModalItem');
		let items = [itemToRead, reward];
		this.setState({playlist: new ModalPlaylist(items)});
	}
	playWithRewards(rewardId, items) {
		// TODO: rewards
		this.setState({ playlist: new ModalPlaylist(items) });
	}
	render() {
		return (
		  <div className='index-page'>
				<ModalPlayer playlist={this.state.playlist} onDone={() => this.setState({playlist: null})} />
			
				<div className='intro' onClick={this.testPlaylist.bind(this)}>
					<img className='readable-width' src={intro} alt="Nate Parrott dot com: developer, designer and gamification enthusiast." />
				</div>
				<div className='readable-width boxed-content workflow section'>
					<h3>How this site works</h3>
					<img src={workflow} alt="Consume content, earn points, get exclusive experiences!" />
				</div>
				<div className='readable-width section'>
					<h3>Learn about <span className='nowrap'>things I’ve made! <div className='tooltip'>1 point per click</div></span></h3>
					<div className='content-tiles'>
						<Tile src={hab} alt="Design and branding for a beginner-friendly hackathon" onClick={ () => this.playWithRewards('hab', [ web(withPrefix('/hab/index.html')) ]) } />
						<Tile src={flashlight} alt="A popular natural-language interface to Mac OS" onClick={ () => this.playWithRewards('flashlight', [ web(withPrefix('/flashlight/index.html')) ]) } />
						<Tile src={instagrade} alt="An app that grades paper quizzes instantly" onClick={ () => this.playWithRewards('instagrade', [ web(withPrefix('/instagrade/index.html')) ]) } />	
						<Tile src={zest} alt="A spice rack powered by computer vision" onClick={ () => this.playWithRewards('zest', [ web('http://zest.nateparrott.com/') ]) } />
					</div>
				</div>
				<div className='cashcash section'>
					<div className='bg' />
					<div className='readable-width'>
						<h3>Exclusive unlockable content!</h3>
						<HScroll>
							<Unlockable name="Download my resume" price={5} />
							<Unlockable name="Download my resume" price={5} />
							<Unlockable name="Download my resume" price={5} />
							<Unlockable name="Download my resume" price={5} />
							<Unlockable name="Download my resume" price={5} />
							<Unlockable name="Download my resume" price={5} />
							<Unlockable name="Download my resume" price={5} />
						</HScroll>
					</div>
				</div>
				<div className='readable-width section'>
					<h3>Why not <span className='nowrap'>consume more content? <div className='tooltip'>1 point per click</div></span></h3>
					<div className='content-tiles'>
						<Tile src={table} alt="An augmented-reality table prototype" onClick={ () => this.playWithRewards('table', [ web('http://table.nateparrott.com/') ]) } />
						<Tile src={subway} alt="An subway map that visualizes travel time" onClick={ () => this.playWithRewards('subway', [ web('http://subway.nateparrott.com/') ]) } />
					</div>
				</div>
				<div className='readable-width boxed-content section'>
					<h3>Sharing is caring!</h3>
					<div className='two-pane'>
						<div className='hides-on-phone'>
							<div className='free-points-graphic' alt="Free points for sharing your data!" />
						</div>
						<form className='trade-data'>
							<input name="email" type="email" placeholder="Enter your email" />
							<input type="submit" value="Earn 5 free points!" />
						</form>
					</div>
				</div>
				<div className='trophies section'>
					<div className='bg' />
					<div className='readable-width'>
						<h3>Why not earn some trophies??</h3>
						<HScroll>
							<Trophy emoji="🌈" name="Reading Rainbow" desc="Read 5 pieces of content!" value={10} />
							<Trophy emoji="🕹" name="Clicker Clique" desc="Click 20 times anywhere!" value={5} unlocked={true} />
							<Trophy emoji="🤞" name="Big Click Energy" desc="Click 100 times anywhere!" value={5} />
							<Trophy emoji="👀" name="Eyewitness" desc="Follow me on Instagram!" value={5} />
							<Trophy emoji="👻" name="Toasty Ghost" desc="Add me on the Snapchat!" value={7} />
							<Trophy emoji="🐮" name="Cash Cow" desc="Send me $3 on Square Cash" value={7} action={() => alert('test')} />
						</HScroll>
					</div>
				</div>
				<div className='readable-width section'>
					<h3>There’s so <span className='nowrap'>much rewarding content!<div className='tooltip'>1 point per click</div></span></h3>
					<div className='content-tiles'>
						<Tile src={content} alt="An app for creating exciting animations" onClick={ () => this.playWithRewards('content', [ web('http://content.nateparrott.com/') ]) } />
						<Tile src={stacks} alt="An app for making your own social network" />
						<Tile src={rwr} alt="An online vocabulary workbook based on hip-hop lyrics" onClick={ () => this.playWithRewards('rwr', [ web('https://www.rhymeswithreason.co/') ]) } />
						<Tile src={babynames} alt="A neural network for generating new baby names" onClick={ () => this.playWithRewards('names', [ web(withPrefix('/names/index.html')) ]) } />
					</div>
				</div>
				<div className='readable-width boxed-content section'>
					<h3>Sharing is caring!</h3>
					<div className='two-pane'>
						<div className='hides-on-phone'>
							<div className='free-points-graphic' alt="Free points for sharing your data!" />
						</div>
						<form className='trade-data'>
							<input name="name" type="text" placeholder="What’s your name?" />
							<input type="submit" value="Earn 5 free points!" />
						</form>
					</div>
				</div>
		  </div>
		)
	}
}

let Tile = ({src, alt, onClick}) => (
	<div className='tile hover-offset' style={{backgroundImage: `url(${src})`}} alt={alt} onClick={onClick} />
)
