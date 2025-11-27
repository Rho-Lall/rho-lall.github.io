import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LayoutSales from '../../../components/layout-sales'
import { OfferPageTemplate } from '../../../funnel-0ps'
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
    return (
        <OfferPageTemplate
            Layout={LayoutSales}
            offerData={offerData}
            checkoutUrl="/offer/results-now-ai-action-pack/checkout/"
            declineUrl="/one-time-offer/6-month-roi-strategy-map/"
            productImage={
                <div className="product-image">
                    <StaticImage
                        src="../../../images/ads/Results Now AI Action Pack.png"
                        alt="Results Now AI Action Pack"
                        className="w-full h-auto"
                        placeholder="blurred"
                    />
                </div>
            }
        />
    )
}

export default OfferPage
