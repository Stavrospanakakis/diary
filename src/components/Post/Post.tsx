import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../index'
import '../../assets/post.css'

export const postQuery = graphql`
  query Post($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        description
        title
				path
				image
				tags
      }
      html
    }
  }
`

interface IPostProps {
    data: any
}

const Post: React.FC<IPostProps> = props => {
	const { data } = props
	const { html } = data.markdownRemark 
	const post = data.markdownRemark.frontmatter
	const { title, tags, image, description, path} = post

	return (
		<Layout
			isSidebarVisible={true}
			title={title}
			description={description}
			image={image}
			path={path}
		>
			<div className='md:col-span-2'>
				<h1 className='px-2 xl:px-0 py-4 font-bold text-purple-500 text-xl uppercase'>{title}</h1>
				<div className='px-2 xl:px-0 mx-auto' dangerouslySetInnerHTML={{ __html: html }}></div>
				<div className='px-2 xl:px-0 mx-auto mt-5'>
					{tags.map((tag:string, index:number) => 
						<span
							className='inline-block bg-gray-200 rounded-full text-sm font-semibold text-gray-700 mr-2'
							key={index}
						>
							{tag}
						</span>
					)}
				</div>
			</div>
		</Layout>
	)
}

export default Post