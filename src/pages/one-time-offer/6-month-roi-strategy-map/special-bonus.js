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

// Backend API endpoints
const GET_UUID_API = 'https://payment.bulldozer.life/ecommerce/get-uuid'
const ONE_CLICK_UPSELL_API = 'https://payment.bulldozer.life/ecommerce/one-click-upsell'

const OneClickUpsellPage = () => {
  const [stripeSessionId, setStripeSessionId] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState('')

  // Extract Stripe session ID from URL on mount
  useEffect(() => {
    if (typeof window === 'undefined') return

    const urlParams = new URLSearchParams(window.location.search)
    const sessionId = urlParams.get('session_id')
    
    if (!sessionId) {
      console.warn('No session_id found in URL')
      navigate('/one-time-offer/6-month-roi-strategy-map/')
      return
    }

    setStripeSessionId(sessionId)
  }, [])

  // Handle one-click purchase
  const handlePurchase = async () => {
    if (!stripeSessionId) {
      setError('Invalid session. Please try again.')
      return
    }

    setIsProcessing(true)
    setError('')

    // Create abort controller for timeout handling
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 30000) // 30 second timeout

    try {
      // Step 1: Get UUID from Stripe session ID with retry logic
      // Retry up to 10 times with exponential backoff (webhook may still be processing)
      let uuidData = null
      let lastError = null
      
      for (let i = 0; i < 10; i++) {
        try {
          const uuidResponse = await fetch(`${GET_UUID_API}?stripeSessionId=${stripeSessionId}`, {
            signal: controller.signal,
          })

          if (!uuidResponse.ok) {
            const errorData = await uuidResponse.json().catch(() => ({}))
            lastError = new Error(errorData.error?.message || 'Failed to retrieve session')
            
            // If it's a "not found" error, retry with backoff
            if (errorData.found === false || uuidResponse.status === 404) {
              await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))) // Exponential backoff
              continue
            }
            
            // For other errors, throw immediately
            throw lastError
          }

          const data = await uuidResponse.json()
          
          if (data.success && data.sessionId) {
            uuidData = data
            break
          }
          
          // Session not ready yet, retry with backoff
          if (data.found === false) {
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
            continue
          }
          
          throw new Error('Invalid session response')
          
        } catch (err) {
          if (err.name === 'AbortError') throw err // Don't retry on timeout
          lastError = err
          
          // Last attempt failed
          if (i === 9) throw lastError
          
          // Retry with backoff
          await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
        }
      }
      
      if (!uuidData || !uuidData.sessionId) {
        throw new Error(lastError?.message || 'Payment session not ready. Please try again.')
      }

      // Step 2: Process one-click upsell with UUID
      const upsellResponse = await fetch(ONE_CLICK_UPSELL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId: uuidData.sessionId,
          priceId: offerData.stripe.priceId,
        }),
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!upsellResponse.ok) {
        const errorData = await upsellResponse.json().catch(() => ({}))
        throw new Error(errorData.error?.message || `Server error: ${upsellResponse.status}`)
      }

      const data = await upsellResponse.json()

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
            disabled={isProcessing || !stripeSessionId}
            className={`w-full font-bold py-4 px-8 text-xl rounded-lg transition duration-200 shadow-lg hover:shadow-xl ${
              isProcessing || !stripeSessionId
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
