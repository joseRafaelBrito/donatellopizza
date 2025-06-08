import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      id="header" 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-warm-gray bg-opacity-95 nav-blur shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover-glow transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-br from-cheese-gold to-tomato-red rounded-full flex items-center justify-center">
                <i className="fas fa-pizza-slice text-white text-lg"></i>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-playfair font-bold text-white">Donatello</h1>
              <p className="text-sm text-garlic-cream font-dancing">We believe in the craft</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              Order
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cheese-gold transition-colors duration-300"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-warm-gray bg-opacity-95 nav-blur rounded-lg mt-2 mx-4`}>
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              Order
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
