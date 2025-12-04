import React from "react";
import styled from "styled-components";
import SEO from '../components/seo/SEO';
import { SEOConfigs } from '../components/seo/SEOConfigs';
import { motion } from "framer-motion";
import { 
  Users, 
  Building2, 
  Crown, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { copy } from "../content/strings";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexCenter } from "../styles/mixins";

// Enhanced Solutions Page with Target Audience Focus
const SolutionsWrapper = styled.div`
  padding-top: 88px; /* Account for fixed navbar */
  background: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }
  
  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

const SolutionsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const SolutionsBadge = styled(motion.div)`
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

const SolutionsTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
  
  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
`;

const SolutionsSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

// Solution Cards
const SolutionCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 2px solid ${({ theme }) => theme.colors['border-light']};
  position: relative;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-4px);
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

const SolutionIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${SolutionCard}:hover & {
    transform: scale(1.05);
  }
`;

const SolutionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
`;

const SolutionDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

const SolutionFeatures = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex: 1;
`;

const FeaturesHeading = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const SolutionStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.xs};
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.md};
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors['text-secondary']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
`;

const SolutionButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
`;

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;


const Solutions = () => {
  const solutions = [
    {
      icon: <Users size={32} />,
      title: "For Solo Disney Travel Agents",
      description: "Built for independent Disney-focused agents who want to handle more trips without adding more late nights.",
      features: [
        "Turn detailed Disney intake forms into day-by-day itineraries in minutes",
        "Branded PDF or slide exports you can send straight to clients",
        "Simple workspace to see which trips still need itineraries",
        "Done-with-you onboarding during early access",
        "Email support from the ParkPro team"
      ],
      stats: [
        { number: "5–10+ hrs", label: "Planning time saved per trip" },
        { number: "More trips", label: "Handled per agent, same hours" }
      ],
      cta: "Start with Solo",
      href: "/pricing#solo"
    },
    {
      icon: <Building2 size={32} />,
      title: "For Disney-Focused Agencies",
      description: "Ideal for small to mid-size agencies that want one consistent way every agent plans Disney trips.",
      features: [
        "Shared view of every Disney trip your agents are working on",
        "Standardized workflows so new and senior agents follow the same playbook",
        "Branded itineraries that look consistent across your entire team",
        "Support for multi-seat plans and itinerary limits by tier",
        "Guided onboarding for your first agents on ParkPro"
      ],
      stats: [
        { number: "1 workflow", label: "For every Disney trip" },
        { number: "Faster ramp", label: "For new or part-time agents" }
      ],
      cta: "Explore Agency Plans",
      href: "/pricing#agency"
    },
    {
      icon: <Crown size={32} />,
      title: "For Large & Enterprise Agencies",
      description: "For larger agencies that want to shape ParkPro's roadmap, explore higher itinerary volumes, and plan for integrations and API access.",
      features: [
        "Custom seat and itinerary packages for high-volume teams",
        "Early input into enterprise features like CRM, commissions, and reporting",
        "Conversations around future integrations and API access",
        "Security-first architecture with encryption in transit and at rest",
        "Dedicated point of contact as we roll out enterprise capabilities"
      ],
      stats: [
        { number: "Custom", label: "Pricing & itinerary volume" },
        { number: "Roadmap", label: "Influence on enterprise features" }
      ],
      cta: "Talk to Us",
      href: "/contact"
    }
  ];

  return (
    <SolutionsWrapper>
      <SEO {...SEOConfigs.solutions} schemaType="SoftwareApplication" />
      <Section>
        <Container>
          <SolutionsHeader>
            <SolutionsBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Tailored Solutions
            </SolutionsBadge>
            <SolutionsTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.solutions.h1}
            </SolutionsTitle>
            <SolutionsSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {copy.pages.solutions.sub}
            </SolutionsSubtitle>
          </SolutionsHeader>

          <CardGrid columns={3} gap={6}>
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <SolutionIcon>{solution.icon}</SolutionIcon>
                <SolutionTitle>{solution.title}</SolutionTitle>
                <SolutionDescription>{solution.description}</SolutionDescription>
                
                <SolutionFeatures>
                  <FeaturesHeading>Key Features:</FeaturesHeading>
                  <FeatureList>
                    {solution.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>
                        <CheckCircle size={14} />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </SolutionFeatures>

                <SolutionStats>
                  {solution.stats.map((stat, statIndex) => (
                    <StatItem key={statIndex}>
                      <StatNumber>{stat.number}</StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatItem>
                  ))}
                </SolutionStats>

                <SolutionButtonWrapper>
                  <Button 
                    variant="primary" 
                    size="md" 
                    to={solution.href}
                    fullWidth
                  >
                    {solution.cta}
                    <ArrowRight size={18} />
                  </Button>
                </SolutionButtonWrapper>
              </SolutionCard>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to see how ParkPro fits your agency?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're inviting a small group of destination-focused travel agents and agencies into early access. Choose the plan that fits you, then use ParkPro to standardize itineraries, save hours, and get ready for the future Agency OS for travel.
            </CTASubtitle>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/request-access">
                Request Early Access →
              </Button>
            </motion.div>
          </CTAContent>
        </Container>
      </CTASection>
    </SolutionsWrapper>
  );
};

export default Solutions;
