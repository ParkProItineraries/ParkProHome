import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "./layout/Container";
import { flexBetween } from "../styles/mixins";
import ParkProLogo from "../assets/Park Pro White_Long.svg";

var date = new Date();
var year = date.getFullYear();

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['3xl']} 0 ${({ theme }) => theme.spacing['2xl']};
`;

const FooterContent = styled.div`
  ${flexBetween}
  gap: ${({ theme }) => theme.spacing['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const FooterColumn = styled.div`
  flex: 1;
`;

const LogoWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
  object-fit: contain;
  display: block;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 50px;
    margin: 0 auto;
  }
`;

const FooterTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.typography.fontHeading};
`;

const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FooterLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${({ theme }) => theme.spacing.lg};
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  font-size: ${({ theme }) => theme.typography.sizes.sm};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterContent>
          {/* Brand Column */}
          <FooterColumn>
            <LogoWrapper>
              <Logo src={ParkProLogo} alt="ParkPro Logo" />
            </LogoWrapper>
            <FooterText>
              Automated Disney planning platform for travel agents. 
              Transform your business with automated itineraries.
            </FooterText>
          </FooterColumn>

          {/* Product column */}
          <FooterColumn>
            <FooterTitle>Product</FooterTitle>
            <FooterLink to="/pricing">Pricing</FooterLink>
            <FooterLink to="/features">Features</FooterLink>
            <FooterLink to="/solutions">Solutions</FooterLink>
            <FooterLink to="/comparison">Why ParkPro</FooterLink>
          </FooterColumn>

          {/* Resources column */}
          <FooterColumn>
            <FooterTitle>Resources</FooterTitle>
            <FooterLink to="/demo">Demo</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/request-access">Get Started</FooterLink>
          </FooterColumn>

          {/* Contact Column */}
          <FooterColumn>
            <FooterTitle>Contact</FooterTitle>
            <ContactItem>
              <Mail size={16} />
              <span>support@parkproit.com</span>
            </ContactItem>
            <ContactItem>
              <Phone size={16} />
              <span>+1 (260) 414-4644</span>
            </ContactItem>
            <ContactItem>
              <MapPin size={16} />
              <span>Fort Wayne, IN</span>
            </ContactItem>
          </FooterColumn>
        </FooterContent>

        <FooterBottom>
          <p>&copy; {year} ParkPro. All rights reserved.</p>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;