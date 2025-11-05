import React, { useState, useEffect } from "react";
import theme from '../styles/theme';
import SEO, { SEOConfigs } from '../components/seo/SEO';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles,
  Loader2,
  AlertTriangle,
  Sun,
  Moon,
  Utensils,
  Lightbulb,
  Heart,
  Star,
  Zap,
  Calendar,
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Check,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Card from "../components/ui/Card";
import { copy } from "../content/strings";
import { flexCenter, flexColumnCenter } from "../styles/mixins";

const DemoWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
`;

// Enhanced Demo Components
const DemoFlow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.sm};
    flex-direction: column;
    align-items: stretch;
  }
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.full};
  background: ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.gold : 
    $active ? theme.colors.gold : 
    theme.colors['gray-100']};
  color: ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.black : 
    $active ? theme.colors.black : 
    theme.colors['gray-500']};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
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
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const StepNumber = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.black : 
    $active ? theme.colors.black : 
    theme.colors['gray-300']};
  color: ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.gold : 
    $active ? theme.colors.gold : 
    theme.colors['gray-500']};
  ${flexCenter}
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  border: 2px solid ${({ $active, $completed, theme }) => 
    $completed ? theme.colors.gold : 
    $active ? theme.colors.gold : 
    'transparent'};
`;

const DemoStep = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'exit', 'isActive'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 2px solid ${({ $isActive, theme }) => 
    $isActive ? theme.colors.gold : theme.colors['gray-200']};
  transition: ${({ theme }) => theme.transitions.normal};
`;

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StepIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  color: ${({ theme }) => theme.colors.black};
`;

const StepTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const StepContent = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InteractiveDemo = styled.div`
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const DemoControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ControlButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ $variant, theme }) => 
    $variant === 'primary' ? theme.colors.gold : 
    $variant === 'secondary' ? theme.colors['gray-200'] : 
    'transparent'};
  color: ${({ $variant, theme }) => 
    $variant === 'primary' ? theme.colors.black : 
    $variant === 'secondary' ? theme.colors.black : 
    theme.colors['gray-600']};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ $variant, theme }) => 
      $variant === 'primary' ? theme.colors['gold-muted'] : 
      $variant === 'secondary' ? theme.colors['gray-300'] : 
      theme.colors['gray-100']};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SampleItinerary = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const ItineraryDay = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DayHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const DayTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const DaySchedule = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ScheduleItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.sm};
`;

const TimeBadge = styled.span`
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.sm};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  min-width: 60px;
  text-align: center;
`;

const ActivityText = styled.span`
  color: ${({ theme }) => theme.colors['gray-700']};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
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
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const DemoBadge = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const DemoTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const DemoSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const FormCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing['3xl']};
`;

const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors['gray-900']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  padding-right: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  background: ${({ theme }) => theme.colors.white};
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  background-position: right ${({ theme }) => theme.spacing.sm} center;
  background-repeat: no-repeat;
  background-size: 16px 12px;
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  height: 44px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.gold}20;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%233B82F6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
  }
  
  &:hover {
    border-color: ${({ theme }) => theme.colors['gray-400']};
  }
  
  option {
    padding: ${({ theme }) => theme.spacing.sm};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors['gray-900']};
  }
`;

const GenerateButton = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing['2xl']};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  font-family: ${({ theme }) => theme.typography.fontBody};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors['gold-muted']}, ${({ theme }) => theme.colors.gold});
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows['gold-lg']};
    
    &::before {
      left: 100%;
    }
  }
  
  &:active:not(:disabled) {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
  }
`;

const ResultCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing['3xl']};
  min-height: 400px;
  ${flexColumnCenter}
`;

const LoadingState = styled.div`
  ${flexColumnCenter}
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors['gray-600']};
`;

const LoadingSubtext = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: ${({ theme }) => theme.colors['gray-500']};
`;

const ErrorState = styled.div`
  ${flexColumnCenter}
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
`;

const ErrorText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const ErrorSubtext = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const EmptyState = styled.div`
  ${flexColumnCenter}
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: ${({ theme }) => theme.colors['gray-500']};
`;

const EmptyIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  color: ${({ theme }) => theme.colors['gray-400']};
`;

const EmptyTitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors['gray-600']};
`;

const EmptySubtext = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const FeaturesSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const FeaturesTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FeatureCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const FeatureIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
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
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
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
  const [formData, setFormData] = useState({
    familySize: "4",
    ages: "Adults with kids",
    interests: "Thrill rides, Character meets",
    dining: "Table service",
    days: "4"
  });

  const steps = [
    {
      id: 0,
      title: "Client Questionnaire",
      icon: <Users size={20} />,
      description: "Your client fills out a comprehensive questionnaire about their family, preferences, travel dates, and Disney experience level.",
      content: (
        <InteractiveDemo>
          <StepDescription>
            Your client completes a detailed questionnaire covering all aspects of their Disney vacation preferences.
          </StepDescription>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Family: {formData.familySize} people ({formData.ages})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Interests: {formData.interests}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Dining: {formData.dining}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Trip: {formData.days} days at Disney World</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Experience Level: First-time visitors</span>
            </div>
          </div>
        </InteractiveDemo>
      )
    },
    {
      id: 1,
      title: "Smart Analysis",
      icon: <Zap size={20} />,
      description: "Our system analyzes historical data, crowd patterns, and your client's preferences to create the optimal Disney experience.",
      content: (
        <InteractiveDemo>
          <StepDescription>
            Our intelligent system processes your client's preferences and Disney data to create a personalized plan.
          </StepDescription>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Loader2 size={16} style={{ color: theme.colors.primary, animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Analyzing crowd patterns for {formData.days} days</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Loader2 size={16} style={{ color: theme.colors.primary, animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Matching rides to family preferences</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Loader2 size={16} style={{ color: theme.colors.primary, animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Optimizing park order and timing</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Loader2 size={16} style={{ color: theme.colors.primary, animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Creating personalized recommendations</span>
            </div>
          </div>
        </InteractiveDemo>
      )
    },
    {
      id: 2,
      title: "Itinerary Generation",
      icon: <Sparkles size={20} />,
      description: "We create a comprehensive, personalized itinerary with park recommendations, ride priorities, dining suggestions, and optimal timing.",
      content: (
        <InteractiveDemo>
          <StepDescription>
            Your personalized Disney itinerary is ready! Here's what your client will receive.
          </StepDescription>
          <SampleItinerary>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Calendar size={16} style={{ color: theme.colors.primary }} />
              <span style={{ fontWeight: '600', color: '#0B0B0C' }}>4-Day Disney World Itinerary</span>
            </div>
            
            <ItineraryDay>
              <DayHeader>
                <Sun size={16} style={{ color: theme.colors.primary }} />
                <DayTitle>Day 1 - Magic Kingdom</DayTitle>
              </DayHeader>
              <DaySchedule>
                <ScheduleItem>
                  <ActivityText>• Arrive at Magic Kingdom, head to Seven Dwarfs Mine Train</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Space Mountain (Genie+ recommended)</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Lunch at Be Our Guest Restaurant</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Character meet & greet at Town Square</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Big Thunder Mountain Railroad</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Dinner at Cinderella's Royal Table</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Happily Ever After Fireworks</ActivityText>
                </ScheduleItem>
              </DaySchedule>
            </ItineraryDay>

            <ItineraryDay>
              <DayHeader>
                <Sun size={16} style={{ color: theme.colors.primary }} />
                <DayTitle>Day 2 - EPCOT</DayTitle>
              </DayHeader>
              <DaySchedule>
                <ScheduleItem>
                  <ActivityText>• Test Track (Genie+ recommended)</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Soarin' Around the World</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Lunch at Le Cellier Steakhouse</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• World Showcase exploration</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• Dinner at Via Napoli</ActivityText>
                </ScheduleItem>
                <ScheduleItem>
                  <ActivityText>• EPCOT Forever Fireworks</ActivityText>
                </ScheduleItem>
              </DaySchedule>
            </ItineraryDay>
          </SampleItinerary>
        </InteractiveDemo>
      )
    },
    {
      id: 3,
      title: "Client Delivery",
      icon: <Heart size={20} />,
      description: "Your client receives a beautiful, detailed itinerary they can access on their phone, with real-time updates and modifications.",
      content: (
        <InteractiveDemo>
          <StepDescription>
            Your client receives a professional, mobile-friendly itinerary that they can access anytime, anywhere.
          </StepDescription>
          <div style={{ display: 'grid', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Mobile-optimized itinerary</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Real-time wait time updates</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Dining reservation confirmations</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>FastPass+ selections included</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Check size={16} style={{ color: '#10B981' }} />
              <span style={{ fontSize: '0.875rem', color: '#6B7280' }}>Easy modifications and updates</span>
            </div>
          </div>
        </InteractiveDemo>
      )
    }
  ];

  // Auto-play effect that starts when component mounts
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          // Loop back to the beginning for continuous demo
          return 0;
        }
        return prev + 1;
      });
    }, 8000); // 8 seconds per step for comfortable reading time

    return () => clearInterval(interval);
  }, [steps.length]);


  return (
    <DemoWrapper>
      <SEO {...SEOConfigs.demo} />
      <GlobalStyles />
            <Section>
    <Container>
          <DemoHeader>
            <DemoBadge>Live Demo</DemoBadge>
            <DemoTitle>Watch the Complete Agent Workflow</DemoTitle>
            <DemoSubtitle>
              See the full process from client questionnaire to delivered itinerary. 
              Watch how ParkPro transforms your Disney planning business in real-time.
            </DemoSubtitle>
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
                </DemoControls>
              </DemoStep>
            </AnimatePresence>
          </DemoFlow>
        </Container>
      </Section>

      <Section>
        <Container>
          <CTASection>
            <CTATitle>Ready to Transform Your Disney Business?</CTATitle>
            <CTASubtitle>
              Join the early access program and start saving 10+ hours per client while increasing your bookings. 
              Limited spots available for exclusive pricing and priority support.
            </CTASubtitle>
            <ButtonGroup>
              <Button variant="gold" size="lg" to="/request-access">
                Join Early Access Program
              </Button>
              <Button variant="outline" size="lg" to="/about">
                Learn More
              </Button>
            </ButtonGroup>
          </CTASection>
    </Container>
      </Section>
    </DemoWrapper>
  );
};

export default Demo; 