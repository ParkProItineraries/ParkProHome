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
  
  // SEO redirects - consolidating thin landing pages to canonical ones
  '/why-parkpro': '/comparison',
  '/travel-agent-itinerary-software': '/disney-planning-software',
  '/disney-travel-agent-software': '/disney-planning-software',
  '/travel-agent-workflow-software': '/travel-agent-software',
  '/travel-agency-software': '/travel-agent-software',
};

export default redirectMap;
