import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import tokens from '../../design-system/tokens';

// Premium Button Component - Enterprise Grade
const StyledButton = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => !['variant', 'size', 'fullWidth', 'loading', 'whileHover', 'whileTap', 'variants', 'initial', 'transition'].includes(prop)
})`
  /* Base Styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing[2]};
  border: none;
  border-radius: ${tokens.radius.md};
  font-family: ${tokens.typography.fontBody};
  font-weight: ${tokens.typography.weights.semibold};
  text-decoration: none;
  cursor: pointer;
  transition: ${tokens.transitions.default};
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  /* Size Variants */
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          padding: ${tokens.spacing[2]} ${tokens.spacing[3]};
          font-size: ${tokens.typography.sizes.sm};
          height: 2rem;
          min-height: 2rem;
        `;
      case 'sm':
        return css`
          padding: ${tokens.spacing[2.5]} ${tokens.spacing[4]};
          font-size: ${tokens.typography.sizes.sm};
          height: 2.5rem;
          min-height: 2.5rem;
        `;
      case 'md':
        return css`
          padding: ${tokens.spacing[3]} ${tokens.spacing[6]};
          font-size: ${tokens.typography.sizes.base};
          height: 3rem;
          min-height: 3rem;
        `;
      case 'lg':
        return css`
          padding: ${tokens.spacing[4]} ${tokens.spacing[8]};
          font-size: ${tokens.typography.sizes.lg};
          height: 3.5rem;
          min-height: 3.5rem;
        `;
      default:
        return css`
          padding: ${tokens.spacing[3]} ${tokens.spacing[6]};
          font-size: ${tokens.typography.sizes.base};
          height: 3rem;
          min-height: 3rem;
        `;
    }
  }}
  
  /* Full Width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Variant Styles */
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${tokens.colors.gold};
          color: ${tokens.colors.black};
          box-shadow: ${tokens.shadows.gold};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors['gold-dark']};
            color: ${tokens.colors.black} !important;
            transform: translateY(-2px);
            box-shadow: ${tokens.shadows['gold-lg']};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
            color: ${tokens.colors.black} !important;
          }
        `;
        
      case 'secondary':
        return css`
          background: ${tokens.colors.white};
          color: ${tokens.colors.black};
          border: 2px solid ${tokens.colors.black};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors.black};
            color: ${tokens.colors.white};
            transform: translateY(-2px);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'ghost':
        return css`
          background: transparent;
          color: ${tokens.colors['text-secondary']};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors['gray-100']};
            color: ${tokens.colors.black};
          }
        `;
        
      case 'gold':
        return css`
          background: ${tokens.colors.gold};
          color: ${tokens.colors.black};
          box-shadow: ${tokens.shadows.gold};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors['gold-dark']};
            transform: translateY(-2px);
            box-shadow: ${tokens.shadows['gold-lg']};
          }
        `;
        
      case 'purple':
        return css`
          background: ${tokens.colors.purple};
          color: ${tokens.colors.white};
          box-shadow: ${tokens.shadows.purple};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors['purple-dark']};
            transform: translateY(-2px);
            box-shadow: ${tokens.shadows['purple-lg']};
          }
        `;
        
      case 'outline':
        return css`
          background: transparent;
          color: ${tokens.colors.gold};
          border: 2px solid ${tokens.colors.gold};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors.gold};
            color: ${tokens.colors.black};
            transform: translateY(-2px);
          }
        `;
        
      case 'link':
        return css`
          background: transparent;
          color: ${tokens.colors.gold};
          padding: 0;
          height: auto;
          min-height: auto;
          text-decoration: underline;
          
          &:hover:not(:disabled) {
            color: ${tokens.colors['gold-dark']};
            text-decoration: none;
          }
        `;
        
      default:
        return css`
          background: ${tokens.colors.gold};
          color: ${tokens.colors.black};
        `;
    }
  }}
  
  /* Disabled State */
  ${({ disabled, loading }) => (disabled || loading) && css`
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  /* Focus Styles */
  &:focus-visible {
    outline: 2px solid ${tokens.colors.gold};
    outline-offset: 2px;
  }
  
  /* Loading State */
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
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Styled anchor for links (without framer-motion)
const StyledAnchor = styled.a.withConfig({
  shouldForwardProp: (prop) => !['variant', 'size', 'fullWidth', 'loading'].includes(prop)
})`
  /* Base Styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${tokens.spacing[2]};
  border: none;
  border-radius: ${tokens.radius.md};
  font-family: ${tokens.typography.fontBody};
  font-weight: ${tokens.typography.weights.semibold};
  text-decoration: none;
  cursor: pointer;
  transition: ${tokens.transitions.default};
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  
  /* Size Variants */
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          padding: ${tokens.spacing[2]} ${tokens.spacing[3]};
          font-size: ${tokens.typography.sizes.sm};
          height: 2rem;
          min-height: 2rem;
        `;
      case 'sm':
        return css`
          padding: ${tokens.spacing[2.5]} ${tokens.spacing[4]};
          font-size: ${tokens.typography.sizes.sm};
          height: 2.5rem;
          min-height: 2.5rem;
        `;
      case 'md':
        return css`
          padding: ${tokens.spacing[3]} ${tokens.spacing[6]};
          font-size: ${tokens.typography.sizes.base};
          height: 3rem;
          min-height: 3rem;
        `;
      case 'lg':
        return css`
          padding: ${tokens.spacing[4]} ${tokens.spacing[8]};
          font-size: ${tokens.typography.sizes.lg};
          height: 3.5rem;
          min-height: 3.5rem;
        `;
      default:
        return css`
          padding: ${tokens.spacing[3]} ${tokens.spacing[6]};
          font-size: ${tokens.typography.sizes.base};
          height: 3rem;
          min-height: 3rem;
        `;
    }
  }}
  
  /* Full Width */
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  /* Variant Styles */
  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${tokens.colors.gold};
          color: ${tokens.colors.black};
          box-shadow: ${tokens.shadows.gold};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors['gold-dark']};
            color: ${tokens.colors.black} !important;
            transform: translateY(-2px);
            box-shadow: ${tokens.shadows['gold-lg']};
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
            color: ${tokens.colors.black} !important;
          }
        `;
        
      case 'secondary':
        return css`
          background: ${tokens.colors.white};
          color: ${tokens.colors.black};
          border: 2px solid ${tokens.colors.black};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors.black};
            color: ${tokens.colors.white};
            transform: translateY(-2px);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `;
        
      case 'ghost':
        return css`
          background: transparent;
          color: ${tokens.colors['text-secondary']};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors['gray-100']};
            color: ${tokens.colors.black};
          }
        `;
        
      case 'gold':
        return css`
          background: ${tokens.colors.gold};
          color: ${tokens.colors.black};
          box-shadow: ${tokens.shadows.gold};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors['gold-dark']};
            color: ${tokens.colors.black} !important;
            transform: translateY(-2px);
            box-shadow: ${tokens.shadows['gold-lg']};
          }
        `;
        
      case 'purple':
        return css`
          background: ${tokens.colors.purple};
          color: ${tokens.colors.white};
          box-shadow: ${tokens.shadows.purple};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors['purple-dark']};
            transform: translateY(-2px);
            box-shadow: ${tokens.shadows['purple-lg']};
          }
        `;
        
      case 'outline':
        return css`
          background: transparent;
          color: ${tokens.colors.gold};
          border: 2px solid ${tokens.colors.gold};
          
          &:hover:not(:disabled) {
            background: ${tokens.colors.gold};
            color: ${tokens.colors.black};
            transform: translateY(-2px);
          }
        `;
        
      case 'link':
        return css`
          background: transparent;
          color: ${tokens.colors.gold};
          padding: 0;
          height: auto;
          min-height: auto;
          text-decoration: underline;
          
          &:hover:not(:disabled) {
            color: ${tokens.colors['gold-dark']};
            text-decoration: none;
          }
        `;
        
      default:
        return css`
          background: ${tokens.colors.gold};
          color: ${tokens.colors.black};
        `;
    }
  }}
  
  /* Disabled State */
  ${({ disabled, loading }) => (disabled || loading) && css`
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  /* Focus Styles */
  &:focus-visible {
    outline: 2px solid ${tokens.colors.gold};
    outline-offset: 2px;
  }
`;

const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  gap: ${tokens.spacing[2]};
  opacity: ${({ loading }) => loading ? 0 : 1};
  transition: opacity ${tokens.transitions.normal};
`;

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
  const handleClick = () => {
    if (loading || disabled) return;
    
    if (onClick) {
      onClick();
    }
    
    if (href) {
      window.open(href, target || '_self');
    }
    
    if (to) {
      window.location.href = to;
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const isAnchor = href || to;
  
  // Only apply framer-motion props to buttons, not anchors
  const motionProps = isAnchor ? {} : {
    variants: buttonVariants,
    initial: "initial",
    whileHover: "hover",
    whileTap: "tap",
    transition: tokens.transitions.spring,
  };

  return (
    <StyledButton
      as={isAnchor ? 'a' : 'button'}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      disabled={disabled}
      loading={loading}
      onClick={handleClick}
      type={isAnchor ? undefined : type}
      href={href}
      target={target}
      rel={rel}
      className={className}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...motionProps}
      {...props}
    >
      <ButtonContent loading={loading}>
        {children}
      </ButtonContent>
    </StyledButton>
  );
};

export default Button;
