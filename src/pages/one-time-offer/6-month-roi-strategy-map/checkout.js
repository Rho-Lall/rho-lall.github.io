import React from 'react'
import CheckoutPageTemplate from '../../../funnel-0ps/templates/CheckoutPageTemplate'
import offerData from '../../../data/oto/6-month-roi-strategy-map'

/**
 * OTO Checkout Page: 6 Month ROI Strategy Map
 * 
 * Embedded Stripe checkout for the OTO.
 * On successful payment, redirects to thank you page.
 * On cancel, redirects back to OTO offer page.
 * 
 * Requirements: 4.3, 4.4
 */

const OTOCheckoutPage = () => {
  // Get base URL for constructing success/cancel URLs
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  
  // Success URL: Thank you page (end of funnel)
  const successUrl = `${baseUrl}/thankyou/`
  
  // Cancel URL: Back to OTO offer page
  const cancelUrl = `${baseUrl}/one-time-offer/6-month-roi-strategy-map/`

  return (
    <CheckoutPageTemplate
      offerData={offerData}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
    />
  )
}

export default OTOCheckoutPage
