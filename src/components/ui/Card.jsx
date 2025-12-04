import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import tokens from '../../design-system/tokens';

// Premium Card Component - Enterprise Grade
const StyledCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['variant', 'size', 'hover', 'clickable'].includes(prop)
})`
  /* Base Styles */
  position: relative;
  border-radius: ${tokens.radius.lg};
  overflow: hidden;
  transition: ${tokens.transitions.default};
  
  /* Size Variants */
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: ${tokens.spacing[4]};
        `;
      case 'md':
        return css`
          padding: ${tokens.spacing[6]};
        `;
      case 'lg':
        return css`
          padding: ${tokens.spacing[8]};
        `;
      case 'xl':
        return css`
          padding: ${tokens.spacing[10]};
        `;
      default:
        return css`
          padding: ${tokens.spacing[6]};
        `;
    }
  }}
  
  /* Variant Styles */
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return css`
          background: ${tokens.colors.white};
          border: 1px solid ${tokens.colors['border-light']};
          box-shadow: ${tokens.shadows.sm};
        `;
        
      case 'elevated':
        return css`
          background: ${tokens.colors.white};
          border: none;
          box-shadow: ${tokens.shadows.lg};
        `;
        
      case 'outlined':
        return css`
          background: transparent;
          border: 2px solid ${tokens.colors.teal};
          box-shadow: none;
        `;
        
      case 'glass':
        return css`
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: ${tokens.shadows.lg};
        `;
        
      case 'gradient':
        return css`
          background: linear-gradient(135deg, ${tokens.colors.teal}, ${tokens.colors.purple});
          border: none;
          box-shadow: ${tokens.shadows['teal-lg']};
          color: ${tokens.colors.white};
        `;
        
      default:
        return css`
          background: ${tokens.colors.white};
          border: 1px solid ${tokens.colors['border-light']};
        `;
    }
  }}
  
  /* Hover Effects */
  ${({ hover, clickable }) => (hover || clickable) && css`
    cursor: ${clickable ? 'pointer' : 'default'};
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${tokens.shadows.xl};
    }
  `}
  
  /* Clickable State */
  ${({ clickable }) => clickable && css`
    &:active {
      transform: translateY(-2px);
    }
    
    &:focus-visible {
      outline: 2px solid ${tokens.colors.teal};
      outline-offset: 2px;
    }
  `}
`;

// Card Sub-components
const CardHeader = styled.div`
  margin-bottom: ${tokens.spacing[6]};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CardTitle = styled.h3`
  font-size: ${tokens.typography.sizes['2xl']};
  font-weight: ${tokens.typography.weights.bold};
  color: ${tokens.colors['text-primary']};
  margin: 0 0 ${tokens.spacing[2]} 0;
  font-family: ${tokens.typography.fontHeading};
  line-height: ${tokens.typography.lineHeights.tight};
  letter-spacing: ${tokens.typography.letterSpacing.tight};
`;

const CardSubtitle = styled.p`
  font-size: ${tokens.typography.sizes.base};
  color: ${tokens.colors['text-secondary']};
  margin: 0;
  line-height: ${tokens.typography.lineHeights.relaxed};
`;

const CardBody = styled.div`
  flex: 1;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CardFooter = styled.div`
  margin-top: ${tokens.spacing[6]};
  padding-top: ${tokens.spacing[6]};
  border-top: 1px solid ${tokens.colors['border-light']};
  
  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns = 3 }) => columns}, 1fr);
  gap: ${({ gap = 6 }) => tokens.spacing[gap]};
  
  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

// Main Card Component
const Card = ({
  children,
  variant = 'default',
  size = 'md',
  hover = false,
  clickable = false,
  className,
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: hover || clickable ? { y: -4 } : {},
    tap: clickable ? { y: -2 } : {},
  };

  return (
    <StyledCard
      variant={variant}
      size={size}
      hover={hover}
      clickable={clickable}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      transition={tokens.transitions.spring}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

// Export components
export {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
  CardGrid,
};

export default Card;
