import React from "react";
import theme from '../styles/theme';
import styled from "styled-components";
import { motion } from "framer-motion";
import { Clock, Zap, Users, BarChart3, FileText, Shield } from "lucide-react";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import RelatedPages from "../components/seo/RelatedPages";

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
  background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
  color: white;
  text-align: center;
  padding: 96px 0;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
    min-height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
    pointer-events: none;
  }
`;

const HeroTitle = styled(motion.h1).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 56px;
  font-weight: 700;
  color: white;
  margin-bottom: 24px;
  line-height: 1.1;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 36px;
  }

  @media (max-width: 475px) {
    font-size: 28px;
  }
`;

const HeroSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 48px auto;
  line-height: 1.6;
  font-weight: 400;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
    margin-bottom: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

const HeroCTA = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: relative;
  z-index: 1;
`;

const DemoButton = styled(Button)`
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 40px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    background: linear-gradient(135deg, #1E293B 0%, #334155 100%);
  }
`;

// Section Label & Heading Styles
const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 16px;
`;

const SectionHeading = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 40px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 28px;
  }
`;

const SectionSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 18px;
  color: #6B7280;
  margin-bottom: 48px;
  line-height: 1.6;
  max-width: 700px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

// Light Sections
const WhiteSection = styled(Section)`
  background: #FFFFFF;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const GraySection = styled(Section)`
  background: #F9FAFB;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

// Card Styles
const Card = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transform: translateY(-4px);
  }
`;

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3B82F6;
  margin-bottom: 20px;
  flex-shrink: 0;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 12px;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: #6B7280;
  line-height: 1.6;
  flex-grow: 1;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// How It Works Styles
const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const StepCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  position: relative;
  padding: 32px;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    border-color: #3B82F6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
  }
`;

const StepNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-right: 16px;
    margin-bottom: 0;
  }
`;

const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const StepDetails = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-grow: 1;
  }
`;

const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 12px;
`;

const StepDescription = styled.p`
  font-size: 15px;
  color: #6B7280;
  line-height: 1.6;
`;

// Who It's Built For Styles
const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-top: 48px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const AudienceCard = styled(Card)`
  text-align: center;
`;

const AudienceHeading = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1F2937;
  margin-bottom: 12px;
`;

const AudienceDescription = styled.p`
  font-size: 15px;
  color: #6B7280;
  line-height: 1.6;
`;

// Final CTA Section
const FinalCTASection = styled(Section)`
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
  color: white;
  text-align: center;
  padding: 96px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
    pointer-events: none;
  }
`;

const FinalCTATitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin-bottom: 24px;
  line-height: 1.2;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 28px;
  }
`;

const FinalCTASubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto 32px auto;
  line-height: 1.6;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
    margin-bottom: 28px;
  }
`;

const FinalCTAButton = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: relative;
  z-index: 1;
`;

const TravelAgentSoftware = () => {
  const features = [
    {
      icon: <Zap size={20} />,
      title: "Intake & Questionnaire Automation",
      description: "Collect client preferences via automated intake forms. Transform data into structured trip planning inputs in seconds."
    },
    {
      icon: <FileText size={20} />,
      title: "Rule-Based Itinerary Generation",
      description: "Generate detailed Disney itineraries in minutes using deterministic rules that reflect real-world travel best practices."
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Trip Dashboard & Management",
      description: "Organize all trip details—bookings, notes, client preferences—in a professional dashboard built for Travel Agents."
    },
    {
      icon: <Users size={20} />,
      title: "Client Portal",
      description: "Share itineraries with travelers via a branded portal. Keep clients engaged and informed throughout the planning process."
    },
    {
      icon: <FileText size={20} />,
      title: "Branded Itinerary Output",
      description: "Export polished, professional itineraries in .pptx format. Impress clients with presentation-ready deliverables."
    },
    {
      icon: <Shield size={20} />,
      title: "Scalable Workspace",
      description: "Manage multiple clients and trips seamlessly. ParkPro grows with your agency as you add team members and expand."
    }
  ];

  const howItWorks = [
    {
      number: "1",
      title: "Collect Client Preferences",
      description: "Use automated intake questionnaires to gather traveler preferences, dates, budget, and special interests."
    },
    {
      number: "2",
      title: "Generate Itinerary",
      description: "ParkPro's rules engine builds a structured, detailed itinerary based on client data. Review and customize as needed."
    },
    {
      number: "3",
      title: "Deliver & Manage",
      description: "Export to branded .pptx format or share via client portal. Track changes and manage updates in one place."
    }
  ];

  const audiences = [
    {
      heading: "Solo Travel Agents",
      description: "Save 5–10+ hours per client and take on more bookings without burning out."
    },
    {
      heading: "Travel Agencies",
      description: "Give your team a unified platform to manage clients, itineraries, and workflows at scale."
    },
    {
      heading: "Disney Specialists",
      description: "Leverage deep Disney planning expertise built into every itinerary template and workflow."
    }
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs['travel-agent-software']} schemaType="SoftwareApplication" />
      {/* HERO */}
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Travel Agent Software for Disney Planning
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro automates Disney itinerary generation and trip management for Travel Agents.
            Save 5–10+ hours per client and deliver professional, branded itineraries in minutes.
          </HeroSubtitle>

          <HeroCTA
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DemoButton to="/demo">
              Book a Demo
            </DemoButton>
          </HeroCTA>
        </Container>
      </HeroSection>

      {/* WHAT SETS PARKPRO APART */}
      <WhiteSection>
        <Container>
          <SectionLabel
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why ParkPro
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            What Sets ParkPro Apart
          </SectionHeading>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            ParkPro is built specifically for Travel Agents. Unlike generic travel software, we focus on Disney planning automation,
            professional itinerary delivery, and workflow tools that let you serve more clients without growing your workload.
          </SectionSubtitle>
        </Container>
      </WhiteSection>

      {/* HOW IT WORKS */}
      <GraySection>
        <Container>
          <SectionLabel
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Process
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It Works
          </SectionHeading>

          <StepsContainer>
            {howItWorks.map((step, index) => (
              <StepCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <StepContent>
                  <StepNumber>{step.number}</StepNumber>
                  <StepDetails>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepDetails>
                </StepContent>
              </StepCard>
            ))}
          </StepsContainer>
        </Container>
      </GraySection>

      {/* FEATURES */}
      <WhiteSection>
        <Container>
          <SectionLabel
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Capabilities
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Complete Travel Agent Platform
          </SectionHeading>

          <CardGrid>
            {features.map((feature, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <IconWrapper>{feature.icon}</IconWrapper>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </Card>
            ))}
          </CardGrid>
        </Container>
      </WhiteSection>

      {/* WHO IT'S BUILT FOR */}
      <GraySection>
        <Container>
          <SectionLabel
            as={motion.div}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            For Agents
          </SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Who It's Built For
          </SectionHeading>

          <AudienceGrid>
            {audiences.map((audience, index) => (
              <AudienceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AudienceHeading>{audience.heading}</AudienceHeading>
                <AudienceDescription>{audience.description}</AudienceDescription>
              </AudienceCard>
            ))}
          </AudienceGrid>
        </Container>
      </GraySection>

      <RelatedPages currentSlug="travel-agent-software" />

      {/* FINAL CTA */}
      <FinalCTASection>
        <Container>
          <FinalCTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to streamline your travel agent business?
          </FinalCTATitle>
          <FinalCTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how ParkPro saves you 5–10+ hours per client. Book a personalized demo and we'll walk you through the full workflow.
          </FinalCTASubtitle>

          <FinalCTAButton
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <DemoButton to="/demo">
              Book a Demo
            </DemoButton>
          </FinalCTAButton>
        </Container>
      </FinalCTASection>
    </PageWrapper>
  );
};

export default TravelAgentSoftware;
