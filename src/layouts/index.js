import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Activity from '../components/activity'
import './index.css'
import { GetGlobalActivityStore } from '../components/activityStore';

class Layout extends React.Component {
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
					<Activity activityStore={GetGlobalActivityStore()} />
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