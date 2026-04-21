import React from "react";
import theme from '../styles/theme';
import SEO from '../components/seo/SEO';
import { SEOConfigs } from '../components/seo/SEOConfigs';
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  CheckCircle,
  ArrowRight,
  Shield,
  Settings,
  Palette,
  Headphones,
  BarChart3,
  UserPlus,
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

// Hero
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
  background: rgba(245, 194, 73, 0.1);
  color: ${({ theme }) => theme.colors.teal};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border: 1px solid rgba(245, 194, 73, 0.3);
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

// Team Impact Section (unique to Agencies) — Light background
const ImpactSection = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 48px 0;
  }
`;

const SectionLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.blue};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};

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
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ImpactCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  box-shadow: none;
  transition: ${({ theme }) => theme.transitions.normal};
  text-align: center;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  }
`;

const ImpactNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const ImpactLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['text-primary']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ImpactContext = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

// Features Section — Light background
const FeaturesSection = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors['gray-50']};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 48px 0;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  box-shadow: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  }
`;

const FeatureIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(245, 194, 73, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  flex: 1;
`;

const ComingSoonBadge = styled.span`
  display: inline-flex;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.radius.full};
  margin-left: ${({ theme }) => theme.spacing.xs};
  white-space: nowrap;
`;

// CTA Section — Dark
const CTASection = styled.section`
  padding: 96px 0;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 48px 0;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 700px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const Agencies = () => {
  const impactMetrics = [
    {
      number: "8 hrs → 15 min",
      label: "Per agent, per itinerary",
      context: "Multiply that across your entire team and every active booking.",
    },
    {
      number: "Minutes",
      label: "From intake to itinerary",
      context: "Every agent on your team gets the same fast, consistent workflow.",
    },
    {
      number: "1 Platform",
      label: "For your entire agency",
      context: "Clients, trips, agents, and itineraries — all in one workspace.",
    },
  ];

  const features = [
    {
      icon: <Users size={24} />,
      title: "Per-Agent Subscriptions",
      description: "Each agent on your team gets their own seat with individual login, trip history, and workspace. Add or remove agents as your team grows.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Agency Dashboard",
      comingSoon: true,
      description: "A single view of every trip, agent, and active booking across your agency. Know where every itinerary stands at a glance.",
    },
    {
      icon: <Palette size={24} />,
      title: "Agency Branding",
      description: "White-label every itinerary with your agency's logo and branding. Your clients see your brand, not ours.",
    },
    {
      icon: <Settings size={24} />,
      title: "Admin Controls",
      description: "Manage agent access, permissions, and billing from one admin panel. Centralized control without the complexity.",
    },
    {
      icon: <Headphones size={24} />,
      title: "Priority Support",
      description: "Agency plans include priority email support with faster response times and dedicated onboarding assistance.",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Infrastructure",
      description: "SSL encryption, Stripe billing, and AWS hosting. Your agency's data is protected with enterprise-grade security.",
    },
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs.agencies} schemaType="SoftwareApplication" />

      <HeroSection>
        <Container>
          <HeroContent>
            <HeroBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Building2 size={14} />
              For Travel Agencies
            </HeroBadge>

            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {copy.pages.agencies.h1}
            </HeroTitle>

            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {copy.pages.agencies.sub}
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
              <Button variant="secondary" size="lg" to="/pricing#agency">
                See Agency Pricing
              </Button>
            </ButtonRow>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Team Impact Metrics — unique to Agencies */}
      <ImpactSection>
        <Container>
          <SectionHeader>
            <SectionLabel>Team-Wide Impact</SectionLabel>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              The Power of Scale
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              When every agent on your team saves hours per client, the math adds up fast.
            </SectionSubtitle>
          </SectionHeader>

          <ImpactGrid>
            {impactMetrics.map((metric, index) => (
              <ImpactCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ImpactNumber>{metric.number}</ImpactNumber>
                <ImpactLabel>{metric.label}</ImpactLabel>
                <ImpactContext>{metric.context}</ImpactContext>
              </ImpactCard>
            ))}
          </ImpactGrid>
        </Container>
      </ImpactSection>

      {/* Agency Features */}
      <FeaturesSection>
        <Container>
          <SectionHeader>
            <SectionLabel>Core Capabilities</SectionLabel>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Built for Teams, Not Just Individuals
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything your agents need to plan faster, plus the admin tools you need to run a tight operation.
            </SectionSubtitle>
          </SectionHeader>

          <FeatureGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>
                  {feature.title}
                  {feature.comingSoon && <ComingSoonBadge>Coming Soon</ComingSoonBadge>}
                </FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Container>
      </FeaturesSection>

      {/* CTA */}
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to scale your agency?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Book a demo and we'll walk your team through a live planning workflow using your agency's real Disney scenarios.
            </CTASubtitle>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/demo">
                Book a Demo
                <ArrowRight size={20} />
              </Button>
            </motion.div>
          </CTAContent>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default Agencies;
