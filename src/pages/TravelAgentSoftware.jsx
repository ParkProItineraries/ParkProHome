import React from "react";
import theme from '../styles/theme';
import styled from "styled-components";
import { motion } from "framer-motion";
import { Briefcase, Clock, DollarSign, Users, TrendingUp, Star, CheckCircle, ArrowRight, Zap, Shield, Award } from "lucide-react";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import { flexCenter } from "../styles/mixins";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 88px; // Account for fixed navbar
  
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
  
  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin: ${({ theme }) => theme.spacing['3xl']} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
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

const ComparisonTable = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background: ${({ theme }) => theme.colors['gray-100']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    display: none; // Hide header on mobile for better UX
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-200']};
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    display: block;
    padding: ${({ theme }) => theme.spacing.lg};
    border-bottom: 1px solid ${({ theme }) => theme.colors['gray-300']};
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const TableCell = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-700']};
  
  ${({ $highlight }) => $highlight && `
    background: rgba(201, 162, 39, 0.1);
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  `}
  
  ${({ $feature }) => $feature && `
    text-align: left;
    justify-content: flex-start;
    font-weight: ${({ theme }) => theme.typography.weights.medium};
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: ${({ theme }) => theme.spacing.sm} 0;
    justify-content: flex-start;
    text-align: left;
    font-size: ${({ theme }) => theme.typography.sizes.base};
    
    ${({ $feature }) => $feature && `
      font-weight: ${({ theme }) => theme.typography.weights.bold};
      margin-bottom: ${({ theme }) => theme.spacing.xs};
    `}
    
    ${({ $highlight }) => $highlight && `
      background: transparent;
      color: ${({ theme }) => theme.colors.gold};
      font-weight: ${({ theme }) => theme.typography.weights.bold};
    `}
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

const TravelAgentSoftware = () => {
  const features = [
    {
      icon: <Briefcase />,
      title: "Complete Travel Agent Business Tools",
      description: "Everything you need to run a successful travel agent business. From client management to booking automation, ParkPro has you covered."
    },
    {
      icon: <Clock />,
      title: "Save 10+ Hours Per Client",
      description: "Automate your Disney planning process and save 10+ hours per client. Focus on building relationships, not manual planning."
    },
    {
      icon: <DollarSign />,
      title: "Increase Revenue by 300%",
      description: "Travel agents using ParkPro see 300% revenue increases. Serve more clients with the same amount of time."
    },
    {
      icon: <Users />,
      title: "Client Management Made Easy",
      description: "Streamline your client communication and project management. Keep all Disney planning details organized in one place."
    },
    {
      icon: <TrendingUp />,
      title: "Scale Your Business",
      description: "Grow your travel agent business without growing your workload. ParkPro scales with you as you take on more clients."
    },
    {
      icon: <Star />,
      title: "Professional Results",
      description: "Deliver professional Disney itineraries that impress clients. Stand out from competitors with detailed, accurate planning."
    }
  ];

  const comparisonData = [
    { feature: "Disney Itinerary Generation", parkPro: "5 minutes", competitors: "2-3 hours", manual: "10+ hours" },
    { feature: "Real-time Disney Data", parkPro: "✅", competitors: "⚠️", manual: "❌" },
    { feature: "Client Management", parkPro: "✅", competitors: "✅", manual: "❌" },
    { feature: "Automated Updates", parkPro: "✅", competitors: "⚠️", manual: "❌" },
    { feature: "Mobile Access", parkPro: "✅", competitors: "✅", manual: "❌" },
    { feature: "Cost per Client", parkPro: "$5", competitors: "$50", manual: "$200" }
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
            The Best Travel Agent Software for Disney Planning
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            ParkPro is the leading travel agent software designed specifically for Disney planning. 
            Automate your workflow, save time, and increase revenue with the most comprehensive 
            travel agent business tools available.
          </HeroSubtitle>
          
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <StatNumber>10+</StatNumber>
              <StatLabel>Hours Saved Per Client</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <StatNumber>300%</StatNumber>
              <StatLabel>Revenue Increase</StatLabel>
            </StatCard>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <StatNumber>5 min</StatNumber>
              <StatLabel>Per Itinerary</StatLabel>
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
            Complete Travel Agent Software Suite
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
            ParkPro vs Other Travel Agent Software
          </SectionTitle>
          
          <ComparisonTable>
            <TableHeader>
              <TableCell $feature>Feature</TableCell>
              <TableCell $highlight>ParkPro</TableCell>
              <TableCell>Other Software</TableCell>
              <TableCell>Manual Planning</TableCell>
            </TableHeader>
            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <TableCell $feature>{row.feature}</TableCell>
                <TableCell $highlight>{row.parkPro}</TableCell>
                <TableCell>{row.competitors}</TableCell>
                <TableCell>{row.manual}</TableCell>
              </TableRow>
            ))}
          </ComparisonTable>
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
            Ready to transform your travel agent business?
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We're inviting a small group of destination-focused travel agents and agencies into early access. Join successful travel agents who've revolutionized their Disney planning business and start saving 10+ hours per client today.
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

export default TravelAgentSoftware;