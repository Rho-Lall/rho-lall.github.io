import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LayoutSales from '../../components/layout-sales'
import { Helmet } from 'react-helmet'

const AISqueezePage = () => {
    // Image variables for easy management
    const heroImage = "../../images/media/business_.png"

    // Content variables (will be moved to YAML later)
    const pageTitle = "AI Strategy Guide"
    const headline = "Master AI Strategy for Your Business"
    const subheadline = "Get the complete guide to implementing AI in your organization"

    return (
        <LayoutSales pageTitle={pageTitle}>
            <Helmet>
                <meta name="description" content="Complete AI strategy guide for business leaders and decision makers" />
                <meta name="keywords" content="AI strategy, artificial intelligence, business AI, AI implementation" />
                <meta name="author" content="Rho Lall" />
            </Helmet>

            {/* Hero Section - Full Width Image with Text Overlay */}
            <div className="relative w-full h-screen">
                {/* Full Width Background Image */}
                <StaticImage
                    src={heroImage}
                    alt="AI Strategy"
                    className="w-full h-full object-cover"
                    layout="fullWidth"
                />

                {/* Text Overlay - Responsive Layout */}
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
                        {/* Empty Left Column - Hidden on Mobile/Tablet */}
                        <div className="hidden lg:block"></div>

                        {/* Text Box - Full Width on Mobile, Right Column on Desktop */}
                        <div className="flex items-center">
                            <div className="bg-black bg-opacity-50 p-8 md:p-12 rounded-lg shadow-lg text-center w-full">
                                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    Is AI Coming to Replace You?<br />
                                    <span className="text-blue-400">No. But someone who uses AI is.</span>
                                </h1>

                                <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                                    You've heard AI is the future. But if you're not techy, it's hard to know where to begin.
                                    What tools? What tasks? What actually works for your business?
                                </p>

                                <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                                    The right people need to hear from you. And never do. This free 5-day email course shows you
                                    how to use AI to save time, show up consistently, and reach the people who need you.
                                    Even if you're not techy. Start here. Before it happens again.
                                </p>

                                {/* Form */}
                                <div className="max-w-md mx-auto">
                                    <form className="space-y-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                placeholder="Tell me a little about what you are struggling with or hope to do with AI."
                                                rows="4"
                                                className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 text-lg rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                                        >
                                            Become AI emPowered
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section - White Background */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Two Column Layout - Image First on Mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Text Column - First on Desktop, Second on Mobile */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-tight">
                                Claw back a full workday each week without coding, hiring, or burnout.
                            </h2>

                            <p className="text-xl text-gray-700 mb-6">
                                Learn how to use AI to offload your daily grind.
                            </p>

                            <p className="text-xl text-gray-700 mb-8 font-semibold">
                                So you can focus on what actually matters.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-6">You'll learn:</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <span className="font-bold text-blue-600 mr-3">Day 1:</span>
                                    <span className="text-gray-700">Cut Your Work Communication Time in Half with AI</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-bold text-blue-600 mr-3">Day 2:</span>
                                    <span className="text-gray-700">Speed Read Anything & Everything</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-bold text-blue-600 mr-3">Day 3:</span>
                                    <span className="text-gray-700">Understand How AI Really Works</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-bold text-blue-600 mr-3">Day 4:</span>
                                    <span className="text-gray-700">Draft Emails, Docs, and Messages Faster Than Ever</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="font-bold text-blue-600 mr-3">Day 5:</span>
                                    <span className="text-gray-700">Make Better, Faster Decisions with ChatGPT</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-6">
                                Most business owners don't know what you will learn.
                            </p>

                            <p className="text-lg text-gray-700 mb-8">
                                This course is built to help you free up a full workday every week — with AI tools you already have access to. No technical skills required.
                            </p>
                        </div>

                        {/* Image Column - First on Mobile, Second on Desktop */}
                        <div className="order-1 lg:order-2">
                            <StaticImage
                                src="../../images/ads/You 2.o.png"
                                alt="AI Course Benefits"
                                className="w-full h-auto"
                                placeholder="blurred"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Single Column Section - Continued Content */}
            <section className="bg-white pt-0 pb-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Perfect for Small Business, Creatives, and Professional Services</h3>
                    <p className="text-lg text-gray-700 mb-8">Whether you're buried in busywork or curious where to even begin.</p>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">Do you recognize any of these feelings:</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">AI Overload</span>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Short on time</span>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Curious about AI</span>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Drowning in tasks</span>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Decision Paralysis</span>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <span className="text-gray-700 font-medium">Struggling to Convey Ideas</span>
                        </div>
                    </div>

                    <p className="text-lg text-gray-700 mb-6">
                        If you've ever felt stuck, scattered, or skeptical about AI…
                    </p>

                    <p className="text-lg text-gray-700 mb-8">
                        This course is your no-fluff starting point. It's clear. It's practical. And it works.
                    </p>

                    <p className="text-xl font-bold text-gray-900 mb-8">
                        Get immediate access now — and claw back your time.
                    </p>

                    <div className="mb-8">
                        <p className="text-lg text-gray-700 mb-2">I'm looking for leaders who understand:</p>
                        <p className="text-lg italic text-gray-700 mb-2">the best way to predict the future is to create it.</p>
                        <p className="text-lg text-gray-700 mb-4">And the only way to get there is together.</p>
                        <p className="text-xl font-bold text-blue-600 mb-2">I am building humanity.</p>
                        <p className="text-xl font-bold text-blue-600">I am emPowered by AI.</p>
                    </div>

                    {/* Second Form */}
                    <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Ready to Get Started?</h3>
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                                    required
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Tell me a little about what you are struggling with or hope to do with AI."
                                    rows="4"
                                    className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 text-lg rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
                            >
                                Become AI emPowered
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Credibility Section - Who is Rho Lall? */}
            <section className="py-16 px-6" style={{ backgroundColor: 'rgba(19, 47, 69)' }}>
                <div className="max-w-6xl mx-auto">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Image Column - Circular Frame */}
                        <div className="order-1 lg:order-1 flex justify-center">
                            <div className="w-80 h-80 rounded-full overflow-hidden shadow-lg">
                                <StaticImage
                                    src="../../images/rh0L4ll_2025_07_01.png"
                                    alt="Rho Lall"
                                    className="w-full h-full object-cover"
                                    placeholder="blurred"
                                />
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="order-2 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                Who Is Rho Lall?
                            </h2>

                            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                                I'm a bulldozer. I help professionals develop their AI strategy to cut through the noise,
                                amplify their talents, and get work done. I help professionals work on their business
                                instead of getting buried by their business. The result? Leaders that work cleaner,
                                think clearer, and lead with confidence.
                            </p>

                            <p className="text-xl font-bold" style={{ color: 'rgb(186, 215, 57)' }}>
                                I build humanity emPowered by AI.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutSales>
    )
}

export default AISqueezePage