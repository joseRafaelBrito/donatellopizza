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

      {/* Cheese Pyramid in Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-15">
        <svg width="300" height="260" viewBox="0 0 300 260" className="opacity-60">
          {/* Pyramid Base */}
          <path 
            d="M150 40 L250 220 L50 220 Z" 
            fill="#8B4513" 
            stroke="#654321" 
            strokeWidth="3"
          />
          
          {/* Pyramid Left Side */}
          <path 
            d="M150 40 L50 220 L150 200 Z" 
            fill="#A0522D" 
          />
          
          {/* Pyramid Right Side */}
          <path 
            d="M150 40 L250 220 L150 200 Z" 
            fill="#D2B48C" 
          />
          
          {/* Stone Block Lines */}
          <path d="M70 200 L230 200" stroke="#654321" strokeWidth="2"/>
          <path d="M80 180 L220 180" stroke="#654321" strokeWidth="2"/>
          <path d="M90 160 L210 160" stroke="#654321" strokeWidth="2"/>
          <path d="M100 140 L200 140" stroke="#654321" strokeWidth="2"/>
          <path d="M110 120 L190 120" stroke="#654321" strokeWidth="2"/>
          <path d="M120 100 L180 100" stroke="#654321" strokeWidth="2"/>
          <path d="M130 80 L170 80" stroke="#654321" strokeWidth="2"/>
          <path d="M140 60 L160 60" stroke="#654321" strokeWidth="2"/>
          
          {/* Vertical divisions */}
          <path d="M100 220 L130 80" stroke="#654321" strokeWidth="1.5"/>
          <path d="M150 220 L150 40" stroke="#654321" strokeWidth="1.5"/>
          <path d="M200 220 L170 80" stroke="#654321" strokeWidth="1.5"/>
          
          {/* Sun at the tip */}
          <circle 
            cx="150" 
            cy="40" 
            r="20" 
            fill="#FFFF00" 
            stroke="#FFD700" 
            strokeWidth="2"
            className="animate-pulse"
          />
          
          {/* Sun rays */}
          <g stroke="#FFFF00" strokeWidth="2" strokeLinecap="round" className="animate-spin" style={{transformOrigin: '150px 40px', animationDuration: '15s'}}>
            <path d="M150 15 L150 8"/>
            <path d="M170 20 L175 15"/>
            <path d="M185 40 L192 40"/>
            <path d="M170 60 L175 65"/>
            <path d="M150 65 L150 72"/>
            <path d="M130 60 L125 65"/>
            <path d="M115 40 L108 40"/>
            <path d="M130 20 L125 15"/>
          </g>
          
          {/* Inner sun core */}
          <circle 
            cx="150" 
            cy="40" 
            r="12" 
            fill="#FFFACD" 
          />
          
          {/* Pyramid entrance */}
          <path 
            d="M135 200 L150 170 L165 200 Z" 
            fill="#8B4513" 
            stroke="#654321" 
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 leading-tight drop-shadow-2xl">
          Welcome to Donatello Pizza
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-white font-light drop-shadow-lg">
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
