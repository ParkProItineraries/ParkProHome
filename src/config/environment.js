/**
 * Environment Configuration Bootstrap
 * Fetches all configuration from backend (which loads from AWS SSM)
 * No local .env file needed!
 */

let configCache = null;

/**
 * Determine API URL based on current hostname
 */
const getApiUrl = () => {
  const hostname = window.location.hostname;
  
  // Development
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'http://localhost:3001';
  }
  
  // Production
  return 'https://api.parkproit.com';
};

/**
 * Fetch configuration from backend
 * Backend loads from AWS SSM Parameter Store
 */
export const fetchConfig = async () => {
  // Return cached config if already loaded
  if (configCache) {
    return configCache;
  }

  try {
    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/api/config`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch config: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.success || !data.config) {
      throw new Error('Invalid configuration response');
    }
    
    // Cache the configuration
    configCache = {
      apiUrl: data.config.apiUrl,
      stripePublishableKey: data.config.stripePublishableKey
    };
    
    console.log('✅ Configuration loaded from backend (AWS SSM)');
    return configCache;
  } catch (error) {
    console.error('❌ Failed to load configuration:', error);
    throw error;
  }
};

/**
 * Get cached configuration (must call fetchConfig first)
 */
export const getConfig = () => {
  if (!configCache) {
    throw new Error('Configuration not loaded. Call fetchConfig() first.');
  }
  return configCache;
};

/**
 * Clear configuration cache (useful for testing)
 */
export const clearConfigCache = () => {
  configCache = null;
};

