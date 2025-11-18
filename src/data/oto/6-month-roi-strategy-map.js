/**
 * OTO Offer Data: 6 Month ROI Strategy Map
 * 
 * This file contains all the content and configuration for this specific OTO.
 * To create a new OTO, duplicate this file and update the values.
 */

export const offerData = {
    // Stripe Configuration
    stripe: {
        priceId: 'price_1SRelR2uBHxDuQdEMEhiXlL7', // TEST PRICE
    },

    // Meta Information (SEO)
    meta: {
        title: "6 Month ROI Strategy Map: One Time Offer",
        description: "A step-by-step roadmap to prioritize fast, visible wins that free up bandwidth and prove bottom-line value.",
        keywords: "ROI strategy, roi product strategy, business planning",
        author: "Rho Lall"
    },

    // Pre-Hero Section (appears before main headline)
    pre_hero_section: {
        // Text that appears above the progress bar
        text_above_progress: "ONE LAST STOP . . .",
        
        // Progress bar configuration
        progress_bar: {
            width: '80%',                                                    // How full the bar appears (e.g., '60%', '80%', '100%')
            gradient: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 100%)',  // Color gradient for the bar
            text: "Progressing..."                                          // Text inside the bar (can be overridden by progressText prop in page)
        },
        
        // Text that appears below the progress bar (optional)
        text_below_progress: "The AI roadmap that pays for itself"  // Leave empty or add text like "Just one more step..."
    },

    // Hero Section (main offer headline and pricing)
    hero_section: {
        headline: "🚀 The 6-Month ROI Strategy Map",        // Main headline
        sub_headline: "Limited Release Offer $297"          // Sub-headline (typically the price)
    },

    // Product Section (detailed offer description)
    product_section: {
        // Product image (optional - leave empty if no image)
        image_path: "../images/me_t2.png",                                  // Path to product image (relative to src/pages)
        image_alt: "6 Month ROI Strategy Map",                              // Alt text for image
        
        // Product description (markdown supported)
        copy: `Experts caution: “Don’t expect ROI from AI for at least 2 years.”

They say you're not ready.

They say your culture's not ready.  
They say you need more time.  
But you don’t get time.  
You need results this year.

**This guide to shows you how.**


## 🔓 Special Alpha Release: Just $297

✅ 6-Month ROI Roadmap
A step-by-step roadmap to prioritize fast, visible wins that free up bandwidth and prove bottom-line value.

✅ ROI Calculator (Not Just Hours)
Clearly define your return on investment. Quantify impact across revenue, cost savings, time reclaimed, and even intangibles.

✅ Adoption-Ready Playbook & Case Studies
Deliver 8X - 13X results. Do twice the work in half the time.

✅ AI Strategy Power Hour (Live 1:1)
Bring your backlog, blockers, & blind spots.
Get personal clarity and direction in this 1:1 session.

⚠️ Most teams fail because they overbuild and under-communicate.
This map flips that. It’s lean, fast, and built for buy-in.

⚠️ Most teams fail because they overbuild and under-communicate.

This map flips that. It’s lean, fast, and built for buy-in.

You’re getting first access and personalized strategy before it hits the market.

## Limit 5 clients.

- You’ll get live 1:1 support tailored to your needs
- You’ll help shape these tools as they’re finalized
- You’ll pay just $297 instead of the final $497 price

Save $200 now — this bundle will increase to $497.

`
    },

    // Offer Section (appears after product copy, before buttons - centered)
    offer_section: {
        headline: "Total VALUE: $4597",                       // Main offer headline (centered)
        sub_headline: "Get this One-Time-Offer for Only $297"        // Offer subheadline (centered)
    },

    // CTA Section (bottom call-to-action)
    cta_section: {
        headline: "Get Your 6 Month ROI Strategy Map Now!",
    },

    // Button Text (optional - leave empty to use defaults)
    buttons: {
        primary_text: "",           // Default: "Yes, I Want This"
        secondary_text: ""          // Default: "No thanks, take me to my purchase"
    },

    // Visual Styling
    colors: {
        accent_color: "rgb(59, 130, 246)",
        background_dark: "rgba(19, 47, 69)",
        price_color: "red",
        value_color: "green"
    },

    // Timer Configuration
    show_timer: true,                           // Set to false to hide timer
    timer_minutes: 5                            // Countdown duration in minutes
}

export default offerData
