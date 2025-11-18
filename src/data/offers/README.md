# Offer System

This directory contains data files for all offers. The system is designed to be scalable for multiple different offers.

## Architecture

```
/src/
├── components/
│   └── offer/
│       └── base.js                           # Reusable base component
├── data/
│   └── offers/
│       ├── results-now-ai-action-pack.js     # Offer data file
│       └── [your-offer-name].js              # Add more offers here
└── pages/
    └── offer/
        ├── results-now-ai-action-pack/       # Offer folder
        │   ├── index.js                      # Offer page
        │   └── checkout.js                   # Checkout page
        └── [your-offer-name]/                # Add more offers here
```

## How to Create a New Offer

### Step 1: Create Offer Data File

1. Duplicate `results-now-ai-action-pack.js` in `/src/data/offers/`
2. Rename it to your offer slug (e.g., `premium-course.js`)
3. Update all the content:
   - `stripe.priceId` - Your Stripe Price ID
   - `meta` - SEO information
   - `hero_section` - Headlines and pricing
   - `product_section` - Offer details and copy
   - `buttons` - Button text
   - `colors` - Visual styling
   - `timer_minutes` - Countdown duration
   - `product_image` - Image path and alt text

### Step 2: Create Page Folder

1. Create a new folder in `/src/pages/offer/` with your offer slug
2. Copy these 2 files from `results-now-ai-action-pack/`:
   - `index.js` (Offer page)
   - `checkout.js` (Checkout page)

### Step 3: Update Import Paths

In each of the 2 files, update the import to point to your new data file:

```javascript
// Change this:
import offerData from '../../../data/offers/results-now-ai-action-pack'

// To this:
import offerData from '../../../data/offers/your-offer-name'
```

Also update the URLs in both files:

**In `index.js`:**
```javascript
// Line ~35: Update checkout URL
checkoutUrl="/offer/your-offer-name/checkout/"

// Line ~36: Update decline URL (where to go if they say no)
declineUrl="/one-time-offer/your-oto-name/"
```

**In `checkout.js`:**
```javascript
// Line ~21: Update success URL (where to go after purchase)
const successUrl = `${baseUrl}/one-time-offer/your-oto-name/special-bonus/`

// Line ~24: Update cancel URL
const cancelUrl = `${baseUrl}/offer/your-offer-name/`
```

### Step 4: Add Product Image

If you have a product image:

1. Add the image to `/src/images/ads/`
2. Update the image path in `index.js`:

```javascript
<StaticImage
    src="../../images/ads/your-product-image.png"
    alt="Your Product Name"
    className="w-full h-auto"
    placeholder="blurred"
/>
```

### Step 5: Get Your Stripe Price ID

1. Go to your Stripe Dashboard
2. Create a new product and price
3. Copy the Price ID (starts with `price_`)
4. Update it in your data file: `stripe.priceId`

### Step 6: Test Your Offer

Your offer will be available at these URLs:
- Offer page: `/offer/your-offer-name/`
- Checkout: `/offer/your-offer-name/checkout/`

## URL Structure

Each offer has 2 pages:

1. **Offer Page** (`/offer/{offer-name}/`)
   - Main sales page with offer details
   - Uses `OfferSelection` component (proceed to checkout or decline)

2. **Checkout Page** (`/offer/{offer-name}/checkout/`)
   - Embedded Stripe checkout
   - Success → One-click upsell page (with session ID)
   - Cancel → Back to offer page

## Funnel Flow

```
Lead Capture → Offer Page → Checkout → Purchase Success → One-Click Upsell
                    ↓
                 Decline → Standard OTO
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
    offer_price: 'PRICE $XX',
    copy: 'Optional copy below timer'
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
    accent_color: 'rgb(186, 215, 57)',
    background_dark: 'rgba(19, 47, 69)'
  },
  progress_bar: {
    width: '60%',
    gradient: 'linear-gradient(...)'
  },
  show_timer: true,
  timer_text: 'Timer label',
  timer_minutes: 10,
  product_image: {
    path: '../../images/ads/product.png',
    alt: 'Product alt text'
  }
}
```

## Tips

- Keep offer slugs URL-friendly (lowercase, hyphens)
- All markdown content supports basic formatting (bold, lists, headings)
- Update Stripe Price IDs before going live
- The base component handles all styling and layout automatically
- Product images are optional - the base component will handle missing images gracefully
