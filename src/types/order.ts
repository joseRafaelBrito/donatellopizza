export interface CartItem {
  id: number;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
}

export interface Customer {
  name: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface Order {
  id: string;
  customer: Customer;
  items: CartItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  orderType: 'pickup' | 'delivery';
  specialInstructions?: string;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'delivered' | 'cancelled';
}

export interface WebhookPayload {
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  order: Array<{
    item: string;
    qty: number;
    price: number;
  }>;
  total: number;
  orderType: string;
  specialInstructions?: string;
  timestamp: string;
  orderId: string;
}
