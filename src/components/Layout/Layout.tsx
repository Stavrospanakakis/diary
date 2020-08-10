import React from 'react'
import PropTypes from 'prop-types'
import '../../assets/main.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'


const Layout: React.FC = props => {
	const  { children, isSidebarVisible } = props
	return (
		<div className='xl:container xl:mx-auto'>
			<Navbar />
			{
				isSidebarVisible ?( <Sidebar />) : (<></>)
			}
			<main>{children}</main>
		</div>
	)
}

Layout.propTypes = {
	isSidebarVisible: Boolean ,
	children: PropTypes.node.isRequired
}

export default Layout