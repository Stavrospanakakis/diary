import React from 'react'
import { Link } from "gatsby";

interface INavButtonProps {
    href: string
    name: string
}
const NavButton: React.FC<INavButtonProps> = props => {
    const { href, name } = props
    return (
        <li className='navbar__ul__li'>
            <Link className='navbar__ul__li__link' activeClassName="navbar__ul__li__link__active" to={href}>{name}</Link>
        </li>
    )
}

export default NavButton