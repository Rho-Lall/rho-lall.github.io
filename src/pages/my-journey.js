
//import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import {Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import {Helmet} from 'react-helmet'
import imagesq from "../../thoughts/media/social/business_sq.png"
import image from "../../thoughts/media/business_.png"



const JourneyPage = ({data}) => {

    const head = data.allMdx.nodes[0];
    const {author, siteUrl } = data.site.siteMetadata;   
    const description = "A data driven culture is key to success in the digital age. Learn how data driven storytelling can help you create a data driven culture and achieve your business goals."
    const seokeywords = "data driven storytelling, data driven culture"
    const site_name = siteUrl
    const urlslug = siteUrl
    const page_title = "Fostering Data Driven Culture thru Data Driven Storytelling"
    const socialimagesq = siteUrl + imagesq
    const socialimage = siteUrl + image

  return (
    <Layout pageTitle={page_title}>

        <Helmet>
            <meta property="og:title" content={page_title}/>
            <meta property="og:image" content={socialimagesq}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={urlslug}/>
            <meta property="og:site_name" content={site_name}/>
            <meta property="og:type" content="website"/>
            <meta property="og:locale" content="en_US"/>

            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta name="twitter:image" content={socialimage} />
            <meta name="twitter:creator" content="@rho_Lall"></meta>
            <meta name="twitter:title" content={page_title}/>

            <link rel="canonical" href={site_name}/>

            <meta name="title" content={page_title}/>
            <meta name="description" content={description}/>
            <meta name="keywords" content={seokeywords}/>
            <meta name="author" content={author}/>

        </Helmet>

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
                    <div className=''>
                        <h2 className='mt-3'>
                            <Link to={`/thoughts/${head.fields.slug.replace(/_/g, '-')}`} className='text-3xl font-display'>
                                {head.frontmatter.title}
                            </Link>                    
                        </h2>
                    </div>
                    <p >{head.frontmatter.short}</p>
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
                                    <Link to={`/thoughts/${node.fields.slug.replace(/_/g, '-')}`} className='text-xl font-display'>
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
query journeyThoughts {
    allMdx(
      sort: {fields: frontmatter___date, order: DESC}
      filter: {frontmatter: {expertise: {eq: "My Journey"}}}
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
        fields {
          slug
        }
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
    site {
        siteMetadata {
            author
            description
            keywords
            og {
            siteName
            twitterCreator
            }
            siteUrl
            title
        }
    }
  }
`

export default JourneyPage