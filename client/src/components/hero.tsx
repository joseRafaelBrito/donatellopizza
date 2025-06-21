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

      {/* Cheese Pyramid in Background */}
      <div className="absolute inset-0 flex items-center justify-center z-15">
        <svg width="400" height="350" viewBox="0 0 400 350" className="opacity-30">
          {/* Pyramid Base */}
          <path 
            d="M200 50 L350 300 L50 300 Z" 
            fill="#FFD700" 
            stroke="#FFA500" 
            strokeWidth="3"
            opacity="0.8"
          />
          
          {/* Pyramid Left Side */}
          <path 
            d="M200 50 L50 300 L200 280 Z" 
            fill="#F4A460" 
            opacity="0.9"
          />
          
          {/* Pyramid Right Side */}
          <path 
            d="M200 50 L350 300 L200 280 Z" 
            fill="#DAA520" 
            opacity="0.9"
          />
          
          {/* Cheese Texture Lines */}
          <path d="M80 280 L170 100" stroke="#FFA500" strokeWidth="2" opacity="0.6"/>
          <path d="M120 290 L180 120" stroke="#FFA500" strokeWidth="2" opacity="0.6"/>
          <path d="M280 290 L220 120" stroke="#FFA500" strokeWidth="2" opacity="0.6"/>
          <path d="M320 280 L230 100" stroke="#FFA500" strokeWidth="2" opacity="0.6"/>
          
          {/* Horizontal cheese lines */}
          <path d="M70 250 L330 250" stroke="#FFA500" strokeWidth="1.5" opacity="0.5"/>
          <path d="M90 200 L310 200" stroke="#FFA500" strokeWidth="1.5" opacity="0.5"/>
          <path d="M110 150 L290 150" stroke="#FFA500" strokeWidth="1.5" opacity="0.5"/>
          
          {/* Sun at the tip */}
          <circle 
            cx="200" 
            cy="50" 
            r="25" 
            fill="#FFF700" 
            stroke="#FFD700" 
            strokeWidth="2"
            className="animate-pulse"
          />
          
          {/* Sun rays */}
          <g stroke="#FFF700" strokeWidth="3" strokeLinecap="round" className="animate-spin" style={{transformOrigin: '200px 50px', animationDuration: '20s'}}>
            <path d="M200 15 L200 5"/>
            <path d="M225 25 L232 18"/>
            <path d="M235 50 L245 50"/>
            <path d="M225 75 L232 82"/>
            <path d="M200 85 L200 95"/>
            <path d="M175 75 L168 82"/>
            <path d="M165 50 L155 50"/>
            <path d="M175 25 L168 18"/>
          </g>
          
          {/* Inner sun glow */}
          <circle 
            cx="200" 
            cy="50" 
            r="15" 
            fill="#FFFF99" 
            opacity="0.8"
          />
          
          {/* Pyramid entrance/door */}
          <path 
            d="M180 280 L200 240 L220 280 Z" 
            fill="#CD853F" 
            stroke="#8B4513" 
            strokeWidth="2"
            opacity="0.7"
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
