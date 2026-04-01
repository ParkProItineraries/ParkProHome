import React from "react";
import theme from '../styles/theme';
import SEO from '../components/seo/SEO';
import { SEOConfigs } from '../components/seo/SEOConfigs';
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
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
  X,
  Globe,
  Settings,
  Crown
} from "lucide-react";
import { copy } from "../content/strings";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexColumnCenter } from "../styles/mixins";

// Agencies Solution Page
const AgenciesWrapper = styled.div`
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

const Agencies = () => {
  const problems = [
    "Inconsistent Disney planning quality across agents",
    "Difficulty training new agents on Disney planning",
    "Time-consuming manual processes slowing down the team",
    "Lack of standardized branding and client experience",
    "Challenges tracking team performance and client satisfaction"
  ];

  const features = [
    {
      icon: <Users size={32} />,
      title: "Team Collaboration",
      description: "Centralized platform where all agents can access client information, share best practices, and collaborate on complex bookings.",
      outcomes: ["Unified team workflow", "Shared knowledge base", "Consistent client experience"]
    },
    {
      icon: <BarChart3 size={32} />,
      title: "Agency Dashboard (Coming Soon)",
      description: "Agency-wide dashboard to see trip volume, agent activity, and client pipeline across your team.",
      outcomes: ["Agency overview", "Trip tracking across agents", "Coming in a future update"]
    },
    {
      icon: <Crown size={32} />,
      title: "Agency Branding",
      description: "Add your agency's logo to itineraries and client-facing materials for a consistent, professional experience.",
      outcomes: ["Logo on itineraries", "Professional presentation", "Brand consistency"]
    },
    {
      icon: <Settings size={32} />,
      title: "Admin Controls",
      description: "Manage user permissions and control access to different features for your team.",
      outcomes: ["User management", "Permission controls", "Role-based access"]
    },
    {
      icon: <Headphones size={32} />,
      title: "Priority Support",
      description: "Dedicated support team with faster response times, training sessions, and priority assistance for your agency.",
      outcomes: ["Dedicated support", "Training sessions", "Priority assistance"]
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Infrastructure",
      description: "Industry-standard security with encryption, role-based access controls, and secure payment processing.",
      outcomes: ["SSL encryption", "Role-based access", "Data protection"]
    }
  ];

  const valueProps = [
    {
      title: "Standardize Quality",
      description: "Every agent on your team uses the same engine and the same workflow, so every client gets a consistent, professional experience."
    },
    {
      title: "Onboard Faster",
      description: "New agents can start producing quality Disney itineraries in days instead of months, because the system does the heavy lifting."
    },
    {
      title: "Scale Without Burnout",
      description: "If each agent saves 5–10+ hours per client, your agency can handle more bookings without hiring extra staff."
    }
  ];

  return (
    <AgenciesWrapper>
      <SEO {...SEOConfigs.agencies} schemaType="SoftwareApplication" />
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Building2 size={16} style={{ marginRight: '8px' }} />
              Perfect for Travel Agencies
            </HeroBadge>
            
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.agencies.h1}
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {copy.pages.agencies.sub}
            </HeroSubtitle>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
            >
              <Button variant="primary" size="lg" to="/demo">
                <Star size={20} />
                Schedule Demo
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
                <StatLabel>Saved Per Agent, Per Client</StatLabel>
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
                <StatLabel>Workspace for Your Team</StatLabel>
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
                The Agency Challenge
              </ProblemTitle>
              <ProblemDescription
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Managing a team of travel agents comes with unique challenges. Ensuring consistent quality, 
                training new agents, and maintaining your agency's reputation while scaling can be overwhelming.
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
                <Building2 size={64} />
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
                ParkPro Agency Solution
              </div>
              <div style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.6' }}>
                Team collaboration tools that standardize your Disney planning process and scale your agency
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
              Powerful Team Management Features
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need to manage your team, ensure quality, and scale your agency's Disney planning business.
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
                        Agency Benefits:
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
              Why Agencies Choose ParkPro
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Built for agencies that want a single, standardized system for Disney planning across their team.
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
              Ready to scale your agency?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how ParkPro helps agencies standardize itineraries, save hours across the team, and scale without scaling headcount. Book a demo for your agency.
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
    </AgenciesWrapper>
  );
};

export default Agencies;
