import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Crown, 
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
  Building2,
  Lock,
  Server,
  Database,
  Code,
  Zap as Lightning
} from "lucide-react";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexColumnCenter } from "../styles/mixins";

// Enterprise Solution Page
const EnterpriseWrapper = styled.div`
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

const Enterprise = () => {
  const problems = [
    "Complex integration requirements with existing systems",
    "Need for advanced security and compliance features",
    "Requirement for custom workflows and business logic",
    "Need for dedicated support and training resources",
    "Challenges with data governance and user management"
  ];

  const features = [
    {
      icon: <Code size={32} />,
      title: "Custom Integrations",
      description: "Full API access and custom integrations with your existing CRM, booking systems, and business tools.",
      outcomes: ["Full API access", "Custom integrations", "Seamless workflow"]
    },
    {
      icon: <Lock size={32} />,
      title: "Advanced Security",
      description: "Enterprise-grade security with SSO, advanced encryption, audit logs, and compliance certifications.",
      outcomes: ["SSO integration", "Advanced encryption", "Audit logging"]
    },
    {
      icon: <Server size={32} />,
      title: "Dedicated Infrastructure",
      description: "Private cloud deployment with dedicated resources, custom SLAs, and priority performance guarantees.",
      outcomes: ["Private cloud", "Dedicated resources", "Custom SLAs"]
    },
    {
      icon: <Users size={32} />,
      title: "Dedicated Account Manager",
      description: "Personal account manager with deep industry expertise to help you maximize your investment.",
      outcomes: ["Personal support", "Industry expertise", "Strategic guidance"]
    },
    {
      icon: <Database size={32} />,
      title: "Data Governance",
      description: "Advanced data management, backup, and recovery with custom retention policies and data sovereignty.",
      outcomes: ["Data management", "Backup & recovery", "Custom policies"]
    },
    {
      icon: <Settings size={32} />,
      title: "Custom Workflows",
      description: "Tailored business processes, approval workflows, and custom reporting to match your organization.",
      outcomes: ["Custom processes", "Approval workflows", "Tailored reporting"]
    }
  ];

  const testimonials = [
    {
      quote: "ParkPro's enterprise solution has transformed our global travel operations. The custom integrations and dedicated support have been game-changing for our business.",
      author: "Michael Chen",
      title: "CTO",
      company: "Global Travel Solutions"
    },
    {
      quote: "The security and compliance features give us confidence to use ParkPro across our entire organization. The dedicated account manager has been invaluable.",
      author: "Sarah Williams",
      title: "VP of Operations",
      company: "Premier Travel Group"
    },
    {
      quote: "The custom workflows and API integrations have allowed us to seamlessly integrate ParkPro into our existing systems. The ROI has been exceptional.",
      author: "David Rodriguez",
      title: "Head of Technology",
      company: "Luxury Travel Enterprises"
    }
  ];

  return (
    <EnterpriseWrapper>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Crown size={16} style={{ marginRight: '8px' }} />
              Enterprise Solution
            </HeroBadge>
            
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enterprise-Grade <span className="gradient-text">Disney Planning</span>
            </HeroTitle>
            
            <HeroSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Comprehensive solution for large organizations with custom integrations, 
              dedicated support, advanced security, and enterprise-grade infrastructure.
            </HeroSubtitle>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
            >
              <Button variant="primary" size="lg" to="/request-access">
                <Star size={20} />
                Contact Sales
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
                <StatNumber>99.9%</StatNumber>
                <StatLabel>Uptime SLA</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <StatNumber>24/7</StatNumber>
                <StatLabel>Dedicated Support</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <StatNumber>100%</StatNumber>
                <StatLabel>Custom Integration</StatLabel>
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
                The Enterprise Challenge
              </ProblemTitle>
              <ProblemDescription
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Large organizations have unique requirements: complex integrations, advanced security, 
                custom workflows, and dedicated support. Standard solutions don't meet enterprise needs.
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
              <div style={{ fontSize: '64px', marginBottom: '24px', color: '#3B82F6' }}>
                <Crown size={64} />
              </div>
              <div style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>
                ParkPro Enterprise
              </div>
              <div style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.6' }}>
                Custom solutions with enterprise-grade security, dedicated support, and seamless integrations
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
              Enterprise-Grade Features
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need to deploy ParkPro across your entire organization with confidence and control.
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
                      background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
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
                        Enterprise Benefits:
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
                            <CheckCircle size={16} style={{ color: '#3B82F6', flexShrink: 0, marginTop: '2px' }} />
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
              What Enterprise Leaders Are Saying
            </SectionTitle>
            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the growing community of enterprise organizations who've transformed their Disney planning operations.
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
              Ready to Transform Your Enterprise?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact our enterprise team to discuss your specific requirements and get a custom solution 
              that meets your organization's unique needs.
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
                  Contact Sales
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
    </EnterpriseWrapper>
  );
};

export default Enterprise;
