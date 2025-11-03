import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import FeatureCard from "../FeatureCard";
import { 
  RiRobot2Line, 
  RiUserHeartLine, 
  RiTimeLine, 
  RiSmartphoneLine, 
  RiPaletteLine, 
  RiBarChartLine 
} from "react-icons/ri";

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled(motion.h2).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-family: "Urbanist", sans-serif;
`;

const SectionSubtitle = styled(motion.p).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesGrid = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Features = () => {
  const features = [
    {
      icon: <RiRobot2Line size={32} />,
      title: "Automated Planning",
      description: "Our advanced automated system analyzes preferences, crowd levels, and wait times to create optimized itineraries in seconds.",
      badge: "Core Feature"
    },
    {
      icon: <RiUserHeartLine size={32} />,
      title: "Personalized Experiences",
      description: "Every itinerary is tailored to your client's specific interests, ages, and preferences for a truly unique experience.",
      badge: "Popular"
    },
    {
      icon: <RiTimeLine size={32} />,
      title: "Real-Time Updates",
      description: "Get live wait times and recommendations that adapt to current park conditions and crowd levels.",
      badge: "New"
    },
    {
      icon: <RiSmartphoneLine size={32} />,
      title: "Mobile-First Design",
      description: "Beautiful, responsive itineraries that look great on any device and are easy to share with clients.",
      badge: "Essential"
    },
    {
      icon: <RiPaletteLine size={32} />,
      title: "Branded Output",
      description: "Add your agency logo and branding to create professional, branded itineraries that showcase your expertise.",
      badge: "Pro"
    },
    {
      icon: <RiBarChartLine size={32} />,
      title: "Analytics & Insights",
      description: "Track client engagement, popular preferences, and optimize your planning process with detailed analytics.",
      badge: "Advanced"
    }
  ];

  return (
    <FeaturesSection>
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Travel Agents Choose ParkPro
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our automated planning platform transforms how travel agents create Disney experiences
          </SectionSubtitle>
        </SectionHeader>
        
        <FeaturesGrid
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              badge={feature.badge}
              delay={index}
            />
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
