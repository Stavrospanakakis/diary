import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/main.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'


const Layout: React.FC = props => {
	const  { children } = props
	return (
		<div className='container mx-auto'>
			<Navbar />
			<div className=''>
				<Sidebar />
				<main>{children}</main>
			</div>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout