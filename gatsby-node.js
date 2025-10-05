const path = require('path')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    // Get the parent file node
    const parent = getNode(node.parent)
    
    // Create slug that includes the folder structure
    const relativePath = parent.relativePath
    // Remove the .mdx extension and create the full path
    const fullSlug = relativePath.replace('.mdx', '')
    
    createNodeField({
      node,
      name: 'slug',
      value: fullSlug,
    })
  }
}