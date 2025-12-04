import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors['gray-100']};
  padding-top: 120px;
  padding-bottom: 80px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 96px;
    padding-bottom: 64px;
  }
  
  @media (max-width: 475px) {
    padding-top: 88px;
    padding-bottom: 48px;
  }
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: 475px) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
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
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes['2xl']};
  }
  
  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.xl};
  }
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

const TermsOfService = () => (
  <Container>
    <Content>
      <Card>
        <Title>Terms of Service</Title>
        <Text>
          Welcome to ParkPro! These Terms of Service govern your use of our website and services. By accessing or using ParkPro, you agree to these terms.
        </Text>
        <SectionTitle>Use of Service</SectionTitle>
        <Text>
          You agree to use ParkPro only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
        </Text>
        <SectionTitle>Intellectual Property</SectionTitle>
        <Text>
          All content, trademarks, and data on this site are the property of ParkPro or its licensors. You may not use, reproduce, or distribute any content without permission.
        </Text>
        <SectionTitle>Limitation of Liability</SectionTitle>
        <Text>
          ParkPro is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our services.
        </Text>
        <SectionTitle>Changes to Terms</SectionTitle>
        <Text>
          We may update these Terms of Service from time to time. Continued use of ParkPro after changes means you accept the new terms.
        </Text>
        <SectionTitle>Contact Us</SectionTitle>
        <Text>
          If you have any questions about these Terms, please contact us at support@parkproit.com.
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

export default TermsOfService; 