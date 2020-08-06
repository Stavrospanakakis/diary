import React from 'react'
import SidebarData from '../../data/Sidebar'

const Sidebar: React.FC = () => {
	const {fullName, profileImage, property, about, socialMedia} = SidebarData
    
	return (
		<div className='sidebar'>
			<div className='sidebar__header'>About me</div>

			<img 
				className='sidebar__profileImage' 
				src={profileImage} 
				alt={fullName}
			/>

			<div className='sidebar__fullName'>{fullName}</div>
			<div className='sidebar__property'>{property}</div>
			<div className='sidebar__info'>{about}</div>

			<div className='sidebar__header'>Contact me</div>
			{socialMedia.map((social, index) => 
				<div key={index} className='sidebar__social-media'>

					<a href={social.link} className='sidebar__social-media__social'>
						<i className={social.icon}></i>
					</a>   
				</div>
			)}
		</div>
	)
}

export default Sidebar