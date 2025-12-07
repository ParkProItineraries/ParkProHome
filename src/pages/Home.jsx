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
  Play,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexColumnCenter } from "../styles/mixins";
import Testimonials from "../components/home/Testimonials";
import TrustBar from "../components/TrustBar";
import { copy } from "../content/strings";

// Enhanced Home Page Wrapper
const HomeWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontBody};
  overflow-x: hidden;
  padding-top: 88px; // Account for fixed navbar

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }

  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

// Hero Section
const HeroSection = styled.section`
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black} 0%,
    ${({ theme }) => theme.colors["gray-900"]} 100%
  );
  position: relative;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
    min-height: auto;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  width: 100%;
  ${flexColumnCenter}
  padding: 0 ${({ theme }) => theme.spacing.md};

  @media (max-width: 475px) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const Badge = styled(motion.div)`
  background: rgba(201, 162, 39, 0.1);
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 162, 39, 0.3);

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    padding: ${({ theme }) => theme.spacing.xs}
      ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes["5xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  .gradient-text {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.gold},
      ${({ theme }) => theme.colors["gold-muted"]}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  font-weight: ${({ theme }) => theme.typography.weights.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
    width: 100%;

    > * {
      width: 100%;
      max-width: 320px;
    }
  }
`;

const SocialProof = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 475px) {
    gap: ${({ theme }) => theme.spacing.xs};
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

const StatItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${({ theme }) => theme.radius.md};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: ${({ theme }) => theme.transitions.normal};
  min-width: 180px;
  min-height: 80px;
  flex: 1;
  max-width: 260px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-width: 140px;
    max-width: 100%;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    min-width: 120px;
    min-height: 70px;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.spacing.xs} 0;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black},
    ${({ theme }) => theme.colors["gray-900"]}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors["gray-600"]};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.4;
  margin: 0;

  @media (max-width: 475px) {
    font-size: 0.6875rem;
    letter-spacing: 0.03em;
  }
`;

// Features Section
const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  background: ${({ $alternate }) => ($alternate ? "#f9fafb" : "white")};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["2xl"]} 0;
  }

  @media (max-width: 475px) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors["gray-600"]};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    max-width: 100%;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

// Feature Card Components
const FeatureCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const FeatureCardContent = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const FeatureIconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-muted"]}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
  flex-shrink: 0;

  svg {
    width: 28px;
    height: 28px;
    display: block;
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors["gray-600"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin: 0;
  flex: 1;
  font-size: ${({ theme }) => theme.typography.sizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.xs};
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.black} 0%,
    ${({ theme }) => theme.colors["gray-900"]} 100%
  );
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["2xl"]} 0;
  }

  @media (max-width: 475px) {
    padding: ${({ theme }) => theme.spacing.xl} 0;
  }
`;

const CTAContent = styled.div`
  ${flexColumnCenter}
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes["5xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const CTAButtonsWrapper = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    width: 100%;

    > * {
      width: 100%;
      max-width: 320px;
    }
  }
`;

const ConciergCard = styled(Card)`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }

  @media (max-width: 475px) {
    padding: ${({ theme }) => theme.spacing.lg};
  }
`;

const ConciergeTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const ConciergeText = styled.p`
  color: ${({ theme }) => theme.colors["gray-600"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin: 0;
  font-size: ${({ theme }) => theme.typography.sizes.base};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const Home = () => {
  const features = [
    {
      icon: <Clock size={32} />,
      title: "Stop rebuilding every park day from scratch",
      description:
        "Turn messy, manual planning into a repeatable system. ParkPro structures each day across your park and resort trips so you’re never staring at a blank page again.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Make your commission feel worth the work",
      description:
        "Compress 5–10+ hours of park and resort planning into minutes so the time you invest finally matches the commission you earn on each trip.",
    },
    {
      icon: <Users size={32} />,
      title: "Look as professional behind the scenes as you do to clients",
      description:
        "Deliver clean, easy-to-read park-day plans while ParkPro keeps your workflow organized, consistent, and under control.",
    },
    {
      icon: <Shield size={32} />,
      title: "Built around how complex parks actually work",
      description:
        "Baked-in patterns for park flow, transportation, and timing at destinations like Walt Disney World today, with Disneyland and Universal support on the way.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "Designed for busy, growing agents and agencies",
      description:
        "A workspace built for more clients, more agents, and more trips—without more late nights, weekend marathons, or burnout.",
    },
    {
      icon: <Star size={32} />,
      title: "From overwhelmed planner to confident travel CEO",
      description:
        "Shift from reactive, last-minute park planning to a calm, controlled system that lets you run your business like the professional you are.",
    },
  ];

  const stats = [
    { number: "5–10+ hours", label: "Planning time saved per trip" },
    { number: "2–3x", label: "More trips with same hours" },
    { number: "1 workspace", label: "For every park & resort itinerary" },
  ];

  // SEO Schema Markup for better Google visibility
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ParkPro",
    url: "https://parkproit.com",
    logo: "https://parkproit.com/assets/logo.png",
    description:
      "ParkPro is destination-smart itinerary and workflow software for travel agents who plan complex park and resort vacations, including Walt Disney World and beyond. It helps overworked agents turn client intake forms into structured, day-by-day plans in minutes instead of hours.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-260-312-0506",
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
      description:
        "Subscription pricing available for solo agents and agencies",
    },
    description:
      "ParkPro is a destination-smart planning engine for travel agents who build park and resort itineraries. It reduces manual planning time, brings structure to every trip, and lets agents scale bookings without scaling burnout.",
  };

  return (
    <HomeWrapper>
      <SEO {...SEOConfigs.home} schemaType="SoftwareApplication" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
      </Helmet>

      <main
        role="main"
        aria-label="ParkPro homepage content for travel agents who plan park and resort vacations"
      >
        {/* Hero Section */}
        <HeroSection
          role="banner"
          aria-label="ParkPro - Destination-smart park and resort planning for overworked but all-in travel agents"
        >
          <Container>
            <HeroContent>
              <Badge
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                role="status"
                aria-label="Built with park and resort-focused travel agents"
              >
                <Star size={16} aria-hidden="true" />
                {copy.hero.badge}
              </Badge>

              <Title
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {copy.hero.h1}
              </Title>

              <Subtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                You don’t have a time problem — you have a system problem.
                ParkPro was built for the advisor who gives everything to their
                clients, but is tired of rebuilding every park and resort
                itinerary from scratch and feeling behind.
              </Subtitle>

              <CTAButtons
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                role="group"
                aria-label="Call to action buttons"
              >
                <Button
                  to="/request-access"
                  variant="primary"
                  size="lg"
                  aria-label="Join early access program for travel agents"
                >
                  {copy.ctas.start}
                  <ArrowRight size={20} />
                </Button>
                <Button
                  to="/demo"
                  variant="secondary"
                  size="lg"
                  aria-label="See how ParkPro works - Watch demo"
                >
                  <Play size={20} />
                  {copy.ctas.demo}
                </Button>
              </CTAButtons>

              <SocialProof
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                role="group"
                aria-label="Key statistics and benefits"
              >
                {stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    role="article"
                    aria-label={`${stat.number} ${stat.label}`}
                  >
                    <StatNumber aria-label={stat.number}>
                      {stat.number}
                    </StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                ))}
              </SocialProof>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Trust Bar */}
        <TrustBar variant="light" showSocialProof={true} />

        {/* Features Section */}
        <FeaturesSection $alternate={false}>
          <Container>
            <SectionHeader>
              <SectionTitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Why Travel Advisors Choose ParkPro
              </SectionTitle>
              <SectionSubtitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                If you’ve ever thought “I love my clients, but this shouldn’t
                take this long,” ParkPro is your missing system. It was built
                for agents handling complex park and resort trips who want their
                commissions, workflow, and time to finally make sense together.
              </SectionSubtitle>
            </SectionHeader>

            <CardGrid columns={3} gap={4}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ height: "100%", display: "flex" }}
                >
                  <FeatureCard variant="elevated" hover>
                    <FeatureCardContent>
                      <FeatureIconWrapper>{feature.icon}</FeatureIconWrapper>
                      <FeatureTitle>{feature.title}</FeatureTitle>
                      <FeatureDescription>
                        {feature.description}
                      </FeatureDescription>
                    </FeatureCardContent>
                  </FeatureCard>
                </motion.div>
              ))}
            </CardGrid>
          </Container>
        </FeaturesSection>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Concierge Section */}
        <FeaturesSection
          $alternate={true}
          style={{ paddingTop: theme.spacing["2xl"] }}
        >
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ConciergCard variant="elevated">
                <Star
                  size={32}
                  style={{
                    color: theme.colors.gold,
                    marginBottom: theme.spacing.md,
                  }}
                />
                <ConciergeTitle>
                  Concierge-Level Park & Resort Itineraries
                </ConciergeTitle>
                <ConciergeText>{copy.trust.concierge}</ConciergeText>
              </ConciergCard>
            </motion.div>
          </Container>
        </FeaturesSection>

        <CTASection>
          <Container>
            <CTAContent>
              <CTATitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready for your planning to finally feel in control?
              </CTATitle>

              <CTASubtitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                If you’re the advisor who cares deeply but feels buried in park
                and resort planning, ParkPro was built for you. Join early
                access to test a destination-smart planning engine that turns
                long, manual days into calm, repeatable workflows.
              </CTASubtitle>

              <CTAButtonsWrapper
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button to="/request-access" variant="primary" size="lg">
                  Join Early Access →
                </Button>
              </CTAButtonsWrapper>
            </CTAContent>
          </Container>
        </CTASection>
      </main>
    </HomeWrapper>
  );
};

export default Home;