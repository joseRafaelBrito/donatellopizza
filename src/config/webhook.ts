// Webhook Configuration
// Update this file with your actual n8n webhook URL and settings

export const WEBHOOK_CONFIG = {
  // Your n8n webhook URL - UPDATE THIS
  url: 'https://my-n8n-server.com/webhook/order',
  
  // Request timeout in milliseconds
  timeout: 10000,
  
  // Number of retry attempts on failure
  retryAttempts: 3,
  
  // Delay between retries in milliseconds
  retryDelay: 1000,
  
  // Enable/disable webhook (useful for testing)
  enabled: true,
  
  // Test mode - logs payload without sending
  testMode: false,
};

// Development/Testing webhook URL (optional)
export const DEV_WEBHOOK_CONFIG = {
  ...WEBHOOK_CONFIG,
  url: 'https://webhook.site/your-test-id', // Use webhook.site for testing
  testMode: true,
};

// Helper function to get current config based on environment
export const getWebhookConfig = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return isDevelopment ? DEV_WEBHOOK_CONFIG : WEBHOOK_CONFIG;
};
