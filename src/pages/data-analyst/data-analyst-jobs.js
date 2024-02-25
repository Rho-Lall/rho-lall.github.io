import * as React from 'react'
// import Layout from '../components/layout'
// import { Helmet } from 'react-helmet'
import LayoutSales from '../../components/layout-sales';
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'


const DataAnalystJobsPage = ({data}) => {

    // const {author, siteUrl } = data.site.siteMetadata;  
    const page_title = 'test page title'
    const lead = 'Where to'
    const headline = 'Find data analyst jobs.'
    const subhead = 'entry level data analyst jobs'
    const subhead2 = 'remote no experience'

    return (
            <LayoutSales pageTitle={page_title}>
            
                <div className='flex flex-col'>
                    <div className='flex flex-row'>
                        <div>
                            <StaticImage src="../images/about_rho_lall.png"/>   
                            <StaticImage src="../images/interview_challenge_banner_224.png"/>   
                        </div>

                        <div className='justify-center'>
                            <h3 className='text-xl text-justify ml-12 mt-5'>{lead}</h3>
                            <h3 className='text-4xl text-center mr-12 ml-12 mt-0 mb-5'>{headline}</h3>
                            <h3 className='text-2xl text-center mr-5 ml-5 my-0'>{subhead}</h3>
                            <h3 className='text-2xl text-center mr-5 ml-5 my-0'>{subhead2}</h3>
                            <div className='flex flex-col items-center my-2'>
                                <button class="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                                    </svg>
                                    <span>DOWNLOAD FREE</span>
                                </button>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className='bg-violet-400'>
                    <div className='justify-around'>
                        <h3 className='justify-around'>You will find out . . . </h3>
                    </div>      
                </div>
                
            </LayoutSales>

            
    
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

export default DataAnalystJobsPage 


