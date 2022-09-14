
//import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import {Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
//import Hamburger from '../components/hamburger'
import {Helmet} from 'react-helmet'


// MVP LIST
// DONE     Create site map
// DONE     Did not find a plugin that scrapes mdx and adds links programatically. Must be done manually.
// WORKING  Fix Social Share functionality with Open Graph: https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet
// create a search feature to find content.
// create an MVP chart component that reads data from an API.
// create an mdx thought for each of these key words, (15 in total, 500 ish words each)

// BUSINESS KEYWORDS
// DONE     business intelligence reporting          1k - 10k
// data driven decision making              1k - 10k
// data driven decisions                                100 - 1k
// using data to make decisions                         100 -1k

// DATA SCIENCE KEYWORDS
// data science programming                 1k - 10k   
// datascientist                            1k - 10k
// job of data scientist                    1k - 10k
// data driven insights                                 100 - 1k
// data driven solutions                                100 - 1k

// DEVELOPMENT KEYWORDS
// bi developer                             1k - 10k
// data driven development                              100 - 1k

// DESIGN KEYWORDS
// data driven marketing                    1k - 10k
// data driven organization                             100 -1k

// MY JOURNEY KEYWORDS
// data driven storytelling                             100 - 1k
// data driven culture                                  100 - 1k

// EXPERIENCE
// no experience data analyst jobs                      100 - 1k
// entry level data analyst jobs no experience          100 - 1k
// data analyst no experience                           100 - 1k

// LOOKER
// looker bi                                            100 - 1k
// looker tableau                                       100 - 1k
// snowflake looker                                                 10 - 100
// dbt looker                                                       10 - 100
// looker view                                                      10 - 100
// zendesk looker                                                   10 - 100
// shopify looker                                                   10 - 100




const IndexPage = ({data}) => {

    const head = data.allMdx.nodes[0];

  return (
    <Layout pageTitle={'Data Savvy for Data Driven Decision Making'}>
        <Helmet>
            <meta name="description" content="Thoughts on data driven decision making for data savvy managers and leaders."/>
            <meta name="keywords" content="Data Savvy Manager,Data Driven Decision Making"/>
            <meta name="author" content="Rho Lall"/>
            <meta property="og:type" content="website"/>
            <meta property="og:description" content="Thoughts on data driven decision making for data savvy managers and leaders."/>
            <meta property="og:image" content="thoughts/media/data_savvy_.png"/>
            <meta property="og:locale" content="en_US"/>
            <meta property="og:url" content="https://rho-lall.github.io"/>
            <link rel="canonical" href="https://rho-lall.github.io"/>
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
                                    <Link to={`/thoughts/${node.slug}`} className='text-lg font-display'>
                                        {node.frontmatter.title}
                                    </Link>
                                </h2>
                            </div>

                            <p className='mb-6 px-2 text-sm'>{node.frontmatter.short}</p>

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