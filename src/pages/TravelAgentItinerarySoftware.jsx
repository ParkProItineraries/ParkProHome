import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FileText, Clock, Zap, CheckCircle, BarChart3, Palette } from "lucide-react";
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

const TravelAgentItinerarySoftware = () => {
  const features = [
    {
      icon: FileText,
      title: "Automated Intake Forms",
      description: "Guided client questionnaires capture preferences, dates, and priorities—no back-and-forth emails needed."
    },
    {
      icon: Zap,
      title: "Rule-Based Generation",
      description: "Our deterministic engine creates day-by-day itineraries in minutes using proven travel planning logic."
    },
    {
      icon: Palette,
      title: "Agency Branding",
      description: "Export branded PDFs and slide decks that reflect your agency's colors, fonts, and professional standards."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Convert 8–12 hours of manual planning into 15–60 minutes of guided generation and refinement."
    }
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs['travel-agent-itinerary-software']} schemaType="SoftwareApplication" />

      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Travel Agent Itinerary Software Built for Your Workflow
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro is dedicated itinerary software for travel agents who want to automate their planning process. Create professional, destination-specific itineraries in minutes instead of hours. Save 5–10+ hours per client while maintaining your brand and delivering the premium experience your clients expect.
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
            What Is Travel Agent Itinerary Software?
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized software that automates the creation of day-by-day trip plans for your clients.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Travel agent itinerary software replaces manual spreadsheets and documents with a structured, rules-based system for building detailed trip plans. Instead of spending hours assembling flight times, park hours, dining recommendations, and activity schedules, you collect client preferences through a guided intake form and let the software generate a complete itinerary. This approach ensures consistency, reduces errors, and dramatically cuts down on repetitive work. The software maintains your agency's branding and allows customization, so every deliverable feels premium and professional.
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
            How ParkPro Transforms Itinerary Planning
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From intake to delivery in minutes, powered by intelligent automation.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ParkPro streamlines the entire itinerary creation process. First, you send your client a guided intake form that captures travel dates, party composition, preferences, and priorities—without requiring lengthy back-and-forth conversations. Once submitted, ParkPro's rules-based engine generates a complete, day-by-day itinerary tailored to their destination and travel dates. You then review and customize the output using our intuitive editor, adjusting activities, dining, and timing as needed. Finally, you export a branded PDF or interactive slide deck that showcases your agency's professionalism. What traditionally took 8–12 hours now takes 15–60 minutes, freeing you to focus on selling, upselling, and building stronger client relationships.
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
            Key Benefits
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Why Travel Agents Choose ParkPro
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tangible efficiency gains and better client outcomes.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Travel agents using ParkPro report dramatic time savings—typically 5–10+ hours per client—allowing them to handle more trips without scaling staff. The rule-based engine ensures every itinerary follows travel industry best practices, while customization options let you add personal touches that reflect your expertise. Branded output reinforces your agency's premium positioning, and the consistent structure means clients know exactly what they're getting. By removing the manual drudgery of itinerary assembly, ParkPro lets you spend more time on high-value activities: client consultation, upselling experiences, and building loyalty.
          </BodyText>
        </Container>
      </ContentSection>

      <RelatedPages currentSlug="travel-agent-itinerary-software" />

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to transform your itinerary process?
          </CTATitle>
          <CTAText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See ParkPro in action. Book a personalized demo and we'll walk you through a live workflow using real travel agent scenarios and show exactly how you'll save time on your next client itinerary.
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

export default TravelAgentItinerarySoftware;
