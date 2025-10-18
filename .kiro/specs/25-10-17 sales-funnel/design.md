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

### Overall Money Model System Structure
```
Money Model System
├── YAML Configuration Files (define content for each funnel)
├── Gatsby Pages (squeeze.js, tripwire.js, oto.js, etc.)
│   └── Each page manages the navigation for its scope. ie button redirects
├── Shared React Components (forms, layout elements)
└── External Integrations (ConvertKit forms, Stripe payments)
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

*Detailed implementation will be developed during Phase 1 and 2.*

### Technology Stack
- **Framework**: Gatsby (extending existing site)
- **Styling**: Tailwind CSS (using existing classes and patterns)
- **Layout**: Existing Layout component from src/components/layout.js
- **Configuration**: YAML files (new addition)
- **Forms**: ConvertKit integration (following existing src/components/lead-capture pattern)
- **Payments**: Stripe (future phases)
- **Routing**: Gatsby's file-based routing system (src/pages/)

### YAML Configuration Schema
```yaml
funnel:
  name: "Example Funnel"
  slug: "example"
  
squeeze_page:
  hero_image: "/images/hero.jpg"
  headline: "Get Your Free Guide"
  subheadline: "Learn the secrets to..."
  bullet_points:
    - "Benefit 1"
    - "Benefit 2"
    - "Benefit 3"
  cta_text: "Get Instant Access"
  convertkit_form_id: "123456"
  
# Future phases will add:
# tripwire_offer: { ... }
# oto_offer: { ... }
# stripe_config: { ... }
```

## Phase 1 Detailed Design

### Component Architecture

**Squeeze Page Component:**
```
SqueezePage
├── Hero Section (image, headline, subheadline)
├── Benefits Section (bullet points)
├── Form Section (ConvertKit integration)
└── Footer (consistent with site)
```

**Shared Components:**
- `FunnelLayout` - Wrapper that provides consistent styling
- `ConvertKitForm` - Reusable form component (based on existing pattern)
- `YAMLLoader` - Utility to load and parse funnel configurations

### YAML Configuration System
**File Structure:**
```
src/data/funnels/
├── example-funnel.yaml
└── [future-funnel].yaml
```

### Routing Strategy

**Phase 1 Routes (Gatsby Pages):**
- `src/pages/[slug]/index.js` - Squeeze page → `https://site.com/[slug]`

**Future Phase Routes (Scaffolding):**
- `src/pages/[slug]/[step].js` - Dynamic routing for all funnel steps
  - Tripwire: `https://site.com/[slug]/[custom-tripwire-slug]`
  - OTO: `https://site.com/[slug]/[custom-oto-slug]`
  - Bump: `https://site.com/[slug]/[custom-bump-slug]`
  - Cart pages: `https://site.com/[slug]/[custom-cart-slug]`
  - Thank you: `https://site.com/[slug]/[custom-thankyou-slug]`

**URL Structure**: YAML configuration defines custom URL slugs for marketing-friendly URLs instead of technical names.

### Data Flow

1. **Configuration Loading**: Direct YAML import using js-yaml library
2. **Page Rendering**: Each page imports its funnel's YAML config
3. **Form Submission**: ConvertKit handles lead capture
4. **Navigation**: Button clicks redirect to URLs defined in YAML config

**YAML Import Pattern:**
```javascript
import yaml from 'js-yaml'
import funnelConfigRaw from '../../data/funnels/data-analyst-jobs.yaml'

const funnelConfig = yaml.load(funnelConfigRaw)
```


## Phase 2: Stripe Integration Proof of Concept
- Tripwire offer page component
- Stripe checkout integration (buttons, success/cancel URLs)
- Basic thank you page
- *Prove end-to-end payment processing works*
- *Detailed design TBD during Phase 2*

## Phase 3: Full Funnel Logic
- OTO offer page (reuse tripwire structure)
- Order bump functionality and logic
- Conditional routing between squeeze → tripwire → bump/OTO → thank you
- Complete funnel state management
- *Detailed design TBD during Phase 3*

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
- **ConvertKit**: Follow existing pattern from src/components/lead-capture/data-analyst-jobs.js
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