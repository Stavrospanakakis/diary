import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../index'

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
			<div className='post'>
				<h1 className='post__title'>{title}</h1>
				<div className='post__html' dangerouslySetInnerHTML={{ __html: html }}></div>
				<div className='post__tags'>
					{tags.map((tag:string, index:number) => 
						<span
							className='post__tags__tag'
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