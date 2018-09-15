import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Activity from '../components/activity'
import './index.css'
import ActivityStore, { LocalActivityStorage } from '../components/activityStore';

class Layout extends React.Component {
	constructor(props) {
		super(props);
		this.activityStore = new ActivityStore(new LocalActivityStorage('activity'));
		
		setTimeout(() => {
			this.activityStore.addMessage({
				from: 'admin',
				text: 'hello!'
			});
			this.activityStore.unlockAward({
				id: 'myAward',
				activityText: "you got an award",
				name: "My award!",
				coins: 11
			})
		}, 1000);
	}
	render() {
		let { data, children } = this.props;
		return (
		  <div>
		    <Helmet
		      title={data.site.siteMetadata.title}
		      meta={[
		        { name: 'description', content: '' },
		        { name: 'keywords', content: '' },
		      ]}
		    />
		    <div className='content'>
		      {children()}
					<Activity activityStore={this.activityStore} />
		    </div>
		  </div>
		)
	}
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
