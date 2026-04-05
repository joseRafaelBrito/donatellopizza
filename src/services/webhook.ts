import { Order, WebhookPayload } from '@/types/order';
import { getWebhookConfig } from '@/config/webhook';

export class WebhookService {
  private static async delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private static formatOrderForWebhook(order: Order): WebhookPayload {
    return {
      customer: {
        name: order.customer.name,
        phone: order.customer.phone,
        email: order.customer.email,
        address: `${order.customer.address.street}, ${order.customer.address.city}, ${order.customer.address.state} ${order.customer.address.zipCode}`,
      },
      order: order.items.map(item => ({
        item: item.name,
        qty: item.quantity,
        price: item.price,
      })),
      total: order.total,
      orderType: order.orderType,
      specialInstructions: order.specialInstructions,
      timestamp: order.timestamp,
      orderId: order.id,
    };
  }

  private static async sendWebhookRequest(payload: WebhookPayload): Promise<Response> {
    const config = getWebhookConfig();
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), config.timeout);

    try {
      const response = await fetch(config.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Donatello-Pizza-Webhook/1.0',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  public static async sendOrderToWebhook(order: Order): Promise<{
    success: boolean;
    error?: string;
    response?: any;
  }> {
    const config = getWebhookConfig();
    const payload = this.formatOrderForWebhook(order);
    
    // Check if webhook is disabled
    if (!config.enabled) {
      console.log('Webhook disabled, skipping order:', order.id);
      return { success: true, response: { message: 'Webhook disabled' } };
    }
    
    // Test mode - log payload without sending
    if (config.testMode) {
      console.log('TEST MODE - Order payload:', {
        orderId: order.id,
        webhookUrl: config.url,
        payload,
      });
      return { success: true, response: { message: 'Test mode - payload logged' } };
    }
    
    console.log('Sending order to webhook:', {
      orderId: order.id,
      webhookUrl: config.url,
      payload,
    });

    for (let attempt = 1; attempt <= config.retryAttempts; attempt++) {
      try {
        const response = await this.sendWebhookRequest(payload);
        
        if (response.ok) {
          const responseData = await response.json().catch(() => ({}));
          
          console.log('Webhook success:', {
            orderId: order.id,
            attempt,
            status: response.status,
            response: responseData,
          });

          return {
            success: true,
            response: responseData,
          };
        } else {
          const errorText = await response.text().catch(() => 'Unknown error');
          
          console.warn('Webhook failed:', {
            orderId: order.id,
            attempt,
            status: response.status,
            error: errorText,
          });

          if (attempt === config.retryAttempts) {
            return {
              success: false,
              error: `HTTP ${response.status}: ${errorText}`,
            };
          }
        }
      } catch (error) {
        console.error('Webhook request error:', {
          orderId: order.id,
          attempt,
          error: error instanceof Error ? error.message : 'Unknown error',
        });

        if (attempt === config.retryAttempts) {
          return {
            success: false,
            error: error instanceof Error ? error.message : 'Network error',
          };
        }
      }

      // Wait before retry
      if (attempt < config.retryAttempts) {
        await this.delay(config.retryDelay * attempt);
      }
    }

    return {
      success: false,
      error: 'Max retry attempts exceeded',
    };
  }

  // Method to test webhook connectivity
  public static async testWebhook(): Promise<boolean> {
    const testPayload: WebhookPayload = {
      customer: {
        name: 'Test Customer',
        phone: '+1234567890',
        email: 'test@example.com',
        address: 'Test Address',
      },
      order: [
        { item: 'Test Pizza', qty: 1, price: 10.00 }
      ],
      total: 10.00,
      orderType: 'test',
      timestamp: new Date().toISOString(),
      orderId: 'TEST-' + Date.now(),
    };

    try {
      const response = await this.sendWebhookRequest(testPayload);
      return response.ok;
    } catch (error) {
      console.error('Webhook test failed:', error);
      return false;
    }
  }
}

// Utility function to test webhook connectivity
export const testWebhookConnectivity = async (): Promise<boolean> => {
  return WebhookService.testWebhook();
};
