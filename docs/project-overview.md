# Project Overview

## What We Found

**Assume Wisely** is a Gatsby-based blog focused on business intelligence and data-driven decision making. The site has a solid foundation but two key issues preventing full functionality.

## Site Structure

### **Tech Stack**
- Gatsby 5.15.0 + React 18.1.0
- MDX for blog content (100+ posts across 5 categories)
- Tailwind CSS + Styled Components for styling
- GitHub Pages deployment

### **Main Components**
- **Layout** - Main site wrapper with navigation
- **LayoutSales** - Sales funnel pages with clean design
- **Homepage** - Blog grid with featured content
- **Blog Template** - Individual post display (currently broken)

### **Content Organization**
```
thoughts/
├── ai_strategy/ (40+ posts)
├── analytics_engineering/ (16 posts)
├── artificial_intelligence/ (30+ posts)
├── design/ (2 posts)
└── my_journey/ (25+ posts)
```

## What Works ✅

- Homepage displays blog posts correctly
- Navigation and mobile menu function
- Sales funnel pages load and display
- RSS feeds generate for all categories
- SEO and social media integration
- Image optimization and processing
- Google Analytics and Hotjar tracking

## What's Broken ❌

### **Critical: Blog Content Not Displaying**
- **Issue**: Blog posts show "MDX content will be rendered here" instead of actual content
- **Location**: `src/pages/thoughts/{mdx.fields__slug}.js`
- **Root Cause**: Missing `body` field in GraphQL query + no MDX renderer component

### **Forms Are Mockups**
- **Issue**: Tripwire page buttons don't actually submit
- **Location**: `src/pages/ai/tripwire.js`
- **Solution**: Replace with existing serverless form component

## Next Steps

See the [roadmap](../roadmap.md) for current priorities:

1. **Fix MDX Rendering** (Critical) - Restore blog functionality
2. **Deploy Active Form** - Replace mockup with working form
3. **Continue Documentation** - Complete repository understanding

## Spec Organization

Specs are now organized to mirror the docs structure:
- `architecture/` - System design and structure
- `components/` - UI features and functionality  
- `deployment/` - CI/CD and build processes
- `workflows/` - Development processes
- `support/` - Bug fixes and troubleshooting

## Component Diagram

See [component-diagram.md](component-diagram.md) for detailed architecture visualization showing how components connect and data flows through the system.