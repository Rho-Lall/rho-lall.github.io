import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {    container,
            navLinks,
            navLinkItem,
            navLinkText
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
        <div className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            
            <nav>
                <ul className={navLinks}>
                    <StaticImage
                        alt="Data Savvy for Data Driven Decision Making."
                        src="../images/LOGO_black.png"
                    />    
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About Me</Link></li>
                    <li className={navLinkItem}><Link to="/thoughts" className={navLinkText}>Random Thoughts</Link></li>
                </ul>
            </nav>

            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>BUSINESS ACUMEN</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>DATA SCIENCE</Link></li>
                    <li className={navLinkItem}><Link to="/thoughts" className={navLinkText}>DEVELOPMENT</Link></li>
                    <li className={navLinkItem}><Link to="/thoughts" className={navLinkText}>DESIGN</Link></li>
                    <li className={navLinkItem}><Link to="/thoughts" className={navLinkText}>MY JOURNEY</Link></li>
                </ul>
            </nav>

            <main>
                
                {children}

            </main>
        </div>
    )

}

export default Layout