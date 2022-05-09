import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'

const BlogPost = ({data}) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>

      <h1 className='heading'>{data.mdx.frontmatter.title}</h1>
      
      <p>Posted: {data.mdx.frontmatter.date}</p>
    
      <GatsbyImage
        image={image}
        alt="Alt text can com from frontmatter."
      />

      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>      
  
    </Layout>
  )
}

export const query = graphql`
query blogPost($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
  }
}
`

export default BlogPost