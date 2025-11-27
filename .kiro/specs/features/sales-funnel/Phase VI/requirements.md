# Requirements Document - Phase VI: Modular Funnel Submodule Extraction

## Introduction

Phase VI focuses on extracting the Sales Funnel implementation into a reusable Git submodule that can be imported and used across multiple Gatsby React sites. This refactoring will preserve all existing functionality while making the funnel components, data structures, and utilities available as a modular submodule. The extraction will be methodical and incremental, ensuring the current site continues to function at each step of the migration.

## Glossary

- **Consuming Project**: A Gatsby React site that includes the Funnel Submodule
- **Data Folder**: Directory structure containing offer and OTO configuration files (`src/data/offers/` and `src/data/oto/`)
- **Funnel Submodule**: The extracted Git submodule containing reusable funnel components, utilities, and types
- **Git Submodule**: A Git repository embedded inside another Git repository, appearing as a folder in the parent project
- **Host Project**: The current rho-lall.github.io site where the funnel is currently implemented
- **Offer Page**: A Gatsby page component that presents an offer (lives in `src/pages/offer/`)
- **OTO**: One-Time Offer, typically presented as an upsell after initial purchase
- **OTO Page**: A Gatsby page component that presents a one-time offer (lives in `src/pages/one-time-offer/`)
- **Page Component**: Gatsby page files that define routes and must remain in the consuming project
- **Presentational Component**: Reusable React components that can be extracted to the submodule (e.g., base.js components)
- **Route**: A URL path in the Gatsby site generated from page components
- **Submodule Repository**: The standalone GitHub repository that will contain the extracted funnel code

## Requirements

### Requirement 1: Create Submodule Repository Structure

**User Story:** As a developer, I want a well-structured Git submodule repository, so that I can easily import and use funnel components in multiple projects.

#### Acceptance Criteria

1. THE Submodule Repository SHALL be initialized as a standalone GitHub repository
2. THE Submodule Repository SHALL include a README documenting setup and usage
3. THE Submodule Repository SHALL include a clear directory structure separating components, templates, and utilities
4. THE Submodule Repository SHALL include a .gitignore file appropriate for a React component library
5. THE Submodule Repository SHALL be accessible for git submodule operations

### Requirement 2: Inventory and Document Current Implementation

**User Story:** As a developer, I want a complete inventory of all funnel-related files and their dependencies, so that I can plan the extraction methodically.

#### Acceptance Criteria

1. THE Design Document SHALL list all files in `src/components/checkout/` with their purpose
2. THE Design Document SHALL list all files in `src/components/offer/` with their purpose
3. THE Design Document SHALL list all files in `src/components/one-time-offer/` with their purpose
4. THE Design Document SHALL identify all external npm dependencies used by funnel components
5. THE Design Document SHALL document all imports and dependencies between funnel files
6. THE Design Document SHALL identify which files will be extracted vs which remain in consuming projects

### Requirement 3: Extract Presentational Components

**User Story:** As a developer, I want to extract reusable presentational components to the submodule, so that they can be used across multiple sites without duplication.

#### Acceptance Criteria

1. THE Submodule SHALL include the StripeCheckout component from `src/components/checkout/stripe-checkout.js`
2. THE Submodule SHALL include the OfferBase component from `src/components/offer/base.js`
3. THE Submodule SHALL include the OTOBase component from `src/components/one-time-offer/base.js`
4. THE Submodule SHALL include the OfferSelection component from `src/components/offer-selection/`
5. THE Submodule SHALL preserve all component functionality and props interfaces
6. THE Submodule SHALL export all components from a clear entry point

### Requirement 4: Document Offer and OTO Configuration File Format

**User Story:** As a developer, I want clear documentation of the offer and OTO configuration file format, so that I know what properties are required and how to structure my data files.

#### Acceptance Criteria

1. THE Submodule README SHALL document all required properties in the offer configuration object
2. THE Submodule README SHALL document all required properties in the OTO configuration object
3. THE Submodule README SHALL document the Stripe configuration fields (test_priceId, price_id)
4. THE Submodule README SHALL include a complete example offer data file
5. THE Submodule README SHALL include a complete example OTO data file
6. THE Submodule README SHALL document which properties are optional vs required

### Requirement 5: Create Reusable Page Templates

**User Story:** As a developer, I want reusable page template components in the submodule, so that page files in the consuming project can be minimal configuration wrappers without boilerplate code.

#### Acceptance Criteria

1. THE Submodule SHALL include an OfferPageTemplate component that handles all offer page boilerplate
2. THE Submodule SHALL include an OTOPageTemplate component that handles all OTO page boilerplate
3. THE Submodule SHALL include a CheckoutPageTemplate component that handles all checkout page boilerplate
4. THE Page Templates SHALL handle Helmet/SEO configuration internally
5. THE Page Templates SHALL handle test mode detection and display internally
6. THE Page Templates SHALL accept configuration via props (offerData, URLs, image paths)
7. THE Consuming Project page files SHALL be reduced to minimal configuration wrappers

### Requirement 6: Handle Environment Configuration

**User Story:** As a developer, I want the submodule to accept configuration from the consuming project, so that each site can use its own API endpoints and Stripe keys.

#### Acceptance Criteria

1. THE Submodule components SHALL read environment variables from the consuming project's environment
2. THE Submodule SHALL support ISTEST environment variable for test/live mode switching
3. THE Submodule SHALL support GATSBY_STRIPE_PUBLISHABLE_KEY_TEST for test mode
4. THE Submodule SHALL support GATSBY_STRIPE_PUBLISHABLE_KEY_PROD for live mode
5. THE Submodule README SHALL document all required environment variables
6. THE Submodule SHALL provide clear error messages when required environment variables are missing

### Requirement 7: Migrate Host Project to Use Submodule

**User Story:** As a developer, I want to migrate the host project to use the submodule, so that it works correctly with the extracted code.

#### Acceptance Criteria

1. THE Host Project SHALL add the Funnel Submodule via `git submodule add`
2. THE Host Project page files SHALL be updated to import from the submodule
3. THE Host Project SHALL remove the original component files after migration
4. THE Host Project SHALL successfully build after migration
5. THE Host Project funnel SHALL function identically to pre-migration state

### Requirement 8: Document Submodule Usage

**User Story:** As a developer using the submodule in a new project, I want clear documentation, so that I can set up and use the funnel components correctly.

#### Acceptance Criteria

1. THE Submodule README SHALL document how to add the submodule to a project
2. THE Submodule README SHALL document the required directory structure for data files
3. THE Submodule README SHALL provide example page component implementations
4. THE Submodule README SHALL document all required environment variables
5. THE Submodule README SHALL include a quick start guide for new projects
6. THE Submodule README SHALL document the Stripe configuration requirements

### Requirement 9: Validate Submodule in Host Project

**User Story:** As a developer, I want to validate the extracted submodule works correctly in the host project, so that I can ensure no functionality was lost during extraction.

#### Acceptance Criteria

1. THE Host Project SHALL successfully build with the submodule
2. THE Offer presentation page SHALL display correctly
3. THE Offer checkout flow SHALL work correctly in test mode
4. THE OTO presentation page SHALL display correctly
5. THE OTO one-click upsell flow SHALL work correctly in test mode
6. THE Test mode banner and indicators SHALL display correctly

### Requirement 10: Create Page Generation Scripts

**User Story:** As a developer, I want scripts to automatically generate page components from data files, so that I can quickly scaffold new offers and OTOs without manual boilerplate.

#### Acceptance Criteria

1. THE Submodule SHALL include a Node.js script to generate offer page components
2. THE Offer script SHALL require a data file name as a command-line argument
3. WHEN the offer script is run, THE Script SHALL create the offer directory structure under `src/pages/offer/`
4. THE Offer script SHALL generate index.js and checkout.js page wrappers
5. THE Submodule SHALL include a Node.js script to generate OTO page components
6. THE OTO script SHALL require a data file name as a command-line argument
7. WHEN the OTO script is run, THE Script SHALL create the OTO directory structure under `src/pages/one-time-offer/`
8. THE OTO script SHALL generate index.js, checkout.js, and special-bonus.js page wrappers
9. THE Generated page files SHALL import from the submodule templates
10. THE Generated page files SHALL reference the correct data file from `src/data/offers/` or `src/data/oto/`
11. THE Scripts SHALL be runnable via npm scripts (e.g., `npm run generate:offer <name>`)

## Current Implementation Inventory

### Components to Extract

**Checkout Components:**
- `src/components/checkout/stripe-checkout.js` - Stripe checkout integration component
- `src/components/checkout/README.md` - Documentation (to be incorporated into module README)

**Offer Components:**
- `src/components/offer/base.js` - Base offer presentation component

**One-Time Offer Components:**
- `src/components/one-time-offer/base.js` - Base OTO presentation component

### Data Structure Files (Examples to Document)

**Offer Data:**
- `src/data/offers/results-now-ai-action-pack.js` - Example offer data structure
- `src/data/offers/README.md` - Data structure documentation

**OTO Data:**
- `src/data/oto/6-month-roi-strategy-map.js` - Example OTO data structure
- `src/data/oto/README.md` - Data structure documentation

### Page Components (Remain in Consuming Project)

**Offer Pages:**
- `src/pages/offer/results-now-ai-action-pack/index.js` - Offer presentation page
- `src/pages/offer/results-now-ai-action-pack/checkout.js` - Offer checkout page

**OTO Pages:**
- `src/pages/one-time-offer/6-month-roi-strategy-map/index.js` - OTO presentation page
- `src/pages/one-time-offer/6-month-roi-strategy-map/checkout.js` - OTO checkout page
- `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js` - One-click upsell page

### Environment Variables Used

From root `.env` file:
- `ISTEST` - Boolean string determining test vs live mode
- `GATSBY_STRIPE_PUBLISHABLE_KEY_TEST` - Stripe test publishable key
- `GATSBY_STRIPE_PUBLISHABLE_KEY_PROD` - Stripe live publishable key

### External Dependencies

To be documented during design phase:
- React (peer dependency)
- Stripe-related packages
- Any utility libraries used by components

## Non-Functional Requirements

### Maintainability
- The Funnel Submodule SHALL follow consistent code style and formatting
- The Funnel Submodule SHALL include inline documentation for all exported functions and components
- The Funnel Submodule SHALL use Git tags for versioning
- The Funnel Submodule SHALL maintain a changelog

### Compatibility
- The Funnel Submodule SHALL work with Gatsby v4 and v5
- The Funnel Submodule SHALL work with React 17 and 18
- The Funnel Submodule SHALL not require specific build tool configuration beyond standard Gatsby setup

### Performance
- The Funnel Submodule SHALL not introduce unnecessary dependencies
- The Funnel Submodule SHALL have minimal impact on build time and bundle size

## Success Criteria

Phase VI will be considered complete when:
1. The Funnel Submodule is created as a standalone GitHub repository
2. The Host Project successfully adds and uses the Funnel Submodule via `git submodule add`
3. All funnel functionality works identically to the pre-extraction state
4. The Funnel Submodule README provides clear setup and usage instructions
5. A second test project can successfully implement a funnel by adding the submodule
