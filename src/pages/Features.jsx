/**
 * Features Page - ParkPro Marketing Site
 *
 * STRUCTURE:
 * - Hero: Badge, title, subtitle (from copy.pages.features)
 * - Tabs: Core / Advanced / Roadmap (stored in featureCategories object)
 * - Feature Cards: Reusable FeatureCard component with icon, title, description, badge, outcomes
 * - Outcome Metrics: Grid of 4 metrics (number, label, description) with icons
 * - Demo: Placeholder video section with motion animations (no real video yet)
 * - CTA: Final call-to-action section with buttons
 *
 * IMPLEMENTATION NOTES:
 * - Feature cards use shared FeatureCard component (DRY, consistent styling)
 * - "Future" tab renamed to "Roadmap" with clear labeling that items are not live today
 * - Demo section uses motion-enabled styled component with polished placeholder
 * - Section headers use shared SectionHeader component for consistency
 * - Security/compliance copy is accurate and safe (no false certifications)
 */

import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Zap,
  FileText,
  Palette,
  BarChart3,
  Settings,
  Rocket,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Star,
  Play,
  Target,
  Globe,
} from "lucide-react";
import { copy } from "../content/strings";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const FeaturesWrapper = styled.div`
  padding-top: 88px; /* Account for fixed navbar */
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }

  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
`;

const FeaturesBadge = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-muted"]}
  );
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FeaturesTitle = styled(motion.h1)`
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

const FeaturesSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors["gray-600"]};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

// Feature Categories Tabs
const FeatureTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureTab = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid
    ${({ active, theme }) =>
      active ? theme.colors.gold : theme.colors["gray-300"]};
  background: ${({ active, theme }) =>
    active ? theme.colors.gold : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.black : theme.colors["gray-600"]};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.black};
  }
`;

// Roadmap Notice
const RoadmapNotice = styled(motion.div)`
  background: ${({ theme }) => theme.colors["gray-50"]};
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const RoadmapNoticeText = styled.p`
  color: ${({ theme }) => theme.colors["gray-700"]};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  margin: 0;
`;

const CategoryIntro = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors["gray-600"]};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing["2xl"]};
  text-align: center;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    padding: 0 ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

const FeaturesSurface = styled.div`
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
  padding: ${({ theme }) => theme.spacing["2xl"]};
  background: ${({ theme }) => theme.colors["gray-50"]};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: 475px) {
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.radius.lg};
  }
`;

// ============================================================================
// FEATURE CARD COMPONENT
// ============================================================================

const FeatureCardWrapper = styled.div`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FeatureBadge = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-dark"]}
  );
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FeatureIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-dark"]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing["2xl"]};
  color: ${({ theme }) => theme.colors.black};
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors["gray-600"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  flex: 1;
`;

const OutcomesSection = styled.div`
  text-align: left;
  margin-top: auto;
`;

const OutcomesLabel = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const OutcomesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const OutcomeItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors["gray-600"]};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const OutcomeIcon = styled(CheckCircle)`
  flex-shrink: 0;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.gold};
  fill: ${({ theme }) => theme.colors.gold};
`;

const FeatureCardMotionWrapper = styled(motion.div)`
  height: 100%;
  display: flex;
`;

const StyledCard = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  badge,
  outcomes,
  index,
}) => {
  return (
    <FeatureCardMotionWrapper
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <StyledCard variant="elevated" hover>
        <FeatureCardWrapper>
          {badge && <FeatureBadge>{badge}</FeatureBadge>}
          <FeatureIconWrapper>{Icon && <Icon size={32} />}</FeatureIconWrapper>
          <FeatureTitle>{title}</FeatureTitle>
          <FeatureDescription>{description}</FeatureDescription>
          {outcomes && outcomes.length > 0 && (
            <OutcomesSection>
              <OutcomesLabel>Agent Outcomes:</OutcomesLabel>
              <OutcomesList>
                {outcomes.map((outcome, outcomeIndex) => (
                  <OutcomeItem key={outcomeIndex}>
                    <OutcomeIcon size={16} />
                    {outcome}
                  </OutcomeItem>
                ))}
              </OutcomesList>
            </OutcomesSection>
          )}
        </FeatureCardWrapper>
      </StyledCard>
    </FeatureCardMotionWrapper>
  );
};

// ============================================================================
// SECTION HEADER COMPONENT
// ============================================================================

const SectionHeaderWrapper = styled(motion.div)`
  text-align: ${({ align }) => align || "center"};
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
`;

const SectionHeaderTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme, dark }) =>
    dark ? theme.colors.white : theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }
`;

const SectionHeaderSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme, dark }) =>
    dark ? "rgba(255, 255, 255, 0.8)" : theme.colors["gray-600"]};
  max-width: ${({ maxWidth }) => maxWidth || "600px"};
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const SectionHeader = ({
  title,
  subtitle,
  align = "center",
  maxWidth,
  dark = false,
  delay = 0,
}) => {
  return (
    <SectionHeaderWrapper
      align={align}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <SectionHeaderTitle dark={dark}>{title}</SectionHeaderTitle>
      {subtitle && (
        <SectionHeaderSubtitle dark={dark} maxWidth={maxWidth}>
          {subtitle}
        </SectionHeaderSubtitle>
      )}
    </SectionHeaderWrapper>
  );
};

// ============================================================================
// OUTCOME METRICS SECTION
// ============================================================================

const MetricsSection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors["gray-200"]} 0%,
    ${({ theme }) => theme.colors["gray-100"]} 100%
  );
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const MetricCard = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors["border-light"]};
`;

const MetricIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.gold};
`;

const MetricNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
`;

const MetricLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors["text-primary"]};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const MetricDescription = styled.div`
  color: ${({ theme }) => theme.colors["text-secondary"]};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
`;

const MetricsDisclaimer = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors["gray-500"]};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  margin-top: ${({ theme }) => theme.spacing.lg};
  font-style: italic;
`;

// ============================================================================
// DEMO SECTION
// ============================================================================

const DemoSection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const DemoContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const DemoVideo = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors["gray-900"]},
    ${({ theme }) => theme.colors["gray-800"]}
  );
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  overflow: hidden;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;

  /* Subtle grid pattern overlay */
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;

  &:hover {
    transform: scale(1.02);
  }
`;

const DemoPlaceholder = styled.div`
  text-align: center;
  z-index: 1;
`;

const PlayButton = styled(motion.div)`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
`;

const PlaceholderTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const PlaceholderSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const WhoForWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing["3xl"]};
  text-align: left;
`;

const WhoForTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const WhoForList = styled.ul`
  list-style: disc;
  padding-left: ${({ theme }) => theme.spacing["2xl"]};
  margin: 0;
`;

const WhoForItem = styled.li`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

// ============================================================================
// CTA SECTION
// ============================================================================

const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black} 0%,
    ${({ theme }) => theme.colors["gray-900"]} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const Features = () => {
  const [activeTab, setActiveTab] = useState("core");

  const featureCategories = {
    core: {
      title: "Today: Disney Trip Automation That Feels Built for You",
      tabLabel: "Disney Automation (Live Today)",
      description:
        "Built for the Disney-focused agent who wants itineraries done in minutes — not hours, without sacrificing the quality of their trips.",
      features: [
        {
          icon: Zap,
          title: "Disney Itinerary Engine (No More Blank Screens)",
          description:
            "Turn a detailed Disney trip intake into a clean, day-by-day itinerary in minutes. ParkPro applies proven park-flow rules, park-hopper logic, and your client's must-dos so you stop rebuilding the same trip from scratch and finally feel in control of your planning workflow.",
          outcomes: [
            "Save 5–10+ hours of manual planning per Disney trip",
            'Go from intake to "good first draft" in minutes, not days',
            "Keep control of the plan while ParkPro does the heavy lifting",
          ],
          badge: null,
        },
        {
          icon: FileText,
          title: "Smart Client Intake & Trip Links",
          description:
            "Share a branded questionnaire link for each trip. Clients fill everything out once; ParkPro ties their answers directly to the trip so you're not chasing missing details in email threads and can show up feeling prepared instead of scattered.",
          outcomes: [
            "Zero copy-paste from email into tools and docs",
            "Cleaner handoff between client and agent from day one",
            "Every trip starts with complete, organized context",
          ],
          badge: null,
        },
        {
          icon: Palette,
          title: 'Client-Ready PDFs & Slides That Look "Agency Big"',
          description:
            "Export itineraries to ParkPro-designed PDFs or slides that match your branding. Include your logo, colors, and a premium layout so you look like the polished, professional agency your clients expect — even on your busiest weeks.",
          outcomes: [
            "Impress clients and owners with polished deliverables",
            "Consistent branding across every single trip",
            "Ready-to-send files for email, client portals, or print",
          ],
          badge: null,
        },
      ],
    },
    advanced: {
      title: "Agency OS (Private Beta With Founding Agencies)",
      tabLabel: "Agency OS Tools (Beta)",
      description:
        "For agencies who want a centralized, repeatable system that scales beyond one rockstar agent and keeps every trip on track.",
      features: [
        {
          icon: BarChart3,
          title: "Trip Pipeline & Agent Workspace",
          description:
            "See every Disney trip in one workspace—pending forms, in-progress itineraries, and finalized plans—so nothing slips through the cracks and you always know exactly what needs your attention next.",
          outcomes: [
            "One view of what every agent is working on",
            "Never lose track of a client, follow-up, or deadline",
            "Know exactly which trips still need itineraries today",
          ],
          badge: null,
        },
        {
          icon: Settings,
          title: 'Agency Templates, Not Just "Another Tool"',
          description:
            "Standardize the way your agency plans Disney trips with reusable templates, best-practice flows, and consistent workflows agents can follow. Your processes live in ParkPro instead of in one senior agent's head.",
          outcomes: [
            "Less variance between brand-new and senior agents",
            "Onboard new or part-time agents in days, not months",
            "Protect your agency's \"secret sauce\" by baking it into ParkPro",
          ],
          badge: null,
        },
        {
          icon: Users,
          title: "Multi-Agent & Team-Ready Foundation",
          description:
            "ParkPro is built to support multi-seat agencies, with per-agent seats and shared agency settings. As you grow, you can plug in more agents without losing visibility or consistency.",
          outcomes: [
            "Ready to plug in multiple agents as your team grows",
            "Centralize branding, destinations, and settings in one place",
            "Built to scale beyond a single super-agent (private beta)",
          ],
          badge: null,
        },
      ],
    },
    roadmap: {
      title: "Roadmap: ParkPro as the Operating System for Travel Agencies",
      tabLabel: "Coming Soon: The Full Agency OS",
      description:
        "Where ParkPro is headed as the operating system for destination-focused travel agencies across Disney, Universal, and more.",
      features: [
        {
          icon: Rocket,
          title: "Travel-Specific CRM & Sales Pipeline",
          description:
            "A dedicated CRM built for travel agencies—track leads from first inquiry through quote, booking, and final payment, all inside ParkPro, instead of juggling generic CRMs and spreadsheets.",
          outcomes: [
            "Replace generic CRMs with travel-specific workflows (planned)",
            "See every lead, trip, and booking in one OS (planned)",
            "Automate follow-ups, reminders, and simple tasks (planned)",
          ],
          badge: "Roadmap",
        },
        {
          icon: Shield,
          title: "Commissions, Finance & Compliance",
          description:
            "Commission tracking, splits, statements, and compliance tooling so agencies can run the business side of travel without spreadsheets and late-night math. Built to make owners and accountants feel confident about the numbers.",
          outcomes: [
            "Track commissions and splits per booking (planned)",
            "Export-ready reports for owners and accountants (planned)",
            "Clear roadmap toward PCI, GDPR, and SOC 2 readiness (planned)",
          ],
          badge: "Long-term",
        },
        {
          icon: Globe,
          title: "Multi-Destination & APIs for Serious Agencies",
          description:
            "Expand ParkPro beyond Walt Disney World into Disneyland, Disney Cruise Line, Universal, and other major brands—with APIs so larger agencies can connect ParkPro to their internal dashboards and tools.",
          outcomes: [
            "Plan Disney and Universal trips in one platform (roadmap)",
            "Use APIs to power internal dashboards and tools (roadmap)",
            "Add additional destinations as your agency expands (roadmap)",
          ],
          badge: "Exploring",
        },
      ],
    },
  };

  const metrics = [
    {
      icon: Clock,
      number: "5–10+ hrs",
      label: "Plan trips 5–10 hours faster — without cutting quality",
      description:
        "Stop rebuilding day-by-day Disney plans from scratch. ParkPro gives you a working itinerary in minutes so you can spend your time refining, not starting over.",
    },
    {
      icon: TrendingUp,
      number: "More trips, same hours",
      label: "Higher capacity per agent without burnout",
      description:
        "When the planning work isn't manual and messy, each agent can comfortably manage more active trips without feeling like they're constantly behind.",
    },
    {
      icon: Settings,
      number: "1 unified workspace",
      label: "Replace spreadsheets, docs, and chaos",
      description:
        "Intake forms, trip details, and itineraries live in a single system instead of being scattered across email threads, PDFs, and random folders.",
    },
    {
      icon: Users,
      number: "Days, not months",
      label: "Faster ramp-up for new and part-time agents",
      description:
        "New or part-time agents can follow your ParkPro workflows and templates, so they start producing solid itineraries in days instead of months of shadowing.",
    },
  ];

  const currentFeatures = featureCategories[activeTab];

  return (
    <FeaturesWrapper>
      <SEO {...SEOConfigs.features} schemaType="SoftwareApplication" />
      <Section>
        <Container>
          <FeaturesHeader>
            <FeaturesBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Powerful Features
            </FeaturesBadge>
            <FeaturesTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.features.h1}
            </FeaturesTitle>
            <FeaturesSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {copy.pages.features.sub}
            </FeaturesSubtitle>
          </FeaturesHeader>

          <FeatureTabs>
            {Object.entries(featureCategories).map(([key, category]) => (
              <FeatureTab
                key={key}
                active={activeTab === key}
                onClick={() => setActiveTab(key)}
              >
                {category.tabLabel ?? category.title}
              </FeatureTab>
            ))}
          </FeatureTabs>

          <CategoryIntro>{currentFeatures.description}</CategoryIntro>

          {activeTab === "roadmap" && (
            <RoadmapNotice
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <RoadmapNoticeText>
                <strong>Note:</strong> These are roadmap items we're exploring
                for later phases, based on feedback from early agencies.
                Timelines may change as we learn and prioritize based on agent
                needs.
              </RoadmapNoticeText>
            </RoadmapNotice>
          )}

          <CardGrid columns={3} gap={6}>
            {currentFeatures.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                badge={feature.badge}
                outcomes={feature.outcomes}
                index={index}
              />
            ))}
          </CardGrid>
        </Container>
      </Section>

      <MetricsSection>
        <Container>
          <SectionHeader
            title="What Changes When Your Itineraries Aren't Built in Spreadsheets"
            subtitle="These are the core outcomes ParkPro is designed to create for destination-focused travel agents and agencies in their day-to-day workflow."
            delay={0}
          />

          <MetricsGrid>
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {metric.icon && (
                  <MetricIconWrapper>
                    <metric.icon size={24} />
                  </MetricIconWrapper>
                )}
                <MetricNumber>{metric.number}</MetricNumber>
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricDescription>{metric.description}</MetricDescription>
              </MetricCard>
            ))}
          </MetricsGrid>

          <MetricsDisclaimer>
            Based on internal tests and early agent feedback; individual results
            may vary.
          </MetricsDisclaimer>
        </Container>
      </MetricsSection>

      <DemoSection>
        <Container>
          <DemoContent>
            <WhoForWrapper>
              <WhoForTitle>Who ParkPro is built for</WhoForTitle>
              <WhoForList>
                <WhoForItem>Travel agents who want Disney trips planned in minutes, not hours.</WhoForItem>
                <WhoForItem>Agency owners who want one place to see every trip, form, and itinerary.</WhoForItem>
                <WhoForItem>Teams who are tired of rebuilding the same day-by-day plans from scratch.</WhoForItem>
                <WhoForItem>Growing agencies who need a future-proof operating system for Disney, Universal, and beyond.</WhoForItem>
              </WhoForList>
            </WhoForWrapper>

            <SectionHeader
              title="See ParkPro in Action"
              subtitle="Watch how travel agents go from client intake to a client-ready Disney itinerary in minutes—without spreadsheets, copy-paste, or starting from a blank page."
              dark={true}
              delay={0}
            />

            <DemoVideo
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <DemoPlaceholder>
                <PlayButton
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={32} fill="currentColor" />
                </PlayButton>
                <PlaceholderTitle>Full Demo Coming Soon</PlaceholderTitle>
                <PlaceholderSubtitle>
                  Our full walkthrough demo is already live. We're polishing a cinematic version that will appear right here soon.
                </PlaceholderSubtitle>
              </DemoPlaceholder>
            </DemoVideo>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/demo">
                <Play size={20} />
                Watch Full Demo
              </Button>
            </motion.div>
          </DemoContent>
        </Container>
      </DemoSection>

      <CTASection>
        <Container>
          <CTAContent>
            <SectionHeader
              title="Ready to Turn ParkPro into Your Agency's Operating System?"
              subtitle="We're inviting a small group of destination-focused travel agents and agencies into early access. Start with Disney trip automation today, then grow into a full Agency OS as we roll out CRM, commissions, and multi-destination features together."
              delay={0}
              dark={true}
            />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/request-access">
                Request Early Access →
              </Button>
            </motion.div>
          </CTAContent>
        </Container>
      </CTASection>
    </FeaturesWrapper>
  );
};

export default Features;