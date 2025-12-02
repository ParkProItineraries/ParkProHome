import React from "react";
import styled from "styled-components";
import SEO from '../components/seo/SEO';
import { SEOConfigs } from '../components/seo/SEOConfigs';
import { motion } from "framer-motion";
import { 
  Target, 
  Zap, 
  Handshake, 
  Shield, 
  Clock, 
  Users, 
  Star,
  Quote
} from "lucide-react";
import { copy } from "../content/strings";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexCenter, flexColumnCenter } from "../styles/mixins";

const AboutWrapper = styled.div`
  padding-top: 88px; // Account for fixed navbar
  background: ${({ theme }) => theme.colors.white};
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

const AboutBadge = styled.div`
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

const AboutTitle = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  }
`;

const AboutSubtitle = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors['gray-600']};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const StorySection = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;

const StoryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
`;

const StoryText = styled.div``;

const StoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const StoryParagraph = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.sizes.lg};
`;

const StoryVisual = styled.div`
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  min-height: 300px;
  ${flexColumnCenter}
`;

const StoryIcon = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.gold};
`;

const StoryQuote = styled.blockquote`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-style: italic;
  opacity: 0.9;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const MissionSection = styled.div`
  background: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;

const MissionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const MissionText = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  opacity: 0.9;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const ValueCard = styled(motion.div).withConfig({
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

const ValueIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  ${flexCenter}
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  transition: ${({ theme }) => theme.transitions.normal};
  
  ${ValueCard}:hover & {
    transform: scale(1.1);
  }
`;

const ValueTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const ValueDescription = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const TeamSection = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;

const TeamTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors['gray-100']};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const MemberAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  color: ${({ theme }) => theme.colors.black};
  ${flexCenter}
  font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
`;

const MemberName = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const MemberTitle = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
`;

const MemberBio = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const StatsSection = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;

const StatsTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const StatCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes['5xl']};
  font-weight: ${({ theme }) => theme.typography.weights.extrabold};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors['gray-600']};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  font-size: ${({ theme }) => theme.typography.sizes.base};
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

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontHeading};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['3xl']};
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

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: "Client-First Focus",
      description: "Every feature I build is designed to help travel agents serve their clients better and grow their business."
    },
    {
      icon: <Handshake size={32} />,
      title: "Partnership Approach",
      description: "I see myself as a partner to travel agents, not just a software provider. Your success is my success."
    },
    {
      icon: <Shield size={32} />,
      title: "Trust & Reliability",
      description: "I understand the trust you place in me with your client relationships. Security and reliability are non-negotiable."
    }
  ];

  const founder = {
    initials: "KT",
    name: "Kyle Todoran",
    title: "Founder & CEO",
    bio: "Software engineer with years of Disney experience. Built ParkPro after experiencing the pain of Disney planning firsthand and seeing how travel agents struggle with manual processes."
  };

  return (
    <AboutWrapper>
      <SEO 
        title="About ParkPro - Our Story & Mission"
        description="Learn about ParkPro's mission to empower travel agents with automated Disney planning tools. Built by agents, for agents."
        keywords="about ParkPro, ParkPro story, Disney planning software company, travel agent tools company"
        url="/about"
      />
      <Section>
        <Container>
          <AboutHeader>
            <AboutBadge>My Story</AboutBadge>
            <AboutTitle>{copy.pages.about.h1}</AboutTitle>
            <AboutSubtitle>
              {copy.pages.about.sub}
            </AboutSubtitle>
          </AboutHeader>

          <StorySection>
            <StoryContent>
              <StoryText>
                <StoryTitle>The Problem I Solved</StoryTitle>
                <StoryParagraph>
                  As a software engineer who's been going to Disney for years, I experienced firsthand how painful and time-consuming Disney planning can be. 
                  Researching attractions, planning routes, and creating detailed itineraries takes hours of manual work - something I knew could be automated.
                </StoryParagraph>
                <StoryParagraph>
                  After talking to travel agents and seeing how they struggle with the same planning challenges, I realized there was a huge opportunity 
                  to build something specifically designed for Disney planning that could handle the unique requirements of theme park visits, 
                  dining reservations, and ride strategies.
                </StoryParagraph>
                <StoryParagraph>
                  That's why I built ParkPro - to automate the tedious parts of Disney planning and give travel agents back their time 
                  while delivering even better experiences to their clients.
                </StoryParagraph>
              </StoryText>
              <StoryVisual>
                <StoryIcon>
                  <Clock size={64} />
                </StoryIcon>
                <StoryQuote>
                  "I was spending 20+ hours per week on itinerary planning. Now it takes minutes, and my clients get better plans than ever."
                </StoryQuote>
              </StoryVisual>
            </StoryContent>
          </StorySection>
        </Container>
      </Section>

      <Section $bg="dark">
        <Container>
          <MissionSection>
            <MissionTitle>My Mission</MissionTitle>
            <MissionText>
              To empower travel agents with automated tools that transform how they plan Disney vacations, 
              enabling them to serve more clients, increase their revenue, and deliver exceptional experiences 
              that keep families coming back year after year.
            </MissionText>
          </MissionSection>
        </Container>
      </Section>

      <Section>
        <Container>
          <div>
            <SectionTitle>My Values</SectionTitle>
            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <ValueIcon>{value.icon}</ValueIcon>
                  <ValueTitle>{value.title}</ValueTitle>
                  <ValueDescription>{value.description}</ValueDescription>
                </ValueCard>
              ))}
            </ValuesGrid>
          </div>

          <TeamSection>
            <TeamTitle>Meet the Founder</TeamTitle>
            <TeamGrid>
              <TeamMember
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <MemberAvatar>{founder.initials}</MemberAvatar>
                <MemberName>{founder.name}</MemberName>
                <MemberTitle>{founder.title}</MemberTitle>
                <MemberBio>{founder.bio}</MemberBio>
              </TeamMember>
            </TeamGrid>
          </TeamSection>

          <StatsSection>
            <StatsTitle>By the Numbers</StatsTitle>
            <StatsGrid>
              <StatCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <StatNumber>5+</StatNumber>
                <StatLabel>Years of Disney Experience</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <StatNumber>500+</StatNumber>
                <StatLabel>Itineraries Generated</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <StatNumber>98%</StatNumber>
                <StatLabel>Client Satisfaction</StatLabel>
              </StatCard>
              <StatCard
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <StatNumber>24hr</StatNumber>
                <StatLabel>Support Response</StatLabel>
              </StatCard>
            </StatsGrid>
          </StatsSection>

          <CTASection>
            <CTATitle>Ready to Join the Revolution?</CTATitle>
            <CTASubtitle>
              Be part of the future of Disney travel planning. Join hundreds of agents who've already transformed their business with ParkPro.
            </CTASubtitle>
            <ButtonGroup>
              <Button variant="gold" size="lg" to="/request-access">
                Request Early Access
              </Button>
              <Button variant="outline" size="lg" to="/features">
                Explore Features
              </Button>
            </ButtonGroup>
          </CTASection>
        </Container>
      </Section>
    </AboutWrapper>
  );
};

export default About; 
