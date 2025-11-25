import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LayoutSales from '../../../components/layout-sales'
import { Helmet } from 'react-helmet'
import OfferSelection from '../../../components/offer-selection/offer-selection'
import OfferBase from '../../../components/offer/base'
import offerData from '../../../data/offers/results-now-ai-action-pack'

/**
 * Offer Page: Results Now AI Action Pack
 * 
 * Main offer page displayed after lead capture.
 * Customer can proceed to checkout or decline to see OTO.
 * 
 * Requirements: 1.1, 2.1, 2.2, 2.3, 2.4, 2.5
 */

const OfferPage = () => {
    // Check if we're in test mode
    const isTest = process.env.GATSBY_ISTEST === 'true'
    
    // Add TEST indicator to button text if in test mode
    const primaryButtonText = offerData.buttons?.primary_text || "Yes Please"
    const displayPrimaryText = isTest ? `${primaryButtonText} (TEST)` : primaryButtonText
    
    return (
        <LayoutSales pageTitle={offerData.meta.title}>
            <Helmet>
                <title>{offerData.meta.title}</title>
                <meta name="description" content={offerData.meta.description} />
                <meta name="keywords" content={offerData.meta.keywords} />
                <meta name="author" content={offerData.meta.author} />
            </Helmet>

            {/* Test Mode Banner */}
            {isTest && (
                <div className="bg-yellow-400 text-black text-center py-2 px-4 font-bold">
                    ⚠️ TEST MODE - Using test Stripe keys and test price IDs
                </div>
            )}

            <OfferBase 
                offerData={offerData}
                timerMinutes={offerData.timer_minutes}
                productImage={
                    <div className="product-image">
                        <StaticImage
                            src="../../images/ads/Results Now AI Action Pack.png"
                            alt="Results Now AI Action Pack"
                            className="w-full h-auto"
                            placeholder="blurred"
                        />
                    </div>
                }
            >
                {/* Offer Selection Buttons */}
                <OfferSelection 
                    checkoutUrl="/offer/results-now-ai-action-pack/checkout/"
                    declineUrl="/one-time-offer/6-month-roi-strategy-map/"
                    primaryText={displayPrimaryText}
                    secondaryText={offerData.buttons?.secondary_text || "No thanks"}
                />
            </OfferBase>

        </LayoutSales>
    )
}

export default OfferPage
