# Design Document

## Overview

This design document focuses on Phase 3: Basic Offer Integration, which implements Version 1.0 of the sales funnel system. Phase 3 adds Stripe payment processing to the existing offer page, creating a complete lead-to-purchase flow. The goal is to prove payment processing works end-to-end with minimal complexity before adding advanced funnel logic in Phase 4.

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

### Stripe Integration Approach
- **Stripe Checkout**: Use hosted Stripe Checkout for simplicity and security
- **Payment Flow**: Offer page → Stripe Checkout → Thank you page
- **Products**: Leverage existing Stripe products already configured in account
- **Session Management**: Create checkout sessions via serverless backend

### Frontend Integration Pattern
- **Gatsby Offer Page**: Static wrapper around Stripe integration
- **Buy Button**: Triggers serverless endpoint to create Stripe checkout session
- **Redirect Handling**: Stripe redirects to success/cancel URLs on Gatsby site
- **Loading States**: Handle checkout session creation and redirect delays

### Serverless eCommerce Backend
- **AWS Lambda**: Handle Stripe checkout session creation
- **API Gateway**: RESTful endpoints for payment operations
- **Environment Variables**: Secure Stripe API key storage
- **Error Handling**: Graceful failure modes for payment issues

### Payment Flow Architecture
```
User Journey:
1. Squeeze Page → Lead Capture (Phase 2 - Complete)
2. Offer Page → Click "Buy Now"
3. Lambda creates Stripe checkout session
4. Redirect to Stripe Checkout (hosted)
5. Customer completes payment
6. Stripe redirects to Thank You page
7. Webhook confirms payment (optional for MVP)
```

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

### Phase 3 Error Scenarios
- Stripe API key configuration issues
- Checkout session creation failures
- Network timeouts during payment processing
- Invalid product/price configurations
- Payment method declined by customer
- Stripe service outages
- Redirect URL misconfigurations

### Future Error Scenarios (Phase 4+)
- Complex routing logic errors
- Cross-phase state management issues
- Upsell flow interruptions

## Testing Strategy

### Phase 1 Testing
- Form submission success/failure scenarios
- Responsive design across devices
- Accessibility compliance

### Phase 3 Testing
- Stripe checkout session creation
- Payment success/failure flows
- Redirect handling (success/cancel URLs)
- Error message display and handling
- Mobile payment experience
- Different payment methods (cards, digital wallets)

### Future Testing (Phase 4+)
- Complex funnel flow testing
- Upsell conversion tracking
- Performance testing under load

## Phase 3 Implementation Details

### Stripe Configuration Requirements
- **API Keys**: Live and test keys configured in AWS environment
- **Products**: Existing Stripe products with defined prices
- **Webhooks**: Optional for MVP, recommended for production
- **Success/Cancel URLs**: Gatsby site URLs for post-payment redirects

### AWS Serverless Setup
- **Lambda Function**: Node.js runtime for Stripe SDK
- **API Gateway**: CORS-enabled endpoints for frontend calls
- **Environment Variables**: Secure storage of Stripe keys
- **IAM Roles**: Minimal permissions for Lambda execution

### Frontend Integration Points
- **Buy Button Handler**: JavaScript to call serverless endpoint
- **Loading States**: User feedback during checkout session creation
- **Error Display**: User-friendly error messages for failures
- **Success Tracking**: Analytics events for successful purchases

## Notes for Future Phases

Key areas that will need detailed design in Phase 4+:

1. **State Management**: How user choices persist across complex funnel steps
2. **Conditional Logic**: Complex routing based on user purchase decisions
3. **Analytics**: Comprehensive conversion tracking and optimization
4. **Performance**: Optimization strategies for multi-page funnels
5. **Webhook Processing**: Advanced payment event handling