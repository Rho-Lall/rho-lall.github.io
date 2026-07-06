# Implementation Plan - Phase VII: Lead Capture Extraction & Host Project Cleanup

## Overview

This plan extracts the LeadCaptureForm component to the funnel-0ps submodule and removes all AI-specific pages from the host project. The work is straightforward: extract the reusable component, then clean up the host project by removing pages that will be built in separate repositories.

## Task List

- [x] 1. Extract LeadCaptureForm to submodule
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8_

- [x] 1.1 Copy and update LeadCaptureForm component
  - Copy `src/components/lead-capture/lead-capture.js` to `funnel-0ps/components/LeadCaptureForm.js`
  - Update component to accept successUrl prop (optional)
  - Update component to accept onSuccess callback prop (optional)
  - Update component to accept onError callback prop (optional)
  - Ensure buttonText prop has default value "Become AI emPowered"
  - Commit to submodule repository
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.8_

- [x] 1.2 Update submodule exports
  - Add LeadCaptureForm to `funnel-0ps/index.js` exports
  - Commit to submodule repository
  - _Requirements: 1.1_

- [ ]* 2. Create SqueezePageTemplate (Optional)
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [ ]* 2.1 Create SqueezePageTemplate component
  - Create `funnel-0ps/templates/SqueezePageTemplate.js`
  - Import LeadCaptureForm component
  - Handle Layout wrapper integration
  - Handle Helmet/SEO configuration
  - Accept pageData, apiEndpoint, successUrl, buttonText props
  - Support children for custom content sections
  - Commit to submodule repository
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

- [ ]* 2.2 Update submodule exports for template
  - Add SqueezePageTemplate to `funnel-0ps/index.js` exports
  - Commit to submodule repository
  - _Requirements: 2.1_

- [x] 3. Remove AI squeeze page from host project
  - _Requirements: 3.1, 3.2, 3.3_

- [x] 3.1 Delete AI page directory
  - Delete `src/pages/ai/` directory and all contents
  - Commit deletion to host project
  - _Requirements: 3.1_

- [x] 3.2 Verify build after AI page removal
  - Run `gatsby build` and verify successful build
  - Fix any build errors if they occur
  - _Requirements: 3.2_

- [x] 4. Remove AI offer pages from host project
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [x] 4.1 Delete AI offer directory
  - Delete `src/pages/offer/results-now-ai-action-pack/` directory and all contents
  - Commit deletion to host project
  - _Requirements: 4.1_

- [x] 4.2 Verify build after offer removal
  - Run `gatsby build` and verify successful build
  - Fix any build errors if they occur
  - _Requirements: 4.3_

- [x] 5. Remove AI OTO pages from host project
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 5.1 Delete AI OTO directory
  - Delete `src/pages/one-time-offer/6-month-roi-strategy-map/` directory and all contents
  - Commit deletion to host project
  - _Requirements: 5.1_

- [x] 5.2 Verify build after OTO removal
  - Run `gatsby build` and verify successful build
  - Fix any build errors if they occur
  - _Requirements: 5.3_

- [x] 6. Remove local lead-capture component
  - _Requirements: 1.1_

- [x] 6.1 Delete local lead-capture directory
  - Delete `src/components/lead-capture/` directory and all contents
  - Verify no remaining references to local lead-capture component
  - Commit deletion to host project
  - _Requirements: 1.1_

- [x] 6.2 Final build verification
  - Run `gatsby build` and verify successful build
  - Fix any remaining issues
  - _Requirements: 8.1_

- [x] 7. Update submodule documentation
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 7.1 Document LeadCaptureForm in README
  - Add LeadCaptureForm section to `funnel-0ps/README.md`
  - Document all props: apiEndpoint, buttonText, successUrl, onSuccess, onError
  - Include example usage code
  - Document API endpoint requirements
  - Document expected API request/response format
  - Commit to submodule repository
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [ ]* 7.2 Document SqueezePageTemplate in README (Optional)
  - Add SqueezePageTemplate section to `funnel-0ps/README.md`
  - Document all props
  - Include example squeeze page implementation
  - Commit to submodule repository
  - _Requirements: 7.2, 7.3_

- [x] 8. Final validation
  - _Requirements: 8.1, 8.2, 8.3_

- [x] 8.1 Verify submodule exports
  - Verify LeadCaptureForm is exported from `funnel-0ps/index.js`
  - Verify component can be imported in test scenarios
  - _Requirements: 8.2_

- [x] 8.2 Verify host project state
  - Verify all AI-related pages are removed
  - Verify local lead-capture component is removed
  - Verify no broken imports or references remain
  - Run final `gatsby build` and verify success
  - _Requirements: 8.1_

- [x] 8.3 Verify documentation completeness
  - Review submodule README for LeadCaptureForm documentation
  - Verify all props are documented
  - Verify usage examples are clear and complete
  - _Requirements: 8.3_
