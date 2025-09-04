import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";
import { RiStarLine } from "react-icons/ri";

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-2xl);
  background: linear-gradient(135deg, var(--color-black) 0%, var(--color-black-soft) 50%, var(--color-black-light) 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(251, 191, 36, 0.05) 0%, transparent 70%);
    animation: float 20s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(180deg); }
  }

  @media (max-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
`;

const Badge = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  background: var(--color-gold-soft);
  color: var(--color-gold);
  font-size: 0.875rem;
  font-weight: 600;
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-full);
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-2xl);
  box-shadow: var(--shadow-gold);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(251, 191, 36, 0.3);

  svg {
    font-size: 1rem;
  }
`;

const Title = styled(motion.h1).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 800;
  color: var(--color-white);
  margin-bottom: var(--spacing-2xl);
  line-height: 1.1;
  font-family: var(--font-family-display);
  
  .gradient-text {
    background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark), var(--color-gold-darker));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Subtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: var(--spacing-3xl);
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
`;

const CTAButtons = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: var(--spacing-3xl);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-md);
  }
`;

const HeroStats = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  display: flex;
  gap: var(--spacing-3xl);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--spacing-3xl);

  @media (max-width: 768px) {
    gap: var(--spacing-2xl);
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: var(--spacing-lg);
  background: rgba(255, 255, 255, 0.95);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: var(--shadow-xl);
  transition: var(--transition-normal);

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-2xl);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  color: var(--color-black);
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-family-display);
  background: linear-gradient(135deg, var(--color-black), var(--color-black-soft));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  color: var(--color-gray-500);
  font-weight: 600;
  font-size: 1rem;
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
  background: var(--color-gold-soft);
  border-radius: 50%;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(251, 191, 36, 0.2);
`;

const Hero = () => {
  const stats = [
    { number: "500+", label: "Travel Agents" },
    { number: "10,000+", label: "Itineraries Created" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const floatingElements = [
    { x: "10%", y: "20%", delay: 0 },
    { x: "80%", y: "30%", delay: 2 },
    { x: "20%", y: "70%", delay: 4 },
    { x: "70%", y: "80%", delay: 6 }
  ];

  return (
    <HeroSection>
      <FloatingElements>
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

      <HeroContent>
        <Badge
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <RiStarLine />
          Automated Disney Planning
        </Badge>
        
        <Title
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Transform Your Disney Planning with{" "}
          <span className="gradient-text">Automation</span>
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Create personalized Disney itineraries in seconds, not hours. 
          Our automated system analyzes preferences, crowd levels, and wait times to craft 
          the perfect experience for every family.
        </Subtitle>
        
        <CTAButtons
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <CTAButton to="/demo" variant="gold" size="large">
            Try Demo
          </CTAButton>
          <CTAButton to="/request-access" variant="secondary" size="large">
            Get Started
          </CTAButton>
        </CTAButtons>
        
        <HeroStats
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              as={motion.div}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </HeroStats>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
