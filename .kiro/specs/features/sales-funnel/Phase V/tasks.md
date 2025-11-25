# Tasks - Phase V: API Integration Fixes & Test/Live Mode Support

## Overview

Tasks are organized to follow the customer journey through the Sales Funnel:
1. Offer Checkout Page
2. OTO Checkout Page  
3. One-Click Upsell Page

This allows testing each step incrementally as you complete the tasks.

---

- [x] **Task 1: Fix Offer Checkout Page - Mode Handling**

**Goal**: Ensure the offer checkout page correctly uses `ISTEST` environment variable

**Files to Modify**:
- `src/pages/offer/results-now-ai-action-pack/checkout.js`

**Steps**:
1. Open `src/pages/offer/results-now-ai-action-pack/checkout.js`
2. Find where `isTest` is derived from environment variable
3. Update to use `process.env.ISTEST === 'true'` (not `GATSBY_STRIPE_IS_TEST`)
4. Verify `isTest` is passed as a boolean to the StripeCheckout component
5. Verify the correct price ID is selected based on `isTest` value

**Testing**:
- Set `ISTEST=true` in root `.env` file
- Build the site
- Navigate to the offer checkout page
- Verify the page loads without errors
- Check browser console for any errors

**Acceptance Criteria**:
- Code uses `process.env.ISTEST` instead of `GATSBY_STRIPE_IS_TEST`
- `isTest` is passed as boolean to StripeCheckout component
- Page loads without errors

---

- [ ] **Task 2: Fix StripeCheckout Component - Mode Handling**

**Goal**: Ensure the StripeCheckout component correctly passes `isTest` to the backend API

**Files to Modify**:
- `src/components/checkout/stripe-checkout.js`

**Steps**:
1. Open `src/components/checkout/stripe-checkout.js`
2. Find the API call to `/create-checkout-session`
3. Verify `isTest` is included in the request body as a boolean
4. Verify the success URL uses the correct Stripe placeholder: `{CHECKOUT_SESSION_ID}`
5. Ensure `isTest` is derived from `process.env.ISTEST === 'true'`

**Testing**:
- Complete a test purchase on the offer checkout page
- Verify the checkout session is created successfully
- Verify you're redirected to Stripe's checkout page
- Complete the payment with test card: 4242 4242 4242 4242

**Acceptance Criteria**:
- `isTest` is passed as boolean in API request body
- Success URL uses `{CHECKOUT_SESSION_ID}` placeholder
- Checkout session is created successfully
- Payment completes and redirects to success URL

---

- [ ] **Task 3: Verify DynamoDB Population (Backend Check)**

**Goal**: Verify that the payment session data is being written to DynamoDB correctly

**Owner**: You (backend verification)

**Steps**:
1. After completing Task 2, complete a test purchase
2. Log into AWS Console
3. Navigate to DynamoDB
4. Check the payment sessions table
5. Verify the session data is present with correct fields:
   - Stripe session ID
   - Internal UUID
   - Payment method ID
   - Expiration timestamp
   - Any other relevant fields

**Acceptance Criteria**:
- Payment session data is written to DynamoDB
- All required fields are present
- Data format is correct
- Session can be retrieved by Stripe session ID

**Note**: This is a backend verification step. If data is not being written correctly, this is a backend issue, not a frontend issue.

---

- [ ] **Task 4: Fix OTO Checkout Page - Mode Handling**

**Goal**: Ensure the OTO checkout page correctly uses `ISTEST` environment variable

**Files to Modify**:
- `src/pages/one-time-offer/6-month-roi-strategy-map/checkout.js`

**Steps**:
1. Open `src/pages/one-time-offer/6-month-roi-strategy-map/checkout.js`
2. Find where `isTest` is derived from environment variable
3. Update to use `process.env.ISTEST === 'true'` (not `GATSBY_STRIPE_IS_TEST`)
4. Verify `isTest` is passed as a boolean to the StripeCheckout component
5. Verify the correct price ID is selected based on `isTest` value

**Testing**:
- Navigate directly to the OTO checkout page
- Verify the page loads without errors
- Complete a test purchase
- Verify checkout works correctly

**Acceptance Criteria**:
- Code uses `process.env.ISTEST` instead of `GATSBY_STRIPE_IS_TEST`
- `isTest` is passed as boolean to StripeCheckout component
- OTO checkout works correctly

---

- [ ] **Task 5: Fix Session ID Extraction in Upsell Page**

**Goal**: Ensure the upsell page correctly extracts the Stripe session ID from the URL

**Files to Modify**:
- `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`

**Steps**:
1. Open `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`
2. Find where the session ID is extracted from the URL
3. Verify it uses `new URLSearchParams(window.location.search).get('session_id')`
4. Add console.log to verify the session ID is extracted correctly
5. Ensure the extracted value is the Stripe session ID (e.g., `cs_test_abc123`)

**Code Example**:
```javascript
const urlParams = new URLSearchParams(window.location.search)
const stripeSessionId = urlParams.get('session_id')
console.log('Extracted Stripe session ID:', stripeSessionId)

if (!stripeSessionId) {
  console.error('Session ID not found in URL')
  setError('Session expired. Please start over.')
  return
}
```

**Testing**:
- Complete a purchase on the offer checkout page
- After payment, verify you're redirected to the upsell page
- Check browser console for the logged session ID
- Verify the session ID starts with `cs_test_` or `cs_live_`

**Acceptance Criteria**:
- Session ID is extracted using URLSearchParams
- Console log shows the extracted session ID
- Session ID has correct format (cs_test_* or cs_live_*)
- Error is shown if session ID is missing

---

- [ ] **Task 6: Fix Price ID Selection in Upsell Page**

**Goal**: Use the correct price ID property based on test/live mode

**Files to Modify**:
- `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`

**Steps**:
1. Open `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`
2. Find where the upsell price ID is selected (currently uses `offerData.stripe.priceId`)
3. Add mode detection: `const isTest = process.env.ISTEST === 'true'`
4. Update to use correct property:
   ```javascript
   const upsellPriceId = isTest 
     ? offerData.stripe.test_priceId 
     : offerData.stripe.price_id
   ```
5. Remove any reference to `offerData.stripe.priceId` (this property doesn't exist)

**Testing**:
- Complete the full funnel flow (offer checkout → payment → upsell page)
- Click the upsell button
- Verify the correct price ID is used in the API call
- Check browser console/network tab to verify the price ID

**Acceptance Criteria**:
- Code uses `process.env.ISTEST` to determine mode
- Uses `test_priceId` when in test mode
- Uses `price_id` when in live mode
- No reference to non-existent `priceId` property

---

- [ ] **Task 7: Add Basic Error Handling to Upsell Page**

**Goal**: Add simple try-catch to handle API errors gracefully

**Files to Modify**:
- `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`

**Steps**:
1. Open `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`
2. Find the API calls (to `/get-uuid` and `/one-click-upsell`)
3. Wrap each API call in a try-catch block
4. Add basic error handling:
   ```javascript
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

**Testing**:
- Complete the full funnel flow
- Click the upsell button
- Verify errors are caught and displayed to the user
- Check browser console for error logs

**Acceptance Criteria**:
- API calls are wrapped in try-catch blocks
- Errors are logged to console
- User-friendly error messages are displayed
- Page doesn't crash on API errors

---

- [ ] **Task 8: End-to-End Testing - Test Mode**

**Goal**: Verify the complete funnel works in test mode

**Steps**:
1. Set `ISTEST=true` in root `.env` file
2. Build the site: `npm run build` or `gatsby build`
3. Start the site: `gatsby serve`
4. Navigate to the offer checkout page
5. Complete purchase with test card: 4242 4242 4242 4242
6. Verify redirect to upsell page with session ID in URL
7. Click the upsell button
8. Verify upsell processes successfully
9. Check browser console for any errors

**Acceptance Criteria**:
- Offer checkout works in test mode
- Payment completes successfully
- Redirects to upsell page with session ID
- Session ID is extracted correctly
- Upsell processes successfully
- No errors in browser console

---

- [ ] **Task 9: End-to-End Testing - Live Mode**

**Goal**: Verify the complete funnel works in live mode

**Steps**:
1. Set `ISTEST=false` in root `.env` file
2. Build the site: `npm run build` or `gatsby build`
3. Start the site: `gatsby serve`
4. Navigate to the offer checkout page
5. Complete purchase with test card: 4242 4242 4242 4242
6. Verify redirect to upsell page with session ID in URL
7. Click the upsell button
8. Verify upsell processes successfully
9. Check browser console for any errors

**Acceptance Criteria**:
- Offer checkout works in live mode
- Payment completes successfully
- Redirects to upsell page with session ID
- Session ID is extracted correctly
- Upsell processes successfully
- No errors in browser console

---

## Summary

**Total Tasks**: 9

**Order of Completion**:
1. Fix offer checkout (Tasks 1-2)
2. Verify backend DynamoDB (Task 3)
3. Fix OTO checkout (Task 4)
4. Fix upsell page (Tasks 5-7)
5. End-to-end testing (Tasks 8-9)

**Estimated Time**: 2-4 hours (frontend tasks)

**Success**: When all tasks are complete, the Sales Funnel should work end-to-end in both test and live modes.
