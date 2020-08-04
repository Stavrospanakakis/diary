import React from 'react'
import NavButton from './navButton'

const Navbar: React.FC = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar__ul'>
                <NavButton 
                    href='/'
                    name='Home'
                />
            </ul>
        </nav>
    )
}

export default Navbar