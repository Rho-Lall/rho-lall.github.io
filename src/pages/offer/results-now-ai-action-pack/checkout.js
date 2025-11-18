import React from 'react'
import { Helmet } from 'react-helmet'
import StripeCheckout from '../../../components/checkout/stripe-checkout'
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
  
  // Success URL: One-click upsell page (session ID will be appended by StripeCheckout component)
  const successUrl = `${baseUrl}/one-time-offer/6-month-roi-strategy-map/special-bonus/`
  
  // Cancel URL: Back to offer page
  const cancelUrl = `${baseUrl}/offer/results-now-ai-action-pack/`

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Checkout - {offerData.meta.title}</title>
        <meta name="description" content={`Complete your purchase of ${offerData.meta.title}`} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* Embedded Checkout - Full Screen */}
      <div className="w-full h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl shadow-lg rounded-lg p-6 bg-white">
          <StripeCheckout
            priceId={offerData.stripe.priceId}
            successUrl={successUrl}
            cancelUrl={cancelUrl}
            isTest={true}
          />
        </div>
      </div>
    </div>
  )
}

export default OfferCheckoutPage
