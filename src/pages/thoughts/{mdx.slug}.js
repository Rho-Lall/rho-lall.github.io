import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {Helmet} from 'react-helmet'

const BlogPost = ({data}) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
        <Helmet>
          <meta name="description" content={data.mdx.frontmatter.short}/>
          <meta name="keywords" content={data.mdx.frontmatter.keywords}/>
          <meta name="author" content="Rho Lall"/>
          <meta property="og:type" content="website"/>
          <meta property="og:description" content={data.mdx.frontmatter.short}/>
          <meta property="og:image" content={image}/>
          <meta property="og:locale" content="en_US"/>
          <meta property="og:url" content="https://rho-lall.github.io"/>
          <link rel="canonical" href="https://rho-lall.github.io"/>
      </Helmet>

      <GatsbyImage
        image={image}
        alt="Alt text can com from frontmatter."
      />

      <h1 className='heading'>{data.mdx.frontmatter.title}</h1>
      
      <p className='heading-posted mb-10'>Posted: {data.mdx.frontmatter.date}</p>
    
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>    

      <div>
                <p className='my-20'>(c) Copywright {data.mdx.frontmatter.date} by Rho Lall, rho-lall.github.io</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
query blogPost($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      short
      keywords
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