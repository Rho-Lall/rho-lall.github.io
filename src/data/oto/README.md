# OTO (One-Time Offer) System

This directory contains data files for all OTO offers. The system is designed to be scalable for 100+ different OTOs.

## Architecture

```
/src/
├── components/
│   └── one-time-offer/
│       └── base.js                    # Reusable base component
├── data/
│   └── oto/
│       ├── 6-month-roi-strategy-map.js    # Offer data file
│       └── [your-offer-name].js           # Add more offers here
└── pages/
    └── one-time-offer/
        ├── 6-month-roi-strategy-map/      # Offer folder
        │   ├── index.js                   # Standard OTO page
        │   ├── checkout.js                # Checkout page
        │   └── special-bonus.js           # One-click upsell page
        └── [your-offer-name]/             # Add more offers here
```

## How to Create a New OTO

### Step 1: Create Offer Data File

1. Duplicate `6-month-roi-strategy-map.js` in `/src/data/oto/`
2. Rename it to your offer slug (e.g., `premium-coaching.js`)
3. Update all the content:
   - `stripe.priceId` - Your Stripe Price ID
   - `meta` - SEO information
   - `hero_section` - Headlines and pricing
   - `product_section` - Offer details and copy
   - `buttons` - Button text
   - `colors` - Visual styling
   - `timer_minutes` - Countdown duration

### Step 2: Create Page Folder

1. Create a new folder in `/src/pages/one-time-offer/` with your offer slug
2. Copy these 3 files from `6-month-roi-strategy-map/`:
   - `index.js` (Standard OTO page)
   - `checkout.js` (Checkout page)
   - `special-bonus.js` (One-click upsell page)

### Step 3: Update Import Paths

In each of the 3 files, update the import to point to your new data file:

```javascript
// Change this:
import offerData from '../../../data/oto/6-month-roi-strategy-map'

// To this:
import offerData from '../../../data/oto/your-offer-name'
```

Also update the redirect URLs in `special-bonus.js`:

```javascript
// Line ~35: Update redirect URL
navigate('/one-time-offer/your-offer-name/')
```

And in `checkout.js`:

```javascript
// Line ~23: Update cancel URL
const cancelUrl = `${baseUrl}/one-time-offer/your-offer-name/`
```

### Step 4: Get Your Stripe Price ID

1. Go to your Stripe Dashboard
2. Create a new product and price
3. Copy the Price ID (starts with `price_`)
4. Update it in your data file: `stripe.priceId`

### Step 5: Test Your OTO

Your OTO will be available at these URLs:
- Standard OTO: `/one-time-offer/your-offer-name/`
- Checkout: `/one-time-offer/your-offer-name/checkout/`
- One-click upsell: `/one-time-offer/your-offer-name/special-bonus/?session=test123`

## URL Structure

Each OTO has 3 pages:

1. **Standard OTO Page** (`/one-time-offer/{offer-name}/`)
   - Shown when customer declines initial offer
   - Uses `OfferSelection` component (navigates to checkout)

2. **Checkout Page** (`/one-time-offer/{offer-name}/checkout/`)
   - Embedded Stripe checkout
   - Success → Thank you page
   - Cancel → Back to OTO page

3. **One-Click Upsell** (`/one-time-offer/{offer-name}/special-bonus/`)
   - Shown after initial purchase (with session ID)
   - One-click purchase using stored payment method
   - Success → Thank you page
   - Decline → Thank you page

## Funnel Flow

```
Initial Offer → Checkout → Purchase Success → One-Click Upsell (special-bonus)
                                            ↓
                                      Thank You Page

Initial Offer → Decline → Standard OTO → Checkout → Thank You Page
```

## Data File Structure

```javascript
{
  stripe: {
    priceId: 'price_xxx'  // Stripe Price ID
  },
  meta: {
    title: 'Page title',
    description: 'Meta description',
    keywords: 'keywords',
    author: 'Author name'
  },
  hero_section: {
    pre_headline: 'Text above headline',
    headline: 'Main headline',
    sub_headline: 'Subheadline (supports markdown)',
    offer_price: 'PRICE $XX'
  },
  product_section: {
    headline: 'Product headline',
    sub_headline: 'Product subheadline',
    copy: 'Full product description (supports markdown)'
  },
  cta_section: {
    headline: 'Bottom CTA headline'
  },
  buttons: {
    primary_text: 'Yes button text',
    secondary_text: 'No button text'
  },
  colors: {
    accent_color: 'rgb(59, 130, 246)',
    background_dark: 'rgba(19, 47, 69)'
  },
  progress_bar: {
    width: '80%',
    gradient: 'linear-gradient(...)'
  },
  show_timer: true,
  timer_text: 'Timer label',
  timer_minutes: 5
}
```

## Tips

- Keep offer slugs URL-friendly (lowercase, hyphens)
- Test the one-click upsell with `?session=test123` parameter
- All markdown content supports basic formatting (bold, lists, headings)
- Update Stripe Price IDs before going live
- The base component handles all styling and layout automatically
