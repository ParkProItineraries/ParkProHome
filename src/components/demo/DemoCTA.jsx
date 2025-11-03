import React from "react";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CTAButton } from "../CTAButton";

const CTASection = styled.div`
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 0.8);
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1.5rem;
`;

const CTASubtitle = styled.p`
  font-size: 1.25rem;
  color: #64748b;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DemoCTA = () => {
  return (
    <CTASection>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <CTATitle>Ready to Transform Your Disney Planning?</CTATitle>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <CTASubtitle>
          Join thousands of travel agents who are already using ParkPro to create 
          magical Disney experiences for their clients. Start your free trial today!
        </CTASubtitle>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <CTAButtons>
          <CTAButton to="/request-access" variant="primary" size="large">
            Join Founding Members
          </CTAButton>
          <CTAButton to="/pricing" variant="secondary" size="large">
            View Pricing
          </CTAButton>
        </CTAButtons>
      </motion.div>
    </CTASection>
  );
};

export default DemoCTA;
