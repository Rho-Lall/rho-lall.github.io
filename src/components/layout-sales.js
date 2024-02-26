import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
// import Hamburger from './hamburger'
import "../components/global.css"
import {    navLinks,
            navLinkItem,
        } from './layout.module.css'

const LayoutSales = ({children}) => {

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

            <main className='z-0'>
                {children}

            </main >

            <nav className='justify-around mt-5'>
                    <Link to='/'>
                        <StaticImage src="../images/LOGO_grey.png"/>    
                    </Link>
            </nav>

        </div>
    )

}

export default LayoutSales