import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MdAutoAwesome } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { GiSparkles } from "react-icons/gi";
import { FaHatWizard } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegGrinStars } from "react-icons/fa";

const ResultContainer = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 12px;
  padding: 3rem 2rem;
  color: white;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 8px 32px rgba(30, 41, 59, 0.12);
`;

const ResultIcon = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['initial', 'animate', 'transition', 'exit'].includes(prop)
})`
  font-size: 3.5rem;
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ResultTitle = styled.h4`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #fff;
  letter-spacing: -0.5px;
`;

const ResultText = styled.div`
  font-size: 1.2rem;
  color: #f1f5f9;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledButton = styled.button`
  margin-top: 18px;
  padding: 10px 24px;
  background: #fff;
  color: #1d4ed8;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  box-shadow: 0 2px 8px rgba(30, 41, 59, 0.08);
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;

  &:hover {
    background: #e0e7ff;
    color: #1e293b;
    box-shadow: 0 4px 16px rgba(30, 41, 59, 0.16);
  }
`;

const ErrorMessage = styled.div`
  color: #fecaca;
  font-size: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(239, 68, 68, 0.2);
`;

const DemoResult = ({ generatedItinerary, error, isGenerating }) => {
  const getRandomIcon = () => {
    const icons = [
      <MdAutoAwesome key="auto" />,
      <BsStars key="stars" />,
      <GiSparkles key="sparkles" />,
      <FaHatWizard key="wizard" />,
      <FaRegSmileBeam key="smile" />,
      <FaRegGrinStars key="grin" />
    ];
    return icons[Math.floor(Math.random() * icons.length)];
  };

  if (isGenerating) {
    return (
      <ResultContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ResultIcon
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <MdAutoAwesome />
        </ResultIcon>
        <ResultTitle>Creating Your Itinerary...</ResultTitle>
        <ResultText>
          Our automated system is crafting the perfect Disney experience just for you!
        </ResultText>
      </ResultContainer>
    );
  }

  if (error) {
    return (
      <ResultContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ResultIcon>
          <FaRegSmileBeam />
        </ResultIcon>
        <ResultTitle>Oops! Something went wrong</ResultTitle>
        <ErrorMessage>{error}</ErrorMessage>
        <StyledButton onClick={() => window.location.reload()}>
          Try Again
        </StyledButton>
      </ResultContainer>
    );
  }

  if (!generatedItinerary) {
    return (
      <ResultContainer
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ResultIcon>
          <FaRegGrinStars />
        </ResultIcon>
        <ResultTitle>Ready to Create Magic?</ResultTitle>
        <ResultText>
          Fill out the form to see how ParkPro generates personalized 
          Disney itineraries in seconds!
        </ResultText>
      </ResultContainer>
    );
  }

  return (
    <ResultContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <ResultIcon
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
      >
        {getRandomIcon()}
      </ResultIcon>
      <ResultTitle>Your Itinerary is Ready!</ResultTitle>
      <ResultText>
        <div style={{ marginBottom: "1rem" }}>
          <strong>Family of {generatedItinerary.familySize}</strong>
        </div>
        <div style={{ fontSize: "1rem", lineHeight: "1.5" }}>
          {generatedItinerary.summary}
        </div>
      </ResultText>
      <StyledButton onClick={() => window.open("https://app.parkproit.com", "_blank")}>
        Get Started with ParkPro
      </StyledButton>
    </ResultContainer>
  );
};

export default DemoResult;
