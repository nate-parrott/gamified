import React from 'react'
import ModalPlayer, {ModalItem, ModalPlaylist} from './modalPlayer.js';

export let web = (url) => {
	return new ModalItem(({ full }) => {
		if (!full) {
			return null;
		}
		return <iframe src={url} />;
	}, 'web');
}
