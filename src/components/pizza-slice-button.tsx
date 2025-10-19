interface PizzaSliceButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function PizzaSliceButton({ onClick, children, className = "" }: PizzaSliceButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 transform hover:scale-110 hover-lift ${className}`}
    >
      {/* Pizza slice shape */}
      <div className="relative">
        <svg width="120" height="100" viewBox="0 0 120 100" className="hover-rotate">
          {/* Pizza slice base */}
          <path
            d="M10 85 L60 10 L110 85 Z"
            fill="#D2691E"
            stroke="#8B4513"
            strokeWidth="2"
          />
          
          {/* Cheese layer */}
          <path
            d="M15 80 L60 18 L105 80 Z"
            fill="#FFD700"
            opacity="0.8"
          />
          
          {/* Pepperoni spots */}
          <circle cx="45" cy="50" r="4" fill="#DC143C" />
          <circle cx="70" cy="45" r="4" fill="#DC143C" />
          <circle cx="55" cy="65" r="4" fill="#DC143C" />
          <circle cx="80" cy="65" r="3" fill="#DC143C" />
          
          {/* Crust highlights */}
          <path
            d="M10 85 L25 75 L60 10 L95 75 L110 85"
            fill="none"
            stroke="#F4A460"
            strokeWidth="2"
            opacity="0.6"
          />
          
          {/* Left eye */}
          <circle cx="45" cy="35" r="5" fill="white" />
          <circle cx="45" cy="35" r="3" fill="black" className="pizza-eyes" />
          <circle cx="46" cy="34" r="1" fill="white" />
          
          {/* Right eye */}
          <circle cx="75" cy="35" r="5" fill="white" />
          <circle cx="75" cy="35" r="3" fill="black" className="pizza-eyes" />
          <circle cx="76" cy="34" r="1" fill="white" />
          
          {/* Tongue */}
          <ellipse 
            cx="60" 
            cy="55" 
            rx="8" 
            ry="4" 
            fill="#FF69B4" 
            className="pizza-tongue"
            style={{ transformOrigin: '60px 51px' }}
          />
          
          {/* Mouth */}
          <path
            d="M50 50 Q60 58 70 50"
            fill="none"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Button text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-sm drop-shadow-lg mt-6 text-bounce">
            {children}
          </span>
        </div>
      </div>
    </button>
  );
}