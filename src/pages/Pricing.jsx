import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import {
  Star,
  Check,
  X,
  ChevronDown,
  ChevronUp,
  Award,
} from "lucide-react";
import { Button } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexCenter } from "../styles/mixins";
import TrustBar from "../components/TrustBar";
import { copy } from "../content/strings";

// Pricing Page - Transparent pricing focused on time savings for Disney travel agents
//
// PRICING MODEL:
// - All prices are per seat per month (annual = monthlyPrice * 10, equivalent to "2 months free")
// - Solo/Solo+: 1 seat, itineraries per seat/month
// - Agency Lite: Minimum 3 seats, 10 itineraries per seat/month
// - Agency: Minimum 5 seats, 12 itineraries per seat/month
// - Agency+: Minimum 10 seats, 16 itineraries per seat/month
// - Enterprise: Custom per-seat pricing, 25–30 itineraries per seat/month, no hard seat cap
// - Enterprise is a real, clickable plan (not a decoy) that routes to /contact
const PricingWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }
  
  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
`;

const PricingTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes["5xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }
  
  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }
`;

const PricingSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors["gray-600"]};
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
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

const ToggleWrapper = styled.div`
  ${flexCenter}
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  
  @media (max-width: 475px) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const SecondaryToggleWrapper = styled.div`
  ${flexCenter}
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  margin-left: ${({ theme }) => theme.spacing["2xl"]};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: 475px) {
    gap: ${({ theme }) => theme.spacing.sm};
    flex-direction: column;
  }
`;

const ToggleLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors["gray-600"]};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

// Primary toggle for Solo Agent / Agency (prominent with gold accent)
const PrimaryToggle = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors["gray-100"]};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: ${({ theme }) => theme.spacing.xs};
  position: relative;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors["gray-200"]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const PrimaryToggleOption = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.gold : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.black : theme.colors["gray-600"]};
  font-weight: ${({ active, theme }) =>
    active ? theme.typography.weights.semibold : theme.typography.weights.medium};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ active, theme }) => (active ? theme.shadows.gold : "none")};
  z-index: 1;
  position: relative;
  min-width: 120px;
  min-height: 44px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 475px) {
    min-width: 100px;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
`;

// Secondary toggle for Monthly / Annual (subtle styling, smaller)
const SecondaryToggle = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors["gray-50"]};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: 2px;
  position: relative;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors["gray-200"]};
`;

const SecondaryToggleOption = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.white : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.black : theme.colors["gray-600"]};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ active, theme }) => (active ? theme.shadows.sm : "none")};
  z-index: 1;
  position: relative;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ $isSoloView }) => 
    $isSoloView ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing["1xl"]};
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
  max-width: ${({ $isSoloView }) => $isSoloView ? '1200px' : '100%'};
  margin-left: ${({ $isSoloView }) => $isSoloView ? 'auto' : '0'};
  margin-right: ${({ $isSoloView }) => $isSoloView ? 'auto' : '0'};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;


const PricingCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) =>
    ![
      "initial",
      "animate",
      "transition",
      "exit",
      "whileInView",
      "viewport",
      "isPopular",
      "isAgencyPlus",
      "isEnterprise",
    ].includes(prop),
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 2px solid
    ${({ theme, isPopular, isAgencyPlus, isEnterprise }) =>
      isEnterprise
        ? theme.colors["gray-800"]
        : isPopular || isAgencyPlus
        ? theme.colors.gold
        : theme.colors["gray-300"]};
  box-shadow: ${({ theme, isPopular, isAgencyPlus, isEnterprise }) =>
    isEnterprise
      ? `0 4px 12px rgba(0, 0, 0, 0.15)`
      : isPopular || isAgencyPlus
      ? theme.shadows.gold
      : theme.shadows.md};
  position: relative;
  transition: ${({ theme }) => theme.transitions.normal};
  opacity: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 600px;
  min-width: 0;
  overflow: visible;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme, isPopular, isAgencyPlus, isEnterprise }) =>
      isEnterprise
        ? `0 8px 24px rgba(0, 0, 0, 0.2)`
        : isPopular || isAgencyPlus
        ? theme.shadows["gold-lg"]
        : theme.shadows.xl};
    z-index: 5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: 475px) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-muted"]}
  );
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: ${({ theme }) => theme.shadows.gold};
  z-index: 20;
  white-space: nowrap;
  pointer-events: none;
`;

const EnterpriseBadge = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-muted"]}
  );
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: ${({ theme }) => theme.shadows.gold};
  z-index: 20;
  white-space: nowrap;
  pointer-events: none;
`;

const PlanAudienceTag = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors["gray-600"]};
  background: ${({ theme }) => theme.colors["gray-100"]};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.full};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  display: inline-block;
  width: 100%;
`;

const PlanName = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  text-align: center;
`;

const PlanPrice = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0;
`;

const PriceAmount = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1;
  margin-right: -2px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }
  
  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
`;

const PricePeriod = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors["gray-600"]};
  margin-left: 0;
`;

const AnnualDiscount = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors["gray-600"]};
  text-align: center;
  margin-top: 2px;
`;

const PriceFrom = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors["gray-500"]};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-style: italic;
`;

const AdditionalSeatText = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors["gray-500"]};
  text-align: center;
  margin-top: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-style: italic;
`;

const PlanDescription = styled.p`
  color: ${({ theme }) => theme.colors["gray-600"]};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
`;

const PlanGrowthNote = styled.div`
  background: ${({ theme }) => theme.colors["gray-50"]};
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors["gray-700"]};
  text-align: left;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const TimeSavings = styled.p`
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  padding: 0;
  flex: 1;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme, $isHighlight }) =>
    $isHighlight ? theme.colors.gold : theme.colors["gray-600"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ $isHighlight }) => ($isHighlight ? "600" : "400")};

  svg {
    color: ${({ theme, $isHighlight }) =>
      $isHighlight ? theme.colors.gold : theme.colors.gold};
    flex-shrink: 0;
    margin-top: 2px;
    width: 14px;
    height: 14px;
  }
`;

const CardButton = styled(Button)`
  width: 100%;
  justify-content: center;
  margin-top: auto;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

// FAQ Section
const FAQSection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors["gray-50"]};
`;

const FAQTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors["border-light"]};
`;

const FAQQuestion = styled.button`
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
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const FAQAnswer = styled(motion.div)`
  color: ${({ theme }) => theme.colors["gray-600"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  overflow: hidden;
`;

const Pricing = () => {
  const location = useLocation();
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [viewType, setViewType] = useState("solo"); // "solo" or "agency"

  // Handle hash navigation on mount and when location changes
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "solo" || hash === "agency") {
      setViewType(hash);
      // Scroll to pricing section after a brief delay to ensure toggle is set and DOM is updated
      setTimeout(() => {
        const pricingSection = document.getElementById("pricing-section");
        if (pricingSection) {
          const offset = 120; // Account for fixed navbar (88px) + some padding
          const elementPosition = pricingSection.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 150);
    }
  }, [location.hash, location.pathname]);

  const pricingPlans = [
    {
      id: "solo",
      name: "Solo",
      description: "Perfect for independent agents managing a few clients.",
      monthlyPrice: 147,
      annualPrice: 1470, // monthlyPrice * 10 (2 months free)
      minSeats: 1,
      audience: "For solo agents",
      isPopular: false,
      isDecoy: false,
      cta: "Request Solo access",
      features: [
        "1 seat · 5 itineraries per seat/month",
        "Smart Disney intake form and itinerary builder",
        "Single dashboard for all trips and clients",
        "Exportable, client-ready PDF itineraries",
        "Standard email support",
      ],
      limitations: [
        "No team collaboration (single user only)",
        "No advanced branding (available in Solo+)",
      ],
    },
    {
      id: "solo-plus",
      name: "Solo+",
      description:
        "For experienced solo agents ready to scale their volume and brand.",
      monthlyPrice: 197,
      annualPrice: 1970, // monthlyPrice * 10 (2 months free)
      minSeats: 1,
      audience: "For solo agents",
      isPopular: true,
      isDecoy: false,
      cta: "Request Solo+ access",
      features: [
        "Everything in Solo",
        "1 seat · 8 itineraries per seat/month",
        "Advanced itinerary templates and day-by-day layouts",
        "Branding controls: add your logo and contact details",
        "Priority email support",
      ],
      limitations: [
        "No team collaboration (single user only)",
        "No API access",
      ],
    },
    {
      id: "agency-lite",
      name: "Agency Lite",
      monthlyPrice: 227,
      annualPrice: 2270, // monthlyPrice * 10 (2 months free)
      minSeats: 3,
      additionalSeatPrice: 197, // discounted from 227
      audience: "For agencies & teams",
      isPopular: false,
      isDecoy: false,
      cta: "Request Agency Lite access",
      features: [
        "Everything in Solo+",
        "Minimum 3 seats · 10 itineraries per seat/month",
        "Shared team workspace for trips and clients",
        "Reusable itinerary templates, tags, and trip notes",
        "Early CRM-style client profiles for Disney travelers",
      ],
      limitations: ["No API access", "No dedicated account manager"],
    },
    {
      id: "agency",
      name: "Agency",
      monthlyPrice: 247,
      annualPrice: 2470, // monthlyPrice * 10 (2 months free)
      minSeats: 5,
      additionalSeatPrice: 217, // discounted from 247
      audience: "For agencies & teams",
      isPopular: false,
      isDecoy: false,
      cta: "Request Agency access",
      features: [
        "Everything in Agency Lite",
        "Minimum 5 seats · 12 itineraries per seat/month",
        "Agency-level dashboard across all agents and trips",
        "Simple reporting on volume, itineraries, and active clients",
        "Priority support for agency admins",
      ],
      limitations: ["No API access", "No dedicated account manager"],
    },
    {
      id: "agency-plus",
      name: "Agency+",
      monthlyPrice: 297,
      annualPrice: 2970, // monthlyPrice * 10 (2 months free)
      minSeats: 10,
      additionalSeatPrice: 267, // discounted from 297
      audience: "For agencies & teams",
      isPopular: false,
      isDecoy: false,
      cta: "Request Agency+ access",
      features: [
        "Everything in Agency",
        "Minimum 10 seats · 16 itineraries per seat/month",
        "Guided onboarding and rollout support for your team",
        "Access to advanced automation and CRM beta features",
        "Enhanced priority support for high-volume agencies",
      ],
      limitations: [
        "Full API access available with Enterprise",
        "No dedicated account manager (available in Enterprise)",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      customPricing: "Custom",
      audience: "For large agencies",
      isPopular: false,
      isDecoy: false, // Enterprise is a real, clickable plan
      cta: "Talk to us",
      features: [
        "Everything in Agency+",
        "Custom seat count · 25–30 itineraries per seat/month",
        "Scales to hundreds of users with role-based access",
        "Full API access for forms, CRM, and internal tools",
        "Dedicated account manager and custom SLAs",
      ],
      limitations: [],
    },
  ];

  // Filter plans based on view type
  const filteredPlans = pricingPlans.filter((plan) => {
    if (viewType === "solo") {
      return plan.id === "solo" || plan.id === "solo-plus" || plan.id === "agency-lite";
    } else {
      return (
        plan.id === "agency-lite" ||
        plan.id === "agency" ||
        plan.id === "agency-plus" ||
        plan.id === "enterprise"
      );
    }
  });

  const faqs = [
    {
      question: "How many itineraries can I create per month?",
      answer:
        "It depends on your plan and seat count: Solo (5 per seat/month), Solo+ (8 per seat/month), Agency Lite (10 per seat/month, minimum 3 seats), Agency (12 per seat/month, minimum 5 seats), Agency+ (16 per seat/month, minimum 10 seats), and Enterprise (25–30 per seat/month). Each itinerary saves you 5–10+ hours compared to manual Disney planning.",
    },
    {
      question: "How much time does ParkPro typically save per client?",
      answer:
        "Most travel agents save 5–10+ hours per Disney client. What used to take 8–12 hours of manual planning now takes 15–60 minutes with ParkPro. This means you can serve more clients without burning out.",
    },
    {
      question: "What's included in the founding member program?",
      answer:
        "Founding members get exclusive pricing, priority support, direct access to our development team, and early access to new features. Plus, you'll save 5–10+ hours per client from day one.",
    },
    {
      question: "Are taxes included in the price?",
      answer:
        "Prices shown are before applicable sales tax or VAT. Like Netflix, Spotify, and other online services, we're required to collect tax based on your billing address. The exact tax amount will be calculated and displayed at checkout before you confirm your subscription. Tax rates vary by location (0% to ~10% in the US, 19-27% VAT in the EU).",
    },
    {
      question: "Can I change plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
    },
    {
      question: "What happens if I exceed my itinerary limit?",
      answer:
        "During the ParkPro Founding Member phase, we'll work directly with you on overages. You can also upgrade to a higher plan. We'll notify you when you're approaching your limit. Remember, each itinerary saves you 5–10+ hours compared to manual planning.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "We're planning to roll out a free trial — join the waitlist or request access to be notified when it's available.",
    },
    {
      question: "What support do you offer?",
      answer:
        "All plans include email support. Solo+ and above get priority email support. Agency+ includes onboarding support. Enterprise plans include priority support and custom contract terms.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. You'll retain access until the end of your billing period.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PricingWrapper>
      <SEO {...SEOConfigs.pricing} schemaType="SoftwareApplication" />

      <Section>
        <Container>
          <PricingHeader>
            <PricingTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {copy.pages.pricing.h1}
            </PricingTitle>
            <PricingSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.pricing.sub}
            </PricingSubtitle>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: "0.875rem",
                color: "#6b7280",
                textAlign: "center",
                marginTop: "1rem",
                fontStyle: "italic",
              }}
            >
              * Prices shown exclude applicable sales tax or VAT, which will be
              calculated based on your billing address at checkout.
            </motion.p>
          </PricingHeader>

          <div id="pricing-section">
            <ToggleWrapper>
              <ToggleLabel>Solo Agent</ToggleLabel>
              <PrimaryToggle onClick={() => setViewType(viewType === "solo" ? "agency" : "solo")}>
                <PrimaryToggleOption active={viewType === "solo"}>Solo Agent</PrimaryToggleOption>
                <PrimaryToggleOption active={viewType === "agency"}>Agency</PrimaryToggleOption>
              </PrimaryToggle>
              <ToggleLabel>Agency</ToggleLabel>
            </ToggleWrapper>

          <SecondaryToggleWrapper>
            <ToggleLabel>Monthly</ToggleLabel>
            <SecondaryToggle onClick={() => setIsAnnual(!isAnnual)}>
              <SecondaryToggleOption active={!isAnnual}>Monthly</SecondaryToggleOption>
              <SecondaryToggleOption active={isAnnual}>Annual</SecondaryToggleOption>
            </SecondaryToggle>
            <ToggleLabel>Annual (2 months free)</ToggleLabel>
          </SecondaryToggleWrapper>

          <PricingGrid $isSoloView={viewType === "solo"}>
            {filteredPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                isPopular={plan.isPopular}
                isAgencyPlus={plan.id === "agency-plus"}
                isEnterprise={plan.id === "enterprise"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.isPopular && (
                  <PopularBadge>
                    <Star size={12} style={{ marginRight: "4px" }} />
                    Most Popular for Solo Agents
                  </PopularBadge>
                )}
                {plan.id === "agency-plus" && (
                  <PopularBadge>
                    <Star size={12} style={{ marginRight: "4px" }} />
                    Most Popular for Agencies
                  </PopularBadge>
                )}
                {plan.id === "enterprise" && (
                  <EnterpriseBadge>
                    <Award size={12} style={{ marginRight: "4px" }} />
                    Custom
                  </EnterpriseBadge>
                )}

                {plan.audience && (
                  <PlanAudienceTag>{plan.audience}</PlanAudienceTag>
                )}
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  <PriceAmount style={{ fontSize: "1.5rem", color: theme.colors.black }}>
                    Call for Pricing
                  </PriceAmount>
                </PlanPrice>
                {plan.description && (
                  <PlanDescription>{plan.description}</PlanDescription>
                )}
                {viewType === "solo" && plan.id === "agency-lite" && (
                  <PlanGrowthNote>
                    Growing your business? Choose Agency Lite to add more seats and team collaboration.
                  </PlanGrowthNote>
                )}
                <FeatureList>
                  {plan.features.map((feature, featureIndex) => {
                    const isEverythingIn =
                      feature.startsWith("Everything in");
                    return (
                      <FeatureItem
                        key={featureIndex}
                        $isHighlight={isEverythingIn}
                      >
                        <Check size={16} />
                        {feature}
                      </FeatureItem>
                    );
                  })}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <FeatureItem key={`limit-${limitIndex}`}>
                      <X size={16} />
                      {limitation}
                    </FeatureItem>
                  ))}
                </FeatureList>

                <CardButton
                  variant={plan.isPopular || plan.id === "agency-plus" ? "primary" : "secondary"}
                  size="lg"
                  to={
                    plan.id === "enterprise"
                      ? "/contact"
                      : "/request-access"
                  }
                  isDecoy={false}
                  disabled={false}
                >
                  {plan.cta || "Get Started"}
                </CardButton>
              </PricingCard>
            ))}
          </PricingGrid>
          </div>
        </Container>
      </Section>

      {/* Trust Bar */}
      <TrustBar variant="light" showSocialProof={false} />

      <FAQSection>
        <Container>
          <FAQTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
                    {openFAQ === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
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
    </PricingWrapper>
  );
};

export default Pricing;