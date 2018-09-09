import React from 'react'
import './modalPlayer.css';
import { uuid } from './utils';

export class ModalItem {
	constructor(render) {
		// render: (full: bool) -> content
		this.identifier = uuid();
		this.render = render;
	}
}

export class ModalPlaylist {
	constructor(items) {
		this.identifier = uuid();
		this.items = items;
	}
}

const ModalItemView = ({ classes, item, onBack, onForward, onDismiss }) => {
	let className = (classes || []).join(' ') + ' ModalItemView';
	return (
		<div className={className}>
			<div className='content'>{ item.render() }</div>
			{onBack ? <div className='control back' onClick={onBack} key='back' /> : null}
			{onForward ? <div className='control forward' onClick={onForward} key='forward' /> : null}		
			<div className='control dismiss' onClick={onDismiss}>Dismiss</div>
		</div>
	)
}


let classForIndex = (i) => {
	if (i > 3) {
		return 'index-toofar';
	}
	return `index-${i}`;
}

export default class ModalPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { itemIndex: 0 };
	}
	componentDidUpdate(prevProps, prevState, snapshot) {
		let prevPlaylistId = prevProps.playlist ? prevProps.playlist.identifier : null;
		let newPlaylistId = this.props.playlist ? this.props.playlist.identifier : null;
		if (prevPlaylistId !== newPlaylistId && this.state.index !== 0) {
			this.setState({ itemIndex: 0 });
		}
	}
	render() {
		let {playlist} = this.props;
		let {itemIndex} = this.state;
		let items = playlist ? playlist.items : [];
		let currentItem = itemIndex < items.length ? items[itemIndex] : null;
		let itemView = currentItem ? <ModalItemView className='ModalPlayer' item={currentItem} onBack={this.back.bind(this)} onForward={this.forward.bind(this)} onDismiss={this.dismiss.bind(this)} /> : null;
		let onPlayerClick = (e) => {
			if (e.currentTarget === e.target) {
				this.dismiss();
			}
		}
		return <div className='ModalPlayer' onClick={onPlayerClick}>{itemView}</div>;
	}
	back() {
		this.advance(-1);
	}
	forward() {
		this.advance(1);
	}
	advance(i) {
		let {playlist} = this.props;
		let {itemIndex} = this.state;
		let items = playlist ? playlist.items : [];
		let newIndex = itemIndex + i;
		if (newIndex < 0 || newIndex >= items.length) {
			this.props.onDone();
		} else {
			this.setState({itemIndex: newIndex});
		}
	}
	dismiss() {
		this.props.onDone();
	}
}
