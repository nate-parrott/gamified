import React from 'react'
import ModalPlayer, {ModalItem, ModalPlaylist} from './modalPlayer.js';

const windowGlobal = typeof window !== 'undefined' && window;

let shouldOpenFramesInNewTab = () => {
	if (!windowGlobal) return false;
	let iOS = /iPad|iPhone|iPod/.test(windowGlobal.navigator.userAgent) && !windowGlobal.MSStream;
	return iOS || windowGlobal.innerWidth < 500;
}

export let web = (url) => {
	if (shouldOpenFramesInNewTab()) {
		windowGlobal.open(url, '_blank');
		return null;
	}
	
	return new ModalItem(({ full }) => {
		if (!full) {
			return null;
		}
		return <iframe src={url} />;
	}, 'web');
}
