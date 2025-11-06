export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cheese-gold to-tomato-red rounded-full flex items-center justify-center">
                <i className="fas fa-pizza-slice text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold">Donatello</h3>
                <p className="text-sm text-cheese-gold font-dancing">We believe in the craft</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Crafting artisan pizzas with passion and tradition since day one. 
              Every pizza tells a story of quality, craft, and culinary excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-tomato-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-tomato-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-tomato-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-tomato-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-cheese-gold transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-300 hover:text-cheese-gold transition-colors duration-300"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('order')}
                  className="text-gray-300 hover:text-cheese-gold transition-colors duration-300"
                >
                  Order Online
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-cheese-gold transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-cheese-gold transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Artisan Street</p>
              <p>Craft District, CD 12345</p>
              <p>(555) 123-4567</p>
              <p>hello@donatello.pizza</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Donatello Pizza. All rights reserved. 
            <span className="text-tomato-red font-dancing ml-2">Crafted with ❤️ by Jose Estevez</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
