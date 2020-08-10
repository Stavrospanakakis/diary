import React from 'react'
import SidebarData from '../../data/Sidebar'

const Sidebar: React.FC = () => {
	const {fullName, profileImage, property, about, socialMedia} = SidebarData
    
	return (
		<div style={{ width:'350px'}} className='max-w-sm rounded overflow-hidden border-solid fixed bg-white shadow-lg mt-10'>

			<img 
				className='w-5/6 h-5/6 rounded-full mx-auto mt-5 ' 
				src={profileImage} 
				alt={fullName}
			/>

			<div className='px-6 py-4 font-bold text-purple-500 text-xl '>{fullName}</div>
			<div className='px-6 text-md'>{property}</div>
			<div className='px-6 py-4 text-gray-700 text-base text-justify'>{about}</div>

			<hr className='px-6 py-2'/>
			<div className='flex items-stretch text-center '>

				{socialMedia.map((social, index) => 

					<a key={index} href={social.link} className='flex-1 text-gray-700 w-8 h-8'>
						<i className={social.icon}></i>
					</a>   
				)}
			</div>

		</div>
	)
}

export default Sidebar
