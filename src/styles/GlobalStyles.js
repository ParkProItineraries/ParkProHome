import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary Brand Colors */
    --pp-black: ${theme.colors.black};
    --pp-white: ${theme.colors.white};
    --pp-gold: ${theme.colors.gold};
    --pp-gold-muted: ${theme.colors['gold-muted']};
    
    /* Gray Scale */
    --pp-gray-100: ${theme.colors['gray-100']};
    --pp-gray-300: ${theme.colors['gray-300']};
    --pp-gray-600: ${theme.colors['gray-600']};
    --pp-gray-900: ${theme.colors['gray-900']};
    
    /* Semantic Colors */
    --pp-overlay: ${theme.colors.overlay};
    
    /* Typography */
    --font-heading: ${theme.typography.fontHeading};
    --font-body: ${theme.typography.fontBody};
    
    /* Spacing */
    --space-xs: ${theme.spacing.xs};
    --space-sm: ${theme.spacing.sm};
    --space-md: ${theme.spacing.md};
    --space-lg: ${theme.spacing.lg};
    --space-xl: ${theme.spacing.xl};
    --space-2xl: ${theme.spacing['2xl']};
    --space-3xl: ${theme.spacing['3xl']};
    --space-4xl: ${theme.spacing['4xl']};
    
    /* Border Radius */
    --radius-sm: ${theme.radius.sm};
    --radius-md: ${theme.radius.md};
    --radius-lg: ${theme.radius.lg};
    --radius-xl: ${theme.radius.xl};
    --radius-full: ${theme.radius.full};
    
    /* Shadows */
    --shadow-sm: ${theme.shadows.sm};
    --shadow-md: ${theme.shadows.md};
    --shadow-lg: ${theme.shadows.lg};
    --shadow-xl: ${theme.shadows.xl};
    --shadow-2xl: ${theme.shadows['2xl']};
    --shadow-gold: ${theme.shadows.gold};
    --shadow-gold-lg: ${theme.shadows['gold-lg']};
    
    /* Transitions */
    --transition-fast: ${theme.transitions.fast};
    --transition-normal: ${theme.transitions.normal};
    --transition-slow: ${theme.transitions.slow};
    --transition-bounce: ${theme.transitions.bounce};
    
    /* Z-Index */
    --z-dropdown: ${theme.zIndex.dropdown};
    --z-sticky: ${theme.zIndex.sticky};
    --z-fixed: ${theme.zIndex.fixed};
    --z-modal-backdrop: ${theme.zIndex.modalBackdrop};
    --z-modal: ${theme.zIndex.modal};
    --z-popover: ${theme.zIndex.popover};
    --z-tooltip: ${theme.zIndex.tooltip};
  }

  /* CSS Reset & Base Styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: var(--font-body);
    font-size: ${theme.typography.sizes.base};
    line-height: ${theme.typography.lineHeights.relaxed};
    color: ${theme.colors['text-primary']};
    background-color: ${theme.colors['bg-primary']};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    margin: 0 0 ${theme.spacing.md} 0;
    font-family: var(--font-heading);
    font-weight: ${theme.typography.weights.bold};
    line-height: ${theme.typography.lineHeights.tight};
    color: ${theme.colors['text-primary']};
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: ${theme.typography.sizes['7xl']};
    font-weight: ${theme.typography.weights.extrabold};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.sizes['5xl']};
    }
    
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.typography.sizes['4xl']};
    }
  }

  h2 {
    font-size: ${theme.typography.sizes['5xl']};
    font-weight: ${theme.typography.weights.bold};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.sizes['4xl']};
    }
    
    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.typography.sizes['3xl']};
    }
  }

  h3 {
    font-size: ${theme.typography.sizes['3xl']};
    font-weight: ${theme.typography.weights.semibold};
    
    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.typography.sizes['2xl']};
    }
  }

  h4 {
    font-size: ${theme.typography.sizes['2xl']};
    font-weight: ${theme.typography.weights.semibold};
  }

  h5 {
    font-size: ${theme.typography.sizes.xl};
    font-weight: ${theme.typography.weights.semibold};
  }

  h6 {
    font-size: ${theme.typography.sizes.lg};
    font-weight: ${theme.typography.weights.semibold};
  }

  p {
    margin: 0 0 ${theme.spacing.md} 0;
    color: ${theme.colors['text-secondary']};
    line-height: ${theme.typography.lineHeights.relaxed};
  }

  /* Links */
  a {
    color: inherit;
    text-decoration: none;
    transition: ${theme.transitions.normal};
    
    &:hover {
      color: ${theme.colors.primary};
    }
    
    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
      border-radius: ${theme.radius.sm};
    }
  }

  /* Buttons */
  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    
    &:focus-visible {
      outline: 2px solid ${theme.colors.primary};
      outline-offset: 2px;
      border-radius: ${theme.radius.sm};
    }
  }

  /* Lists */
  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Form Elements */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors['gray-100']};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors['gray-300']};
    border-radius: ${theme.radius.full};
    
    &:hover {
      background: ${theme.colors['gray-600']};
    }
  }

  /* Selection */
  ::selection {
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }

  /* Focus styles */
  :focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .container {
    max-width: ${theme.containerWidths.xl};
    margin: 0 auto;
    padding: 0 ${theme.spacing.xl};
    
    @media (max-width: ${theme.breakpoints.lg}) {
      max-width: ${theme.containerWidths.lg};
      padding: 0 ${theme.spacing.lg};
    }
    
    @media (max-width: ${theme.breakpoints.md}) {
      max-width: ${theme.containerWidths.md};
      padding: 0 ${theme.spacing.md};
    }
    
    @media (max-width: ${theme.breakpoints.sm}) {
      max-width: ${theme.containerWidths.sm};
      padding: 0 ${theme.spacing.sm};
    }
  }

  .text-center {
    text-align: center;
  }

  .text-left {
    text-align: left;
  }

  .text-right {
    text-align: right;
  }

  .gradient-text {
    background: linear-gradient(135deg, ${theme.colors['primary-dark']}, ${theme.colors['primary-light']});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .glass-effect {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .glass-effect-dark {
    background: rgba(11, 11, 12, 0.95);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Animation classes */
  .fade-in {
    animation: fadeIn 0.6s ease-out;
  }

  .slide-up {
    animation: slideUp 0.6s ease-out;
  }

  .scale-in {
    animation: scaleIn 0.6s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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

  /* Reduced motion support */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    :root {
      --pp-black: #000000;
      --pp-white: #ffffff;
      --pp-gold: #E9B029; // Dark gold for high contrast
    }
  }
`;

export default GlobalStyles;