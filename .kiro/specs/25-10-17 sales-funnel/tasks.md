# Implementation Plan - Phase 1: Squeeze Page + Tripwire Page

## Phase 1A: Manual Squeeze Page (Prove Basic Functionality)

- [x] 1. Consolidate image organization
  - Move all images from `thoughts/media/` to `src/images/`
  - Update blog files that reference the old media paths
  - Organize images in logical subdirectories under `src/images/`
  - _Requirements: 4.3, 4.5_

- [x] 2. Create basic page structure and hero section
  - Create `src/pages/ai/index.js` file with Layout component
  - Build hero section with image, headline, subheadline using variables
  - Create placeholder email capture form component (functional UI, no backend)
  - _Requirements: 1.1, 1.2, 4.1, 4.5_

- [x] 3. Add benefits section
  - Create benefits section with bullet points/features
  - Include placeholder form in benefits section
  - Style with existing Tailwind classes for consistency
  - _Requirements: 1.1, 1.2, 4.1, 4.2_

- [x] 4. Add credibility section (Who is Rho Lall?)
  - Create credibility/about section with your photo and bio
  - Style to match existing site patterns
  - Make responsive for mobile/tablet/desktop
  - _Requirements: 1.1, 4.1, 4.2_

- [ ] 5. Add bonus section
  - Create bonus offer section with compelling content
  - Style consistently with other sections
  - _Requirements: 1.1, 4.1, 4.2_

- [ ] 6. Add final CTA section
  - Create standalone final call-to-action section
  - Include placeholder form integration
  - Test all placeholder forms display properly
  - _Requirements: 1.2, 4.4_

- [ ] 7. Test and refine complete squeeze page
  - Test complete page functionality end-to-end
  - Verify responsive design across all sections
  - Ensure all placeholder forms display and style properly
  - _Requirements: 1.1, 1.2, 4.1, 4.2_

- [ ] 8. Create tripwire offer page
  - Create `src/pages/ai/tripwire.js` file with Layout component
  - Build tripwire offer page with product details, pricing, benefits
  - Include "Buy Now" and "No Thanks" buttons with navigation
  - Style consistently with squeeze page
  - _Requirements: 1.3, 4.1, 4.2_

- [ ] 9. Connect squeeze page to tripwire page
  - Update squeeze page form submit buttons to redirect to `/ai/tripwire`
  - Test navigation flow from squeeze to tripwire
  - Ensure smooth user experience between pages
  - _Requirements: 1.2, 1.3_

## Phase 1B: Add YAML Configuration (After Both Pages Work)

- [ ] 10. Extract content to YAML configuration
  - Create YAML file with all hardcoded content from both pages
  - Install js-yaml dependency
  - Refactor both pages to load content from YAML
  - _Requirements: 3.1, 3.3_

- [ ] 11. Test YAML-driven pages
  - Verify both pages work identically with YAML configuration
  - Test navigation flow with YAML-driven content
  - Test with different YAML content
  - _Requirements: 3.1, 3.2_

## Future Phases (Not Implemented Yet)
- Phase 2: Form functionality and backend integration
- Phase 3: Tripwire offer page with Stripe integration  
- Phase 4: Full funnel logic (OTO, bump, conditional routing)