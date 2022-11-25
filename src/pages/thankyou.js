import * as React from 'react'
import Layout from '../components/layout'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'


const ThankyouPage = (data) => {

    const {author, siteUrl } = data.site.siteMetadata; 

    return (
        <Layout>
            <Helmet>
                <meta name="description" content="Thoughts on data driven decision making for data savvy managers and leaders."/>
                <meta name="keywords" content="Data Savvy Manager,Data Driven Decision Making"/>
                <meta name="author" content={author}/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="Thoughts on data driven decision making for data savvy managers and leaders."/>
                <meta property="og:image" content="thoughts/media/data_savvy_.png"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:url" content={siteUrl}/>
                <link rel="canonical" href={siteUrl}/>
            </Helmet>

            <h1 className='text-xl text-center m-12'>Thank You!</h1>
        </Layout>
    )
}

export default ThankyouPage 


export const query = graphql`
    query MyQuery {
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