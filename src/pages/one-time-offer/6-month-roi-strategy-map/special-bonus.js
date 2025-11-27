import React from 'react'
import LayoutSales from '../../../components/layout-sales'
import UpsellPageTemplate from '../../../funnel-0ps/templates/UpsellPageTemplate'
import offerData from '../../../data/oto/6-month-roi-strategy-map'

/**
 * One-Click Upsell Page: 6 Month ROI Strategy Map
 * 
 * Post-purchase upsell page that allows customers to add this offer
 * using their existing payment method without re-entering card details.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1, 5.2, 6.4, 10.1
 */

const OneClickUpsellPage = () => {
  return (
    <UpsellPageTemplate
      Layout={LayoutSales}
      offerData={offerData}
      declineUrl="/thankyou/"
    />
  )
}

export default OneClickUpsellPage
