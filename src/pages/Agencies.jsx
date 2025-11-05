import React from "react";
import theme from '../styles/theme';
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
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexColumnCenter } from "../styles/mixins";

// Agencies Solution Page
const AgenciesWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
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
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233B82F6' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
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
      title: "Advanced Analytics",
      description: "Comprehensive dashboard to track team performance, client satisfaction, and business metrics across all agents.",
      outcomes: ["Team performance insights", "Client satisfaction tracking", "Business growth metrics"]
    },
    {
      icon: <Crown size={32} />,
      title: "White-Label Branding",
      description: "Customize the entire platform with your agency's branding, colors, and logo for a professional client experience.",
      outcomes: ["Agency branding", "Professional presentation", "Brand consistency"]
    },
    {
      icon: <Settings size={32} />,
      title: "Admin Controls",
      description: "Manage user permissions, set up approval workflows, and control access to different features for your team.",
      outcomes: ["User management", "Permission controls", "Workflow automation"]
    },
    {
      icon: <Headphones size={32} />,
      title: "Priority Support",
      description: "Dedicated support team with faster response times, training sessions, and priority assistance for your agency.",
      outcomes: ["Dedicated support", "Training sessions", "Priority assistance"]
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "Advanced security features, compliance tools, and data protection measures designed for larger organizations.",
      outcomes: ["Advanced security", "Compliance tools", "Data protection"]
    }
  ];

  const testimonials = [
    {
      quote: "ParkPro has transformed our agency's Disney planning process. Our agents are now 3x more efficient, and our clients love the consistent, professional experience.",
      author: "Jennifer Martinez",
      title: "Agency Owner",
      company: "Dream Vacations Orlando"
    },
    {
      quote: "The team collaboration features are incredible. New agents can learn from our best practices, and we can ensure every client gets the same high-quality experience.",
      author: "David Thompson",
      title: "Operations Manager",
      company: "Magic Moments Travel"
    },
    {
      quote: "The analytics dashboard gives us insights we never had before. We can see which agents are performing best and replicate their success across the team.",
      author: "Sarah Wilson",
      title: "Agency Director",
      company: "Luxury Travel Group"
    }
  ];

  return (
    <AgenciesWrapper>
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
              Scale Your Agency with <span className="gradient-text">Team Collaboration</span>
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Standardize your Disney planning process across all agents. Improve team collaboration, 
              ensure consistent quality, and scale your agency with powerful team management tools.
            </HeroSubtitle>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
            >
              <Button variant="primary" size="lg" to="/request-access">
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
                <StatNumber>50%</StatNumber>
                <StatLabel>Time Saved</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <StatNumber>2x</StatNumber>
                <StatLabel>Team Efficiency</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <StatNumber>99%</StatNumber>
                <StatLabel>Client Satisfaction</StatLabel>
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

      {/* Testimonials Section */}
      <TestimonialsSection>
        <Container>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What Agency Owners Are Saying
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the growing community of travel agencies who've transformed their Disney planning process.
            </SectionSubtitle>
          </SectionHeader>

          <CardGrid columns={3} gap={6}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard>
                  <TestimonialQuote>{testimonial.quote}</TestimonialQuote>
                  <TestimonialAuthor>
                    <AuthorName>{testimonial.author}</AuthorName>
                    <AuthorTitle>{testimonial.title}</AuthorTitle>
                    <AuthorCompany>{testimonial.company}</AuthorCompany>
                  </TestimonialAuthor>
                </TestimonialCard>
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
              Ready to Scale Your Agency?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of travel agencies who've already revolutionized their Disney planning process 
              and increased their team efficiency by 2x with ParkPro.
            </CTASubtitle>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ButtonGroup>
                <Button variant="primary" size="lg" to="/request-access">
                  <Star size={20} />
                  Schedule Demo
                </Button>
                <Button variant="secondary" size="lg" to="/demo">
                  <Play size={20} />
                  Watch Demo
                </Button>
              </ButtonGroup>
            </motion.div>
          </CTAContent>
        </Container>
      </CTASection>
    </AgenciesWrapper>
  );
};

export default Agencies;
