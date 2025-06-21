import { useState, useEffect } from "react";

export default function PizzaWheel() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationAmount = scrollY * 0.5; // Adjust rotation speed
      setRotation(rotationAmount);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20">
      <div 
        className="relative w-40 h-40 animate-float"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {/* Pizza Wheel Base */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl border-4 border-white">
          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-tomato-red rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-lg"></div>
          
          {/* Detroit Pizza Star (Top) */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div className="relative w-12 h-12">
              {/* Star shape for Detroit pizza */}
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
                  fill="#8B4513" 
                  stroke="#654321" 
                  strokeWidth="1"
                />
                {/* Cheese dots */}
                <circle cx="12" cy="10" r="1.5" fill="#FFD700" />
                <circle cx="9" cy="12" r="1" fill="#FFD700" />
                <circle cx="15" cy="12" r="1" fill="#FFD700" />
              </svg>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white drop-shadow-lg">
                Detroit
              </div>
            </div>
          </div>

          {/* NY Pizza Star (Bottom) */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="relative w-12 h-12">
              {/* Star shape for NY pizza */}
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path 
                  d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
                  fill="#CD853F" 
                  stroke="#8B4513" 
                  strokeWidth="1"
                />
                {/* Pepperoni dots */}
                <circle cx="12" cy="9" r="1.5" fill="#DC143C" />
                <circle cx="10" cy="13" r="1" fill="#DC143C" />
                <circle cx="14" cy="13" r="1" fill="#DC143C" />
              </svg>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white drop-shadow-lg">
                NY
              </div>
            </div>
          </div>

          {/* Left and Right decorative elements */}
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-cheese-gold rounded-full opacity-80"></div>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-tomato-red rounded-full opacity-80"></div>
        </div>
        
        {/* Rotating border effect */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white opacity-60 animate-spin" style={{ animationDuration: '10s' }}></div>
      </div>
    </div>
  );
}