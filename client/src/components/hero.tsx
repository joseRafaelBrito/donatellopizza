import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section id="home" className="h-screen bg-[#f59e0b] flex flex-col items-center justify-center text-center px-4 relative">
      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
          Welcome to Donatello Pizza
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light">
          Artisan Detroit & NY Pizza
        </p>
      </div>

      {/* Animated Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-8 h-8 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
}
