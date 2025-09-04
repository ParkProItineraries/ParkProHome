import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Clock, DollarSign, Users, TrendingUp, Star, Zap } from "lucide-react";
import Container from "../layout/Container";
import Section from "../layout/Section";
import { flexCenter, flexColumnCenter } from "../../styles/mixins";

const BenefitsWrapper = styled.div`
  background: ${({ theme }) => theme.colors['gray-50']};
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const BenefitsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const BenefitsTitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const BenefitsSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 800px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const BenefitCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.gold};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.gold};
`;

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const BenefitStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StatItem = styled.div`
  ${flexColumnCenter}
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-500']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const AgentBenefits = () => {
  const benefits = [
    {
      icon: <Clock size={24} />,
      title: "Save 10+ Hours Per Client",
      description: "Stop spending entire days creating Disney itineraries. Our automated system generates personalized plans in minutes, giving you back your time to focus on sales and client relationships.",
      stats: [
        { number: "10hrs", label: "Time Saved" },
        { number: "5min", label: "Creation Time" }
      ]
    },
    {
      icon: <DollarSign size={24} />,
      title: "Increase Your Revenue",
      description: "With more time on your hands, you can take on 3x more Disney clients. Our system helps you deliver premium service that justifies higher prices and builds client loyalty.",
      stats: [
        { number: "3x", label: "More Clients" },
        { number: "40%", label: "Higher Prices" }
      ]
    },
    {
      icon: <Users size={24} />,
      title: "Impress Every Client",
      description: "Deliver restaurant recommendations, optimal park schedules, and crowd-avoidance strategies that make you look like a Disney expert. Your clients will rave about your service.",
      stats: [
        { number: "98%", label: "Satisfaction" },
        { number: "85%", label: "Referrals" }
      ]
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Scale Your Business",
      description: "Handle more Disney bookings without hiring additional staff. Our system grows with your business, allowing you to maintain quality service as you expand your client base.",
      stats: [
        { number: "5x", label: "Capacity" },
        { number: "0", label: "Extra Staff" }
      ]
    },
    {
      icon: <Star size={24} />,
      title: "Stay Ahead of Competition",
      description: "Be the first in your market to offer automated Disney planning. Early adopters get exclusive access, special pricing, and direct support from our team to ensure your success.",
      stats: [
        { number: "50", label: "Early Spots" },
        { number: "24hr", label: "Support" }
      ]
    },
    {
      icon: <Zap size={24} />,
      title: "Never Miss a Booking",
      description: "Our system tracks dining availability, park hours, and special events in real-time. You'll never have to tell a client their dream restaurant is unavailable again.",
      stats: [
        { number: "100%", label: "Accuracy" },
        { number: "Real-time", label: "Updates" }
      ]
    }
  ];

  return (
    <BenefitsWrapper>
      <Section>
        <Container>
          <BenefitsHeader>
            <BenefitsTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Travel Agents Choose Park Pro
            </BenefitsTitle>
            <BenefitsSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of successful travel agents who've transformed their Disney planning business. 
              Here's what you'll get when you join our early access program.
            </BenefitsSubtitle>
          </BenefitsHeader>

          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <BenefitIcon>{benefit.icon}</BenefitIcon>
                <BenefitTitle>{benefit.title}</BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
                <BenefitStats>
                  {benefit.stats.map((stat, statIndex) => (
                    <StatItem key={statIndex}>
                      <StatNumber>{stat.number}</StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatItem>
                  ))}
                </BenefitStats>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </Container>
      </Section>
    </BenefitsWrapper>
  );
};

export default AgentBenefits;
