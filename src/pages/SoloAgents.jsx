import React from "react";
import theme from '../styles/theme';
import SEO from '../components/seo/SEO';
import { SEOConfigs } from '../components/seo/SEOConfigs';
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Users,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Shield,
  Zap,
  FileText,
  Smartphone,
  Headphones,
  BarChart3,
} from "lucide-react";
import { copy } from "../content/strings";
import { Button } from "../design";
import Container from "../components/layout/Container";

const PageWrapper = styled.div`
  padding-top: 88px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }

  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

// ============================================================================
// Hero Section (dark gradient)
// ============================================================================
const HeroSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0 ${({ theme }) => theme.spacing['2xl']};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black} 0%, ${({ theme }) => theme.colors['gray-900']} 100%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing.xl};
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroBadge = styled(motion.div)`
  background: rgba(59, 130, 246, 0.1);
  color: ${({ theme }) => theme.colors.teal};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(59, 130, 246, 0.3);
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const ButtonRow = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

// ============================================================================
// Section Labels & Headers (shared across all light sections)
// ============================================================================
const SectionLabel = styled(motion.div)`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #3b82f6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const SectionHeading = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['gray-500']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

// ============================================================================
// Before/After Section (light background with bordered cards)
// ============================================================================
const CompareSection = styled.section`
  padding: 96px 0;
  background: #FFFFFF;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const CompareGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const CompareCard = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px;
  }
`;

const CompareLabel = styled.div`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ $type, theme }) => $type === 'before' ? theme.colors.error : theme.colors.teal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CompareTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const CompareList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CompareItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors['gray-500']};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  svg {
    flex-shrink: 0;
    margin-top: 3px;
  }
`;

// ============================================================================
// Features Section (light background)
// ============================================================================
const FeaturesSection = styled.section`
  padding: 96px 0;
  background: #F9FAFB;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const FeatureCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const FeatureCard = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: rgba(59, 130, 246, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px;
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
  color: #3b82f6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  flex: 1;
`;

// ============================================================================
// CTA Section (dark gradient)
// ============================================================================
const CTASection = styled.section`
  padding: 96px 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black} 0%, ${({ theme }) => theme.colors['gray-900']} 100%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const SoloAgents = () => {
  const beforeItems = [
    "8–12 hours researching and building each Disney itinerary",
    "Scattered notes across spreadsheets, emails, and documents",
    "Starting from scratch every time — even for similar trips",
    "Turning down bookings because you're already maxed out",
    "Working nights and weekends to keep up with demand",
  ];

  const afterItems = [
    "Complete itineraries generated in 15–30 minutes",
    "One workspace for every client, trip, and itinerary",
    "Reusable patterns that get faster with every booking",
    "Capacity to take on more clients without more hours",
    "Evenings and weekends back for yourself",
  ];

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Intake-to-Itinerary in Minutes",
      description: "Client fills out a guided form, ParkPro generates a structured day-by-day plan. You refine and deliver — done.",
    },
    {
      icon: <FileText size={24} />,
      title: "Professional, Branded Output",
      description: "Every itinerary looks polished and consistent. Clients view it in a branded, mobile-friendly app.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Trip Dashboard",
      description: "See all your active trips, upcoming deliveries, and client details in one clean workspace.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Client Portal",
      description: "Your clients get a mobile-friendly view of their itinerary they can reference in-park — no app download required.",
    },
    {
      icon: <Headphones size={24} />,
      title: "Email Support",
      description: "Responsive support when you need it. We're here to help you get the most out of ParkPro.",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Infrastructure",
      description: "SSL encryption, Stripe-verified payments, and enterprise-grade hosting on AWS. Your data is protected.",
    },
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs['solo-agents']} schemaType="SoftwareApplication" />

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Users size={14} />
              For Solo Travel Agents
            </HeroBadge>

            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {copy.pages.solo.h1}
            </HeroTitle>

            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {copy.pages.solo.sub}
            </HeroSubtitle>

            <ButtonRow
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="primary" size="lg" to="/demo">
                Book a Demo
                <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="lg" to="/pricing#solo">
                See Solo Pricing
              </Button>
            </ButtonRow>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Before & After Section — unique to Solo Agents (light background) */}
      <CompareSection>
        <Container>
          <SectionHeader>
            <SectionLabel
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Transformation
            </SectionLabel>
            <SectionHeading
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Your Planning, Before and After ParkPro
            </SectionHeading>
          </SectionHeader>

          <CompareGrid>
            <CompareCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <CompareLabel $type="before">Without ParkPro</CompareLabel>
              <CompareTitle>The manual grind</CompareTitle>
              <CompareList>
                {beforeItems.map((item, i) => (
                  <CompareItem key={i}>
                    <Clock size={16} style={{ color: theme.colors.error }} />
                    <span>{item}</span>
                  </CompareItem>
                ))}
              </CompareList>
            </CompareCard>

            <CompareCard
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CompareLabel $type="after">With ParkPro</CompareLabel>
              <CompareTitle>A system that works for you</CompareTitle>
              <CompareList>
                {afterItems.map((item, i) => (
                  <CompareItem key={i}>
                    <CheckCircle size={16} style={{ color: theme.colors.teal }} />
                    <span>{item}</span>
                  </CompareItem>
                ))}
              </CompareList>
            </CompareCard>
          </CompareGrid>
        </Container>
      </CompareSection>

      {/* Features Section (light background) */}
      <FeaturesSection>
        <Container>
          <SectionHeader>
            <SectionLabel
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Features
            </SectionLabel>
            <SectionHeading
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Built for How You Actually Work
            </SectionHeading>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Every feature is designed around the solo agent workflow — no team overhead, no enterprise bloat.
            </SectionSubtitle>
          </SectionHeader>

          <FeatureCardGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeatureCardGrid>
        </Container>
      </FeaturesSection>

      {/* CTA Section (dark gradient) */}
      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to get your time back?
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how ParkPro turns hours of Disney planning into a 15-minute workflow. Book a demo and we'll use your real scenarios.
          </CTASubtitle>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button variant="primary" size="lg" to="/demo">
              Book a Demo
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default SoloAgents;
