import React, { useState } from 'react';

/**
 * Stripe Checkout Component
 * 
 * Handles Stripe checkout session creation and redirects users to Stripe payment page.
 * 
 * @param {string} priceId - Stripe Price ID for the product (optional, falls back to default)
 * @param {string} buttonText - Text to display on the checkout button (default: "Buy Now")
 * @param {string} buttonClassName - Custom CSS classes for the button (optional)
 */

// Configuration Constants
// Backend API endpoint for creating Stripe checkout sessions
const STRIPE_API_ENDPOINT = 'https://0ux6zkhi08.execute-api.us-east-1.amazonaws.com/prod';

// Stripe Price IDs
// Note: Use test Price IDs for development, production Price IDs for live environment
const STRIPE_PRICE_ID_TEST = 'price_test_1234567890'; // Replace with actual test Price ID from Stripe Dashboard
const STRIPE_PRICE_ID_PROD = 'price_1234567890'; // Replace with actual production Price ID from Stripe Dashboard

// Determine which Price ID to use based on environment
const STRIPE_PRICE_ID = process.env.NODE_ENV === 'production' 
  ? STRIPE_PRICE_ID_PROD 
  : STRIPE_PRICE_ID_TEST;

/**
 * Generate success URL for Stripe checkout
 * @param {string} currentUrl - The current page URL
 * @returns {string} Success redirect URL
 */
const getSuccessUrl = (currentUrl) => {
  return `${currentUrl}?payment=success`;
};

/**
 * Generate cancel URL for Stripe checkout
 * @param {string} currentUrl - The current page URL
 * @returns {string} Cancel redirect URL
 */
const getCancelUrl = (currentUrl) => {
  return `${currentUrl}?payment=cancelled`;
};

const StripeCheckout = ({ priceId, buttonText = "Buy Now", buttonClassName = "" }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    setIsLoading(true);
    setError('');

    try {
      const currentUrl = window.location.href.split('?')[0]; // Remove any existing query params
      
      const response = await fetch(STRIPE_API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: priceId || STRIPE_PRICE_ID,
          successUrl: getSuccessUrl(currentUrl),
          cancelUrl: getCancelUrl(currentUrl),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to create checkout session');
      }

      const { sessionUrl } = await response.json();
      
      // Redirect to Stripe checkout
      window.location.href = sessionUrl;
      
    } catch (err) {
      setError('Unable to process checkout. Please try again.');
      console.error('Checkout error:', err);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <div className="p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
          {error}
        </div>
      )}
      
      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className={buttonClassName || "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 text-lg rounded-lg transition duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"}
      >
        {isLoading ? 'Processing...' : buttonText}
      </button>
    </div>
  );
};

export default StripeCheckout;
