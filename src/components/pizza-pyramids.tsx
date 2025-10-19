import React from 'react';

export default function PizzaPyramids() {
  return (
    <div className="relative flex flex-col items-center py-16 bg-gradient-to-b from-orange-100 to-yellow-50">
      {/* Title */}
      <div className="mb-12">
        <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray text-center">
          The God of Pizza
        </h2>
      </div>

      {/* Pyramids Container */}
      <div className="flex items-end justify-center space-x-8">
        {/* Left Pizza Slice - Smallest */}
        <div className="relative">
          <svg width="120" height="100" viewBox="0 0 120 100" className="hover-scale">
            {/* Pizza Slice Base with gradient */}
            <defs>
              <linearGradient id="pizzaGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFA500"/>
                <stop offset="30%" stopColor="#FF8C00"/>
                <stop offset="70%" stopColor="#FF7F00"/>
                <stop offset="100%" stopColor="#FF6347"/>
              </linearGradient>
              <radialGradient id="cheese1" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#FFD700"/>
                <stop offset="50%" stopColor="#FFA500"/>
                <stop offset="100%" stopColor="#FF8C00"/>
              </radialGradient>
            </defs>
            
            {/* Pizza base */}
            <path
              d="M10 90 L60 10 L110 90 Z"
              fill="url(#pizzaGrad1)"
              stroke="#B8860B"
              strokeWidth="2"
            />
            
            {/* Cheese layer */}
            <path
              d="M15 85 L60 15 L105 85 Z"
              fill="url(#cheese1)"
              opacity="0.9"
            />
            
            {/* Crust with texture */}
            <path
              d="M10 90 L110 90"
              stroke="#CD853F"
              strokeWidth="8"
              strokeLinecap="round"
            />
            <path
              d="M15 88 L105 88"
              stroke="#DEB887"
              strokeWidth="4"
              strokeLinecap="round"
              opacity="0.7"
            />
            
            {/* Pepperoni with realistic shading */}
            <g>
              <circle cx="40" cy="55" r="5" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="42" cy="53" r="1.5" fill="#DC143C" opacity="0.6"/>
              <circle cx="38" cy="57" r="0.8" fill="#8B0000" opacity="0.4"/>
            </g>
            <g>
              <circle cx="75" cy="60" r="4.5" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="76" cy="58" r="1.2" fill="#DC143C" opacity="0.6"/>
              <circle cx="73" cy="62" r="0.7" fill="#8B0000" opacity="0.4"/>
            </g>
            
            {/* Third Eye */}
            <g className="pizza-pyramid-eye">
              <circle cx="60" cy="45" r="8" fill="white" stroke="#8B4513" strokeWidth="1"/>
              <circle cx="60" cy="45" r="5" fill="#4169E1" className="pyramid-eye-movement"/>
              <circle cx="61" cy="43" r="2" fill="white"/>
              <path d="M52 35 Q60 40 68 35" stroke="#8B4513" strokeWidth="2" fill="none"/>
            </g>
          </svg>
        </div>

        {/* Center Pizza Slice - Largest */}
        <div className="relative">
          <svg width="150" height="130" viewBox="0 0 150 130" className="hover-scale">
            {/* Pizza Slice Base with gradient */}
            <defs>
              <linearGradient id="pizzaGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFB347"/>
                <stop offset="25%" stopColor="#FFA500"/>
                <stop offset="60%" stopColor="#FF8C00"/>
                <stop offset="100%" stopColor="#FF7F00"/>
              </linearGradient>
              <radialGradient id="cheese2" cx="50%" cy="45%" r="65%">
                <stop offset="0%" stopColor="#FFDF00"/>
                <stop offset="40%" stopColor="#FFD700"/>
                <stop offset="80%" stopColor="#FFA500"/>
                <stop offset="100%" stopColor="#FF8C00"/>
              </radialGradient>
            </defs>
            
            {/* Pizza base */}
            <path
              d="M10 120 L75 10 L140 120 Z"
              fill="url(#pizzaGrad2)"
              stroke="#B8860B"
              strokeWidth="2"
            />
            
            {/* Cheese layer */}
            <path
              d="M18 115 L75 18 L132 115 Z"
              fill="url(#cheese2)"
              opacity="0.85"
            />
            
            {/* Crust with texture */}
            <path
              d="M10 120 L140 120"
              stroke="#CD853F"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M15 118 L135 118"
              stroke="#DEB887"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M20 116 L130 116"
              stroke="#F4A460"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
            
            {/* Pepperoni with realistic shading */}
            <g>
              <circle cx="50" cy="65" r="6" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="52" cy="63" r="2" fill="#DC143C" opacity="0.6"/>
              <circle cx="48" cy="67" r="1" fill="#8B0000" opacity="0.4"/>
            </g>
            <g>
              <circle cx="90" cy="70" r="5.5" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="91" cy="68" r="1.8" fill="#DC143C" opacity="0.6"/>
              <circle cx="88" cy="72" r="0.9" fill="#8B0000" opacity="0.4"/>
            </g>
            <g>
              <circle cx="65" cy="85" r="5" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="67" cy="83" r="1.5" fill="#DC143C" opacity="0.6"/>
              <circle cx="63" cy="87" r="0.8" fill="#8B0000" opacity="0.4"/>
            </g>
            <g>
              <circle cx="105" cy="80" r="4.5" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="106" cy="78" r="1.3" fill="#DC143C" opacity="0.6"/>
              <circle cx="103" cy="82" r="0.7" fill="#8B0000" opacity="0.4"/>
            </g>
            
            {/* Third Eye */}
            <g className="pizza-pyramid-eye">
              <circle cx="75" cy="55" r="10" fill="white" stroke="#8B4513" strokeWidth="1"/>
              <circle cx="75" cy="55" r="6" fill="#4169E1" className="pyramid-eye-movement"/>
              <circle cx="76" cy="52" r="2" fill="white"/>
              <path d="M65 45 Q75 50 85 45" stroke="#8B4513" strokeWidth="2" fill="none"/>
            </g>
          </svg>
        </div>

        {/* Right Pizza Slice - Medium */}
        <div className="relative">
          <svg width="130" height="110" viewBox="0 0 130 110" className="hover-scale">
            {/* Pizza Slice Base with gradient */}
            <defs>
              <linearGradient id="pizzaGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFCC5C"/>
                <stop offset="30%" stopColor="#FFB347"/>
                <stop offset="65%" stopColor="#FFA500"/>
                <stop offset="100%" stopColor="#FF8C00"/>
              </linearGradient>
              <radialGradient id="cheese3" cx="50%" cy="42%" r="62%">
                <stop offset="0%" stopColor="#FFE135"/>
                <stop offset="45%" stopColor="#FFD700"/>
                <stop offset="85%" stopColor="#FFB347"/>
                <stop offset="100%" stopColor="#FFA500"/>
              </radialGradient>
            </defs>
            
            {/* Pizza base */}
            <path
              d="M10 100 L65 10 L120 100 Z"
              fill="url(#pizzaGrad3)"
              stroke="#B8860B"
              strokeWidth="2"
            />
            
            {/* Cheese layer */}
            <path
              d="M16 95 L65 16 L114 95 Z"
              fill="url(#cheese3)"
              opacity="0.88"
            />
            
            {/* Crust with texture */}
            <path
              d="M10 100 L120 100"
              stroke="#CD853F"
              strokeWidth="9"
              strokeLinecap="round"
            />
            <path
              d="M14 98 L116 98"
              stroke="#DEB887"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M18 96 L112 96"
              stroke="#F4A460"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.5"
            />
            
            {/* Pepperoni with realistic shading */}
            <g>
              <circle cx="45" cy="60" r="5.5" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="47" cy="58" r="1.8" fill="#DC143C" opacity="0.6"/>
              <circle cx="43" cy="62" r="0.9" fill="#8B0000" opacity="0.4"/>
            </g>
            <g>
              <circle cx="80" cy="65" r="5" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="81" cy="63" r="1.5" fill="#DC143C" opacity="0.6"/>
              <circle cx="78" cy="67" r="0.8" fill="#8B0000" opacity="0.4"/>
            </g>
            <g>
              <circle cx="60" cy="75" r="4.5" fill="#B22222" stroke="#8B0000" strokeWidth="1"/>
              <circle cx="62" cy="73" r="1.3" fill="#DC143C" opacity="0.6"/>
              <circle cx="58" cy="77" r="0.7" fill="#8B0000" opacity="0.4"/>
            </g>
            
            {/* Third Eye */}
            <g className="pizza-pyramid-eye">
              <circle cx="65" cy="50" r="9" fill="white" stroke="#8B4513" strokeWidth="1"/>
              <circle cx="65" cy="50" r="6" fill="#4169E1" className="pyramid-eye-movement"/>
              <circle cx="66" cy="47" r="2" fill="white"/>
              <path d="M56 40 Q65 45 74 40" stroke="#8B4513" strokeWidth="2" fill="none"/>
            </g>
          </svg>
        </div>
      </div>

      {/* "In God we trust" text under center pyramid */}
      <div className="mt-8">
        <p className="text-2xl sm:text-3xl font-playfair font-bold text-warm-gray text-center tracking-wider">
          In God we trust
        </p>
      </div>

    </div>
  );
}