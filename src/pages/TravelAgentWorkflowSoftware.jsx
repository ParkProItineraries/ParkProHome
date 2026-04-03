import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { GitBranch, Users, Settings, CheckSquare } from "lucide-react";
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

const TravelAgentWorkflowSoftware = () => {
  const features = [
    {
      icon: GitBranch,
      title: "End-to-End Workflow",
      description: "Unified system from client intake through itinerary generation, customization, and branded delivery—no context switching."
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Centralized dashboard showing all client trips, communication history, and preferences in one place for easy access."
    },
    {
      icon: CheckSquare,
      title: "Repeatable Systems",
      description: "Standardized process that ensures consistency across all trips while remaining flexible enough for custom tweaks."
    },
    {
      icon: Settings,
      title: "Streamlined Customization",
      description: "Intuitive editor lets you refine itineraries, adjust timing, and personalize without needing technical skills."
    }
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs['travel-agent-workflow-software']} schemaType="SoftwareApplication" />

      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Travel Agent Workflow Software for Efficient Operations
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro streamlines your entire travel planning workflow from initial client contact to itinerary delivery. Standardize your process, eliminate manual steps, and scale your business without burnout. Build repeatable workflows that grow with your agency.
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
            What Is Travel Agent Workflow Software?
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Software that automates and standardizes every step of your trip planning process.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Travel agent workflow software transforms how you manage clients and trips. Instead of juggling multiple tools—intake forms in one place, itineraries in another, communication scattered across email—workflow software creates a centralized system where every step of the journey is connected. You collect client preferences, generate itineraries, customize and refine, manage questions, and deliver final products—all within one platform. This consistency reduces errors, ensures no clients fall through the cracks, and makes it easy to train team members on your standard process. Workflow software is especially powerful for agencies planning to scale: it codifies your best practices into a repeatable system.
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
            How ParkPro Streamlines Your Workflow
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            One platform for intake, generation, customization, and delivery.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ParkPro gives you a dedicated workspace for every client trip. The workflow begins with a guided intake form that captures all essential details about your client and their trip preferences. Once submitted, ParkPro generates a structured day-by-day itinerary automatically. You then move into the customization phase using our intuitive editor—adjusting activities, dining reservations, park days, and timing based on your expertise and client feedback. Throughout the process, you have a centralized view of all client communications and preferences, eliminating the need to dig through emails or scattered notes. Finally, when the itinerary is polished, your client accesses it through ParkPro's branded, mobile-friendly client app — a premium experience that showcases your agency's professionalism. The entire journey—from initial inquiry through delivery—happens in one place, with full audit trails so you can revisit and iterate on past trips.
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
            Workflow Benefits
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Scale Your Agency Without Scaling Chaos
          </SectionHeading>
          <SectionSubheading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Standardized systems make it easier to hire, train, and manage growing teams.
          </SectionSubheading>
          <BodyText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Travel agents using ParkPro's workflow benefit from predictable, repeatable processes. Each trip follows the same intake → generate → customize → deliver sequence, which means new team members learn faster and clients always know what to expect. The 5–10+ hour time savings per itinerary lets you scale client volume without working longer hours or hiring additional staff. Workflow software also reduces mistakes because every step is standardized and documented. As your agency grows, your workflow grows with you—you're not building systems from scratch for each new agent or adding chaos with each new location. ParkPro's workflow foundation means you're ready to scale professionally.
          </BodyText>
        </Container>
      </ContentSection>

      <RelatedPages currentSlug="travel-agent-workflow-software" />

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to optimize your workflow?
          </CTATitle>
          <CTAText
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See how ParkPro's end-to-end workflow saves you 5–10+ hours per client. Book a personalized demo and we'll walk you through a complete trip from intake to delivery.
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

export default TravelAgentWorkflowSoftware;
