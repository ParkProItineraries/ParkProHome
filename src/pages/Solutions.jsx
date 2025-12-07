import React from "react";
import styled from "styled-components";
import SEO from "../components/seo/SEO";
import { SEOConfigs } from "../components/seo/SEOConfigs";
import { motion } from "framer-motion";
import { Users, Building2, Crown, ArrowRight, CheckCircle } from "lucide-react";
import { copy } from "../content/strings";
import { Button, Card, CardGrid } from "../design";
import Container from "../components/layout/Container";
import Section from "../components/layout/Section";
import { flexCenter } from "../styles/mixins";

// Enhanced Solutions Page with Target Audience Focus
const SolutionsWrapper = styled.div`
  padding-top: 88px; /* Account for fixed navbar */
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 72px;
  }

  @media (max-width: 475px) {
    padding-top: 68px;
  }
`;

const SolutionsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["4xl"]};
`;

const SolutionsBadge = styled(motion.div)`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-muted"]}
  );
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

const SolutionsTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.typography.sizes["5xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  }
`;

const SolutionsSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: ${({ theme }) => theme.colors["gray-600"]};
  max-width: 700px;
  margin: 0 auto;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.base};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const SolutionsIntro = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  color: ${({ theme }) => theme.colors["gray-600"]};
  max-width: 640px;
  margin: ${({ theme }) => theme.spacing["2xl"]} auto
    ${({ theme }) => theme.spacing["2xl"]};
  text-align: center;
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

const SolutionsGridWrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

// Solution Cards
const SolutionCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  border: 2px solid ${({ theme }) => theme.colors["border-light"]};
  position: relative;
  overflow: hidden;
  transition: ${({ theme }) => theme.transitions.normal};
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (hover: hover) {
  &:hover {
      transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
    border-color: ${({ theme }) => theme.colors.gold};
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.gold},
      ${({ theme }) => theme.colors["gold-muted"]}
    );
  }
`;

const SolutionIcon = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold},
    ${({ theme }) => theme.colors["gold-muted"]}
  );
  ${flexCenter}
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  transition: ${({ theme }) => theme.transitions.normal};

  @media (hover: hover) {
  ${SolutionCard}:hover & {
    transform: scale(1.05);
    }
  }
`;

const SolutionTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes["2xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
`;

const SolutionDescription = styled.p`
  color: ${({ theme }) => theme.colors["gray-700"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.sizes.base};
`;

const SolutionFeatures = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex: 1;
`;

const FeaturesHeading = styled.h4`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors["gray-500"]};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors["gray-600"]};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  svg {
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const SolutionStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors["gray-50"]};
  border: 1px solid ${({ theme }) => theme.colors["gray-200"]};
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: none;
`;

const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.typography.fontHeading};
  margin-bottom: 2px;
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme }) => theme.colors["gray-600"]};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  line-height: ${({ theme }) => theme.typography.lineHeights.normal};
  text-align: center;
`;

const SolutionButtonWrapper = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.md};
`;

// CTA Section
const CTASection = styled.section`
  padding: ${({ theme }) => theme.spacing["4xl"]} 0;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.sizes["4xl"]};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes["3xl"]};
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing["2xl"]};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.lg};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const Solutions = () => {
  const solutions = [
    {
      icon: <Users size={32} />,
      title: "For Solo Travel Agents",
      description:
        "Built for solo, Disney-focused travel agents who want itineraries done in minutes instead of late-night marathons, without sacrificing the magic or the details.",
      features: [
        "Turn detailed Disney intake forms into clean, day-by-day itineraries in minutes",
        "Branded PDF or slide exports that look like a premium agency, even if it's just you",
        "Simple workspace to see which trips still need itineraries at a glance",
        "Done-with-you onboarding during early access so you're never figuring it out alone",
        "Email support from the ParkPro team when you get stuck or need ideas",
      ],
      stats: [
        { number: "5–10+ hrs", label: "Planning time saved per trip" },
        { number: "More trips", label: "Handled per month, same hours" },
      ],
      cta: "Start with Solo",
      href: "/pricing#solo",
    },
    {
      icon: <Building2 size={32} />,
      title: "For Growing Disney & Universal Agencies",
      description:
        "Ideal for small to mid-size agencies who want every agent planning Disney (and soon, Universal) trips the same way—without losing each agent's personality.",
      features: [
        "Shared view of every trip your agents are working on, across Disney and future destinations",
        "Standardized workflows so new and senior agents follow the same proven playbook",
        "Branded itineraries that look consistent across your entire team, not one-off docs",
        "Support for multi-seat plans and itinerary limits by tier as your agency scales",
        "Guided onboarding so your first cohort of agents gets up and running quickly",
      ],
      stats: [
        { number: "1 workflow", label: "For every destination-smart trip" },
        { number: "Faster ramp", label: "For new or part-time agents" },
      ],
      cta: "Explore Agency Plans",
      href: "/pricing#agency",
    },
    {
      icon: <Crown size={32} />,
      title: "For Large & Enterprise Agencies",
      description:
        "Designed for larger, destination-focused agencies that want to shape ParkPro's roadmap, unlock higher itinerary volumes, and plan for deep integrations and API access.",
      features: [
        "Custom seat and itinerary packages for high-volume, multi-brand teams",
        "Early input into enterprise features like CRM, commissions, and reporting",
        "Strategic conversations around future integrations and full API access",
        "Security-first architecture with encryption in transit and at rest",
        "Dedicated point of contact as we roll out enterprise-grade capabilities",
      ],
      stats: [
        { number: "Custom", label: "Pricing & itinerary volume" },
        { number: "Roadmap", label: "Influence on enterprise features" },
      ],
      cta: "Talk to Us",
      href: "/contact",
    },
  ];

  return (
    <SolutionsWrapper>
      <SEO {...SEOConfigs.solutions} schemaType="SoftwareApplication" />
      <Section>
        <Container>
          <SolutionsHeader>
            <SolutionsBadge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Tailored Solutions
            </SolutionsBadge>
            <SolutionsTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {copy.pages.solutions.h1}
            </SolutionsTitle>
            <SolutionsSubtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {copy.pages.solutions.sub}
            </SolutionsSubtitle>
          </SolutionsHeader>

          <SolutionsIntro>
            Pick the description that sounds most like where you are today —
            solo agent, growing agency, or enterprise team — and see how ParkPro
            meets you there.
          </SolutionsIntro>

          <SolutionsGridWrapper>
          <CardGrid columns={3} gap={6}>
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <SolutionIcon>{solution.icon}</SolutionIcon>
                <SolutionTitle>{solution.title}</SolutionTitle>
                <SolutionDescription>
                  {solution.description}
                </SolutionDescription>

                <SolutionFeatures>
                  <FeaturesHeading>
                    How ParkPro helps this group:
                  </FeaturesHeading>
                  <FeatureList>
                    {solution.features.map((feature, featureIndex) => (
                      <FeatureItem key={featureIndex}>
                        <CheckCircle size={14} />
                        {feature}
                      </FeatureItem>
                    ))}
                  </FeatureList>
                </SolutionFeatures>

                <SolutionStats>
                  {solution.stats.map((stat, statIndex) => (
                    <StatItem key={statIndex}>
                      <StatNumber>{stat.number}</StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatItem>
                  ))}
                </SolutionStats>

                <SolutionButtonWrapper>
                  <Button
                    variant="primary"
                    size="md"
                    to={solution.href}
                    fullWidth
                  >
                    {solution.cta}
                    <ArrowRight size={18} />
                  </Button>
                </SolutionButtonWrapper>
              </SolutionCard>
            ))}
          </CardGrid>
          </SolutionsGridWrapper>
        </Container>
      </Section>

      <CTASection>
        <Container>
          <CTAContent>
            <CTATitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to see how ParkPro fits your agency?
            </CTATitle>
            <CTASubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We're inviting a small group of destination-focused travel agents
              and agencies into early access. Choose the path that fits you,
              start with Disney trip automation today, and grow into the full
              Agency OS as ParkPro rolls out CRM, commissions, and
              multi-destination features.
            </CTASubtitle>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button variant="primary" size="lg" to="/request-access">
                Request Early Access →
              </Button>
            </motion.div>
          </CTAContent>
        </Container>
      </CTASection>
    </SolutionsWrapper>
  );
};

export default Solutions;