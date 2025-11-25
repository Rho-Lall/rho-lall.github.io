# API Integration Guide - One-Click Upsell Flow

## Overview

This guide shows the exact API calls needed to implement a one-click upsell flow on your website. The backend handles all payment processing securely.

## API Endpoints

**Base URL (Development)**: `https://194qku7n6l.execute-api.us-east-1.amazonaws.com/ecommerce`

### Available Endpoints

- `POST /create-checkout-session` - Create initial checkout
- `GET /get-uuid` - Get payment session UUID (for upsell)
- `POST /one-click-upsell` - Process upsell charge
- `POST /stripe-webhook` - Webhook handler (Stripe only)

---

## Complete Flow

### Step 1: Initial Checkout

**Endpoint**: `POST /create-checkout-session`

**Purpose**: Create a Stripe checkout session for the main product

**Request**:
```javascript
const response = await fetch('https://YOUR-API-URL/create-checkout-session', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    priceId: 'price_1SReks2uBHxDuQdErHcHumBk',  // Your Stripe price ID
    productType: 'offer',                        // 'offer' or 'oto'
    successUrl: 'https://yoursite.com/success.html?session_id={CHECKOUT_SESSION_ID}',
    metadata: {
      source: window.location.href,
      userAgent: navigator.userAgent,
      ipAddress: 'client-ip'  // Optional
    }
  })
});

const data = await response.json();
```

**Response**:
```json
{
  "success": true,
  "clientSecret": "cs_test_abc123_secret_xyz",
  "sessionId": "cs_test_abc123"
}
```

**Next**: Use the `clientSecret` with Stripe.js to display the embedded checkout form.

---

### Step 2: Customer Completes Payment

The customer fills out the Stripe checkout form and completes payment. Stripe redirects them to your `successUrl` with the `session_id` in the URL.

**Example redirect**:
```
https://yoursite.com/success.html?session_id=cs_test_abc123
```

---

### Step 3: Get Payment Session UUID (When User Clicks Upsell Button)

**Endpoint**: `GET /get-uuid`

**Purpose**: Get the internal UUID needed to process the upsell

⚠️ **CRITICAL**: Only call this when the user clicks the upsell button, NOT on page load!

**Request**:
```javascript
const stripeSessionId = new URLSearchParams(window.location.search).get('session_id');

const response = await fetch(`https://YOUR-API-URL/get-uuid?stripeSessionId=${stripeSessionId}`);
const data = await response.json();
```

**Response (Success)**:
```json
{
  "success": true,
  "found": true,
  "sessionId": "c4c8c4a9-270d-4296-868f-ace647345651",
  "expiresAt": 1732334396
}
```

**Response (Not Ready Yet)**:
```json
{
  "success": false,
  "found": false,
  "message": "Payment session not found. It may not have been created yet or has expired."
}
```

**Retry Logic**: If you get "not found", wait 1 second and try again. The webhook may still be processing. Retry up to 10 times with exponential backoff.

---

### Step 4: Process One-Click Upsell

**Endpoint**: `POST /one-click-upsell`

**Purpose**: Charge the saved payment method for the upsell product

**Request**:
```javascript
const response = await fetch('https://YOUR-API-URL/one-click-upsell', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    sessionId: 'c4c8c4a9-270d-4296-868f-ace647345651',  // UUID from step 3
    priceId: 'price_1SRelR2uBHxDuQdEMEhiXlL7'           // Upsell product price ID
  })
});

const data = await response.json();
```

**Response (Success)**:
```json
{
  "success": true,
  "paymentIntentId": "pi_3SWTgq2uBHxDuQdE1EBFqc7F",
  "amount": 29700,
  "currency": "usd",
  "status": "succeeded"
}
```

**Response (Error)**:
```json
{
  "success": false,
  "error": {
    "code": "PAYMENT_FAILED",
    "message": "Your card was declined."
  }
}
```

---

## Complete JavaScript Example

```javascript
// Step 1: Create checkout session
async function createCheckout() {
  const response = await fetch('https://YOUR-API-URL/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      priceId: 'price_1SReks2uBHxDuQdErHcHumBk',
      productType: 'offer',
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
  const stripeSessionId = new URLSearchParams(window.location.search).get('session_id');

  // Get UUID with retry
  let uuid = null;
  for (let i = 0; i < 10; i++) {
    const response = await fetch(`https://YOUR-API-URL/get-uuid?stripeSessionId=${stripeSessionId}`);
    const data = await response.json();
    
    if (data.success && data.sessionId) {
      uuid = data.sessionId;
      break;
    }
    
    await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
  }

  if (!uuid) {
    throw new Error('Payment session not ready');
  }

  // Process upsell
  const response = await fetch('https://YOUR-API-URL/one-click-upsell', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      sessionId: uuid,
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
```

---

## Important Notes

### Timing

- **Initial checkout** - Call immediately when user wants to buy
- **Get UUID** - Call ONLY when user clicks upsell button (not on page load!)
- **Process upsell** - Call immediately after getting UUID

### Why the UUID?

The UUID is an internal identifier that:
- Expires after 24 hours
- Links to the customer's saved payment method
- Doesn't expose sensitive Stripe IDs to the frontend
- Prevents unauthorized charges

### Error Handling

Always handle these scenarios:
- Network errors
- Payment declined
- Session expired (24 hours)
- Session not found (webhook still processing)

### Security

- Never expose your Stripe secret key in frontend code
- Always use HTTPS
- Validate all responses
- Handle errors gracefully

---

## Testing

Use Stripe test cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Any future expiry date, any 3-digit CVC, any ZIP code

---

## Configuration

You'll need:
- **API Base URL** - Your API Gateway URL
- **Stripe Publishable Key** - From Stripe Dashboard (test mode)
- **Main Product Price ID** - From Stripe Dashboard
- **Upsell Product Price ID** - From Stripe Dashboard

Store these in your frontend config file.
