import React from 'react'

interface INavButtonProps {
    href: string
    name: string
}
const NavButton: React.FC<INavButtonProps> = props => {
	const { href, name } = props
	return (
		<a className='mt-1 block px-2 py-1 text-white rounded hover:bg-gray-800 sm:mt-0 sm:ml-2 hidden md:flex' href={href}>{name}</a>
	)
}

export default NavButton