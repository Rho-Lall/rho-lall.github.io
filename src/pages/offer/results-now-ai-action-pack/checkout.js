import React from 'react'
import { CheckoutPageTemplate } from '../../../funnel-0ps'
import offerData from '../../../data/offers/results-now-ai-action-pack'

/**
 * Offer Checkout Page: Results Now AI Action Pack
 * 
 * Embedded Stripe checkout for the offer.
 * On successful payment, redirects to one-click upsell page with session ID.
 * On cancel, redirects back to offer page.
 * 
 * Requirements: 1.1, 1.2, 2.5
 */

const OfferCheckoutPage = () => {
  // Get base URL for constructing success/cancel URLs
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
  
  // Success URL: One-click upsell page with Stripe session ID placeholder
  // Stripe will replace {CHECKOUT_SESSION_ID} with the actual session ID
  const successUrl = `${baseUrl}/one-time-offer/6-month-roi-strategy-map/special-bonus/?session_id={CHECKOUT_SESSION_ID}`
  
  // Cancel URL: Back to offer page
  const cancelUrl = `${baseUrl}/offer/results-now-ai-action-pack/`

  return (
    <CheckoutPageTemplate
      offerData={offerData}
      successUrl={successUrl}
      cancelUrl={cancelUrl}
    />
  )
}

export default OfferCheckoutPage
