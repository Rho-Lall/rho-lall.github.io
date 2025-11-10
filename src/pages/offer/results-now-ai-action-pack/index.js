import React, { useState, useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LayoutSales from '../../../components/layout-sales'
import { Helmet } from 'react-helmet'
import ReactMarkdown from 'react-markdown'
import StripeCheckout from '../../../components/checkout/stripe-checkout'


// YAML data - imported as JavaScript object for Gatsby compatibility
const funnelData = {
    hero_section: {
        image: "",
        headline: "Limited ONE TIME Offer",
        sub_headline: "**Start saving time with AI**\nbefore Day 1 of You 2.0:\nBecome an AI emPowered Human",
        copy: "",
        offer_price: "TODAY ONLY $27"
    },
    product_section: {
        image: "../../images/ads/Results Now AI Action Pack.png",
        headline: "",
        sub_headline: "",
        copy: `You just unlocked You 2.0: Become an AI emPowered Human. But what if you could get your first real win today?

**This is your implementation shortcut.**

The Results Now AI Action Pack gives you practical tools that bridge the gap between theory and thruput. See results before you start the You 2.0 eCourse.

No overthinking. No overwhelm.

**Just momentum. Right now.**

## What's Inside the AI Action Pack — Total Value $175+

Get plug-and-play tools that save time, reduce friction, and help you act fast:

### 🧠 Automate Your Brain Template Pack — $47 Value
Paste and play ready-made workflows to streamline your day, cut mental drag, but build mental muscle.

### ✍️ JIRA EPIC Story Writer — $57 Value
Your team does great work. This tool helps them communicate it. Designed to turn scattered notes and half-finished tickets into crisp stories that showcase real business value.

### 🤖 AI Decision Coach Agent — $37 Value
Get clarity on your next move. This agent walks you through structured questions to speed up tough calls.

### ⏱️ Time Audit + Task Organizer (Lite) — $37 Value
Spot your biggest time leaks. Organize chaos into calm with this Notion-powered task triage tool. Built for serious productivity. Once it starts working, it keeps working. It will reshape how you operate.

*It's one of my only tools that I've stopped using... and it still works!*

### 🎁 THIS WEEK ONLY: Project Planning Agent (Ash)
Go from "someday project" to next action in 3 minutes or less. Thinks like a Chief of Staff.

## Get the AI Action Pack for $27

✅ $225+ Value
⏳ Today only — just $27

Because you just joined You 2.0, you get:
- 4 time-saving AI tools
- 1 bonus project manager
- Zero fluff, Just momentum

### 💡 Why so cheap?
You're here to move fast. This pack helps you do exactly that.

## Total VALUE: $225
### Today Only - $27`

    },
    cta_section: {
        image: "",
        headline: "Get my Results Now AI Action Pack today!",
        sub_headline: "",
        copy: ""
    },
    buttons: {
        primary_text: "Yes Please",
        secondary_text: "no thanks",
        secondary_url: "#"
    },
    colors: {
        accent_color: "rgb(186, 215, 57)",
        background_dark: "rgba(19, 47, 69)",
        price_color: "red",
        value_color: "green"
    },
    meta: {
        title: "Limited One Time Offer - You 2.0",
        description: "Limited time offer - Start saving time with AI before Day 1 of You 2.0",
        keywords: "AI course, limited offer, productivity, time saving",
        author: "Rho Lall"
    }
}

// Configuration Constants
const STRIPE_PRICE_ID = 'price_1SReks2uBHxDuQdErHcHumBk'

// Offer Selection Component
const OfferSelection = ({ primaryText, secondaryText }) => {
    const handleDecline = () => {
        window.location.href = '/thankyou'
    }

    return (
        <div className="text-center space-y-4 mt-8">
            <StripeCheckout 
                priceId={STRIPE_PRICE_ID}
                successUrl={`${typeof window !== 'undefined' ? window.location.origin : ''}/thankyou`}
                cancelUrl={`${typeof window !== 'undefined' ? window.location.href.split('?')[0] : ''}`}
                buttonText={primaryText || "I want it"}
                buttonClassName="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-xl rounded-lg transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                isTest={true}
            />
            
            <button 
                onClick={handleDecline}
                className="block w-full text-blue-600 hover:text-blue-800 underline bg-transparent border-0 cursor-pointer"
            >
                {secondaryText || "no thanks"}
            </button>
        </div>
    )
}

const OfferPage = () => {
    const [timeLeft, setTimeLeft] = useState(10 * 60) // 10 minutes in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(timer)
                    return 0
                }
                return prevTime - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    const pageTitle = "AI Test - Limited One Time Offer"

    return (
        <LayoutSales pageTitle={pageTitle}>
            <Helmet>
                <meta name="description" content="Limited time offer - Test YAML integration system" />
                <meta name="keywords" content="AI test, limited offer, YAML system, template demo" />
                <meta name="author" content="Rho Lall" />
            </Helmet>

            {/* Hero Section */}
            <section className="offer-section bg-white px-6">
                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-xl text-gray-700 mb-2">
                        You are almost there . . .
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-2">
                        <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                            <div
                                className="h-8 rounded-full transition-all duration-300 relative"
                                style={{
                                    width: '60%',
                                    background: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)'
                                }}
                            >
                                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
                                    Progressing...
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Offer Headline */}
                    <h1 className="hero-headline text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight" style={{ whiteSpace: 'pre-line' }}>
                        {funnelData.hero_section.headline}
                    </h1>

                    <div className="offer-price text-4xl md:text-6xl font-bold text-red-600">
                        {funnelData.hero_section.offer_price}
                    </div>

                    <div className="hero-sub-headline text-2xl md:text-3xl text-gray-700 mb-4 leading-relaxed mt-4" style={{ whiteSpace: 'pre-line' }}>
                        <ReactMarkdown>{funnelData.hero_section.sub_headline}</ReactMarkdown>
                    </div>

                    {/* Countdown Timer */}
                    <div className="inline-block">
                        <p className="text-lg mb-2 text-gray-700">This test expires in:</p>
                        <div className="text-4xl md:text-6xl font-bold text-black" style={{ fontFamily: 'monospace, "Courier New", Courier' }}>
                            {formatTime(timeLeft)}
                        </div>
                        <p className="text-sm mt-2 text-gray-600">Minutes : Seconds</p>
                    </div>

                    {funnelData.hero_section.copy && (
                        <div className='hero-copy'>
                            <ReactMarkdown>{funnelData.hero_section.copy}</ReactMarkdown>
                        </div>
                    )}

                </div>
            </section>

            {/* Product Section*/}
            <section className="product-section bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Single Column Layout with Image Break */}
                    <div>
                        {/* Product Image */}
                        <div className="product-image mb-8">
                            <StaticImage
                                src="../../images/ads/Results Now AI Action Pack.png"
                                alt="AI Test System"
                                className="w-full h-auto"
                                placeholder="blurred"
                            />
                        </div>

                        <div className='product-copy'>
                            {funnelData.product_section.headline && (
                                <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ whiteSpace: 'pre-line' }}>
                                    {funnelData.product_section.headline}
                                </h3>
                            )}

                            {funnelData.product_section.sub_headline && (
                                <div className="text-lg text-gray-700 mb-6" style={{ whiteSpace: 'pre-line' }}>
                                    <ReactMarkdown>{funnelData.product_section.sub_headline}</ReactMarkdown>
                                </div>
                            )}

                            <div className="product-copy-content [&>h2:last-of-type]:text-center [&>h2:nth-last-of-type(2)]:text-center [&>h3:last-of-type]:text-center [&>h3:last-of-type]:mt-2 [&>h3:last-of-type]:text-green-600">
                                <ReactMarkdown>{funnelData.product_section.copy}</ReactMarkdown>
                            </div>
                        </div>

                        <OfferSelection 
                            primaryText={funnelData.buttons?.primary_text}
                            secondaryText={funnelData.buttons?.secondary_text}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section py-4 px-6" style={{ backgroundColor: funnelData.colors?.background_dark || 'rgba(19, 47, 69)' }}>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="cta-headline text-3xl md:text-4xl font-bold text-white leading-tight">
                        {funnelData.cta_section.headline}
                    </h1>
                </div>
            </section>

        </LayoutSales>
    )
}

export default OfferPage