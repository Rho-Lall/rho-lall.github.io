import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LayoutSales from '../../../components/layout-sales'
import OTOPageTemplate from '../../../funnel-0ps/templates/OTOPageTemplate'
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
    return (
        <OTOPageTemplate
            Layout={LayoutSales}
            offerData={offerData}
            checkoutUrl="/one-time-offer/6-month-roi-strategy-map/checkout/"
            declineUrl="/thankyou/"
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
        />
    )
}

export default OTOPage
