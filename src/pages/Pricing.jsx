import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp,
  Shield,
  Award,
  Headphones,
  Rocket
} from "lucide-react";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexCenter, flexColumnCenter } from "../styles/mixins";
import TrustBar from "../components/TrustBar";

// Enhanced Pricing Page with proper tiers, decoy pricing, and FAQ
const PricingWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const PricingTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const PricingSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const ToggleWrapper = styled.div`
  ${flexCenter}
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const ToggleLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const Toggle = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: ${({ theme }) => theme.radius.full};
  padding: ${({ theme }) => theme.spacing.xs};
  position: relative;
  cursor: pointer;
`;

const ToggleOption = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  border: none;
  background: ${({ active, theme }) => 
    active ? theme.colors.white : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.black : theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ active, theme }) => 
    active ? theme.shadows.md : 'none'};
  z-index: 1;
  position: relative;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const PricingCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport', 'isPopular', 'isDecoy'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  border: 2px solid ${({ theme, isPopular, isDecoy }) => 
    isPopular ? theme.colors.gold : isDecoy ? theme.colors['gray-300'] : theme.colors['gray-300']};
  box-shadow: ${({ theme, isPopular, isDecoy }) => 
    isPopular ? theme.shadows.gold : isDecoy ? theme.shadows.sm : theme.shadows.md};
  position: relative;
  transition: ${({ theme }) => theme.transitions.normal};
  opacity: ${({ isDecoy }) => isDecoy ? 0.6 : 1};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme, isPopular, isDecoy }) => 
      isPopular ? theme.shadows['gold-lg'] : isDecoy ? theme.shadows.sm : theme.shadows.xl};
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: ${({ theme }) => theme.shadows.gold};
`;

const DecoyBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors['gray-400']};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const PlanName = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  text-align: center;
`;

const PlanPrice = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PriceAmount = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme, isDecoy }) => isDecoy ? theme.colors['gray-400'] : theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1;
`;

const PricePeriod = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const PlanDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const FeatureList = styled.ul`
  list-style: none;
  margin: 0 0 ${({ theme }) => theme.spacing.xl} 0;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  svg {
    color: ${({ theme, isDecoy }) => isDecoy ? theme.colors['gray-400'] : theme.colors.gold};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const CardButton = styled(Button)`
  width: 100%;
  justify-content: center;
  opacity: ${({ isDecoy }) => isDecoy ? 0.5 : 1};
  cursor: ${({ isDecoy }) => isDecoy ? 'not-allowed' : 'pointer'};
`;

// FAQ Section
const FAQSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors['gray-50']};
`;

const FAQTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FAQItem = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors['border-light']};
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  margin-bottom: ${({ theme, isOpen }) => isOpen ? theme.spacing.md : 0};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  text-align: left;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const FAQAnswer = styled(motion.div)`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  overflow: hidden;
`;

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Perfect for solo agents just getting started',
      monthlyPrice: 97,
      annualPrice: 87,
      isPopular: false,
      isDecoy: false,
      features: [
        '2 itineraries per month',
        '1 user seat',
        'Basic client intake forms',
        'Email support',
        'Mobile app access'
      ],
      limitations: [
        'No branding customization',
        'No API access',
        'No priority support'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Most popular choice for growing agents',
      monthlyPrice: 197,
      annualPrice: 177,
      isPopular: true,
      isDecoy: false,
      features: [
        '5 itineraries per month',
        '2 user seats',
        'Advanced client intake forms',
        'Template library',
        'Priority email support',
        'Basic branding options'
      ],
      limitations: [
        'No API access',
        'Limited customization'
      ]
    },
    {
      id: 'agency',
      name: 'Agency',
      description: 'For small agencies and teams',
      monthlyPrice: 397,
      annualPrice: 357,
      isPopular: false,
      isDecoy: false,
      features: [
        '15 itineraries per month',
        '5 user seats',
        'Full branding customization',
        'Team collaboration tools',
        'Advanced analytics',
        'Phone support',
        'API access'
      ],
      limitations: [
        'No dedicated account manager'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large agencies and franchises',
      monthlyPrice: 797,
      annualPrice: 717,
      isPopular: false,
      isDecoy: true,
      features: [
        'Unlimited itineraries',
        'Unlimited users',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'SLA guarantees'
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: "What's included in the early access program?",
      answer: "Early access members get 50% off their first year, priority support, direct access to our development team, and exclusive features before general release."
    },
    {
      question: "Are taxes included in the price?",
      answer: "Prices shown are before applicable sales tax or VAT. Like Netflix, Spotify, and other online services, we're required to collect tax based on your billing address. The exact tax amount will be calculated and displayed at checkout before you confirm your subscription. Tax rates vary by location (0% to ~10% in the US, 19-27% VAT in the EU)."
    },
    {
      question: "Can I change plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences."
    },
    {
      question: "What happens if I exceed my itinerary limit?",
      answer: "You can purchase additional itineraries at $50 each, or upgrade to a higher plan. We'll notify you when you're approaching your limit."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start."
    },
    {
      question: "What support do you offer?",
      answer: "All plans include email support. Professional and above get priority support. Agency and Enterprise plans include phone support and dedicated account managers."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time. You'll retain access until the end of your billing period."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <PricingWrapper>
      <Section>
        <Container>
          <PricingHeader>
            <PricingTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Simple, Transparent Pricing
            </PricingTitle>
            <PricingSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Choose the plan that fits your business. All plans include our core Disney planning features with no hidden fees.
            </PricingSubtitle>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                textAlign: 'center',
                marginTop: '1rem',
                fontStyle: 'italic'
              }}
            >
              * Prices shown exclude applicable sales tax or VAT, which will be calculated based on your billing address at checkout.
            </motion.p>
          </PricingHeader>

          <ToggleWrapper>
            <ToggleLabel>Monthly</ToggleLabel>
            <Toggle onClick={() => setIsAnnual(!isAnnual)}>
              <ToggleOption active={!isAnnual}>Monthly</ToggleOption>
              <ToggleOption active={isAnnual}>Annual</ToggleOption>
            </Toggle>
            <ToggleLabel>Annual (Save 20%)</ToggleLabel>
          </ToggleWrapper>

          <PricingGrid>
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={plan.id}
                isPopular={plan.isPopular}
                isDecoy={plan.isDecoy}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {plan.isPopular && (
                  <PopularBadge>
                    <Star size={12} style={{ marginRight: '4px' }} />
                    Most Popular
                  </PopularBadge>
                )}
                {plan.isDecoy && (
                  <DecoyBadge>
                    <Award size={12} style={{ marginRight: '4px' }} />
                    Enterprise
                  </DecoyBadge>
                )}
                
                <PlanName>{plan.name}</PlanName>
                <PlanPrice>
                  <PriceAmount isDecoy={plan.isDecoy}>
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </PriceAmount>
                  <PricePeriod>/month {isAnnual && '(billed annually)'}</PricePeriod>
                </PlanPrice>
                <PlanDescription>{plan.description}</PlanDescription>
                
                <FeatureList>
                  {plan.features.map((feature, featureIndex) => (
                    <FeatureItem key={featureIndex} isDecoy={plan.isDecoy}>
                      <Check size={16} />
                      {feature}
                    </FeatureItem>
                  ))}
                  {plan.limitations.map((limitation, limitIndex) => (
                    <FeatureItem key={`limit-${limitIndex}`} isDecoy={plan.isDecoy}>
                      <X size={16} />
                      {limitation}
                    </FeatureItem>
                  ))}
                </FeatureList>
                
                <CardButton 
                  variant={plan.isPopular ? 'primary' : 'secondary'} 
                  size="lg" 
                  to="/request-access"
                  isDecoy={plan.isDecoy}
                  disabled={plan.isDecoy}
                >
                  {plan.isDecoy ? 'Contact Sales' : 'Get Started'}
                </CardButton>
              </PricingCard>
            ))}
          </PricingGrid>
        </Container>
      </Section>

      {/* Trust Bar */}
      <TrustBar variant="light" showSocialProof={false} />

      <FAQSection>
        <Container>
          <FAQTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </FAQTitle>
          
          <FAQGrid>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FAQItem>
                  <FAQQuestion 
                    isOpen={openFAQ === index}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    {openFAQ === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </FAQQuestion>
                  
                  {openFAQ === index && (
                    <FAQAnswer
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </FAQAnswer>
                  )}
                </FAQItem>
              </motion.div>
            ))}
          </FAQGrid>
        </Container>
      </FAQSection>
    </PricingWrapper>
  );
};

export default Pricing;