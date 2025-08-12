# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby-based blog/portfolio website called "Assume Wisely" by Rho Lall, focused on business intelligence, data science, development, and design content. The site is built with React, Gatsby, and styled with TailwindCSS.

## Development Commands

```bash
# Start development server
gatsby develop
# or
npm start

# Build for production
gatsby build
npm run build

# Serve production build locally
gatsby serve

# Clean Gatsby cache
gatsby clean

# Deploy to GitHub Pages
npm run deploy
```

## Architecture Overview

### Content Management
- **Blog posts**: Written in MDX format, stored in `/thoughts/` directory
- **Frontmatter structure**: Each MDX file includes title, date, short description, expertise area, keywords, hero image, and hero_alt
- **Dynamic routing**: Blog posts use `/thoughts/{mdx.slug}` pattern via Gatsby's file system routing

### Key Directories
- **`/src/pages/`**: Static pages (index, about, business, datascience, development, design, journey, experience, thankyou)
- **`/src/components/`**: Reusable React components (layout, hamburger menu, lead capture forms)
- **`/thoughts/`**: MDX blog posts with associated media in `/thoughts/media/`
- **`/public/`**: Generated static site output (build artifacts)

### Styling & Design
- **TailwindCSS** for utility-first styling
- **Styled Components** for component-level styling
- **Custom fonts**: Vollkorn (display), Merriweather (body)
- **Custom colors**: Primary (#057aff), Secondary (lightslategrey)

### Data Layer
- **GraphQL**: All content queried via Gatsby's GraphQL layer
- **gatsby-source-filesystem**: Reads MDX files from `/thoughts/` directory
- **gatsby-plugin-mdx**: Processes MDX files with remark plugins for image optimization

### SEO & Analytics
- **Google Analytics**: Configured with tracking ID G-5RV9B2QZSZ
- **Hotjar**: User behavior tracking (ID: 3881909)
- **Open Graph**: Social media sharing meta tags
- **Sitemap**: Auto-generated via gatsby-plugin-sitemap

### Deployment
- **GitHub Pages**: Deployed to `main` branch via `gh-pages` package
- **Domain**: assumewisely.com (canonical), with rho-lall.github.io fallback

## Key Components

### Layout Structure
- **Main layout** (`layout.js`): Navigation header with logo, hamburger menu for mobile, and main navigation links
- **Blog post layout** (`{mdx.slug}.js`): Individual blog post template with hero image, metadata, and email capture footer
- **Sales layout** (`layout-sales.js`): Specialized layout for lead generation pages

### Content Areas
The site organizes content into expertise areas:
- **Business Intelligence**: BI reporting, data warehousing, decision making
- **Data Science**: Programming, analytics, insights
- **Development**: BI development, technical implementation
- **Design**: Data visualization, user experience
- **My Journey**: Personal stories and career insights

### Lead Generation
- **ConvertKit integration**: Email capture forms on blog posts and landing pages
- **Specialized landing pages**: Data analyst jobs, industry-specific content

## Development Notes

- **Image optimization**: Uses `gatsby-plugin-image` for responsive images with lazy loading
- **MDX processing**: Supports inline React components within markdown content
- **Responsive design**: Mobile-first approach with TailwindCSS breakpoints
- **Performance**: Static site generation with Gatsby optimizations for speed and SEO