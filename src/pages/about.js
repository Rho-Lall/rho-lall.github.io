
//import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
//import {Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
//import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const AboutPage = () => {

  return (
        <Layout pageTitle={'Who is Rho Lall?'}>
            
          <h1 className='heading mb-5'>Who is Rho Lall?</h1>
            
          <p className='mb-5'>I am a full-stack, business intelligence developer.</p>
          <p className='mb-5'>I enjoy coding. I enjoyed data.</p>
          <p className='mb-5'>The passion that drives me is learning and uncovering new insight. </p>
          <p className='mb-5'>I dabble in architecture. I’m currently building a second-generation data stack that includes Looker and Snowflake. I’m playing with DBT. I've built databases,  APIs, websites . . . and I've set my sites on blockchain development specifically using XRP and XLM.</p>
          <p className='mb-5'>I think I will document my learning path as a professional developer because that doesn't exist outside of the Ethereum community. There's a lot of attention and resources for Ethereum but frankly, XRP/XLM are better technologies. There will be demand for these technologies in the future. I'm hoping to do my part to contribute to the XRP XLM community.</p>
        </Layout> 

    )

}



export default AboutPage