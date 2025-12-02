import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Clock,
  DollarSign,
  Zap,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  Calculator,
  Users,
  RefreshCw,
  Building2,
  Crown,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import { copy } from "../content/strings";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 88px;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #0b0b0c 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%233B82F6" fill-opacity="0.03"><circle cx="30" cy="30" r="2"/></g></g></svg>');
    opacity: 0.5;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes["5xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.9);
  max-width: 800px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const HighlightBox = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold}20,
    ${({ theme }) => theme.colors["gold-muted"]}20
  );
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing["3xl"]} auto;
  max-width: 600px;
  text-align: center;
`;

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HighlightText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: white;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

// Section Wrappers with Alternating Backgrounds
const StatsSection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors["gray-50"]};
`;

const AudienceSection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors.white};
`;

const ComparisonSection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors.white};
`;

const ROISection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors["gray-50"]};
`;

const PainSection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors.white};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors["gray-600"]};
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

// Comparison Matrix Components
const ComparisonMatrixWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  overflow: hidden;
`;

const MatrixGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const MatrixHeaderRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.sm};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black} 0%, #1a1a1a 100%);
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors["gray-200"]};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const MatrixHeaderCell = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
`;

const ParkProHeaderCell = styled(MatrixHeaderCell)`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${({ theme }) => theme.spacing.lg};
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gold};
    border-radius: ${({ theme }) => theme.radius.full} ${({ theme }) => theme.radius.full} 0 0;
  }
`;

const MatrixRow = styled(motion.div)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors["gray-100"]};
  background: ${({ $isEven, theme }) => $isEven ? theme.colors.white : theme.colors["gray-50"]};
  transition: all 0.2s ease;
  align-items: center;
  
  &:hover {
    background: ${({ theme }) => theme.colors["gray-50"]};
    transform: translateX(2px);
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: ${({ theme }) => theme.spacing.md};
    gap: ${({ theme }) => theme.spacing.md};
    align-items: flex-start;
  }
`;

const MatrixFeatureCell = styled.div`
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  text-align: left;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    padding-bottom: ${({ theme }) => theme.spacing.xs};
    border-bottom: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  }
`;

const MatrixCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 4px;
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors["gray-600"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.xs} 0;
  
  span {
    max-width: 100%;
    word-wrap: break-word;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: flex-start;
    text-align: left;
    padding-left: ${({ theme }) => theme.spacing.sm};
    min-height: auto;
  }
`;

const ParkProMatrixCell = styled(MatrixCell)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}15, ${({ theme }) => theme.colors["gold-muted"]}10);
  border-left: 3px solid ${({ theme }) => theme.colors.gold};
  border-radius: 0;
  padding: ${({ theme }) => theme.spacing.xs};
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    border-left: none;
    border-top: 3px solid ${({ theme }) => theme.colors.gold};
    margin: ${({ theme }) => theme.spacing.xs} 0;
  }
`;

const MatrixLegend = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors["gray-600"]};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

const MatrixBadge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 4px ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  background: ${({ theme }) => theme.colors["gray-100"]};
  color: ${({ theme }) => theme.colors["gray-700"]};
  white-space: nowrap;
  border: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  
  span {
    line-height: 1.2;
  }
`;

const MatrixIcon = styled(CheckCircle)`
  color: ${({ theme }) => theme.colors.gold};
  flex-shrink: 0;
`;

const MatrixPartialSymbol = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors["gray-500"]};
`;

const MatrixNoneSymbol = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors["gray-400"]};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing["3xl"]};
`;

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const StatIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto ${({ theme }) => theme.spacing.md} auto;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold}20,
    ${({ theme }) => theme.colors["gold-muted"]}20
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors["gray-600"]};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const ROICard = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing["2xl"]};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors["border-light"]};
`;

const ROICardHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ROICardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const ROICardSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors["gray-600"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const InputGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InputLabel = styled.label`
  display: block;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const InputField = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors["gray-300"]};
  border-radius: ${({ theme }) => theme.radius.lg};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const ResultsBox = styled.div`
  background: ${({ theme }) => theme.colors.black};
  color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const ResultIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    color: ${({ theme }) => theme.colors.black};
  }
`;

const ResultText = styled.div`
  flex: 1;
`;

const ResultLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4px;
`;

const ResultValue = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
`;

const PainPointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing["2xl"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const PainPointCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors["border-light"]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const PainPointIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gold}15;
  border-radius: ${({ theme }) => theme.radius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;

  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const PainPointTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  min-height: 3em;
  display: flex;
  align-items: flex-start;
`;

const PainPointSolution = styled.p`
  color: ${({ theme }) => theme.colors["gray-600"]};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  margin: 0;
  flex: 1;
`;

// Audience Cards
const AudienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing["2xl"]};
`;

const AudienceCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors["border-light"]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  text-align: center;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.gold};
  }
`;

const AudienceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-muted"]}
  );
  border-radius: ${({ theme }) => theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
`;

const AudienceTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const AudienceBody = styled.p`
  color: ${({ theme }) => theme.colors["gray-600"]};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin: 0;
`;

const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors.black};
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }
`;

const CTAText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.9);
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const Comparison = () => {
  const [clients, setClients] = useState(10);
  const [hours, setHours] = useState(12);
  const [rate, setRate] = useState(40);

  // Calculator logic
  const manualHours = clients * hours;
  const parkproHours = clients * 0.5; // 30 minutes = 0.5 hours
  const savedHours = manualHours - parkproHours;
  const savedMoney = savedHours * rate;
  const extraClients = Math.floor(savedHours / 0.5);
  const extraRevenue = extraClients * 150; // Assume $150 commission per booking

  const matrixRows = [
    {
      feature: "Built specifically for Disney",
      parkpro: {
        label: "Designed for Disney parks",
        level: "full"
      },
      generic: {
        label: "General travel templates",
        level: "partial"
      },
      docs: {
        label: "No built-in logic",
        level: "none"
      }
    },
    {
      feature: "Intelligent park-day logic",
      parkpro: {
        label: "Optimized park flow, hopping, pacing",
        level: "full"
      },
      generic: {
        label: "Not theme-park aware",
        level: "none"
      },
      docs: {
        label: "Fully manual",
        level: "none"
      }
    },
    {
      feature: "Time from intake → working plan",
      parkpro: {
        label: "Minutes",
        level: "full"
      },
      generic: {
        label: "Hours",
        level: "partial"
      },
      docs: {
        label: "Many hours",
        level: "none"
      }
    },
    {
      feature: "Intake → itinerary linking",
      parkpro: {
        label: "Automatically mapped",
        level: "full"
      },
      generic: {
        label: "Basic forms",
        level: "partial"
      },
      docs: {
        label: "Manual entry",
        level: "none"
      }
    },
    {
      feature: "Client-facing deliverables",
      parkpro: {
        label: "Branded PDFs / slides / mobile view",
        level: "full"
      },
      generic: {
        label: "Basic PDFs",
        level: "partial"
      },
      docs: {
        label: "Inconsistent & unbranded",
        level: "none"
      }
    },
    {
      feature: "Support for newer agents",
      parkpro: {
        label: "Guided workflows",
        level: "full"
      },
      generic: {
        label: "General templates",
        level: "partial"
      },
      docs: {
        label: "High learning curve",
        level: "none"
      }
    },
    {
      feature: "Scalability for agencies",
      parkpro: {
        label: "Tiered seats & volume support",
        level: "full"
      },
      generic: {
        label: "Limited scaling",
        level: "partial"
      },
      docs: {
        label: "Hard cap on agent hours",
        level: "none"
      }
    },
    {
      feature: "Future vision (Agency OS)",
      parkpro: {
        label: "Planned Agency OS roadmap",
        level: "full"
      },
      generic: {
        label: "Not CRM-focused",
        level: "none"
      },
      docs: {
        label: "Not possible",
        level: "none"
      }
    }
  ];

  const audienceData = [
    {
      icon: <Users size={24} />,
      title: "Solo Disney Travel Agents",
      body: "You want to spend less time building itineraries and more time booking and serving clients.",
    },
    {
      icon: <Building2 size={24} />,
      title: "Disney-Focused Agencies",
      body: "You need a consistent way every agent plans Disney trips, without everyone reinventing the wheel.",
    },
    {
      icon: <Crown size={24} />,
      title: "Growing & Enterprise Agencies",
      body: "You're thinking ahead to volume, workflows, and a platform that can grow into an Agency OS.",
    },
  ];

  const painPoints = [
    {
      icon: <Clock size={20} />,
      title: "You spend all day building one itinerary",
      solution:
        "ParkPro gives you a working Disney trip plan in minutes so you can refine, not start from a blank page.",
    },
    {
      icon: <AlertTriangle size={20} />,
      title: "Late nights and burnout from manual work",
      solution:
        "Automated planning helps you reclaim evenings and weekends while maintaining quality.",
    },
    {
      icon: <Users size={20} />,
      title: "Training new agents takes months",
      solution:
        "Guided workflows and templates help newer agents produce solid itineraries in days, not months.",
    },
    {
      icon: <RefreshCw size={20} />,
      title: "Client changes mean starting over",
      solution:
        "Quick adjustments and regenerations when plans change, without rebuilding from scratch.",
    },
    {
      icon: <DollarSign size={20} />,
      title: "Too many tools scattered everywhere",
      solution:
        "A single workspace for intake forms, trip details, and itineraries instead of spreadsheets and email threads.",
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Inconsistent client experience",
      solution:
        "Every client gets a consistent, branded deliverable that reflects your agency's quality.",
    },
  ];

  return (
    <PageWrapper>
      <SEO {...SEOConfigs.comparison} schemaType="WebPage" />

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {copy.pages.comparison.h1}
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.comparison.sub}
            </HeroSubtitle>

            <HighlightBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HighlightTitle>The Bottom Line</HighlightTitle>
              <HighlightText>{copy.pages.comparison.bottomLine}</HighlightText>
            </HighlightBox>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Who ParkPro is For Section */}
      <AudienceSection>
        <Container>
          <SectionTitle>Who ParkPro is For</SectionTitle>
          <SectionSubtitle>
            Built for Disney-focused travel agents and agencies at every stage
          </SectionSubtitle>
          <AudienceGrid>
            {audienceData.map((audience, index) => (
              <AudienceCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AudienceIcon>{audience.icon}</AudienceIcon>
                <AudienceTitle>{audience.title}</AudienceTitle>
                <AudienceBody>{audience.body}</AudienceBody>
              </AudienceCard>
            ))}
          </AudienceGrid>
        </Container>
      </AudienceSection>

      {/* Stats Section */}
      <StatsSection>
        <Container>
          <StatsGrid>
            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <StatIcon>
                <Clock size={32} />
              </StatIcon>
              <StatNumber>5–10+ hrs</StatNumber>
              <StatLabel>Planning time saved per trip (goal)</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <StatIcon>
                <TrendingUp size={32} />
              </StatIcon>
              <StatNumber>More trips</StatNumber>
              <StatLabel>Handled per agent, same hours</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <StatIcon>
                <DollarSign size={32} />
              </StatIcon>
              <StatNumber>Minutes</StatNumber>
              <StatLabel>From intake to working plan</StatLabel>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <StatIcon>
                <Zap size={32} />
              </StatIcon>
              <StatNumber>1 workspace</StatNumber>
              <StatLabel>For all your Disney trips</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </StatsSection>

      {/* Comparison Matrix Section */}
      <ComparisonSection>
        <Container>
          <SectionTitle>How ParkPro Compares to Other Tools</SectionTitle>
          <SectionSubtitle>
            A clear look at how ParkPro stacks up against generic trip builders and manual methods.
          </SectionSubtitle>

          <MatrixLegend>
            <MatrixBadge>
              <MatrixIcon size={12} />
              <span>Strong fit</span>
            </MatrixBadge>
            <MatrixBadge>
              <span>~ Partial / workaround</span>
            </MatrixBadge>
            <MatrixBadge>
              <span>— Not designed for this</span>
            </MatrixBadge>
          </MatrixLegend>

          <ComparisonMatrixWrapper>
            <MatrixGrid>
              <MatrixHeaderRow>
                <MatrixHeaderCell>Feature</MatrixHeaderCell>
                <MatrixHeaderCell>Generic Itinerary Builders</MatrixHeaderCell>
                <MatrixHeaderCell>Spreadsheets & Docs</MatrixHeaderCell>
                <ParkProHeaderCell>ParkPro</ParkProHeaderCell>
              </MatrixHeaderRow>

              {matrixRows.map((row, index) => (
                <MatrixRow
                  key={row.feature}
                  $isEven={index % 2 === 0}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <MatrixFeatureCell>{row.feature}</MatrixFeatureCell>
                  
                  {/* Generic builders */}
                  <MatrixCell>
                    {row.generic.level === "full" && (
                      <MatrixIcon size={16} />
                    )}
                    {row.generic.level === "partial" && (
                      <MatrixPartialSymbol>~</MatrixPartialSymbol>
                    )}
                    {row.generic.level === "none" && (
                      <MatrixNoneSymbol>—</MatrixNoneSymbol>
                    )}
                    <span>{row.generic.label}</span>
                  </MatrixCell>
                  
                  {/* Spreadsheets & Docs */}
                  <MatrixCell>
                    {row.docs.level === "full" && (
                      <MatrixIcon size={16} />
                    )}
                    {row.docs.level === "partial" && (
                      <MatrixPartialSymbol>~</MatrixPartialSymbol>
                    )}
                    {row.docs.level === "none" && (
                      <MatrixNoneSymbol>—</MatrixNoneSymbol>
                    )}
                    <span>{row.docs.label}</span>
                  </MatrixCell>
                  
                  {/* ParkPro */}
                  <ParkProMatrixCell>
                    <MatrixIcon size={16} />
                    <span>{row.parkpro.label}</span>
                  </ParkProMatrixCell>
                </MatrixRow>
              ))}
            </MatrixGrid>
          </ComparisonMatrixWrapper>
        </Container>
      </ComparisonSection>

      {/* ROI Calculator Section */}
      <ROISection>
        <Container>
          <ROICard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <ROICardHeader>
              <ROICardTitle>See What Your Time is Worth</ROICardTitle>
              <ROICardSubtitle>
                Use this simple example calculator to estimate how much planning
                time ParkPro could help you reclaim each month.
              </ROICardSubtitle>
            </ROICardHeader>

            <InputGroup>
              <InputLabel>
                How many Disney clients do you serve per month?
              </InputLabel>
              <InputField
                type="number"
                value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                min="1"
                max="100"
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>
                How many hours do you spend per itinerary (manual planning)?
              </InputLabel>
              <InputField
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                min="1"
                max="40"
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>
                What's your hourly rate? (Your time's worth)
              </InputLabel>
              <InputField
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                min="1"
                max="500"
              />
            </InputGroup>

            <ResultsBox>
              <ResultItem>
                <ResultIcon>
                  <Clock size={24} />
                </ResultIcon>
                <ResultText>
                  <ResultLabel>Time Saved Per Month</ResultLabel>
                  <ResultValue>{savedHours.toFixed(0)} hours</ResultValue>
                </ResultText>
              </ResultItem>

              <ResultItem>
                <ResultIcon>
                  <DollarSign size={24} />
                </ResultIcon>
                <ResultText>
                  <ResultLabel>Value of Time Saved</ResultLabel>
                  <ResultValue>${savedMoney.toLocaleString()}</ResultValue>
                </ResultText>
              </ResultItem>

              <ResultItem>
                <ResultIcon>
                  <Users size={24} />
                </ResultIcon>
                <ResultText>
                  <ResultLabel>Additional Clients You Could Serve</ResultLabel>
                  <ResultValue>{extraClients} more clients</ResultValue>
                </ResultText>
              </ResultItem>

              <ResultItem>
                <ResultIcon>
                  <TrendingUp size={24} />
                </ResultIcon>
                <ResultText>
                  <ResultLabel>Potential Extra Revenue</ResultLabel>
                  <ResultValue>
                    ${extraRevenue.toLocaleString()}/month
                  </ResultValue>
                </ResultText>
              </ResultItem>
            </ResultsBox>
          </ROICard>
        </Container>
      </ROISection>

      {/* Pain Points Section */}
      <PainSection>
        <Container>
          <SectionTitle>The Real Pain Points of Manual Planning</SectionTitle>
          <SectionSubtitle>
            And how ParkPro helps address each one
          </SectionSubtitle>

          <PainPointsGrid>
            {painPoints.map((point, index) => (
              <PainPointCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PainPointIcon>{point.icon}</PainPointIcon>
                <PainPointTitle>{point.title}</PainPointTitle>
                <PainPointSolution>{point.solution}</PainPointSolution>
              </PainPointCard>
            ))}
          </PainPointsGrid>
        </Container>
      </PainSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTATitle>Ready to Transform How You Plan Disney Trips?</CTATitle>
          <CTAText>
            ParkPro is rolling out with a small group of Disney-focused agents
            and agencies. Join early access to save hours on every trip and help
            shape the future Agency OS for travel.
          </CTAText>
          <Button
            to="/request-access"
            variant="primary"
            size="lg"
            fullWidth={false}
          >
            Join Early Access
            <ArrowRight size={20} />
          </Button>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default Comparison;