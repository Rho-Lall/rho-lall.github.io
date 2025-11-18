import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { navigate } from 'gatsby'
import LayoutSales from '../../../components/layout-sales'
import OTOBase from '../../../components/one-time-offer/base'
import offerData from '../../../data/oto/6-month-roi-strategy-map'

/**
 * One-Click Upsell Page: 6 Month ROI Strategy Map
 * 
 * Post-purchase upsell page that allows customers to add this offer
 * using their existing payment method without re-entering card details.
 * 
 * Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 5.1, 5.2, 6.4, 10.1
 */

// Backend API endpoint for one-click upsell
const ONE_CLICK_UPSELL_API = 'https://payment.bulldozer.life/one-click-upsell'

const OneClickUpsellPage = () => {
  const [sessionId, setSessionId] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  // Extract session ID from URL on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const session = urlParams.get('session')
      
      // TEMPORARILY COMMENTED OUT FOR REVIEW
      // if (!session) {
      //   // No session ID - redirect to standard OTO page
      //   navigate('/one-time-offer/6-month-roi-strategy-map/')
      // } else {
      //   setSessionId(session)
      // }
      
      // For now, just set the session ID if it exists
      if (session) {
        setSessionId(session)
      }
    }
  }, [])

  // Handle one-click purchase
  const handlePurchase = async () => {
    if (!sessionId) {
      setError('Invalid session. Please try again.')
      return
    }

    setIsProcessing(true)
    setError('')

    // Create abort controller for timeout handling
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

    try {
      const response = await fetch(ONE_CLICK_UPSELL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: sessionId,
          priceId: offerData.stripe.priceId,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error?.message || `Server error: ${response.status}`)
      }

      const data = await response.json()

      if (!data.success) {
        throw new Error(data.error?.message || 'Payment failed. Please try again.')
      }

      // Success - redirect to thank you page
      navigate('/thankyou/')

    } catch (err) {
      clearTimeout(timeoutId)

      // Handle specific error types
      let errorMessage = 'Unable to process payment. Please try again.'

      if (err.name === 'AbortError') {
        errorMessage = 'Request timed out. Please check your internet connection and try again.'
      } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
        errorMessage = 'Network error. Please check your internet connection and try again.'
      } else if (err.message) {
        errorMessage = err.message
      }

      setError(errorMessage)
      console.error('One-click upsell error:', err)
      setIsProcessing(false)
    }
  }

  // Handle decline - redirect to thank you page
  const handleDecline = () => {
    navigate('/thankyou/')
  }

  return (
    <LayoutSales pageTitle={offerData.meta.title}>
      <Helmet>
        <title>{offerData.meta.title}</title>
        <meta name="description" content={offerData.meta.description} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <OTOBase 
        offerData={offerData}
        progressText="Congratulations! One More Thing..."
        timerMinutes={offerData.timer_minutes}
      >
        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
            <p className="font-semibold mb-1">Payment Error</p>
            <p>{error}</p>
          </div>
        )}

        {/* One-Click Purchase Buttons */}
        <div className="text-center space-y-4 mt-8">
          {/* One-Click Purchase Button */}
          <button
            onClick={handlePurchase}
            disabled={isProcessing || !sessionId}
            className={`w-full font-bold py-4 px-8 text-xl rounded-lg transition duration-200 shadow-lg hover:shadow-xl ${
              isProcessing || !sessionId
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700 text-white'
            }`}
          >
            {isProcessing ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              offerData.buttons.primary_text || 'Yes! Add This To My Order'
            )}
          </button>

          {/* Decline Button */}
          <button
            onClick={handleDecline}
            disabled={isProcessing}
            className="block w-full text-blue-600 hover:text-blue-800 underline bg-transparent border-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {offerData.buttons.secondary_text || "No thanks, I'll pass on this offer"}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>One-Click Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </OTOBase>

    </LayoutSales>
  )
}

export default OneClickUpsellPage
