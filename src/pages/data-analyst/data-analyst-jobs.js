import * as React from 'react'
// import Layout from '../components/layout'
// import { Helmet } from 'react-helmet'
import LayoutSales from '../../components/layout-sales';
import { StaticImage } from 'gatsby-plugin-image'
import LeadCaptureDataAnalystJobs from '../../components/lead-capture/data-analyst-jobs';
import { graphql } from 'gatsby'


const DataAnalystJobsPage = ({data}) => {

    // const {author, siteUrl } = data.site.siteMetadata;  
    const page_title = 'test page title'
    const lead = 'Where to'
    const headline = 'Find data analyst jobs.'
    const subhead = 'entry level data analyst jobs'
    const subhead2 = 'remote no experience'
    const ad_image = '../../images/ads/industry_leagues.png'

    return (
            <LayoutSales pageTitle={page_title}>
            
                <div className='flex flex-col'>
                    <div className='flex md:flex-row flex-col place-content-center gap-4'>
                        <div className='md:w-1/2  pt-2 shadow-lg'> 
                            <StaticImage src={ad_image}/> 
                        </div>

                        <div className='justify-center md:w-1/2 flex flex-col'>
                            <div className='h-2/3'>
                                <h3 className='text-xl text-justify ml-12 mt-5'>{lead}</h3>
                                <h3 className='text-4xl text-center mr-12 ml-12 mt-0 mb-5'>{headline}</h3>
                                <h3 className='text-2xl text-center mr-5 ml-5 my-0'>{subhead}</h3>
                                <h3 className='text-2xl text-center mr-5 ml-5 my-0'>{subhead2}</h3>
                            </div>

                            <div className='flex flex-col items-center my-5 h-1/3'>
                                <LeadCaptureDataAnalystJobs cta='GET YOUR COPY!'/>
                            </div>
                        </div>  
                    </div>
                </div>

                <div>
                    <div className='bg-blue-700 mt-2 mt-1 md:mt-5'>
                        <div className='justify-center'>
                            <h2 className='text-center text-white'>You will find out . . . </h2>
                        </div>      
                    </div>

                    <div className='flex md:flex-row flex-col bg-blue-700 justify-center'>

                            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4 my-2">
                                <div class="px-6 py-4">
                                    <div class="text-pink-700 font-bold text-xl mb-2">Secret # 1</div>
                                    <p class="text-gray-700 text-base mb-4">
                                        80% of jobs are not on job boards.
                                    </p>
                                </div>
                            </div>
                            
                            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4 my-2">
                                <div class="px-6 py-4">
                                    <div class="text-pink-700 font-bold text-xl mb-2">Secret # 2</div>
                                    <p class="text-gray-700 text-base mb-4">
                                        Breaking down the market for data analyst jobs.
                                    </p>
                                </div>
                            </div>

                            <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white ml-4 my-2">
                                <div class="px-6 py-4">
                                    <div class="text-pink-700 font-bold text-xl mb-2">Secret # 3</div>
                                    <p class="text-gray-700 text-base mb-4">
                                        Get interviews without filling out 350 applications and wading through a sea of rejection.
                                    </p>
                                </div>
                            </div>
                        </div> 
     
                </div>

                <div className='flex flex-col'>
                    <div className='flex md:flex-row flex-col place-content-center gap-4'>
                        <div className='justify-center md:w-1/2 flex flex-col'>
                            <div className='mx-5 md:mx-0'>
                                <h3 className='text-xl text-justify mt-10'>My First step . . . </h3>
                                <p>I started with a simple need that you might relate to: earn more money for my growing family...and to cover my growing medical bills. </p>
                                <p>I had the skills but I just needed someone to take a chance on me so could prove it.</p>
                                <p>So then I had an aha moment that changed my job search forever.</p>
                                <p>I want to share my insight with you, how I overcame my own inexperience.</p>
                                <p>If I can do this, so can you! I'll show you how.</p>
                            </div>

                            <div className='flex flex-col items-center my-10'>
                                {/* <button class="bg-yellow-300 hover:bg-yellow-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                                    </svg>
                                    <span>DOWNLOAD FREE</span>
                                </button> */}
                                <LeadCaptureDataAnalystJobs cta='DOWNLOAD FREE'/>
                            </div>
                        </div>  
                        <div className='md:w-1/2'>
                            <h3 className='text-center pt-1'>I'm Rho Lall . . . </h3>
                            
                            <StaticImage className='shadow-lg' src="../images/about_rho_lall.png"/>   
                            <div class='flex flex-row justify-end'>
                                <div className=''>
                                    <p class=''>Follow me on <a href="https://www.linkedin.com/in/rholall" target="_blank" class="text-blue-500 hover:underline">LinkedIn</a></p>
                                </div>
                                <div className='w-5 h-5 mt-4 mx-1'>
                                    <StaticImage src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo"/>
                                </div>
                            </div>   
                        </div>
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


