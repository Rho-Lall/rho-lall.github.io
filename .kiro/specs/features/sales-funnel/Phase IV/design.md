# Design Document

## Overview

This design document focuses on Phase 4: Complete offer pipeline, which implements Version 2.0 of the sales funnel system.

## Architecture

### Sales Funnel Architecture
```
Sales Funnel System Version 2.0 - Frontend

/pages/
├── [lead-capture]/ (existing squeeze pages)
│   ├── /ai/
│   ├── /data-analyst/
│   └── etc.
│
├── /offer/results-now-ai-action-pack/
│   ├── index.js (offer page with button)
│   └── checkout.js (embedded Stripe checkout)
│
├── /one-time-offer/
│   ├── index.js (standard checkout offer)
│   ├── checkout.js (embedded checkout)
│   └── special-bonus.js (one-click upsell)
│
└── /thankyou.js (funnel exit page)

Flow:
Lead Capture → Offer → Checkout → Branch:
  ├─ Purchase → One-Click Upsell (special-bonus) → Thank You
  └─ Decline → Standard OTO → Checkout → Thank You
    └── Analytics (tracking, if needed)
```

### Technology Stack

#### Static Site (Current Project)
- **Framework**: Gatsby 5 (upgraded from Gatsby 4)
- **Styling**: Tailwind CSS (using existing classes and patterns)
- **Node.js**: v23.6.1 (compatible with Gatsby 5)

#### Serverless Backend (Phase 2 & 3 - Separate Projects)
- **Framework**: AWS Serverless Architecture
- **Database**: Server-side validation and processing
- **Forms**: Server-side validation and processing
- **Hosting**: AWS


**Phase 1 - 3: DONE**

**Phase 4: Full Funnel Logic** (Future Phase - Version 2.0)
- OTO offer (reuse offer structure)
- One Time Offer 1-Click Upsell functionality
- Conditional routing logic between all pages
- *Complete funnel flow with all decision points*

**Phase 5: Analytics Integration** (Future Phase)
- Add analytics tracking to Version 2.0
- Performance monitoring and optimization


## Phase 4: Complete Funnel (Current Phase - Version 2.0)

### Funnel Flow
```
Lead Capture → Offer Page → Checkout → Branch:
  ├─ Purchase → One-Click Upsell (special-bonus) → Thank You
  └─ Decline → Standard OTO → Checkout → Thank You
```

### File Structure
```
/offer/results-now-ai-action-pack/
  ├── index.js (offer page with button)
  └── checkout.js (embedded Stripe checkout)
  
/one-time-offer/
  ├── index.js (standard checkout offer)
  ├── checkout.js (embedded checkout)
  └── special-bonus.js (one-click upsell)
```

### URL Structure
- **Offer Page**: `/offer/results-now-ai-action-pack/`
- **Offer Checkout**: `/offer/results-now-ai-action-pack/checkout/`
- **One-Click Upsell**: `/one-time-offer/special-bonus/`
- **Standard OTO**: `/one-time-offer/`
- **OTO Checkout**: `/one-time-offer/checkout/`
- **Thank You**: `/thankyou/`

### Components
1. **Embedded Stripe Checkout**: Replace redirect with embedded checkout on checkout pages
2. **One-Click Upsell Component**: New component for post-purchase upsell (uses payment method from first purchase)
3. **Reusable Checkout Component**: Modular component used across offer and OTO pages

### Backend Requirements
- Support for embedded Stripe checkout
- One-click upsell API (uses existing payment method)
- Session management to track purchase state
- Conditional routing logic based on purchase/decline

### Key Features
- Embedded checkout experience (no redirect to checkout.stripe.com)
- One-click upsell after initial purchase
- Standard checkout for declined offers
- Complete funnel state management
- *Deploy Version 2.0 of the sales funnel*

## Phase 5: Analytics Integration (Future Phase)
- Add analytics tracking to Version 2.0
- Performance monitoring and conversion optimization
- *Enhance Version 2.0 with comprehensive tracking*

## Technical Decisions

### Why Phased Development?
- Reduces complexity and risk
- Allows for learning and iteration
- Enables faster initial delivery
- Provides flexibility to adjust approach based on learnings

### Integration Patterns
- **Gatsby**: Use existing Layout component and file-based routing system
- **Styling**: Extend existing Tailwind classes and responsive patterns
- **SEO**: Use existing Helmet pattern for meta tags and social sharing

## Error Handling

### Phase IV Error Scenarios
- Embedded checkout initialization failures
- One-click upsell payment failures (missing payment method, declined card)
- Funnel state management errors (missing session data)
- Network timeouts during payment processing
- Invalid routing (direct access to funnel pages without proper state)

## Testing Strategy

### Phase IV Testing Focus
- Embedded checkout on mobile, tablet, desktop
- Complete funnel flows (purchase path, decline path, mixed scenarios)
- One-click upsell functionality
- Error recovery and retry mechanisms
- Session state management across pages