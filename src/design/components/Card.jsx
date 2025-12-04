import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { designTokens } from '../tokens.js';

// Styled card component
const StyledCard = styled(motion.div).withConfig({
  shouldForwardProp: (prop) => !['variant', 'size', 'hover', 'clickable'].includes(prop)
})`
  /* Base styles */
  position: relative;
  border-radius: ${designTokens.radius.xl};
  overflow: hidden;
  transition: ${designTokens.transitions.normal};
  
  /* Size variants */
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return css`
          padding: ${designTokens.spacing[4]};
        `;
      case 'md':
        return css`
          padding: ${designTokens.spacing[6]};
        `;
      case 'lg':
        return css`
          padding: ${designTokens.spacing[8]};
        `;
      case 'xl':
        return css`
          padding: ${designTokens.spacing[10]};
        `;
      default:
        return css`
          padding: ${designTokens.spacing[6]};
        `;
    }
  }}
  
  /* Variant styles */
  ${({ variant }) => {
    switch (variant) {
      case 'default':
        return css`
          background: ${designTokens.colors.white};
          border: 1px solid ${designTokens.colors['border-light']};
          box-shadow: ${designTokens.shadows.sm};
        `;
        
      case 'elevated':
        return css`
          background: ${designTokens.colors.white};
          border: none;
          box-shadow: ${designTokens.shadows.lg};
        `;
        
      case 'outlined':
        return css`
          background: transparent;
          border: 2px solid ${designTokens.colors.gold};
          box-shadow: none;
        `;
        
      case 'glass':
        return css`
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: ${designTokens.shadows.lg};
        `;
        
      case 'gradient':
        return css`
          background: linear-gradient(135deg, ${designTokens.colors.gold}, ${designTokens.colors['gold-muted']});
          border: none;
          box-shadow: ${designTokens.shadows.gold};
          color: ${designTokens.colors.black};
        `;
        
      default:
        return css`
          background: ${designTokens.colors.white};
          border: 1px solid ${designTokens.colors['border-light']};
        `;
    }
  }}
  
  /* Hover effects */
  ${({ hover, clickable }) => (hover || clickable) && css`
    cursor: ${clickable ? 'pointer' : 'default'};
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${designTokens.shadows.xl};
    }
  `}
  
  /* Clickable state */
  ${({ clickable }) => clickable && css`
    &:active {
      transform: translateY(-2px);
    }
    
    &:focus-visible {
      outline: 2px solid ${designTokens.colors.gold};
      outline-offset: 2px;
    }
  `}
`;

// Card header component
const CardHeader = styled.div`
  margin-bottom: ${designTokens.spacing[6]};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Card title component
const CardTitle = styled.h3`
  font-size: ${designTokens.typography.sizes['2xl']};
  font-weight: ${designTokens.typography.weights.bold};
  color: ${designTokens.colors['text-primary']};
  margin: 0 0 ${designTokens.spacing[2]} 0;
  font-family: ${designTokens.typography.fontHeading};
  line-height: ${designTokens.typography.lineHeights.tight};
`;

// Card subtitle component
const CardSubtitle = styled.p`
  font-size: ${designTokens.typography.sizes.base};
  color: ${designTokens.colors['text-secondary']};
  margin: 0;
  line-height: ${designTokens.typography.lineHeights.relaxed};
`;

// Card body component
const CardBody = styled.div`
  flex: 1;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Card footer component
const CardFooter = styled.div`
  margin-top: ${designTokens.spacing[6]};
  padding-top: ${designTokens.spacing[6]};
  border-top: 1px solid ${designTokens.colors['border-light']};
  
  &:first-child {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
`;

// Card image component
const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background: ${({ src }) => src ? `url(${src})` : designTokens.colors['gray-100']};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: ${designTokens.radius.lg};
  margin-bottom: ${designTokens.spacing[4]};
  
  ${designTokens.media.maxMd} {
    height: 150px;
  }
`;

// Card badge component
const CardBadge = styled.div`
  position: absolute;
  top: ${designTokens.spacing[4]};
  right: ${designTokens.spacing[4]};
  padding: ${designTokens.spacing[1]} ${designTokens.spacing[3]};
  border-radius: ${designTokens.radius.full};
  font-size: ${designTokens.typography.sizes.sm};
  font-weight: ${designTokens.typography.weights.semibold};
  text-transform: uppercase;
  letter-spacing: ${designTokens.typography.letterSpacing.wide};
  
  ${({ variant = 'gold' }) => {
    switch (variant) {
      case 'gold':
        return css`
          background: ${designTokens.colors.gold};
          color: ${designTokens.colors.black};
        `;
      case 'teal':
        return css`
          background: ${designTokens.colors.teal};
          color: ${designTokens.colors.white};
        `;
      case 'purple':
        return css`
          background: ${designTokens.colors.purple};
          color: ${designTokens.colors.white};
        `;
      default:
        return css`
          background: ${designTokens.colors.gold};
          color: ${designTokens.colors.black};
        `;
    }
  }}
`;

// Card stats component
const CardStats = styled.div`
  display: flex;
  gap: ${designTokens.spacing[6]};
  margin-top: ${designTokens.spacing[4]};
  
  ${designTokens.media.maxMd} {
    flex-direction: column;
    gap: ${designTokens.spacing[3]};
  }
`;

const CardStat = styled.div`
  text-align: center;
  flex: 1;
`;

const CardStatValue = styled.div`
  font-size: ${designTokens.typography.sizes['3xl']};
  font-weight: ${designTokens.typography.weights.bold};
  color: ${designTokens.colors['text-primary']};
  font-family: ${designTokens.typography.fontHeading};
  line-height: ${designTokens.typography.lineHeights.tight};
`;

const CardStatLabel = styled.div`
  font-size: ${designTokens.typography.sizes.sm};
  color: ${designTokens.colors['text-secondary']};
  font-weight: ${designTokens.typography.weights.medium};
  text-transform: uppercase;
  letter-spacing: ${designTokens.typography.letterSpacing.wide};
  margin-top: ${designTokens.spacing[1]};
`;

// Main Card component
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
  // Animation variants
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
      transition={designTokens.transitions.spring}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

// Card grid component
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ columns = 3 }) => columns}, 1fr);
  gap: ${({ gap = 6 }) => designTokens.spacing[gap]};
  
  @media (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ gap = 6 }) => designTokens.spacing[Math.max(4, gap - 2)]};
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${({ gap = 6 }) => designTokens.spacing[Math.max(4, gap - 1)]};
  }
`;

// Export components
export {
  Card,
  CardHeader,
  CardTitle,
  CardSubtitle,
  CardBody,
  CardFooter,
  CardImage,
  CardBadge,
  CardStats,
  CardStat,
  CardStatValue,
  CardStatLabel,
  CardGrid,
};

export default Card;

