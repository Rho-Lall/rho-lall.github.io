# Project Backlog

This file tracks future features and improvements that are not yet prioritized or planned.

## Features

### Add VitePress Documentation to Projects
**Description:** Set up VitePress documentation system for organizing project documentation across multiple repositories.

**Goals:**
- Create a standardized documentation structure for all projects
- Deploy documentation to GitHub Pages at `rho-lall.github.io/project-name`
- Use VitePress for fast, modern documentation sites
- Support markdown-based documentation with minimal setup

**Potential Approach:**
- Create a VitePress template/starter
- Set up gh-pages branch workflow for deployment
- Document the process for adding docs to new projects
- Consider using `/docs` folder vs separate gh-pages branch

**Benefits:**
- Consistent documentation across all projects
- Easy to maintain and update
- Professional appearance
- Fast, modern documentation experience

**Status:** Backlog

---

### Refactor Data Analyst Page Lead Capture
**Description:** Update the data analyst jobs page to properly use the LeadCaptureForm component from the funnel-0ps submodule.

**Goals:**
- Fix import path issues for LeadCaptureForm on data analyst page
- Ensure the page builds successfully with the submodule component
- Verify form functionality works correctly
- Update any other pages that may have similar import issues

**Context:**
- The local lead-capture component has been removed
- LeadCaptureForm is now in the funnel-0ps submodule at `src/funnel-0ps`
- Current import path `../../funnel-0ps/index.js` is not resolving correctly during build
- May need to investigate Webpack/Gatsby configuration for submodule resolution

**Potential Approach:**
- Investigate Gatsby's module resolution configuration
- Consider adding the submodule path to Gatsby's webpack config
- Test alternative import strategies (direct file import vs package-style import)
- Verify all pages using LeadCaptureForm are updated consistently

**Status:** Backlog

---

## Notes
- Items in this backlog are not yet scheduled for implementation
- Move items to roadmap.md when ready to prioritize
- Move items to specs when ready to design and implement
