import React from "react";
import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const FormContainer = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 2rem;
  border: 2px solid #e2e8f0;
`;

const FormTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const FormField = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const GenerateButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;

  &:hover {
    background: linear-gradient(135deg, #2563eb, #1e40af);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const DemoForm = ({ formData, handleFormChange, generateSampleItinerary, isGenerating }) => {
  return (
    <FormContainer>
      <FormTitle>Tell us about your family</FormTitle>
      
      <FormField>
        <FormLabel htmlFor="familySize">Family Size *</FormLabel>
        <FormSelect
          id="familySize"
          name="familySize"
          value={formData.familySize}
          onChange={handleFormChange}
          required
        >
          <option value="">Select family size</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          <option value="4">4 people</option>
          <option value="5">5 people</option>
          <option value="6">6 people</option>
          <option value="7+">7+ people</option>
        </FormSelect>
      </FormField>

      <FormField>
        <FormLabel htmlFor="ages">Age Range *</FormLabel>
        <FormSelect
          id="ages"
          name="ages"
          value={formData.ages}
          onChange={handleFormChange}
          required
        >
          <option value="">Select age range</option>
          <option value="adults">Adults only (18+)</option>
          <option value="families">Families with kids (3-17)</option>
          <option value="mixed">Mixed ages</option>
          <option value="seniors">Seniors (65+)</option>
        </FormSelect>
      </FormField>

      <FormField>
        <FormLabel htmlFor="interests">Interests</FormLabel>
        <FormSelect
          id="interests"
          name="interests"
          value={formData.interests}
          onChange={handleFormChange}
        >
          <option value="">Select interests</option>
          <option value="thrill">Thrill rides</option>
          <option value="family">Family-friendly</option>
          <option value="dining">Fine dining</option>
          <option value="shows">Shows & entertainment</option>
          <option value="relaxed">Relaxed pace</option>
        </FormSelect>
      </FormField>

      <FormField>
        <FormLabel htmlFor="dining">Dining Preferences</FormLabel>
        <FormSelect
          id="dining"
          name="dining"
          value={formData.dining}
          onChange={handleFormChange}
        >
          <option value="">Select dining style</option>
          <option value="quick">Quick service</option>
          <option value="casual">Casual dining</option>
          <option value="fine">Fine dining</option>
          <option value="character">Character dining</option>
        </FormSelect>
      </FormField>

      <FormField>
        <FormLabel htmlFor="days">Park Days</FormLabel>
        <FormSelect
          id="days"
          name="days"
          value={formData.days}
          onChange={handleFormChange}
        >
          <option value="">Select number of days</option>
          <option value="1">1 day</option>
          <option value="2">2 days</option>
          <option value="3">3 days</option>
          <option value="4">4 days</option>
          <option value="5+">5+ days</option>
        </FormSelect>
      </FormField>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <GenerateButton
          onClick={generateSampleItinerary}
          disabled={isGenerating || !formData.familySize || !formData.ages}
        >
          {isGenerating ? "Generating..." : "Generate Sample Itinerary"}
        </GenerateButton>
      </motion.div>
    </FormContainer>
  );
};

export default DemoForm;
