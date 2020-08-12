import React from 'react'
import { Link } from 'gatsby'

import '../../assets/Banner/banner.css'

const Banner: React.FC = () => {
	return (
		<div className="banner">
			<div className='hero-area'>
				<div className="hero-text ">
					<h1 className='text-xl sm:text-2xl md:text-6xl text-white text-center flex justify-center align-center'>I am Stavros Panakakis</h1>
					<h1 className='text-md sm:text-lg md:text-2xl text-white text-center flex justify-center align-center'>Welcome to my personal diary</h1>
					<Link className='flex justify-center align-center mt-5' to='#posts'>
						<button className='text-xs sm:text-sm md:text-lg text-white font-semibold hover:bg-purple-500 py-2 px-2 border border-purple-500 hover:border-transparent rounded'>
							Latest Posts
						</button>
					</Link>
				</div>
			</div>
		</div>

	)
}

export default Banner