import React from 'react'
import PropTypes from 'prop-types'
import '../../scss/base.scss'
import Sidebar from '../Sidebar/Sidebar'


const Layout: React.FC = props => {
	const {children} = props
	return (
		<>
			<Sidebar />
			<main>{children}</main>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout