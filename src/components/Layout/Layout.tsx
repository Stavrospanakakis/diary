import React, { ReactElement } from 'react'
import '../../assets/main.css'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'


interface ILayoutProps {
	children: ReactElement | Array<ReactElement>
	isSidebarVisible: boolean
}

const Layout: React.FC<ILayoutProps> = props => {
	const { children, isSidebarVisible} = props
	return (
		<div className='xl:container xl:mx-auto'>
			<Navbar />
			<div className={isSidebarVisible? ('block md:grid md:grid-cols-3 md:gap-4') : ('')}>
				{children}
				{
					isSidebarVisible? ( <Sidebar />) : (<></>)
				}
			</div>

		</div>
	)
}

// Layout.propTypes = {
// 	children: PropTypes.node.isRequired
// }

export default Layout