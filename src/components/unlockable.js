import React from 'react'
import './unlockable.css';

const Unlockable = ({ name, price }) => (
  <div className='unlockable'>
		<div className='lock'>
			<label>{price}</label>
		</div>
		<h6>{name}</h6>
	</div>
)

export default Unlockable
