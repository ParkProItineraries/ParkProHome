import React, { useState } from "react";
import styled from "styled-components";
import SEO, { SEOConfigs } from '../components/seo/SEO';
import { motion } from "framer-motion";
import { 
  Users, 
  Building2, 
  Crown, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Shield,
  Smartphone,
  Headphones,
  Globe,
  Target,
  Award,
  Zap,
  BarChart3
} from "lucide-react";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexCenter, flexColumnCenter } from "../styles/mixins";

// Enhanced Solutions Page with Target Audience Focus
const SolutionsWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
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
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const SolutionsSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

// Solution Cards
const SolutionCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 2px solid ${({ theme }) => theme.colors['border-light']};
  position: relative;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  
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

const SolutionIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${SolutionCard}:hover & {
    transform: scale(1.1);
  }
`;

const SolutionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const SolutionDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
`;

const SolutionFeatures = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
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
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const SolutionStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.md};
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['text-secondary']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
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

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Solutions = () => {
  const solutions = [
    {
      icon: <Users size={40} />,
      title: "For Solo Travel Agents",
      description: "Perfect for independent travel agents who want to scale their Disney business and serve more clients without burning out.",
      features: [
        "Save 10+ hours per client",
        "Professional branded itineraries",
        "Mobile-optimized client portal",
        "Basic analytics and reporting",
        "Email support"
      ],
      stats: [
        { number: "5min", label: "Creation Time" },
        { number: "3x", label: "More Clients" }
      ],
      cta: "Start Your Free Trial",
      href: "/solutions/solo-agents"
    },
    {
      icon: <Building2 size={40} />,
      title: "For Travel Agencies",
      description: "Ideal for multi-agent agencies looking to standardize their Disney planning process and improve team collaboration.",
      features: [
        "Team collaboration tools",
        "Centralized client management",
        "Advanced analytics dashboard",
        "White-label branding options",
        "Priority support & training"
      ],
      stats: [
        { number: "50%", label: "Time Saved" },
        { number: "2x", label: "Team Efficiency" }
      ],
      cta: "Schedule Demo",
      href: "/solutions/agencies"
    },
    {
      icon: <Crown size={40} />,
      title: "For Enterprise",
      description: "Comprehensive solution for large travel organizations with custom integrations, dedicated support, and advanced security.",
      features: [
        "Custom integrations & API",
        "Dedicated account manager",
        "Advanced security & compliance",
        "Custom reporting & analytics",
        "24/7 priority support"
      ],
      stats: [
        { number: "99.9%", label: "Uptime" },
        { number: "24/7", label: "Support" }
      ],
      cta: "Contact Sales",
      href: "/solutions/enterprise"
    }
  ];

  return (
    <SolutionsWrapper>
      <SEO {...SEOConfigs.solutions} />
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
              Solutions Built for Every Travel Professional
            </SolutionsTitle>
            <SolutionsSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Whether you're a solo agent or part of a large enterprise, we have the perfect solution 
              to transform your Disney planning business and delight your clients.
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
                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#0B0B0C',
                    marginBottom: '16px',
                    fontFamily: "'Urbanist', 'DM Sans', sans-serif"
                  }}>
                    Key Features:
                  </h4>
                  <FeatureList>
                    {solution.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>
                        <CheckCircle size={16} />
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

                <Button 
                  variant="primary" 
                  size="lg" 
                  to={solution.href}
                  style={{ width: '100%' }}
                >
                  {solution.cta}
                  <ArrowRight size={20} />
                </Button>
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
              Ready to Transform Your Disney Business?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of travel professionals who've already revolutionized their Disney planning process 
              and increased their bookings by 3x with ParkPro.
            </CTASubtitle>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ButtonGroup>
                <Button variant="primary" size="lg" to="/request-access">
                  <Star size={20} />
                  Join Early Access
                </Button>
                <Button variant="secondary" size="lg" to="/demo">
                  <Zap size={20} />
                  Watch Demo
                </Button>
              </ButtonGroup>
            </motion.div>
          </CTAContent>
        </Container>
      </CTASection>
    </SolutionsWrapper>
  );
};

export default Solutions;
