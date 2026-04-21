import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import { Star, Check, X, ChevronDown, ChevronUp, Award } from "lucide-react";
import { Button } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
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

// Pricing Page - Transparent pricing focused on time savings for Disney travel agents
//
// PRICING MODEL:
// - All prices are per agent per month (each agent has their own subscription)
// - Annual = monthlyPrice * 10 (equivalent to "2 months free")
// - Solo Agent: $97/agent/mo, 5 itineraries/agent/month
// - Agent+: $147/agent/mo, 10 itineraries/agent/month
// - Agency: $197/agent/mo, 15 itineraries/agent/month
// - Agency+: $247/agent/mo, 20 itineraries/agent/month
// - Enterprise: Custom pricing, pooled itineraries (negotiated)
// - Enterprise is a real, clickable plan (not a decoy) that routes to /contact

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

// Body section wrapper with light background
const BodySection = styled.section`
  background: #ffffff;
  padding: 96px ${({ theme }) => theme.spacing["3xl"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    padding: 48px ${({ theme }) => theme.spacing.md};
  }
`;

// Section label (blue, uppercase, small)
const SectionLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #3b82f6;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

// Section heading
const SectionHeading = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1f2937;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
`;

// Section subtitle
const SectionSub = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: #6b7280;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const ToggleWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing["1xl"]};
  flex-wrap: wrap;

  @media (max-width: 475px) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto 1fr;
  align-items: center;
  justify-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;
`;

const ToggleLabelLeft = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #6b7280;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  grid-column: 1;
  grid-row: 2;
  text-align: right;
  padding-right: ${({ theme }) => theme.spacing.md};

  @media (max-width: 475px) {
    padding-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const ToggleLabelTop = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #6b7280;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  grid-column: 2;
  grid-row: 1;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ToggleLabelRight = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #6b7280;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  grid-column: 3;
  grid-row: 2;
  text-align: left;
  padding-left: ${({ theme }) => theme.spacing.md};

  @media (max-width: 475px) {
    padding-left: ${({ theme }) => theme.spacing.sm};
  }
`;

const SecondaryToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  margin-left: auto;
  margin-right: auto;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 480px;
  padding-left: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding-left: 0;
    justify-content: center;
  }

  @media (max-width: 475px) {
    gap: ${({ theme }) => theme.spacing.sm};
    flex-wrap: wrap;
    max-width: 100%;
  }
`;

const ToggleLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #6b7280;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const PrimaryToggle = styled.div`
  display: flex;
  align-items: center;
  background: #f3f4f6;
  border-radius: ${({ theme }) => theme.radius.full};
  padding: 3px;
  position: relative;
  cursor: pointer;
  border: 2px solid #e5e7eb;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  grid-column: 2;
  grid-row: 2;
  min-width: 480px;

  @media (max-width: 475px) {
    min-width: 320px;
  }
`;

const PrimaryToggleOption = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})`
  padding: 7px ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  border: none;
  background: ${({ active, theme }) =>
    active ? "#3b82f6" : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : "#6b7280"};
  font-weight: ${({ active, theme }) =>
    active
      ? theme.typography.weights.semibold
      : theme.typography.weights.medium};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ active, theme }) => (active ? theme.shadows.sm : "none")};
  z-index: 1;
  position: relative;
  min-width: 150px;
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  @media (max-width: 475px) {
    min-width: 100px;
    padding: 7px ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
`;

const SecondaryToggle = styled.div`
  display: flex;
  background: #f9fafb;
  border-radius: ${({ theme }) => theme.radius.full};
  padding: 2px;
  position: relative;
  cursor: pointer;
  border: 1px solid #e5e7eb;
`;

const SecondaryToggleOption = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => !["active"].includes(prop),
})`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.white : "transparent"};
  color: ${({ active, theme }) =>
    active ? "#1f2937" : "#6b7280"};
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
  grid-template-columns: ${({ $isEnterpriseView }) =>
    $isEnterpriseView ? "1fr" : "repeat(3, 1fr)"};
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
  max-width: ${({ $isEnterpriseView }) =>
    $isEnterpriseView ? "400px" : "1200px"};
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 475px) {
    gap: ${({ theme }) => theme.spacing.md};
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
      "tierColor",
    ].includes(prop),
})`
  background: #ffffff;
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid #e5e7eb;
  border-top: ${({ tierColor }) => tierColor ? `3px solid ${tierColor}` : "none"};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: ${({ theme }) => theme.transitions.normal};
  opacity: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 600px;
  min-width: 0;
  overflow: visible;

  ${({ isEnterprise }) =>
    isEnterprise &&
    `
    min-height: auto;
    max-width: 400px;
    margin: 0 auto;
  `}

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    z-index: 5;
    border-color: #d1d5db;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    min-height: 550px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: 12px;
    min-height: auto;
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ $tierColor }) => $tierColor || '#3b82f6'};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  z-index: 20;
  white-space: nowrap;
  pointer-events: none;
`;

const EnterpriseBadge = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ $tierColor }) => $tierColor || '#D4AF37'};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  z-index: 20;
  white-space: nowrap;
  pointer-events: none;
`;

const PlanAudienceTag = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #6b7280;
  background: #f3f4f6;
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
  color: ${({ $tierColor }) => $tierColor || '#1f2937'};
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
  color: #3b82f6;
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
  color: #6b7280;
  margin-left: 0;
`;

const AnnualDiscount = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #6b7280;
  text-align: center;
  margin-top: 2px;
`;

const PriceFrom = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #9ca3af;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-style: italic;
`;

const AdditionalSeatText = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #9ca3af;
  text-align: center;
  margin-top: 2px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-style: italic;
`;

const PlanGrowthNote = styled.div`
  background: #f9fafb;
  border-left: 3px solid ${({ $tierColor }) => $tierColor || '#3b82f6'};
  padding: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: #374151;
  text-align: left;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const TimeSavings = styled.p`
  color: #3b82f6;
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
    $isHighlight ? "#1f2937" : "#6b7280"};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ $isHighlight }) => ($isHighlight ? "600" : "400")};

  svg {
    color: ${({ $tierColor }) => $tierColor || '#3b82f6'};
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

// FAQ Section with light background
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
  color: #1f2937;
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: #3b82f6;
  }
`;

const FAQAnswer = styled(motion.div)`
  color: #6b7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  overflow: hidden;
`;

// Dark CTA section
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

const Pricing = () => {
  const location = useLocation();
  const [openFAQ, setOpenFAQ] = useState(null);
  const [viewType, setViewType] = useState("solo");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "solo" || hash === "agency" || hash === "enterprise") {
      setViewType(hash);
      setTimeout(() => {
        const pricingSection = document.getElementById("pricing-section");
        if (pricingSection) {
          const offset = 120;
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
      name: "Solo Agent",
      description: "Perfect for solo agents just getting started or testing the waters.",
      monthlyPrice: 197,
      annualPrice: 1970,
      audience: "For solo agents",
      isPopular: false,
      isDecoy: false,
      cta: "Request Solo access",
      features: [
        "5 itineraries per month",
        "Client intake forms and itinerary builder",
        "Trip management dashboard",
        "Email support",
        "Extra itineraries at $50 each",
      ],
      limitations: [
        "No branding customization",
        "No team collaboration",
      ],
    },
    {
      id: "agentplus",
      name: "Agent+",
      description: "Built for growing agents who need more volume and flexibility.",
      monthlyPrice: 247,
      annualPrice: 2470,
      audience: "For solo agents",
      isPopular: true,
      isDecoy: false,
      cta: "Request Agent+ access",
      features: [
        "Everything in Solo Agent",
        "+5 extra itineraries per month (10 total)",
        "Save itinerary templates",
        "Custom questionnaire link",
        "Email Hub and MagicFlow",
        "Priority email support",
        "Extra itineraries at $40 each",
      ],
      limitations: [
        "No team collaboration",
        "No API access",
      ],
    },
    {
      id: "agency",
      name: "Agency",
      description: "Ideal for agencies building a steady client base.",
      monthlyPrice: 297,
      annualPrice: 2970,
      audience: "For agencies & teams",
      isPopular: false,
      isDecoy: false,
      cta: "Request Agency access",
      features: [
        "Everything in Agent+",
        "+5 extra itineraries per month (15 total)",
        "Shared agency dashboard",
        "Branding: Add your logo to itineraries",
        "Task automation",
        "Tags and trip notes",
        "Extra itineraries at $30 each",
      ],
      limitations: [
        "No API access",
        "No dedicated account manager",
      ],
    },
    {
      id: "agencyplus",
      name: "Agency+",
      description: "For high-performing agencies that need power, scale, and automation.",
      monthlyPrice: 347,
      annualPrice: 3470,
      audience: "For agencies & teams",
      isPopular: false,
      isDecoy: false,
      cta: "Request Agency+ access",
      features: [
        "Everything in Agency",
        "+5 extra itineraries per month (20 total)",
        "API access for integrations",
        "White-glove onboarding",
        "Early feature access",
        "Live chat support",
        "Extra itineraries at $22 each",
      ],
      limitations: [
        "No dedicated account manager (available in Enterprise)",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Designed for national brands and high-volume agencies.",
      customPricing: "Custom Quote",
      audience: "For large agencies",
      isPopular: false,
      isDecoy: false,
      cta: "Talk to us",
      features: [
        "Everything in Agency+",
        "Pooled itineraries (negotiated per contract)",
        "Unlimited agent seats",
        "Dedicated success manager",
        "Admin impersonation dashboard",
        "Custom CRM/API integrations",
        "SLA-backed priority support",
      ],
      limitations: [],
    },
  ];

  const filteredPlans = pricingPlans.filter((plan) => {
    if (viewType === "solo") {
      return plan.id === "solo" || plan.id === "agentplus";
    } else if (viewType === "agency") {
      return plan.id === "agency" || plan.id === "agencyplus";
    } else if (viewType === "enterprise") {
      return plan.id === "enterprise";
    }
    return false;
  });

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
            transition={{ duration: 0.8 }}
          >
            {copy.pages.pricing.h1}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {copy.pages.pricing.sub}
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <BodySection>
        <Container>
          <div id="pricing-section">
            <ToggleWrapper>
              <ToggleContainer>
                <ToggleLabelTop>Agency</ToggleLabelTop>
                <ToggleLabelLeft>Solo Agent</ToggleLabelLeft>
                <PrimaryToggle>
                  <PrimaryToggleOption
                    active={viewType === "solo"}
                    onClick={() => setViewType("solo")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: viewType === "solo" ? 1.02 : 1,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    Solo Agent
                  </PrimaryToggleOption>
                  <PrimaryToggleOption
                    active={viewType === "agency"}
                    onClick={() => setViewType("agency")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: viewType === "agency" ? 1.02 : 1,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    Agency
                  </PrimaryToggleOption>
                  <PrimaryToggleOption
                    active={viewType === "enterprise"}
                    onClick={() => setViewType("enterprise")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      scale: viewType === "enterprise" ? 1.02 : 1,
                      y: 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    Enterprise
                  </PrimaryToggleOption>
                </PrimaryToggle>
                <ToggleLabelRight>Enterprise</ToggleLabelRight>
              </ToggleContainer>
            </ToggleWrapper>

            <PricingGrid $isEnterpriseView={viewType === "enterprise"}>
              {filteredPlans.map((plan, index) => {
                const tc = TIER_COLORS[plan.id] || { hex: '#3b82f6', text: '#1f2937' };
                return (
                <PricingCard
                  key={plan.id}
                  isPopular={plan.isPopular}
                  isAgencyPlus={plan.id === "agencyplus"}
                  isEnterprise={plan.id === "enterprise"}
                  tierColor={tc.hex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {plan.isPopular && (
                    <PopularBadge $tierColor={tc.hex}>
                      <Star size={12} style={{ marginRight: "4px" }} />
                      Most Popular for Solo Agents
                    </PopularBadge>
                  )}
                  {plan.id === "agencyplus" && (
                    <PopularBadge $tierColor={tc.hex}>
                      <Star size={12} style={{ marginRight: "4px" }} />
                      Most Popular for Agencies
                    </PopularBadge>
                  )}
                  {plan.id === "enterprise" && (
                    <EnterpriseBadge $tierColor={tc.hex}>
                      <Award size={12} style={{ marginRight: "4px" }} />
                      Custom
                    </EnterpriseBadge>
                  )}

                  {plan.audience && (
                    <PlanAudienceTag>{plan.audience}</PlanAudienceTag>
                  )}
                  <PlanName $tierColor={tc.hex}>{plan.name}</PlanName>
                  <PlanPrice>
                    <PriceAmount
                      style={{ fontSize: "1.5rem", color: "#1f2937" }}
                    >
                      Call for Pricing
                    </PriceAmount>
                  </PlanPrice>
                  {plan.description && (
                    <PlanGrowthNote $tierColor={tc.hex}>{plan.description}</PlanGrowthNote>
                  )}
                  <FeatureList>
                    {plan.features.map((feature, featureIndex) => {
                      const isEverythingIn =
                        feature.startsWith("Everything in");
                      return (
                        <FeatureItem
                          key={featureIndex}
                          $isHighlight={isEverythingIn}
                          $tierColor={tc.hex}
                        >
                          <Check size={16} />
                          {feature}
                        </FeatureItem>
                      );
                    })}
                    {plan.limitations.map((limitation, limitIndex) => (
                      <FeatureItem key={`limit-${limitIndex}`} $tierColor="#9CA3AF">
                        <X size={16} />
                        {limitation}
                      </FeatureItem>
                    ))}
                  </FeatureList>

                  <CardButton
                    variant="secondary"
                    size="lg"
                    to={
                      plan.id === "enterprise" ? "/contact" : "/request-access"
                    }
                    isDecoy={false}
                    disabled={false}
                  >
                    {plan.cta || "Get Started"}
                  </CardButton>
                </PricingCard>
                );
              })}
            </PricingGrid>
          </div>
        </Container>
      </BodySection>

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

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to transform your itinerary workflow?
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
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
