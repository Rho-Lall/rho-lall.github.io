import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
// import Hamburger from './hamburger'
import "../components/global.css"
import {    navLinks,
            navLinkItem,
        } from './layout.module.css'

const LayoutSales = ({ pageTitle, children}) => {

    // const data = useStaticQuery(graphql`
    //     query siteTitle {
    //         site {
    //             siteMetadata {
    //                 title
    //             }
    //         }
    //     }
    // `)

    return (
        <div className='md:mx-20 lg:container lg:max-w-screen-xl'>
            {/* <title>{pageTitle} | {data.site.siteMetadata.title}</title> */}

            <main className='z-0 px-2'>
                
                {children}

            </main>


        </div>
    )

}

export default LayoutSales