import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Zap, 
  FileText, 
  Palette, 
  BarChart3, 
  Settings, 
  Rocket,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexCenter, flexColumnCenter } from "../styles/mixins";

const FeaturesWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
`;

const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const FeaturesBadge = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FeaturesTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const FeaturesSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FeatureCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  position: relative;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold};
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${FeatureCard}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureBadge = styled.span`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.md};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const ProcessSection = styled.div`
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  margin: ${({ theme }) => theme.spacing['4xl']} 0;
`;

const ProcessTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const ProcessContent = styled.div``;

const ProcessStep = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  border-left: 4px solid ${({ theme }) => theme.colors.gold};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateX(8px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const ProcessStepNumber = styled.div`
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.black};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${flexCenter}
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProcessStepTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const ProcessStepDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const ProcessVisual = styled.div`
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  min-height: 300px;
  ${flexColumnCenter}
`;

const ProcessVisualIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.gold};
`;

const ProcessVisualText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  opacity: 0.9;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing['4xl']};
  padding: ${({ theme }) => theme.spacing['3xl']};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const CTASubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Features = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Instant Automation",
      description: "Create complete, optimized itineraries in under 30 seconds. Our automated system considers crowd levels, ride wait times, and client preferences.",
      badge: "Most Popular",
      benefits: [
        "30-second generation time",
        "Crowd level optimization",
        "Wait time consideration",
        "Personalized recommendations",
        "Multiple itinerary options"
      ]
    },
    {
      icon: <FileText size={32} />,
      title: "Custom Client Forms",
      description: "Branded intake forms that collect all the details you need. Auto-linked to your account for seamless workflow.",
      benefits: [
        "White-label branding",
        "Customizable questions",
        "Auto-save responses",
        "Mobile-friendly design",
        "Integration with your CRM"
      ]
    },
    {
      icon: <Palette size={32} />,
      title: "Beautiful Itineraries",
      description: "Professional, branded itineraries that clients love. PDF exports, mobile-friendly viewing, and easy sharing.",
      benefits: [
        "Professional templates",
        "PDF export capability",
        "Mobile-optimized viewing",
        "Easy sharing options",
        "Custom branding options"
      ]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Client Dashboard",
      description: "Manage all your trips in one place. View client details, regenerate plans, and track engagement.",
      benefits: [
        "Centralized trip management",
        "Client communication tracking",
        "Plan regeneration tools",
        "Engagement analytics",
        "Bulk operations"
      ]
    },
    {
      icon: <Settings size={32} />,
      title: "Easy Customization",
      description: "Edit any section of the itinerary before sending. Add notes, change times, or modify attractions.",
      benefits: [
        "Drag-and-drop editing",
        "Real-time preview",
        "Version history",
        "Collaborative editing",
        "Template library"
      ]
    },
    {
      icon: <Rocket size={32} />,
      title: "Future-Proof Platform",
      description: "Expanding to Disneyland, Disney Cruises, Universal, and Sandals. One platform for all your travel planning needs.",
      badge: "Coming Soon",
      benefits: [
        "Multi-destination support",
        "Universal Studios integration",
        "Disney Cruise planning",
        "Sandals resort packages",
        "API for custom integrations"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Client Fills Out Form",
      description: "Your client receives a beautiful, branded form asking about their Disney preferences, group size, and must-see attractions."
    },
    {
      number: "2",
      title: "Automation Generates Magic",
      description: "Our automated system analyzes preferences, crowd levels, and wait times to create a perfectly optimized itinerary in seconds."
    },
    {
      number: "3",
      title: "You Review & Customize",
      description: "Review the generated plan, make any adjustments, add personal notes, and ensure it's perfect for your client."
    },
    {
      number: "4",
      title: "Client Receives Magic",
      description: "Your client gets a beautiful, professional itinerary they can view on any device, download as PDF, or share with family."
    }
  ];

  return (
    <FeaturesWrapper>
      <Section>
        <Container>
          <FeaturesHeader>
            <FeaturesBadge>Powerful Features</FeaturesBadge>
            <FeaturesTitle>Everything You Need to Succeed</FeaturesTitle>
            <FeaturesSubtitle>
              Discover the powerful features designed specifically for travel agents to streamline Disney planning and delight clients.
            </FeaturesSubtitle>
          </FeaturesHeader>

          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {feature.badge && <FeatureBadge>{feature.badge}</FeatureBadge>}
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                <FeatureList>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <FeatureListItem key={benefitIndex}>
                      <CheckCircle size={16} />
                      <span>{benefit}</span>
                    </FeatureListItem>
                  ))}
                </FeatureList>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </Section>

      <Section $bg="light">
        <Container>
          <ProcessSection>
            <ProcessTitle>See It In Action</ProcessTitle>
            <ProcessGrid>
              <ProcessContent>
                {processSteps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <ProcessStepNumber>{step.number}</ProcessStepNumber>
                    <ProcessStepTitle>{step.title}</ProcessStepTitle>
                    <ProcessStepDescription>{step.description}</ProcessStepDescription>
                  </ProcessStep>
                ))}
              </ProcessContent>
              <ProcessVisual>
                <ProcessVisualIcon>
                  <ArrowRight size={64} />
                </ProcessVisualIcon>
                <ProcessVisualText>
                  From client intake to final itinerary in under 5 minutes
                </ProcessVisualText>
              </ProcessVisual>
            </ProcessGrid>
          </ProcessSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <CTATitle>Ready to Transform Your Business?</CTATitle>
            <CTASubtitle>
              Join hundreds of travel agents who've already revolutionized their Disney planning process with Park Pro.
            </CTASubtitle>
            <ButtonGroup>
              <Button variant="gold" size="lg" to="/request-access">
                Request Early Access
              </Button>
              <Button variant="outline" size="lg" to="/demo">
                Watch Full Demo
              </Button>
            </ButtonGroup>
          </CTASection>
        </Container>
      </Section>
    </FeaturesWrapper>
  );
};

export default Features; 