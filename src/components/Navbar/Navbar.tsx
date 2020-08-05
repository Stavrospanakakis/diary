import React from 'react'

import NavButton from './navButton'
import NavbarData from '../../data/Navbar'

const Navbar: React.FC = () => {
    const {title, pages} = NavbarData
    return (
        <div className="navbar">
            <div className="navbar__header">
                <a href='/' className="navbar__header__title">
                    {title}
                </a>
            </div>
            <div className="navbar__links">
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
