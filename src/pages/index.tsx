import React from 'react'
import { graphql} from 'gatsby'
import { Layout, PostPreview } from '../components/index'

export const postsPreview = graphql`
query AllPostsPreview {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          description
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
	return (
		<Layout
			isSidebarVisible={false}
			description='Writing my personal thoughts and experiances about Web Development'
			image='image.jpg'
			path=''
		>
			<div className='flex flex-wrap items-center justify-around'>
				{ 
					data.allMarkdownRemark.edges.map(post => 
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