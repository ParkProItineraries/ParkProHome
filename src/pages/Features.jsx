import React, { useState } from "react";
import theme from '../styles/theme';
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Zap, 
  FileText, 
  Palette, 
  BarChart3, 
  Settings, 
  Rocket,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Smartphone,
  Star,
  Play,
  Download,
  Share2,
  Target,
  Award,
  Headphones,
  Globe
} from "lucide-react";
import { copy } from "../content/strings";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import SEO, { SEOConfigs } from "../components/seo/SEO";
import { flexCenter, flexColumnCenter } from "../styles/mixins";

// Enhanced Features Page with Agent-Focused Outcomes
const FeaturesWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
`;

const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const FeaturesBadge = styled(motion.div)`
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

const FeaturesTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const FeaturesSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

// Feature Categories Tabs
const FeatureTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureTab = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  border: 2px solid ${({ active, theme }) => 
    active ? theme.colors.gold : theme.colors['gray-300']};
  background: ${({ active, theme }) => 
    active ? theme.colors.gold : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.black : theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.black};
  }
`;

// Outcome Metrics Section
const MetricsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors['gray-50']};
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const MetricCard = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors['border-light']};
`;

const MetricNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const MetricLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors['text-primary']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const MetricDescription = styled.div`
  color: ${({ theme }) => theme.colors['text-secondary']};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

// Demo Section
const DemoSection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const DemoContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const DemoTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const DemoSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const DemoVideo = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: ${({ theme }) => theme.colors['gray-900']};
  border-radius: ${({ theme }) => theme.radius.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  overflow: hidden;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: scale(1.02);
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.gold};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
  background: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
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

const Features = () => {
  const [activeTab, setActiveTab] = useState('core');

  const featureCategories = {
    core: {
      title: 'Core Features',
      description: 'Essential tools for Disney planning success',
      features: [
        {
          icon: <Zap size={32} />,
          title: 'Lightning-Fast Automation',
          description: 'Generate complete Disney itineraries in under 30 seconds. Our AI considers crowd levels, wait times, and client preferences.',
          outcomes: ['Save 10+ hours per client', '3x faster than manual planning', '98% client satisfaction rate'],
          badge: 'Most Popular'
        },
        {
          icon: <FileText size={32} />,
          title: 'Smart Client Intake',
          description: 'Branded intake forms that automatically collect preferences and link to your account for seamless workflow.',
          outcomes: ['50% faster client onboarding', 'Zero data entry required', 'Professional branded experience'],
          badge: null
        },
        {
          icon: <Palette size={32} />,
          title: 'Beautiful Itineraries',
          description: 'Professional, branded itineraries that clients love. PDF exports, mobile viewing, and easy sharing.',
          outcomes: ['Professional presentation', 'Mobile-optimized viewing', 'Easy sharing options'],
          badge: null
        }
      ]
    },
    advanced: {
      title: 'Advanced Features',
      description: 'Power tools for scaling your business',
      features: [
        {
          icon: <BarChart3 size={32} />,
          title: 'Client Dashboard',
          description: 'Manage all trips in one place. Track client engagement, regenerate plans, and monitor performance.',
          outcomes: ['Centralized trip management', 'Client communication tracking', 'Performance analytics'],
          badge: null
        },
        {
          icon: <Settings size={32} />,
          title: 'Easy Customization',
          description: 'Edit any section before sending. Add notes, change times, or modify attractions with drag-and-drop editing.',
          outcomes: ['Drag-and-drop editing', 'Real-time preview', 'Version history'],
          badge: null
        },
        {
          icon: <Shield size={32} />,
          title: 'Enterprise Security',
          description: 'Bank-level security with 99.9% uptime ensures your agency data and client itineraries are always protected.',
          outcomes: ['Bank-level security', '99.9% uptime guarantee', 'SOC 2 compliance'],
          badge: null
        }
      ]
    },
    future: {
      title: 'Future Features',
      description: 'Expanding beyond Disney to all destinations',
      features: [
        {
          icon: <Rocket size={32} />,
          title: 'Multi-Destination Platform',
          description: 'Expanding to Disneyland, Disney Cruises, Universal, and Sandals. One platform for all your travel planning needs.',
          outcomes: ['Universal Studios integration', 'Disney Cruise planning', 'Sandals resort packages'],
          badge: 'Coming Soon'
        },
        {
          icon: <Globe size={32} />,
          title: 'Global Expansion',
          description: 'Planning for international destinations including European theme parks, Asian resorts, and cruise lines.',
          outcomes: ['European theme parks', 'Asian resort planning', 'Global cruise integration'],
          badge: '2025'
        },
        {
          icon: <Target size={32} />,
          title: 'AI-Powered Recommendations',
          description: 'Advanced AI that learns from your successful bookings to suggest optimal itineraries and upsell opportunities.',
          outcomes: ['Predictive recommendations', 'Upsell optimization', 'Revenue maximization'],
          badge: 'Beta'
        }
      ]
    }
  };

  const metrics = [
    {
      number: '5min',
      label: 'Average Creation Time',
      description: 'From client intake to final itinerary'
    },
    {
      number: '3x',
      label: 'More Bookings',
      description: 'Agents can handle 3x more clients'
    },
    {
      number: '10hrs',
      label: 'Time Saved',
      description: 'Per client compared to manual planning'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Based on post-trip surveys'
    }
  ];

  const currentFeatures = featureCategories[activeTab];

  return (
    <FeaturesWrapper>
      <SEO {...SEOConfigs.features} />
      <Section>
        <Container>
          <FeaturesHeader>
            <FeaturesBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Powerful Features
            </FeaturesBadge>
            <FeaturesTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.features.h1}
            </FeaturesTitle>
            <FeaturesSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {copy.pages.features.sub}
            </FeaturesSubtitle>
          </FeaturesHeader>

          <FeatureTabs>
            {Object.entries(featureCategories).map(([key, category]) => (
              <FeatureTab
                key={key}
                active={activeTab === key}
                onClick={() => setActiveTab(key)}
              >
                {category.title}
              </FeatureTab>
            ))}
          </FeatureTabs>

          <CardGrid columns={3} gap={6}>
            {currentFeatures.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="elevated" hover>
                  <div style={{ textAlign: 'center' }}>
                    {feature.badge && (
                      <div style={{
                        background: `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors['primary-dark']})`,
                        color: '#0B0B0C',
                        fontSize: '12px',
                        fontWeight: '600',
                        padding: '4px 12px',
                        borderRadius: '8px',
                        display: 'inline-block',
                        marginBottom: '16px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}>
                        {feature.badge}
                      </div>
                    )}
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
                        Agent Outcomes:
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
      </Section>

      <MetricsSection>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '48px' }}
          >
            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#0B0B0C',
              marginBottom: '16px',
              fontFamily: "'Urbanist', 'DM Sans', sans-serif"
            }}>
              Proven Results for Travel Agents
            </h2>
            <p style={{
              fontSize: '20px',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Real metrics from travel agents who've transformed their Disney planning business with ParkPro.
            </p>
          </motion.div>

          <MetricsGrid>
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MetricNumber>{metric.number}</MetricNumber>
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricDescription>{metric.description}</MetricDescription>
              </MetricCard>
            ))}
          </MetricsGrid>
        </Container>
      </MetricsSection>

      <DemoSection>
        <Container>
          <DemoContent>
            <DemoTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              See ParkPro in Action
            </DemoTitle>
            <DemoSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Watch how travel agents create professional Disney itineraries in under 5 minutes, 
              from client intake to final delivery.
            </DemoSubtitle>
            
            <DemoVideo
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PlayButton>
                <Play size={32} />
              </PlayButton>
            </DemoVideo>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/demo">
                <Play size={20} />
                Watch Full Demo
              </Button>
            </motion.div>
          </DemoContent>
        </Container>
      </DemoSection>

      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Disney Business?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join hundreds of travel agents who've already revolutionized their Disney planning process 
              and increased their bookings by 3x with ParkPro.
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
                  Join Early Access
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
    </FeaturesWrapper>
  );
};

export default Features; 
