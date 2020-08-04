const path = require('path')

// Creates a page for each blog post using the "Post" Component
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const postTemplate = path.resolve('src/components/Post/Post.tsx')
    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return  Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      })
    })
  })
}