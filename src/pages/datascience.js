
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

        <div className='flex flex-col lg:flex-row mb-0 lg:mb-5'>
            <div className='md:basis-2/3 px-0 lg:px-2'>

                <GatsbyImage
                    image={getImage(head.frontmatter.hero_image)}
                    alt={head.frontmatter.hero_alt}
                />

            </div>

            <div className=' md:basis-1/3 flex flex-col'>
                <div className='mb-2 lg:mb-0'>
                    <p>From <span className='text-primary'>{head.frontmatter.expertise}</span></p>
                    <div className='h-10 lg:h-20'>
                        <h2 className='mt-3'>
                            <Link to={`/thoughts/${head.slug}`} className='text-3xl font-display'>
                                {head.frontmatter.title}
                            </Link>                    
                        </h2>
                    </div>
                    <p>{head.frontmatter.short}</p>
                </div>

                <div className='mt-auto'>
                    
                    <p className=''>{head.frontmatter.date}</p>
                    <hr/>

                </div>
                

            </div>


        </div>
        <br/>
        <div className='flex flex-col lg:flex-row flex-wrap inline '>
            { 
                data.allMdx.nodes.slice(1).map((node) => (

                        <article key={node.id} className='basis-1/3 pb-2 flex flex-col mb-2 px-1'>

                            <p>From <span className='text-primary'>{node.frontmatter.expertise}</span></p>

                            <GatsbyImage
                                image={getImage(node.frontmatter.hero_image)}
                                alt='test alt text.'
                            />
                            <div className='h-20 mt-2'>
                                <h2>
                                    <Link to={`/thoughts/${node.slug}`} className='text-xl font-display'>
                                        {node.frontmatter.title}
                                    </Link>
                                </h2>
                            </div>

                            <p className='mb-6'>{node.frontmatter.short}</p>

                            <div className='mt-auto'>
                                
                                <p>{node.frontmatter.date}</p>
                                <hr/>
                            </div>
                        </article>

                ))
            }
        </div>
    </Layout> 

)

}

export const query = graphql`
query datascienceThoughts {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {expertise: {eq: "Data Science"}}}
    ) {
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