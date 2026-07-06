API Integration Guide - One-Click Upsell Flow
Overview
This guide shows the exact API calls needed to implement a one-click upsell flow on your website. The backend handles all payment processing securely.

How One-Click Upsell Works
Step 1: Initial Checkout

Customer pays through Stripe checkout
Stripe creates and stores the payment method and customer
Stripe redirects to your success page with a Checkout Session ID
Step 2: Webhook (Automatic - Backend Only)

Stripe sends us the Checkout Session ID via webhook
We call Stripe API to retrieve the Payment Method ID and Customer ID
We store them in DynamoDB linked to an Upsell Token (temporary UUID)
No charging happens yet - we're just saving the payment method for later
Step 3: Get Upsell Token (When Customer Clicks Upsell)

Your frontend gives us the Checkout Session ID from the URL
We return an Upsell Token (UUID)
Still no charging
Step 4: Process Upsell (Charge the Saved Payment Method)

Your frontend gives us the Upsell Token + upsell product Price ID
We look up the token → retrieve Payment Method ID + Customer ID
We call Stripe API to create a new Payment Intent and charge immediately
Stripe charges the saved payment method
We delete the token (one-time use only)
API Endpoints
Base URL (Development): https://baseDomain.com/ecommerce

Available Endpoints
POST /create-checkout-session - Create initial checkout
GET /get-uuid - Get upsell token (for one-click upsell)
POST /one-click-upsell - Process upsell charge
POST /stripe-webhook - Webhook handler (Stripe only)
Complete Flow
Step 1: Initial Checkout
Endpoint: POST /create-checkout-session

Purpose: Create a Stripe checkout session for the main product

Request:

const response = await fetch('https://YOUR-API-URL/create-checkout-session', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    priceId: 'price_1SReks2uBHxDuQdErHcHumBk',  // Your Stripe price ID
    productType: 'offer',                        // 'offer' or 'oto'
    isTest: true,                                // REQUIRED: true for test mode, false for live mode
    successUrl: 'https://yoursite.com/success.html?session_id={CHECKOUT_SESSION_ID}'
  })
});

const data = await response.json();
Request Parameters:

priceId (required): Stripe Price ID (must start with "price_")
productType (required): Either "offer" or "oto"
isTest (required): Boolean flag
true: Use Stripe test mode (test keys, test price IDs like price_test_...)
false: Use Stripe live mode (live keys, live price IDs)
Default if omitted: false (live mode) - BE CAREFUL!
successUrl (optional): Custom return URL after payment completion
customerEmail (optional): Pre-fill customer email in checkout
Response:

{
  "success": true,
  "clientSecret": "cs_test_abc123_secret_xyz",
  "sessionId": "cs_test_abc123"
}
Next: Use the clientSecret with Stripe.js to display the embedded checkout form.

Step 2: Customer Completes Payment
The customer fills out the Stripe checkout form and completes payment. Stripe redirects them to your successUrl with the session_id in the URL.

Example redirect:

https://yoursite.com/success.html?session_id=cs_test_abc123
Step 3: Get Upsell Token (When User Clicks Upsell Button)
Endpoint: GET /get-uuid

Purpose: Exchange a Checkout Session ID for an Upsell Token

⚠️ CRITICAL: Only call this when the user clicks the upsell button, NOT on page load!

Understanding the Two Different Identifiers:

Identifier	What It Is	Format	Example	Where It Comes From
Checkout Session ID	Stripe's identifier for the checkout session	cs_test_... or cs_live_...	cs_test_a1XzAg4nAlZuAZkuf4EfmegEnQMKJHHLKI4hMkKOusx2ZTgQVA6N9ehUEL	Stripe returns this in the URL after checkout: ?session_id=cs_test_...
Upsell Token	Our temporary token that links to the saved payment method	UUID v4 format	c4c8c4a9-270d-4296-868f-ace647345651	Our API returns this when you call /get-uuid
Why Two Different Identifiers?

The Checkout Session ID is public and appears in URLs - it identifies the checkout session
The Upsell Token is our temporary token (24 hours) that securely links to the customer's saved payment method
You need to exchange one for the other to process the upsell
The Upsell Token is deleted after one use for security
Request:

// Get the Checkout Session ID from the URL (Stripe puts this in the redirect)
const sessionId = new URLSearchParams(window.location.search).get('session_id');

// Exchange it for an Upsell Token
const response = await fetch(
  `https://YOUR-API-URL/get-uuid?session_id=${sessionId}&isTest=true`
);

const data = await response.json();
// data.upsellToken contains the temporary token for processing the upsell
Response (Success):

{
  "success": true,
  "found": true,
  "upsellToken": "c4c8c4a9-270d-4296-868f-ace647345651",
  "expiresAt": 1732334396
}
Response (Not Ready Yet):

{
  "success": false,
  "found": false,
  "message": "Upsell token not found. The webhook may still be processing, or the token has expired."
}
Retry Logic: If you get "not found", wait 1 second and try again. The webhook may still be processing. Retry up to 10 times with exponential backoff.

Step 4: Process One-Click Upsell
Endpoint: POST /one-click-upsell

Purpose: Charge the saved payment method for the upsell product

Request:

const response = await fetch('https://YOUR-API-URL/one-click-upsell', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    upsellToken: 'c4c8c4a9-270d-4296-868f-ace647345651',  // Token from step 3
    priceId: 'price_1SRelR2uBHxDuQdEMEhiXlL7'             // Upsell product price ID
  })
});

const data = await response.json();
Response (Success):

{
  "success": true,
  "paymentIntentId": "pi_3SWTgq2uBHxDuQdE1EBFqc7F",
  "amount": 29700,
  "currency": "usd",
  "status": "succeeded"
}
Response (Error):

{
  "success": false,
  "error": {
    "code": "PAYMENT_FAILED",
    "message": "Your card was declined."
  }
}
Complete JavaScript Example
// Step 1: Create checkout session
async function createCheckout() {
  const response = await fetch('https://YOUR-API-URL/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      priceId: 'price_1SReks2uBHxDuQdErHcHumBk',
      productType: 'offer',
      isTest: true,  // Set to false for live mode
      successUrl: window.location.origin + '/success.html?session_id={CHECKOUT_SESSION_ID}'
    })
  });
  
  const { clientSecret } = await response.json();
  
  // Initialize Stripe embedded checkout
  const stripe = Stripe('pk_test_YOUR_PUBLISHABLE_KEY');
  const checkout = await stripe.initEmbeddedCheckout({ clientSecret });
  checkout.mount('#checkout');
}

// Step 3 & 4: Handle upsell on success page
async function handleUpsell() {
  const sessionId = new URLSearchParams(window.location.search).get('session_id');
  
  // Get Upsell Token with retry
  let upsellToken = null;
  for (let i = 0; i < 10; i++) {
    const response = await fetch(
      `https://YOUR-API-URL/get-uuid?session_id=${sessionId}&isTest=true`
    );
    const data = await response.json();
    
    if (data.success && data.upsellToken) {
      upsellToken = data.upsellToken;
      break;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
  }
  
  if (!upsellToken) {
    throw new Error('Upsell token not ready');
  }
  
  // Process upsell
  const response = await fetch('https://YOUR-API-URL/one-click-upsell', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      upsellToken: upsellToken,
      priceId: 'price_1SRelR2uBHxDuQdEMEhiXlL7'
    })
  });
  
  const result = await response.json();
  
  if (result.success) {
    console.log('Upsell successful!', result.paymentIntentId);
    // Show success message
  } else {
    console.error('Upsell failed:', result.error);
    // Show error message
  }
}
Important Notes
Timing
Initial checkout - Call immediately when user wants to buy
Get Upsell Token - Call ONLY when user clicks upsell button (not on page load!)
Process upsell - Call immediately after getting upsell token
Why the Upsell Token?
The upsell token is a temporary identifier that:

Expires after 24 hours
Links to the customer's saved payment method
Doesn't expose sensitive Stripe IDs to the frontend
Prevents unauthorized charges
Is deleted after one use for security
Error Handling
Always handle these scenarios:

Network errors
Payment declined
Session expired (24 hours)
Session not found (webhook still processing)
Security
Never expose your Stripe secret key in frontend code
Always use HTTPS
Validate all responses
Handle errors gracefully
Testing
Use Stripe test cards:

Success: 4242 4242 4242 4242
Decline: 4000 0000 0000 0002
Any future expiry date, any 3-digit CVC, any ZIP code.

Configuration
You'll need:

API Base URL - Your API Gateway URL
Stripe Publishable Key - From Stripe Dashboard (test mode)
Main Product Price ID - From Stripe Dashboard
Upsell Product Price ID - From Stripe Dashboard
Store these in your frontend config file.

Webhook Configuration
The system uses separate webhook endpoints for test and live transactions to ensure proper data isolation.

Three Webhook Endpoints
1. Development Webhook (Dev Environment Only)
URL: https://[dev-api-gateway]/ecommerce/stripe-webhook
Purpose: Development and testing
Tables: ecommerce-payment-dev-*
Use: Configure in Stripe Dashboard for development workspace
2. Production Test Webhook (Test Mode Transactions)
URL: https://payment.bulldozer.life/ecommerce/webhooks/checkout-completed-test
Purpose: Production environment test mode transactions
Tables: ecommerce-payment-test-*
Use: Configure in Stripe Dashboard for test mode events
When to use: When isTest: true in checkout requests
3. Production Live Webhook (Live Mode Transactions)
URL: https://payment.bulldozer.life/ecommerce/webhooks/checkout-completed
Purpose: Production environment live mode transactions
Tables: ecommerce-payment-prod-*
Use: Configure in Stripe Dashboard for live mode events
When to use: When isTest: false in checkout requests
Stripe Dashboard Configuration
For Test Mode:
Go to Stripe Dashboard → Developers → Webhooks
Switch to Test Mode (toggle in top right)
Click "Add endpoint"
Enter URL: https://payment.bulldozer.life/ecommerce/webhooks/checkout-completed-test
Select events: checkout.session.completed
Save and copy the webhook signing secret
For Live Mode:
Go to Stripe Dashboard → Developers → Webhooks
Switch to Live Mode (toggle in top right)
Click "Add endpoint"
Enter URL: https://payment.bulldozer.life/ecommerce/webhooks/checkout-completed
Select events: checkout.session.completed
Save and copy the webhook signing secret
Important Notes
Data Isolation: Test and live transactions are stored in completely separate DynamoDB tables
Webhook Secrets: You need separate webhook signing secrets for test and live modes
isTest Parameter: The isTest parameter in your checkout request determines which webhook will be triggered
Table Routing: The webhook handler automatically routes data to the correct tables based on the Stripe mode
Webhook Event Flow
Customer completes checkout in Stripe
Stripe sends checkout.session.completed event to configured webhook
Webhook handler validates the signature
Handler determines mode (test/live) from Stripe event
Data is stored in appropriate DynamoDB tables:
Test mode → ecommerce-payment-test-* tables
Live mode → ecommerce-payment-prod-* tables
Troubleshooting
Problem: Webhook not receiving events

Verify the webhook URL is correct in Stripe Dashboard
Check that you're in the correct mode (test/live) in Stripe Dashboard
Verify webhook signing secret is configured in AWS Secrets Manager
Problem: Data going to wrong tables

Check the isTest parameter in your checkout request
Verify you're using the correct Stripe keys (test vs live)
Check CloudWatch logs for the webhook Lambda function
Problem: Webhook signature validation failing

Ensure webhook signing secret matches between Stripe Dashboard and AWS Secrets Manager
Verify you have separate secrets for test and live modes
Check that the secret is for the correct webhook endpoint