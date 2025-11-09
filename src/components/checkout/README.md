# Configuration Files

## Stripe Configuration (`stripe.js`)

This file contains all Stripe payment integration configuration constants.

### Setup Instructions

1. **Get your Stripe Price ID:**
   - Log into [Stripe Dashboard](https://dashboard.stripe.com)
   - Navigate to Products
   - Find your product and copy the Price ID (starts with `price_test_` for test mode or `price_` for production)

2. **Update the configuration:**
   - Open `src/config/stripe.js`
   - Replace `STRIPE_PRICE_ID_TEST` with your test Price ID
   - Replace `STRIPE_PRICE_ID_PROD` with your production Price ID

3. **Usage in components:**

```javascript
import stripeConfig from '../../config/stripe';

// Use the configuration
const apiEndpoint = stripeConfig.apiEndpoint;
const priceId = stripeConfig.priceId;
const successUrl = stripeConfig.getSuccessUrl(window.location.href);
const cancelUrl = stripeConfig.getCancelUrl(window.location.href);
```

### Environment Handling

The configuration automatically selects the appropriate Price ID based on `NODE_ENV`:
- **Development:** Uses `STRIPE_PRICE_ID_TEST`
- **Production:** Uses `STRIPE_PRICE_ID_PROD`

### URL Patterns

- **Success URL:** Current page + `?payment=success`
- **Cancel URL:** Current page + `?payment=cancelled`

These URLs are generated dynamically using the helper functions `getSuccessUrl()` and `getCancelUrl()`.
