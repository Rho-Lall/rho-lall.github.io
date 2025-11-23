import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LayoutSales from '../../../components/layout-sales'
import { Helmet } from 'react-helmet'
import OfferSelection from '../../../components/offer-selection/offer-selection'
import OTOBase from '../../../components/one-time-offer/base'
import offerData from '../../../data/oto/6-month-roi-strategy-map'

/**
 * Standard OTO Page: 6 Month ROI Strategy Map
 * 
 * Displayed when customers decline the initial offer.
 * Provides a second opportunity to purchase with full checkout process.
 * 
 * Requirements: 4.1, 4.2, 5.3
 */

const OTOPage = () => {
    // Check if we're in test mode
    const isTest = process.env.GATSBY_STRIPE_IS_TEST === 'true'
    
    // Add TEST indicator to button text if in test mode
    const primaryButtonText = offerData.buttons?.primary_text || "Yes, I Want This"
    const displayPrimaryText = isTest ? `${primaryButtonText} (TEST)` : primaryButtonText
    
    return (
        <LayoutSales pageTitle={offerData.meta.title}>
            <Helmet>
                <title>{offerData.meta.title}</title>
                <meta name="description" content={offerData.meta.description} />
                <meta name="keywords" content={offerData.meta.keywords} />
                <meta name="author" content={offerData.meta.author} />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Test Mode Banner */}
            {isTest && (
                <div className="bg-yellow-400 text-black text-center py-2 px-4 font-bold">
                    ⚠️ TEST MODE - Using test Stripe keys and test price IDs
                </div>
            )}

            <OTOBase 
                offerData={offerData}
                timerMinutes={offerData.timer_minutes}
                productImage={
                    <div className="product-image">
                        <StaticImage
                            src="../../../images/me_t2.png"
                            alt="6 Month ROI Strategy Map"
                            className="w-full h-auto"
                            placeholder="blurred"
                        />
                    </div>
                }
            >
                {/* Offer Selection Buttons */}
                <OfferSelection 
                    checkoutUrl="/one-time-offer/6-month-roi-strategy-map/checkout/"
                    declineUrl="/thankyou/"
                    primaryText={displayPrimaryText}
                    secondaryText={offerData.buttons?.secondary_text || "No thanks, take me to my purchase"}
                />
                
                {/* Note: One-click upsell requires backend implementation at /one-click-upsell endpoint */}
            </OTOBase>

        </LayoutSales>
    )
}

export default OTOPage
