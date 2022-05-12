import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
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
        <div className=' container '>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to='/'>
                            <StaticImage
                                alt="Data Savvy for Data Driven Decision Making."
                                src="../images/LOGO_black.png"
                            />    
                        </Link>
                    </li>

                    <li className={navLinkItem}>
                        <Link to="/about" className=" text-secondary ">
                            About Me
                        </Link>
                    </li>
                    {/* <li className={navLinkItem}><Link to="/thoughts" className={navLinkText}>Random Thoughts</Link></li> */}
                </ul>
            </nav>

            <nav className='flex justify-center'>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>BUSINESS ACUMEN</Link></li>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>DATA SCIENCE</Link></li>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>DEVELOPMENT</Link></li>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>DESIGN</Link></li>
                    <li className={navLinkItem}><Link to="/" className='text-primary'>MY JOURNEY</Link></li>
                </ul>
            </nav>

            <br/>

            <main>
                
                {children}

            </main>
        </div>
    )

}

export default Layout