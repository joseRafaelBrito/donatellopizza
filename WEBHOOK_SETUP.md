# 🍕 Donatello Pizza - Webhook Integration Setup

## Overview
Your pizzeria website now includes a complete webhook-enabled checkout system that sends order details to n8n for processing.

## Quick Setup

### 1. Configure Your Webhook URL
Edit `/src/config/webhook.ts` and update the webhook URL:

```typescript
export const WEBHOOK_CONFIG = {
  url: 'https://your-n8n-server.com/webhook/order', // ← Update this
  timeout: 10000,
  retryAttempts: 3,
  retryDelay: 1000,
  enabled: true,
  testMode: false, // Set to true for testing
};
```

### 2. Test Your Webhook
For testing, you can use [webhook.site](https://webhook.site):
1. Go to webhook.site and copy your unique URL
2. Update the `url` in the config file
3. Set `testMode: true` to log payloads without sending

### 3. Order Flow
1. **Customer adds items to cart** from menu pages
2. **Customer goes to checkout** (`/checkout`)
3. **Customer fills form and clicks "Place Order"**
4. **System sends webhook to n8n** with order details
5. **Customer sees confirmation** on success page

## Webhook Payload Structure

Your n8n webhook will receive this JSON structure:

```json
{
  "customer": {
    "name": "John Doe",
    "phone": "+18095551234",
    "email": "john@example.com", 
    "address": "123 Main St, New York, NY 10001"
  },
  "order": [
    {"item": "Classic Detroit", "qty": 2, "price": 18.99},
    {"item": "Margherita Detroit", "qty": 1, "price": 19.99}
  ],
  "total": 57.97,
  "orderType": "delivery",
  "specialInstructions": "Extra cheese please",
  "timestamp": "2025-08-30T14:13:35.000Z",
  "orderId": "ORDER-1725034415000-abc123def"
}
```

## Features

### ✅ Cart Management
- Add/remove items with quantity controls
- Persistent cart storage (localStorage)
- Cart icon in header with item count

### ✅ Checkout Process
- Customer information form
- Order type selection (pickup/delivery)
- Tax calculation (8.75%) and delivery fees
- Form validation and error handling

### ✅ Webhook System
- Automatic retry on failures (3 attempts)
- Configurable timeout and delays
- Test mode for development
- Comprehensive error logging

### ✅ Order Confirmation
- Success page with order details
- Email confirmation ready
- Order tracking preparation

## Development

### Start Development Server
```bash
npm run dev
```

### Test Webhook Connectivity
The system includes a test function. In browser console:
```javascript
import { testWebhookConnectivity } from './src/services/webhook';
testWebhookConnectivity().then(result => console.log('Webhook test:', result));
```

## Production Deployment

1. **Update webhook URL** to your production n8n endpoint
2. **Set `testMode: false`** in config
3. **Verify SSL certificate** on your n8n server
4. **Test end-to-end** with a real order

## Troubleshooting

### Common Issues

**Webhook not receiving data:**
- Check URL is correct and accessible
- Verify n8n webhook is active
- Check browser console for errors

**Orders not processing:**
- Check webhook configuration
- Verify n8n workflow is enabled
- Check network connectivity

**Cart not working:**
- Clear browser localStorage
- Check browser console for errors
- Verify React components are loading

### Debug Mode
Set `testMode: true` in config to log payloads without sending to webhook.

## Support
For issues with the webhook integration, check:
1. Browser console for JavaScript errors
2. Network tab for failed requests
3. n8n logs for webhook reception

---

Your pizzeria website is now ready for production with full webhook integration! 🚀
