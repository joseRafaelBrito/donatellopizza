import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Order } from "@/types/order";

export default function OrderSuccess() {
  const [, setLocation] = useLocation();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch (error) {
        console.error('Error loading order:', error);
        setLocation('/menu');
      }
    } else {
      setLocation('/menu');
    }
  }, [setLocation]);

  if (!order) {
    return null;
  }

  const formatAddress = (address: any) => {
    return `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`;
  };

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-600" />
            
            <h1 className="text-4xl font-playfair font-bold text-warm-gray mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Thank you for your order! We've received your request and our kitchen is getting started.
            </p>

            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Order Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Order ID:</strong>
                    <p className="font-mono text-xs bg-gray-100 p-1 rounded mt-1">
                      {order.id}
                    </p>
                  </div>
                  <div>
                    <strong>Order Type:</strong>
                    <p className="capitalize">{order.orderType}</p>
                  </div>
                  <div>
                    <strong>Order Time:</strong>
                    <p>{new Date(order.timestamp).toLocaleString()}</p>
                  </div>
                  <div>
                    <strong>Total:</strong>
                    <p className="text-lg font-bold text-tomato-red">
                      ${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <strong className="block mb-2">Items Ordered:</strong>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <strong className="block mb-2">Customer Information:</strong>
                  <div className="space-y-1 text-sm">
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {order.customer.name} - {order.customer.phone}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {order.customer.email}
                    </p>
                    {order.orderType === 'delivery' && (
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {formatAddress(order.customer.address)}
                      </p>
                    )}
                  </div>
                </div>

                {order.specialInstructions && (
                  <div className="border-t pt-4">
                    <strong className="block mb-2">Special Instructions:</strong>
                    <p className="text-sm bg-gray-50 p-3 rounded">
                      {order.specialInstructions}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-2">What's Next?</h3>
              <div className="text-sm text-blue-800 space-y-2">
                <p>• You'll receive a confirmation email shortly</p>
                <p>• Our kitchen will start preparing your order</p>
                <p>• {order.orderType === 'delivery' 
                    ? 'We\'ll call you when our driver is on the way (30-45 minutes)'
                    : 'We\'ll call you when your order is ready for pickup (15-25 minutes)'
                  }</p>
                <p>• Questions? Call us at (555) 123-PIZZA</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setLocation("/menu")}
                className="bg-tomato-red hover:bg-red-600 text-white mr-4"
              >
                Order More Pizza
              </Button>
              
              <Button
                onClick={() => setLocation("/")}
                variant="outline"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
