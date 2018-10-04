import React from 'react'
import './modalPlayer.css';
import { uuid } from './utils';

export class ModalItem {
	constructor(render, itemClass) {
		// render: ({ full: bool, onNext: () - () }) -> content
		this.identifier = uuid();
		this.render = render;
		this.itemClass = itemClass;
		this.borderless = false;
	}
}

export class ModalPlaylist {
	constructor(items) {
		this.identifier = uuid();
		this.items = items;
	}
}

const ModalItemView = ({ item, onBack, onForward, onDismiss, offset }) => {
	let borderless = item.borderless;
	let className = `ModalItemView offset_${offset} ${item.itemClass || ''}`;
	if (borderless) className += ' borderless';
	
	let content = item.render({ full: (offset === 0), onForward });
	return (
		<div className={className}>
			<div className='content'>{ content }</div>
			{onBack && !borderless ? <div className='control back' onClick={onBack} key='back' /> : null}
			{onForward && !borderless ? <div className='control forward' onClick={onForward} key='forward' /> : null}		
		</div>
	)
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
		
		let offsets = [0, 1, 2];
		let itemViews = offsets.map((offset) => {
			let idx = itemIndex + offset;
			if (idx < 0 || idx >= items.length) {
				return null;
			}
			let actionProps = {};
			if (offset === 0) {
				actionProps = {
					onBack: this.back.bind(this),
					onForward: this.forward.bind(this),
					onDismiss: this.dismiss.bind(this)
				};
			}
			return <ModalItemView key={idx} className='ModalPlayer' item={items[idx]} offset={offset} {...actionProps} />;
		});
		
		let dismiss = (e) => {
			if (e.currentTarget === e.target) {
				this.dismiss();
			}
		}
		return <div className='ModalPlayer' onClick={dismiss}>{itemViews}</div>;
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
