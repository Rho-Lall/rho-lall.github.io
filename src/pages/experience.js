
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
//import {Link, graphql } from 'gatsby'
//import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import LayoutSales from '../components/layout'

const title = 'Experience: Closing the Gap Between Recent College Grad & and Data Scientist.'

const ExperiencePage = () => {

  return (
        <div>
            
          <p className='mb-5'>Are you a recent college grad struggling to get hired? Do you,</p>
          <h1 className='mb-5'>Want A Job In Data Science?</h1>
          <p className='mb-5'>Hey, I'm Rho Lall. I'm determined to help other people of color like me break into in tech. My only question is, will that be you?</p>
          <p className='mb-10'>I wrote a book called Experience: Closing the Gap Between Recent College Grad & and Data Scientist. It's packed with everything you need to know to close the gap between being recent college grad and becoming an experienced hire.  </p>
          <p className='mb-5'>You'll learn how to:</p>
          <ul className='mb-10'>
            <li>Get your first data science job</li>
            <li>Understand who the players are</li>
            <li>Get paid well to do work you like </li>
          </ul>
          <p className='mb-5'>I’ve mentored several recent college grads to help them get into data science. And in my experience, the number one reason why recent graduates struggle to get hired is that they <span className='bg-yellow-100 text-slate-900 font-extrabold underline' >don’t have enough experience</span>.</p>
          <p className='mb-5'>The good news is that there are a few things you can do to close the gap between having a Data Science degree and being a data scientist. </p>
          <p className='mb-5'>First, you need to understand the board and who the players are. Second, you need shared common experiences with potential employers. And third, you need to have a unique selling proposition that sets you apart from other candidates.</p>
          <p className='mb-5'>I’m writing a book called Experience: Closing the Gap Between Recent College Grad & and Data Scientist that explains all of this in detail. So if you’re struggling to get hired in data science, and you are tired of being told you need more experience . . . you can get Experience today.</p>
          <p className='mb-5'>Sign up for my Experience emails to receive notifications when new stories are shared. Please enter your email address below:</p>
          <p className='mb-5'>PS The book is expected to be published in the fall, and subscribers will receive early access as well as a special discount.</p>
          <p className='mb-10'>PPS I will share some insider access as well as deleted content that didn't make the final cut for the book.</p>

          {/* <div className=''>
          <StaticImage src="../images/about_rho_lall.png"/>    
          </div> */}
          
        </div> 

    )

}

export default ExperiencePage