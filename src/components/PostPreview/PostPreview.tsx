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
		<div className='post-preview'>
			<img
				className='post-preview__image'
				src={image}
				alt={title}
			/>
			
			<h3 className='post-preview__title'>{title}</h3>
			<p className='post-preview__description'>{description}</p>

			<div className='post-preview__tags'>
				{tags.map((tag, index) => 
					<span
						className='post-preview__tags__tag'
						key={index}
					>
						{tag}
					</span>
				)}
			</div>
			
			<Link
				className='post-preview__read-more__link'
				to={path}
			>
				<button className='post-preview__read-more'>Read More</button>
			</Link>
		</div>
	)
}

export default PostPreview