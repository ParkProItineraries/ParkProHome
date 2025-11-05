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
  padding: ${({ theme }) => theme.spacing['4xl']} 0;
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
      title: "Save 10+ Hours Per Client",
      description: "Generate complete Disney itineraries in minutes, not hours. Our automated system handles everything from park schedules to dining reservations."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "3x More Bookings",
      description: "With more time on your hands, take on more clients and increase your revenue. Our system scales with your business."
    },
    {
      icon: <Users size={32} />,
      title: "Impress Every Client",
      description: "Deliver restaurant recommendations, optimal schedules, and crowd-avoidance strategies that make you look like a Disney expert."
    },
    {
      icon: <Shield size={32} />,
      title: "Enterprise Security",
      description: "Bank-level security with 99.9% uptime ensures your agency data and client itineraries are always protected."
    },
    {
      icon: <Smartphone size={32} />,
      title: "Mobile Ready",
      description: "Access itineraries anywhere with our mobile-optimized platform and offline capabilities for your agency."
    },
    {
      icon: <Star size={32} />,
      title: "Early Access Benefits",
      description: "Get exclusive pricing, priority support, and direct access to our development team for feature requests."
    }
  ];

  const stats = [
    { number: "5min", label: "Itinerary Creation" },
    { number: "3x", label: "More Bookings" },
    { number: "50", label: "Agent Spots Left" }
  ];

  // SEO Schema Markup for better Google visibility
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ParkPro",
    "url": "https://parkproit.com",
    "logo": "https://parkproit.com/assets/logo.png",
    "description": "Automated Disney itinerary planning software for travel agents. Save 10+ hours per client and increase bookings by 3x.",
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
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "147",
      "highPrice": "297",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "147.00",
        "priceCurrency": "USD",
        "billingDuration": "P1M",
        "billingIncrement": 1
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "description": "Automated Disney itinerary builder for travel agents. Create professional Disney World and Disneyland itineraries in 15-30 minutes. Pricing starts at $147/month for 5 itineraries, with plans up to $297/month for 16 itineraries."
  };

  return (
    <HomeWrapper>
      <Helmet>
        <title>{copy.pages.home.title}</title>
        <meta 
          name="description" 
          content={copy.pages.home.description} 
        />
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
                Join hundreds of successful travel agents who've transformed their Disney planning business with our automated software.
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
                        margin: 0
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

        <CTASection>
          <Container>
            <CTAContent>
              <CTATitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Ready to Scale Your Disney Business?
              </CTATitle>
              
              <CTASubtitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Join the early access program and start saving 10+ hours per client while increasing your bookings. 
                Limited spots available for exclusive pricing and priority support.
              </CTASubtitle>
              
              <CTAButtonsWrapper
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Button to="/request-access" variant="primary" size="lg">
                  Join Early Access Program
                  <ArrowRight size={20} />
                </Button>
                <Button to="/demo" variant="secondary" size="lg">
                  <Play size={20} />
                  See How It Works
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