import { useEffect } from 'react';
import theme from '../../styles/theme';

// Skip to main content link
export const SkipToMainContent = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleClick}
      style={{
        position: 'absolute',
        top: '-40px',
        left: '6px',
        background: theme.colors.primary,
        color: theme.colors.black,
        padding: '8px 16px',
        textDecoration: 'none',
        borderRadius: '4px',
        fontWeight: '600',
        fontSize: '14px',
        zIndex: 1000,
        transition: 'top 0.3s ease',
      }}
      onFocus={(e) => {
        e.target.style.top = '6px';
      }}
      onBlur={(e) => {
        e.target.style.top = '-40px';
      }}
    >
      Skip to main content
    </a>
  );
};

// Focus management hook
export const useFocusManagement = () => {
  useEffect(() => {
    // Trap focus in modals
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        const modal = document.querySelector('[role="dialog"]');
        if (modal) {
          const closeButton = modal.querySelector('[aria-label="Close"]');
          if (closeButton) {
            closeButton.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};

// ARIA live region for announcements
export const LiveRegion = ({ children, role = 'status', ariaLive = 'polite' }) => {
  return (
    <div
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      style={{
        position: 'absolute',
        left: '-10000px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
      }}
    >
      {children}
    </div>
  );
};

// High contrast mode detection
export const useHighContrastMode = () => {
  useEffect(() => {
    const checkHighContrast = () => {
      const prefersHighContrast = window.matchMedia('(prefers-contrast: high)').matches;
      if (prefersHighContrast) {
        document.documentElement.setAttribute('data-high-contrast', 'true');
      } else {
        document.documentElement.removeAttribute('data-high-contrast');
      }
    };

    checkHighContrast();
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    mediaQuery.addEventListener('change', checkHighContrast);

    return () => mediaQuery.removeEventListener('change', checkHighContrast);
  }, []);
};

// Reduced motion detection
export const useReducedMotion = () => {
  useEffect(() => {
    const checkReducedMotion = () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        document.documentElement.setAttribute('data-reduced-motion', 'true');
      } else {
        document.documentElement.removeAttribute('data-reduced-motion');
      }
    };

    checkReducedMotion();
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    mediaQuery.addEventListener('change', checkReducedMotion);

    return () => mediaQuery.removeEventListener('change', checkReducedMotion);
  }, []);
};

// Keyboard navigation helper
export const useKeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Skip to main content with Alt + M
      if (e.altKey && e.key === 'm') {
        e.preventDefault();
        const mainContent = document.querySelector('main');
        if (mainContent) {
          mainContent.focus();
          mainContent.scrollIntoView();
        }
      }

      // Skip to navigation with Alt + N
      if (e.altKey && e.key === 'n') {
        e.preventDefault();
        const navigation = document.querySelector('nav');
        if (navigation) {
          const firstLink = navigation.querySelector('a');
          if (firstLink) {
            firstLink.focus();
          }
        }
      }

      // Skip to footer with Alt + F
      if (e.altKey && e.key === 'f') {
        e.preventDefault();
        const footer = document.querySelector('footer');
        if (footer) {
          footer.focus();
          footer.scrollIntoView();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
};

// Screen reader only text
export const ScreenReaderOnly = ({ children }) => {
  return (
    <span
      style={{
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: 0,
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: 0,
      }}
    >
      {children}
    </span>
  );
};

// Accessible button component
export const AccessibleButton = ({ 
  children, 
  onClick, 
  disabled = false, 
  ariaLabel,
  ariaDescribedBy,
  ...props 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      style={{
        padding: '12px 24px',
        border: `2px solid ${theme.colors.primary}`,
        borderRadius: '8px',
        background: disabled ? theme.colors['gray-100'] : theme.colors.primary,
        color: disabled ? theme.colors['gray-400'] : theme.colors.black,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'all 0.2s ease',
        ...(disabled ? {} : {
          '&:hover': {
            background: theme.colors['primary-dark'],
            transform: 'translateY(-1px)',
          },
          '&:focus': {
            outline: `2px solid ${theme.colors.primary}`,
            outlineOffset: '2px',
          },
        }),
      }}
      {...props}
    >
      {children}
    </button>
  );
};

// Accessible form field
export const AccessibleFormField = ({ 
  label, 
  id, 
  type = 'text', 
  required = false, 
  error,
  helpText,
  ...props 
}) => {
  return (
    <div style={{ marginBottom: '16px' }}>
      <label 
        htmlFor={id}
        style={{
          display: 'block',
          marginBottom: '8px',
          fontWeight: '600',
          color: '#0B0B0C',
        }}
      >
        {label}
        {required && (
          <span style={{ color: '#EF4444', marginLeft: '4px' }} aria-label="required">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        aria-invalid={error ? 'true' : 'false'}
        style={{
          width: '100%',
          padding: '12px',
          border: `2px solid ${error ? theme.colors.error : theme.colors['border-light']}`,
          borderRadius: '8px',
          fontSize: '16px',
          transition: 'border-color 0.2s ease',
          '&:focus': {
            outline: 'none',
            borderColor: theme.colors.primary,
            boxShadow: `0 0 0 3px ${theme.colors.primary}33`,
          },
        }}
        {...props}
      />
      {helpText && (
        <div id={`${id}-help`} style={{ fontSize: '14px', color: '#6B7280', marginTop: '4px' }}>
          {helpText}
        </div>
      )}
      {error && (
        <div 
          id={`${id}-error`} 
          role="alert"
          style={{ fontSize: '14px', color: '#EF4444', marginTop: '4px' }}
        >
          {error}
        </div>
      )}
    </div>
  );
};

// Accessibility provider component
export const AccessibilityProvider = ({ children }) => {
  useHighContrastMode();
  useReducedMotion();
  useKeyboardNavigation();
  useFocusManagement();

  return (
    <>
      <SkipToMainContent />
      {children}
    </>
  );
};

export default AccessibilityProvider;
