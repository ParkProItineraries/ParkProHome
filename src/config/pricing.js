// Shared pricing configuration for ParkPro Marketing Site
// Must stay aligned with ParkProBackend/config/pricing.js (the single source of truth).
// This is display-only — no Stripe IDs, no enforcement logic.
//
// IMPORTANT:
// - All prices shown are BEFORE applicable sales tax or VAT
// - Taxes are calculated automatically at checkout based on customer's billing address
// - All prices are per agent per month (each agent has their own subscription)
// - Annual plan prices ≈ 10× monthly (equivalent to "2 months free")
// - Enterprise is the exception: pooled itineraries, custom pricing
//
// TIER LADDER: Solo Agent → Agent+ → Agency → Agency+ → Enterprise

export const PRICING_PLANS = {
  solo: {
    id: "solo",
    name: "Solo Agent",
    price: 97,
    priceYearly: 970,
    priceDisplay: "$97/agent/mo",
    priceDisplayYearly: "$970/agent/yr",
    stripeProductId: "prod_starter",
    description: "Perfect for solo agents just getting started or testing the waters.",
    itineraries: 5,
    costPerItinerary: "~$19",
    features: [
      "5 itineraries/agent/month",
      "Client intake forms and itinerary builder",
      "Trip management dashboard",
      "Email support",
      "Extra itineraries available at $50 each",
    ],
    featureFlags: {
      branding: false,
      api: false,
      impersonation: false,
      customQuestionnaireLink: false,
      templates: false,
      sharedDashboard: false,
      whiteGloveOnboarding: false,
      liveChat: false,
      earlyAccess: false,
    },
    tierLevel: 1,
    isBestValue: false,
  },

  agentplus: {
    id: "agentplus",
    name: "Agent+",
    price: 147,
    priceYearly: 1470,
    priceDisplay: "$147/agent/mo",
    priceDisplayYearly: "$1,470/agent/yr",
    stripeProductId: "prod_pro",
    description: "Built for growing agents who need more volume and flexibility.",
    itineraries: 10,
    costPerItinerary: "~$15",
    features: [
      "10 itineraries/agent/month",
      "Custom questionnaire link",
      "Priority email support",
      "Extra itineraries available at $40 each",
    ],
    featureFlags: {
      branding: false,
      api: false,
      impersonation: false,
      customQuestionnaireLink: true,
      templates: false,
      sharedDashboard: false,
      whiteGloveOnboarding: false,
      liveChat: false,
      earlyAccess: false,
    },
    tierLevel: 2,
    isBestValue: false,
  },

  agency: {
    id: "agency",
    name: "Agency",
    price: 197,
    priceYearly: 1970,
    priceDisplay: "$197/agent/mo",
    priceDisplayYearly: "$1,970/agent/yr",
    stripeProductId: "prod_agency_crm",
    description: "Ideal for agencies building a steady client base.",
    itineraries: 15,
    costPerItinerary: "~$13",
    features: [
      "15 itineraries/agent/month",
      "Shared agency dashboard",
      "Branding: Add your logo to itineraries",
      "Tags and trip notes",
      "Extra itineraries at $30 each",
    ],
    featureFlags: {
      branding: true,
      api: false,
      impersonation: false,
      customQuestionnaireLink: true,
      templates: false,
      sharedDashboard: true,
      whiteGloveOnboarding: false,
      liveChat: false,
      earlyAccess: false,
    },
    tierLevel: 3,
    isBestValue: true,
  },

  agencyplus: {
    id: "agencyplus",
    name: "Agency+",
    price: 247,
    priceYearly: 2470,
    priceDisplay: "$247/agent/mo",
    priceDisplayYearly: "$2,470/agent/yr",
    stripeProductId: "prod_agency_plus",
    description: "For high-performing agencies that need power, scale, and automation.",
    itineraries: 20,
    costPerItinerary: "~$12",
    features: [
      "20 itineraries/agent/month",
      "API access for integrations",
      "White-glove onboarding",
      "Early feature access",
      "Live chat support",
      "Extra itineraries at $22 each",
    ],
    featureFlags: {
      branding: true,
      api: true,
      impersonation: false,
      customQuestionnaireLink: true,
      templates: false,
      sharedDashboard: true,
      whiteGloveOnboarding: true,
      liveChat: true,
      earlyAccess: true,
    },
    tierLevel: 4,
    isBestValue: false,
  },

  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    price: null,
    priceYearly: null,
    priceDisplay: "Custom Quote",
    priceDisplayYearly: "Custom Quote",
    stripeProductId: null,
    description: "Designed for national brands and high-volume agencies.",
    itineraries: -1, // Pooled — negotiated per contract
    costPerItinerary: "Custom",
    features: [
      "Pooled itineraries (negotiated)",
      "Unlimited agent seats",
      "Dedicated success manager",
      "Admin impersonation dashboard",
      "Custom CRM/API integrations",
      "SLA-backed priority support",
    ],
    featureFlags: {
      branding: true,
      api: true,
      impersonation: true,
      customQuestionnaireLink: true,
      templates: false,
      sharedDashboard: true,
      whiteGloveOnboarding: true,
      liveChat: true,
      earlyAccess: true,
    },
    tierLevel: 5,
    isBestValue: false,
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
    features: plan.features,
    isBestValue: plan.isBestValue,
  }));
};

// Feature flags — must match ParkProBackend/config/pricing.js
export const FEATURE_FLAGS = {
  DESTINATION_ADDONS_ENABLED: false, // Set to true to show destination add-on selection at signup
};

// Destination add-ons (display only — matches ParkProBackend config)
export const DESTINATION_ADDONS = {
  disneyland: {
    id: "disneyland",
    name: "Disneyland",
    price: 15,
    priceYearly: 150,
    priceDisplay: "+$15/mo",
    priceDisplayYearly: "+$150/yr",
  },
  universal: {
    id: "universal",
    name: "Universal",
    price: 20,
    priceYearly: 200,
    priceDisplay: "+$20/mo",
    priceDisplayYearly: "+$200/yr",
  },
};

// Itinerary bundle options (display only — matches ParkProBackend config)
// Discounts apply to the plan's per-itinerary addon price
export const ITINERARY_BUNDLES = [
  { quantity: 1,  discountPercent: 0,  label: "1 Extra Itinerary" },
  { quantity: 5,  discountPercent: 10, label: "5-Pack (10% off)" },
  { quantity: 10, discountPercent: 15, label: "10-Pack (15% off)" },
  { quantity: 20, discountPercent: 20, label: "20-Pack (20% off)" },
];

export default PRICING_PLANS;
