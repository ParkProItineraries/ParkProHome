import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Users, Lock, BarChart3, Briefcase } from "lucide-react";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import RelatedPages from "../components/seo/RelatedPages";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 88px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }

  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: 96px 0;
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23F5C249" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const HeroTitle = styled(motion.h1).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.1;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const HeroSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const ContentSection = styled(Section)`
  background: ${({ bgColor }) => bgColor || '#FFFFFF'};
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const SectionLabel = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #3B82F6;
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

const SectionHeading = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1F2937;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  text-align: center;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
`;

const SectionSubheading = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: #6B7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  text-align: center;
`;

const BodyText = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #4B5563;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 850px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg} auto;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const FeaturesGrid = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
  margin-top: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 475px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FeatureCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #3B82F6;
    box-shadow: 0 4px 20px rgba(59, 130, 246, 0.1);
  }
`;

const FeatureIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  svg {
    width: 24px;
    height: 24px;
    color: #3B82F6;
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: #1F2937;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: #6B7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const CTASection = styled(Section)`
  background: #000000;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const CTATitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
`;

const CTAText = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const TravelAgencySoftware = () => {
  const features = [
    {
      icon: Users,
      title: "Multi-Agent Support",
      description: "Add multiple agents to your account with individual seats and itinerary caps. Each agent gets full access to ParkPro's tools."
    },
    {
      icon: Briefcase,
      title: "Agency Branding",
      description: "Ensure all itineraries reflect your agency's colors, logos, and professional standards—every deliverable strengthens your brand."
    },
    {
      icon: Lock,
      title: "Admin Controls",
      description: "Manage team access, monitor usage, view agency-wide analytics, and maintain quality standards across all agents."
    },
    {
      icon: BarChart3,
      title: "Usage Analytics",
      description: "Track itinerary creation, agent activity, and performance metrics so you can make data-driven decisions about team growth."
    }
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs['travel-agency-software']} schemaType="SoftwareApplication" />

      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Travel Agency Software for Multi-Agent Teams
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro is dedicated software for travel agencies managing multiple agents. Support your team with per-seat subscriptions, enforce agency branding standards, and maintain operational control while your agents work efficiently. Scale your agency without scaling chaos.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection bgColor="#F9FAFB">
        <Container>
          <SectionLabel
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Educational Overview
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            What Is Travel Agency Software?
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Enterprise software designed for multi-agent agencies to standardize and scale operations.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Travel agency software is purpose-built for travel companies with multiple agents. Unlike consumer-facing or single-user tools, agency software provides per-seat licensing, team management features, and administrative controls. Good agency software ensures that each agent has access to the same tools and templates, so clients get consistent, professional experiences regardless of which agent handles their trip. It also allows agencies to enforce branding standards, monitor team productivity, and scale smoothly as they hire new agents. With agency software, growing from 3 agents to 10 agents doesn't require rebuilding your entire operational system—you just add new seats and manage growth through one platform.
          </BodyText>
        </Container>
      </ContentSection>

      <ContentSection bgColor="#FFFFFF">
        <Container>
          <SectionLabel
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How ParkPro Works
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            How ParkPro Supports Growing Agencies
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Purpose-built for multi-agent teams and enterprise-level operations.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ParkPro was designed from the ground up to support multi-agent travel agencies. You purchase seats for each agent on your team, and each agent gets full access to ParkPro's itinerary generation, customization, and delivery features. From the admin dashboard, you can create shared templates, enforce agency branding across all itineraries, manage user access, and monitor team productivity and usage. Each agent works independently while maintaining company standards—no inconsistency, no brand dilution. As you grow and hire new agents, scaling is as simple as adding new seats to your account. ParkPro handles all the backend complexity so you can focus on hiring great people and building your business. Plus, you get visibility into team performance with real-time analytics showing which agents are generating itineraries, how many trips are in progress, and where bottlenecks might exist.
          </BodyText>

          <FeaturesGrid
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <FeatureCard
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 * idx }}
                >
                  <FeatureIconWrapper>
                    <IconComponent />
                  </FeatureIconWrapper>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureText>{feature.description}</FeatureText>
                </FeatureCard>
              );
            })}
          </FeaturesGrid>
        </Container>
      </ContentSection>

      <ContentSection bgColor="#F9FAFB">
        <Container>
          <SectionLabel
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Agency Benefits
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Grow Your Agency Without Compromise
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Support more agents, more trips, and more revenue while maintaining brand integrity.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Travel agencies using ParkPro gain the ability to scale confidently. When each agent saves 5–10+ hours per itinerary, your team's throughput multiplies—you can take on 50%, 100%, or more client trips per month with the same headcount. New agents onboard faster because they're using a standardized tool instead of reinventing processes. Agency administrators maintain quality and brand consistency through centralized controls, eliminating rogue agents from producing off-brand deliverables. And because every trip is tracked and visible in the platform, you can identify high-performers, spot training opportunities, and forecast growth realistically. ParkPro transforms itinerary software from a single-user convenience into a true agency multiplier.
          </BodyText>
        </Container>
      </ContentSection>

      <RelatedPages currentSlug="travel-agency-software" />

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to scale your agency?
          </CTATitle>
          <CTAText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See how ParkPro's multi-agent platform supports growing travel agencies. Book a personalized demo and we'll show you admin controls, team management, and how your agency could scale with ParkPro.
          </CTAText>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              to="/demo"
              variant="primary"
              size="lg"
            >
              Book a Demo
            </Button>
          </motion.div>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default TravelAgencySoftware;
