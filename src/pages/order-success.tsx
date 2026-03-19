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
        console.error('Error al cargar la orden:', error);
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

  const orderTypeLabel = order.orderType === 'delivery' ? 'Delivery' : 'Recoger en tienda';

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-600" />

            <h1 className="text-4xl font-playfair font-bold text-warm-gray mb-4">
              ¡Orden Confirmada!
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              ¡Gracias por tu orden! La hemos recibido y nuestra cocina ya está en marcha.
            </p>

            <Card className="text-left mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Detalles de la Orden
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Número de Orden:</strong>
                    <p className="font-mono text-xs bg-gray-100 p-1 rounded mt-1">
                      {order.id}
                    </p>
                  </div>
                  <div>
                    <strong>Tipo de Orden:</strong>
                    <p className="capitalize">{orderTypeLabel}</p>
                  </div>
                  <div>
                    <strong>Hora del Pedido:</strong>
                    <p>{new Date(order.timestamp).toLocaleString('es-DO')}</p>
                  </div>
                  <div>
                    <strong>Total:</strong>
                    <p className="text-lg font-bold text-tomato-red">
                      RD${order.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <strong className="block mb-2">Productos Ordenados:</strong>
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{item.quantity}x {item.name}</span>
                        <span>RD${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <strong className="block mb-2">Información del Cliente:</strong>
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
                    <strong className="block mb-2">Instrucciones Especiales:</strong>
                    <p className="text-sm bg-gray-50 p-3 rounded">
                      {order.specialInstructions}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-blue-900 mb-2">¿Qué sigue?</h3>
              <div className="text-sm text-blue-800 space-y-2">
                <p>• Recibirás un correo de confirmación en breve</p>
                <p>• Nuestra cocina comenzará a preparar tu orden</p>
                <p>• {order.orderType === 'delivery'
                    ? 'Te llamaremos cuando nuestro repartidor esté en camino (30–45 minutos)'
                    : 'Te llamaremos cuando tu orden esté lista para recoger (15–25 minutos)'
                  }</p>
                <p>• ¿Preguntas? Llámanos al (809) 555-1234</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button
                onClick={() => setLocation("/menu")}
                className="bg-tomato-red hover:bg-red-600 text-white mr-4"
              >
                Ordenar Más Pizza
              </Button>

              <Button
                onClick={() => setLocation("/")}
                variant="outline"
              >
                Volver al Inicio
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
