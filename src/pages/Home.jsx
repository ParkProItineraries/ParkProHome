import React from "react";
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
   HERO — Dark, keeps current premium feel
   ============================================================ */
const HeroSection = styled.section`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0 ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black} 0%,
    ${({ theme }) => theme.colors['gray-900']} 100%
  );
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  width: 100%;
  ${flexColumnCenter}
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

const HeroBadge = styled(motion.div)`
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  border: 1px solid rgba(59, 130, 246, 0.25);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes['6xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.1;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  letter-spacing: -0.025em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  max-width: 620px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const HeroCTAs = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    max-width: 340px;
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
  color: #3B82F6;
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
   FEATURE CARDS — Clean, bordered, corporate
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
  background: rgba(59, 130, 246, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3B82F6;
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
    top: 40px;
    left: 16%;
    right: 16%;
    height: 2px;
    background: ${({ theme }) => theme.colors['gray-200']};
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
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #3B82F6;
  color: white;
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 64px;
    height: 64px;
    font-size: ${({ theme }) => theme.typography.sizes.xl};
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
    border-color: #3B82F6;
    box-shadow: 0 4px 16px rgba(59, 130, 246, 0.08);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px;
  }
`;

const DiffIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(59, 130, 246, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3B82F6;
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
  padding: 96px 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black} 0%,
    ${({ theme }) => theme.colors['gray-900']} 100%
  );
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  letter-spacing: -0.02em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
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
        "Compress 5-10+ hours of park and resort planning into minutes so the time you invest finally matches the commission you earn on each trip.",
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
    { value: "5-10+ hours", label: "Planning time saved per trip" },
    { value: "Minutes", label: "To build an itinerary" },
    { value: "1 workspace", label: "For every park & resort itinerary" },
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
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Star size={16} />
                {copy.hero.badge}
              </HeroBadge>

              <HeroTitle
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                {copy.hero.h1}
              </HeroTitle>

              <HeroSubtitle
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                ParkPro turns client intake forms into structured, day-by-day
                Disney itineraries in minutes — so you can stop rebuilding
                every trip from scratch and start running your business like
                the professional you are.
              </HeroSubtitle>

              <HeroCTAs
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <Button to="/demo" variant="primary" size="lg">
                  {copy.ctas.start} <ArrowRight size={18} />
                </Button>
                <Button to="/pricing" variant="secondary" size="lg">
                  {copy.ctas.pricing}
                </Button>
              </HeroCTAs>

              <StatsRow
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {stats.map((s, i) => (
                  <StatPill key={i}>
                    <StatValue>{s.value}</StatValue>
                    <StatLabel>{s.label}</StatLabel>
                  </StatPill>
                ))}
              </StatsRow>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* ---- TRUST BAR ---- */}
        <TrustBar variant="light" showSocialProof={true} />

        {/* ---- FEATURES (white) ---- */}
        <LightSection>
          <Container>
            <SectionHeader>
              <SectionLabel {...fadeUp}>Features</SectionLabel>
              <SectionHeading {...fadeUp}>
                Why Travel Agents Choose ParkPro
              </SectionHeading>
              <SectionSub {...fadeUp}>
                Built for agents handling complex park and resort trips who want
                their commissions, workflow, and time to finally make sense together.
              </SectionSub>
            </SectionHeader>

            <FeatureGrid>
              {features.map((f, i) => (
                <FeatureCard
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  viewport={{ once: true }}
                >
                  <FeatureIcon>{f.icon}</FeatureIcon>
                  <FeatureTitle>{f.title}</FeatureTitle>
                  <FeatureDesc>{f.description}</FeatureDesc>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </Container>
        </LightSection>

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
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
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
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
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
              Stop planning like it's 2015.
            </CTATitle>
            <CTASub {...fadeUp}>
              See how ParkPro turns hours of manual Disney planning into a
              repeatable, professional workflow — in a 15-minute demo.
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
