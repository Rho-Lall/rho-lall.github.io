import React from 'react'
import { Helmet } from 'react-helmet'
import StripeCheckout from '../../../components/checkout/stripe-checkout'
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

  // Determine if we're in test mode
  const isTest = process.env.GATSBY_ISTEST === 'true'
  
  // Select the correct price ID based on test mode
  const priceId = isTest ? offerData.stripe.test_priceId : offerData.stripe.price_id

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Checkout - {offerData.meta.title}</title>
        <meta name="description" content={`Complete your purchase of ${offerData.meta.title}`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Embedded Checkout */}
      <div className="w-full min-h-screen flex items-start justify-center p-4 pt-12">
        <div className="w-full max-w-2xl shadow-lg rounded-lg p-6 bg-white">
          <StripeCheckout
            priceId={priceId}
            successUrl={successUrl}
            cancelUrl={cancelUrl}
            isTest={isTest}
          />
        </div>
      </div>
    </div>
  )
}

export default OTOCheckoutPage
