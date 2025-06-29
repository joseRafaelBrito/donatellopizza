import { useState } from "react";

export default function PizzaSections() {
  const [hoveredIngredient, setHoveredIngredient] = useState<string | null>(null);

  const scrollToOrder = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="menu" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4 animate-bounce-in">
            Our Signature Pizzas
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in">Crafted with love, served with pride</p>
        </div>

        {/* Detroit Style Pizza */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-warm-gray mb-6">
                Detroit Style Pizza
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our signature Detroit-style pizza features a crispy, golden crust with caramelized edges, 
                topped with premium Wisconsin brick cheese and our house-made sauce on top. 
                Baked in seasoned steel pans for that authentic Motor City experience.
              </p>
              
              {/* Ingredient Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div 
                  className="text-center p-4 bg-garlic-cream rounded-lg hover:bg-cheese-gold transition-all duration-300 cursor-pointer group ingredient-float"
                  onMouseEnter={() => setHoveredIngredient('cheese')}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <i className={`fas fa-cheese text-2xl text-tomato-red mb-2 transition-all duration-300 ${hoveredIngredient === 'cheese' ? 'animate-pulse scale-110' : ''}`}></i>
                  <p className="text-sm font-medium text-warm-gray">Wisconsin Brick</p>
                </div>
                <div 
                  className="text-center p-4 bg-garlic-cream rounded-lg hover:bg-cheese-gold transition-all duration-300 cursor-pointer group ingredient-float"
                  onMouseEnter={() => setHoveredIngredient('basil')}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <i className={`fas fa-seedling text-2xl text-tomato-red mb-2 transition-all duration-300 ${hoveredIngredient === 'basil' ? 'animate-pulse scale-110' : ''}`}></i>
                  <p className="text-sm font-medium text-warm-gray">Fresh Basil</p>
                </div>
                <div 
                  className="text-center p-4 bg-garlic-cream rounded-lg hover:bg-cheese-gold transition-all duration-300 cursor-pointer group ingredient-float"
                  onMouseEnter={() => setHoveredIngredient('sauce')}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <i className={`fas fa-fire text-2xl text-tomato-red mb-2 transition-all duration-300 ${hoveredIngredient === 'sauce' ? 'animate-pulse scale-110' : ''}`}></i>
                  <p className="text-sm font-medium text-warm-gray">House Sauce</p>
                </div>
                <div 
                  className="text-center p-4 bg-garlic-cream rounded-lg hover:bg-cheese-gold transition-all duration-300 cursor-pointer group ingredient-float"
                  onMouseEnter={() => setHoveredIngredient('crust')}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <i className={`fas fa-bread-slice text-2xl text-tomato-red mb-2 transition-all duration-300 ${hoveredIngredient === 'crust' ? 'animate-pulse scale-110' : ''}`}></i>
                  <p className="text-sm font-medium text-warm-gray">Golden Crust</p>
                </div>
              </div>

              <button 
                onClick={scrollToOrder}
                className="bg-tomato-red hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-gentle hover:animate-wiggle"
              >
                Order Detroit Style
              </button>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Detroit style pizza with golden crust" 
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* New York Style Pizza */}
        <div id="order">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="New York style pizza with thin crust" 
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              />
            </div>
            
            <div>
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-warm-gray mb-6">
                New York Style Pizza
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Classic New York-style pizza with a thin, crispy crust that's perfectly foldable. 
                Topped with our signature tomato sauce, premium mozzarella, and fresh basil. 
                Each slice is a perfect balance of simplicity and flavor.
              </p>
              
              {/* Ingredient Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <div 
                  className="text-center p-4 bg-garlic-cream rounded-lg hover:bg-cheese-gold transition-all duration-300 cursor-pointer group ingredient-float"
                  onMouseEnter={() => setHoveredIngredient('mozzarella')}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <i className={`fas fa-circle text-2xl text-tomato-red mb-2 transition-all duration-300 ${hoveredIngredient === 'mozzarella' ? 'animate-pulse scale-110' : ''}`}></i>
                  <p className="text-sm font-medium text-warm-gray">Mozzarella</p>
                </div>
                <div 
                  className="text-center p-4 bg-garlic-cream rounded-lg hover:bg-cheese-gold transition-all duration-300 cursor-pointer group ingredient-float"
                  onMouseEnter={() => setHoveredIngredient('tomato')}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <i className={`fas fa-leaf text-2xl text-tomato-red mb-2 transition-all duration-300 ${hoveredIngredient === 'tomato' ? 'animate-pulse scale-110' : ''}`}></i>
                  <p className="text-sm font-medium text-warm-gray">San Marzano</p>
                </div>
                <div 
                  className="text-center p-4 bg-garlic-cream rounded-lg hover:bg-cheese-gold transition-all duration-300 cursor-pointer group ingredient-float"
                  onMouseEnter={() => setHoveredIngredient('hand-tossed')}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <i className={`fas fa-hands text-2xl text-tomato-red mb-2 transition-all duration-300 ${hoveredIngredient === 'hand-tossed' ? 'animate-pulse scale-110' : ''}`}></i>
                  <p className="text-sm font-medium text-warm-gray">Hand Tossed</p>
                </div>
                <div 
                  className="text-center p-4 bg-garlic-cream rounded-lg hover:bg-cheese-gold transition-all duration-300 cursor-pointer group ingredient-float"
                  onMouseEnter={() => setHoveredIngredient('dough')}
                  onMouseLeave={() => setHoveredIngredient(null)}
                >
                  <i className={`fas fa-clock text-2xl text-tomato-red mb-2 transition-all duration-300 ${hoveredIngredient === 'dough' ? 'animate-pulse scale-110' : ''}`}></i>
                  <p className="text-sm font-medium text-warm-gray">24h Dough</p>
                </div>
              </div>

              <button 
                onClick={scrollToOrder}
                className="bg-tomato-red hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-gentle hover:animate-wiggle"
              >
                Order New York Style
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
