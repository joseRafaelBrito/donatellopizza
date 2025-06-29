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
        {/* Left Pyramid - Smallest */}
        <div className="relative">
          <svg width="120" height="100" viewBox="0 0 120 100" className="hover-scale">
            {/* Pyramid Base */}
            <path
              d="M10 90 L60 10 L110 90 Z"
              fill="url(#pizzaTexture1)"
              stroke="#654321"
              strokeWidth="2"
            />
            
            {/* Melting cheese drips */}
            <path
              d="M25 85 Q30 95 35 85 Q40 95 45 85 Q50 95 55 85"
              fill="#FFD700"
              opacity="0.8"
              className="animate-pulse"
            />
            
            {/* Third Eye */}
            <g className="pizza-pyramid-eye">
              <circle cx="60" cy="45" r="8" fill="white" stroke="#8B4513" strokeWidth="1"/>
              <circle cx="60" cy="45" r="5" fill="#4169E1" className="pyramid-eye-movement"/>
              <circle cx="61" cy="43" r="2" fill="white"/>
              <path d="M52 35 Q60 40 68 35" stroke="#8B4513" strokeWidth="2" fill="none"/>
            </g>
          </svg>
        </div>

        {/* Center Pyramid - Largest */}
        <div className="relative">
          <svg width="150" height="130" viewBox="0 0 150 130" className="hover-scale">
            {/* Pyramid Base */}
            <path
              d="M10 120 L75 10 L140 120 Z"
              fill="url(#pizzaTexture2)"
              stroke="#654321"
              strokeWidth="2"
            />
            
            {/* Melting cheese drips */}
            <path
              d="M20 115 Q25 125 30 115 Q35 125 40 115 Q45 125 50 115 Q55 125 60 115 Q65 125 70 115"
              fill="#FFD700"
              opacity="0.8"
              className="animate-pulse"
            />
            
            {/* Third Eye */}
            <g className="pizza-pyramid-eye">
              <circle cx="75" cy="55" r="10" fill="white" stroke="#8B4513" strokeWidth="1"/>
              <circle cx="75" cy="55" r="6" fill="#4169E1" className="pyramid-eye-movement"/>
              <circle cx="76" cy="52" r="2" fill="white"/>
              <path d="M65 45 Q75 50 85 45" stroke="#8B4513" strokeWidth="2" fill="none"/>
            </g>
          </svg>
        </div>

        {/* Right Pyramid - Medium */}
        <div className="relative">
          <svg width="130" height="110" viewBox="0 0 130 110" className="hover-scale">
            {/* Pyramid Base */}
            <path
              d="M10 100 L65 10 L120 100 Z"
              fill="url(#pizzaTexture3)"
              stroke="#654321"
              strokeWidth="2"
            />
            
            {/* Melting cheese drips */}
            <path
              d="M25 95 Q30 105 35 95 Q40 105 45 95 Q50 105 55 95 Q60 105 65 95"
              fill="#FFD700"
              opacity="0.8"
              className="animate-pulse"
            />
            
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

      {/* SVG Definitions for Pizza Textures */}
      <svg width="0" height="0">
        <defs>
          {/* Pizza Texture 1 - Rich Pizza Crust */}
          <pattern id="pizzaTexture1" patternUnits="userSpaceOnUse" width="20" height="20">
            <rect width="20" height="20" fill="#8B4513"/>
            <rect x="0" y="0" width="20" height="4" fill="#DAA520" opacity="0.8"/>
            <circle cx="5" cy="8" r="2" fill="#DC143C"/>
            <circle cx="15" cy="12" r="1.5" fill="#228B22"/>
            <circle cx="10" cy="16" r="2" fill="#FFD700" opacity="0.9"/>
            <circle cx="3" cy="14" r="1" fill="#FF6347"/>
          </pattern>
          
          {/* Pizza Texture 2 - Authentic Pizza Base */}
          <pattern id="pizzaTexture2" patternUnits="userSpaceOnUse" width="25" height="25">
            <rect width="25" height="25" fill="#A0522D"/>
            <rect x="0" y="0" width="25" height="5" fill="#F4A460" opacity="0.8"/>
            <circle cx="6" cy="8" r="2.5" fill="#DC143C"/>
            <circle cx="18" cy="14" r="2" fill="#228B22"/>
            <circle cx="12" cy="20" r="2.5" fill="#FFD700" opacity="0.9"/>
            <circle cx="20" cy="22" r="1.5" fill="#DC143C"/>
            <circle cx="4" cy="18" r="1.5" fill="#FF6347"/>
          </pattern>
          
          {/* Pizza Texture 3 - Deep Dish Style */}
          <pattern id="pizzaTexture3" patternUnits="userSpaceOnUse" width="22" height="22">
            <rect width="22" height="22" fill="#964B00"/>
            <rect x="0" y="0" width="22" height="4" fill="#DEB887" opacity="0.8"/>
            <circle cx="7" cy="9" r="2" fill="#DC143C"/>
            <circle cx="16" cy="13" r="1.5" fill="#228B22"/>
            <circle cx="11" cy="18" r="2" fill="#FFD700" opacity="0.9"/>
            <circle cx="18" cy="20" r="1" fill="#DC143C"/>
            <circle cx="4" cy="16" r="1.2" fill="#FF6347"/>
          </pattern>
        </defs>
      </svg>
    </div>
  );
}