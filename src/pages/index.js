
//import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import {Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'



const IndexPage = ({data}) => {

    const head = data.allMdx.nodes[0];

  return (
    <Layout pageTitle={'Data Savvy for Data Driven Decision Making'}>

        <div className='flex flex-row'>
            <div className='basis-2/3 px-2'>

                <GatsbyImage
                    image={getImage(head.frontmatter.hero_image)}
                    alt={head.frontmatter.hero_alt}
                />

            </div>

            <div className='basis-1/3 flex flex-col'>
                <div>
                    <p>From <span className='text-primary'>{head.frontmatter.expertise}</span></p>
                    <h2 className='text-xl'>
                        <Link to={`/thoughts/${head.slug}`} className='text-xl'>
                            {head.frontmatter.title}
                        </Link>                    
                    </h2>
                    <br/>
                    <p>{head.frontmatter.short}</p>
                </div>

                <div className='mt-auto'>
                    <hr/>
                    <p className=''>{head.frontmatter.date}</p>
                    <p className=''>{head.frontmatter.author}</p>
                </div>
                

            </div>


        </div>
        <br/>
        <div className='flex flex-row flex-wrap inline '>
            { 
                data.allMdx.nodes.slice(1).map((node) => (

                        <article key={node.id} className='basis-1/3 px-2 pb-2 flex flex-col'>

                            <p>From <span className='text-primary'>{node.frontmatter.expertise}</span></p>

                            <h2>
                                <Link to={`/thoughts/${node.slug}`} className='text-xl'>
                                    {node.frontmatter.title}
                                </Link>
                            </h2>

                            <GatsbyImage
                                image={getImage(node.frontmatter.hero_image)}
                                alt='test alt text.'
                            />

                            <p>{node.frontmatter.short}</p>

                            <div className='mt-auto'>
                                <hr/>
                                <p>{node.frontmatter.date}</p>
                                <p>{node.frontmatter.author}</p>
                            </div>
                        </article>

                ))
            }
        </div>
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