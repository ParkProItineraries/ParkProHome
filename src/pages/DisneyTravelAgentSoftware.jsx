import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MapPin, Zap, Utensils, Navigation } from "lucide-react";
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

const DisneyTravelAgentSoftware = () => {
  const features = [
    {
      icon: Navigation,
      title: "Lightning Lane Optimization",
      description: "Build itineraries around Lightning Lane windows, recommended park touring sequences, and optimal walk times between attractions."
    },
    {
      icon: MapPin,
      title: "Multi-Park Expertise",
      description: "Specialized logic for Disney World and Disneyland parks, including park hours, transportation, and destination-specific touring strategies."
    },
    {
      icon: Utensils,
      title: "Dining Integration",
      description: "Recommend dining options matched to your guests' party size, preferences, and budget. Maintain balance across all four parks."
    },
    {
      icon: Zap,
      title: "Destination Bundles",
      description: "Pre-built Disney World and Disneyland templates with more destinations coming soon: Universal, cruises, and beyond."
    }
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs['disney-travel-agent-software']} schemaType="SoftwareApplication" />

      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Disney Travel Agent Software for Specialized Planning
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro is dedicated software for travel agents who specialize in Disney vacations. Automate your Disney planning workflow, master park logistics and touring strategies, and deliver itineraries that showcase your expertise. Save 5–10+ hours per client while building your Disney-focused brand.
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
            What Is Disney Travel Agent Software?
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized software built for agents who plan Disney vacation experiences.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Disney travel agent software is purpose-built to handle the unique complexities of Disney vacation planning. Unlike generic itinerary tools, Disney-specific software understands park hours, attraction wait times, Lightning Lane strategy, dining reservation windows, and optimal transportation between parks. It knows that a four-day Disney World itinerary requires balancing park days, rest time, and character dining reservations—things generic software can't prioritize. Good Disney software generates day-by-day plans that account for touring efficiency, crowd patterns, and client preferences, saving agents 8–12 hours per itinerary while ensuring guest satisfaction.
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
            How ParkPro Masters Disney Planning
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Purpose-built intelligence for Disney World, Disneyland, and more destinations coming soon.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ParkPro starts with Disney-specific intake questions: Which parks? Which resort? Party size and composition? Adults who want thrill rides or families with small children? From these inputs, ParkPro's rules-based engine generates day-by-day itineraries that optimize touring sequences, schedule Lightning Lane windows strategically, recommend dining options balanced across parks, and account for park hours and transportation times. The itinerary respects your guests' energy levels and interests while maximizing park time efficiency. You review and customize in our editor—swapping attractions, adjusting dining reservations, or tweaking times—then share a polished itinerary through ParkPro's branded client app that positions your agency as the Disney expert. Full itineraries that would take 10+ hours to build manually are ready in minutes.
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
            Why Disney Specialists Choose ParkPro
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The Disney Agent Advantage
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Build your reputation as the local Disney expert.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Disney-focused travel agents using ParkPro reclaim 5–10+ hours per client, allowing them to take on more bookings without burnout. The software's specialized knowledge means every itinerary reflects current park operations, Lightning Lane windows, and best practices that only a Disney expert would know. Clients see the depth of your planning and expertise, building trust and repeat business. ParkPro's destination bundles give you a head start on Disney World and Disneyland itineraries, with Universal, cruises, and other premium destinations launching soon. Scale your Disney-focused business by automating the repetitive work while your expertise drives the customization and client experience.
          </BodyText>
        </Container>
      </ContentSection>

      <RelatedPages currentSlug="disney-travel-agent-software" />

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to automate your Disney planning?
          </CTATitle>
          <CTAText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See ParkPro generate a complete Disney itinerary in minutes. Book a personalized demo and we'll walk you through a live Disney World or Disneyland workflow tailored to your agency's approach.
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

export default DisneyTravelAgentSoftware;
