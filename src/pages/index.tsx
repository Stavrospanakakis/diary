import React from 'react'
import { graphql} from 'gatsby'
import { Layout, PostPreview, SEO } from '../components/index'

export const postsPreview = graphql`
query AllPostsPreview {
	allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
      node {
        frontmatter {
					description
					date
          image
          path
          tags
          title
        }
      }
    }
  }
}
`

interface ILandpageProps {
    data: any
}

const Landpage: React.FC<ILandpageProps> = props => {
	const { data } = props
	const posts = data.allMarkdownRemark.edges
	
	return (
		<Layout
			isVisible={false}
			description='Writing my personal thoughts and experiances about Web Development'
			image='profile.jpg'
			path=''
		>
			<SEO />
			<h1 className='text-3xl md:text-5xl text-center mt-5'>Latest Posts</h1>
			<div className='flex flex-wrap items-center justify-around' id='posts'>
				{ 
					posts.slice(0,6).map(post => 
						<PostPreview
							image={post.node.frontmatter.image}
							title={post.node.frontmatter.title}
							description={post.node.frontmatter.description}
							key={`${post.node.frontmatter.date}__${post.node.frontmatter.title}`}
							path={post.node.frontmatter.path}
							tags={post.node.frontmatter.tags}
						/>   
					
					)}   
			</div>
		</Layout>

	)
}


export default Landpage