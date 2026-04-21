import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import { Star, Check, ChevronDown, ChevronUp, Crown, Layers, MapPin } from "lucide-react";
import Container from "../components/layout/Container";
import TrustBar from "../components/TrustBar";
import { copy } from "../content/strings";

// Tier-specific brand colors (metallic palette) — matches ParkProUI subscriptionConfig.js
const TIER_COLORS = {
  solo:       { hex: '#CD7F32', text: '#A0622A' },
  agentplus:  { hex: '#8B5A2B', text: '#6E4722' },
  agency:     { hex: '#A8A9AD', text: '#6E6F73' },
  agencyplus: { hex: '#6B6E72', text: '#4E5154' },
  enterprise: { hex: '#D4AF37', text: '#A68B2B' },
};

// Tier family labels — Bronze / Silver / Gold groupings (matches in-app Subscription page)
const TIER_FAMILY = {
  solo:       'Bronze',
  agentplus:  'Bronze',
  agency:     'Silver',
  agencyplus: 'Silver',
  enterprise: 'Gold',
};

// "Includes previous tier" lookup
const INCLUDES_PREVIOUS = {
  agentplus:  'Solo Agent',
  agency:     'Agent+',
  agencyplus: 'Agency',
  enterprise: 'Agency+',
};

// Pricing Page — five-card grid mirroring the in-app Manage Subscription layout.
//
// PRICING MODEL:
// - All prices are per agent per month (each agent has their own subscription)
// - Annual = monthlyPrice * 10 (equivalent to "2 months free")
// - Solo Agent: $197/agent/mo, 5 itineraries/agent/month
// - Agent+: $247/agent/mo, 10 itineraries/agent/month
// - Agency: $297/agent/mo, 15 itineraries/agent/month
// - Agency+: $347/agent/mo, 20 itineraries/agent/month
// - Enterprise: Custom pricing, pooled itineraries (negotiated)
// - Enterprise routes to /contact; all paid tiers route to /request-access

const PricingWrapper = styled.div`
  padding-top: 88px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }

  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

// Dark hero section
const HeroSection = styled.div`
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  padding: 96px ${({ theme }) => theme.spacing["3xl"]};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    padding: 48px ${({ theme }) => theme.spacing.md};
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes["5xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: #d1d5db;
  margin-bottom: 0;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

// Body section wrapper with subtle gradient background
const BodySection = styled.section`
  background: linear-gradient(180deg, #f9fafb 0%, #ffffff 50%, #f9fafb 100%);
  padding: 80px ${({ theme }) => theme.spacing["3xl"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 56px ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    padding: 40px ${({ theme }) => theme.spacing.md};
  }
`;

// ── Billing toggle (Monthly / Yearly) ────────────────────────────────────────
const BillingToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const BillingToggle = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 4px;
  background: #ffffff;
  border-radius: 999px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
`;

const BillingOption = styled.button.withConfig({
  shouldForwardProp: (prop) => !["$active"].includes(prop),
})`
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 600;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  transition: all 0.18s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: ${({ $active }) => ($active ? '#0B0B0C' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#6b7280')};
  box-shadow: ${({ $active }) => ($active ? '0 1px 2px rgba(0, 0, 0, 0.06)' : 'none')};

  &:hover {
    color: ${({ $active }) => ($active ? '#ffffff' : '#374151')};
  }
`;

const BillingSavingsPill = styled.span`
  display: inline-block;
  padding: 2px 6px;
  font-size: 9px;
  font-weight: 700;
  color: #047857;
  background: #d1fae5;
  border-radius: 999px;
  letter-spacing: 0.04em;
`;

// ── Five-card plan grid ──────────────────────────────────────────────────────
const PlanGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 40px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const PlanCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) =>
    ![
      "$tierColor",
      "$isHighlighted",
      "initial",
      "animate",
      "transition",
      "whileInView",
      "viewport",
    ].includes(prop),
})`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 16px;
  border-top: 4px solid ${({ $tierColor }) => $tierColor || '#9ca3af'};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  ${({ $isHighlighted, $tierColor }) =>
    $isHighlighted &&
    `
    box-shadow: 0 8px 32px ${$tierColor}26;
    transform: translateY(-4px);
  `}
`;

const PlanBadge = styled.div`
  position: absolute;
  top: -14px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

const BadgePill = styled.span.withConfig({
  shouldForwardProp: (prop) => !["$tierColor"].includes(prop),
})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #ffffff;
  background: ${({ $tierColor }) => $tierColor || '#9ca3af'};
  border-radius: 999px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  white-space: nowrap;
`;

const PlanCardBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 24px 20px;
`;

const TierFamilyLabel = styled.div.withConfig({
  shouldForwardProp: (prop) => !["$tierColor"].includes(prop),
})`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ $tierColor }) => $tierColor || '#9ca3af'};
  margin-bottom: 4px;
`;

const PlanCardName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #0b0b0c;
  margin: 0 0 8px;
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const PlanCardDescription = styled.p`
  font-size: 12px;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 20px;
  min-height: 36px;
`;

const PlanPriceBlock = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const PlanPriceAmount = styled.span`
  font-size: 32px;
  font-weight: 800;
  color: #0b0b0c;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  font-variant-numeric: tabular-nums;
  line-height: 1;
`;

const PlanPricePeriod = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #9ca3af;
`;

const PlanPriceCustom = styled.span.withConfig({
  shouldForwardProp: (prop) => !["$tierColor"].includes(prop),
})`
  font-size: 22px;
  font-weight: 800;
  color: ${({ $tierColor }) => $tierColor || '#0b0b0c'};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1;
`;

const PlanDiscountPill = styled.span`
  margin-left: 4px;
  padding: 2px 6px;
  font-size: 10px;
  font-weight: 600;
  color: #047857;
  background: #ecfdf5;
  border-radius: 999px;
`;

const PlanDivider = styled.div`
  height: 1px;
  background: #f3f4f6;
  margin-bottom: 16px;
`;

const PlanIncludesPrev = styled.p.withConfig({
  shouldForwardProp: (prop) => !["$tierText"].includes(prop),
})`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-style: italic;
  color: ${({ $tierText }) => $tierText || '#6b7280'};
  margin: 0 0 12px;
  line-height: 1.4;
`;

const PlanFeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const PlanFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 12px;
  line-height: 1.5;
  color: #4b5563;
`;

const PlanFeatureCheck = styled.span.withConfig({
  shouldForwardProp: (prop) => !["$tierColor"].includes(prop),
})`
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $tierColor }) => `${$tierColor}1F`};
  margin-top: 2px;
`;

const PlanCTAButton = styled(Link).withConfig({
  shouldForwardProp: (prop) => !["$tierColor"].includes(prop),
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  font-size: 13px;
  font-weight: 700;
  color: #ffffff;
  background: ${({ $tierColor }) => $tierColor || '#0b0b0c'};
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  margin-top: auto;
  transition: all 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px ${({ $tierColor }) => `${$tierColor}40`};
    filter: brightness(1.05);
  }
`;

// ── Destination Add-On banner ────────────────────────────────────────────────
const AddOnBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 760px;
  margin: 0 auto;
  padding: 18px 28px;
  background: #ffffff;
  border: 1px dashed #e5e7eb;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 16px 20px;
    flex-direction: column;
    text-align: center;
  }
`;

const AddOnIcon = styled.div`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(212, 175, 55, 0.12);

  svg {
    color: #D4AF37;
    width: 18px;
    height: 18px;
  }
`;

const AddOnContent = styled.div`
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    text-align: center;
  }
`;

const AddOnTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 2px;
`;

const AddOnDescription = styled.p`
  font-size: 12px;
  line-height: 1.5;
  color: #6b7280;
  margin: 0;
`;

// ── FAQ Section (preserved from original) ────────────────────────────────────
const FAQSection = styled.section`
  padding: 96px ${({ theme }) => theme.spacing["3xl"]};
  background: #f9fafb;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    padding: 48px ${({ theme }) => theme.spacing.md};
  }
`;

const FAQTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1f2937;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
    margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5e7eb;
`;

const FAQQuestion = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isOpen"].includes(prop),
})`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  margin-bottom: ${({ theme, isOpen }) => (isOpen ? theme.spacing.md : 0)};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: #1f2937;
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: #F5C249;
  }
`;

const FAQAnswer = styled(motion.div)`
  color: #6b7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  overflow: hidden;
`;

// ── Dark CTA section (preserved from original) ───────────────────────────────
const CTASection = styled.section`
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  padding: 96px ${({ theme }) => theme.spacing["3xl"]};
  text-align: center;
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    padding: 48px ${({ theme }) => theme.spacing.md};
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
`;

const CTASubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: #d1d5db;
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

// ── Component ────────────────────────────────────────────────────────────────
const Pricing = () => {
  const location = useLocation();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [billingCycle, setBillingCycle] = useState("monthly");

  // Scroll to pricing section if URL hash is set (preserve legacy anchors)
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "pricing-section" || hash === "solo" || hash === "agency" || hash === "enterprise") {
      setTimeout(() => {
        const el = document.getElementById("pricing-section");
        if (el) {
          const offset = 120;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 150);
    }
  }, [location.hash, location.pathname]);

  const pricingPlans = [
    {
      id: "solo",
      name: "Solo Agent",
      description: "Perfect for solo agents getting started or testing the waters.",
      monthlyPrice: 197,
      annualPrice: 1970,
      isPopular: false,
      cta: "Request Solo access",
      features: [
        "5 itineraries per month",
        "Client intake forms and itinerary builder",
        "Trip management dashboard",
        "Email support",
        "Extra itineraries at $50 each",
      ],
    },
    {
      id: "agentplus",
      name: "Agent+",
      description: "For growing agents who need more volume and flexibility.",
      monthlyPrice: 247,
      annualPrice: 2470,
      isPopular: true,
      cta: "Request Agent+ access",
      features: [
        "+5 extra itineraries per month (10 total)",
        "Save itinerary templates",
        "Custom questionnaire link",
        "Email Hub and MagicFlow",
        "Priority email support",
      ],
    },
    {
      id: "agency",
      name: "Agency",
      description: "Ideal for agencies building a steady client base.",
      monthlyPrice: 297,
      annualPrice: 2970,
      isPopular: false,
      cta: "Request Agency access",
      features: [
        "+5 extra itineraries per month (15 total)",
        "Shared agency dashboard",
        "Branding: add your logo to itineraries",
        "Task automation",
        "Tags and trip notes",
      ],
    },
    {
      id: "agencyplus",
      name: "Agency+",
      description: "For high-performing agencies that need power and scale.",
      monthlyPrice: 347,
      annualPrice: 3470,
      isPopular: true,
      cta: "Request Agency+ access",
      features: [
        "+5 extra itineraries per month (20 total)",
        "API access for integrations",
        "White-glove onboarding",
        "Early feature access",
        "Live chat support",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Designed for national brands and high-volume agencies.",
      customPricing: true,
      cta: "Talk to us",
      isPopular: false,
      isRecommended: true,
      features: [
        "Pooled itineraries (negotiated per contract)",
        "Unlimited agent seats",
        "Dedicated success manager",
        "Admin impersonation dashboard",
        "Custom CRM/API integrations",
        "SLA-backed priority support",
      ],
    },
  ];

  const formatPrice = (plan) => {
    if (plan.customPricing) return null;
    const price = billingCycle === "yearly" ? plan.annualPrice : plan.monthlyPrice;
    return billingCycle === "yearly" ? Math.round(price / 12) : Math.round(price);
  };

  const getYearlyDiscount = (plan) => {
    if (!plan.annualPrice) return 0;
    return Math.round(((plan.monthlyPrice - plan.annualPrice / 12) / plan.monthlyPrice) * 100);
  };

  const faqs = [
    {
      question: "How many itineraries can I create each month?",
      answer:
        "It depends on your plan. Solo Agent gets 5 itineraries/month, Agent+ gets 10, Agency gets 15, and Agency+ gets 20. Each allocation is per agent per month. Enterprise plans have pooled itineraries negotiated per contract. Need more? Every plan lets you purchase extra itineraries individually or in discounted bundles.",
    },
    {
      question: "How much time does ParkPro typically save per client?",
      answer:
        "Most travel agents go from 8 hours of manual itinerary work to 15 minutes inside ParkPro. What used to take an entire planning day becomes a 15-minute task.",
    },
    {
      question: "What's included in the Founding Member program?",
      answer:
        "Founding Members get locked-in pricing, priority support, direct feedback loops with our product team, and priority access to new features like CRM-style tools and agency dashboards. You'll help shape ParkPro's roadmap and keep your rate as we grow.",
    },
    {
      question: "Will you support destinations beyond Disney?",
      answer:
        "ParkPro is starting with Walt Disney World, where the planning time drain is highest, but it's being built as a destination-smart platform. Disneyland and Universal are available as add-ons, and cruises and other destinations are on our roadmap.",
    },
    {
      question: "What happens if I exceed my itinerary limit?",
      answer:
        "You can purchase extra itineraries at any time — individually or in discounted bundles (5-pack at 10% off, 10-pack at 15% off, 20-pack at 20% off). You can also upgrade to a higher tier for more monthly allocation. We'll give you a heads-up as you approach your monthly limit.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Not yet. Right now we're onboarding a limited group of Founding Members so we can keep the experience high-touch and gather feedback. A self-serve free trial is on our roadmap — join the waitlist or request access and we'll notify you when it's available.",
    },
    {
      question: "What support do you offer?",
      answer:
        "All plans include email support. Agent+ and above get priority support. Agency+ includes white-glove onboarding and live chat support. Enterprise plans add a dedicated success manager and custom SLAs.",
    },
    {
      question: "Can I change plans or cancel later?",
      answer:
        "Yes. You can upgrade or downgrade at any time. Each agent has their own subscription, so scaling your team is straightforward. You can cancel at any time — your access continues until the end of your current billing period.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PricingWrapper>
      <SEO {...SEOConfigs.pricing} schemaType="SoftwareApplication" />

      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {copy.pages.pricing.h1}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {copy.pages.pricing.sub}
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <BodySection>
        <Container>
          <div id="pricing-section">
            <BillingToggleWrapper>
              <BillingToggle role="tablist" aria-label="Billing cycle">
                <BillingOption
                  type="button"
                  role="tab"
                  aria-selected={billingCycle === "monthly"}
                  $active={billingCycle === "monthly"}
                  onClick={() => setBillingCycle("monthly")}
                >
                  Monthly
                </BillingOption>
                <BillingOption
                  type="button"
                  role="tab"
                  aria-selected={billingCycle === "yearly"}
                  $active={billingCycle === "yearly"}
                  onClick={() => setBillingCycle("yearly")}
                >
                  Yearly
                  <BillingSavingsPill>2 MONTHS FREE</BillingSavingsPill>
                </BillingOption>
              </BillingToggle>
            </BillingToggleWrapper>

            <PlanGrid>
              {pricingPlans.map((plan, index) => {
                const tc = TIER_COLORS[plan.id] || { hex: "#9ca3af", text: "#6b7280" };
                const tierFamily = TIER_FAMILY[plan.id] || "";
                const includesPrev = INCLUDES_PREVIOUS[plan.id] || null;
                const monthlyPrice = formatPrice(plan);
                const yearlyDiscount = getYearlyDiscount(plan);

                return (
                  <PlanCard
                    key={plan.id}
                    $tierColor={tc.hex}
                    $isHighlighted={plan.isPopular}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                      ease: [0.2, 0.8, 0.2, 1],
                    }}
                    viewport={{ once: true, margin: "-80px" }}
                  >
                    {plan.isPopular && (
                      <PlanBadge>
                        <BadgePill $tierColor={tc.hex}>
                          <Star size={11} /> Most Popular
                        </BadgePill>
                      </PlanBadge>
                    )}
                    {plan.isRecommended && !plan.isPopular && (
                      <PlanBadge>
                        <BadgePill $tierColor={tc.hex}>
                          <Crown size={11} /> Recommended
                        </BadgePill>
                      </PlanBadge>
                    )}

                    <PlanCardBody>
                      {tierFamily && (
                        <TierFamilyLabel $tierColor={tc.hex}>{tierFamily}</TierFamilyLabel>
                      )}
                      <PlanCardName>{plan.name}</PlanCardName>
                      <PlanCardDescription>{plan.description}</PlanCardDescription>

                      <PlanPriceBlock>
                        {plan.customPricing ? (
                          <>
                            <PlanPriceCustom $tierColor={tc.hex}>Custom</PlanPriceCustom>
                            <PlanPricePeriod>pricing</PlanPricePeriod>
                          </>
                        ) : (
                          <>
                            <PlanPriceAmount>${monthlyPrice}</PlanPriceAmount>
                            <PlanPricePeriod>/mo</PlanPricePeriod>
                            {billingCycle === "yearly" && yearlyDiscount > 0 && (
                              <PlanDiscountPill>-{yearlyDiscount}%</PlanDiscountPill>
                            )}
                          </>
                        )}
                      </PlanPriceBlock>

                      <PlanDivider />

                      {includesPrev && (
                        <PlanIncludesPrev $tierText={tc.text}>
                          <Layers size={12} style={{ color: tc.hex, flexShrink: 0 }} />
                          Everything in {includesPrev}, plus:
                        </PlanIncludesPrev>
                      )}

                      <PlanFeatureList>
                        {plan.features.slice(0, 7).map((feature, fIdx) => (
                          <PlanFeatureItem key={fIdx}>
                            <PlanFeatureCheck $tierColor={tc.hex}>
                              <Check size={10} style={{ color: tc.hex }} />
                            </PlanFeatureCheck>
                            <span>{feature}</span>
                          </PlanFeatureItem>
                        ))}
                      </PlanFeatureList>

                      <PlanCTAButton
                        to={plan.id === "enterprise" ? "/contact" : "/request-access"}
                        $tierColor={tc.hex}
                      >
                        {plan.cta}
                      </PlanCTAButton>
                    </PlanCardBody>
                  </PlanCard>
                );
              })}
            </PlanGrid>

            <AddOnBanner>
              <AddOnIcon>
                <MapPin />
              </AddOnIcon>
              <AddOnContent>
                <AddOnTitle>Coming Soon: Destination Add-Ons</AddOnTitle>
                <AddOnDescription>
                  Expand your itinerary offerings with additional destination bundles — Disneyland, Universal, Cruises, and more.
                </AddOnDescription>
              </AddOnContent>
            </AddOnBanner>
          </div>
        </Container>
      </BodySection>

      <TrustBar variant="light" showSocialProof={false} />

      <FAQSection>
        <Container>
          <FAQTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </FAQTitle>

          <FAQGrid>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem>
                  <FAQQuestion
                    isOpen={openFAQ === index}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </FAQQuestion>

                  {openFAQ === index && (
                    <FAQAnswer
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </FAQAnswer>
                  )}
                </FAQItem>
              </motion.div>
            ))}
          </FAQGrid>
        </Container>
      </FAQSection>

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to transform your itinerary workflow?
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join Travel Agents who collapse Disney itinerary work from 8 hours to 15 minutes. Request access to ParkPro today.
          </CTASubtitle>
        </Container>
      </CTASection>
    </PricingWrapper>
  );
};

export default Pricing;
