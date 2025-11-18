/**
 * Offer Data: Results Now AI Action Pack
 * 
 * This file contains all the content and configuration for this specific offer.
 * To create a new offer, duplicate this file and update the values.
 */

export const offerData = {
    // Stripe Configuration
    stripe: {
        priceId: 'price_1SReks2uBHxDuQdErHcHumBk', // Replace with actual Stripe Price ID
    },

    // Meta Information (SEO)
    meta: {
        title: "Limited One Time Offer - You 2.0",
        description: "Limited time offer - Start saving time with AI before Day 1 of You 2.0",
        keywords: "AI course, limited offer, productivity, time saving",
        author: "Rho Lall"
    },

    // Pre-Hero Section (appears before main headline)
    pre_hero_section: {
        // Text that appears above the progress bar
        text_above_progress: "You are almost there . . .",
        
        // Progress bar configuration
        progress_bar: {
            width: '60%',                                                    // How full the bar appears (e.g., '60%', '80%', '100%')
            gradient: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)',  // Color gradient for the bar
            text: "Progressing..."                                          // Text inside the bar (can be overridden by progressText prop in page)
        },
        
        // Text that appears below the progress bar (optional)
        text_below_progress: ""  // Leave empty or add text like "Just one more step..."
    },

    // Hero Section (main offer headline and pricing)
    hero_section: {
        headline: "Limited ONE TIME Offer",                                                                 // Main headline
        sub_headline: "**Start saving time with AI**\nbefore Day 1 of You 2.0:\nBecome an AI emPowered Human",  // Subheadline (supports markdown, \n for line breaks)
        offer_price: "TODAY ONLY $27"                                                                       // Price display
    },

    // Product Section (detailed offer description)
    product_section: {
        // Product description (markdown supported)
        copy: `You just unlocked You 2.0: Become an AI emPowered Human. But what if you could get your first real win today?

**This is your implementation shortcut.**

The Results Now AI Action Pack gives you practical tools that bridge the gap between theory and thruput. See results before you start the You 2.0 eCourse.

No overthinking. No overwhelm.

**Just momentum. Right now.**

## What's Inside the AI Action Pack — Total Value $175+

Get plug-and-play tools that save time, reduce friction, and help you act fast:

### 🧠 Automate Your Brain Template Pack — $47 Value
Paste and play ready-made workflows to streamline your day, cut mental drag, but build mental muscle.

### ✍️ JIRA EPIC Story Writer — $57 Value
Your team does great work. This tool helps them communicate it. Designed to turn scattered notes and half-finished tickets into crisp stories that showcase real business value.

### 🤖 AI Decision Coach Agent — $37 Value
Get clarity on your next move. This agent walks you through structured questions to speed up tough calls.

### ⏱️ Time Audit + Task Organizer (Lite) — $37 Value
Spot your biggest time leaks. Organize chaos into calm with this Notion-powered task triage tool. Built for serious productivity. Once it starts working, it keeps working. It will reshape how you operate.

*It's one of my only tools that I've stopped using... and it still works!*

### 🎁 THIS WEEK ONLY: Project Planning Agent (Ash)
Go from "someday project" to next action in 3 minutes or less. Thinks like a Chief of Staff.

## Get the AI Action Pack for $27

✅ $225+ Value
⏳ Today only — just $27

Because you just joined You 2.0, you get:
- 4 time-saving AI tools
- 1 bonus project manager
- Zero fluff, Just momentum

### 💡 Why so cheap?
You're here to move fast. This pack helps you do exactly that.
`
    },

    // Offer Section (appears after product copy, before buttons - centered)
    offer_section: {
        headline: "Get the AI Action Pack for $27",                         // Main offer headline (centered, green)
        sub_headline: "✅ $225+ Value  ⏳ Today only — just $27"            // Offer subheadline (centered)
    },

    // CTA Section (bottom call-to-action)
    cta_section: {
        headline: "Get my Results Now AI Action Pack today!",
    },

    // Button Text (optional - leave empty to use defaults)
    buttons: {
        primary_text: "",           // Default: "Yes Please"
        secondary_text: ""          // Default: "No thanks"
    },

    // Visual Styling
    colors: {
        accent_color: "rgb(186, 215, 57)",
        background_dark: "rgba(19, 47, 69)",
        price_color: "red",
        value_color: "green"
    },

    // Timer Configuration
    show_timer: true,                           // Set to false to hide timer
    timer_minutes: 10                           // Countdown duration in minutes
}

export default offerData
