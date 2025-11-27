import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import "../components/global.css"

const LayoutSales = ({ pageTitle, children }) => {

    return (
        <div>
            {/* Main Content Area */}
            <main>
                {children}
            </main>

            {/* Footer with Logo */}
            <footer className="bg-gray-50 py-8">
                <div className="max-w-2xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        {/* Logo Column */}
                        <div className="flex justify-center md:justify-start">
                            <StaticImage
                                src="../images/rho_lall_logo_.png"
                                alt="Rho Lall Logo"
                                width={150}
                                height={48}
                                className="max-h-12 max-w-full object-contain"
                                placeholder="blurred"
                            />
                        </div>

                        {/* Copyright Column */}
                        <div className="text-center md:text-right">
                            <p className="text-gray-600 text-sm">
                                &copy; {new Date().getFullYear()} Rho Lall. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default LayoutSales