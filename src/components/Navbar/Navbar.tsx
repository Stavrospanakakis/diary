import React from 'react'

import NavButton from './navButton'
import NavbarData from '../../data/Navbar'

const Navbar: React.FC = () => {
	const {title, pages} = NavbarData
	return (
		<div className='bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 flex items-center justify-center md:justify-between px-4 py-3 sm:p-0'>
			<div className=''>
				<a href='/' className='text-white font-bold uppercase'>
					{title}
				</a>
			</div>
			<div className='px-2 pt-2 pb-4 sm:flex sm:p-0'>
				{pages.map((page, index) =>
					<NavButton
						key={index}
						href={page.href}
						name={page.name}
					/>
				)}
			</div>
		</div>
	)
}

export default Navbar
