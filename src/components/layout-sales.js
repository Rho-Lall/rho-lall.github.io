import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import "../components/global.css"

const LayoutSales = ({ pageTitle, children }) => {

    return (
        <div className="min-h-screen bg-white">
            {/* Main Content Area - Full Width for Sales Pages */}
            <main>
                {children}
            </main>

            {/* Minimal Footer */}
            <footer className="py-8 px-4 md:px-8 mt-16 border-t border-gray-200">
                <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} Rho Lall. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )

}

export default LayoutSales