import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors['gray-100']};
  padding-top: 120px;
  padding-bottom: 80px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['3xl']};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  border: 1px solid ${({ theme }) => theme.colors['gray-300']};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['4xl']};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.xl};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.gold};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors['gray-600']};
  font-size: ${({ theme }) => theme.typography.sizes.base};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontBody};
`;

const PrivacyPolicy = () => (
  <Container>
    <Content>
      <Card>
        <Title>Privacy Policy</Title>
        <Text>
          Your privacy is important to us. This Privacy Policy explains how Park Pro collects, uses, and protects your information when you use our website and services.
        </Text>
        <SectionTitle>Information We Collect</SectionTitle>
        <Text>
          We may collect personal information such as your name, email address, and other details you provide when using our services or contacting us.
        </Text>
        <SectionTitle>How We Use Your Information</SectionTitle>
        <Text>
          We use your information to provide and improve our services, communicate with you, and ensure the security of our platform.
        </Text>
        <SectionTitle>Information Sharing</SectionTitle>
        <Text>
          We do not sell or share your personal information with third parties except as required by law or to provide our services.
        </Text>
        <SectionTitle>Data Security</SectionTitle>
        <Text>
          We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or misuse.
        </Text>
        <SectionTitle>Your Choices</SectionTitle>
        <Text>
          You may contact us to review, update, or delete your personal information at any time.
        </Text>
        <SectionTitle>Contact Us</SectionTitle>
        <Text>
          If you have any questions about this Privacy Policy, please contact us at support@parkproit.com.
        </Text>
        <Text style={{ 
          fontSize: '0.95rem', 
          color: '#64748b', 
          marginTop: '2rem',
          fontFamily: 'Inter, sans-serif'
        }}>
          Last updated: July 2024
        </Text>
      </Card>
    </Content>
  </Container>
);

export default PrivacyPolicy; 