/**
 * Legacy URL Redirects
 * 
 * Maps deprecated or short-form URLs to their canonical destinations.
 * Used to maintain SEO value and prevent broken links.
 */

export const redirectMap = {
  // Short-form legal links -> Full paths
  '/terms': '/business/terms-of-service',
  '/privacy': '/business/privacy-policy',
  
  // Legacy paths (if any are discovered)
  // Add more as needed
};

export default redirectMap;

