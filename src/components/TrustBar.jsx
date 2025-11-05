import React from "react";
import styled from "styled-components";
import { Shield, Lock, CheckCircle, Award, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const TrustBarWrapper = styled.div`
  background: ${({ $variant }) => 
    $variant === 'dark' 
      ? 'linear-gradient(135deg, #0B0B0C 0%, #1a1a1a 100%)' 
      : 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)'
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  
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
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
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
    color: ${({ theme }) => theme.colors.gold};
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
      subtext: "256-bit Encryption"
    },
    {
      icon: <Shield size={20} />,
      label: "Stripe Verified",
      subtext: "Secure Payments"
    },
    {
      icon: <CheckCircle size={20} />,
      label: "GDPR Compliant",
      subtext: "Data Protected"
    },
    {
      icon: <Award size={20} />,
      label: "Money-Back Guarantee",
      subtext: "14-Day Guarantee"
    },
    {
      icon: <Users size={20} />,
      label: "500+ Agents",
      subtext: "Trusted Worldwide"
    },
    {
      icon: <Star size={20} />,
      label: "5-Star Rated",
      subtext: "95% Satisfaction"
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
            Trusted by <strong>500+ travel agents</strong> who've saved over <strong>50,000 hours</strong> in Disney planning
          </SocialProofText>
        )}
      </Container>
    </TrustBarWrapper>
  );
};

export default TrustBar;

