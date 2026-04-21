import React from "react";
import { Link } from "react-router-dom";
import theme from "../styles/theme";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Star,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Smartphone,
  ArrowRight,
  MapPin,
  BarChart3,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import { Button } from "../design";
import Container from "../components/layout/Container";
import { flexColumnCenter } from "../styles/mixins";
import Testimonials from "../components/home/Testimonials";
import TrustBar from "../components/TrustBar";
import { copy } from "../content/strings";

/* ============================================================
   PAGE WRAPPER
   ============================================================ */
const HomeWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors['text-primary']};
  font-family: ${({ theme }) => theme.typography.fontBody};
  overflow-x: hidden;
  padding-top: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }
  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

/* ============================================================
   HERO — Superhuman-tier composition: H1 + sub + 1 CTA + supporting line
   ============================================================ */
const HeroSection = styled.section`
  min-height: 88vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 120px 0 80px;
  background:
    radial-gradient(ellipse 70% 50% at 50% 30%, rgba(245, 194, 73, 0.1) 0%, transparent 55%),
    radial-gradient(ellipse 50% 35% at 50% 100%, rgba(245, 194, 73, 0.03) 0%, transparent 60%),
    linear-gradient(180deg, #0A0A0C 0%, #050506 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5C249' fill-opacity='0.02'%3E%3Ccircle cx='80' cy='80' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, transparent 80%, rgba(0, 0, 0, 0.4) 100%);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 80px 0 60px;
    min-height: 72vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1100px;
  width: 100%;
  ${flexColumnCenter}
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const HeroBadge = styled(motion.div)`
  background: rgba(245, 194, 73, 0.08);
  color: #F5C249;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 32px;
  border: 1px solid rgba(245, 194, 73, 0.2);
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(40px, 7.5vw, 104px);
  font-weight: 800;
  color: #FFFFFF;
  margin: 0 0 24px;
  line-height: 0.98;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  letter-spacing: -0.045em;
  max-width: 1100px;

  em {
    font-style: normal;
    background: linear-gradient(135deg, #F5C249 0%, #F8D86B 50%, #F5C249 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(16px, 1.3vw, 20px);
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 40px;
  line-height: 1.5;
  max-width: 640px;
  font-weight: 400;
`;

const HeroCTAs = styled(motion.div)`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }
`;

const HeroSupportingText = styled(motion.p)`
  margin: 20px 0 0;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);

  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 150ms ease;

    &:hover {
      color: #F5C249;
      border-color: #F5C249;
    }
  }
`;

const StatsRow = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const StatPill = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  text-align: center;
  min-width: 180px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 140px;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;
  margin-bottom: 2px;
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors['gray-500']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

/* ============================================================
   PROBLEM STATEMENT — anchors the reader in the pain
   ============================================================ */
const ProblemSection = styled.section`
  padding: 140px 0;
  background: linear-gradient(180deg, #050506 0%, #0A0A0C 100%);
  color: #FFFFFF;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 80px 0;
  }
`;

const ProblemStatement = styled(motion.h2)`
  font-size: clamp(32px, 5vw, 64px);
  font-weight: 700;
  text-align: center;
  max-width: 960px;
  margin: 0 auto 32px;
  line-height: 1.1;
  letter-spacing: -0.035em;
  color: rgba(255, 255, 255, 0.92);
  font-family: ${({ theme }) => theme.typography.fontHeading};

  em {
    font-style: normal;
    background: linear-gradient(135deg, #F5C249 0%, #F8D86B 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
`;

const ProblemBody = styled(motion.p)`
  font-size: 18px;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.55);
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
`;

const MetricsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 72px auto 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 48px;
  }
`;

const MetricItem = styled(motion.div)`
  text-align: center;
  padding: 32px 20px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
`;

const MetricValue = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #F5C249;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 8px;
  font-variant-numeric: tabular-nums;
`;

const MetricLabel = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 500;
`;

/* ============================================================
   SHARED LIGHT-SECTION COMPONENTS
   Salesforce/HubSpot pattern: section label → heading → subtitle
   ============================================================ */
const LightSection = styled.section`
  padding: 96px 0;
  background: ${({ $alt }) => $alt ? '#F9FAFB' : '#FFFFFF'};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }
  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const SectionLabel = styled(motion.span)`
  display: inline-block;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: #F5C249;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionHeading = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  letter-spacing: -0.02em;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const SectionSub = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['gray-500']};
  max-width: 640px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 56px;
`;

/* ============================================================
   FEATURE ROWS — alternating image+text scaffold (Superhuman pattern)
   ============================================================ */
const FeatureRowSection = styled.section`
  padding: 120px 0;
  background: #FFFFFF;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 72px 0;
  }
`;

const FeatureRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
  margin-bottom: 120px;

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(even) {
    direction: rtl;
    > * { direction: ltr; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 72px;

    &:nth-child(even) { direction: ltr; }
  }
`;

const FeatureCopy = styled.div`
  max-width: 480px;
`;

const FeatureEyebrow = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #E9B029;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 16px;
`;

const FeatureRowTitle = styled.h3`
  font-size: clamp(28px, 3vw, 44px);
  font-weight: 700;
  color: #0B0B0C;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin: 0 0 20px;
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FeatureRowDesc = styled.p`
  font-size: 17px;
  line-height: 1.6;
  color: #4B5563;
  margin: 0 0 24px;
`;

const FeatureBullets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureBullet = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  line-height: 1.55;
  color: #374151;
  margin-bottom: 12px;

  svg {
    flex-shrink: 0;
    color: #F5C249;
    margin-top: 3px;
  }

  &:last-child { margin-bottom: 0; }
`;

const FeatureVisual = styled.div`
  position: relative;
  aspect-ratio: 4 / 3;
  border-radius: 20px;
  background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
  border: 1px solid #E5E7EB;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 8px 24px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Placeholder pattern — replaced with real product screenshots */
  &::before {
    content: '';
    position: absolute;
    inset: 20px;
    border: 1px dashed rgba(107, 114, 128, 0.2);
    border-radius: 12px;
  }
`;

const FeatureVisualPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: #9CA3AF;
  font-size: 13px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  z-index: 1;

  svg { width: 32px; height: 32px; }
`;

/* ============================================================
   FEATURE CARDS — Clean, bordered, corporate (legacy, may be unused)
   ============================================================ */
const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${({ $alt }) => $alt ? '#FFFFFF' : '#FFFFFF'};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  border-radius: 12px;
  padding: 32px 28px;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: ${({ theme }) => theme.colors['gray-300']};
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const FeatureIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(245, 194, 73, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F5C249;
  margin-bottom: 20px;

  svg { width: 22px; height: 22px; }
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.3;
`;

const FeatureDesc = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: 1.65;
  margin: 0;
`;

/* ============================================================
   HOW IT WORKS — Three steps with connecting line
   ============================================================ */
const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 36px;
    left: 16%;
    right: 16%;
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, rgba(245, 194, 73, 0.25) 20%, rgba(245, 194, 73, 0.25) 80%, transparent 100%);
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 40px;
    &::before { display: none; }
  }
`;

const StepCard = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 1;
`;

const StepNumber = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: transparent;
  border: 1.5px solid rgba(245, 194, 73, 0.35);
  color: #F5C249;
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  letter-spacing: -0.02em;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -6px;
    border-radius: 50%;
    border: 1px solid rgba(245, 194, 73, 0.12);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 60px;
    height: 60px;
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const StepDesc = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: 1.6;
  max-width: 300px;
  margin: 0 auto;
`;

/* ============================================================
   DIFFERENTIATORS — Now LIGHT with bordered cards
   ============================================================ */
const DiffGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const DiffCard = styled(motion.div)`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  border-radius: 12px;
  padding: 32px;
  display: flex;
  gap: 20px;
  align-items: flex-start;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    border-color: #F5C249;
    box-shadow: 0 4px 16px rgba(245, 194, 73, 0.12);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px;
  }
`;

const DiffIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(245, 194, 73, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F5C249;
  flex-shrink: 0;

  svg { width: 24px; height: 24px; }
`;

const DiffContent = styled.div`
  flex: 1;
`;

const DiffTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: 6px;
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const DiffDesc = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: 1.65;
  margin: 0;
`;

/* ============================================================
   FINAL CTA — Dark, full contrast
   ============================================================ */
const CTASection = styled.section`
  padding: 160px 0;
  background:
    radial-gradient(ellipse at center top, rgba(245, 194, 73, 0.08) 0%, transparent 60%),
    linear-gradient(135deg, #050506 0%, #0B0B0C 100%);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 80%;
    background: radial-gradient(ellipse, rgba(245, 194, 73, 0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 96px 0;
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['6xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  letter-spacing: -0.03em;
  line-height: 1.1;
  max-width: 820px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
    letter-spacing: -0.02em;
  }
`;

const CTASub = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    max-width: 340px;
    margin: 0 auto;
  }
`;

/* ============================================================
   COMPONENT
   ============================================================ */
const Home = () => {
  const features = [
    {
      icon: <Clock />,
      title: "Stop rebuilding every park day from scratch",
      description:
        "Turn messy, manual planning into a repeatable system. ParkPro structures each day across your park and resort trips so you're never staring at a blank page again.",
    },
    {
      icon: <TrendingUp />,
      title: "Make your commission feel worth the work",
      description:
        "Cut Disney itinerary work from 8 hours to 15 minutes so the time you invest finally matches the commission you earn on each trip.",
    },
    {
      icon: <Users />,
      title: "Look as professional behind the scenes as you do to clients",
      description:
        "Deliver clean, easy-to-read park-day plans while ParkPro keeps your workflow organized, consistent, and under control.",
    },
    {
      icon: <Shield />,
      title: "Built around how complex parks actually work",
      description:
        "Baked-in patterns for park flow, transportation, and timing at destinations like Walt Disney World today, with Disneyland and Universal support on the way.",
    },
    {
      icon: <Smartphone />,
      title: "Designed for busy, growing agents and agencies",
      description:
        "A workspace built for more clients, more agents, and more trips — without more late nights, weekend marathons, or burnout.",
    },
    {
      icon: <Star />,
      title: "From overwhelmed planner to confident travel CEO",
      description:
        "Shift from reactive, last-minute park planning to a calm, controlled system that lets you run your business like the professional you are.",
    },
  ];

  const stats = [
    { value: "8 hrs → 15 min", label: "Planning time per itinerary" },
    { value: "Every trip", label: "Built in one workspace" },
    { value: "Zero", label: "Spreadsheets to maintain" },
  ];

  const featureRows = [
    {
      eyebrow: "Intake → Itinerary",
      title: "From client form to full itinerary in 15 minutes",
      description:
        "Send your client a short intake form. ParkPro structures their answers into a complete, day-by-day Disney plan — park hours, dining, transportation, and timing logic baked in.",
      bullets: [
        "Branded intake form in your agency colors",
        "Real park hours and current operating logic",
        "Dining, shows, and transportation built into every day",
        "Editable output — add your touches before delivery",
      ],
      visualLabel: "Itinerary Builder",
    },
    {
      eyebrow: "Client Workspace",
      title: "Every client, trip, and itinerary in one place",
      description:
        "Stop switching between spreadsheets, email threads, and sticky notes. ParkPro centralizes your entire client relationship around their trips — past, current, and upcoming.",
      bullets: [
        "Unified client profiles with trip history",
        "Document and note storage per trip",
        "Lead and opportunity tracking",
        "Commission visibility at a glance",
      ],
      visualLabel: "Client Dashboard",
    },
    {
      eyebrow: "Agency Scale",
      title: "Multiply your agency without multiplying headcount",
      description:
        "If each of your agents collapses Disney planning from 8 hours to 15 minutes, your agency handles more bookings without hiring — or burning out existing staff.",
      bullets: [
        "Per-agent usage tracking and permissions",
        "Agency-wide itinerary branding",
        "Centralized billing and seat management",
        "Admin oversight for consistency and quality",
      ],
      visualLabel: "Agency View",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Enter Trip Details",
      description: "Fill out a quick intake form with your client's dates, party size, and preferences. ParkPro handles the rest.",
    },
    {
      step: 2,
      title: "Generate the Itinerary",
      description: "ParkPro's destination-smart engine builds a structured, day-by-day plan based on real park logic — not guesswork.",
    },
    {
      step: 3,
      title: "Deliver to Your Client",
      description: "Share a polished, concierge-level itinerary through ParkPro's client app — your travelers can follow it from arrival to departure.",
    },
  ];

  const differentiators = [
    {
      icon: <MapPin />,
      title: "Destination Intelligence Built In",
      description: "ParkPro understands how Disney parks actually work — park flow, transportation logistics, and current wait time data are baked into every itinerary.",
    },
    {
      icon: <Layers />,
      title: "Concierge-Level Output",
      description: "These aren't basic timeline lists. Every plan is structured, clear, and aligned with how Disney trips actually unfold — so your clients feel taken care of.",
    },
    {
      icon: <BarChart3 />,
      title: "Built to Scale Your Business",
      description: "One workspace for clients, trips, and itineraries. Whether you're solo or running an agency, ParkPro grows with you — without the growing pains.",
    },
    {
      icon: <Shield />,
      title: "Rule-Based, Not AI-Generated",
      description: "Itineraries are built from a deterministic rules engine, not a language model. Every plan is consistent, reliable, and based on real destination logic.",
    },
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ParkPro",
    url: "https://parkproit.com",
    logo: "https://parkproit.com/assets/logo.png",
    description:
      "ParkPro is destination-smart itinerary and workflow software for travel agents who plan complex park and resort vacations.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-260-414-4644",
      contactType: "Customer Service",
      email: "support@parkproit.com",
    },
    sameAs: [
      "https://www.facebook.com/parkproit",
      "https://www.instagram.com/parkproit",
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ParkPro",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
      description: "Subscription pricing available for solo agents and agencies",
    },
    description:
      "ParkPro is a destination-smart planning engine for travel agents who build park and resort itineraries.",
  };

  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true },
  };

  return (
    <HomeWrapper>
      <SEO {...SEOConfigs.home} schemaType="SoftwareApplication" />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(softwareSchema)}</script>
      </Helmet>

      <main role="main" aria-label="ParkPro homepage">

        {/* ---- HERO (dark) ---- */}
        <HeroSection role="banner">
          <Container>
            <HeroContent>
              <HeroBadge
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Star size={16} />
                {copy.hero.badge}
              </HeroBadge>

              <HeroTitle
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                dangerouslySetInnerHTML={{ __html: copy.hero.h1 }}
              />

              <HeroSubtitle
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {copy.hero.sub}
              </HeroSubtitle>

              <HeroCTAs
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <Button to="/demo" variant="primary" size="lg">
                  {copy.ctas.start} <ArrowRight size={18} />
                </Button>
              </HeroCTAs>

              <HeroSupportingText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Or <Link to="/pricing">see pricing</Link> &middot; Built for Disney-specialist agents
              </HeroSupportingText>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* ---- PROBLEM STATEMENT ---- */}
        <ProblemSection>
          <Container>
            <ProblemStatement
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              Every Disney trip eats a <em>full day of planning</em>. And another. And another.
            </ProblemStatement>
            <ProblemBody
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true, margin: "-100px" }}
            >
              You didn't become a travel agent to stare at spreadsheets, cross-reference park hours,
              and rebuild the same Disney itinerary from scratch for every client. The process is
              broken — not you.
            </ProblemBody>

            <MetricsRow>
              {stats.map((s, i) => (
                <MetricItem
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <MetricValue>{s.value}</MetricValue>
                  <MetricLabel>{s.label}</MetricLabel>
                </MetricItem>
              ))}
            </MetricsRow>
          </Container>
        </ProblemSection>

        {/* ---- TRUST BAR (minimal) ---- */}
        <TrustBar variant="minimal" />

        {/* ---- FEATURE ROWS (alternating image + text) ---- */}
        <FeatureRowSection>
          <Container>
            <SectionHeader style={{ marginBottom: 80 }}>
              <SectionLabel {...fadeUp}>Built for Disney specialists</SectionLabel>
              <SectionHeading {...fadeUp}>
                Three things ParkPro does that no spreadsheet can
              </SectionHeading>
            </SectionHeader>

            {featureRows.map((row, i) => (
              <FeatureRow
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <FeatureCopy>
                  <FeatureEyebrow>{row.eyebrow}</FeatureEyebrow>
                  <FeatureRowTitle>{row.title}</FeatureRowTitle>
                  <FeatureRowDesc>{row.description}</FeatureRowDesc>
                  <FeatureBullets>
                    {row.bullets.map((b, bi) => (
                      <FeatureBullet key={bi}>
                        <CheckCircle2 size={18} />
                        <span>{b}</span>
                      </FeatureBullet>
                    ))}
                  </FeatureBullets>
                </FeatureCopy>

                <FeatureVisual>
                  <FeatureVisualPlaceholder>
                    <Layers />
                    <span>{row.visualLabel}</span>
                  </FeatureVisualPlaceholder>
                </FeatureVisual>
              </FeatureRow>
            ))}
          </Container>
        </FeatureRowSection>

        {/* ---- HOW IT WORKS (alt gray) ---- */}
        <LightSection $alt>
          <Container>
            <SectionHeader>
              <SectionLabel {...fadeUp}>How It Works</SectionLabel>
              <SectionHeading {...fadeUp}>
                From Intake to Delivery in Three Steps
              </SectionHeading>
              <SectionSub {...fadeUp}>
                No templates to build, no spreadsheets to maintain. Just enter the trip details, generate, and deliver.
              </SectionSub>
            </SectionHeader>

            <StepsGrid>
              {howItWorks.map((step, i) => (
                <StepCard
                  key={step.step}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <StepNumber>{step.step}</StepNumber>
                  <StepTitle>{step.title}</StepTitle>
                  <StepDesc>{step.description}</StepDesc>
                </StepCard>
              ))}
            </StepsGrid>
          </Container>
        </LightSection>

        {/* ---- DIFFERENTIATORS (white, bordered cards) ---- */}
        <LightSection>
          <Container>
            <SectionHeader>
              <SectionLabel {...fadeUp}>What Sets Us Apart</SectionLabel>
              <SectionHeading {...fadeUp}>
                Built by a Travel Agent Who Lived the Problem
              </SectionHeading>
              <SectionSub {...fadeUp}>
                ParkPro isn't a tech company guessing at what you need — it was built
                inside the same workflow you use every day.
              </SectionSub>
            </SectionHeader>

            <DiffGrid>
              {differentiators.map((d, i) => (
                <DiffCard
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <DiffIcon>{d.icon}</DiffIcon>
                  <DiffContent>
                    <DiffTitle>{d.title}</DiffTitle>
                    <DiffDesc>{d.description}</DiffDesc>
                  </DiffContent>
                </DiffCard>
              ))}
            </DiffGrid>
          </Container>
        </LightSection>

        {/* ---- TESTIMONIALS / FOUNDING PARTNERS ---- */}
        <Testimonials />

        {/* ---- FINAL CTA (dark) ---- */}
        <CTASection>
          <Container>
            <CTATitle {...fadeUp}>
              See a full Disney itinerary generated live, in under 15 minutes.
            </CTATitle>
            <CTASub {...fadeUp}>
              Book a walkthrough with our team. We'll build a real itinerary
              together — start to finish — so you can see exactly how ParkPro
              would fit into your workflow.
            </CTASub>
            <CTAButtons {...fadeUp}>
              <Button to="/demo" variant="primary" size="lg">
                Book a Demo <ArrowRight size={18} />
              </Button>
              <Button to="/pricing" variant="secondary" size="lg">
                See Pricing
              </Button>
            </CTAButtons>
          </Container>
        </CTASection>

      </main>
    </HomeWrapper>
  );
};

export default Home;
