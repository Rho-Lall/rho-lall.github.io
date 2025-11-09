import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'

// Configuration Constants
const STRIPE_API_ENDPOINT = 'https://0ux6zkhi08.execute-api.us-east-1.amazonaws.com/prod'
const STRIPE_PRICE_ID = 'price_1SReks2uBHxDuQdErHcHumBk'

const CheckoutPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const initiateCheckout = async () => {
            try {
                const baseUrl = window.location.origin
                const successUrl = `${baseUrl}/offer/results-now-ai-action-pack/?payment=success`
                const cancelUrl = `${baseUrl}/offer/results-now-ai-action-pack/?payment=cancelled`

                const response = await fetch(STRIPE_API_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        priceId: STRIPE_PRICE_ID,
                        successUrl,
                        cancelUrl,
                    }),
                })

                console.log('API Response status:', response.status)
                
                if (!response.ok) {
                    const errorData = await response.json()
                    console.error('API Error Response:', errorData)
                    throw new Error(errorData.error?.message || errorData.message || 'Failed to create checkout session')
                }

                const data = await response.json()
                console.log('API Success Response:', data)
                
                const { sessionUrl } = data
                
                if (!sessionUrl) {
                    throw new Error('No checkout URL received from server')
                }
                
                // Redirect to Stripe checkout
                window.location.href = sessionUrl
                
            } catch (err) {
                setError('Unable to process checkout. Please try again.')
                console.error('Checkout error:', err)
                setIsLoading(false)
            }
        }

        initiateCheckout()
    }, [])

    return (
        <>
            <Helmet>
                <title>Processing Checkout - Results Now AI Action Pack</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="max-w-md w-full mx-auto p-8">
                    {isLoading && !error && (
                        <div className="text-center">
                            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Processing your order...</h1>
                            <p className="text-gray-600">Please wait while we redirect you to secure checkout.</p>
                        </div>
                    )}

                    {error && (
                        <div className="text-center">
                            <div className="p-6 rounded-lg bg-red-100 border border-red-400 mb-4">
                                <h2 className="text-xl font-bold text-red-700 mb-2">Checkout Error</h2>
                                <p className="text-red-600">{error}</p>
                            </div>
                            <a 
                                href="/offer/results-now-ai-action-pack/" 
                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
                            >
                                Return to Offer Page
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CheckoutPage
