import React from 'react'
import { navigate } from 'gatsby'

/**
 * Reusable Offer Selection Component
 * 
 * Displays two buttons for offer decision: primary (proceed to checkout) and secondary (decline).
 * Used across offer pages to maintain consistent navigation and styling.
 * 
 * @param {string} checkoutUrl - URL to navigate when primary button is clicked (required)
 * @param {string} declineUrl - URL to navigate when secondary button is clicked (required)
 * @param {string} primaryText - Text for primary button (default: "Yes Please")
 * @param {string} secondaryText - Text for secondary button (default: "no thanks")
 */
const OfferSelection = ({ checkoutUrl, declineUrl, primaryText, secondaryText }) => {
  const handlePrimaryClick = () => {
    if (checkoutUrl) {
      navigate(checkoutUrl)
    }
  }

  const handleSecondaryClick = () => {
    if (declineUrl) {
      navigate(declineUrl)
    }
  }

  return (
    <div className="text-center space-y-4 mt-8">
      {/* Primary Button - Proceed to Checkout */}
      <button
        onClick={handlePrimaryClick}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-xl rounded-lg transition duration-200 shadow-lg hover:shadow-xl"
      >
        {primaryText || "Yes Please"}
      </button>

      {/* Secondary Button - Decline Offer */}
      <button
        onClick={handleSecondaryClick}
        className="block w-full text-blue-600 hover:text-blue-800 underline bg-transparent border-0 cursor-pointer"
      >
        {secondaryText || "no thanks"}
      </button>
    </div>
  )
}

export default OfferSelection
