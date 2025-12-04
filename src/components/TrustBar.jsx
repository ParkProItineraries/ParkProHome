import React from "react";
import styled from "styled-components";
import { Shield, Lock, CheckCircle, Award, Users, Star } from "lucide-react";
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
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
  justify-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TrustItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: flex-start;
  width: 100%;
  max-width: 200px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
    max-width: 100%;
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
      icon: <Award size={20} />,
      label: "Early Access Program",
      subtext: "Real agencies helping shape the roadmap"
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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

