// Analytics utility for tracking user interactions
class Analytics {
  constructor() {
    this.isProduction = import.meta.env.PROD;
    this.events = [];
  }

  // Track page views
  trackPageView(page) {
    if (this.isProduction) {
      // In production, you would send to your analytics service
      console.log('Page view:', page);
    } else {
      console.log('📊 Page view:', page);
    }
  }

  // Track button clicks
  trackButtonClick(buttonName, location) {
    const event = {
      type: 'button_click',
      button: buttonName,
      location: location,
      timestamp: new Date().toISOString()
    };

    if (this.isProduction) {
      // In production, you would send to your analytics service
      console.log('Button click:', event);
    } else {
      console.log('🖱️ Button click:', event);
    }

    this.events.push(event);
  }

  // Track form submissions
  trackFormSubmission(formName, success = true) {
    const event = {
      type: 'form_submission',
      form: formName,
      success: success,
      timestamp: new Date().toISOString()
    };

    if (this.isProduction) {
      // In production, you would send to your analytics service
      console.log('Form submission:', event);
    } else {
      console.log('📝 Form submission:', event);
    }

    this.events.push(event);
  }

  // Track demo interactions
  trackDemoInteraction(action, details = {}) {
    const event = {
      type: 'demo_interaction',
      action: action,
      details: details,
      timestamp: new Date().toISOString()
    };

    if (this.isProduction) {
      // In production, you would send to your analytics service
      console.log('Demo interaction:', event);
    } else {
      console.log('🎮 Demo interaction:', event);
    }

    this.events.push(event);
  }

  // Track scroll depth
  trackScrollDepth(depth) {
    const event = {
      type: 'scroll_depth',
      depth: depth,
      timestamp: new Date().toISOString()
    };

    if (this.isProduction) {
      // In production, you would send to your analytics service
      console.log('Scroll depth:', event);
    } else {
      console.log('📜 Scroll depth:', event);
    }

    this.events.push(event);
  }

  // Get all tracked events (for debugging)
  getEvents() {
    return this.events;
  }

  // Clear events (for testing)
  clearEvents() {
    this.events = [];
  }
}

// Create a singleton instance
const analytics = new Analytics();

export default analytics;
