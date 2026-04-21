import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Shield, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TestimonialsWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors['gray-200']} 0%, ${({ theme }) => theme.colors['gray-100']} 100%);
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const Badge = styled.div`
  background: rgba(245, 194, 73, 0.1);
  color: ${({ theme }) => theme.colors.teal};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border: 1px solid rgba(245, 194, 73, 0.3);
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  border-top: 3px solid transparent;
  border-image: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}, ${({ theme }) => theme.colors['teal-light']}) 1;
  border-image-slice: 1 1 0 1;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 475px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}20, ${({ theme }) => theme.colors['gray-200']});
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  svg {
    color: ${({ theme }) => theme.colors.teal};
  }
`;

const BenefitTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const BenefitDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.md};
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const MutedText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors['gray-500']};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    text-align: center;
  }
`;

const Stat = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const Testimonials = () => {
  const benefits = [
    {
      icon: <Shield size={24} />,
      title: "Lifetime Founding Pricing",
      description: "Your founding rate is locked permanently. As we add features and raise prices for new customers, you stay at your original tier."
    },
    {
      icon: <Users size={24} />,
      title: "Direct Line to the Team",
      description: "Your feedback goes directly to the founder. Founding partners shape what ships next — not customer support, not a roadmap portal."
    },
    {
      icon: <Star size={24} />,
      title: "White-Glove Onboarding",
      description: "A dedicated onboarding session tailored to your agency's current workflow. We migrate your process with you, not a generic checklist."
    }
  ];

  const stats = [
    { number: "8 hrs → 15 min", label: "Per Itinerary" },
    { number: "Every Trip", label: "One Workspace" },
    { number: "Zero", label: "Spreadsheets" }
  ];

  return (
    <TestimonialsWrapper>
      <Container>
        <SectionHeader>
          <Badge>Now Accepting Partners</Badge>
          <Title>Become a Founding Partner</Title>
          <Subtitle>
            We're selecting a limited group of Disney-specialist agents to help shape ParkPro before public launch. In exchange for your feedback during the founding period, you get lifetime pricing locked at your founding tier, direct access to the team, and priority support — permanently.
          </Subtitle>
        </SectionHeader>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <IconWrapper>
                {benefit.icon}
              </IconWrapper>
              <BenefitTitle>{benefit.title}</BenefitTitle>
              <BenefitDescription>{benefit.description}</BenefitDescription>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <CTAWrapper>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CTAButton to="/demo">
              Book a Demo
              <ArrowRight size={18} />
            </CTAButton>
            <MutedText>Limited spots available. No commitment required to explore.</MutedText>
          </motion.div>
        </CTAWrapper>

        {/* Stats Bar */}
        <StatsBar>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </Stat>
          ))}
        </StatsBar>
      </Container>
    </TestimonialsWrapper>
  );
};

export default Testimonials;
