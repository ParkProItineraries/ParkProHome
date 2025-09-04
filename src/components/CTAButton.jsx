import styled from "styled-components";
import { Link } from "react-router-dom";

const getButtonStyles = (variant, size) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    fontWeight: "600",
    textDecoration: "none",
    borderRadius: "var(--radius-lg)",
    border: "none",
    cursor: "pointer",
    transition: "var(--transition-normal)",
    position: "relative",
    overflow: "hidden",
    fontFamily: "var(--font-family-primary)",
    letterSpacing: "-0.01em",
    backdropFilter: "blur(10px)",
  };

  const sizeStyles = {
    small: {
      padding: "0.75rem 1.5rem",
      fontSize: "0.875rem",
    },
    medium: {
      padding: "1rem 2rem",
      fontSize: "1rem",
    },
    large: {
      padding: "1.25rem 2.5rem",
      fontSize: "1.125rem",
    },
  };

  const variantStyles = {
    primary: {
      background: "linear-gradient(135deg, var(--color-black) 0%, var(--color-black-soft) 100%)",
      color: "var(--color-white)",
      boxShadow: "var(--shadow-lg)",
      "&:hover": {
        background: "linear-gradient(135deg, var(--color-black-soft) 0%, var(--color-black-light) 100%)",
        transform: "translateY(-3px)",
        boxShadow: "var(--shadow-xl)",
      },
      "&:active": {
        transform: "translateY(-1px)",
      },
    },
    secondary: {
      background: "var(--color-white)",
      color: "var(--color-black)",
      border: "2px solid var(--color-black)",
      boxShadow: "var(--shadow-md)",
      "&:hover": {
        background: "var(--color-black)",
        color: "var(--color-white)",
        transform: "translateY(-3px)",
        boxShadow: "var(--shadow-xl)",
      },
    },
    ghost: {
      background: "transparent",
      color: "var(--color-gray-600)",
      "&:hover": {
        background: "var(--color-gray-100)",
        color: "var(--color-black)",
        transform: "translateY(-2px)",
      },
    },
    gold: {
      background: "linear-gradient(135deg, var(--color-gold) 0%, var(--color-gold-dark) 100%)",
      color: "var(--color-black)",
      boxShadow: "var(--shadow-gold)",
      "&:hover": {
        background: "linear-gradient(135deg, var(--color-gold-dark) 0%, var(--color-gold-darker) 100%)",
        transform: "translateY(-3px)",
        boxShadow: "var(--shadow-gold-lg)",
      },
    },
    outline: {
      background: "transparent",
      color: "var(--color-black)",
      border: "2px solid var(--color-black)",
      "&:hover": {
        background: "var(--color-black)",
        color: "var(--color-white)",
        transform: "translateY(-3px)",
      },
    },
  };

  return {
    ...baseStyles,
    ...sizeStyles[size || "medium"],
    ...variantStyles[variant || "primary"],
  };
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

export const CTAButton = styled(Link)`
  ${({ variant, size }) => getButtonStyles(variant, size)}
  
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

  &:focus {
    outline: 2px solid var(--color-gold);
    outline-offset: 2px;
    border-radius: var(--radius-lg);
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

export const Button = styled.button`
  ${({ variant, size }) => getButtonStyles(variant, size)}
  
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

  &:focus {
    outline: 2px solid var(--color-gold);
    outline-offset: 2px;
    border-radius: var(--radius-lg);
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