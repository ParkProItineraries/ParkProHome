import React from "react";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Badge = styled.span`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  background: linear-gradient(135deg, #1e293b, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const DemoHeader = () => {
  return (
    <Header>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge>Interactive Demo</Badge>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Title>See ParkPro in Action</Title>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Subtitle>
          Experience how ParkPro transforms client preferences into detailed, 
          personalized Disney itineraries in seconds. Try it yourself below!
        </Subtitle>
      </motion.div>
    </Header>
  );
};

export default DemoHeader;
