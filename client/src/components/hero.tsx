import { useEffect, useState } from "react";

export default function Hero() {
  return (
    <section id="home" className="h-screen relative flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        onLoadedData={(e) => {
          const video = e.target as HTMLVideoElement;
          video.play().catch(console.error);
        }}
      >
        <source src="/attached_assets/356026553653461001_1749689326847.mp4" type="video/mp4" />
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>
      
      {/* Orange overlay */}
      <div className="absolute inset-0 bg-[#f59e0b] opacity-80 z-10"></div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight">
          Welcome to Donatello Pizza
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light">
          Artisan Detroit & NY Pizza
        </p>
      </div>

      {/* Animated Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
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
