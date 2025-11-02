# Design Document

## Overview

This design document outlines a phased approach to building a reusable Money Model funnel system. The system will be built incrementally, with detailed design decisions made phase-by-phase to allow for learning and iteration.

## Phased Development Strategy

**Phase 1: Basic HTML Page with CSS** (Detailed Design)
- Prove we can build a basic HTML page with styling
- YAML configuration system
- Squeeze page component with ConvertKit form based on the project files

**Phase 2: Stripe Integration Proof of Concept** (High-Level Scaffolding)
- Tripwire offer page
- Stripe checkout integration (standalone)
- Basic thank you page
- *Prove payment processing works end-to-end*

**Phase 3: Full Funnel Logic** (High-Level Scaffolding)
- OTO offer (reuse tripwire structure)
- Order bump functionality
- Conditional routing logic between all pages
- *Complete funnel flow with all decision points*

## Architecture

### Overall Money Model System Structure (Updated)
```
Money Model System
├── Static Site (Gatsby - Current Project)
│   ├── Squeeze Pages (/ai/, /data-analyst/, etc.)
│   ├── Tripwire Pages (/ai/tripwire, etc.)
│   ├── Thank You Pages (post-purchase redirects)
│   └── Static Content & Styling
├── Server Project (Phase 2 - Separate Repository)
│   ├── Form Processing API
│   ├── Stripe Payment Integration
│   ├── Database (user data, transactions)
│   └── Webhook Handlers
└── External Integrations
    ├── ConvertKit (email capture)
    ├── Stripe (payment processing)
    └── Analytics (tracking, if needed)
```

### Generalized Page Architecture

All funnel pages will follow a consistent pattern that ties into the YAML configuration:
```
Funnel Page Structure
├── Load YAML configuration for this funnel
├── Extract page-specific content from YAML
├── Render page using shared layout and components
├── Include navigation buttons with predefined URLs
└── Handle any integrations (forms, payments)
```

**Pattern**: Each page (squeeze, tripwire, OTO, etc.) will use the same architectural approach - load YAML config, extract relevant content, render with shared components. This ensures consistency and reusability across all funnel pages.

*Detailed implementation will be developed during Phase 1 and 3.*

### Technology Stack

#### Static Site (Current Project)
- **Framework**: Gatsby 5 (upgraded from Gatsby 4)
- **Styling**: Tailwind CSS (using existing classes and patterns)
- **Node.js**: v23.6.1 (compatible with Gatsby 5)

#### Server Project (Phase 2 - Separate Project)
- **Framework**: TBD (Node.js + Express, Next.js API routes, or similar)
- **Database**: TBD (PostgreSQL, MongoDB, or similar)
- **Forms**: Server-side validation and processing
- **Hosting**: TBD (separate from static site)

### YAML Configuration Schema

SqueezePage (/ai/)
├── Hero Section (image, headline, subheadline)
├── Benefits Section (bullet points)  
├── Credibility Section (bio, photo)
├── Bonus Section (additional offer)
├── CTA Section (final call-to-action)
└── Form Sections (placeholder forms → tripwire page)

TripwirePage (/ai/tripwire)
├── Hero Section (limited time offer)
├── Product Section (details, pricing, benefits)
├── CTA Section (buy now / no thanks buttons)
└── Footer (consistent with site)


## Phase 2: Separate Server Project
**Key Architectural Change**: Phase 2 will be implemented as a separate server-side project in a new repository, not as an extension of the current Gatsby static site.
- **Server Setup**: New Node.js/Express server project
- **Form Handling**: Server-side form processing and validation
- **Database**: User data and transaction storage
- **API Endpoints**: RESTful API for funnel interactions

### Integration Between Projects
- **Form Submission**: Forms POST to separate server endpoints

## Phase 3: MVP Stripe Integration
- integrate functional lead capture form
- integrate stripe with tripwire
- address MDX mapping for blogs with GraphQL
- *Detailed design TBD after Phase 2*

## Phase 4: Complete Funnel
- finalize YAML deployment for copy
- OTO offer page (reuse tripwire structure)
- Order bump functionality and logic
- Conditional routing between squeeze → tripwire → bump/OTO → thank you
- Complete funnel state management
- *Detailed design TBD after Phase 3*

## Technical Decisions

### Why YAML for Configuration?
- Human-readable and easy to edit
- Supports complex nested structures
- Can be version controlled
- Non-technical users can modify content

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
- YAML configuration missing or invalid
- ConvertKit form submission failures
- Image loading failures
- Network connectivity issues

### Future Error Scenarios (TBD)
- Stripe payment failures
- Routing logic errors
- Cross-phase state management issues

## Testing Strategy

### Phase 1 Testing
- Component rendering with various YAML configurations
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