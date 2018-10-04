import React from 'react'
import {ModalItem, ModalPlaylist} from '../components/modalPlayer.js';

export let coinUnlockModalItem = (onOk) => {
	let item = new ModalItem(() => {
		return <h1>HEY!</h1>
	}, 'CoinUnlockModal');
	item.borderless = true;
	return item;
}
