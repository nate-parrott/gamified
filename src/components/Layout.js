import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Activity from './activity'
import './Layout.css'
import { GetGlobalActivityStore } from './activityStore';
import coin from '../images/coin.png';

class Layout extends React.Component {
	render() {
		let { children } = this.props;
		return (
		  <div>
		    {/* <Helmet
		      title="Nate Parrott’s Nice and Engaging Website"
		      meta={[
		        { name: 'description', content: '' },
		        { name: 'keywords', content: '' },
		      ]}
		    />
			<Helmet>
  				<link rel="icon" type="image/png" href={coin} />
			</Helmet> */}
		    <div className='content'>
		      {children}
			<Activity activityStore={GetGlobalActivityStore()} />
		    </div>
		  </div>
		)
	}
}

export default Layout
