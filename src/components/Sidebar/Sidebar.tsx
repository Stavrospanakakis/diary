import React from 'react'
import SidebarData from '../../data/Sidebar'

const Sidebar: React.FC = () => {
    const {profileImage, fullName, property, about, socialMedia} = SidebarData
    const imgSrc = require('../../images/' + profileImage)
    return (
        <div className='sidebar'>

            <img className='sidebar__profileImage' src={imgSrc} alt={fullName}/>
            <div className='sidebar__fullName'>{fullName}</div>
            <div className='sidebar__property'>{property}</div>
            <div className='sidebar__about'>About</div>
            <div className='sidebar__info'>{about}</div>
            <div className='sidebar__find'>Find me on:</div>
            {socialMedia.map(social => 
            <div className='sidebar__social-media'>
               <i className={social.icon}></i><a className='sidebar__social-media__social'href={social.link}>{social.name}</a>    
            </div>
            )}
        </div>
    )
}

export default Sidebar