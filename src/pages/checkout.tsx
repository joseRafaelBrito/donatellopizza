import React, { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, CreditCard, MapPin, Phone, Mail, Trash2 } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Customer, Order } from "@/types/order";
import { WebhookService } from "@/services/webhook";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const [, setLocation] = useLocation();
  const { items, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');
  const [customer, setCustomer] = useState<Customer>({
    name: '',
    phone: '',
    email: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
    },
  });
  const [specialInstructions, setSpecialInstructions] = useState('');

  const subtotal = getCartTotal();
  const tax = subtotal * 0.18; // 18% ITBIS República Dominicana
  const deliveryFee = orderType === 'delivery' ? 3.99 : 0;
  const total = subtotal + tax + deliveryFee;

  const handleCustomerChange = (field: string, value: string) => {
    if (field.startsWith('address.')) {
      const addressField = field.split('.')[1];
      setCustomer(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [addressField]: value,
        },
      }));
    } else {
      setCustomer(prev => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const validateForm = (): boolean => {
    if (!customer.name.trim()) {
      toast({ title: "Error", description: "Por favor ingresa tu nombre", variant: "destructive" });
      return false;
    }
    if (!customer.phone.trim()) {
      toast({ title: "Error", description: "Por favor ingresa tu número de teléfono", variant: "destructive" });
      return false;
    }
    if (!customer.email.trim()) {
      toast({ title: "Error", description: "Por favor ingresa tu correo electrónico", variant: "destructive" });
      return false;
    }
    if (orderType === 'delivery') {
      if (!customer.address.street.trim() || !customer.address.city.trim() || !customer.address.state.trim() || !customer.address.zipCode.trim()) {
        toast({ title: "Error", description: "Por favor completa todos los campos de dirección para el delivery", variant: "destructive" });
        return false;
      }
    }
    if (items.length === 0) {
      toast({ title: "Error", description: "Tu carrito está vacío", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      const order: Order = {
        id: `ORDEN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        customer,
        items,
        subtotal,
        tax,
        deliveryFee,
        total,
        orderType,
        specialInstructions: specialInstructions.trim() || undefined,
        timestamp: new Date().toISOString(),
        status: 'pending',
      };

      const webhookResult = await WebhookService.sendOrderToWebhook(order);

      if (webhookResult.success) {
        clearCart();
        toast({
          title: "¡Orden Realizada con Éxito!",
          description: `La orden #${order.id} ha sido enviada a nuestra cocina. Recibirás una confirmación pronto.`,
        });

        localStorage.setItem('lastOrder', JSON.stringify(order));
        setLocation('/order-success');
      } else {
        throw new Error(webhookResult.error || 'Error al procesar la orden');
      }
    } catch (error) {
      console.error('Error al procesar la orden:', error);
      toast({
        title: "Error en la Orden",
        description: error instanceof Error ? error.message : "Hubo un error al procesar tu orden. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h1 className="text-4xl font-playfair font-bold text-warm-gray mb-4">
              Tu Carrito está Vacío
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              ¡Agrega algunas pizzas deliciosas a tu carrito antes de finalizar la compra!
            </p>
            <Button
              onClick={() => setLocation("/menu")}
              className="bg-tomato-red hover:bg-red-600 text-white"
            >
              Ver el Menú
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-playfair font-bold text-warm-gray mb-8 text-center">
            Finalizar Compra
          </h1>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Resumen del Pedido */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Resumen del Pedido
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{item.category}</p>
                        <p className="font-bold">${item.price.toFixed(2)} c/u</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ITBIS (18%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span>Cargo por Delivery:</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Información del Cliente */}
            <div className="space-y-6">
              {/* Tipo de Orden */}
              <Card>
                <CardHeader>
                  <CardTitle>Tipo de Orden</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={orderType} onValueChange={(value: 'pickup' | 'delivery') => setOrderType(value)}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup">Recoger en tienda</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery">Delivery (+$3.99)</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Datos del Cliente */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Información del Cliente
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      value={customer.name}
                      onChange={(e) => handleCustomerChange('name', e.target.value)}
                      placeholder="Juan Pérez"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Número de Teléfono *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={customer.phone}
                      onChange={(e) => handleCustomerChange('phone', e.target.value)}
                      placeholder="(809) 555-0000"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customer.email}
                      onChange={(e) => handleCustomerChange('email', e.target.value)}
                      placeholder="juan@correo.com"
                      required
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <>
                      <div>
                        <Label htmlFor="street">Dirección *</Label>
                        <Input
                          id="street"
                          value={customer.address.street}
                          onChange={(e) => handleCustomerChange('address.street', e.target.value)}
                          placeholder="Calle Principal #123"
                          required
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">Ciudad *</Label>
                          <Input
                            id="city"
                            value={customer.address.city}
                            onChange={(e) => handleCustomerChange('address.city', e.target.value)}
                            placeholder="Santiago"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">Sector *</Label>
                          <Input
                            id="state"
                            value={customer.address.state}
                            onChange={(e) => handleCustomerChange('address.state', e.target.value)}
                            placeholder="Los Jardines"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="zipCode">Referencia / Código Postal *</Label>
                        <Input
                          id="zipCode"
                          value={customer.address.zipCode}
                          onChange={(e) => handleCustomerChange('address.zipCode', e.target.value)}
                          placeholder="51000"
                          required
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <Label htmlFor="instructions">Instrucciones Especiales</Label>
                    <Textarea
                      id="instructions"
                      value={specialInstructions}
                      onChange={(e) => setSpecialInstructions(e.target.value)}
                      placeholder="Alguna solicitud especial o instrucción de entrega..."
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Botón de Ordenar */}
              <Button
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="w-full bg-tomato-red hover:bg-red-600 text-white py-4 text-lg font-bold"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Procesando Orden...
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Realizar Orden - ${total.toFixed(2)}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
