import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

/**
 * Base OTO Offer Content Component
 * 
 * Reusable component for displaying OTO offer content.
 * Designed to be scalable for 100+ different OTOs.
 * 
 * @param {Object} offerData - The offer content data (headline, copy, pricing, etc.)
 * @param {React.ReactNode} productImage - Product image to display after timer (optional)
 * @param {React.ReactNode} children - Purchase buttons/components to render
 * @param {string} progressText - Text to display in progress bar (default: "Almost Done...")
 * @param {number} timerMinutes - Countdown timer duration in minutes (default: 5)
 */
const OTOBase = ({ offerData, productImage, children, progressText = "Almost Done...", timerMinutes = 5 }) => {
    const [timeLeft, setTimeLeft] = useState(timerMinutes * 60) // Convert minutes to seconds

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

    return (
        <>
            {/* Hero Section */}
            <section className="offer-section bg-white px-6">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Pre-Hero: Text above progress bar */}
                    {offerData.pre_hero_section?.text_above_progress && (
                        <p className="text-xl text-gray-700 mb-2">
                            {offerData.pre_hero_section.text_above_progress}
                        </p>
                    )}

                    {/* Progress Bar */}
                    <div className="mb-2">
                        <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
                            <div
                                className="h-8 rounded-full transition-all duration-300 relative"
                                style={{
                                    width: offerData.pre_hero_section?.progress_bar?.width || '80%',
                                    background: offerData.pre_hero_section?.progress_bar?.gradient || 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)'
                                }}
                            >
                                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-sm">
                                    {progressText}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Pre-Hero: Text below progress bar */}
                    {offerData.pre_hero_section?.text_below_progress && (
                        <p className="text-lg text-gray-600 mb-4">
                            {offerData.pre_hero_section.text_below_progress}
                        </p>
                    )}

                    {/* Offer Headline */}
                    <h1 className="hero-headline text-3xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight" style={{ whiteSpace: 'pre-line' }}>
                        {offerData.hero_section?.headline}
                    </h1>

                    {/* Sub-headline */}
                    {offerData.hero_section?.sub_headline && (
                        <div className="hero-sub-headline text-3xl md:text-5xl font-bold text-red-600 mb-4 mt-4">
                            {offerData.hero_section.sub_headline}
                        </div>
                    )}

                    {/* Countdown Timer */}
                    {offerData.show_timer !== false && (
                        <div className="inline-block">
                            <div className="text-4xl md:text-6xl font-bold text-black" style={{ fontFamily: 'monospace, "Courier New", Courier' }}>
                                {formatTime(timeLeft)}
                            </div>
                            <p className="text-sm mt-2 text-gray-600">Minutes : Seconds</p>
                        </div>
                    )}

                    {/* Product Image - Renders after timer if provided */}
                    {productImage && (
                        <div className="mt-8">
                            {productImage}
                        </div>
                    )}

                </div>
            </section>

            {/* Product Section*/}
            <section className="product-section bg-white py-16 px-6">
                <div className="max-w-4xl mx-auto">
                    <div>
                        <div className='product-copy'>
                            {/* Product copy content */}
                            <div className="product-copy-content">
                                <ReactMarkdown>{offerData.product_section?.copy}</ReactMarkdown>
                            </div>
                        </div>

                        {/* Offer Section - Centered headline and subheadline */}
                        {(offerData.offer_section?.headline || offerData.offer_section?.sub_headline) && (
                            <div className="offer-section-content text-center mt-8 mb-6">
                                {offerData.offer_section?.headline && (
                                    <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                                        {offerData.offer_section.headline}
                                    </h2>
                                )}
                                {offerData.offer_section?.sub_headline && (
                                    <p className="text-xl md:text-2xl text-gray-700">
                                        {offerData.offer_section.sub_headline}
                                    </p>
                                )}
                            </div>
                        )}

                        {/* Render children (purchase buttons) */}
                        {children}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {offerData.cta_section?.headline && (
                <section className="cta-section py-4 px-6" style={{ backgroundColor: offerData.colors?.background_dark || 'rgba(19, 47, 69)' }}>
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="cta-headline text-3xl md:text-4xl font-bold text-white leading-tight">
                            {offerData.cta_section.headline}
                        </h1>
                    </div>
                </section>
            )}
        </>
    )
}

export default OTOBase
