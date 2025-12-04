import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import Container from "./layout/Container";
import ParkProLogo from "../assets/Park Pro White_Long.svg?url";

var date = new Date();
var year = date.getFullYear();

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing['3xl']} 0 ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0 ${({ theme }) => theme.spacing.xl};
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 0.8fr 0.8fr 0.8fr;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  align-items: start;
  max-width: 1400px;
  margin-right: auto;
  margin-left: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.xl};
    margin-left: auto;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
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
  line-height: 1.6;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
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
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
  
  @media (max-width: 475px) {
    font-size: ${({ theme }) => theme.typography.sizes.xs};
    word-break: break-word;
  }
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
    flex-shrink: 0;
  }
  
  span {
    overflow-wrap: break-word;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: ${({ theme }) => theme.colors.gold};
    color: ${({ theme }) => theme.colors.black};
    transform: translateY(-2px);
  }
  
  svg {
    width: 18px;
    height: 18px;
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
              <Logo src={ParkProLogo} alt="ParkPro Logo" loading="lazy" />
            </LogoWrapper>
            <FooterText>
              Destination-smart planning for accredited travel agents.<br />
              Build concierge-level itineraries in a fraction of the time.
            </FooterText>
            <SocialLinks>
              <SocialLink href="https://www.tiktok.com/@parkproit" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <FaTiktok />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/parkproit" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/company/parkproit/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </SocialLink>
            </SocialLinks>
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