import React from "react";
import styled from "styled-components";
import Hero from "../components/blocks/Hero";
import AgentBenefits from "../components/blocks/AgentBenefits";
import FeatureGridComponent from "../components/blocks/FeatureGrid";
import CTA from "../components/blocks/CTA";

const HomeWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.fontBody};
  overflow-x: hidden;
  padding-top: 88px; // Account for fixed navbar
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Hero />
      <AgentBenefits />
      <FeatureGridComponent />
      <CTA />
    </HomeWrapper>
  );
};

export default Home;