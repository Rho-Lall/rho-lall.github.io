# Design Document - Phase V: API Integration Fixes & Test/Live Mode Support

## Overview

Phase V addresses critical bugs discovered during Phase IV implementation. This phase focuses on fixing the price ID property mismatch in upsell pages and ensuring consistent test/live mode handling across all pages in the Sales Funnel.

## Problem Statement

During Phase IV implementation, several issues were discovered:

1. **Price ID Property Mismatch**: The upsell page references `offerData.stripe.priceId` which doesn't exist in the data structure
2. **Missing Test Mode Detection**: Upsell pages don't detect test/live mode, causing incorrect price IDs to be used
3. **Inconsistent Mode Handling**: Checkout pages detect test/live mode, but upsell pages don't
4. **Session ID Handling**: Need to ensure proper extraction and validation of Stripe session IDs for upsell flow

## Architecture

### Current Data Structure

```javascript
// Offer Data Files (e.g., results-now-ai-action-pack.js)
export const offerData = {
  stripe: {
    test_priceId: 'price_1SReks2uBHxDuQdErHcHumBk',  // Used in test mode
    price_id: 'price_1SReij2w8fx5rDMT84QKwhmr'       // Used in live mode
  },
  // ... other properties
}
```

### Environment Variables

```bash
# Root .env file
GATSBY_STRIPE_PUBLISHABLE_KEY_TEST=pk_test_...
GATSBY_STRIPE_PUBLISHABLE_KEY_PROD=pk_live_...
ISTEST=true  # or 'false' for live mode
```

**Important**: The `ISTEST` variable is set at build time and remains constant throughout the build. The Sales Funnel does not dynamically switch between test and live mode at runtime.

### API Endpoints

```
Base URL: https://payment.bulldozer.life/ecommerce

POST /create-checkout-session
  - Creates Stripe checkout session
  - Request Parameters: 
    - priceId: Stripe price ID
    - isTest: boolean (optional, defaults to false if not passed)
    - successUrl: URL to redirect after successful payment
    - cancelUrl: URL to redirect if payment is cancelled
  - Note: isTest is hardcoded at build time based on ISTEST environment variable
  
GET /get-uuid?stripeSessionId={stripe_session_id}
  - Retrieves internal UUID for one-click upsell
  - Request Parameters:
    - stripeSessionId: The Stripe session ID from the URL (e.g., cs_test_abc123)
  - Response:
    - sessionId: Internal UUID (e.g., c4c8c4a9-270d-4296-868f-ace647345651)
    - expiresAt: Expiration timestamp
  - Note: The response field is called "sessionId" but it's actually the internal UUID, NOT the Stripe session ID
  
POST /one-click-upsell
  - Processes upsell payment using stored payment method
  - Request Parameters:
    - sessionId: The internal UUID from /get-uuid response (NOT the Stripe session ID)
    - priceId: Stripe price ID for the upsell product
```

## Design Solutions

### Solution 1: Fix Price ID Selection Logic in Upsell Page

**Problem**: Upsell page uses non-existent `offerData.stripe.priceId` property

**Solution**: Add test/live mode detection and use correct property names based on `ISTEST` environment variable

```javascript
// special-bonus.js
const isTest = process.env.ISTEST === 'true'

// In handlePurchase function:
const upsellPriceId = isTest 
  ? offerData.stripe.test_priceId 
  : offerData.stripe.price_id

const upsellResponse = await fetch(ONE_CLICK_UPSELL_API, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    sessionId: uuidData.sessionId,
    priceId: upsellPriceId,  // Use the correct price ID
  }),
})
```

**Files to Modify**:
- `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`

### Solution 2: Standardize isTest Parameter in API Calls

**Problem**: Need to ensure `isTest` parameter is consistently passed to backend API calls

**Solution**: Derive `isTest` from `ISTEST` environment variable at build time and pass as boolean

```javascript
// In checkout pages
const isTest = process.env.ISTEST === 'true'

const response = await fetch(STRIPE_API_ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    priceId: priceId,
    isTest: isTest,  // Boolean, hardcoded at build time
    successUrl: defaultSuccessUrl,
    cancelUrl: defaultCancelUrl,
  }),
})
```

**Note**: The `isTest` parameter is optional. If not passed, the backend defaults to live mode.

**Files to Modify**:
- `src/components/checkout/stripe-checkout.js`
- `src/pages/offer/results-now-ai-action-pack/checkout.js`
- `src/pages/one-time-offer/6-month-roi-strategy-map/checkout.js`

### Solution 3: Fix Session ID Extraction in Upsell Flow

**Problem**: The code is not successfully extracting the Stripe session ID from the URL, causing "missing ID" errors even though the ID is present in the URL

**Solution**: Ensure proper extraction of the session ID from URL query parameters and verify it's being passed correctly to the API

```javascript
// In upsell page (special-bonus.js)

// Extract session_id from URL query parameters
// The URL format is: /special-bonus?session_id=cs_test_abc123
const urlParams = new URLSearchParams(window.location.search)
const stripeSessionId = urlParams.get('session_id')

// Log for debugging to verify extraction
console.log('Extracted Stripe session ID:', stripeSessionId)

if (!stripeSessionId) {
  console.error('Session ID not found in URL')
  setError('Session expired. Please start over.')
  return
}

// Use the Stripe session ID (not UUID) to get the internal UUID
const response = await fetch(`${GET_UUID_API}?stripeSessionId=${stripeSessionId}`)
```

**Key Points**:
- Verify the URL parameter name is exactly `session_id` (case-sensitive)
- Ensure the success URL in the checkout uses the correct Stripe placeholder: `{CHECKOUT_SESSION_ID}`
- The extracted value should be the Stripe session ID (e.g., `cs_test_abc123`), not the internal UUID

**Files to Modify**:
- `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`
- `src/components/checkout/stripe-checkout.js` (verify success URL format)

### Solution 4: Add Basic Error Handling

**Problem**: Need basic error handling to catch and display API errors

**Solution**: Add simple try-catch blocks around API calls to display error messages

```javascript
// In checkout and upsell pages - minimal error handling

try {
  const response = await fetch(API_ENDPOINT, { /* ... */ })
  const data = await response.json()
  
  if (!response.ok || !data.success) {
    throw new Error(data.error?.message || 'Payment failed')
  }
  
  // Success handling
} catch (error) {
  console.error('[Payment Error]', error)
  setError(error.message || 'Something went wrong. Please try again.')
}
```

**Files to Modify**:
- `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js` (add try-catch around upsell API call)



## File Changes Summary

### Modified Files
- `src/components/checkout/stripe-checkout.js` - Ensure `isTest` is derived from `ISTEST` and passed as boolean
- `src/pages/offer/results-now-ai-action-pack/checkout.js` - Ensure consistent mode handling
- `src/pages/one-time-offer/6-month-roi-strategy-map/checkout.js` - Ensure consistent mode handling
- `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js` - Fix price ID logic, fix session ID extraction, add basic error handling

## Testing Strategy

### Manual Testing
1. **Test Mode Flow**:
   - Set `ISTEST=true` in root `.env` file
   - Build the site
   - Complete purchase with test card (4242 4242 4242 4242)
   - Verify correct test price IDs are used
   - Complete one-click upsell
   - Verify upsell processes successfully

2. **Live Mode Flow**:
   - Set `ISTEST=false` in root `.env` file
   - Build the site
   - Complete purchase with test card in live mode
   - Verify correct live price IDs are used
   - Complete one-click upsell
   - Verify upsell processes successfully


