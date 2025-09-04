// ✅ src/components/FeatureCard.jsx
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Card = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit', 'whileInView', 'viewport'].includes(prop)
})`
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(226, 232, 240, 0.8);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: left;
  color: #0f172a;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8, #7c3aed);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
    background: rgba(255, 255, 255, 0.95);

    &::before {
      transform: scaleX(1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at top right,
      rgba(59, 130, 246, 0.05),
      transparent 70%
    );
    transform: rotate(15deg);
    z-index: 0;
    transition: all 0.3s ease;
  }

  &:hover::after {
    transform: rotate(15deg) scale(1.1);
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.25);
  transition: all 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 35px rgba(59, 130, 246, 0.35);
  }

  svg {
    color: white;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const Title = styled.h3`
  font-size: 1.375rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #1e293b;
  position: relative;
  z-index: 1;
  font-family: "Urbanist", sans-serif;
  line-height: 1.3;
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  flex-grow: 1;
  font-weight: 400;
`;

const Badge = styled.span`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 2;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const FeatureCard = ({ title, description, icon, badge, delay = 0 }) => {
  return (
    <Card
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay: delay * 0.1
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="card-glow"
    >
      {badge && <Badge>{badge}</Badge>}
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;