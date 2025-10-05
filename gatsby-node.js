const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    // Get the parent file node
    const parent = getNode(node.parent)
    
    // Extract just the filename without the folder structure
    const filename = path.basename(parent.relativePath, '.mdx')
    
    // Create a custom slug field that ignores the folder structure
    createNodeField({
      node,
      name: 'slug',
      value: filename,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Query for all MDX files
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX files', result.errors)
    return
  }

  // Create pages for each MDX file
  const posts = result.data.allMdx.nodes
  posts.forEach((post) => {
    createPage({
      path: `/thoughts/${post.fields.slug}/`,
      component: `${path.resolve('./src/pages/thoughts/{mdx.slug}.js')}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
      },
    })
  })
}