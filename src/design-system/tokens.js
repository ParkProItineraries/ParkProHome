// ParkPro Premium Design System Tokens
// Enterprise-grade design system for modern, premium UI

export const tokens = {
  // Premium Brand Colors - Futuristic, Magical, Premium
  colors: {
    // Core Brand
    black: '#0B0B0C',
    white: '#FFFFFF',
    
    // Primary Accent - Gold (used sparingly for highlights)
    gold: '#F5C249',
    'gold-light': '#F8D86B',
    'gold-dark': '#E9B029',
    'gold-muted': 'rgba(245, 194, 73, 0.1)',
    
    // Primary Accent - Teal (main accent color)
    teal: '#14B8A6',
    'teal-light': '#5EEAD4',
    'teal-dark': '#0F766E',
    'teal-muted': 'rgba(20, 184, 166, 0.1)',
    
    // Secondary Accent - Purple
    purple: '#8B5CF6',
    'purple-light': '#A78BFA',
    'purple-dark': '#7C3AED',
    'purple-muted': 'rgba(139, 92, 246, 0.1)',
    
    // Gray Scale - Premium Neutrals
    'gray-50': '#F9FAFB',
    'gray-100': '#F3F4F6',
    'gray-200': '#E5E7EB',
    'gray-300': '#D1D5DB',
    'gray-400': '#9CA3AF',
    'gray-500': '#6B7280',
    'gray-600': '#4B5563',
    'gray-700': '#374151',
    'gray-800': '#1F2937',
    'gray-900': '#111827',
    
    // Semantic Colors
    success: '#F5C249', // Changed from green to gold
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
    
    // Background Colors
    'bg-primary': '#FFFFFF',
    'bg-secondary': '#F9FAFB',
    'bg-tertiary': '#F3F4F6',
    'bg-dark': '#0B0B0C',
    'bg-overlay': 'rgba(0, 0, 0, 0.6)',
    'bg-overlay-light': 'rgba(0, 0, 0, 0.3)',
    
    // Text Colors
    'text-primary': '#0B0B0C',
    'text-secondary': '#4B5563',
    'text-tertiary': '#6B7280',
    'text-light': '#FFFFFF',
    
    // Border Colors
    'border-light': '#E5E7EB',
    'border-medium': '#D1D5DB',
    'border-dark': '#9CA3AF',
  },
  
  // Premium Typography System
  typography: {
    fontHeading: "'Urbanist', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontBody: "'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontMono: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', monospace",
    
    sizes: {
      xs: '0.75rem',      // 12px
      sm: '0.875rem',     // 14px
      base: '1rem',       // 16px
      lg: '1.125rem',     // 18px
      xl: '1.25rem',      // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '3.75rem',   // 60px
      '7xl': '4.5rem',    // 72px
      '8xl': '6rem',      // 96px
    },
    
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    lineHeights: {
      tight: 1.2,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
    },
  },
  
  // Premium Spacing System - 8px grid
  spacing: {
    0: '0',
    px: '1px',
    0.5: '0.125rem',  // 2px
    1: '0.25rem',     // 4px
    1.5: '0.375rem',  // 6px
    2: '0.5rem',      // 8px
    2.5: '0.625rem',  // 10px
    3: '0.75rem',     // 12px
    3.5: '0.875rem',  // 14px
    4: '1rem',        // 16px
    5: '1.25rem',     // 20px
    6: '1.5rem',      // 24px
    7: '1.75rem',     // 28px
    8: '2rem',        // 32px
    9: '2.25rem',     // 36px
    10: '2.5rem',     // 40px
    12: '3rem',       // 48px
    14: '3.5rem',     // 56px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    32: '8rem',       // 128px
  },
  
  // Premium Border Radius - 16-24px as specified
  radius: {
    none: '0',
    sm: '0.5rem',      // 8px
    md: '1rem',        // 16px - Standard
    lg: '1.5rem',      // 24px - Premium
    xl: '2rem',        // 32px
    '2xl': '2.5rem',   // 40px
    full: '9999px',
  },
  
  // Premium Shadow System - Soft but Premium
  shadows: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    
    // Premium Brand Shadows
    teal: '0 8px 25px rgba(20, 184, 166, 0.25)',
    'teal-lg': '0 12px 35px rgba(20, 184, 166, 0.3)',
    purple: '0 8px 25px rgba(139, 92, 246, 0.25)',
    'purple-lg': '0 12px 35px rgba(139, 92, 246, 0.3)',
    gold: '0 8px 25px rgba(245, 194, 73, 0.25)',
    'gold-lg': '0 12px 35px rgba(245, 194, 73, 0.3)',
    
    // Inner shadows
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  
  // Transitions & Animations - Smooth, Premium
  transitions: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '700ms',
    },
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    default: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
  },
  
  // Z-Index System
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
    toast: 1080,
  },
  
  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Container Widths
  containerWidths: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Layout Grid
  grid: {
    columns: 12,
    gap: '1.5rem',
    'gap-sm': '1rem',
    'gap-lg': '2rem',
  },
};

export default tokens;

