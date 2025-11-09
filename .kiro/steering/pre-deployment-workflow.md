# Deployment Workflow

## Overview
Standard deployment process for the Gatsby site to GitHub Pages.

## Pre-Deployment Checklist

### Security Review
- [ ] No API keys or secrets exposed in source code
- [ ] Only public API endpoints are included
- [ ] All sensitive data handled server-side
- [ ] HTTPS endpoints used for all external calls

### Code Quality
- [ ] All components have proper TypeScript/PropTypes
- [ ] No console.log statements in production code (except debugging)
- [ ] All imports are used and necessary
- [ ] Consistent code formatting applied


## Deployment Commands

### Development Server
```bash
npm run develop
# Runs on http://localhost:8000
```

### Production Build
```bash
npm run build
# Builds static files to /public directory
```

### Deploy to GitHub Pages
```bash
npm run deploy
# Builds and deploys to GitHub Pages
```

## Post-Deployment Verification

### URLs to Test
- Main site: https://rho-lall.github.io
- AI forms: https://rho-lall.github.io/ai/
- Data analyst forms: https://rho-lall.github.io/data-analyst/data-analyst-jobs/
- Blog forms: https://rho-lall.github.io/thoughts/[any-post]/
- Offer page: https://rho-lall.github.io/offer/results_now_ai_action_pack/

### Functionality Tests
- [ ] Forms accept user input
- [ ] Form validation works correctly
- [ ] Successful submissions redirect to offer page
- [ ] Error handling displays appropriate messages
- [ ] All pages load without JavaScript errors

## GitHub Pages Configuration
- Repository: `rho-lall.github.io` (main site)
- Branch: `main` (deployment target)
- Build tool: Gatsby static site generator
- Additional sites: `rho-lall.github.io/[repository-name]`

## Troubleshooting
- Check build logs for errors during deployment
- Verify all image paths are correct for production
- Ensure all external links use HTTPS
- Test forms with actual API endpoints, not localhost