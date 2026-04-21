import React, { useState, useEffect } from "react";
import SEO from '../components/seo/SEO';
import { SEOConfigs } from '../components/seo/SEOConfigs';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Calendar,
  Users,
  Check,
  Image,
} from "lucide-react";
import { InlineWidget } from "react-calendly";
import Container from "../components/layout/Container";
import { copy } from "../content/strings";

const DemoWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
`;

// Dark hero section for page header
const HeroSection = styled.section`
  padding: 96px 0 64px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black} 0%, #111827 100%);
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5C249' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0 48px;
  }

  @media (max-width: 475px) {
    padding: 48px 0 32px;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroBadge = styled(motion.div)`
  background: rgba(245, 194, 73, 0.1);
  color: #F5C249;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 24px;
  border: 1px solid rgba(245, 194, 73, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 48px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }

  @media (max-width: 475px) {
    font-size: 24px;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

const StatsRow = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-top: 48px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 32px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

const StatLabel = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 8px;
`;

// Walkthrough Section
const WalkthroughSection = styled.section`
  padding: 96px 0;
  background: #FFFFFF;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const SectionLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #F5C249;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  margin-bottom: 12px;
`;

const SectionHeading = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #1F2937;
  margin: 0 0 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
  }

  @media (max-width: 475px) {
    font-size: 22px;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  color: #6B7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 16px;
  }
`;

const WalkthroughHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

// Side-by-side walkthrough layout
const WalkthroughGrid = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 48px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

// Vertical step navigation (left side)
const StepNav = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    overflow-x: auto;
    gap: 8px;
    padding-bottom: 4px;
  }
`;

const StepNavLine = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  bottom: 20px;
  width: 2px;
  background: #E5E7EB;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const StepNavProgress = styled(motion.div)`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 2px;
  background: #F5C249;
  border-radius: 1px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const StepNavItem = styled.button`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 16px 16px 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-shrink: 0;
    padding: 12px 16px;
    border-radius: 10px;
    background: ${({ $active }) => $active ? 'rgba(245, 194, 73, 0.06)' : '#F9FAFB'};
    border: 1px solid ${({ $active }) => $active ? 'rgba(245, 194, 73, 0.2)' : '#E5E7EB'};
    gap: 12px;
  }
`;

const StepNavDot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s ease;
  background: ${({ $active, $completed }) =>
    $active ? '#F5C249' :
    $completed ? '#F5C249' :
    '#F3F4F6'};
  color: ${({ $active, $completed }) =>
    $active || $completed ? '#FFFFFF' : '#9CA3AF'};
  border: 2px solid ${({ $active, $completed }) =>
    $active ? '#F5C249' :
    $completed ? '#F5C249' :
    '#E5E7EB'};

  svg {
    width: 16px;
    height: 16px;
  }
`;

const StepNavText = styled.div`
  padding-top: 4px;
`;

const StepNavLabel = styled.div`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${({ $active }) => $active ? '#F5C249' : '#9CA3AF'};
  margin-bottom: 4px;
  transition: color 0.3s ease;
`;

const StepNavTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ $active }) => $active ? '#1F2937' : '#6B7280'};
  line-height: 1.3;
  transition: color 0.3s ease;
`;

// Content panel (right side)
const StepContent = styled.div`
  min-height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: auto;
  }
`;

const MockupArea = styled(motion.div)`
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
  border: 2px dashed #E2E8F0;
  border-radius: 12px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 240px;
  }

  @media (max-width: 475px) {
    height: 200px;
  }
`;

const MockupIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(245, 194, 73, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #F5C249;
  margin-bottom: 16px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const MockupLabel = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #94A3B8;
`;

const StepCardTitle = styled(motion.h3)`
  font-size: 24px;
  font-weight: 700;
  color: #1F2937;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  margin: 0 0 12px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
  }
`;

const StepCardDescription = styled(motion.p)`
  color: #6B7280;
  line-height: 1.6;
  margin-bottom: 24px;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }
`;

const BulletList = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const BulletItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #4B5563;
  font-size: 14px;
  line-height: 1.5;
`;

const BulletCheck = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(245, 194, 73, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 1px;

  svg {
    width: 12px;
    height: 12px;
    color: #F5C249;
  }
`;

// Booking Section
const BookingSection = styled.section`
  text-align: center;
  padding: 96px 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black} 0%, #111827 100%);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 64px 0;
  }

  @media (max-width: 475px) {
    padding: 48px 0;
  }
`;

const BookingTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  margin-bottom: 16px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
  }
`;

const BookingSubtitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.5;
`;

const CalendlyContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #FFFFFF;

  .calendly-inline-widget {
    min-width: 320px;
  }
`;

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const steps = [
    {
      id: 0,
      label: "Step 1",
      navTitle: "Client Intake",
      title: "Your client fills out a guided intake form",
      icon: <Users size={20} />,
      mockupLabel: "Intake form screenshot",
      description: "Send your client a link to a friendly, guided questionnaire. They share their family details, travel dates, park preferences, and must-do priorities — no more back-and-forth emails.",
      bullets: [
        "Party size, ages, mobility, and special occasions",
        "Park-day preferences and hopper options",
        "Ride intensity, characters, and dining style",
        "Trip budget and must-do experiences",
      ],
    },
    {
      id: 1,
      label: "Step 2",
      navTitle: "Itinerary Generation",
      title: "ParkPro builds the day-by-day itinerary",
      icon: <Calendar size={20} />,
      mockupLabel: "Itinerary builder screenshot",
      description: "ParkPro's destination-smart engine applies real park logic — flow patterns, timing, transportation — to turn that intake into a structured plan for each day. You get a working draft in minutes.",
      bullets: [
        "Each day matched to the right park and pace",
        "Morning, afternoon, and evening blocks laid out",
        "Dining and break slots built in automatically",
        "Arrival and departure days handled gracefully",
      ],
    },
    {
      id: 2,
      label: "Step 3",
      navTitle: "Refine & Brand",
      title: "You refine, personalize, and brand it",
      icon: <Sparkles size={20} />,
      mockupLabel: "Editing interface screenshot",
      description: "Stay in full control. Swap park days, adjust suggestions, add your own notes and expertise. ParkPro does the heavy lifting — you add the expertise your clients pay you for.",
      bullets: [
        "Swap parks or reorder days without starting over",
        "Add your own tips, notes, and reminders",
        "Share via ParkPro's client-facing app instantly",
        "Deliver a consistent, on-brand itinerary every time",
      ],
    },
    {
      id: 3,
      label: "Step 4",
      navTitle: "Deliver & Manage",
      title: "Deliver to your client and keep it updated",
      icon: <Heart size={20} />,
      mockupLabel: "Client app delivery screenshot",
      description: "Your client gets a polished, mobile-friendly itinerary they can pull up anytime. Need to make changes? Edit anytime and your client sees the updates instantly — no re-sending, no version confusion.",
      bullets: [
        "Clients view their itinerary in a branded, mobile-friendly app",
        "Make edits anytime — updates appear live in the client app",
        "Every trip stays in your dashboard for easy reference",
        "Spend more time selling, less time building",
      ],
    },
  ];

  // Auto-advance timer — pauses when user manually clicks a step
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep(prev => (prev >= steps.length - 1 ? 0 : prev + 1));
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentStep, steps.length]);

  const handleStepClick = (index) => {
    setCurrentStep(index);
    setIsAutoPlaying(false);
  };

  // Calculate vertical progress line height based on current step
  const progressHeight = `${(currentStep / (steps.length - 1)) * 100}%`;

  const heroStats = [
    { number: "8 hrs → 15 min", label: "Per itinerary" },
    { number: "Minutes", label: "To build an itinerary" },
    { number: "4 Steps", label: "Intake to delivery" },
  ];

  return (
    <DemoWrapper>
      <SEO {...SEOConfigs.demo} schemaType="SoftwareApplication" />

      {/* Hero */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {copy.pages.demo.badge}
            </HeroBadge>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {copy.pages.demo.h1}
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              See exactly how ParkPro turns a 10-hour Disney planning session
              into a 20–30 minute workflow — without changing how you serve
              your clients.
            </HeroSubtitle>

            <StatsRow
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {heroStats.map((stat, index) => (
                <StatItem key={index}>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatItem>
              ))}
            </StatsRow>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Interactive Walkthrough */}
      <WalkthroughSection>
        <Container>
          <WalkthroughHeader>
            <SectionLabel>How It Works</SectionLabel>
            <SectionHeading>The Complete Workflow</SectionHeading>
            <SectionSubtitle>
              From client intake to polished delivery — here's what each step looks like inside ParkPro.
            </SectionSubtitle>
          </WalkthroughHeader>

          <WalkthroughGrid>
            {/* Left: Vertical step navigation */}
            <StepNav>
              <StepNavLine />
              <StepNavProgress
                animate={{ height: progressHeight }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              {steps.map((step, index) => (
                <StepNavItem
                  key={step.id}
                  $active={currentStep === index}
                  onClick={() => handleStepClick(index)}
                  aria-label={`Go to ${step.label}: ${step.navTitle}`}
                >
                  <StepNavDot
                    $active={currentStep === index}
                    $completed={currentStep > index}
                  >
                    {currentStep > index ? <Check size={16} /> : index + 1}
                  </StepNavDot>
                  <StepNavText>
                    <StepNavLabel $active={currentStep === index}>
                      {step.label}
                    </StepNavLabel>
                    <StepNavTitle $active={currentStep === index}>
                      {step.navTitle}
                    </StepNavTitle>
                  </StepNavText>
                </StepNavItem>
              ))}
            </StepNav>

            {/* Right: Step content with mockup area */}
            <StepContent>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  {/* Screenshot placeholder — replace with real images */}
                  <MockupArea>
                    <MockupIcon>
                      <Image size={24} />
                    </MockupIcon>
                    <MockupLabel>{steps[currentStep].mockupLabel}</MockupLabel>
                  </MockupArea>

                  <StepCardTitle>{steps[currentStep].title}</StepCardTitle>
                  <StepCardDescription>
                    {steps[currentStep].description}
                  </StepCardDescription>

                  <BulletList>
                    {steps[currentStep].bullets.map((bullet, index) => (
                      <BulletItem key={index}>
                        <BulletCheck>
                          <Check size={12} />
                        </BulletCheck>
                        <span>{bullet}</span>
                      </BulletItem>
                    ))}
                  </BulletList>
                </motion.div>
              </AnimatePresence>
            </StepContent>
          </WalkthroughGrid>
        </Container>
      </WalkthroughSection>

      {/* Book a Demo - Calendly */}
      <BookingSection>
        <Container>
          <BookingTitle>Book a Personalized Demo</BookingTitle>
          <BookingSubtitle>
            Pick a time that works for you. We'll walk through ParkPro
            using your agency's real Disney scenarios — so you can see
            exactly how it fits your workflow.
          </BookingSubtitle>
          <CalendlyContainer>
            <InlineWidget
              url="https://calendly.com/parkproit/parkpro-demo"
              styles={{ height: '700px' }}
              pageSettings={{
                backgroundColor: 'ffffff',
                primaryColor: 'F5C249',
                textColor: '0B0B0C',
                hideLandingPageDetails: false,
                hideEventTypeDetails: false,
                hideGdprBanner: true,
              }}
            />
          </CalendlyContainer>
        </Container>
      </BookingSection>
    </DemoWrapper>
  );
};

export default Demo;
