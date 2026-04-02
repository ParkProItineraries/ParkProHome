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
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Clock,
  FileText,
} from "lucide-react";
import { InlineWidget } from "react-calendly";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  background: rgba(59, 130, 246, 0.1);
  color: #3B82F6;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 9999px;
  display: inline-block;
  margin-bottom: 24px;
  border: 1px solid rgba(59, 130, 246, 0.3);
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
  color: #3B82F6;
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

// Progress bar instead of cluttered pill indicators
const ProgressBar = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 48px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const ProgressSegment = styled.button`
  flex: 1;
  height: 4px;
  border-radius: 2px;
  border: none;
  padding: 0;
  cursor: pointer;
  background: ${({ $active, $completed }) =>
    $active ? '#3B82F6' :
    $completed ? '#93C5FD' :
    '#E5E7EB'};
  transition: background-color 0.3s ease;

  &:hover {
    background: ${({ $active }) =>
      $active ? '#3B82F6' : '#D1D5DB'};
  }
`;

const StepCard = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 12px;
  padding: 32px;
  border: 1px solid #E5E7EB;
  max-width: 800px;
  margin: 0 auto;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 24px;
  }
`;

const StepCardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
`;

const StepBadge = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(59, 130, 246, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3B82F6;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const StepLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #3B82F6;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const StepCardTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1F2937;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  margin: 4px 0 0;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 18px;
  }
`;

const StepCardDescription = styled.p`
  color: #6B7280;
  line-height: 1.5;
  margin-bottom: 24px;
  font-size: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 14px;
  }
`;

const BulletGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  background: #F9FAFB;
  border-radius: 8px;
  padding: 24px;
  border: 1px solid #E5E7EB;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const BulletItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  color: #4B5563;
  font-size: 14px;
  line-height: 1.4;

  svg {
    color: #3B82F6;
    flex-shrink: 0;
    margin-top: 2px;
    width: 16px;
    height: 16px;
  }
`;

const StepControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  background: #FFFFFF;
  color: #4B5563;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: #F9FAFB;
    border-color: #1F2937;
    color: #1F2937;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
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
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      id: 0,
      label: "Step 1",
      title: "Your client fills out a guided intake form",
      icon: <Users size={20} />,
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
      title: "ParkPro builds the day-by-day itinerary",
      icon: <Calendar size={20} />,
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
      title: "You refine, personalize, and brand it",
      icon: <Sparkles size={20} />,
      description: "Stay in full control. Swap park days, adjust suggestions, add your own notes and expertise. ParkPro does the heavy lifting — you add the magic your clients pay you for.",
      bullets: [
        "Swap parks or reorder days without starting over",
        "Add your own tips, notes, and reminders",
        "Export to polished PDF or presentation templates",
        "Deliver a consistent, on-brand itinerary every time",
      ],
    },
    {
      id: 3,
      label: "Step 4",
      title: "Deliver and reuse what works",
      icon: <Heart size={20} />,
      description: "Every itinerary becomes part of your playbook. Reuse successful patterns, serve more families, and spend your time selling — not rebuilding plans from scratch.",
      bullets: [
        "Send itineraries digitally or as branded exports",
        "Reuse successful patterns for similar families",
        "Spend more time selling, less time building",
        "Scale your bookings without scaling your hours",
      ],
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep(prev => (prev >= steps.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handlePrevious = () => {
    setCurrentStep(prev => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentStep(prev => (prev >= steps.length - 1 ? 0 : prev + 1));
  };

  const handlePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  const heroStats = [
    { number: "5–10+ hrs", label: "Saved per client" },
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
            <SectionLabel>The Complete Workflow</SectionLabel>
            <SectionHeading>The Complete Workflow</SectionHeading>
            <SectionSubtitle>
              From client intake to polished delivery — here's what each step looks like inside ParkPro.
            </SectionSubtitle>
          </WalkthroughHeader>

          <ProgressBar>
            {steps.map((step, index) => (
              <ProgressSegment
                key={step.id}
                $active={currentStep === index}
                $completed={currentStep > index}
                onClick={() => setCurrentStep(index)}
                aria-label={`Go to ${step.label}`}
              />
            ))}
          </ProgressBar>

          <AnimatePresence mode="wait">
            <StepCard
              key={currentStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <StepCardHeader>
                <StepBadge>{steps[currentStep].icon}</StepBadge>
                <div>
                  <StepLabel>{steps[currentStep].label}</StepLabel>
                  <StepCardTitle>{steps[currentStep].title}</StepCardTitle>
                </div>
              </StepCardHeader>

              <StepCardDescription>
                {steps[currentStep].description}
              </StepCardDescription>

              <BulletGrid>
                {steps[currentStep].bullets.map((bullet, index) => (
                  <BulletItem key={index}>
                    <Check size={16} />
                    <span>{bullet}</span>
                  </BulletItem>
                ))}
              </BulletGrid>
            </StepCard>
          </AnimatePresence>

          <StepControls>
            <ControlButton onClick={handlePrevious}>
              <ChevronLeft size={16} />
              Previous
            </ControlButton>
            <ControlButton onClick={handlePlayPause}>
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? 'Pause' : 'Play'}
            </ControlButton>
            <ControlButton onClick={handleNext}>
              Next
              <ChevronRight size={16} />
            </ControlButton>
          </StepControls>
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
                primaryColor: '3B82F6',
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
