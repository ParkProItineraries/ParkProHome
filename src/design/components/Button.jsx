import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { designTokens } from '../tokens.js';

// Styled button component (for actual buttons)
const StyledButton = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => !['variant', 'size', 'fullWidth', 'loading', 'variants', 'initial', 'whileHover', 'whileTap', 'transition'].includes(prop)
})`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${designTokens.spacing[2]};
  border: none;
  border-radius: ${designTokens.radius.lg};
  font-family: ${designTokens.typography.fontBody};
  font-weight: ${designTokens.typography.weights.semibold};
  text-decoration: none;
  cursor: pointer;
  transition: ${designTokens.transitions.normal};
  position: relative;
  overflow: hidden;
  
  /* Size variants */
  ${({ size }) => {
    const sizeConfig = designTokens.components.button.sizes[size];
    return css`
      padding: ${sizeConfig.padding};
      font-size: ${sizeConfig.fontSize};
      height: ${sizeConfig.height};
      min-height: ${sizeConfig.height};
    `;
  }}
  
  /* Full width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Disabled state */
  ${({ disabled, loading }) => (disabled || loading) && css`
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  /* Variant styles */
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${designTokens.colors.gold};
          color: ${designTokens.colors.black};
          box-shadow: ${designTokens.shadows.gold};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors['gold-muted']};
            transform: translateY(-2px);
            box-shadow: ${designTokens.shadows['gold-lg']};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'secondary':
        return css`
          background: ${designTokens.colors.white};
          color: ${designTokens.colors.black};
          border: 2px solid ${designTokens.colors.black};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors.black};
            color: ${designTokens.colors.white};
            transform: translateY(-2px);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'ghost':
        return css`
          background: transparent;
          color: ${designTokens.colors['text-secondary']};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors['gray-100']};
            color: ${designTokens.colors.black};
          }
        `;
        
      case 'teal':
        return css`
          background: ${designTokens.colors.teal};
          color: ${designTokens.colors.white};
          box-shadow: ${designTokens.shadows.teal};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors['teal-muted']};
            transform: translateY(-2px);
            box-shadow: ${designTokens.shadows['teal-lg']};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'purple':
        return css`
          background: ${designTokens.colors.purple};
          color: ${designTokens.colors.white};
          box-shadow: ${designTokens.shadows.purple};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors['purple-muted']};
            transform: translateY(-2px);
            box-shadow: ${designTokens.shadows['purple-lg']};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'outline':
        return css`
          background: transparent;
          color: ${designTokens.colors.gold};
          border: 2px solid ${designTokens.colors.gold};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors.gold};
            color: ${designTokens.colors.black};
            transform: translateY(-2px);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'link':
        return css`
          background: transparent;
          color: ${designTokens.colors.gold};
          padding: 0;
          height: auto;
          min-height: auto;
          text-decoration: underline;
          
          &:hover:not(:disabled) {
            color: ${designTokens.colors['gold-muted']};
            text-decoration: none;
          }
        `;
        
      default:
        return css`
          background: ${designTokens.colors.gold};
          color: ${designTokens.colors.black};
        `;
    }
  }}
  
  /* Focus styles */
  &:focus-visible {
    outline: 2px solid ${designTokens.colors.gold};
    outline-offset: 2px;
  }
  
  /* Loading state */
  ${({ loading }) => loading && css`
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid transparent;
      border-top: 2px solid currentColor;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  `}
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:active:not(:disabled)::before {
    width: 300px;
    height: 300px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Styled anchor component (for links, no motion props) - copy all styles from StyledButton
const StyledAnchor = styled.a.withConfig({
  shouldForwardProp: (prop) => !['variant', 'size', 'fullWidth', 'loading'].includes(prop)
})`
  /* Base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${designTokens.spacing[2]};
  border: none;
  border-radius: ${designTokens.radius.lg};
  font-family: ${designTokens.typography.fontBody};
  font-weight: ${designTokens.typography.weights.semibold};
  text-decoration: none;
  cursor: pointer;
  transition: ${designTokens.transitions.normal};
  position: relative;
  overflow: hidden;
  
  /* Size variants */
  ${({ size }) => {
    const sizeConfig = designTokens.components.button.sizes[size];
    return css`
      padding: ${sizeConfig.padding};
      font-size: ${sizeConfig.fontSize};
      height: ${sizeConfig.height};
      min-height: ${sizeConfig.height};
    `;
  }}
  
  /* Full width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Disabled state */
  ${({ disabled, loading }) => (disabled || loading) && css`
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  /* Variant styles */
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${designTokens.colors.gold};
          color: ${designTokens.colors.black};
          box-shadow: ${designTokens.shadows.gold};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors['gold-muted']};
            transform: translateY(-2px);
            box-shadow: ${designTokens.shadows['gold-lg']};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'secondary':
        return css`
          background: ${designTokens.colors.white};
          color: ${designTokens.colors.black};
          border: 2px solid ${designTokens.colors.black};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors.black};
            color: ${designTokens.colors.white};
            transform: translateY(-2px);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'ghost':
        return css`
          background: transparent;
          color: ${designTokens.colors['text-secondary']};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors['gray-100']};
            color: ${designTokens.colors.black};
          }
        `;
        
      case 'teal':
        return css`
          background: ${designTokens.colors.teal};
          color: ${designTokens.colors.white};
          box-shadow: ${designTokens.shadows.teal};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors['teal-muted']};
            transform: translateY(-2px);
            box-shadow: ${designTokens.shadows['teal-lg']};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'purple':
        return css`
          background: ${designTokens.colors.purple};
          color: ${designTokens.colors.white};
          box-shadow: ${designTokens.shadows.purple};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors['purple-muted']};
            transform: translateY(-2px);
            box-shadow: ${designTokens.shadows['purple-lg']};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'outline':
        return css`
          background: transparent;
          color: ${designTokens.colors.gold};
          border: 2px solid ${designTokens.colors.gold};
          
          &:hover:not(:disabled) {
            background: ${designTokens.colors.gold};
            color: ${designTokens.colors.black};
            transform: translateY(-2px);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'link':
        return css`
          background: transparent;
          color: ${designTokens.colors.gold};
          padding: 0;
          height: auto;
          min-height: auto;
          text-decoration: underline;
          
          &:hover:not(:disabled) {
            color: ${designTokens.colors['gold-muted']};
            text-decoration: none;
          }
        `;
        
      default:
        return css`
          background: ${designTokens.colors.gold};
          color: ${designTokens.colors.black};
        `;
    }
  }}
  
  /* Focus styles */
  &:focus-visible {
    outline: 2px solid ${designTokens.colors.gold};
    outline-offset: 2px;
  }
  
  /* Ripple effect */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  &:active:not(:disabled)::before {
    width: 300px;
    height: 300px;
  }
`;

// Loading spinner component
const LoadingSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;

// Button content wrapper
const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  gap: ${designTokens.spacing[2]};
  opacity: ${({ loading }) => loading ? 0 : 1};
  transition: opacity ${designTokens.transitions.normal};
`;

// Main Button component
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  href,
  to,
  target,
  rel,
  onClick,
  type = 'button',
  className,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  ...props
}) => {
  // Handle navigation
  const handleClick = (e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    
    if (onClick) {
      onClick(e);
    }
    
    if (href) {
      window.open(href, target || '_self');
    }
    
    if (to) {
      // This would typically use React Router's navigate
      // For now, we'll use window.location
      window.location.href = to;
    }
  };

  // Animation variants (only for button, not anchor)
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const isAnchor = href || to;
  
  // Common props for both button and anchor
  const commonProps = {
    variant,
    size,
    fullWidth,
    className,
    'aria-label': ariaLabel,
    'aria-describedby': ariaDescribedBy,
    onClick: handleClick,
    ...props
  };

  // Render as anchor or button
  if (isAnchor) {
    return (
      <StyledAnchor
        href={href || to}
        target={target}
        rel={rel}
        {...commonProps}
      >
        <ButtonContent loading={false}>
          {children}
        </ButtonContent>
      </StyledAnchor>
    );
  }

  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      loading={loading}
      type={type}
      className={className}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={designTokens.transitions.spring}
      onClick={handleClick}
      {...props}
    >
      <ButtonContent loading={loading}>
        {loading && <LoadingSpinner />}
        {children}
      </ButtonContent>
    </StyledButton>
  );
};

// Button group component for multiple buttons
const ButtonGroup = styled.div`
  display: flex;
  gap: ${designTokens.spacing[3]};
  flex-direction: ${({ orientation }) => orientation === 'vertical' ? 'column' : 'row'};
  align-items: ${({ orientation }) => orientation === 'vertical' ? 'stretch' : 'center'};
  
  ${designTokens.media.maxMd} {
    flex-direction: column;
    align-items: stretch;
  }
`;

// Export components
export { Button, ButtonGroup, LoadingSpinner };
export default Button;

