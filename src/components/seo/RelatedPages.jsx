import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../layout/Container";

const ALL_SEO_PAGES = [
  {
    slug: "disney-planning-software",
    title: "Disney Planning Software",
    description: "Automate Disney World and Disneyland itinerary creation with rules-based planning tools built for travel agents.",
    path: "/disney-planning-software"
  },
  {
    slug: "travel-agent-software",
    title: "Travel Agent Software",
    description: "All-in-one itinerary and workflow platform designed to help travel agents save time and scale their business.",
    path: "/travel-agent-software"
  },
  {
    slug: "travel-agent-itinerary-software",
    title: "Travel Agent Itinerary Software",
    description: "Generate structured, day-by-day itineraries from guided client intake forms in minutes instead of hours.",
    path: "/travel-agent-itinerary-software"
  },
  {
    slug: "disney-travel-agent-software",
    title: "Disney Travel Agent Software",
    description: "Specialized Disney planning tools with Lightning Lane optimization, dining integration, and multi-park support.",
    path: "/disney-travel-agent-software"
  },
  {
    slug: "travel-agent-workflow-software",
    title: "Travel Agent Workflow Software",
    description: "Streamline your end-to-end workflow from client intake to branded itinerary delivery.",
    path: "/travel-agent-workflow-software"
  },
  {
    slug: "travel-agency-software",
    title: "Travel Agency Software",
    description: "Multi-agent support, agency branding, admin controls, and usage analytics for growing travel agencies.",
    path: "/travel-agency-software"
  }
];

const Section = styled.section`
  background: #F9FAFB;
  padding: 96px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints?.md || '768px'}) {
    padding: 64px 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints?.sm || '480px'}) {
    padding: 48px 0;
  }
`;

const SectionLabel = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #3B82F6;
  margin-bottom: 12px;
  text-align: center;
`;

const SectionHeading = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: 2.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 16px;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const SectionSub = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport'].includes(prop)
})`
  font-size: 1.125rem;
  color: #6B7280;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 48px;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion(Link)).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'whileInView', 'viewport', 'whileHover'].includes(prop)
})`
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 28px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    border-color: #3B82F6;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.0625rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-size: 0.9375rem;
  color: #6B7280;
  line-height: 1.5;
  margin-bottom: 16px;
  flex: 1;
`;

const CardLink = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #3B82F6;
`;

const RelatedPages = ({ currentSlug }) => {
  const relatedPages = ALL_SEO_PAGES.filter(page => page.slug !== currentSlug);

  return (
    <Section>
      <Container>
        <SectionLabel
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Related Resources
        </SectionLabel>
        <SectionHeading
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Explore More ParkPro Solutions
        </SectionHeading>
        <SectionSub
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Learn how ParkPro helps travel agents save time, deliver better itineraries, and grow their business.
        </SectionSub>

        <Grid>
          {relatedPages.map((page, idx) => (
            <Card
              key={page.slug}
              to={page.path}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * idx }}
            >
              <CardTitle>{page.title}</CardTitle>
              <CardDescription>{page.description}</CardDescription>
              <CardLink>
                Learn more <ArrowRight size={14} />
              </CardLink>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default RelatedPages;
