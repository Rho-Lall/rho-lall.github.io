# Requirements Document - Phase VII: Lead Capture Extraction & Host Project Cleanup

## Introduction

Phase VII focuses on two main objectives:
1. Extract the lead capture functionality into the funnel-0ps submodule to make it reusable across projects
2. Remove the AI offer and OTO pages from the host project, as these will be built in separate repositories

This phase completes the modularization effort by ensuring all reusable funnel components (including lead capture) are in the submodule, while the host project only contains project-specific content.

## Glossary

- **API Endpoint**: The backend URL where lead capture form submissions are sent
- **Funnel Submodule**: The funnel-0ps Git submodule containing reusable funnel components
- **Host Project**: The current rho-lall.github.io site
- **Lead Capture Form**: A form component that collects name, email, and details from prospects
- **Squeeze Page**: A landing page designed to capture lead information before presenting an offer

## Requirements

### Requirement 1: Extract Lead Capture Component to Submodule

**User Story:** As a developer, I want the lead capture form in the funnel submodule, so that I can reuse it across multiple projects without code duplication.

#### Acceptance Criteria

1. THE Funnel Submodule SHALL include a LeadCaptureForm component
2. THE LeadCaptureForm SHALL accept an apiEndpoint prop for form submissions
3. THE LeadCaptureForm SHALL accept a buttonText prop with a default value
4. THE LeadCaptureForm SHALL accept a successUrl prop for post-submission navigation
5. THE LeadCaptureForm SHALL collect name, email, and details fields
6. THE LeadCaptureForm SHALL validate required fields before submission
7. THE LeadCaptureForm SHALL display error messages for failed submissions
8. THE LeadCaptureForm SHALL navigate to the successUrl after successful submission

### Requirement 2: Create Squeeze Page Template

**User Story:** As a developer, I want a reusable squeeze page template in the submodule, so that I can quickly create lead capture pages without boilerplate code.

#### Acceptance Criteria

1. THE Funnel Submodule SHALL include a SqueezePageTemplate component
2. THE SqueezePageTemplate SHALL handle Layout wrapper integration
3. THE SqueezePageTemplate SHALL handle Helmet/SEO configuration
4. THE SqueezePageTemplate SHALL accept pageData configuration via props
5. THE SqueezePageTemplate SHALL integrate the LeadCaptureForm component
6. THE SqueezePageTemplate SHALL support multiple form placements on the page
7. THE SqueezePageTemplate SHALL accept children for custom content sections

### Requirement 3: Remove AI Squeeze Page from Host Project

**User Story:** As a developer, I want to remove the AI squeeze page from the host project, so that it can be built in a separate repository.

#### Acceptance Criteria

1. THE Host Project SHALL remove the file `src/pages/ai/index.js`
2. THE Host Project SHALL successfully build after removing the AI page
3. THE Host Project SHALL not have broken links to the removed AI page

### Requirement 4: Remove AI Offer Pages from Host Project

**User Story:** As a developer, I want to remove the AI offer pages from the host project, so that they can be built in a separate repository.

#### Acceptance Criteria

1. THE Host Project SHALL remove the directory `src/pages/offer/results-now-ai-action-pack/`
2. THE Host Project SHALL remove all files within the results-now-ai-action-pack directory
3. THE Host Project SHALL successfully build after removing the offer pages
4. THE Host Project SHALL not have broken links to the removed offer pages

### Requirement 5: Remove AI OTO Pages from Host Project

**User Story:** As a developer, I want to remove the AI OTO pages from the host project, so that they can be built in a separate repository.

#### Acceptance Criteria

1. THE Host Project SHALL remove the directory `src/pages/one-time-offer/6-month-roi-strategy-map/`
2. THE Host Project SHALL remove all files within the 6-month-roi-strategy-map directory
3. THE Host Project SHALL successfully build after removing the OTO pages
4. THE Host Project SHALL not have broken links to the removed OTO pages

### Requirement 6: Configure Lead Capture Navigation

**User Story:** As a developer, I want the lead capture form to navigate to a configurable URL, so that different squeeze pages can redirect to different offers.

#### Acceptance Criteria

1. THE LeadCaptureForm SHALL accept a successUrl prop
2. WHEN successUrl is provided, THE LeadCaptureForm SHALL navigate to that URL after successful submission
3. WHEN successUrl is not provided, THE LeadCaptureForm SHALL not navigate automatically

### Requirement 7: Document Lead Capture Usage

**User Story:** As a developer using the submodule, I want clear documentation on the lead capture components, so that I can implement squeeze pages correctly.

#### Acceptance Criteria

1. THE Funnel Submodule README SHALL document the LeadCaptureForm component props
2. THE Funnel Submodule README SHALL document the SqueezePageTemplate component props
3. THE Funnel Submodule README SHALL include an example squeeze page implementation
4. THE Funnel Submodule README SHALL document the API endpoint requirements
5. THE Funnel Submodule README SHALL document the expected API response format

### Requirement 8: Validate Submodule Changes

**User Story:** As a developer, I want to validate that the lead capture extraction works correctly, so that I can ensure the component is ready for use in other projects.

#### Acceptance Criteria

1. THE Host Project SHALL successfully build with the updated submodule
2. THE LeadCaptureForm SHALL be properly exported from the submodule
3. THE Submodule README SHALL include complete documentation for the LeadCaptureForm

## Non-Functional Requirements

### Maintainability
- The LeadCaptureForm SHALL follow the same code style as other submodule components
- The LeadCaptureForm SHALL include inline documentation
- The submodule README SHALL be updated with lead capture documentation

### Compatibility
- The LeadCaptureForm SHALL work with the existing API endpoint
- The LeadCaptureForm SHALL work with Gatsby navigation
- The LeadCaptureForm SHALL maintain the same styling approach (Tailwind CSS)

### Performance
- The LeadCaptureForm SHALL not introduce unnecessary dependencies
- The LeadCaptureForm SHALL have minimal impact on bundle size

## Success Criteria

Phase VII will be considered complete when:
1. The LeadCaptureForm component is extracted to the funnel-0ps submodule
2. The AI squeeze page is removed from the host project
3. The AI offer pages are removed from the host project
4. The AI OTO pages are removed from the host project
5. The local lead-capture component directory is removed from the host project
6. The host project builds successfully
7. The submodule README documents the LeadCaptureForm component
