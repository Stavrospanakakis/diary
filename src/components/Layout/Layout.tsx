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
			<div className='block md:grid md:grid-cols-3 md:gap-4'>
				{children}
				{
					isSidebarVisible ?( <Sidebar />) : (<></>)
				}
			</div>

		</div>
	)
}

Layout.propTypes = {
	isSidebarVisible: Boolean ,
	children: PropTypes.node.isRequired
}

export default Layout