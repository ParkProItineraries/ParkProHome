import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Zap, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Smartphone 
} from "lucide-react";
import Container from "../layout/Container";
import Card from "../ui/Card";
import { flexCenter } from "../../styles/mixins";

const FeatureSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.white};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    margin-top: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const FeatureCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
  transition: ${({ theme }) => theme.transitions.normal};
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-8px);
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: ${({ theme }) => theme.shadows['gold-lg']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${FeatureCard}:hover & {
    transform: scale(1.1);
  }
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin: 0;
`;

const FeatureGridComponent = () => {
  const features = [
    {
      icon: <Zap size={32} />,
      title: "Lightning Fast",
      description: "Generate complete Disney itineraries for your clients in under 30 seconds, saving hours of manual planning time."
    },
    {
      icon: <Clock size={32} />,
      title: "Real-Time Updates",
      description: "Get live wait times, crowd levels, and park hours to optimize every moment of your clients' trips."
    },
    {
      icon: <Users size={32} />,
      title: "Personalized Planning",
      description: "Automated recommendations based on family size, ages, interests, and accessibility needs for each client."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Smart Optimization",
      description: "Advanced algorithms route each day for maximum efficiency and minimal wait times for your clients."
    },
    {
      icon: <Shield size={32} />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime ensures your agency data and client itineraries are always safe."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Ready",
      description: "Access your itineraries anywhere with our mobile-optimized platform and offline capabilities for your agency."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <FeatureSection>
      <Container>
        <SectionHeader>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SectionTitle>Why Choose Park Pro?</SectionTitle>
            <SectionSubtitle>
              Our automated platform combines cutting-edge technology with Disney expertise 
              to deliver exceptional planning experiences for travel agents and their clients.
            </SectionSubtitle>
          </motion.div>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <FeatureGrid>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
              >
                <FeatureCard interactive>
                  <IconWrapper>
                    {feature.icon}
                  </IconWrapper>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              </motion.div>
            ))}
          </FeatureGrid>
        </motion.div>
      </Container>
    </FeatureSection>
  );
};

export default FeatureGridComponent;
