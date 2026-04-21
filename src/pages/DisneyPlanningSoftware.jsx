import React from "react";
import theme from '../styles/theme';
import styled from "styled-components";
import { motion } from "framer-motion";
import { Clock, Zap, BarChart3, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
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
  background: linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  position: relative;
  overflow: hidden;
  min-height: 75vh;
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
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
    pointer-events: none;
  }
`;

const HeroTitle = styled(motion.h1).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.1;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const HeroSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.85);
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const SectionLabel = styled.div`
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #F5C249;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const SectionHeading = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: #1F2937;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const SectionSubheading = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: #6B7280;
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const EducationalSection = styled(Section)`
  background: #FFFFFF;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const EducationalText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #6B7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg} auto;

  &:last-child {
    margin-bottom: 0;
  }
`;

const HowItWorksSection = styled(Section)`
  background: #F9FAFB;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-top: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ProcessCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 24px;
  }
`;

const ProcessNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  color: #F5C249;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1;
`;

const ProcessTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: 600;
  color: #1F2937;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.3;
`;

const ProcessDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #6B7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const FeaturesSection = styled(Section)`
  background: #FFFFFF;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const FeatureCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border-color: #D1D5DB;
  }
`;

const FeatureIconWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(245, 194, 73, 0.08);
  color: #F5C249;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: 600;
  color: #1F2937;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: #6B7280;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const ComparisonSection = styled(Section)`
  background: #F9FAFB;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 48px 0;
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ComparisonCard = styled.div`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 32px;
  position: relative;
  transition: all 0.3s ease;

  ${({ $highlight, theme }) => $highlight && `
    border-color: #F5C249;
    border-width: 2px;
    box-shadow: 0 20px 40px rgba(245, 194, 73, 0.15);
  `}

  &:hover {
    ${({ $highlight }) => !$highlight && `box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);`}
  }
`;

const ComparisonTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: 600;
  color: #1F2937;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.3;
`;

const ComparisonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ComparisonItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: #6B7280;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const CTASection = styled(Section)`
  background: linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: 96px 0;

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

const CTATitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const CTASubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: rgba(255, 255, 255, 0.85);
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-weight: 400;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const CTAButtonWrapper = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  position: relative;
  z-index: 1;
`;

const DisneyPlanningSoftware = () => {
  const processSteps = [
    {
      number: "1",
      title: "Client Intake",
      description: "Travel Agents gather trip details: destination, travel dates, party size, preferences, and budget."
    },
    {
      number: "2",
      title: "Itinerary Generation",
      description: "ParkPro's rule-based engine instantly generates a customized day-by-day itinerary with attractions, dining, and timing logic."
    },
    {
      number: "3",
      title: "Deliver & Refine",
      description: "Share via ParkPro's client-facing app. Clients review on any device, agents refine in minutes based on feedback."
    }
  ];

  const features = [
    {
      icon: <Clock size={20} />,
      title: "15 Minutes to Build an Itinerary",
      description: "From intake to final output, ParkPro dramatically cuts planning time compared to manual spreadsheet work."
    },
    {
      icon: <Zap size={20} />,
      title: "Professional Deliverables",
      description: "Deliver polished itineraries through a branded client app that impresses clients and establishes your agency's premium positioning."
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Scale Your Business",
      description: "Handle more clients without scaling your team. Cut itinerary work from 8 hours to 15 minutes and focus on upsells and relationship building."
    },
    {
      icon: <AlertCircle size={20} />,
      title: "Honest, Rule-Based Logic",
      description: "No fabricated data. ParkPro applies proven travel industry rules—Disney park hours, attraction details, dining reservations—not AI guessing."
    }
  ];

  const comparisonData = [
    {
      title: "Manual Planning",
      items: [
        { icon: <AlertCircle size={16} />, text: "10+ hours per itinerary" },
        { icon: <AlertCircle size={16} />, text: "Spreadsheet chaos" },
        { icon: <AlertCircle size={16} />, text: "High inconsistency" },
        { icon: <AlertCircle size={16} />, text: "Hard to scale" }
      ]
    },
    {
      title: "ParkPro",
      highlight: true,
      items: [
        { icon: <CheckCircle2 size={16} />, text: "15 minutes per itinerary" },
        { icon: <CheckCircle2 size={16} />, text: "Structured, professional output" },
        { icon: <CheckCircle2 size={16} />, text: "Consistent logic across all trips" },
        { icon: <CheckCircle2 size={16} />, text: "Built for Travel Agents at scale" }
      ]
    },
    {
      title: "Generic Software",
      items: [
        { icon: <AlertCircle size={16} />, text: "2–4 hours per itinerary" },
        { icon: <AlertCircle size={16} />, text: "One-size-fits-all templates" },
        { icon: <AlertCircle size={16} />, text: "Limited customization" },
        { icon: <AlertCircle size={16} />, text: "Not designed for travel agents" }
      ]
    }
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs['disney-planning-software']} schemaType="SoftwareApplication" />
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Disney Planning Software Built for Travel Agents
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              ParkPro automates itinerary generation for Disney World, Disneyland, Universal, and cruise destinations.
              Turn complex planning into minutes of work. The Salesforce of the travel industry.
            </HeroSubtitle>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                to="/demo"
                variant="primary"
                size="lg"
                style={{
                  background: theme.colors.primary,
                  color: '#0B0B0C',
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginTop: '32px'
                }}
              >
                Book a Demo
                <ArrowRight size={18} />
              </Button>
            </motion.div>
          </HeroContent>
        </Container>
      </HeroSection>

      <EducationalSection>
        <Container>
          <SectionLabel>What Is Disney Planning Software?</SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            The Foundation of Modern Travel Agency Operations
          </SectionHeading>

          <EducationalText
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Disney planning software automates the creation of personalized, day-by-day itineraries for families visiting Walt Disney World, Disneyland, Universal Studios, and cruise destinations. Instead of building itineraries manually in spreadsheets, Travel Agents input client preferences—party size, dates, budget, interests—and the software instantly generates a structured, sequenced plan.
          </EducationalText>

          <EducationalText
            as={motion.p}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            For Travel Agents, this means collapsing Disney planning from 8 hours to 15 minutes, delivering professional outputs that impress, and scaling your business without hiring. ParkPro's rule-based engine applies proven logic: park hours, attraction sequences, dining timing, and reservation management—no guessing, no fabricated data, no AI hallucinations. Just reliable, enterprise-grade tools built for professionals.
          </EducationalText>
        </Container>
      </EducationalSection>

      <HowItWorksSection>
        <Container>
          <SectionLabel>How ParkPro Works</SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Three Steps from Intake to Delivery
          </SectionHeading>

          <ProcessGrid>
            {processSteps.map((step, index) => (
              <ProcessCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProcessNumber>{step.number}</ProcessNumber>
                <ProcessTitle>{step.title}</ProcessTitle>
                <ProcessDescription>{step.description}</ProcessDescription>
              </ProcessCard>
            ))}
          </ProcessGrid>
        </Container>
      </HowItWorksSection>

      <FeaturesSection>
        <Container>
          <SectionLabel>Why Travel Agents Choose ParkPro</SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Enterprise-Grade Tools, Agent-Friendly Workflow
          </SectionHeading>

          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIconWrapper>{feature.icon}</FeatureIconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <ComparisonSection>
        <Container>
          <SectionLabel>ParkPro vs The Alternatives</SectionLabel>
          <SectionHeading
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            The Honest Comparison
          </SectionHeading>

          <ComparisonGrid>
            {comparisonData.map((comparison, index) => (
              <ComparisonCard
                key={index}
                $highlight={comparison.highlight}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ComparisonTitle>{comparison.title}</ComparisonTitle>
                <ComparisonList>
                  {comparison.items.map((item, itemIndex) => (
                    <ComparisonItem key={itemIndex}>
                      {item.icon}
                      <span>{item.text}</span>
                    </ComparisonItem>
                  ))}
                </ComparisonList>
              </ComparisonCard>
            ))}
          </ComparisonGrid>
        </Container>
      </ComparisonSection>

      <RelatedPages currentSlug="disney-planning-software" />

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Planning Workflow?
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See ParkPro in action. Book a 20-minute demo and we'll walk you through a live itinerary using your agency's scenarios.
          </CTASubtitle>

          <CTAButtonWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              to="/demo"
              variant="primary"
              size="lg"
              style={{
                background: theme.colors.primary,
                color: '#0B0B0C',
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Book a Demo
              <ArrowRight size={18} />
            </Button>
          </CTAButtonWrapper>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default DisneyPlanningSoftware;
