import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import LayoutSales from '../../components/layout-sales'
import { Helmet } from 'react-helmet'
import LeadCaptureForm from '../../components/lead-capture/lead-capture'

// YAML-driven content - synced from src/funnels/ai-test/index.yaml
const funnelData = {
    hero_section: {
        headline: "Is AI Coming to Replace You?",
        sub_headline: "No. But someone who uses AI is.",
        copy: "You've heard AI is the future. But \nif you're not techy, it's hard to know where to begin. \nWhat actually works for your business? \n\nThe right people never hear from you. \n\nThis free 5-day email course shows you how to use AI to save time, show up consistently, and reach the people who need you. Even if you're not techy. \nStart here. Before it happens again."
    },
    product_section: {
        headline: "Claw back a full workday each week without coding, hiring, or burnout.",
        sub_headline: "Learn how to use AI to offload your daily grind.\n**So you can focus on what actually matters.**"
    },
    credibility_section: {
        headline: "Who Is Rho Lall?",
        copy: "I'm a bulldozer. I help professionals develop their AI strategy to cut through the noise, amplify their talents, and get work done."
    },
    bonus_section: {
        headline: "This Week Only: Executive Clarity Consult $75+ Value"
    },
    cta_section: {
        headline: "BECOME an AI emPowered Human today!"
    }
}

// API endpoint for form submissions
const apiEndpoint = 'https://y1krjhl41m.execute-api.us-east-1.amazonaws.com/prod/leads'

const AITestSqueezePage = () => {
    const pageTitle = "AI Test Funnel - YAML Integration Demo"



    return (
        <LayoutSales pageTitle={pageTitle}>
            <Helmet>
                <meta name="description" content="Test funnel demonstrating YAML-driven content management" />
                <meta name="keywords" content="AI test, YAML integration, funnel template" />
                <meta name="author" content="Rho Lall" />
            </Helmet>

            {/* Hero Section */}
            <section className="hero-section">
                <div className="relative w-full h-screen">
                    {/* Full Width Background Image */}
                    <StaticImage
                        src="../../images/media/business_.png"
                        alt="AI Test Strategy"
                        className="hero-background w-full h-full object-cover"
                        layout="fullWidth"
                    />

                    <div className="hero-overlay absolute inset-0 flex items-center">
                        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 px-6">
                            {/* Empty Left Column - Hidden on Mobile/Tablet */}
                            <div className="hidden lg:block"></div>

                            {/* Hero Content */}
                            <div className="flex items-center">
                                <div className="hero-content bg-black bg-opacity-50 p-8 md:p-12 rounded-lg shadow-lg text-center w-full">
                                    <h1 className="hero-headline text-2xl md:text-3xl font-bold text-white mb-4 leading-tight" style={{ whiteSpace: 'pre-line' }}>
                                        {funnelData.hero_section.headline}
                                    </h1>

                                    <p className="hero-sub-headline text-sm md:text-base mb-4 leading-relaxed" style={{ whiteSpace: 'pre-line', color: 'rgb(186, 215, 57)' }}>
                                        {funnelData.hero_section.sub_headline}
                                    </p>

                                    <p className="hero-copy text-sm md:text-base text-gray-200 mb-4 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>
                                        {funnelData.hero_section.copy}
                                    </p>

                                    {/* Hero Form */}
                                    <div className="hero-form max-w-md mx-auto">
                                        <LeadCaptureForm apiEndpoint={apiEndpoint} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Two Column Layout - Image First on Mobile */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Product Text - First on Desktop, Second on Mobile */}
                        <div className="product-copy order-2 lg:order-1">
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
                        <div className="product-image order-1 lg:order-2">
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
            <section className="product-section bg-white pt-0 pb-16 px-6">
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
                        <LeadCaptureForm apiEndpoint={apiEndpoint} />
                    </div>
                </div>
            </section>

            {/* Credibility Section - Who is Rho Lall? */}
            <section className="credibility-section py-16 px-6" style={{ backgroundColor: 'rgba(19, 47, 69)' }}>
                <div className="max-w-6xl mx-auto">
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Image Column - Circular Frame */}
                        <div className="order-1 lg:order-1 flex justify-center">
                            <div className="self-image w-80 h-80 rounded-full overflow-hidden shadow-lg">
                                <StaticImage
                                    src="../../images/rh0L4ll_2025_07_01.png"
                                    alt="Rho Lall"
                                    className="w-full h-full object-cover"
                                    placeholder="blurred"
                                />
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="self-copy order-2 lg:order-2">
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

            {/* Bonus Section */}
            <section className="bonus-section bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Two Column Layout - Text First, Image Second */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                        {/* Text Column - First on Desktop, First on Mobile */}
                        <div className="bonus-copy order-1 lg:order-1">
                            <h2 className="bonus-headline text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                This Week Only: Executive Clarity Consult $75+ Value
                            </h2>

                            <p className="text-xl text-gray-700 mb-6 font-semibold">
                                Unlock your unfair advantage. Communicate it with power.
                            </p>

                            <p className="text-lg text-gray-700 mb-6">
                                You don't have a productivity problem.
                            </p>

                            <p className="text-lg text-gray-700 mb-8 font-semibold">
                                You have a clarity gap.
                            </p>

                            <p className="text-lg text-gray-700 mb-6">
                                Let me introduce, Nicole. She will help YOU zero in on:
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-start">
                                    <span className="text-blue-600 mr-3">•</span>
                                    <span className="text-gray-700">Who you're really built to serve</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-600 mr-3">•</span>
                                    <span className="text-gray-700">What sets you apart in your market</span>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-600 mr-3">•</span>
                                    <span className="text-gray-700">How to communicate your value so people pay attention (and pay up)</span>
                                </div>
                            </div>

                            <p className="text-lg text-gray-700 mb-6">
                                Nicole consults with me on one of my highest leverage strategies. One that turns confusion into confidence and busywork into results.
                            </p>

                            <p className="text-lg font-semibold text-gray-900">
                                Includes: My signature Positioning Clarity Tools to accelerate your communications to position yourself like a category leader.
                            </p>
                        </div>

                        {/* Image Column - Second on Desktop, Second on Mobile */}
                        <div className="bonus-image order-2 lg:order-2">
                            <StaticImage
                                src="../../images/ads/You 2.o Clarity Consult.png"
                                alt="Executive Clarity Consult"
                                className="w-full h-auto"
                                placeholder="blurred"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="cta-section pt-16 pb-8 px-6" style={{ backgroundColor: 'rgba(19, 47, 69)' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="cta-headline text-3xl md:text-4xl font-bold mb-8" style={{ color: 'rgb(186, 215, 57)' }}>
                        BECOME an AI emPowered Human today!
                    </h2>

                    {/* Final Form */}
                    <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                        <LeadCaptureForm apiEndpoint={apiEndpoint} />
                    </div>
                </div>
            </section>
        </LayoutSales>
    )
}

export default AITestSqueezePage