import React from 'react'

interface INavButtonProps {
    href: string
    name: string
}
const NavButton: React.FC<INavButtonProps> = props => {
	const { href, name } = props
	return (
		<a href={href}>{name}</a>
	)
}

export default NavButton