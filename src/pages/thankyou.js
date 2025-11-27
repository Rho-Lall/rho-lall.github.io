import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'


const ThankyouPage = ({data}) => {

    const {author, siteUrl } = data.site.siteMetadata;  

    return (
        <Layout>
            <Helmet>
                <meta name="description" content="Thank you for your purchase!"/>
                <meta name="keywords" content="Thank You, Confirmation"/>
                <meta name="author" content={author}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="Thank you for your purchase!"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:url" content={`${siteUrl}/thankyou`}/>
                <link rel="canonical" href={`${siteUrl}/thankyou`}/>
                <title>Thank You - Confirmed</title>
            </Helmet>

            {/* Full-width image container with overlay */}
            <div className="relative w-full -mt-16">
                <StaticImage
                    src="../images/me_goldmine_shanty.png"
                    alt="Welcome"
                    className="w-full"
                    imgStyle={{ objectFit: 'contain' }}
                    loading="eager"
                />
                
                {/* Overlay content - left third horizontally, vertically centered */}
                <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-16">
                    <div className="bg-gray-900 bg-opacity-80 p-8 rounded-lg text-center max-w-xs">
                        <h1 className="text-5xl font-bold text-white mb-8">
                            You Are in.
                        </h1>
                        <p className="text-lg text-gray-200 mb-6">
                            If we aren't already, connect with me on LinkedIn.
                        </p>
                        <a 
                            href="https://www.linkedin.com/in/rholall/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
                            aria-label="Connect on LinkedIn"
                        >
                            <svg 
                                className="w-6 h-6 text-white" 
                                fill="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query site_data {
        site {
            siteMetadata {
                author
                description
                keywords
                siteUrl
                title
            }
        }
    }
`

export default ThankyouPage 


