# Design Document

## Overview

This design document outlines a phased approach to building a reusable Money Model funnel system. The system will be built incrementally, with detailed design decisions made phase-by-phase to allow for learning and iteration.

## Architecture

### Basic Sales Funnel Architecture
```
Sales Funnel System Version 1.0
├── Static Site (Gatsby - Current Project)
│   ├── Squeeze Pages (/ai/, /data-analyst/, etc.)
│   ├── Offer Pages (/ai/offer)
│   ├── Thank You Page (post-purchase redirect)
├── Serverless Lead Capture (Phase 2 - Separate Repository)
│   ├── lead capture form
│   ├── API Gateway
│   ├── Lambda
│   ├── Database (user data)
├── Serverless eCommerce (Phase 3 - Separate Repository)
│   ├── Stripe Payment Integration (payment processing)
│   └── Webhook Handlers
└── External Integrations
    ├── Stripe (payment processing)



Sales Funnel System Version 2.0
├── Static Site (Gatsby - Current Project)
│   ├── Squeeze Pages (/ai/, /data-analyst/, etc.)
│   ├── Offer Pages (/ai/offer)
│   ├── One Time Offer (OTO) Page
│   ├── One Time Offer 1-Click Upsell
│   ├── Offer Cart
│   ├── OTO Cart
│   ├── Thank You Page (post-purchase redirect)
├── Serverless Lead Capture (Phase 2 - Complete)
│   ├── lead capture form
│   ├── API Gateway
│   ├── Lambda
│   ├── Database (user data)
├── Serverless eCommerce (Phase 3 - Separate Repository)
│   ├── Stripe Payment Integration (payment processing)
│   ├── Process Offer and redirect to One Time Offer 1-Click Upsell
│   ├── OR if they turn down the offer, redirect to One Time Offer (OTO) Page
│   ├── Whatever combination of selections, zero, one or both Offer & OTO the funnel ends at the Thankyou page.
│   └── Webhook Handlers
└── External Integrations
    ├── Stripe (payment processing)
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



**Phase 1: Basic HTML Page with CSS** (Completed)
- Prove we can build a basic HTML page with styling
- Squeeze page component for a lead-capture form

**Phase 2: Lead Capture Integration** (Completed)
- Serverless lead capture form
- AWS Lambda and API Gateway integration
- Database for user data storage
- *Prove lead capture works end-to-end*

**Phase 3: Basic Offer Integration** (Current Phase - Version 1.0)
- Offer page
- Stripe checkout integration (standalone)
- Basic thank you page
- *Prove payment processing works end-to-end*

**Phase 4: Full Funnel Logic** (Future Phase - Version 2.0)
- OTO offer (reuse offer structure)
- One Time Offer 1-Click Upsell functionality
- Conditional routing logic between all pages
- *Complete funnel flow with all decision points*

**Phase 5: Analytics Integration** (Future Phase)
- Add analytics tracking to Version 2.0
- Performance monitoring and optimization

## Phase 2: Serverless Lead Capture (Completed)
**Key Architectural Change**: Phase 2 was implemented as a separate serverless project, not as an extension of the current Gatsby static site.
- **Server Setup**: AWS Serverless Architecture (Lambda, API Gateway)
- **Form Handling**: Server-side form processing and validation
- **Database**: User data storage
- **API Endpoints**: RESTful API for lead capture interactions

### Integration Between Projects
- **Form Submission**: Forms POST to separate server endpoints

## Phase 3: Basic Offer Integration (Current Phase - Version 1.0)
- Integrate Stripe with offer page
- Serverless eCommerce backend
- Basic payment processing workflow
- *Deploy Version 1.0 of the sales funnel*

## Phase 4: Complete Funnel (Future Phase - Version 2.0)
- OTO offer page (reuse offer structure)
- One Time Offer 1-Click Upsell functionality and logic
- Conditional routing between squeeze → offer → One Time Offer 1-Click Upsell/OTO → thank you
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

### Phase 1 Error Scenarios
- Image loading failures
- Network connectivity issues

### Future Error Scenarios (TBD)
- Stripe payment failures
- Routing logic errors
- Cross-phase state management issues

## Testing Strategy

### Phase 1 Testing
- Form submission success/failure scenarios
- Responsive design across devices
- Accessibility compliance

### Future Testing (TBD)
- End-to-end funnel flow testing
- Payment integration testing
- Performance testing under load

## Notes for Future Phases

This design document will be updated as each phase is implemented. Key areas that will need detailed design in future phases:

1. **State Management**: How user choices persist across funnel steps
2. **Stripe Integration**: Payment flow, error handling, webhooks
3. **Conditional Logic**: Complex routing based on user actions
4. **Analytics**: Integration points for tracking (if needed)
5. **Performance**: Optimization strategies for multi-page funnels