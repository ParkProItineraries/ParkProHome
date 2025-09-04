import { css } from 'styled-components';

// Flexbox utilities
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const flexStart = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const flexEnd = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Typography utilities
export const fluidType = (minSize, maxSize, minWidth = 320, maxWidth = 1200) => css`
  font-size: clamp(${minSize}px, ${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})), ${maxSize}px);
`;

export const headingStyle = css`
  font-family: ${({ theme }) => theme.typography.fontHeading};
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  line-height: ${({ theme }) => theme.typography.lineHeights.tight};
  letter-spacing: -0.02em;
`;

export const bodyStyle = css`
  font-family: ${({ theme }) => theme.typography.fontBody};
  font-weight: ${({ theme }) => theme.typography.weights.normal};
  line-height: ${({ theme }) => theme.typography.lineHeights.relaxed};
`;

// Spacing utilities
export const clampSpace = (minSpace, maxSpace, minWidth = 320, maxWidth = 1200) => css`
  padding: clamp(${minSpace}px, ${minSpace}px + (${maxSpace} - ${minSpace}) * ((100vw - ${minWidth}px) / (${maxWidth} - ${minWidth})), ${maxSpace}px);
`;

export const sectionPadding = css`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} 0;
  }
`;

// Container utilities
export const container = css`
  max-width: ${({ theme }) => theme.containerWidths.xl};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: ${({ theme }) => theme.containerWidths.lg};
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: ${({ theme }) => theme.containerWidths.md};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.containerWidths.sm};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

// Visual utilities
export const glassEffect = css`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const glassEffectDark = css`
  background: rgba(11, 11, 12, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const gradientText = css`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const goldGradient = css`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold}, ${({ theme }) => theme.colors['gold-muted']});
`;

export const blackGradient = css`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.black}, ${({ theme }) => theme.colors['gray-900']});
`;

// Interactive utilities
export const hoverLift = css`
  transition: ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export const focusRing = css`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.gold};
    outline-offset: 2px;
    border-radius: ${({ theme }) => theme.radius.md};
  }
`;

export const buttonReset = css`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  font-family: inherit;
  cursor: pointer;
`;

// Animation utilities
export const fadeIn = css`
  animation: fadeIn 0.6s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const slideUp = css`
  animation: slideUp 0.6s ease-out;
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const scaleIn = css`
  animation: scaleIn 0.6s ease-out;
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

// Accessibility utilities
export const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

// Responsive utilities
export const responsive = {
  sm: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      ${styles}
    }
  `,
  md: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      ${styles}
    }
  `,
  lg: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      ${styles}
    }
  `,
  xl: (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
      ${styles}
    }
  `,
  '2xl': (styles) => css`
    @media (min-width: ${({ theme }) => theme.breakpoints['2xl']}) {
      ${styles}
    }
  `,
};
