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
  ArrowRight
} from "lucide-react";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { copy } from "../content/strings";

const DemoWrapper = styled.div`
  padding-top: 88px; /* Account for fixed navbar */
  background: ${({ theme }) => theme.colors.white};
`;

// Enhanced Demo Components
const DemoFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.xs};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.xs};
    flex-direction: column;
    align-items: stretch;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.gold : 
    $active ? theme.colors.gold : 
    theme.colors['gray-100']};
  color: ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.black : 
    $active ? theme.colors.black : 
    theme.colors['gray-500']};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  transition: ${({ theme }) => theme.transitions.normal};
  border: 2px solid ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.black : 
    $active ? theme.colors.black : 
    'transparent'};
  box-shadow: ${({ $active, $completed, theme }) => 
    $completed ? theme.shadows.gold : 
    $active ? theme.shadows.gold : 
    'none'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const StepNumber = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.black : 
    $active ? theme.colors.black : 
    theme.colors['gray-300']};
  color: ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.gold : 
    $active ? theme.colors.gold : 
    theme.colors['gray-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  border: 2px solid ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.gold : 
    $active ? theme.colors.gold : 
    'transparent'};
  flex-shrink: 0;
`;

const DemoStep = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'exit', 'isActive'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 2px solid ${({ $isActive, theme }) => 
    $isActive ? theme.colors.gold : theme.colors['gray-200']};
  transition: ${({ theme }) => theme.transitions.normal};
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StepIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  flex-shrink: 0;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin: 0;
`;

const StepContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const InteractiveDemo = styled.div`
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const DemoControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};
  padding-top: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors['gray-700']};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors['gray-50']};
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.black};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

// Add CSS animations for spinning loader and pulse
const GlobalStyles = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const DemoHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`;

const DemoBadge = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: 4px ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const DemoTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const DemoSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.md} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const DemoHighlights = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`;

const DemoHighlightItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors['gray-50']};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  border-radius: ${({ theme }) => theme.radius.full};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors['gray-700']};
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
    width: 12px;
    height: 12px;
  }
`;

const DemoBulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.sm} 0 0 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const DemoBulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  
  &::before {
    content: '•';
    color: ${({ theme }) => theme.colors.gold};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
    flex-shrink: 0;
    margin-top: 1px;
  }
`;


const CTASection = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const CTASubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Demo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const steps = [
    {
      id: 0,
      title: "Your client fills out a guided intake form",
      icon: <Users size={20} />,
      description: "Start with a link you send your client. They answer a friendly, guided questionnaire about their family, travel dates, parks, and must-do priorities.",
      content: (
        <InteractiveDemo>
          <StepDescription>
            No more back-and-forth emails or scattered notes. ParkPro pulls everything into one clean intake that you can reuse for every Disney booking.
          </StepDescription>
          <DemoBulletList>
            <DemoBulletItem>Party size, ages, mobility, and special occasions</DemoBulletItem>
            <DemoBulletItem>Park-day preferences and hopper options</DemoBulletItem>
            <DemoBulletItem>Ride intensity, characters, and dining style</DemoBulletItem>
            <DemoBulletItem>Trip budget and must-do experiences</DemoBulletItem>
          </DemoBulletList>
        </InteractiveDemo>
      )
    },
    {
      id: 1,
      title: "ParkPro builds the day-by-day itinerary",
      icon: <Calendar size={20} />,
      description: "Behind the scenes, ParkPro applies destination-specific rules and best practices to turn that intake form into a structured plan for each day.",
      content: (
        <InteractiveDemo>
          <StepDescription>
            Instead of staring at a blank screen, you get a working draft in minutes—organized by park, time of day, and meals.
          </StepDescription>
          <DemoBulletList>
            <DemoBulletItem>Each day matched to the right park and pace</DemoBulletItem>
            <DemoBulletItem>Morning, afternoon, and evening blocks laid out</DemoBulletItem>
            <DemoBulletItem>Slots reserved for dining and breaks</DemoBulletItem>
            <DemoBulletItem>Arrival and departure days handled gracefully</DemoBulletItem>
          </DemoBulletList>
        </InteractiveDemo>
      )
    },
    {
      id: 2,
      title: "You refine, personalize, and brand it",
      icon: <Sparkles size={20} />,
      description: "You stay in control. Adjust park days, tweak suggestions, and add your own expertise before sending the final plan.",
      content: (
        <InteractiveDemo>
          <StepDescription>
            ParkPro does the heavy lifting; you add the Disney magic your clients pay you for.
          </StepDescription>
          <DemoBulletList>
            <DemoBulletItem>Swap parks or reorder days without starting over</DemoBulletItem>
            <DemoBulletItem>Add your own notes, tips, and reminders</DemoBulletItem>
            <DemoBulletItem>Export to your premium PDF or slide templates</DemoBulletItem>
            <DemoBulletItem>Deliver a polished, on-brand itinerary every time</DemoBulletItem>
          </DemoBulletList>
        </InteractiveDemo>
      )
    },
    {
      id: 3,
      title: "You deliver and reuse what works",
      icon: <Heart size={20} />,
      description: "Turn every itinerary into repeatable systems and better client relationships instead of one-off, exhausting projects.",
      content: (
        <InteractiveDemo>
          <StepDescription>
            The more trips you build, the more ParkPro becomes your agency's Disney playbook.
          </StepDescription>
          <DemoBulletList>
            <DemoBulletItem>Send itineraries digitally or as PDFs/slides</DemoBulletItem>
            <DemoBulletItem>Reuse successful patterns for similar families</DemoBulletItem>
            <DemoBulletItem>Spend more time selling and serving, less time building</DemoBulletItem>
            <DemoBulletItem>Lay the foundation for your future Agency OS</DemoBulletItem>
          </DemoBulletList>
        </InteractiveDemo>
      )
    }
  ];

  // Auto-play effect that only runs when isPlaying is true
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 12000); // 12 seconds per step for comfortable reading time

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


  return (
    <DemoWrapper>
      <SEO {...SEOConfigs.demo} schemaType="SoftwareApplication" />
      <GlobalStyles />
            <Section>
    <Container>
          <DemoHeader>
            <DemoBadge>{copy.pages.demo.badge}</DemoBadge>
            <DemoTitle>{copy.pages.demo.h1}</DemoTitle>
            <DemoSubtitle>
              In a few minutes, see exactly how ParkPro turns a 10-hour Disney itinerary into a 20–30 minute workflow—without changing how you serve your clients.
            </DemoSubtitle>
            <DemoHighlights>
              <DemoHighlightItem
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Check size={16} />
                <span>Save 5–10+ hours per Disney trip</span>
              </DemoHighlightItem>
              <DemoHighlightItem
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Check size={16} />
                <span>Go from intake form to day-by-day plan in minutes</span>
              </DemoHighlightItem>
              <DemoHighlightItem
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Check size={16} />
                <span>Deliver a premium, branded itinerary every time</span>
              </DemoHighlightItem>
            </DemoHighlights>
          </DemoHeader>

          <StepIndicator>
            {steps.map((step, index) => (
              <Step
                key={step.id}
                $active={currentStep === index}
                $completed={currentStep > index}
              >
                <StepNumber $active={currentStep === index} $completed={currentStep > index}>
                  {currentStep > index ? <Check size={12} /> : index + 1}
                </StepNumber>
                {step.title}
              </Step>
            ))}
          </StepIndicator>

          <DemoFlow>
            <AnimatePresence mode="wait">
              <DemoStep
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                $isActive={true}
              >
                <StepHeader>
                  <StepIcon>{steps[currentStep].icon}</StepIcon>
                  <StepTitle>{steps[currentStep].title}</StepTitle>
                </StepHeader>
                
                <StepContent>
                  <StepDescription>{steps[currentStep].description}</StepDescription>
                  {steps[currentStep].content}
                </StepContent>

                <DemoControls>
                  <ControlButton onClick={handlePrevious} disabled={false}>
                    <ChevronLeft size={16} />
                    Previous
                  </ControlButton>
                  <ControlButton onClick={handlePlayPause}>
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    {isPlaying ? 'Pause' : 'Play'}
                  </ControlButton>
                  <ControlButton onClick={handleNext} disabled={false}>
                    Next
                    <ChevronRight size={16} />
                  </ControlButton>
                </DemoControls>
              </DemoStep>
            </AnimatePresence>
          </DemoFlow>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <CTATitle>Ready to see ParkPro with your own clients?</CTATitle>
            <CTASubtitle>
              Request early access and we'll walk you through a live demo using your agency's Disney scenarios.
            </CTASubtitle>
            <ButtonGroup>
              <Button variant="primary" size="lg" to="/request-access">
                Request Early Access
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg" to="/pricing">
                See Pricing
              </Button>
            </ButtonGroup>
          </CTASection>
    </Container>
      </Section>
    </DemoWrapper>
  );
};

export default Demo; 