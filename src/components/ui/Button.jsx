import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { focusRing, buttonReset } from '../../styles/mixins';

const getButtonStyles = (variant, size) => {
  const baseStyles = `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};
    font-weight: ${({ theme }) => theme.typography.weights.semibold};
    text-decoration: none;
    border-radius: ${({ theme }) => theme.radius.md};
    border: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.normal};
    position: relative;
    overflow: hidden;
    font-family: ${({ theme }) => theme.typography.fontBody};
    letter-spacing: -0.01em;
    ${focusRing}
  `;

  const sizeStyles = {
    sm: `
      padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
      font-size: ${({ theme }) => theme.typography.sizes.sm};
    `,
    md: `
      padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
      font-size: ${({ theme }) => theme.typography.sizes.base};
    `,
    lg: `
      padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing['2xl']};
      font-size: ${({ theme }) => theme.typography.sizes.lg};
    `,
  };

  const variantStyles = {
    primary: `
      background: ${({ theme }) => theme.colors.black};
      color: ${({ theme }) => theme.colors.white};
      box-shadow: ${({ theme }) => theme.shadows.lg};
      
      &:hover {
        background: ${({ theme }) => theme.colors['gray-900']};
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.xl};
      }
      
      &:active {
        transform: translateY(0);
      }
    `,
    secondary: `
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.black};
      border: 2px solid ${({ theme }) => theme.colors.black};
      box-shadow: ${({ theme }) => theme.shadows.md};
      
      &:hover {
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.xl};
      }
    `,
    ghost: `
      background: transparent;
      color: ${({ theme }) => theme.colors['gray-600']};
      box-shadow: ${({ theme }) => theme.shadows.sm};
      
      &:hover {
        background: ${({ theme }) => theme.colors['gray-100']};
        color: ${({ theme }) => theme.colors.black};
        transform: translateY(-1px);
        box-shadow: ${({ theme }) => theme.shadows.md};
      }
    `,
    gold: `
      background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
      color: ${({ theme }) => theme.colors.black};
      box-shadow: ${({ theme }) => theme.shadows.gold};
      
      &:hover {
        background: linear-gradient(135deg, ${({ theme }) => theme.colors['gold-muted']}, ${({ theme }) => theme.colors.gold});
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows['gold-lg']};
      }
    `,
    outline: `
      background: transparent;
      color: ${({ theme }) => theme.colors.black};
      border: 2px solid ${({ theme }) => theme.colors.black};
      box-shadow: ${({ theme }) => theme.shadows.sm};
      
      &:hover {
        background: ${({ theme }) => theme.colors.black};
        color: ${({ theme }) => theme.colors.white};
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadows.md};
      }
    `,
  };

  return `
    ${baseStyles}
    ${sizeStyles[size || 'md']}
    ${variantStyles[variant || 'primary']}
  `;
};

const ShimmerEffect = styled.div`
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.6s ease;
`;

export const StyledButton = styled.button`
  ${({ $variant, $size }) => getButtonStyles($variant, $size)}
  ${buttonReset}
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover ${ShimmerEffect} {
    left: 100%;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  &.loading {
    pointer-events: none;
    opacity: 0.8;
  }

  &.success {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
  }

  &.error {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
  }
`;

export const StyledLink = styled(Link)`
  ${({ $variant, $size }) => getButtonStyles($variant, $size)}
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover ${ShimmerEffect} {
    left: 100%;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  &.loading {
    pointer-events: none;
    opacity: 0.8;
  }

  &.success {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
  }

  &.error {
    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    color: white;
  }
`;

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  to, 
  href, 
  target, 
  rel, 
  onClick, 
  disabled, 
  className,
  type,
  ...props 
}) => {
  if (to) {
    return (
      <StyledLink 
        to={to} 
        $variant={variant} 
        $size={size} 
        className={className}
        {...props}
      >
        {children}
        <ShimmerEffect />
      </StyledLink>
    );
  }

  if (href) {
    return (
      <StyledLink 
        as="a" 
        href={href} 
        target={target} 
        rel={rel} 
        $variant={variant} 
        $size={size} 
        className={className}
        {...props}
      >
        {children}
        <ShimmerEffect />
      </StyledLink>
    );
  }

  return (
    <StyledButton 
      onClick={onClick} 
      disabled={disabled} 
      $variant={variant} 
      $size={size} 
      className={className}
      type={type}
      {...props}
    >
      {children}
      <ShimmerEffect />
    </StyledButton>
  );
};

export default Button;
