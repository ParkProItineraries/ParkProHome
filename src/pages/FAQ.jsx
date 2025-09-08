import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle, ArrowRight } from "lucide-react";
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
  min-height: 60vh;
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
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23C9A227" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></g></svg>');
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

const FAQSection = styled(Section)`
  background: ${({ theme }) => theme.colors['gray-50']};
`;

const FAQTitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const FAQGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const FAQHeader = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.xl};
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors['gray-50']};
  }
`;

const FAQQuestion = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
  flex: 1;
  text-align: left;
  line-height: 1.4;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const FAQIcon = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  transition: transform 0.3s ease;
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing.md};
  
  ${({ $isOpen }) => $isOpen && `
    transform: rotate(180deg);
  `}
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

const CTASection = styled(Section)`
  background: linear-gradient(135deg, #C9A227 0%, #B8941F 100%);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

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

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "What is Park Pro and how does it work?",
      answer: "Park Pro is the #1 Disney planning software for travel agents. Our automated Disney itinerary generator creates personalized Disney World and Disneyland itineraries in just 5 minutes. Simply input your client's preferences, and our AI-powered system handles crowd levels, wait times, dining reservations, and optimal park schedules to create professional itineraries that save you 10+ hours per client."
    },
    {
      question: "How much time does Park Pro save travel agents?",
      answer: "Park Pro saves travel agents 10+ hours per client on Disney planning. Instead of spending hours researching crowd levels, wait times, and dining availability, our automated Disney planning software creates complete itineraries in 5 minutes. This allows you to serve 3x more clients and increase your revenue by 300%."
    },
    {
      question: "Is Park Pro better than other Disney planning software?",
      answer: "Yes, Park Pro is the best Disney planning software for travel agents. Unlike other travel agent software that requires 2-3 hours per client, Park Pro creates complete Disney itineraries in 5 minutes. We provide real-time Disney data, automated updates, and professional results that impress clients. Our travel agent productivity tools are specifically designed for Disney planning professionals."
    },
    {
      question: "What Disney parks does Park Pro support?",
      answer: "Park Pro supports all major Disney destinations including Disney World (Magic Kingdom, EPCOT, Hollywood Studios, Animal Kingdom), Disneyland (Disneyland Park, California Adventure), and Disney Springs. Our Disney planning software covers crowd levels, wait times, dining reservations, and optimal scheduling for all Disney parks and attractions."
    },
    {
      question: "How accurate is Park Pro's Disney data?",
      answer: "Park Pro maintains 99% accuracy with real-time Disney data including crowd levels, wait times, and dining availability. Our Disney planning software updates automatically throughout the day to ensure your clients get the most current information. This accuracy is why travel agents trust Park Pro as their primary Disney planning tool."
    },
    {
      question: "Can I customize Disney itineraries for different client types?",
      answer: "Absolutely! Park Pro's Disney itinerary generator allows full customization for families, couples, groups, and special needs. Our travel agent software adapts to different ages, interests, mobility needs, and budget requirements. You can create everything from luxury Disney experiences to budget-friendly family trips."
    },
    {
      question: "How does Park Pro compare to manual Disney planning?",
      answer: "Manual Disney planning takes 10+ hours per client and often results in outdated information and client complaints. Park Pro's automated Disney planning software creates professional itineraries in 5 minutes with 99% accuracy. Travel agents using Park Pro see 300% revenue increases and serve 3x more clients with the same time investment."
    },
    {
      question: "What travel agent business tools does Park Pro include?",
      answer: "Park Pro includes comprehensive travel agent business tools: Disney itinerary generation, client management, automated updates, mobile access, and professional presentation materials. Our travel agent software streamlines your entire Disney planning workflow, from initial consultation to final itinerary delivery."
    },
    {
      question: "Is Park Pro suitable for new travel agents?",
      answer: "Yes! Park Pro is perfect for new travel agents who want to offer professional Disney planning services immediately. Our Disney planning software eliminates the learning curve of manual planning and provides instant expertise. New agents can compete with experienced planners from day one using Park Pro's automated tools."
    },
    {
      question: "How much does Park Pro cost for travel agents?",
      answer: "Park Pro offers competitive pricing for travel agents with early access discounts. Our Disney planning software pays for itself by saving 10+ hours per client. Most travel agents see ROI within their first month. Contact us for current pricing and early access program details."
    },
    {
      question: "Does Park Pro integrate with other travel agent software?",
      answer: "Park Pro is designed to work alongside your existing travel agent software. Our Disney planning software focuses specifically on Disney itinerary generation and can be integrated into your current workflow. We're constantly adding integrations with popular travel agent platforms and booking systems."
    },
    {
      question: "What support does Park Pro provide to travel agents?",
      answer: "Park Pro provides comprehensive support including onboarding, training, and ongoing assistance. Our team understands the travel agent industry and Disney planning challenges. We offer phone support, email assistance, and training resources to ensure your success with our Disney planning software."
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
            Frequently Asked Questions About Park Pro
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to know about the best Disney planning software for travel agents. 
            Get answers to common questions about Park Pro's automated Disney itinerary generator and travel agent tools.
          </HeroSubtitle>
        </Container>
      </HeroSection>

      <FAQSection>
        <Container>
          <FAQTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HelpCircle size={48} style={{ color: '#C9A227' }} />
            Park Pro FAQ
          </FAQTitle>
          
          <FAQGrid>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <FAQHeader onClick={() => toggleItem(index)}>
                  <FAQQuestion>{faq.question}</FAQQuestion>
                  <FAQIcon $isOpen={openItems[index]}>
                    {openItems[index] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </FAQIcon>
                </FAQHeader>
                <AnimatePresence>
                  {openItems[index] && (
                    <FAQAnswer
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </FAQAnswer>
                  )}
                </AnimatePresence>
              </FAQItem>
            ))}
          </FAQGrid>
        </Container>
      </FAQSection>

      <CTASection>
        <Container>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Disney Planning Business?
          </CTATitle>
          <CTASubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of successful travel agents using Park Pro to save 10+ hours per client 
            and increase revenue by 300%. Get 50% off your first year with early access.
          </CTASubtitle>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              to="/request-access"
              variant="secondary"
              size="lg"
              style={{
                background: '#0B0B0C',
                color: '#C9A227',
                padding: '16px 32px',
                borderRadius: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              Join Early Access - 50% Off
              <ArrowRight size={20} />
            </Button>
          </motion.div>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default FAQ;