import React from "react";
import theme from '../styles/theme';
import styled from "styled-components";
import { motion } from "framer-motion";
import { Clock, Users, TrendingUp, Star, CheckCircle, ArrowRight, Zap, Shield, Award } from "lucide-react";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import { flexCenter } from "../styles/mixins";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 88px; // Account for fixed navbar
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  position: relative;
  overflow: hidden;
  min-height: 80vh;
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
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const HeroSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.9);
  max-width: 900px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing['3xl']} 0;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const StatCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-4px);
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: rgba(255, 255, 255, 0.9);
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const FeaturesSection = styled(Section)`
  background: ${({ theme }) => theme.colors['gray-50']};
`;

const SectionTitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const FeatureCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors['primary-dark']} 100%);
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors['primary-dark']} 100%);
  ${flexCenter}
  margin: 0 auto ${({ theme }) => theme.spacing.lg} auto;
  color: white;
  font-size: 32px;
  box-shadow: 0 8px 25px rgba(201, 162, 39, 0.3);
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.3;
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const ComparisonSection = styled(Section)`
  background: ${({ theme }) => theme.colors.white};
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ComparisonCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: ${({ $highlight, theme }) => $highlight ? `3px solid ${theme.colors.primary}` : `1px solid ${theme.colors['gray-200']}`};
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  
  ${({ $highlight }) => $highlight && `
    transform: scale(1.02);
    z-index: 2;
    box-shadow: 0 20px 40px rgba(201, 162, 39, 0.2);
  `}
  
  &:hover {
    transform: ${({ $highlight }) => $highlight ? 'scale(1.02)' : 'translateY(-4px)'};
    box-shadow: ${({ $highlight }) => $highlight ? '0 20px 40px rgba(201, 162, 39, 0.2)' : '0 12px 30px rgba(0, 0, 0, 0.1)'};
  }
`;

const ComparisonCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.3;
`;

const ComparisonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ComparisonItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: 1.4;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CTASection = styled(Section)`
  background: ${({ theme }) => theme.colors.backgroundDark};
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing.xl} 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.05"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
  }
`;

const CTATitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const CTASubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.95);
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const DisneyPlanningSoftware = () => {
  const features = [
    {
      icon: <Clock />,
      title: "5-Minute Disney Itinerary Generation",
      description: "Create complete Disney World and Disneyland itineraries in just 5 minutes with our automated Disney planning software. No more spending hours on manual planning."
    },
    {
      icon: <Users />,
      title: "Built for Travel Agents",
      description: "The only Disney planning software designed specifically for travel agents. Streamline your workflow and serve more clients with professional Disney itinerary tools."
    },
    {
      icon: <TrendingUp />,
      title: "3x More Bookings",
      description: "Travel agents using ParkPro close 3x more Disney bookings. Our Disney planning automation helps you focus on selling, not planning."
    },
    {
      icon: <Star />,
      title: "Real-Time Disney Data",
      description: "Access live Disney crowd levels, wait times, and dining availability. The most accurate Disney planning software for travel professionals."
    }
  ];

  const comparisonData = [
    {
      title: "Manual Planning",
      items: [
        { icon: "❌", text: "10+ hours per client" },
        { icon: "❌", text: "Outdated information" },
        { icon: "❌", text: "High error rate" },
        { icon: "❌", text: "Limited scalability" },
        { icon: "❌", text: "Client complaints" }
      ]
    },
    {
      title: "ParkPro Software",
      highlight: true,
      items: [
        { icon: "✅", text: "5 minutes per client" },
        { icon: "✅", text: "Real-time Disney data" },
        { icon: "✅", text: "99% accuracy rate" },
        { icon: "✅", text: "Unlimited scalability" },
        { icon: "✅", text: "Happy clients" }
      ]
    },
    {
      title: "Other Software",
      items: [
        { icon: "⚠️", text: "2-3 hours per client" },
        { icon: "⚠️", text: "Limited Disney data" },
        { icon: "⚠️", text: "Basic automation" },
        { icon: "⚠️", text: "Expensive pricing" },
        { icon: "⚠️", text: "Steep learning curve" }
      ]
    }
  ];

  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Best Disney Planning Software for Travel Agents
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro is the leading Disney itinerary generator and travel agent software. 
            Create automated Disney World and Disneyland itineraries in minutes, not hours. 
            Join hundreds of successful travel agents who've transformed their Disney planning business.
          </HeroSubtitle>
          
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StatNumber>5 min</StatNumber>
              <StatLabel>Per Itinerary</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <StatNumber>10+ hrs</StatNumber>
              <StatLabel>Time Saved</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <StatNumber>3x</StatNumber>
              <StatLabel>More Bookings</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <StatNumber>99%</StatNumber>
              <StatLabel>Accuracy Rate</StatLabel>
            </StatCard>
          </StatsGrid>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              to="/request-access"
              variant="gold"
              size="lg"
              style={{
                background: theme.colors.primary,
                color: '#0B0B0C',
                padding: '16px 32px',
                borderRadius: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Start Your Free Trial
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Why Travel Agents Choose ParkPro
          </SectionTitle>
          
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <ComparisonSection>
        <Container>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            ParkPro vs Other Disney Planning Software
          </SectionTitle>
          
          <ComparisonGrid>
            {comparisonData.map((comparison, index) => (
              <ComparisonCard
                key={index}
                $highlight={comparison.highlight}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ComparisonCardTitle>{comparison.title}</ComparisonCardTitle>
                <ComparisonList>
                  {comparison.items.map((item, itemIndex) => (
                    <ComparisonItem key={itemIndex}>
                      <span>{item.icon}</span>
                      <span>{item.text}</span>
                    </ComparisonItem>
                  ))}
                </ComparisonList>
              </ComparisonCard>
            ))}
          </ComparisonGrid>
        </Container>
      </ComparisonSection>

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to transform your Disney planning business?
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're inviting a small group of destination-focused travel agents and agencies into early access. Start creating professional Disney itineraries in minutes with the best Disney planning software for travel agents.
          </CTASubtitle>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
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

export default DisneyPlanningSoftware;