/**
 * ParkPro Marketing Copy - Single Source of Truth
 * 
 * All UI text, headings, CTAs, and microcopy for the marketing site.
 * Benefits:
 * - Consistency across all pages
 * - Easy A/B testing
 * - Simple copy updates (no code changes)
 * - Clear brand voice
 * 
 * Voice & Tone:
 * - Confident, premium, plain-spoken
 * - Outcomes-driven (what you get, not what we do)
 * - No jargon, no competitor name-drops
 * - Clear benefits over features
 */

export const copy = {
  // Core positioning
  tagline: "Disney planning software for travel agents.",
  positioningAlt: "The operating system for travel agencies.",
  
  // Navigation
  nav: {
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    solutions: "Solutions",
    whyParkPro: "Why ParkPro",
    faq: "FAQ",
    contact: "Contact",
    demo: "Demo",
    about: "About",
    login: "Log In",
    getStarted: "Get Started"
  },

  // Hero Section
  hero: {
    h1: "Plan Magical Disney Trips in a Fraction of the Time.",
    sub: "Most travel agents believe long hours are just part of creating great itineraries. The truth? It only feels that way because the process is outdated — not you. ParkPro gives professional travel agents a destination-smart system that turns intake forms into clean, concierge-level daily plans in minutes.",
    ctaPrimary: "Get a demo",
    ctaSecondary: "See pricing",
    proof: "Built for destination-focused travel agents to save hours per client.",
    badge: "Built For Destination-Focused Travel Agents"
  },

  // Main Value Propositions
  sections: {
    itineraries: {
      h2: "Itineraries that sell the trip.",
      sub: "Clean day-by-day plans with current wait times, dining recs, and a client-facing app your travelers actually use.",
      benefits: [
        "5-30 minute creation time vs. 8-12 hours manual",
        "Current wait times and park hours",
        "Dining recommendations and show schedules",
        "Mobile-friendly client portal for in-park use",
        "Client-facing app for in-park use"
      ]
    },
    workspace: {
      h2: "One workspace for your team.",
      sub: "Stop juggling spreadsheets, emails, and sticky notes. Clients, trips, and notes in one place.",
      benefits: [
        "Client database with trip history",
        "Trip notes and documents",
        "Lead capture and management",
        "Commission tracking",
        "Trip update notifications"
      ]
    },
    agencies: {
      h2: "Made for agencies.",
      sub: "Per-agent subscriptions, roles, and usage controls that scale with your team.",
      benefits: [
        "Per-agent subscriptions with role permissions",
        "Usage tracking per agent",
        "Agency branding on itineraries",
        "Centralized billing",
        "Agent management and admin controls"
      ]
    },
    margins: {
      h2: "Own your margins.",
      sub: "Fewer clicks, fewer tools, more bookings. Get your time back.",
      benefits: [
        "Serve more clients in the same time",
        "Eliminate manual research (wait times, park hours)",
        "Instant itinerary updates when plans change",
        "No more copy-paste between tools",
        "Focus on selling, not spreadsheets"
      ]
    },
    timeSavings: {
      h2: "Save 5–10+ hours per client.",
      sub: "What used to take 8–12 hours now takes 15–60 minutes. Free up time to serve more families without burning out.",
      stat1: "5–10+ hrs",
      stat1Label: "Saved Per Client",
      stat2: "Minutes",
      stat2Label: "To Build an Itinerary",
      stat3: "1",
      stat3Label: "Platform for Everything"
    },
    trust: {
      h2: "Built for scale, security, and support.",
      sub: "Secure infrastructure with the support your agency needs.",
      badges: {
        ssl: "SSL Secure",
        sslSub: "256-bit Encryption",
        stripe: "Stripe Verified",
        stripeSub: "Secure Payments",
        guarantee: "Money-Back Guarantee",
        guaranteeSub: "14-Day Guarantee",
        agents: "Built for Agents",
        agentsSub: "Purpose-Built for Travel",
        rating: "Premium Quality",
        ratingSub: "Concierge-Level Output"
      }
    }
  },

  // Call to Actions
  ctas: {
    demo: "See How ParkPro Works",
    bookDemo: "Book a demo",
    start: "Book a Demo",
    startNow: "Start now",
    features: "Explore features",
    pricing: "See pricing",
    sample: "View sample",
    learnMore: "Learn more",
    contactSales: "Contact sales",
    requestAccess: "Request access",
    signUp: "Sign up",
    tryFree: "Get started",
    seeTimeSavings: "See How Much Time You'll Save",
    becomeFoundingMember: "Become a Founding Member",
    getConciergeItinerary: "Get a Concierge Itinerary"
  },

  // Microcopy (UI elements, states, feedback)
  microcopy: {
    loading: "Loading…",
    saving: "Saving…",
    saved: "Saved.",
    error: "Something went wrong—please try again.",
    success: "Success!",
    emptyItins: "No itineraries yet. Create your first plan to get started.",
    emptyClients: "No clients yet. Add your first client to begin.",
    searching: "Searching…",
    noResults: "No results found.",
    tryAgain: "Try again",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    close: "Close",
    back: "Back",
    next: "Next",
    submit: "Submit",
    or: "or"
  },

  // Page-Specific Copy
  pages: {
    home: {
      title: "ParkPro | Disney Itinerary Software for Travel Agents | Save 5–10+ Hours Per Client",
      description: "ParkPro is Disney planning software for travel agents that turns 8–12 hours of manual work into a 15–30 minute workflow. Build premium Disney itineraries, keep trip details in one place, and serve more clients without burning out.",
      keywords: "Disney planning software, travel agent software, automated Disney itineraries, Disney World planning, itinerary builder, save hours Disney planning"
    },
    
    pricing: {
      h1: "Simple, transparent pricing",
      sub: "Every plan is designed around one promise: help you save 5–10+ hours per Disney client. Start with the plan that fits your current bookings and scale up as your agency grows.",
      faqIntro: "Common questions about pricing",
      bottomCta: "Still comparing tools? Book a 15-minute walkthrough.",
      guarantee: "14-day money-back guarantee on all plans.",
      taxNote: "Prices exclude applicable sales tax or VAT, calculated at checkout.",
      title: "ParkPro Pricing | Disney Planning Software from $97/agent/month",
      description: "Flexible per-agent pricing for Disney planning automation. Plans start at $97/agent/mo for 5 itineraries. Save 5–10+ hours per client. 14-day money-back guarantee."
    },

    features: {
      h1: "Everything you need to run a modern travel agency.",
      sub: "Powerful features designed to save time, impress clients, and grow your business.",
      title: "Features | Disney Planning & CRM for Travel Agents",
      description: "Automated itinerary generation, client management, team collaboration, white-label branding, and more. Built for travel agencies."
    },

    agencies: {
      h1: "Run your agency on one platform.",
      sub: "Multiply your team's capacity. If each agent saves 5–10+ hours per client, your agency can handle more bookings without hiring extra staff. Replace spreadsheets and scattered tools with a single workspace for planners, leads, and reporting.",
      title: "For Agencies | Team Management & Collaboration Tools",
      description: "Multi-agent features, shared workspace, branding, and team management. Each agent saves 5–10+ hours per client. Scale your Disney planning agency."
    },

    solo: {
      h1: "Spend time with clients—not spreadsheets.",
      sub: "Free up 5–10+ hours per client so you can serve more families without burning out. Build polished itineraries in 15–60 minutes instead of spending entire days on manual planning.",
      title: "For Solo Agents | Disney Planning Software",
      description: "Perfect for independent travel agents. Save 5–10+ hours per client and take on more bookings without burning out."
    },

    enterprise: {
      h1: "Enterprise-grade planning and operations.",
      sub: "Custom integrations, dedicated support, and infrastructure built for scale.",
      title: "Enterprise | Custom Solutions for Large Agencies",
      description: "Enterprise features: API access, dedicated support, custom integrations, and unlimited scale."
    },

    solutions: {
      h1: "Solutions for Solo Agents, Growing Agencies, and Enterprise Teams",
      sub: "Whether you're a solo Disney travel agent, a growing destination-focused agency, or an enterprise team planning thousands of trips a year, ParkPro gives each stage a clear path: automate Disney itineraries now, and grow into a full Agency OS over time.",
      title: "Solutions | Solo Agents, Agencies, and Enterprise",
      description: "Tailored solutions for solo travel agents, small agencies, and enterprise organizations."
    },

    faq: {
      h1: "Frequently asked questions",
      sub: "Get clear, honest answers about ParkPro. Learn about pricing, features, how it works, and whether it's the right fit.",
      bottomCta: "Still have questions? Book a demo.",
      title: "FAQ | Common Questions About ParkPro",
      description: "Get answers to common questions about ParkPro Disney planning software. Pricing, features, support, and more."
    },

    contact: {
      h1: "Get in touch",
      sub: "Have questions? Want to see a demo? We're here to help.",
      formSubmit: "Send message",
      formSuccess: "Message sent! We'll respond within 24 hours.",
      title: "Contact Us | Get in Touch with ParkPro",
      description: "Contact our team for demos, support, or sales questions. We typically respond within 24 hours."
    },

    comparison: {
      h1: "Manual planning vs. ParkPro: The real comparison.",
      sub: "See exactly how much time, money, and sanity you'll save by automating your Disney planning.",
      bottomLine: "Agents who switch to ParkPro consistently report saving hours of planning time, reducing client back-and-forth, and delivering cleaner, more professional itineraries — without changing how they serve their clients.",
      calculatorTitle: "Calculate your time & money savings",
      calculatorSub: "Enter your numbers to see your personalized ROI",
      painPointsH2: "The real pain points of manual planning",
      painPointsSub: "And how ParkPro solves each one",
      bottomCta: "Ready to stop wasting 10+ hours per client?",
      title: "ParkPro vs Manual Disney Planning | Save 10+ Hours Per Client",
      description: "Manual Disney planning takes 8-12 hours. ParkPro does it in 15 minutes. See the comparison and calculate your savings."
    },

    demo: {
      h1: "Watch the complete workflow",
      sub: "See how travel agents create professional Disney itineraries from start to finish.",
      badge: "Live Demo",
      title: "Demo | See ParkPro in Action",
      description: "Watch how travel agents create Disney itineraries in under 5 minutes. See automation, customization, and client experience."
    },

    about: {
      h1: "Built by a travel agent, for travel agents.",
      sub: "ParkPro was born from real frustration with manual Disney planning. We know the pain points because we've lived them.",
      title: "About ParkPro | Our Story & Mission",
      description: "Learn about ParkPro's mission to empower travel agents with better tools. Built by agents, for agents."
    }
  },

  // Testimonials
  testimonials: {
    sectionTitle: "Be Among Our Founding Partners",
    sectionSub: "We're launching with a select group of travel agents and agencies who want to shape the future of travel planning.",
    badge: "Now Accepting Partners"
  },

  // Trust & Social Proof
  trust: {
    socialProof: "Built specifically for destination-focused travel agents and agencies.",
    concierge: "ParkPro itineraries aren't basic timeline lists—they're concierge-level experiences. Each plan is structured, clear, and aligned with how Disney trips actually unfold, so your clients feel taken care of from the moment they arrive until they head home."
  },

  // Forms
  forms: {
    requiredField: "Required field",
    validEmail: "Please enter a valid email",
    passwordMismatch: "Passwords don't match",
    termsRequired: "You must agree to the terms"
  },

  // Footer
  footer: {
    tagline: "Automated Disney planning platform for travel agents. Transform your business with automated itineraries.",
    productTitle: "Product",
    resourcesTitle: "Resources",
    contactTitle: "Contact",
    legalTitle: "Legal",
    copyright: "© 2026 ParkPro. All rights reserved."
  }
};

export default copy;

