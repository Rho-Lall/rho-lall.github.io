
//import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import {Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const IndexPage = ({data}) => {

  return (
    <Layout pageTitle={'Data Savvy for Data Driven Decision Making'}>


      {
                data.allMdx.nodes.map((node) => (

                    <article key={node.id}>

                        <p>From {node.frontmatter.expertise}</p>

                        <h2>
                            <Link to={`/thoughts/${node.slug}`}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>

                        <GatsbyImage
                            image={getImage(node.frontmatter.hero_image)}
                            alt='test alt text.'
                        />

                        <p>{node.frontmatter.short}</p>
                        
                        <p>{node.frontmatter.author}</p>
                        <p>{node.frontmatter.date}</p>
                        <br/>
                    </article>
                ))
            }
      
    </Layout> 

)

}

export const query = graphql`
query thoughtList {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                expertise
                author
                short
                hero_alt
                hero_image {
                    childImageSharp {
                      gatsbyImageData
                    }
                }
            }
            id
            slug
            parent {
                ... on File {
                    id
                    name
                    modifiedTime
                }
            }
            body
        }
    }
}
`

export default IndexPage