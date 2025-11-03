import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  RiRobot2Line, 
  RiUserHeartLine, 
  RiTimeLine, 
  RiMagicLine, 
  RiTeamLine, 
  RiShieldCheckLine 
} from "react-icons/ri";

const FeaturesSection = styled.div`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  margin-bottom: 4rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 0.8);
`;

const FeaturesTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  text-align: center;
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid #e2e8f0;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: #3b82f6;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #3b82f6;
`;

const FeatureTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const DemoFeatures = () => {
  const features = [
    {
      icon: <RiRobot2Line size={40} />,
      title: "Automated Planning",
      description: "Our advanced automated system analyzes preferences, crowd levels, and ride wait times to create the perfect itinerary."
    },
    {
      icon: <RiUserHeartLine size={40} />,
      title: "Personalized Experience",
      description: "Every itinerary is tailored to your family's interests, ages, and dining preferences."
    },
    {
      icon: <RiTimeLine size={40} />,
      title: "Real-Time Updates",
      description: "Get live wait times and recommendations that adapt to current park conditions."
    },
    {
      icon: <RiMagicLine size={40} />,
      title: "Magic Moments",
      description: "Discover hidden gems and insider tips that make your Disney experience truly special."
    },
    {
      icon: <RiTeamLine size={40} />,
      title: "Family-Friendly",
      description: "Perfect for families of all sizes, with options for every age and interest level."
    },
    {
      icon: <RiShieldCheckLine size={40} />,
      title: "Stress-Free Planning",
      description: "No more hours of research - get a complete, optimized itinerary in seconds."
    }
  ];

  return (
    <FeaturesSection>
      <FeaturesTitle>Why Choose ParkPro?</FeaturesTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default DemoFeatures;
