// ParkPro Design System Tokens
// Comprehensive design tokens for consistent, scalable design system

export const designTokens = {
  // Brand Colors - Enhanced with teal/purple accents
  colors: {
    // Primary Brand Colors - Premium Midnight + Gold
    black: '#0B0B0C',
    white: '#FFFFFF',
    gold: '#F5C249',
    'gold-muted': '#F8D86B',
    'gold-dark': '#E9B029',
    
    // Accent Colors (as requested)
    teal: '#14B8A6',
    'teal-muted': '#0F766E',
    purple: '#8B5CF6',
    'purple-muted': '#7C3AED',
    
    // Gray Scale - Enhanced
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
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#F5C249',
    
    // Background Colors
    'bg-primary': '#FFFFFF',
    'bg-secondary': '#F9FAFB',
    'bg-tertiary': '#F3F4F6',
    'bg-dark': '#0B0B0C',
    'bg-overlay': 'rgba(0,0,0,0.6)',
    'bg-overlay-light': 'rgba(0,0,0,0.3)',
    
    // Text Colors
    'text-primary': '#0B0B0C',
    'text-secondary': '#4B5563',
    'text-tertiary': '#6B7280',
    'text-light': '#FFFFFF',
    'text-gold': '#F5C249',
    'text-teal': '#14B8A6',
    'text-purple': '#8B5CF6',
    
    // Border Colors
    'border-light': '#E5E7EB',
    'border-medium': '#D1D5DB',
    'border-dark': '#9CA3AF',
    'border-gold': '#F5C249',
    'border-teal': '#14B8A6',
    'border-purple': '#8B5CF6',
  },
  
  // Typography System
  typography: {
    // Font Families
    fontHeading: "'Urbanist', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontBody: "'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontMono: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', monospace",
    
    // Font Sizes - Fluid Typography
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
      '9xl': '8rem',      // 128px
    },
    
    // Font Weights
    weights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    
    // Line Heights
    lineHeights: {
      none: 1,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2,
    },
    
    // Letter Spacing
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0em',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
  },
  
  // Spacing System - 8px grid
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
    11: '2.75rem',    // 44px
    12: '3rem',       // 48px
    14: '3.5rem',     // 56px
    16: '4rem',       // 64px
    20: '5rem',       // 80px
    24: '6rem',       // 96px
    28: '7rem',       // 112px
    32: '8rem',       // 128px
    36: '9rem',       // 144px
    40: '10rem',      // 160px
    44: '11rem',      // 176px
    48: '12rem',      // 192px
    52: '13rem',      // 208px
    56: '14rem',      // 224px
    60: '15rem',      // 240px
    64: '16rem',      // 256px
    72: '18rem',      // 288px
    80: '20rem',      // 320px
    96: '24rem',      // 384px
  },
  
  // Border Radius System
  radius: {
    none: '0',
    sm: '0.125rem',    // 2px
    base: '0.25rem',   // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    '3xl': '1.5rem',   // 24px
    full: '9999px',
  },
  
  // Shadow System
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    
    // Brand-specific shadows
    gold: '0 8px 25px rgba(201, 162, 39, 0.3)',
    'gold-lg': '0 12px 35px rgba(201, 162, 39, 0.4)',
    teal: '0 8px 25px rgba(20, 184, 166, 0.3)',
    'teal-lg': '0 12px 35px rgba(20, 184, 166, 0.4)',
    purple: '0 8px 25px rgba(139, 92, 246, 0.3)',
    'purple-lg': '0 12px 35px rgba(139, 92, 246, 0.4)',
  },
  
  // Container Widths
  containerWidths: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1728px',
  },
  
  // Breakpoints
  breakpoints: {
    xs: '475px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1728px',
  },
  
  // Transitions & Animations
  transitions: {
    // Duration
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '700ms',
    },
    
    // Easing
    easing: {
      linear: 'linear',
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    
    // Combined
    fast: '150ms ease',
    normal: '300ms ease',
    slow: '500ms ease',
    bounce: '300ms cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    spring: '300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
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
  
  // Component-specific tokens
  components: {
    // Button variants
    button: {
      sizes: {
        xs: {
          padding: '0.5rem 0.75rem',
          fontSize: '0.75rem',
          height: '1.5rem',
        },
        sm: {
          padding: '0.5rem 1rem',
          fontSize: '0.875rem',
          height: '2rem',
        },
        md: {
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          height: '2.5rem',
        },
        lg: {
          padding: '1rem 2rem',
          fontSize: '1.125rem',
          height: '3rem',
        },
        xl: {
          padding: '1.25rem 2.5rem',
          fontSize: '1.25rem',
          height: '3.5rem',
        },
      },
      variants: {
        primary: {
          background: '#F5C249',
          color: '#0B0B0C',
          border: 'none',
        },
        secondary: {
          background: 'transparent',
          color: '#0B0B0C',
          border: '2px solid #0B0B0C',
        },
        ghost: {
          background: 'transparent',
          color: '#6B7280',
          border: 'none',
        },
        teal: {
          background: '#14B8A6',
          color: '#FFFFFF',
          border: 'none',
        },
        purple: {
          background: '#8B5CF6',
          color: '#FFFFFF',
          border: 'none',
        },
      },
    },
    
    // Card variants
    card: {
      variants: {
        default: {
          background: '#FFFFFF',
          border: '1px solid #E5E7EB',
          borderRadius: '0.75rem',
          padding: '1.5rem',
        },
        elevated: {
          background: '#FFFFFF',
          border: 'none',
          borderRadius: '0.75rem',
          padding: '1.5rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        },
        outlined: {
          background: 'transparent',
          border: '2px solid #F5C249',
          borderRadius: '0.75rem',
          padding: '1.5rem',
        },
      },
    },
    
    // Input variants
    input: {
      sizes: {
        sm: {
          padding: '0.5rem 0.75rem',
          fontSize: '0.875rem',
          height: '2rem',
        },
        md: {
          padding: '0.75rem 1rem',
          fontSize: '1rem',
          height: '2.5rem',
        },
        lg: {
          padding: '1rem 1.25rem',
          fontSize: '1.125rem',
          height: '3rem',
        },
      },
      variants: {
        default: {
          background: '#FFFFFF',
          border: '1px solid #D1D5DB',
          color: '#0B0B0C',
        },
        error: {
          background: '#FFFFFF',
          border: '1px solid #EF4444',
          color: '#0B0B0C',
        },
        success: {
          background: '#FFFFFF',
          border: '1px solid #10B981',
          color: '#0B0B0C',
        },
      },
    },
  },
  
  // Layout tokens
  layout: {
    // Grid system
    grid: {
      columns: 12,
      gap: '1.5rem',
      'gap-sm': '1rem',
      'gap-lg': '2rem',
    },
    
    // Flexbox utilities
    flex: {
      center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      'center-col': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      'space-between': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    },
    
    // Common layouts
    layouts: {
      container: {
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 2rem',
      },
      section: {
        padding: '4rem 0',
      },
      'section-sm': {
        padding: '2rem 0',
      },
      'section-lg': {
        padding: '6rem 0',
      },
    },
  },
  
  // Animation tokens
  animations: {
    // Keyframes
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      slideUp: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      slideDown: {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      scaleIn: {
        '0%': { opacity: 0, transform: 'scale(0.9)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      pulse: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      },
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    
    // Animation classes
    classes: {
      fadeIn: 'fadeIn 0.6s ease-out',
      slideUp: 'slideUp 0.6s ease-out',
      slideDown: 'slideDown 0.6s ease-out',
      scaleIn: 'scaleIn 0.6s ease-out',
      bounce: 'bounce 1s infinite',
      pulse: 'pulse 2s infinite',
      spin: 'spin 1s linear infinite',
    },
  },
  
  // Media queries
  media: {
    xs: '@media (min-width: 475px)',
    sm: '@media (min-width: 640px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    '2xl': '@media (min-width: 1536px)',
    '3xl': '@media (min-width: 1728px)',
    
    // Max-width queries
    'max-xs': '@media (max-width: 474px)',
    'max-sm': '@media (max-width: 639px)',
    'max-md': '@media (max-width: 767px)',
    'max-lg': '@media (max-width: 1023px)',
    'max-xl': '@media (max-width: 1279px)',
    'max-2xl': '@media (max-width: 1535px)',
  },
};

// Export individual token categories for easier imports
export const colors = designTokens.colors;
export const typography = designTokens.typography;
export const spacing = designTokens.spacing;
export const radius = designTokens.radius;
export const shadows = designTokens.shadows;
export const breakpoints = designTokens.breakpoints;
export const transitions = designTokens.transitions;
export const zIndex = designTokens.zIndex;
export const components = designTokens.components;
export const layout = designTokens.layout;
export const animations = designTokens.animations;
export const media = designTokens.media;

// Utility functions for token usage
export const getColor = (colorPath: string) => {
  const keys = colorPath.split('.');
  let value: any = designTokens.colors;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || colorPath;
};

export const getSpacing = (size: keyof typeof designTokens.spacing) => {
  return designTokens.spacing[size];
};

export const getBreakpoint = (size: keyof typeof designTokens.breakpoints) => {
  return designTokens.breakpoints[size];
};

export const getMediaQuery = (size: keyof typeof designTokens.media) => {
  return designTokens.media[size];
};

export default designTokens;
