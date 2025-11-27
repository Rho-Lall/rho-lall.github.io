import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Hamburger from './hamburger'
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
        <div 
            className="min-h-screen"
            style={{
                background: 'linear-gradient(135deg, #e9ebee 0%, #f5f7fa 50%, #e9ebee 100%)'
            }}
        >
            {/* Page Container - "Sheet of Paper" Effect */}
            <div className="p-2 md:p-8">
                <div 
                    className="max-w-6xl mx-auto bg-white overflow-hidden"
                    style={{
                        boxShadow: '0 4px 30px rgba(0,0,0,0.1)',
                        borderRadius: '12px',
                        minHeight: 'calc(100vh - 1rem)'
                    }}
                >
                    <div className='md:mx-20 lg:container lg:max-w-screen-xl'>
                        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                        <Hamburger/>
                        <nav className='z-0 flex flex-row justify-end mr-20 md:mr-0 mb-5'>
                            <div className='font-display text-5xl md:text-7xl' >
                                <Link to='/'>
                                    <StaticImage src="../images/LOGO_grey.png"/>    
                                </Link>
                            </div>

                        </nav>
                        
                        <nav className='z-0 hidden md:flex flex-row justify-evenly mb-5 font-display'>
                            <ul className={navLinks}>
                                <li className={navLinkItem}><Link to="/ai-strategy" className='text-primary'>AI STRATEGY</Link></li>
                                <li className={navLinkItem}><Link to="/artificial-intelligence" className='text-primary'>ARTIFICIAL INTELLIGENCE</Link></li>
                                <li className={navLinkItem}><Link to="/analytics-engineering" className='text-primary'>ANALYTICS ENGINEERING</Link></li>
                                <li className={navLinkItem}><Link to="/design" className='text-primary'>DESIGN</Link></li>
                                <li className={navLinkItem}><Link to="/my-journey" className='text-primary'>MY JOURNEY</Link></li>
                            </ul>
                        </nav>

                        <main className='z-0 px-2'>
                            {children}

                        </main>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Layout