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
    h1: "Create premium Disney itineraries in under 60 minutes.",
    sub: "ParkPro helps travel agents turn 8–12 hours of manual Disney planning into a 15–30 minute workflow. Capture client details once, generate a clean day-by-day plan, and export a premium itinerary your clients actually use.",
    ctaPrimary: "Get a demo",
    ctaSecondary: "See pricing",
    proof: "Built with Disney-focused travel agents to save 5–10+ hours per client.",
    badge: "Founding Member Access"
  },

  // Main Value Propositions
  sections: {
    itineraries: {
      h2: "Itineraries that sell the trip.",
      sub: "Clean day-by-day plans with live wait times, dining recs, and export-ready formats your clients actually use.",
      benefits: [
        "5-30 minute creation time vs. 8-12 hours manual",
        "Real-time crowd predictions and wait times",
        "Dining reservations and show schedules",
        "Mobile-friendly for clients to use in-park",
        "Professional PDF export"
      ]
    },
    workspace: {
      h2: "One workspace for your team.",
      sub: "Stop juggling spreadsheets, emails, and sticky notes. Clients, trips, and notes in one place.",
      benefits: [
        "Client database with trip history",
        "Shared notes and tags",
        "Task assignments and follow-ups",
        "Team calendar and capacity planning",
        "Activity log (who did what, when)"
      ]
    },
    agencies: {
      h2: "Made for agencies.",
      sub: "Seats, roles, and usage controls that scale with your team.",
      benefits: [
        "Multiple user seats with role permissions",
        "Usage tracking per agent",
        "Shared agency branding on itineraries",
        "Team performance metrics",
        "Centralized billing and admin"
      ]
    },
    margins: {
      h2: "Own your margins.",
      sub: "Fewer clicks, fewer tools, more bookings. Get your time back.",
      benefits: [
        "Serve 3x more clients in the same time",
        "Eliminate manual research (crowd data, wait times)",
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
      stat2: "3x",
      stat2Label: "More Bookings",
      stat3: "95%",
      stat3Label: "Client Satisfaction"
    },
    trust: {
      h2: "Built for scale, security, and support.",
      sub: "Enterprise-grade infrastructure with the support your agency needs.",
      badges: {
        ssl: "SSL Secure",
        sslSub: "256-bit Encryption",
        stripe: "Stripe Verified",
        stripeSub: "Secure Payments",
        gdpr: "GDPR Compliant",
        gdprSub: "Data Protected",
        guarantee: "Money-Back Guarantee",
        guaranteeSub: "14-Day Guarantee",
        agents: "500+ Agents",
        agentsSub: "Trusted Worldwide",
        rating: "5-Star Rated",
        ratingSub: "95% Satisfaction"
      }
    }
  },

  // Call to Actions
  ctas: {
    demo: "Get a demo",
    bookDemo: "Book a demo",
    start: "Get started",
    startNow: "Start now",
    features: "Explore features",
    pricing: "See pricing",
    sample: "Download sample",
    learnMore: "Learn more",
    contactSales: "Contact sales",
    requestAccess: "Request access",
    signUp: "Sign up",
    tryFree: "Try free",
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
      title: "ParkPro Pricing | Disney Planning Software from $147/month",
      description: "Flexible pricing for Disney planning automation. Plans start at $147/mo for 5 itineraries. Save 5–10+ hours per client. 14-day money-back guarantee."
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
      description: "Perfect for independent travel agents. Save 5–10+ hours per client and take on 3x more bookings without burning out."
    },

    enterprise: {
      h1: "Enterprise-grade planning and operations.",
      sub: "Custom integrations, dedicated support, and infrastructure built for scale.",
      title: "Enterprise | Custom Solutions for Large Agencies",
      description: "Enterprise features: API access, dedicated support, custom integrations, and unlimited scale."
    },

    solutions: {
      h1: "Solutions for every type of agency.",
      sub: "From solo agents to national brands—we have a plan that fits.",
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
      bottomLine: "The bottom line: Manual planning takes 8-12 hours per itinerary. ParkPro takes 15-30 minutes. That's a 95% time reduction.",
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
    sectionTitle: "What our agents are saying",
    sectionSub: "Join hundreds of travel agents who have transformed their Disney planning business with ParkPro",
    badge: "Loved by Travel Agents"
  },

  // Trust & Social Proof
  trust: {
    socialProof: "Trusted by 500+ travel agents who've saved over 50,000 hours in Disney planning",
    concierge: "Concierge Itineraries: For busy agents, we can personally build 1–2 premium Disney itineraries with you using ParkPro so you see exactly how much time it saves."
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
    copyright: "© 2025 ParkPro. All rights reserved."
  }
};

export default copy;

