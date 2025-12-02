import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FileText, Clock, Zap, ArrowRight } from "lucide-react";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 88px;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
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
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%233B82F6" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
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
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
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
  background: ${({ theme }) => theme.colors.white};
`;

const SectionTitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  text-align: center;
`;

const SectionText = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
  text-align: center;
`;

const CTASection = styled(Section)`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const CTATitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const CTAText = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const TravelAgentItinerarySoftware = () => {
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
            Travel Agent Itinerary Software
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro is itinerary software built specifically for travel agents. Create professional, 
            day-by-day itineraries in minutes instead of hours. Save 5–10+ hours per client with 
            automated itinerary generation that maintains your brand and client experience.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <ContentSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What is Travel Agent Itinerary Software?
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Travel agent itinerary software automates the creation of detailed, day-by-day trip plans 
            for your clients. Instead of manually building itineraries in spreadsheets or documents, 
            software like ParkPro uses rules-based logic to generate structured itineraries from client 
            intake forms, saving hours of repetitive work while ensuring consistency and quality.
          </SectionText>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How ParkPro Approaches Itinerary Software
          </SectionTitle>
          <SectionText
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro starts with a guided client intake form that captures preferences, travel dates, 
            and priorities. Our system then generates a destination-specific, day-by-day itinerary 
            automatically. You refine and customize as needed, then export branded PDFs or slides 
            for your clients. The entire process takes 15–60 minutes instead of 8–12 hours, giving 
            you more time to sell and serve clients.
          </SectionText>
        </Container>
      </ContentSection>

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
            We're inviting a small group of Disney-focused travel agents and agencies into early access. Join travel agents who are saving hours per client with ParkPro's itinerary software.
          </CTAText>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              to="/request-access"
              variant="primary"
              size="lg"
            >
              Request Early Access →
            </Button>
          </motion.div>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default TravelAgentItinerarySoftware;

