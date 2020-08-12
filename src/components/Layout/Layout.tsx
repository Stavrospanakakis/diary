import React, { ReactElement } from 'react'

import '../../assets/main.css'

import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import SEO from '../SEO/Seo'
import Footer from '../Footer/Footer'
import Banner from '../Banner/Banner'

interface ILayoutProps {
	children: ReactElement | Array<ReactElement>
	isVisible: boolean

}

const Layout: React.FC<ILayoutProps> = props => {
	const { children, isVisible } = props
	return (
		<>
			<SEO {...props}/>
			<Navbar />
			{ !isVisible? (<Banner />) : (<></>)}
			<div className={isVisible? ('block md:grid md:grid-cols-3 md:gap-4 xl:container xl:mx-auto') : ('xl:container xl:mx-auto')}>
				{children}
				{
					isVisible? ( <Sidebar />) : (<></>)
				}
			</div>
			<Footer />
		</>
	)
}

export default Layout