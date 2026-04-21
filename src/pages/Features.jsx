/**
 * Features Page - ParkPro Marketing Site
 *
 * DESIGN SYSTEM: Salesforce/HubSpot Enterprise SaaS
 * - Dark hero with gradient
 * - Light body sections (white/F9FAFB alternating)
 * - Custom feature cards (no Card/CardGrid imports)
 * - Enterprise typography and spacing
 * - Professional, polished aesthetic
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
import { Button } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const FeaturesWrapper = styled.div`
  padding-top: 88px;
  background: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }

  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

// ============================================================================
// HERO SECTION (Dark Gradient)
// ============================================================================

const HeroSection = styled.section`
  padding: 96px 0;
  background: linear-gradient(
    135deg,
    #000000 0%,
    #111827 100%
  );
  color: #ffffff;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const HeroBadge = styled(motion.div)`
  background: rgba(245, 194, 73, 0.15);
  color: #3b82f6;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 6px;
  display: inline-block;
  margin-bottom: 24px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid rgba(245, 194, 73, 0.25);
`;

const HeroTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 36px;
  }

  @media (max-width: 475px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }

  @media (max-width: 475px) {
    font-size: 14px;
    padding: 0 16px;
  }
`;

// ============================================================================
// FEATURE TABS & INTRO
// ============================================================================

const TabsSection = styled.section`
  padding: 96px 0;
  background: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const FeatureTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 48px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureTab = styled.button`
  padding: 12px 24px;
  border-radius: 6px;
  border: 1px solid ${({ active }) => (active ? "#3b82f6" : "#e5e7eb")};
  background: ${({ active }) => (active ? "#3b82f6" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#6b7280")};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #3b82f6;
    color: #1f2937;
  }
`;

const CategoryIntro = styled.p`
  font-size: 16px;
  color: #6b7280;
  max-width: 700px;
  margin: 0 auto 48px;
  text-align: center;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
    padding: 0 16px;
  }
`;

// ============================================================================
// SECTION LABELS & HEADINGS
// ============================================================================

const SectionLabel = styled.div`
  color: #3b82f6;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
  text-align: center;
`;

const SectionHeading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 12px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
  }
`;

const SectionSub = styled.p`
  font-size: 18px;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto 48px;
  text-align: center;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

// ============================================================================
// FEATURE CARDS (Custom - no Card import)
// ============================================================================

const FeatureCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 24px;
  }
`;

const FeatureCardContainer = styled(motion.div)`
  height: 100%;
`;

const FeatureCardElement = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border-color: #d1d5db;
  }
`;

const FeatureBadge = styled.div`
  background: rgba(245, 194, 73, 0.1);
  color: #3b82f6;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
`;

const FeatureIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(245, 194, 73, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  margin-bottom: 24px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 24px;
  flex: 1;
  font-size: 14px;
`;

const OutcomesSection = styled.div`
  text-align: left;
  margin-top: auto;
`;

const OutcomesLabel = styled.h4`
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const OutcomesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const OutcomeItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 8px;
  color: #6b7280;
  font-size: 13px;
  line-height: 1.5;
`;

const OutcomeIcon = styled(CheckCircle)`
  flex-shrink: 0;
  margin-top: 2px;
  color: #3b82f6;
  width: 16px;
  height: 16px;
`;

const RoadmapNotice = styled(motion.div)`
  background: #f9fafb;
  border-left: 3px solid #3b82f6;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const RoadmapNoticeText = styled.p`
  color: #4b5563;
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
`;

// ============================================================================
// METRICS SECTION
// ============================================================================

const MetricsSection = styled.section`
  padding: 96px 0;
  background: #f9fafb;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 24px;
  }
`;

const MetricCard = styled(motion.div)`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border-color: #d1d5db;
  }
`;

const MetricIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  color: #3b82f6;
`;

const MetricNumber = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  line-height: 1.2;
`;

const MetricLabel = styled.div`
  font-size: 14px;
  color: #1f2937;
  font-weight: 600;
  margin-bottom: 8px;
`;

const MetricDescription = styled.div`
  color: #6b7280;
  font-size: 13px;
  line-height: 1.5;
`;

const MetricsDisclaimer = styled.p`
  text-align: center;
  color: #9ca3af;
  font-size: 12px;
  margin: 0;
  font-style: italic;
`;

// ============================================================================
// DEMO SECTION
// ============================================================================

const DemoSection = styled.section`
  padding: 96px 0;
  background: #ffffff;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const DemoContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const WhoForWrapper = styled.div`
  margin-bottom: 48px;
  text-align: left;
`;

const WhoForTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const WhoForList = styled.ul`
  list-style: disc;
  padding-left: 24px;
  margin: 0;
`;

const WhoForItem = styled.li`
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 8px;
  line-height: 1.6;
`;

const DemoVideo = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  background: linear-gradient(
    135deg,
    #1f2937 0%,
    #111827 100%
  );
  border-radius: 12px;
  margin-bottom: 32px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

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
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1f2937;
  margin: 0 auto 16px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const PlaceholderTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
`;

const PlaceholderSubtitle = styled.p`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;
`;

const DemoButtonWrapper = styled(motion.div)`
  text-align: center;
`;

// ============================================================================
// CTA SECTION (Dark Gradient)
// ============================================================================

const CTASection = styled.section`
  padding: 96px 0;
  background: linear-gradient(
    135deg,
    #000000 0%,
    #111827 100%
  );
  color: #ffffff;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
  }
`;

const CTASubtitle = styled.p`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto 32px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

const CTAButtonWrapper = styled(motion.div)`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

// ============================================================================
// FEATURE CARD COMPONENT
// ============================================================================

const FeatureCard = ({ icon: Icon, title, description, badge, outcomes, index }) => {
  return (
    <FeatureCardContainer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <FeatureCardElement>
        {badge && <FeatureBadge>{badge}</FeatureBadge>}
        {Icon && (
          <FeatureIconWrapper>
            <Icon size={24} />
          </FeatureIconWrapper>
        )}
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
        {outcomes && outcomes.length > 0 && (
          <OutcomesSection>
            <OutcomesLabel>Agent Outcomes</OutcomesLabel>
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
      </FeatureCardElement>
    </FeatureCardContainer>
  );
};

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
            "Cut Disney itinerary work from 8 hours to 15 minutes",
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
          title: "A Client-Facing App That Makes You Look Premium",
          description:
            "Your clients open their itinerary in ParkPro's branded, mobile-friendly app — not a PDF attachment buried in email. They get a polished, interactive experience they can reference in-park, and you look like the premium agency your clients expect.",
          outcomes: [
            "Clients view their itinerary on any device, anytime",
            "Consistent branding across every single trip",
            "Interactive, mobile-friendly experience — not a static file",
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
          title: "A Consistent Process, Not Tribal Knowledge",
          description:
            "Every agent in your agency uses the same guided intake, the same itinerary engine, and the same delivery flow. The quality of your itineraries doesn't depend on who built them — it's built into the system.",
          outcomes: [
            "Less variance between brand-new and senior agents",
            "Onboard new or part-time agents in days, not months",
            "Your process lives in ParkPro, not in one person's head",
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
            "Reports for owners and accountants (planned)",
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
      number: "8 hrs → 15 min",
      label: "Per itinerary — without cutting quality",
      description:
        "Stop rebuilding day-by-day Disney plans from scratch. ParkPro gives you a working itinerary in 15 minutes so you can spend your time refining, not starting over.",
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
        "Intake forms, trip details, and itineraries live in a single system instead of being scattered across email threads, documents, and random folders.",
    },
    {
      icon: Users,
      number: "Days, not months",
      label: "Faster ramp-up for new and part-time agents",
      description:
        "New or part-time agents can follow your ParkPro workflows and guided process, so they start producing solid itineraries in days instead of months of shadowing.",
    },
  ];

  const currentFeatures = featureCategories[activeTab];

  return (
    <FeaturesWrapper>
      <SEO {...SEOConfigs.features} schemaType="SoftwareApplication" />

      {/* HERO SECTION */}
      <HeroSection>
        <Container>
          <HeroBadge
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Powerful Features
          </HeroBadge>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {copy.pages.features.h1}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {copy.pages.features.sub}
          </HeroSubtitle>
        </Container>
      </HeroSection>

      {/* TABS & FEATURES SECTION */}
      <TabsSection>
        <Container>
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

          <FeatureCardsGrid>
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
          </FeatureCardsGrid>
        </Container>
      </TabsSection>

      {/* METRICS SECTION */}
      <MetricsSection>
        <Container>
          <SectionLabel>What Changes When Your Itineraries Aren't Built in Spreadsheets</SectionLabel>
          <SectionHeading>Measurable outcomes</SectionHeading>
          <SectionSub>
            These are the core outcomes ParkPro is designed to create for destination-focused travel agents and agencies in their day-to-day workflow.
          </SectionSub>

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

      {/* DEMO SECTION */}
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

            <SectionLabel>See ParkPro in Action</SectionLabel>
            <SectionHeading>Full demo walkthrough</SectionHeading>
            <SectionSub>
              Watch how travel agents go from client intake to a client-ready Disney itinerary in minutes—without spreadsheets, copy-paste, or starting from a blank page.
            </SectionSub>

            <DemoVideo
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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

            <DemoButtonWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/demo">
                <Play size={20} />
                Watch Full Demo
              </Button>
            </DemoButtonWrapper>
          </DemoContent>
        </Container>
      </DemoSection>

      {/* CTA SECTION */}
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle>Ready to Turn ParkPro into Your Agency's Operating System?</CTATitle>
            <CTASubtitle>
              See how ParkPro transforms your Disney planning workflow. Book a personalized demo and we'll show you exactly how it works for your agency.
            </CTASubtitle>
            <CTAButtonWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/demo">
                Book a Demo →
              </Button>
            </CTAButtonWrapper>
          </CTAContent>
        </Container>
      </CTASection>
    </FeaturesWrapper>
  );
};

export default Features;
