import React from "react";
import theme from '../styles/theme';
import SEO from '../components/seo/SEO';
import { SEOConfigs } from '../components/seo/SEOConfigs';
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Crown,
  Shield,
  Users,
  ArrowRight,
  Lock,
  Server,
  Headphones,
  Settings,
  BarChart3,
  CheckCircle,
  Database,
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

// Hero with gold accent for enterprise premium feel
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5C249' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  color: ${({ theme }) => theme.colors.gold};
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

// Section Label (blue uppercase 13px)
const SectionLabel = styled(motion.span)`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors['blue-600']};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

// Section Header
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

// Section Title (4xl, text-primary)
const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

// Section Subtitle (lg, gray-500)
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

// Security & Compliance Section (light background)
const SecuritySection = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const SecurityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const SecurityCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: flex-start;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  }

  @media (max-width: 475px) {
    flex-direction: column;
    padding: 24px;
  }
`;

const SecurityIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(245, 194, 73, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gold};
  flex-shrink: 0;
`;

const SecurityContent = styled.div`
  flex: 1;
`;

const SecurityTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors['text-primary']};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const SecurityDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  margin: 0;
`;

// Features Section (light background, alternating)
const FeaturesSection = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.colors['gray-50']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: 32px;
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    border-color: rgba(245, 194, 73, 0.3);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px;
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
  color: ${({ theme }) => theme.colors['blue-600']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
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
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  flex: 1;
  margin: 0;
`;

// CTA Section (dark gradient)
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5C249' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 750px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
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

const Enterprise = () => {
  const securityItems = [
    {
      icon: <Lock size={24} />,
      title: "SSL Encryption",
      description: "All data is encrypted in transit with 256-bit TLS. Your agency's client data never travels unprotected.",
    },
    {
      icon: <Server size={24} />,
      title: "AWS Infrastructure",
      description: "Hosted on Amazon Web Services with automatic scaling and redundancy. Built for reliability and performance.",
    },
    {
      icon: <Shield size={24} />,
      title: "Security-First Architecture",
      description: "All client data is encrypted at rest and in transit. Role-based access controls and secure authentication protect your agency's data.",
    },
    {
      icon: <Database size={24} />,
      title: "Data Isolation",
      description: "Enterprise accounts include dedicated data environments. Your agency's data is logically separated and access-controlled.",
    },
  ];

  const features = [
    {
      icon: <Users size={24} />,
      title: "Unlimited Agent Seats",
      description: "Add your entire team with no per-seat caps. Enterprise plans are designed for organizations of any size.",
    },
    {
      icon: <Headphones size={24} />,
      title: "Dedicated Account Manager",
      description: "A named point of contact who knows your agency, your workflow, and your goals. Not a support queue.",
    },
    {
      icon: <Settings size={24} />,
      title: "Custom Integrations",
      description: "API access for connecting ParkPro to your existing CRM, booking system, or internal tools.",
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Advanced Reporting",
      description: "Agency-wide analytics on itinerary volume, agent productivity, and planning efficiency across your organization.",
    },
    {
      icon: <Crown size={24} />,
      title: "White-Label Everything",
      description: "Full branding control across itineraries and the client-facing app. Your brand, front and center.",
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Priority Infrastructure",
      description: "Enterprise accounts run on dedicated resources with priority processing and guaranteed uptime.",
    },
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs.enterprise} schemaType="SoftwareApplication" />

      <HeroSection>
        <Container>
          <HeroContent>
            <HeroBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Crown size={14} />
              Enterprise Solution
            </HeroBadge>

            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {copy.pages.enterprise.h1}
            </HeroTitle>

            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {copy.pages.enterprise.sub}
            </HeroSubtitle>

            <ButtonRow
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button variant="primary" size="lg" to="/contact">
                Contact Sales
                <ArrowRight size={20} />
              </Button>
              <Button variant="secondary" size="lg" to="/demo">
                Book a Demo
              </Button>
            </ButtonRow>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Security & Compliance — unique to Enterprise */}
      <SecuritySection>
        <Container>
          <SectionHeader>
            <SectionLabel
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Security & Compliance
            </SectionLabel>

            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Enterprise-Grade Security
            </SectionTitle>

            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Built on enterprise-grade infrastructure with the security controls your organization requires.
            </SectionSubtitle>
          </SectionHeader>

          <SecurityGrid>
            {securityItems.map((item, index) => (
              <SecurityCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SecurityIcon>{item.icon}</SecurityIcon>
                <SecurityContent>
                  <SecurityTitle>{item.title}</SecurityTitle>
                  <SecurityDescription>{item.description}</SecurityDescription>
                </SecurityContent>
              </SecurityCard>
            ))}
          </SecurityGrid>
        </Container>
      </SecuritySection>

      {/* Enterprise Features */}
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

            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Enterprise-Grade Features
            </SectionTitle>

            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything in the Agency plan, plus dedicated resources and custom capabilities for large organizations.
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
                <FeatureTitle>{feature.title}</FeatureTitle>
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
              Let's talk about your agency's needs.
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Enterprise plans are tailored to your organization. Schedule a call and we'll scope a solution that fits your team, your workflow, and your compliance requirements.
            </CTASubtitle>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/contact">
                Contact Sales
                <ArrowRight size={20} />
              </Button>
            </motion.div>
          </CTAContent>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default Enterprise;
