import React from 'react'
import { graphql} from "gatsby"
import { Layout, PostPreview } from '../components'

export const postsPreview = graphql`
query AllPostsPreview {
    allMarkdownRemark {
        edges {
            node {
                frontmatter {
                    date
                    title
                    description
                    path
                }
            }
        }
    }
}
`

interface ILandpageProps {
    data: any
}

const App: React.FC<ILandpageProps> = props => {
    const { data } = props
    return (
        <Layout>
            <h1>Blog</h1>
            { 
                data.allMarkdownRemark.edges.map(post => 
                    
                    <PostPreview
                        title={post.node.frontmatter.title}
                        date={post.node.frontmatter.date}
                        description={post.node.frontmatter.description}
                        key={`${post.node.frontmatter.date}__${post.node.frontmatter.title}`}
                        path={post.node.frontmatter.path}
                    />   
                )
            }   
        </Layout>
    )
}


export default App