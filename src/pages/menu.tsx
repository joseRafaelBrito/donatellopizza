import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

export default function Menu() {
  const [selectedPizza, setSelectedPizza] = useState<number | null>(null);

  const pizzaMenu = [
    {
      id: 1,
      name: "Classic Detroit",
      description: "Traditional square pizza with caramelized crust edges, Wisconsin brick cheese, and sauce on top",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 2,
      name: "Pepperoni Supreme",
      description: "Detroit-style with premium pepperoni, extra cheese, and our signature sauce",
      price: "$21.99",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 3,
      name: "Margherita Detroit",
      description: "Fresh mozzarella, basil, tomatoes, and garlic on our famous Detroit crust",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 4,
      name: "Meat Lovers",
      description: "Pepperoni, sausage, bacon, and ham on our signature Detroit-style base",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 5,
      name: "Veggie Deluxe",
      description: "Bell peppers, mushrooms, onions, olives, and fresh tomatoes",
      price: "$20.99",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    },
    {
      id: 6,
      name: "BBQ Chicken",
      description: "Grilled chicken, BBQ sauce, red onions, and cilantro on Detroit crust",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-warm-gray mb-4">
              Our Pizza Menu
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Authentic Detroit-style pizzas crafted with love and baked to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pizzaMenu.map((pizza) => (
              <div
                key={pizza.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer ${
                  selectedPizza === pizza.id ? 'ring-4 ring-tomato-red' : ''
                }`}
                onClick={() => setSelectedPizza(selectedPizza === pizza.id ? null : pizza.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-tomato-red text-white px-3 py-1 rounded-full font-semibold">
                    {pizza.price}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-3">
                    {pizza.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pizza.description}
                  </p>
                  
                  <Button
                    className={`w-full font-semibold py-3 rounded-lg transition-all duration-300 ${
                      selectedPizza === pizza.id 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-tomato-red hover:bg-red-600'
                    } text-white`}
                  >
                    {selectedPizza === pizza.id ? 'Selected!' : 'Add to Order'}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button
              className="bg-cheese-gold hover:bg-yellow-500 text-warm-gray font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-phone mr-2"></i>
              Call to Order: (555) 123-4567
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}