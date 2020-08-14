import React from 'react'
import { Link } from 'gatsby'

interface IPostPreviewProps {
		image: string
    title: string
    description: string
		path: string
		tags: string[]
}

const PostPreview: React.FC<IPostPreviewProps> = props => {
	const { image, title, description, path, tags } = props
	return (
		<div className='max-w-sm rounded overflow-hidden shadow-lg mt-10'>
			<img
				className='post-preview__image'
				src={image}
				alt={title}
			/>
			
			<h3 className='px-6 py-4 font-bold text-purple-500 text-xl uppercase'>{title}</h3>
			<hr className='py-2'/>
			<div className='px-6 mx-auto'>
				{tags.map((tag, index) => 
					<span
						className='inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2'
						key={index}
					>
						{tag}
					</span>
				)}
			</div>
			<p className='px-6 py-4 text-gray-700 text-base text-justify'>{description}</p>

			
			
			<Link
				className='max-w-sm px-4 py-4 float-right'
				to={path}
			>
				<button className='bg-transparent hover:bg-purple-500 text-purple-900 font-semibold hover:text-white py-2 px-2 border border-purple-500 hover:border-transparent rounded'>Read More</button>
			</Link>
		</div>
	)
}

export default PostPreview