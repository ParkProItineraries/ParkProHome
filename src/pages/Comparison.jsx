import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Clock, 
  DollarSign, 
  Zap, 
  TrendingUp, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  ArrowRight,
  Calculator,
  Users,
  RefreshCw,
  Target,
  Award,
  BarChart3
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import Button from "../components/ui/Button";
import TrustBar from "../components/TrustBar";

const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.white};
  padding-top: 88px;
`;

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%);
  color: white;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  position: relative;
  overflow: hidden;

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

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
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
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}20, ${({ theme }) => theme.colors['gold-muted']}20);
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  margin: ${({ theme }) => theme.spacing['3xl']} auto;
  max-width: 600px;
  text-align: center;
`;

const HighlightTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const HighlightText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: white;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const ComparisonSection = styled(Section)`
  background: ${({ theme }) => theme.colors['gray-50']};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['gray-600']};
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']} auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const ComparisonTable = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  background: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.5fr 1fr 1fr;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const TableHeaderCell = styled.div`
  color: ${({ $isHighlight }) => $isHighlight ? '#C9A227' : 'rgba(255, 255, 255, 0.7)'};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: ${({ theme }) => theme.spacing.lg};
  gap: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-200']};
  transition: background 0.2s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors['gray-50']};
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1.5fr 1fr 1fr;
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const FeatureCell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const ValueCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors['gray-700']};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const CheckIcon = styled(CheckCircle)`
  color: #10B981;
`;

const XIcon = styled(XCircle)`
  color: #EF4444;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const StatCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
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
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}20, ${({ theme }) => theme.colors['gold-muted']}20);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const CalculatorSection = styled(Section)`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
`;

const CalculatorBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing['2xl']};
  max-width: 700px;
  margin: 0 auto;
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const CalculatorTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  font-family: ${({ theme }) => theme.typography.fontHeading};
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
  border: 2px solid ${({ theme }) => theme.colors['gray-300']};
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

const PainPointsSection = styled(Section)`
  background: ${({ theme }) => theme.colors.white};
`;

const PainPointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
`;

const PainPointCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors['gray-50']};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  border-left: 4px solid ${({ theme }) => theme.colors.gold};
`;

const PainPointHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PainPointIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.gold}20;
  border-radius: ${({ theme }) => theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const PainPointTitle = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PainPointProblem = styled.p`
  color: ${({ theme }) => theme.colors['gray-700']};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const PainPointSolution = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-200']};
`;

const SolutionLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const SolutionText = styled.p`
  color: ${({ theme }) => theme.colors['gray-700']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const CTASection = styled(Section)`
  background: ${({ theme }) => theme.colors.black};
  color: white;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
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

  const comparisonData = [
    {
      feature: "Time per Itinerary",
      icon: <Clock size={20} />,
      manual: "8-12 hours",
      parkpro: "15-30 minutes"
    },
    {
      feature: "Crowd & Wait Time Data",
      icon: <Users size={20} />,
      manual: "Outdated or manual research",
      parkpro: "Real-time, auto-updated"
    },
    {
      feature: "Dining Reservations",
      icon: <Target size={20} />,
      manual: "Manual lookup & suggestions",
      parkpro: "Automated recommendations"
    },
    {
      feature: "Itinerary Updates",
      icon: <RefreshCw size={20} />,
      manual: "Manual edits, time-consuming",
      parkpro: "Instant regeneration"
    },
    {
      feature: "Client Customization",
      icon: <Award size={20} />,
      manual: <CheckIcon size={24} />,
      parkpro: <CheckIcon size={24} />
    },
    {
      feature: "Mobile Access for Clients",
      icon: <Zap size={20} />,
      manual: <XIcon size={24} />,
      parkpro: <CheckIcon size={24} />
    },
    {
      feature: "Professional Presentation",
      icon: <BarChart3 size={20} />,
      manual: "Basic, varies by agent",
      parkpro: "Consistent, professional"
    },
    {
      feature: "Learning Curve",
      icon: <TrendingUp size={20} />,
      manual: "Years of experience needed",
      parkpro: "Instant expertise"
    },
    {
      feature: "Scalability",
      icon: <Users size={20} />,
      manual: "Limited by time",
      parkpro: "Unlimited clients"
    },
    {
      feature: "Cost per Month",
      icon: <DollarSign size={20} />,
      manual: "Your time (worth $$$$)",
      parkpro: "$147/mo per seat (scales with team)"
    }
  ];

  const painPoints = [
    {
      icon: <Clock size={24} />,
      title: "Manual Research Takes Forever",
      problem: "Spending 8-12 hours researching crowd calendars, wait times, dining availability, and show schedules for every single itinerary? That's a full workday (or two) per client.",
      solution: "ParkPro aggregates all this data automatically and updates it in real-time. What took you 10 hours now takes 15 minutes."
    },
    {
      icon: <AlertCircle size={24} />,
      title: "Outdated Information Ruins Plans",
      problem: "Disney changes park hours, show times, and attractions frequently. By the time your client arrives, your carefully crafted plan is obsolete—and you get blamed.",
      solution: "We monitor Disney's schedules 24/7 and alert you to changes. Your itineraries stay current, and your reputation stays intact."
    },
    {
      icon: <Users size={24} />,
      title: "Can't Scale Your Business",
      problem: "You're limited to 5-10 clients per month because each itinerary takes forever. Want to grow? You physically can't without sacrificing quality or your sanity.",
      solution: "Serve 3x more clients in the same time. Agents using ParkPro handle 25-30+ Disney bookings per month with ease."
    },
    {
      icon: <DollarSign size={24} />,
      title: "Low ROI on Your Time",
      problem: "You're spending 12 hours on planning for a $150 commission. That's $12.50/hour. You could work at Target for better pay.",
      solution: "Reduce planning to 30 minutes. Same $150 commission = $300/hour. Now you're running a real business."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Client Changes = Start Over",
      problem: "Client changes their dates? Adds a day? Wants different dining? You're rebuilding the entire itinerary from scratch. Hours of work... gone.",
      solution: "Make changes in seconds. Click a button, regenerate the itinerary. Client changes their mind 10 times? No problem."
    },
    {
      icon: <Award size={24} />,
      title: "Inconsistent Quality",
      problem: "Some itineraries are masterpieces. Others are rushed because you're exhausted. New agents on your team produce mediocre results. Quality varies wildly.",
      solution: "Every itinerary is professional-grade, regardless of agent experience. Consistency builds your brand reputation."
    }
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>ParkPro vs Manual Disney Planning | Save 10+ Hours Per Client</title>
        <meta 
          name="description" 
          content="Manual Disney planning takes 8-12 hours per client. ParkPro does it in 15 minutes. See the side-by-side comparison and calculate your time savings." 
        />
        <meta 
          name="keywords" 
          content="disney planning software comparison, manual disney planning vs automation, travel agent time savings, disney itinerary software roi, parkpro vs manual planning" 
        />
      </Helmet>

      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Manual Planning vs ParkPro: The Real Comparison
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              See exactly how much time, money, and sanity you'll save by automating your Disney itinerary planning.
            </HeroSubtitle>
            
            <HighlightBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <HighlightTitle>The Bottom Line</HighlightTitle>
              <HighlightText>
                Manual planning: 8-12 hours per itinerary. ParkPro: 15-30 minutes.
                <br />
                <strong>That's a 95% time reduction.</strong>
              </HighlightText>
            </HighlightBox>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <Section>
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
              <StatNumber>10+ hrs</StatNumber>
              <StatLabel>Saved Per Client</StatLabel>
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
              <StatNumber>3x</StatNumber>
              <StatLabel>More Clients Per Month</StatLabel>
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
              <StatNumber>$4,400+</StatNumber>
              <StatLabel>Value of Time Saved Monthly</StatLabel>
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
              <StatNumber>95%</StatNumber>
              <StatLabel>Faster Planning Process</StatLabel>
            </StatCard>
          </StatsGrid>
        </Container>
      </Section>

      {/* Trust Bar */}
      <TrustBar variant="light" showSocialProof={false} />

      {/* Comparison Table Section */}
      <ComparisonSection>
        <Container>
          <SectionTitle>Side-by-Side Feature Comparison</SectionTitle>
          <SectionSubtitle>
            See exactly what you get with automated planning vs. doing everything manually
          </SectionSubtitle>

          <ComparisonTable>
            <TableHeader>
              <TableHeaderCell>Feature</TableHeaderCell>
              <TableHeaderCell>Manual Planning</TableHeaderCell>
              <TableHeaderCell $isHighlight>ParkPro</TableHeaderCell>
            </TableHeader>

            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <FeatureCell>
                  {row.icon}
                  {row.feature}
                </FeatureCell>
                <ValueCell>{row.manual}</ValueCell>
                <ValueCell>{row.parkpro}</ValueCell>
              </TableRow>
            ))}
          </ComparisonTable>
        </Container>
      </ComparisonSection>

      {/* ROI Calculator Section */}
      <CalculatorSection>
        <Container>
          <SectionTitle style={{ color: '#0B0B0C' }}>
            Calculate Your Time & Money Savings
          </SectionTitle>
          <SectionSubtitle style={{ color: '#0B0B0C' }}>
            Enter your numbers to see your personalized ROI
          </SectionSubtitle>

          <CalculatorBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <CalculatorTitle>
              <Calculator size={32} style={{ display: 'inline', marginRight: '12px' }} />
              ROI Calculator
            </CalculatorTitle>

            <InputGroup>
              <InputLabel>How many Disney clients do you serve per month?</InputLabel>
              <InputField
                type="number"
                value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                min="1"
                max="100"
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>How many hours do you spend per itinerary (manual planning)?</InputLabel>
              <InputField
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                min="1"
                max="40"
              />
            </InputGroup>

            <InputGroup>
              <InputLabel>What's your hourly rate? (Your time's worth)</InputLabel>
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
                  <ResultValue>${extraRevenue.toLocaleString()}/month</ResultValue>
                </ResultText>
              </ResultItem>
            </ResultsBox>
          </CalculatorBox>
        </Container>
      </CalculatorSection>

      {/* Pain Points Section */}
      <PainPointsSection>
        <Container>
          <SectionTitle>The Real Pain Points of Manual Planning</SectionTitle>
          <SectionSubtitle>
            And how ParkPro solves each one
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
                <PainPointHeader>
                  <PainPointIcon>{point.icon}</PainPointIcon>
                  <div>
                    <PainPointTitle>{point.title}</PainPointTitle>
                  </div>
                </PainPointHeader>
                <PainPointProblem>{point.problem}</PainPointProblem>
                <PainPointSolution>
                  <SolutionLabel>✓ ParkPro Solution:</SolutionLabel>
                  <SolutionText>{point.solution}</SolutionText>
                </PainPointSolution>
              </PainPointCard>
            ))}
          </PainPointsGrid>
        </Container>
      </PainPointsSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTATitle>Ready to Stop Wasting 10+ Hours Per Client?</CTATitle>
          <CTAText>
            Join hundreds of travel agents who've already made the switch to automated Disney planning. 
            Start saving time today with our 14-day money-back guarantee.
          </CTAText>
          <Button
            to="/request-access"
            variant="primary"
            size="lg"
            style={{
              background: '#C9A227',
              color: '#0B0B0C',
              padding: '16px 32px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            Get Started with ParkPro
            <ArrowRight size={20} />
          </Button>
        </Container>
      </CTASection>
    </PageWrapper>
  );
};

export default Comparison;

