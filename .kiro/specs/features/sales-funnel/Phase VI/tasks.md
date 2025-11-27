# Implementation Plan - Phase VI: Modular Funnel Submodule Extraction

## Overview

This plan extracts the Sales Funnel into a reusable Git submodule called `funnel-0ps`. The extraction follows a dependency-based order to minimize integration issues and ensure the host project continues functioning at each step.

## Task List

- [x] 1. Create funnel-0ps submodule repository
  - Create new GitHub repository named `funnel-0ps`
  - Initialize with README.md documenting the submodule purpose
  - Create directory structure: `components/`, `templates/`, `scripts/`
  - Add .gitignore file for Node.js projects
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 2. Extract Layer 1: Independent components
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [x] 2.1 Extract OfferSelection component
  - Copy `src/components/offer-selection/offer-selection.js` to `funnel-0ps/components/OfferSelection.js`
  - Update imports within the component
  - Commit to submodule repository
  - _Requirements: 3.4_

- [x] 2.2 Extract StripeCheckout component
  - Copy `src/components/checkout/stripe-checkout.js` to `funnel-0ps/components/StripeCheckout.js`
  - Remove `appearance` prop from component interface
  - Update imports within the component
  - Commit to submodule repository
  - _Requirements: 3.1_

- [x] 3. Extract Layer 2: Content components
  - _Requirements: 3.2, 3.3_

- [x] 3.1 Extract and rename OfferContent component
  - Copy `src/components/offer/base.js` to `funnel-0ps/components/OfferContent.js`
  - Rename component from `OfferBase` to `OfferContent`
  - Update imports to use OfferSelection from submodule
  - Commit to submodule repository
  - _Requirements: 3.2_

- [x] 3.2 Extract and rename OTOContent component
  - Copy `src/components/one-time-offer/base.js` to `funnel-0ps/components/OTOContent.js`
  - Rename component from `OTOBase` to `OTOContent`
  - Update imports to use OfferSelection from submodule
  - Commit to submodule repository
  - _Requirements: 3.3_

- [x] 4. Create Layer 3: Page templates
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7_

- [x] 4.1 Create OfferPageTemplate
  - Create `funnel-0ps/templates/OfferPageTemplate.js`
  - Import OfferContent and OfferSelection components
  - Handle Layout wrapper, Helmet/SEO, test mode banner
  - Accept props: offerData, checkoutUrl, declineUrl, productImagePath
  - Commit to submodule repository
  - _Requirements: 5.1, 5.4, 5.5, 5.6_

- [x] 4.2 Create CheckoutPageTemplate
  - Create `funnel-0ps/templates/CheckoutPageTemplate.js`
  - Import StripeCheckout component
  - Handle Layout wrapper, Helmet/SEO, test mode banner
  - Accept props: offerData, successUrl, cancelUrl
  - Commit to submodule repository
  - _Requirements: 5.3, 5.4, 5.5, 5.6_

- [x] 4.3 Create OTOPageTemplate
  - Create `funnel-0ps/templates/OTOPageTemplate.js`
  - Import OTOContent and OfferSelection components
  - Handle Layout wrapper, Helmet/SEO, test mode banner
  - Accept props: offerData, checkoutUrl, declineUrl, productImagePath
  - Commit to submodule repository
  - _Requirements: 5.2, 5.4, 5.5, 5.6_

- [x] 4.4 Create UpsellPageTemplate
  - Create `funnel-0ps/templates/UpsellPageTemplate.js`
  - Handle one-click upsell page boilerplate
  - Handle Layout wrapper, Helmet/SEO, test mode banner
  - Commit to submodule repository
  - _Requirements: 5.4, 5.5, 5.6_

- [x] 5. Create main export file
  - Create `funnel-0ps/index.js` that exports all components and templates
  - Export OfferSelection, StripeCheckout, OfferContent, OTOContent
  - Export OfferPageTemplate, CheckoutPageTemplate, OTOPageTemplate, UpsellPageTemplate
  - Commit to submodule repository
  - _Requirements: 3.6_

- [x] 6. Document submodule usage
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

- [x] 6.1 Write submodule README
  - Document how to add submodule: `git submodule add <repo-url> src/funnel-0ps`
  - Document required environment variables (ISTEST, Stripe keys)
  - Document required directory structure for data files
  - Include example offer data file with all required properties
  - Include example OTO data file with all required properties
  - Document which properties are optional vs required
  - Provide example page component implementations
  - Include quick start guide for new projects
  - Document Stripe configuration requirements (test vs live mode)
  - Commit to submodule repository
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6_

- [x] 7. Create Layer 4: Generation scripts
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.9, 10.10, 10.11_

- [x] 7.1 Create offer generation script
  - Create `funnel-0ps/scripts/generate-offer.js`
  - Accept data file name as command-line argument
  - Create directory structure under `src/pages/offer/<name>/`
  - Generate index.js using OfferPageTemplate
  - Generate checkout.js using CheckoutPageTemplate
  - Reference correct data file from `src/data/offers/`
  - Commit to submodule repository
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.9, 10.10_

- [x] 7.2 Create OTO generation script
  - Create `funnel-0ps/scripts/generate-oto.js`
  - Accept data file name as command-line argument
  - Create directory structure under `src/pages/one-time-offer/<name>/`
  - Generate index.js using OTOPageTemplate
  - Generate checkout.js using CheckoutPageTemplate
  - Generate special-bonus.js using UpsellPageTemplate
  - Reference correct data file from `src/data/oto/`
  - Commit to submodule repository
  - _Requirements: 10.5, 10.6, 10.7, 10.8, 10.9, 10.10_

- [x] 8. Add submodule to host project
  - _Requirements: 7.1, 7.2_

- [x] 8.1 Add funnel-0ps as git submodule
  - Run `git submodule add <repo-url> src/funnel-0ps` in host project
  - Commit .gitmodules file
  - Verify submodule is accessible
  - _Requirements: 7.1_

- [x] 8.2 Add npm scripts for generators
  - Add `"generate:offer": "node src/funnel-0ps/scripts/generate-offer.js"` to package.json
  - Add `"generate:oto": "node src/funnel-0ps/scripts/generate-oto.js"` to package.json
  - Commit package.json changes
  - _Requirements: 10.11_

- [x] 8.3 Test submodule build
  - Run `gatsby build` to verify host project builds with submodule
  - Fix any build errors
  - _Requirements: 7.4, 9.1_

- [x] 9. Migrate offer pages to use templates
  - _Requirements: 7.2, 7.5_

- [x] 9.1 Migrate results-now-ai-action-pack offer page
  - Update `src/pages/offer/results-now-ai-action-pack/index.js`
  - Replace boilerplate with OfferPageTemplate import
  - Pass offerData, checkoutUrl, declineUrl, productImagePath as props
  - Test page renders correctly
  - Commit changes
  - _Requirements: 7.2, 7.5, 9.2_

- [x] 9.2 Migrate results-now-ai-action-pack checkout page
  - Update `src/pages/offer/results-now-ai-action-pack/checkout.js`
  - Replace boilerplate with CheckoutPageTemplate import
  - Pass offerData, successUrl, cancelUrl as props
  - Test checkout flow works correctly
  - Commit changes
  - _Requirements: 7.2, 7.5, 9.3_

- [x] 10. Migrate OTO pages to use templates
  - _Requirements: 7.2, 7.5_

- [x] 10.1 Migrate 6-month-roi-strategy-map OTO page
  - Update `src/pages/one-time-offer/6-month-roi-strategy-map/index.js`
  - Replace boilerplate with OTOPageTemplate import
  - Pass offerData, checkoutUrl, declineUrl, productImagePath as props
  - Test page renders correctly
  - Commit changes
  - _Requirements: 7.2, 7.5, 9.4_

- [x] 10.2 Migrate 6-month-roi-strategy-map checkout page
  - Update `src/pages/one-time-offer/6-month-roi-strategy-map/checkout.js`
  - Replace boilerplate with CheckoutPageTemplate import
  - Pass offerData, successUrl, cancelUrl as props
  - Test checkout flow works correctly
  - Commit changes
  - _Requirements: 7.2, 7.5_

- [x] 10.3 Migrate 6-month-roi-strategy-map upsell page
  - Update `src/pages/one-time-offer/6-month-roi-strategy-map/special-bonus.js`
  - Replace boilerplate with UpsellPageTemplate import
  - Test one-click upsell flow works correctly
  - Commit changes
  - _Requirements: 7.2, 7.5, 9.5_

- [x] 11. Clean up original component files
  - _Requirements: 7.3_

- [x] 11.1 Remove original component files
  - Delete `src/components/checkout/stripe-checkout.js`
  - Delete `src/components/checkout/README.md`
  - Delete `src/components/offer/base.js`
  - Delete `src/components/one-time-offer/base.js`
  - Delete `src/components/offer-selection/offer-selection.js`
  - Commit deletions
  - _Requirements: 7.3_

- [x] 11.2 Verify no broken imports
  - Search codebase for any remaining imports of deleted files
  - Update any remaining references to use submodule imports
  - Commit fixes if needed
  - _Requirements: 7.3_

- [x] 12. Final validation
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_

- [x] 12.1 Build test
  - Run `gatsby build` and verify successful build
  - Fix any build errors
  - _Requirements: 9.1_

- [x] 12.2 Visual test
  - Run `gatsby develop`
  - View offer page and verify it renders identically to pre-migration
  - View OTO page and verify it renders identically to pre-migration
  - _Requirements: 9.2, 9.4_

- [x] 12.3 Functional test - Complete funnel flow
  - Start at offer page
  - Click "Yes Please" to proceed to checkout
  - Complete test purchase with test card (4242 4242 4242 4242)
  - Verify redirect to OTO page
  - Complete one-click upsell
  - Verify entire flow works correctly
  - _Requirements: 9.3, 9.5_

- [x] 12.4 Environment test
  - Verify test mode banner displays correctly when ISTEST=true
  - Verify correct Stripe keys are used based on ISTEST value
  - _Requirements: 9.6_

- [x] 12.5 Test generation scripts
  - Create a test offer data file
  - Run `npm run generate:offer test-offer`
  - Verify page files are created correctly
  - Create a test OTO data file
  - Run `npm run generate:oto test-oto`
  - Verify page files are created correctly
  - Delete test files after validation
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8_
