import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { 
  RiUserLine, 
  RiTimeLine, 
  RiStarLine, 
  RiTrendingUpLine 
} from "react-icons/ri";

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: white;
  border-bottom: 1px solid #e2e8f0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  text-align: center;
  padding: 2rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
  border-radius: 20px;
  border: 1px solid #e5e5e5;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #000000, #1a1a1a);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: #fbbf24;
  font-size: 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  color: #000000;
  margin-bottom: 0.5rem;
  font-family: "Inter", sans-serif;
  background: linear-gradient(135deg, #000000, #1a1a1a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatLabel = styled.div`
  color: #6b7280;
  font-weight: 600;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Stats = () => {
  const stats = [
    {
      icon: <RiUserLine />,
      number: "500+",
      label: "Travel Agents"
    },
    {
      icon: <RiTimeLine />,
      number: "10,000+",
      label: "Itineraries Created"
    },
    {
      icon: <RiStarLine />,
      number: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: <RiTrendingUpLine />,
      number: "5x",
      label: "Faster Planning"
    }
  ];

  return (
    <StatsSection>
      <Container>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <StatIcon>{stat.icon}</StatIcon>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Container>
    </StatsSection>
  );
};

export default Stats;
