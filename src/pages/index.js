import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import imagesq1 from "../images/media/social/business_sq.png"
import imagesq2 from "../images/media/social/business_sq_4.png"
import imagesq3 from "../images/media/social/business_sq_5.png"
import image from "../images/media/business_.png"
import faviconImage from "/src/images/gliph.png"

// MVP LIST
// DONE     Create site map
// DONE     Did not find a plugin that scrapes mdx and adds links programatically. Must be done manually.
// DONE     Fix Social Share functionality with Open Graph: https://www.digitalocean.com/community/tutorials/how-to-boost-seo-using-gatsby-s-seo-component-and-gatsby-react-helmet

// DONE     Create a favicon for the site
// create pagination for the blog: https://www.gatsbyjs.com/docs/adding-pagination/
// Include email capture footer as part of the layout component.
// create a search feature to find content: https://www.gatsbyjs.com/docs/adding-search-with-algolia
// Nail down the SEO for the site by getting key pages indexed.
// create an MVP chart component that reads data from an API. Possibly from my LinkedIn post performance?
// create an mdx thought for each of these key words, (15 in total, 500 ish words each)

// BUSINESS KEYWORDS
// DONE     business intelligence reporting              1k - 10k
// DONE     date warehousing for dummies pdf             10 -100 (mostly because I are already starting to rank && i am seeing )
// data driven decision making                  1k - 10k
// data driven decisions                        100 - 1k
// using data to make decisions                 100 -1k

// DATA SCIENCE KEYWORDS
// data science programming                     1k - 10k   
// datascientist                                1k - 10k
// job of data scientist                        1k - 10k
// data driven insights                         100 - 1k
// data driven solutions                        100 - 1k

// DEVELOPMENT KEYWORDS
// bi developer                                 1k - 10k
// data driven development                      100 - 1k

// DESIGN KEYWORDS
// data driven marketing                        1k - 10k
// data driven organization                     100 -1k

// MY JOURNEY KEYWORDS
// data driven storytelling                     100 - 1k
// data driven culture                          100 - 1k

// EXPERIENCE
// no experience data analyst jobs              100 - 1k
// entry level data analyst jobs no experience  100 - 1k
// data analyst no experience                   100 - 1k

// LOOKER
// looker bi                                    100 - 1k
// looker tableau                               100 - 1k
// snowflake looker                             10 - 100
// dbt looker                                   10 - 100
// looker view                                  10 - 100
// zendesk looker                               10 - 100
// shopify looker                               10 - 100

const IndexPage = ({ data }) => {

    const head = data.allMdx.nodes[0];
    const { author, description, keywords, siteUrl, title } = data.site.siteMetadata;
    const seokeywords = keywords  // "data driven culture, data driven storytelling, data driven decision making, business intelligence reporting, using data to make decisions"
    const page_title = title
    const socialimage = siteUrl + image
    const socialimagesq_1 = siteUrl + imagesq1
    const socialimagesq_2 = siteUrl + imagesq2
    const socialimagesq_3 = siteUrl + imagesq3


    return (
        <Layout pageTitle={page_title}>
            <Helmet>
                <meta property="og:title" content={page_title} />
                <meta property="og:description" content={description} />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:site_name" content={siteUrl} />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:image" content={socialimagesq_1} />
                <meta property="og:image" content={socialimagesq_2} />
                <meta property="og:image" content={socialimagesq_3} />

                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:image" content={socialimage} />
                <meta name="twitter:creator" content="@rho_Lall"></meta>
                <meta name="twitter:title" content={page_title} />

                <link rel="canonical" href={siteUrl} />
                <link rel="icon" href="https://assumewisely.com/static/fbd7ed6a78857ed0fbb1b2eea422eb92/b024c/gliph_wt.png" />

                <meta name="title" content={page_title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={seokeywords} />
                <meta name="author" content={author} />
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
                        <p>{head.frontmatter.short}</p>
                    </div>

                    <div className='mt-auto'>

                        <p className=''>{head.frontmatter.date}</p>
                        <hr />

                    </div>


                </div>


            </div>
            <br />
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
                                    <Link to={`/thoughts/${node.fields.slug.replace(/_/g, '-')}`} className='text-lg font-display'>
                                        {node.frontmatter.title}
                                    </Link>
                                </h2>
                            </div>

                            <p className='mb-6 px-2 text-sm'>{node.frontmatter.short}</p>

                            <div className='mt-auto'>

                                <p>{node.frontmatter.date}</p>
                                <hr />
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
            image
            keywords
            siteUrl
            title
            og {
            siteName
            twitterCreator
            }
        }
        }
    }
`

export default IndexPage