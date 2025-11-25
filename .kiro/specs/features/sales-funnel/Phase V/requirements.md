# Requirements Document - Phase V: API Integration Fixes & Test/Live Mode Support

## Introduction

Phase V addresses critical bugs and missing functionality discovered during Phase IV implementation. This phase focuses on fixing API integration issues, implementing proper test/live mode handling, and ensuring the sales funnel correctly uses the backend API as documented in the API Integration Guide.

## Glossary

- **Funnel**: What Alex Hormozi refers to as a "money model" - one or more offers presented in sequence to a customer
- **ISTEST**: Environment variable in root `.env` file that determines which Stripe mode to use (`true` for test mode, `false` for live mode)
- **isTest Parameter**: Boolean flag sent to backend to determine which Stripe mode to use (derived from ISTEST environment variable)
- **Live Mode**: Stripe production environment using live keys and live price IDs
- **Offer**: The presentation of a product for sale, related to a funnel (distinct from the product itself)
- **Offer Type**: Backend classification of a product as either `'offer'` or `'OTO'`
- **OTO**: One-Time Offer, a type of product typically presented as an upsell
- **Price ID**: Stripe identifier for a product price (e.g., `price_1SReks2uBHxDuQdErHcHumBk`)
- **Product**: A backend entity that can be set up as either an offer or an OTO
- **Sales Funnel**: The specific implementation of a funnel for selling products, consisting of an initial offer checkout page followed by one or more one-click upsell pages
- **Session ID**: Stripe checkout session identifier (format: `cs_test_...` or `cs_live_...`)
- **Test Mode**: Stripe test environment using test keys and test price IDs (prefix: `price_test_` or `price_1...` in test dashboard)
- **UUID**: Internal backend identifier for payment sessions (used for one-click upsells)

## Requirements

### Requirement 1: Use Consistent Build-Time Configuration Across All Pages

**User Story:** As a developer, I want all pages in the Sales Funnel to use the same build-time configuration for test/live mode from the root `.env` file, so that the Sales Funnel behaves consistently without manual changes.

#### Acceptance Criteria

1. THE Sales Funnel SHALL read the `ISTEST` environment variable from the root `.env` file at build time
2. WHEN `ISTEST` is `'true'`, THE Sales Funnel SHALL be configured for test mode
3. WHEN `ISTEST` is `'false'` or undefined, THE Sales Funnel SHALL be configured for live mode
4. THE Sales Funnel SHALL use the same configuration logic across all checkout and upsell pages
5. THE Sales Funnel SHALL log the current mode (test/live) for debugging purposes

### Requirement 2: Standardize isTest Parameter in Offer Checkout API Calls

**User Story:** As the Sales Funnel, I need to consistently pass the test/live mode flag to all backend API calls, so that the backend uses the correct Stripe environment.

#### Acceptance Criteria

1. THE `isTest` parameter is optional in API calls to the backend
2. WHEN `isTest` is not passed to the backend, THE Backend SHALL default to live mode (using live keys and `price_id`)
3. THE `isTest` parameter SHALL be a boolean value (not string) hardcoded at build time based on the `ISTEST` environment variable
4. THE Sales Funnel SHALL derive `isTest` from the `ISTEST` environment variable in the root `.env` file at build time
5. THE `isTest` value SHALL remain constant for the entire build and SHALL NOT change dynamically at runtime
6. WHEN `ISTEST` is `'true'`, THE Checkout API call SHALL include `isTest: true` and use test credentials
7. WHEN `ISTEST` is `'false'` or undefined, THE Checkout API call SHALL include `isTest: false` (or omit the parameter) and use live credentials

### Requirement 3: Implement Proper Session ID Handling for Upsell Flow

**User Story:** As the Sales Funnel, I need to correctly extract and use Stripe session IDs, so that one-click upsells can retrieve payment methods.

#### Acceptance Criteria

1. THE Success URL SHALL use the correct Stripe placeholder: `{CHECKOUT_SESSION_ID}`
2. THE One-Click Upsell Page SHALL extract `session_id` from URL query parameters
3. THE Sales Funnel SHALL validate that the session ID format is correct (starts with `cs_test_` or `cs_live_`)
4. THE Sales Funnel SHALL handle missing or invalid session IDs gracefully
5. THE Sales Funnel SHALL pass the Stripe session ID (not UUID) to the `/get-uuid` endpoint

### Requirement 4: Fix Price ID Property Mismatch in Upsell Page

**User Story:** As the Sales Funnel, I need to use the correct price ID property name based on build-time configuration, so that one-click upsells can process payments successfully.

#### Acceptance Criteria

1. WHEN `ISTEST` environment variable is `'true'`, THE One-Click Upsell Page SHALL use the `test_priceId` property from offer data
2. WHEN `ISTEST` environment variable is `'false'` or undefined, THE One-Click Upsell Page SHALL use the `price_id` property from offer data
3. THE Sales Funnel SHALL NOT reference a non-existent `priceId` property
4. THE One-Click Upsell API call SHALL include the price ID corresponding to the build-time configuration
5. THE Sales Funnel SHALL pass test credentials (test key and test price ID) to the backend when configured for test mode, and live credentials when configured for live mode

**Current Bug:**
```javascript
// ❌ WRONG - special-bonus.js line 127
priceId: offerData.stripe.priceId,  // This property doesn't exist!

// ✅ CORRECT
const isTest = process.env.ISTEST === 'true'
priceId: isTest ? offerData.stripe.test_priceId : offerData.stripe.price_id,
```

### Requirement 5: Implement Consistent Error Handling

**User Story:** As a customer, I want consistent error messages across all checkout and upsell pages, so that I understand what went wrong and how to fix it.

#### Acceptance Criteria

1. ALL payment-related errors SHALL use consistent error message formatting
2. THE Sales Funnel SHALL distinguish between network errors, payment failures, and configuration errors
3. THE Sales Funnel SHALL provide user-friendly error messages (not technical jargon)
4. THE Sales Funnel SHALL log detailed error information for debugging
5. THE Sales Funnel SHALL provide retry options for recoverable errors

## Non-Functional Requirements

### Security
- Only use Stripe publishable keys (`pk_test_` or `pk_live_`) in the frontend - never secret keys (`sk_`)
- Never log or expose customer payment information (card numbers, CVV, billing details)
- Never include API secret keys or backend credentials in frontend code or logs
- All API communications use HTTPS
- Validate all API responses before processing

### Maintainability
- Use consistent patterns for test/live mode detection across all pages
- Centralize API endpoint configuration
- All environment variables SHALL be defined in the root `.env` file
- Document all environment variables required in the root `.env` file

### Compatibility
- Support both test and live Stripe environments
- Work with existing Gatsby build process
- Maintain backward compatibility with Phase IV implementation

## Success Criteria

Phase V will be considered complete when:
1. All one-click upsells successfully process payments in both test and live mode
2. The correct price IDs are used based on the current environment
3. Error messages are clear and actionable
4. The system gracefully handles all error scenarios
