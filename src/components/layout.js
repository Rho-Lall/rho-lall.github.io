import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// import { StaticImage } from 'gatsby-plugin-image'
import "../components/global.css"
import {    navLinks,
            navLinkItem,
        } from './layout.module.css'


const Layout = ({ pageTitle, children}) => {

    const data = useStaticQuery(graphql`
        query siteTitle {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className='md:mx-20 lg:container lg:max-w-screen-xl'>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>

            <nav className='flex flex-row justify-end items-end pb-5'>
                <div className='text-5xl md:text-7xl' >
                    <Link to='/'>
                        Rho Lall
                    </Link>
                </div>
                
                <div className= "hidden md:block text-secondary px-2 " >   
                    <Link to="/about">
                        ( About Me )
                    </Link>    
                </div>    
                
            </nav>

            <nav className='hidden md:flex flex-row justify-evenly pb-10'>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>BUSINESS ACUMEN</Link></li>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>DATA SCIENCE</Link></li>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>DEVELOPMENT</Link></li>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>DESIGN</Link></li>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>MY JOURNEY</Link></li>
                </ul>
            </nav>

            <main >
                
                {children}

            </main>
        </div>
    )

}

export default Layout