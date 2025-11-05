// Shared pricing configuration for ParkPro
// This ensures consistency across all components
// 
// IMPORTANT: 
// - All prices shown are BEFORE applicable sales tax or VAT
// - Taxes are calculated automatically at checkout based on customer's billing address
// - Annual pricing = ~10-11× monthly (equivalent to "2 months free")
// - Add-ons must always cost slightly more per itinerary than upgrading a tier
//
// TIER LADDER: Solo → Solo+ → Agency Lite → Agency → Agency+ → Enterprise

export const PRICING_PLANS = {
  solo: {
    id: "itinerary_starter",
    name: "Solo",
    price: 147,
    priceYearly: 1569,
    priceDisplay: "$147/mo",
    priceDisplayYearly: "$1,569/yr",
    stripeProductId: "prod_starter",
    description: "Perfect for independent agents managing a few clients.",
    itineraries: 5,
    costPerItinerary: "~$29",
    users: 1,
    features: [
      "5 itineraries/month (~$29 each)",
      "1 user seat",
      "Full access to client intake forms and itinerary builder",
      "Dashboard to manage trips",
      "Email support",
      "Save with annual: $1,569/yr (2 months free)",
    ],
    featureFlags: {
      branding: false,
      api: false,
      impersonation: false,
      extraUsers: false,
      crm: false,
    },
  },
  solo_plus: {
    id: "pro",
    name: "Solo+",
    price: 197,
    priceYearly: 2103,
    priceDisplay: "$197/mo",
    priceDisplayYearly: "$2,103/yr",
    stripeProductId: "prod_pro",
    description: "For experienced solo agents or micro-agencies ready to scale.",
    itineraries: 8,
    costPerItinerary: "~$25",
    users: 1,
    features: [
      "8 itineraries/month (~$25 each)",
      "1 user seat",
      "Advanced itinerary templates",
      "Branding: Add your logo to itineraries",
      "Priority email support",
      "Save with annual: $2,103/yr (2 months free)",
    ],
    featureFlags: {
      branding: true,
      api: false,
      impersonation: false,
      extraUsers: false,
      crm: false,
    },
  },
  agency_lite: {
    id: "basic_crm",
    name: "Agency Lite",
    price: 167,
    priceYearly: 1782,
    priceDisplay: "$167/mo",
    priceDisplayYearly: "$1,782/yr",
    stripeProductId: "prod_basic_crm",
    description: "Includes CRM tools for small teams without full Agency pricing.",
    itineraries: 10,
    costPerItinerary: "~$16.70",
    users: 1,
    features: [
      "10 itineraries/month (~$16.70 each)",
      "1 user seat",
      "CRM features for client management",
      "Save itinerary templates",
      "Tags and trip notes",
      "Priority email support",
      "Save with annual: $1,782/yr (2 months free)",
    ],
    featureFlags: {
      branding: false,
      api: false,
      impersonation: false,
      extraUsers: false,
      crm: true,
    },
  },
  agency: {
    id: "agency_crm",
    name: "Agency",
    price: 247,
    priceYearly: 2637,
    priceDisplay: "$247/mo",
    priceDisplayYearly: "$2,637/yr",
    stripeProductId: "prod_agency_crm",
    description: "Built for small agencies managing multiple agents and clients.",
    itineraries: 12,
    costPerItinerary: "~$21",
    users: 3,
    features: [
      "12 itineraries/month (~$21 each)",
      "3 user seats",
      "Full CRM with automation",
      "Shared agency dashboard",
      "Branding: Add your logo to itineraries",
      "Priority email support",
      "Save with annual: $2,637/yr (2 months free)",
    ],
    featureFlags: {
      branding: true,
      api: false,
      impersonation: false,
      extraUsers: true,
      crm: true,
    },
  },
  agency_plus: {
    id: "agency_plus",
    name: "Agency+",
    price: 297,
    priceYearly: 3171,
    priceDisplay: "$297/mo",
    priceDisplayYearly: "$3,171/yr",
    stripeProductId: "prod_agency_plus",
    description: "Advanced automation and scaling for growing travel agencies.",
    itineraries: 16,
    costPerItinerary: "~$18",
    users: 5,
    features: [
      "16 itineraries/month (~$18 each)",
      "5 user seats",
      "Full CRM with advanced automation",
      "API Access for integrations",
      "Early feature access",
      "White-glove onboarding",
      "Live chat support",
      "Save with annual: $3,171/yr (2 months free)",
    ],
    featureFlags: {
      branding: true,
      api: true,
      impersonation: false,
      extraUsers: true,
      crm: true,
    },
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    priceYearly: null,
    priceDisplay: "Custom ($99–$147/seat)",
    priceDisplayYearly: "Custom Pricing",
    stripeProductId: null,
    description: "Full platform access, API integrations, and enterprise-level support.",
    itineraries: -1, // 25-30 per seat
    costPerItinerary: "~$17",
    users: -1, // Unlimited
    features: [
      "25–30 itineraries per seat",
      "Unlimited users",
      "Dedicated success manager",
      "Admin dashboard with impersonation",
      "Custom CRM/API integrations",
      "SLA-backed priority support",
      "Custom contract terms",
    ],
    featureFlags: {
      branding: true,
      api: true,
      impersonation: true,
      extraUsers: true,
      crm: true,
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
    priceYearly: plan.priceYearly,
    priceDisplay: plan.priceDisplay,
    priceDisplayYearly: plan.priceDisplayYearly,
    description: plan.description,
    itineraries: plan.itineraries,
    costPerItinerary: plan.costPerItinerary,
    users: plan.users,
    features: plan.features
  }));
};

// Add-ons pricing
// NOTE: Add-ons must always cost slightly more per itinerary than upgrading a tier
export const ADD_ONS = {
  extraItineraries: {
    small: {
      name: "5 Extra Itineraries",
      quantity: 5,
      priceMonthly: 160,
      priceYearly: 128,
      priceDisplay: "$160/mo",
      priceDisplayYearly: "$128/yr",
      costPerItinerary: "$32/itinerary monthly",
    },
    medium: {
      name: "10 Extra Itineraries",
      quantity: 10,
      priceMonthly: 300,
      priceYearly: 240,
      priceDisplay: "$300/mo",
      priceDisplayYearly: "$240/yr",
      costPerItinerary: "$30/itinerary monthly",
    },
    large: {
      name: "20 Extra Itineraries",
      quantity: 20,
      priceMonthly: 560,
      priceYearly: 448,
      priceDisplay: "$560/mo",
      priceDisplayYearly: "$448/yr",
      costPerItinerary: "$28/itinerary monthly",
    },
  },
};

export default PRICING_PLANS;
