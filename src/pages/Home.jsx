import React from "react";
import theme from '../styles/theme';
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  Star, 
  Clock, 
  Users, 
  TrendingUp, 
  Shield, 
  Smartphone,
  ArrowRight,
  Play
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexColumnCenter } from "../styles/mixins";
import Testimonials from "../components/home/Testimonials";
import TrustBar from "../components/TrustBar";
import { copy } from "../content/strings";

// Enhanced Home Page Wrapper
const HomeWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontBody};
  overflow-x: hidden;
  padding-top: 88px; // Account for fixed navbar
`;

// Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black} 0%, ${({ theme }) => theme.colors['gray-900']} 100%);
  position: relative;
  overflow: visible;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  ${flexColumnCenter}
`;

const Badge = styled(motion.div)`
  background: rgba(201, 162, 39, 0.1);
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.full};
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: ${({ theme }) => theme.shadows.gold};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(201, 162, 39, 0.3);
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes['7xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  .gradient-text {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: ${({ theme }) => theme.typography.weights.normal};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const SocialProof = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing['3xl']};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${({ theme }) => theme.spacing['3xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const StatItem = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(255, 255, 255, 0.95);
  border-radius: ${({ theme }) => theme.radius.lg};
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: ${({ theme }) => theme.shadows.xl};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows['2xl']};
  }
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black}, ${({ theme }) => theme.colors['gray-900']});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  text-transform: uppercase;
  letter-spacing: 0.05em;
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
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 600px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const CTAContent = styled.div`
  ${flexColumnCenter}
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const CTAButtonsWrapper = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Home = () => {
  const features = [
    {
      icon: <Clock size={32} />,
      title: "Save hours per itinerary",
      description: "Agents aim to save 5–10+ hours of manual planning time per Disney trip. Turn intake forms into structured, day-by-day itineraries faster."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "More trips, less burnout",
      description: "Serve more Disney clients by cutting the manual planning workload on each itinerary. Handle more trips in the same working hours."
    },
    {
      icon: <Users size={32} />,
      title: "Client-ready deliverables",
      description: "Deliver organized, day-by-day itineraries with park schedules, dining recommendations, and export-ready formats that feel premium."
    },
    {
      icon: <Shield size={32} />,
      title: "Built for agencies",
      description: "Modern, secure infrastructure and a roadmap designed for growing travel agencies. Support for multiple seats and team workflows."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile-friendly workspace",
      description: "Access your ParkPro workspace from your laptop or on the go, so you're never far from your Disney itineraries."
    },
    {
      icon: <Star size={32} />,
      title: "Early access benefits",
      description: "Join a small group of Disney-focused agents shaping ParkPro's roadmap. Get direct input on features and workflows."
    }
  ];

  const stats = [
    { number: "Save hours", label: "Per itinerary (goal)" },
    { number: "More capacity", label: "Same working hours" },
    { number: "Cleaner plans", label: "Premium deliverables" }
  ];

  // SEO Schema Markup for better Google visibility
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ParkPro",
    "url": "https://parkproit.com",
    "logo": "https://parkproit.com/assets/logo.png",
    "description": "Travel agent itinerary and workflow software built for Disney-focused travel advisors. Helps agents save hours on Disney trip planning.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-260-312-0506",
      "contactType": "Customer Service",
      "email": "support@parkproit.com"
    },
    "sameAs": [
      "https://www.facebook.com/parkproit",
      "https://www.instagram.com/parkproit"
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ParkPro",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/PreOrder",
      "description": "Subscription pricing available for solo agents and agencies"
    },
    "description": "ParkPro is travel agent itinerary and workflow software built for Disney-focused travel advisors. It helps agents turn client intake forms into clean, day-by-day itineraries faster, while keeping all trips organized in one workspace."
  };

  return (
    <HomeWrapper>
      <SEO {...SEOConfigs.home} schemaType="SoftwareApplication" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
      </Helmet>

      <main role="main" aria-label="ParkPro homepage content">
        {/* Hero Section */}
        <HeroSection role="banner" aria-label="ParkPro - Automated Disney Planning for Travel Agents">
          <Container>
            <HeroContent>
              <Badge
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                role="status"
                aria-label="Early access program for travel agents"
              >
                <Star size={16} aria-hidden="true" />
                {copy.hero.badge}
              </Badge>
              
              <Title
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                {copy.hero.h1}
              </Title>
              
              <Subtitle
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                {copy.hero.sub}
              </Subtitle>
              
              <CTAButtons
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                role="group"
                aria-label="Call to action buttons"
              >
                <Button 
                  to="/request-access" 
                  variant="primary" 
                  size="lg"
                  aria-label="Join early access program for travel agents"
                >
                  {copy.ctas.start}
                  <ArrowRight size={20} />
                </Button>
                <Button 
                  to="/demo" 
                  variant="secondary" 
                  size="lg"
                  aria-label="See how ParkPro works - Watch demo"
                >
                  <Play size={20} />
                  {copy.ctas.demo}
                </Button>
              </CTAButtons>
              
              <SocialProof
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                role="group"
                aria-label="Key statistics and benefits"
              >
                {stats.map((stat, index) => (
                  <StatItem
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                    role="article"
                    aria-label={`${stat.number} ${stat.label}`}
                  >
                    <StatNumber aria-label={stat.number}>{stat.number}</StatNumber>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                ))}
              </SocialProof>
            </HeroContent>
          </Container>
        </HeroSection>

        {/* Trust Bar */}
        <TrustBar variant="light" showSocialProof={true} />

        {/* Features Section */}
        <FeaturesSection>
          <Container>
            <SectionHeader>
              <SectionTitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Why Travel Agents Choose ParkPro
              </SectionTitle>
              <SectionSubtitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Built with Disney-focused travel agents to save hours on planning and deliver cleaner client experiences.
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
                  style={{ height: '100%', display: 'flex' }}
                >
                  <Card variant="elevated" hover style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ 
                      textAlign: 'center', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%',
                      padding: theme.spacing.xl
                    }}>
                      <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '16px',
                        background: `linear-gradient(135deg, ${theme.colors.gold}, ${theme.colors['gold-muted']})`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        color: '#0B0B0C',
                        flexShrink: 0
                      }}>
                        {feature.icon}
                      </div>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '600',
                        color: '#0B0B0C',
                        marginBottom: '16px',
                        fontFamily: "'Urbanist', 'DM Sans', sans-serif",
                        lineHeight: '1.3'
                      }}>
                        {feature.title}
                      </h3>
                      <p style={{
                        color: '#6B7280',
                        lineHeight: '1.6',
                        margin: 0,
                        flex: 1
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </CardGrid>
          </Container>
        </FeaturesSection>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Concierge Section */}
        <FeaturesSection style={{ background: theme.colors.white, paddingTop: theme.spacing['2xl'] }}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card variant="elevated" style={{ maxWidth: '800px', margin: '0 auto', padding: theme.spacing['2xl'], textAlign: 'center' }}>
                <Star size={32} style={{ color: theme.colors.gold, marginBottom: theme.spacing.md }} />
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0B0B0C',
                  marginBottom: '16px',
                  fontFamily: "'Urbanist', 'DM Sans', sans-serif"
                }}>
                  Concierge Itineraries
                </h3>
                <p style={{
                  color: '#6B7280',
                  lineHeight: '1.6',
                  margin: 0,
                  fontSize: '16px'
                }}>
                  {copy.trust.concierge}
                </p>
              </Card>
            </motion.div>
          </Container>
        </FeaturesSection>

        <CTASection>
          <Container>
            <CTAContent>
              <CTATitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to plan Disney trips in a fraction of the time?
              </CTATitle>
              
              <CTASubtitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                We're rolling ParkPro out with a small group of Disney-focused travel agents and agencies. Join early access to save hours on each itinerary and help shape the future Agency OS for travel.
              </CTASubtitle>
              
              <CTAButtonsWrapper
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button to="/request-access" variant="primary" size="lg">
                  Join Early Access →
                </Button>
              </CTAButtonsWrapper>
            </CTAContent>
          </Container>
        </CTASection>
      </main>
    </HomeWrapper>
  );
};

export default Home;