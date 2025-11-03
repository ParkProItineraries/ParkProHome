import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Button from "../ui/Button";
import Container from "../layout/Container";
import { flexColumnCenter, gradientText } from "../../styles/mixins";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.black};
  position: relative;
  overflow: visible;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A227' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(201, 162, 39, 0.05) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  ${flexColumnCenter}
`;

const Badge = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  background: rgba(201, 162, 39, 0.1);
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 162, 39, 0.3);

  svg {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const Title = styled(motion.h1).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['7xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  .gradient-text {
    ${gradientText}
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const Subtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: ${({ theme }) => theme.typography.weights.normal};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const CTAButtons = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const HeroStats = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  display: flex;
  gap: ${({ theme }) => theme.spacing['3xl']};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const StatItem = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${({ theme }) => theme.radius.lg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows['2xl']};
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black}, ${({ theme }) => theme.colors['gray-900']});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(201, 162, 39, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(201, 162, 39, 0.2);
`;

const Hero = () => {
  const stats = [
    { number: "5min", label: "Itinerary Creation" },
    { number: "3x", label: "More Bookings" },
    { number: "50", label: "Agent Spots Left" }
  ];

  const floatingElements = [
    { x: "10%", y: "20%", delay: 0 },
    { x: "80%", y: "30%", delay: 2 },
    { x: "20%", y: "70%", delay: 4 },
    { x: "70%", y: "80%", delay: 6 }
  ];

  return (
    <HeroSection role="banner" aria-label="ParkPro - Automated Disney Planning for Travel Agents">
      <FloatingElements aria-hidden="true">
        {floatingElements.map((element, index) => (
          <FloatingElement
            key={index}
            style={{ left: element.x, top: element.y }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </FloatingElements>

      <Container>
        <HeroContent>
          <Badge
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            role="status"
            aria-label="Early access program for travel agents"
          >
            <Star size={16} aria-hidden="true" />
            Exclusive Early Access for Travel Agents
          </Badge>
          
          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="gradient-text">ParkPro</span> - The #1 Disney Planning Software for Travel Agents{" "}
            <span className="gradient-text">Stop Spending Hours on Disney Itineraries</span>
          </Title>
          
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <strong>ParkPro</strong> is the best Disney itinerary generator and travel agent software. Our automated Disney planning software creates personalized Disney World and Disneyland itineraries in minutes, not hours. The leading travel agent productivity tool handles crowd levels, wait times, and dining reservations so you can focus on building relationships and closing more deals.
          </Subtitle>
          
          <CTAButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            role="group"
            aria-label="Call to action buttons"
          >
            <Button 
              to="/demo" 
              variant="gold" 
              size="lg"
              style={{ 
                background: '#C9A227', 
                color: '#0B0B0C', 
                padding: '16px 32px',
                borderRadius: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              aria-label="See how ParkPro works - Watch demo"
            >
              See How It Works
            </Button>
            <Button 
              to="/request-access" 
              variant="secondary" 
              size="lg"
              style={{ 
                background: '#FFFFFF', 
                color: '#0B0B0C', 
                border: '2px solid #0B0B0C',
                padding: '16px 32px',
                borderRadius: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block'
              }}
              aria-label="Join early access program for travel agents"
            >
              Join Early Access
            </Button>
          </CTAButtons>
          
          <HeroStats
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            role="group"
            aria-label="Key statistics and benefits"
          >
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                role="article"
                aria-label={`${stat.number} ${stat.label}`}
              >
                <StatNumber aria-label={stat.number}>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </HeroStats>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default Hero;
