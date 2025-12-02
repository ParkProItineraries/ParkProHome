// Design System Theme - Enhanced with new design tokens
export const theme = {
  colors: {
    // Premium Midnight + Gold Palette
    black: '#0B0B0C',
    white: '#FFFFFF',
    
    // Primary Gold Colors
    primary: '#F5C249',           // Main gold accent
    'primary-light': '#F8D86B',   // Hover gold
    'primary-dark': '#E9B029',    // Pressed state
    primaryGradient: 'linear-gradient(90deg, #E9B029 0%, #F8D86B 100%)',
    
    // Gold aliases for compatibility
    gold: '#F5C249',              // Main gold
    'gold-muted': '#F8D86B',      // Light gold
    'gold-dark': '#E9B029',       // Dark gold
    hover: '#F8D86B',
    focus: '#FFD870',
    active: '#E9B029',
    
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
    
    // Accent Colors (legacy compatibility)
    accent: '#14B8A6',            // Teal - Primary accent
    'accent-dark': '#0F766E',     // Darker teal
    'accent-light': '#5EEAD4',   // Lighter teal
    
    // Gray Scale (Matches ParkProUI)
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
    info: '#F5C249',
    overlay: 'rgba(0,0,0,0.6)',
    green: '#F5C249', // Changed from green to gold for consistency
    red: '#EF4444',
    blue: '#3B82F6', // Legacy blue kept for semantic use (not brand)
    
    // Midnight Backgrounds
    backgroundDark: '#0A0A0F',    // Hero/section backgrounds
    backgroundLight: '#111317',   // Surface panels/cards
    background: '#F4F6F8',        // Light mode background
    surface: '#FFFFFF',
    'bg-primary': '#FFFFFF',
    'bg-secondary': '#F9FAFB',
    'bg-tertiary': '#F3F4F6',
    'bg-dark': '#0A0A0F',
    'bg-surface-dark': '#111317',
    'bg-overlay': 'rgba(0,0,0,0.6)',
    'bg-overlay-light': 'rgba(0,0,0,0.3)',
    
    // Text Colors
    'text-primary': '#1F2937',    // Light mode text
    'text-secondary': '#6B7280',  // Light mode secondary
    'text-tertiary': '#9CA3AF',
    'text-light': '#FFFFFF',      // Dark mode text
    'text-dark-secondary': '#B3B3B3', // Dark mode secondary
    textPrimary: '#1F2937',       // Alias for compatibility
    textSecondary: '#6B7280',     // Alias for compatibility
    
    // Border Colors
    border: '#E5E7EB',            // Light mode border
    'border-light': '#E5E7EB',
    'border-medium': '#D1D5DB',
    'border-dark': '#9CA3AF',
    'border-gold': 'rgba(245, 194, 73, 0.4)', // Gold border
    'border-dark-mode': 'rgba(255, 255, 255, 0.08)', // Dark mode border
  },
  
  typography: {
    fontHeading: "'Urbanist', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontBody: "'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
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
      normal: 1.5,
      relaxed: 1.7,
    },
  },
  
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },
  
  radius: {
    sm: '0.5rem',      // 8px
    md: '1rem',        // 16px - Standard premium
    lg: '1.5rem',      // 24px - Premium
    xl: '2rem',        // 32px
    '2xl': '2.5rem',   // 40px
    full: '9999px',
  },
  
  shadows: {
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
    gold: '0 8px 25px rgba(245, 194, 73, 0.25)',      // Gold glow (used sparingly)
    'gold-lg': '0 12px 35px rgba(245, 194, 73, 0.3)', // Large gold glow
    shadowGlow: '0 0 16px rgba(20, 184, 166, 0.35)', // Premium teal glow
    primary: '0 8px 25px rgba(20, 184, 166, 0.25)',   // Teal shadow (primary)
    'primary-lg': '0 12px 35px rgba(20, 184, 166, 0.3)', // Large teal shadow
  },
  
  containerWidths: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
};

export default theme;
