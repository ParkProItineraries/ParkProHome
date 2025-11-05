import { useEffect } from 'react';

// Plausible Analytics Integration - Deferred for TBT optimization
export const usePlausible = () => {
  useEffect(() => {
    // Defer analytics loading until browser is idle (TBT optimization)
    const loadAnalytics = () => {
      const script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = 'parkproit.com';
      script.src = 'https://plausible.io/js/script.js';
      document.head.appendChild(script);
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadAnalytics);
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(loadAnalytics, 1);
    }

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[data-domain="parkproit.com"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
};

// Google Analytics 4 Integration - Deferred for TBT optimization
export const useGA4 = () => {
  useEffect(() => {
    const ga4Id = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    
    if (!ga4Id) {
      // GA4 is optional - using Plausible instead
      return;
    }

    // Defer GA4 loading until browser is idle (TBT optimization)
    const loadGA4 = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', ga4Id, {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadGA4);
    } else {
      setTimeout(loadGA4, 1);
    }

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src*="googletagmanager.com"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);
};

// Track page views
export const trackPageView = (url) => {
  // Plausible
  if (window.plausible) {
    window.plausible('pageview', { u: url });
  }

  // Google Analytics
  if (window.gtag) {
    const ga4Id = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    if (ga4Id) {
      window.gtag('config', ga4Id, {
        page_path: url,
      });
    }
  }
};

// Track custom events
export const trackEvent = (eventName, properties = {}) => {
  // Plausible
  if (window.plausible) {
    window.plausible(eventName, { props: properties });
  }

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', eventName, properties);
  }
};

// Common event tracking functions
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
};

export const trackFormSubmit = (formName, location) => {
  trackEvent('form_submit', {
    form_name: formName,
    location: location,
  });
};

export const trackCTAClick = (ctaName, location) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location: location,
  });
};

export const trackDemoRequest = (source) => {
  trackEvent('demo_request', {
    source: source,
  });
};

export const trackPricingView = (plan) => {
  trackEvent('pricing_view', {
    plan: plan,
  });
};

export const trackFeatureView = (feature) => {
  trackEvent('feature_view', {
    feature: feature,
  });
};

// Analytics Provider Component
export const AnalyticsProvider = ({ children }) => {
  usePlausible();
  useGA4();

  return children;
};

export default AnalyticsProvider;
