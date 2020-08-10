import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../index'
import '../../assets/post.css'

export const postQuery = graphql`
  query Post($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        date
        title
				path
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
	const { title, date, tags } = post
	return (
		<Layout>
			<div style={{ marginLeft:'380px'}} className='post'>
				<h1 className='px-6 py-4 font-bold text-purple-500 text-xl uppercase'>{title}</h1>
				<div className='px-6 mx-auto' dangerouslySetInnerHTML={{ __html: html }}></div>
				<div className='px-6 mx-auto mt-5'>
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