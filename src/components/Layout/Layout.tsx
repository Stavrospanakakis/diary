import React, { ReactElement } from 'react'

import '../../assets/main.css'

import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import SEO from './Seo'

interface ILayoutProps {
	children: ReactElement | Array<ReactElement>
	isSidebarVisible: boolean

}

const Layout: React.FC<ILayoutProps> = props => {
	const { children, isSidebarVisible } = props
	return (
		<div>
			<SEO {...props}/>
			<Navbar />
			<div className={isSidebarVisible? ('block md:grid md:grid-cols-3 md:gap-4 xl:container xl:mx-auto') : ('xl:container xl:mx-auto')}>
				{children}
				{
					isSidebarVisible? ( <Sidebar />) : (<></>)
				}
			</div>

		</div>
	)
}

export default Layout