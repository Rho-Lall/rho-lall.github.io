
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
//import {Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const AboutPage = () => {

  return (
        <Layout pageTitle={'Who is Rho Lall?'}>
            
          <h1 className='heading mb-5'>Who is Rho Lall?</h1>
           
          <div className=''>
          <StaticImage src="../images/about_rho_lall.png"/>    
          </div>
 
          <p className='mb-5'>I am a full-stack, business intelligence developer.</p>
          <p className='mb-5'>I enjoy coding. I enjoyed data.</p>
          <p className='mb-5'>The passion that drives me is learning and uncovering new insight. </p>
          <p className='mb-5'>I dabble in architecture. I’m currently building a second-generation data stack using DBT, Snowflake, Looker, and Streamlit. I've built databases,  APIs, websites . . . and I've set my sites on blockchain development specifically using XRP and XLM.</p>

        </Layout> 

    )

}



export default AboutPage