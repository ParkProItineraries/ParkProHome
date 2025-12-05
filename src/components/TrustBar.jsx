import React from "react";
import styled from "styled-components";
import { Shield, Lock, CheckCircle, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const TrustBarWrapper = styled.div`
  background: ${({ $variant, theme }) => 
    $variant === 'dark' 
      ? 'linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%)' 
      : `linear-gradient(135deg, ${theme.colors['gray-200']} 0%, ${theme.colors['gray-100']} 100%)`
  };
  border-top: 1px solid ${({ theme, $variant }) => 
    $variant === 'dark' ? 'rgba(201, 162, 39, 0.2)' : theme.colors['gray-200']
  };
  border-bottom: 1px solid ${({ theme, $variant }) => 
    $variant === 'dark' ? 'rgba(201, 162, 39, 0.2)' : theme.colors['gray-200']
  };
  padding: ${({ theme }) => theme.spacing.xl} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: 475px) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

const TrustGrid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-wrap: wrap;
    justify-content: space-evenly;
    row-gap: ${({ theme }) => theme.spacing['2xl']};
    column-gap: ${({ theme }) => theme.spacing.xl};
  }
  
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const TrustItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-start;
  flex: 1 1 0;
  min-width: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: 0 1 calc(50% - ${({ theme }) => theme.spacing.lg});
    min-width: 200px;
  }
  
  @media (max-width: 640px) {
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    padding: ${({ theme }) => theme.spacing.md};
    flex: 0 0 100%;
    width: 100%;
    min-width: auto;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $variant }) => 
    $variant === 'dark' 
      ? 'rgba(201, 162, 39, 0.15)' 
      : 'rgba(201, 162, 39, 0.1)'
  };
  border-radius: 50%;
  flex-shrink: 0;
  
  svg {
    color: ${({ theme }) => theme.colors.gold};
  }
  
  @media (max-width: 640px) {
    width: 48px;
    height: 48px;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

const TrustText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const TrustLabel = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme, $variant }) => 
    $variant === 'dark' ? theme.colors.white : theme.colors.black
  };
  white-space: nowrap;
  
  @media (max-width: 640px) {
    white-space: normal;
  }
`;

const TrustSubtext = styled.div`
  font-size: ${({ theme }) => theme.typography.sizes.xs};
  color: ${({ theme, $variant }) => 
    $variant === 'dark' ? 'rgba(255, 255, 255, 0.7)' : theme.colors['gray-600']
  };
`;

const SocialProofText = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.typography.sizes.base};
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme, $variant }) => 
    $variant === 'dark' ? theme.colors.gold : theme.colors.black
  };
  margin-top: ${({ theme }) => theme.spacing.md};
  
  strong {
    color: ${({ $variant, theme }) => 
      $variant === 'dark' ? theme.colors.gold : theme.colors['gold-dark']
    };
    font-weight: ${({ theme }) => theme.typography.weights.semibold};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.sizes.sm};
  }
`;

const TrustBar = ({ variant = 'light', showSocialProof = true }) => {
  const trustItems = [
    {
      icon: <Lock size={20} />,
      label: "SSL Secure",
      subtext: "256-bit encryption on all pages"
    },
    {
      icon: <Shield size={20} />,
      label: "Secure Payments",
      subtext: "Payments handled through Stripe"
    },
    {
      icon: <CheckCircle size={20} />,
      label: "Built for Travel Agents",
      subtext: "Designed specifically for Disney-focused agencies"
    },
    {
      icon: <Users size={20} />,
      label: "No Long-Term Contracts",
      subtext: "Upgrade, downgrade, or cancel as you grow"
    },
    {
      icon: <Star size={20} />,
      label: "Human Support",
      subtext: "Direct email support from the founder"
    }
  ];

  return (
    <TrustBarWrapper $variant={variant}>
      <Container>
        <TrustGrid>
          {trustItems.map((item, index) => (
            <TrustItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              <IconWrapper $variant={variant}>
                {item.icon}
              </IconWrapper>
              <TrustText>
                <TrustLabel $variant={variant}>{item.label}</TrustLabel>
                <TrustSubtext $variant={variant}>{item.subtext}</TrustSubtext>
              </TrustText>
            </TrustItem>
          ))}
        </TrustGrid>
        
        {showSocialProof && (
          <SocialProofText $variant={variant}>
            Built specifically for <strong>destination-focused travel agents and agencies</strong>, 
            and currently rolling out with a small group of early access partners.
          </SocialProofText>
        )}
      </Container>
    </TrustBarWrapper>
  );
};

export default TrustBar;

