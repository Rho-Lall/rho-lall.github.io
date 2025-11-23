import React, { useState, useEffect, useRef } from 'react';
import { loadStripe } from '@stripe/stripe-js';

/**
 * Stripe Embedded Checkout Component
 * 
 * Handles embedded Stripe checkout with client secret from backend.
 * Supports one-click upsell flow by capturing session ID after successful payment.
 * 
 * @param {string} priceId - Stripe Price ID for the product (required)
 * @param {string} successUrl - URL to redirect after successful payment (optional)
 * @param {string} cancelUrl - URL to redirect on cancel (optional)
 * @param {boolean} isTest - Whether to use test mode (optional, defaults based on NODE_ENV)
 * @param {object} appearance - Stripe appearance customization object (optional)
 */

// Configuration Constants
// Backend API endpoint for creating Stripe checkout sessions
const STRIPE_API_ENDPOINT = 'https://payment.bulldozer.life/ecommerce/create-checkout-session';

// Stripe publishable keys (loaded from credentials/.env via symlink)
const STRIPE_PUBLISHABLE_KEY_TEST = process.env.GATSBY_STRIPE_PUBLISHABLE_KEY_TEST;
const STRIPE_PUBLISHABLE_KEY_PROD = process.env.GATSBY_STRIPE_PUBLISHABLE_KEY_PROD;

const StripeCheckout = ({ priceId, successUrl, cancelUrl, isTest = false, appearance }) => {
  // Determine which Stripe key to use based on isTest prop
  // Default is LIVE mode (isTest = false), only use test keys when explicitly set to true
  const STRIPE_PUBLISHABLE_KEY = isTest ? STRIPE_PUBLISHABLE_KEY_TEST : STRIPE_PUBLISHABLE_KEY_PROD;
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [sessionId, setSessionId] = useState('');
  const checkoutRef = useRef(null);
  const stripePromise = useRef(null);
  const checkoutInstance = useRef(null);

  // Initialize Stripe
  useEffect(() => {
    if (!stripePromise.current) {
      stripePromise.current = loadStripe(STRIPE_PUBLISHABLE_KEY);
    }
  }, []);

  // Fetch client secret from backend
  useEffect(() => {
    const createCheckoutSession = async () => {
      if (!priceId) {
        setError('Product price ID is required');
        setIsLoading(false);
        return;
      }

      // Create abort controller for timeout handling
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      try {
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
        const defaultSuccessUrl = successUrl || `${baseUrl}/thankyou`;
        const defaultCancelUrl = cancelUrl || (typeof window !== 'undefined' ? window.location.href.split('?')[0] : '');
        
        const response = await fetch(STRIPE_API_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            priceId: priceId,
            productType: 'offer', // Backend expects 'offer' or 'oto'
            successUrl: defaultSuccessUrl,
            cancelUrl: defaultCancelUrl,
          }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error?.message || `Server error: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data.success || !data.clientSecret) {
          throw new Error(data.error?.message || 'No client secret received from server');
        }
        
        setClientSecret(data.clientSecret);
        if (data.sessionId) {
          setSessionId(data.sessionId);
        }
        
      } catch (err) {
        clearTimeout(timeoutId);
        
        // Handle specific error types
        let errorMessage = 'Unable to initialize checkout. Please try again.';
        
        if (err.name === 'AbortError') {
          errorMessage = 'Request timed out. Please check your internet connection and try again.';
        } else if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
          errorMessage = 'Network error. Please check your internet connection and try again.';
        } else if (err.message) {
          errorMessage = err.message;
        }
        
        setError(errorMessage);
        console.error('Checkout initialization error:', err);
        setIsLoading(false);
      }
    };

    createCheckoutSession();
  }, [priceId, successUrl, cancelUrl, isTest]);

  // Initialize embedded checkout when client secret is available
  useEffect(() => {
    const initializeCheckout = async () => {
      if (!clientSecret || !checkoutRef.current) return;

      try {
        const stripe = await stripePromise.current;
        
        if (!stripe) {
          throw new Error('Failed to load Stripe');
        }

        // Mount embedded checkout
        const checkout = await stripe.initEmbeddedCheckout({
          clientSecret,
        });

        if (!checkout) {
          throw new Error('Failed to initialize Stripe checkout');
        }

        checkout.mount(checkoutRef.current);
        checkoutInstance.current = checkout;
        setIsLoading(false);

        // Listen for checkout completion (if supported)
        if (typeof checkout.on === 'function') {
          checkout.on('complete', () => {
            handleCheckoutComplete();
          });
        }

      } catch (err) {
        setError(err.message || 'Failed to initialize embedded checkout. Please try again.');
        console.error('Embedded checkout error:', err);
        setIsLoading(false);
      }
    };

    initializeCheckout();

    // Cleanup
    return () => {
      if (checkoutInstance.current) {
        checkoutInstance.current.destroy();
      }
    };
  }, [clientSecret]);

  // Handle successful checkout completion
  const handleCheckoutComplete = () => {
    // Extract session ID from URL or use stored session ID
    const urlParams = new URLSearchParams(window.location.search);
    const sessionIdFromUrl = urlParams.get('session_id');
    const finalSessionId = sessionIdFromUrl || sessionId;

    console.log('Checkout complete - Session ID:', finalSessionId);

    // Redirect to success URL with session ID for one-click upsell
    if (successUrl) {
      const separator = successUrl.includes('?') ? '&' : '?';
      const redirectUrl = finalSessionId 
        ? `${successUrl}${separator}session=${finalSessionId}`
        : successUrl;
      console.log('Redirecting to:', redirectUrl);
      window.location.href = redirectUrl;
    }
  };

  // Retry initialization
  const handleRetry = () => {
    setError('');
    setIsLoading(true);
    setClientSecret('');
    // Re-trigger useEffect by clearing and resetting
    window.location.reload();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {error && (
        <div className="mb-4 p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
          <p className="font-semibold mb-2">Payment Error</p>
          <p className="mb-3">{error}</p>
          <button
            onClick={handleRetry}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition duration-200"
          >
            Retry
          </button>
        </div>
      )}
      
      {isLoading && !error && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
            <p className="text-gray-600">Loading secure checkout...</p>
          </div>
        </div>
      )}
      
      <div 
        ref={checkoutRef} 
        className={isLoading || error ? 'hidden' : ''} 
        style={{ backgroundColor: '#ffffff' }}
      ></div>
    </div>
  );
};

export default StripeCheckout;
