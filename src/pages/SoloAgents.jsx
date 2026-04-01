import React from "react";
import theme from '../styles/theme';
import SEO from '../components/seo/SEO';
import { SEOConfigs } from '../components/seo/SEOConfigs';
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Users, 
  Clock, 
  TrendingUp, 
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Shield,
  Smartphone,
  Headphones,
  Zap,
  Award,
  Target,
  BarChart3,
  FileText,
  Palette,
  X
} from "lucide-react";
import { copy } from "../content/strings";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexColumnCenter } from "../styles/mixins";

// Solo Agents Solution Page
const SoloAgentsWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }
  
  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

const HeroSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black} 0%, ${({ theme }) => theme.colors['gray-900']} 100%);
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5C249' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  margin: 0 auto;
`;

const HeroBadge = styled(motion.div)`
  background: rgba(201, 162, 39, 0.1);
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 162, 39, 0.3);
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes['6xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  
  .gradient-text {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const HeroStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: ${({ theme }) => theme.shadows.xl};
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

// Problem/Solution Section
const ProblemSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors['gray-50']};
`;

const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const ProblemContent = styled.div``;

const ProblemTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const ProblemDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['gray-600']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const ProblemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ProblemItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  
  svg {
    color: ${({ theme }) => theme.colors.error};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const SolutionVisual = styled.div`
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  min-height: 300px;
  ${flexColumnCenter}
`;

// Features Section
const FeaturesSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.white};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors['gray-50']};
`;

const TestimonialCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
  border: none;
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

const TestimonialQuote = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['text-primary']};
  font-style: italic;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  &::before {
    content: '"';
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
    color: ${({ theme }) => theme.colors.gold};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  }
  
  &::after {
    content: '"';
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
    color: ${({ theme }) => theme.colors.gold};
    font-weight: ${({ theme }) => theme.typography.weights.bold};
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const AuthorName = styled.div`
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors['text-primary']};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

const AuthorTitle = styled.div`
  color: ${({ theme }) => theme.colors['text-secondary']};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const AuthorCompany = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const SoloAgents = () => {
  const problems = [
    "Spending 8+ hours per Disney itinerary",
    "Struggling to keep up with client demand",
    "Losing bookings to competitors with faster turnaround",
    "Burning out from manual planning processes",
    "Difficulty scaling your business"
  ];

  const features = [
    {
      icon: <Zap size={32} />,
      title: "Lightning-Fast Automation",
      description: "Generate complete Disney itineraries in minutes, not hours. Our engine considers park-flow patterns, wait times, and client preferences.",
      outcomes: ["Save 5–10+ hours per client", "Dramatically faster than manual planning", "Polished, client-ready output"]
    },
    {
      icon: <FileText size={32} />,
      title: "Professional Branding",
      description: "Create beautiful, branded itineraries that make you look like a Disney expert. White-label forms and professional PDFs.",
      outcomes: ["Professional presentation", "Branded client experience", "Easy sharing options"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Trip Dashboard",
      description: "See all your trips, clients, and itineraries in one organized workspace. Know exactly where every booking stands.",
      outcomes: ["Trip tracking", "Client management", "Clear workspace"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Ready",
      description: "Your clients get a mobile-optimized portal to view their itinerary, message you, and access trip documents on the go.",
      outcomes: ["Mobile client portal", "In-park access for clients", "Calendar export"]
    },
    {
      icon: <Headphones size={32} />,
      title: "Email Support",
      description: "Get help when you need it with our responsive email support team. We're here to help you succeed.",
      outcomes: ["Quick response times", "Expert guidance", "Success tips"]
    },
    {
      icon: <Shield size={32} />,
      title: "Secure & Reliable",
      description: "Industry-standard security with encryption, access controls, and secure payment processing through Stripe.",
      outcomes: ["SSL encryption", "Stripe-verified payments", "Data protection"]
    }
  ];

  const valueProps = [
    {
      title: "Minutes, Not Hours",
      description: "Go from client intake to a structured, day-by-day Disney itinerary in minutes instead of spending entire days on manual planning."
    },
    {
      title: "Concierge-Level Output",
      description: "Deliver clean, professional park-day plans that show your clients you know Disney inside and out."
    },
    {
      title: "More Clients, Less Burnout",
      description: "Free up hours per client so you can take on more bookings without working nights and weekends."
    }
  ];

  return (
    <SoloAgentsWrapper>
      <SEO {...SEOConfigs['solo-agents']} schemaType="SoftwareApplication" />
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Users size={16} style={{ marginRight: '8px' }} />
              Perfect for Solo Travel Agents
            </HeroBadge>
            
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.solo.h1}
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {copy.pages.solo.sub}
            </HeroSubtitle>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
            >
              <Button variant="primary" size="lg" to="/demo">
                <Star size={20} />
                Start Free Trial
              </Button>
              <Button variant="secondary" size="lg" to="/demo">
                <Play size={20} />
                Watch Demo
              </Button>
            </motion.div>
            
            <HeroStats
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <StatNumber>5–10+ hrs</StatNumber>
                <StatLabel>Saved Per Client</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <StatNumber>Minutes</StatNumber>
                <StatLabel>To Build an Itinerary</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <StatNumber>1</StatNumber>
                <StatLabel>Platform for Everything</StatLabel>
              </StatCard>
            </HeroStats>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Problem/Solution Section */}
      <ProblemSection>
        <Container>
          <ProblemGrid>
            <ProblemContent>
              <ProblemTitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                The Solo Agent Struggle
              </ProblemTitle>
              <ProblemDescription
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                As a solo travel agent, you're wearing all the hats. You're the planner, the researcher, 
                the customer service rep, and the business owner. Disney planning is time-consuming and 
                complex, but it doesn't have to be.
              </ProblemDescription>
              <ProblemList>
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '16px',
                      color: '#6B7280',
                      fontSize: '16px'
                    }}
                  >
                    <X size={20} style={{ color: '#EF4444', flexShrink: 0, marginTop: '2px' }} />
                    {problem}
                  </motion.li>
                ))}
              </ProblemList>
            </ProblemContent>
            <SolutionVisual
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div style={{ fontSize: '64px', marginBottom: '24px', color: theme.colors.primary }}>
                <Target size={64} />
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
                ParkPro Solution
              </div>
              <div style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.6' }}>
                Automated Disney planning that saves you 5–10+ hours per client so you can serve more families
              </div>
            </SolutionVisual>
          </ProblemGrid>
        </Container>
      </ProblemSection>

      {/* Features Section */}
      <FeaturesSection>
        <Container>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Everything You Need to Succeed as a Solo Agent
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Powerful features designed specifically for solo travel agents who want to scale their Disney business.
            </SectionSubtitle>
          </SectionHeader>

          <CardGrid columns={3} gap={6}>
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" hover>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '16px',
                      background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors['primary-dark']})`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 24px',
                      color: '#0B0B0C',
                      fontSize: '32px'
                    }}>
                      {feature.icon}
                    </div>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#0B0B0C',
                      marginBottom: '16px',
                      fontFamily: "'Urbanist', 'DM Sans', sans-serif"
                    }}>
                      {feature.title}
                    </h3>
                    <p style={{
                      color: '#6B7280',
                      lineHeight: '1.6',
                      marginBottom: '24px'
                    }}>
                      {feature.description}
                    </p>
                    <div style={{ textAlign: 'left' }}>
                      <h4 style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        color: '#0B0B0C',
                        marginBottom: '12px'
                      }}>
                        Solo Agent Benefits:
                      </h4>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                      }}>
                        {feature.outcomes.map((outcome, outcomeIndex) => (
                          <li key={outcomeIndex} style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            marginBottom: '8px',
                            color: '#6B7280',
                            fontSize: '14px'
                          }}>
                            <CheckCircle size={16} style={{ color: theme.colors.primary, flexShrink: 0, marginTop: '2px' }} />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </CardGrid>
        </Container>
      </FeaturesSection>

      {/* Value Props Section */}
      <TestimonialsSection>
        <Container>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Solo Agents Choose ParkPro
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Built specifically for independent travel agents who want to spend less time planning and more time serving clients.
            </SectionSubtitle>
          </SectionHeader>

          <CardGrid columns={3} gap={6}>
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="elevated" hover>
                  <div style={{ textAlign: 'center', padding: '16px' }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: '#0B0B0C',
                      marginBottom: '16px',
                      fontFamily: "'Urbanist', 'DM Sans', sans-serif"
                    }}>
                      {prop.title}
                    </h3>
                    <p style={{
                      color: '#6B7280',
                      lineHeight: '1.6'
                    }}>
                      {prop.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </CardGrid>
        </Container>
      </TestimonialsSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to scale your solo Disney business?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how ParkPro helps solo agents save 5–10+ hours per client. Book a demo and we'll walk you through a live planning workflow.
            </CTASubtitle>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/demo">
                Book a Demo →
              </Button>
            </motion.div>
          </CTAContent>
        </Container>
      </CTASection>
    </SoloAgentsWrapper>
  );
};

export default SoloAgents;
