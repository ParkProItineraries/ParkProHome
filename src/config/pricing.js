// Shared pricing configuration for ParkPro
// This ensures consistency across all components
// 
// IMPORTANT: All prices shown are BEFORE applicable sales tax or VAT.
// Taxes are calculated automatically at checkout based on customer's billing address.
// This follows industry standard practice (Netflix, Shopify, Notion, etc.)

export const PRICING_PLANS = {
  starter: {
    id: "itinerary_starter",
    name: "Itinerary Starter",
    price: 147,
    priceDisplay: "$147/mo",
    stripeProductId: "prod_starter",
    description: "Perfect for solo agents just getting started or testing the waters.",
    itineraries: 2,
    users: 1,
    addonPrice: 50,
    features: [
      "2 itineraries/month",
      "1 user seat",
      "Full access to client intake forms and itinerary builder",
      "Dashboard to manage trips",
      "Email support",
      "Add-ons: Extra itineraries $50 each",
    ],
    featureFlags: {
      branding: false,
      api: false,
      impersonation: false,
      extraUsers: false,
    },
  },
  basic_crm: {
    id: "basic_crm",
    name: "Basic CRM",
    price: 167,
    priceDisplay: "$167/mo",
    stripeProductId: "prod_basic_crm",
    description: "Built for growing solo agents who need more flexibility.",
    itineraries: 4,
    users: 1,
    addonPrice: 45,
    features: [
      "4 itineraries/month",
      "1 user seat",
      "CRM features for client management",
      "Save itinerary templates",
      "Priority email support",
      "Add-ons: Extra itineraries $45 each",
    ],
    featureFlags: {
      branding: false,
      api: false,
      impersonation: false,
      extraUsers: false,
    },
  },
  pro: {
    id: "pro",
    name: "Pro",
    price: 197,
    priceDisplay: "$197/mo",
    stripeProductId: "prod_pro",
    description: "Ideal for active solo agents or small teams.",
    itineraries: 8,
    users: 2,
    addonPrice: 45,
    features: [
      "8 itineraries/month",
      "2 user seats",
      "Advanced CRM features",
      "Shared agency dashboard",
      "Branding: Add your logo to itineraries",
      "Priority email support",
      "Add-ons: Extra itineraries $45 each",
    ],
    featureFlags: {
      branding: true,
      api: false,
      impersonation: false,
      extraUsers: false,
    },
  },
  agency_crm: {
    id: "agency_crm",
    name: "Agency CRM",
    price: 247,
    priceDisplay: "$247/mo",
    stripeProductId: "prod_agency_crm",
    description: "For small agencies building a steady client base.",
    itineraries: 14,
    users: 5,
    addonPrice: 40,
    features: [
      "14 itineraries/month",
      "5 user seats",
      "Full CRM with automation",
      "Shared agency dashboard",
      "Branding: Add your logo to itineraries",
      "Tags and trip notes for organizing trips",
      "Priority email support",
      "Add-ons: Extra itineraries $40 each, extra users $15/user/mo",
    ],
    featureFlags: {
      branding: true,
      api: false,
      impersonation: false,
      extraUsers: true,
    },
  },
  agency_plus: {
    id: "agency_plus",
    name: "Agency+",
    price: 297,
    priceDisplay: "$297/mo",
    stripeProductId: "prod_agency_plus",
    description: "For high-performing teams with automation needs.",
    itineraries: 25,
    users: 10,
    addonPrice: 35,
    features: [
      "25 itineraries/month",
      "10 user seats",
      "Full CRM with advanced automation",
      "API Access for integrations",
      "Early feature access",
      "White-glove onboarding",
      "Live chat support",
      "Add-ons: Extra itineraries $35 each, extra users $10/user/mo",
    ],
    featureFlags: {
      branding: true,
      api: true,
      impersonation: false,
      extraUsers: true,
    },
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    priceDisplay: "Custom Quote",
    stripeProductId: null,
    description: "Designed for national brands and high-volume agencies.",
    itineraries: -1, // Unlimited
    users: -1, // Unlimited
    addonPrice: 0,
    features: [
      "Unlimited users",
      "Unlimited itineraries",
      "Dedicated success manager",
      "Admin dashboard with impersonation",
      "Custom CRM/API integrations",
      "SLA-backed priority support",
    ],
    featureFlags: {
      branding: true,
      api: true,
      impersonation: true,
      extraUsers: true,
    },
  },
};

// Helper functions
export const getPlanById = (planId) => {
  return PRICING_PLANS[planId] || null;
};

export const hasFeature = (planId, feature) => {
  const plan = getPlanById(planId);
  if (!plan || !plan.featureFlags) return false;
  return !!plan.featureFlags[feature];
};

export const getAllPlans = () => {
  return Object.values(PRICING_PLANS);
};

export const getPlansForDisplay = () => {
  return getAllPlans().map(plan => ({
    id: plan.id,
    name: plan.name,
    price: plan.price,
    priceDisplay: plan.priceDisplay,
    description: plan.description,
    itineraries: plan.itineraries,
    users: plan.users,
    addonPrice: plan.addonPrice,
    features: plan.features
  }));
};

// Add-ons pricing
export const ADD_ONS = {
  disneyland: { name: "Disneyland", price: 15, priceDisplay: "+$15/mo" },
  disneyCruises: { name: "Disney Cruises", price: 20, priceDisplay: "+$20/mo" },
  universal: { name: "Universal", price: 20, priceDisplay: "+$20/mo" },
  allDestinations: { name: "All-Destinations Bundle", price: 49, priceDisplay: "+$49/mo" },
  extraUsers: {
    solo: { price: 0, priceDisplay: "N/A" }, // Solo doesn't support extra users
    agentplus: { price: 0, priceDisplay: "N/A" }, // Agent+ doesn't support extra users
    agency: { price: 15, priceDisplay: "+$15/user/mo" },
    agencyplus: { price: 10, priceDisplay: "+$10/user/mo" },
    enterprise: { price: 0, priceDisplay: "Unlimited" }
  }
};

export default PRICING_PLANS; 