import React from 'react'

import NavButton from './navButton'
import NavbarData from '../../data/Navbar'

const Navbar: React.FC = () => {
	const {title, pages} = NavbarData
	return (
		<div className='bg-white w-screen shadow-lg'>
			<div className='xl:container xl:mx-auto sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 flex items-center justify-center md:justify-between px-4 py-3 sm:p-0'>
				<div className=''>
					<a href='/' className='text-purple-700 font-bold uppercase'>
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
		</div>

	)
}

export default Navbar
