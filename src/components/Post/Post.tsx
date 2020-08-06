import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../Layout/Layout'

export const postQuery = graphql`
  query Post($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        date
        title
        path
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
	const post = data.markdownRemark.frontmatter
	const { title, date } = post
	return (
		<Layout>
			<div className='post'>
				<h1 className='post__title'>{title}</h1>
				<p className='post__date'>{date}</p>
				<div dangerouslySetInnerHTML={{__html: post.html}}></div>
			</div>
           
		</Layout>
	)
}

export default Post