import React from 'react'

interface INavButtonProps {
    href: string
    name: string
}

const NavButton: React.FC<INavButtonProps> = props => {
	const { href, name } = props
	return (
		<a className='mt-1 block px-2 py-1 text-purple-700 rounded hover:text-purple-900 sm:mt-0 sm:ml-2 hidden md:flex'
			href={href}
		>
			{name}
		</a>
	)
}

export default NavButton