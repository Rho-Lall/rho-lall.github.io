# Implementation Plan - Phase IV: Complete Funnel with Upsells

## Context

Phase IV builds on Phase III's basic payment integration to create a complete sales funnel with embedded checkout, one-click upsells, and conditional routing. This phase requires both frontend and backend work.

**Phase IV Goal**: Implement embedded checkout and complete funnel flow with upsells

---

## Tasks

- [x] 1. Backend API Updates (Separate Repository) - COMPLETE
  - [x] 1.1 Refactor checkout session endpoint for embedded checkout
    - Convert existing checkout session creation to return embedded checkout data
    - Return client secret for Stripe.js initialization (not redirect URL)
    - Include payment method ID in response for one-click upsell
    - Include customer session ID for tracking
    - Supports both offer and OTO products
    - _Requirements: 1.1, 1.3, 8.1_
  
  - [x] 1.2 Create one-click upsell payment endpoint
    - Create new API endpoint: `/one-click-upsell`
    - Accept session ID from frontend (not payment method ID)
    - Retrieve payment method ID from DynamoDB using session ID
    - Validate session hasn't expired
    - Process payment using stored payment method
    - Return success/failure status
    - Delete session from DynamoDB after use (one-time use)
    - _Requirements: 3.3, 3.4, 8.2_
  
  - [x] 1.3 Create DynamoDB table and webhook for secure payment data storage
    - Create DynamoDB table: `payment-sessions`
    - Table schema: sessionId (PK), paymentMethodId, customerId, stripeSessionId, timestamp, expiresAt (TTL)
    - Set up Stripe webhook listener for `checkout.session.completed` event
    - On successful payment, extract payment method ID from Stripe event
    - Generate unique session ID and store in DynamoDB
    - Return session ID in checkout response for frontend to use
    - Set TTL to auto-delete sessions after 24 hours
    - _Requirements: 6.1, 8.3_
  
  - [x] 1.4 Fix parameter naming bug: productId → priceId
    - Update backend API to accept `priceId` parameter instead of `productId`
    - Backend currently expects: `{ "productId": "price_123..." }`
    - Should expect: `{ "priceId": "price_123..." }`
    - Update Lambda function request validation
    - Update API documentation (Static Site Integration Guide)
    - Maintain backward compatibility if needed (accept both temporarily)
    - _Requirements: 8.1_

- [x] 2. Refactor Embedded Checkout Component (from Phase III)
  - [x] 2.1 Update existing StripeCheckout component for embedded mode
    - Refactor Phase III component to use embedded checkout instead of redirect
    - Initialize Stripe.js with client secret from backend
    - Render embedded checkout form in component
    - Maintain existing props interface (priceId, successUrl, cancelUrl)
    - _Requirements: 1.2, 7.1, 7.2, 7.3_
  
  - [x] 2.2 Update error handling for embedded checkout
    - Adapt existing error handling for embedded checkout failures
    - Display user-friendly error messages
    - Provide retry option for failed initialization
    - Handle network timeouts gracefully
    - _Requirements: 1.5, 7.5, 10.1, 10.3_
  
  - [x] 2.3 Update checkout success handling
    - Detect successful payment completion in embedded mode
    - Extract session ID from backend response
    - Redirect to one-click upsell page with session ID as URL parameter
    - Example: `/one-time-offer/special-bonus/?session=abc123`
    - _Requirements: 1.4, 6.1_

- [x] 3. Create Reusable OfferSelection Component and Update Offer Page
  - [x] 3.1 Create reusable OfferSelection component
    - Create `/src/components/offer-selection/offer-selection.js`
    - Component accepts props: `checkoutUrl`, `declineUrl`, `primaryText`, `secondaryText`
    - Render two buttons: primary (Buy Now) and secondary (No Thanks)
    - Primary button navigates to `checkoutUrl`
    - Secondary button navigates to `declineUrl`
    - Use consistent styling with existing components
    - _Requirements: 2.1, 2.2, 7.1_
  
  - [x] 3.2 Update offer page to use OfferSelection component
    - Remove existing StripeCheckout component from offer page
    - Import and use OfferSelection component
    - Pass `checkoutUrl="/offer/results-now-ai-action-pack/checkout/"`
    - Pass `declineUrl="/one-time-offer/"`
    - Pass button text via props
    - _Requirements: 2.3, 2.4_

- [x] 4. Create Offer Checkout Page
  - [x] 4.1 Create offer checkout page
    - Create `/offer/results-now-ai-action-pack/checkout.js`
    - Embed refactored checkout component with offer Price ID
    - Set success URL to one-click upsell page with session parameter
    - Set cancel URL to OTO page: `/one-time-offer/`
    - _Requirements: 1.1, 1.2, 2.5_

- [x] 5. Create One-Click Upsell Page
  - [x] 5.1 Build one-click upsell page
    - Create `/one-time-offer/special-bonus.js`
    - Read session ID from URL parameter (`?session=abc123`)
    - Add one-click purchase button (Stripe integration)
    - Add "No Thanks" button
    - Note: Offer details and pricing copy will be added separately
    - _Requirements: 3.1, 3.2, 5.1_
  
  - [x] 5.2 Implement one-click purchase logic
    - Extract session ID from URL
    - Call backend one-click upsell endpoint with session ID
    - Backend retrieves payment method using session ID
    - Handle loading state during payment processing
    - On success: redirect to thank you page
    - On error: display error message (stay on page)
    - _Requirements: 3.3, 3.4, 10.1_
  
  - [x] 5.3 Add upsell navigation logic
    - Redirect to thank you page on purchase success
    - Redirect to thank you page on decline
    - Handle missing/invalid session ID gracefully (redirect to offer page)
    - _Requirements: 3.5, 5.2, 6.4_

- [x] 6. Create Standard OTO Pages
  - [x] 6.1 Create standard OTO offer page
    - Create `/one-time-offer/index.js`
    - Display OTO offer details and pricing
    - Add button to proceed to OTO checkout
    - Add "No Thanks" button to exit funnel
    - _Requirements: 4.1, 4.2, 5.3_
  
  - [x] 6.2 Create OTO checkout page
    - Create `/one-time-offer/checkout.js`
    - Embed checkout component with OTO product ID
    - Set success URL to thank you page
    - Set cancel URL back to OTO offer page
    - _Requirements: 4.3, 4.4_
  
  - [x] 6.3 Implement OTO navigation logic
    - Navigate to checkout on button click
    - Navigate to thank you on decline
    - _Requirements: 4.5, 5.4_

- [ ] 7. Testing and Deployment
  - [ ]* 7.1 Unit testing (optional - AI agent)
    - Test OfferSelection component renders correctly
    - Test embedded checkout component initialization
    - Test one-click upsell button logic
    - Test URL parameter extraction
    - Test error handling in components
    - _Requirements: 7.1, 7.2, 7.3_
  
  - [ ] 7.2 Integration testing (user-performed)
    - Test complete purchase flow: offer → checkout → one-click upsell → thank you
    - Test decline flow: offer decline → standard OTO → checkout → thank you
    - Test mixed scenarios: purchase + decline, decline + decline
    - Test on mobile, tablet, and desktop devices
    - Test error scenarios: payment failures, missing session ID, network timeouts
    - Verify all navigation and routing works correctly
    - _Requirements: All functional requirements_
  
  - [ ] 7.3 Final verification and deployment
    - Review all code for consistency
    - Run security check (no API keys or secrets exposed)
    - Verify embedded checkout works on all devices
    - Deploy to production
    - _Requirements: All_
