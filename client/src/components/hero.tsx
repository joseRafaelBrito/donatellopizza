import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder for autoplay video - in production, this would be a video element */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat parallax-bg" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
          }}
        >
          <div className="absolute inset-0 gradient-overlay"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
            Welcome to <span className="text-cheese-gold">Donatello</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-garlic-cream mb-8 font-light">
            Artisan Pizza, Born in Fire
          </p>
          <button 
            onClick={() => scrollToSection('menu')}
            className="bg-tomato-red hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            See Our Pizzas
            <i className="fas fa-arrow-down ml-2 animate-bounce-gentle"></i>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}
