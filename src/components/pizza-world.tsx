export default function PizzaWorld() {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-br from-tomato-red via-orange-500 to-cheese-gold overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(255, 193, 7, 0.3) 0%, transparent 50%)
        `
      }}
    >
      {/* Background Sky and Ground */}
      <div className="absolute inset-0">
        {/* Clouds */}
        <div className="absolute top-8 left-20 w-16 h-8 bg-white rounded-full opacity-80 card-float"></div>
        <div className="absolute top-12 right-32 w-20 h-10 bg-white rounded-full opacity-70 card-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-16 left-1/2 w-12 h-6 bg-white rounded-full opacity-75 card-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Pizza Bank Building */}
      <div className="absolute left-8 bottom-20 z-20">
        <div className="relative">
          {/* Bank Building */}
          <div className="w-32 h-28 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg shadow-xl">
            <div className="w-full h-6 bg-gray-500 rounded-t-lg"></div>
            <div className="flex justify-center mt-2">
              <div className="w-20 h-16 bg-gradient-to-b from-orange-300 to-red-400 rounded-lg border-2 border-gray-600 shadow-md">
                <div className="text-xs font-bold text-center text-white mt-1">PIZZA</div>
                <div className="text-xs font-bold text-center text-white">BANK</div>
                <div className="flex justify-center mt-1">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Bank Door */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-brown-600 rounded-t-lg border border-brown-700"></div>
        </div>
      </div>

      {/* Small Park with Bench */}
      <div className="absolute right-8 bottom-20 z-20">
        {/* Park Ground */}
        <div className="w-40 h-16 bg-green-300 rounded-lg shadow-inner relative">
          {/* Bench */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-16 h-3 bg-brown-600 rounded"></div>
            <div className="flex justify-between w-16">
              <div className="w-2 h-6 bg-brown-700"></div>
              <div className="w-2 h-6 bg-brown-700"></div>
            </div>
          </div>
          
          {/* Two Pizza Slices Sitting and Talking */}
          <div className="absolute top-1 left-6">
            {/* First Pizza Slice */}
            <svg width="20" height="16" viewBox="0 0 20 16" className="wiggle">
              <path d="M2 14 L10 2 L18 14 Z" fill="#D2691E" stroke="#8B4513" strokeWidth="1"/>
              <path d="M4 12 L10 4 L16 12 Z" fill="#FFD700" opacity="0.8"/>
              <circle cx="8" cy="10" r="1" fill="#DC143C"/>
              <circle cx="12" cy="8" r="0.8" fill="#228B22"/>
              {/* Eyes */}
              <circle cx="7" cy="7" r="1" fill="white"/>
              <circle cx="7" cy="7" r="0.6" fill="black"/>
              <circle cx="13" cy="7" r="1" fill="white"/>
              <circle cx="13" cy="7" r="0.6" fill="black"/>
              {/* Mouth */}
              <path d="M8 9 Q10 11 12 9" stroke="black" strokeWidth="0.5" fill="none"/>
            </svg>
          </div>
          
          <div className="absolute top-1 right-6">
            {/* Second Pizza Slice */}
            <svg width="20" height="16" viewBox="0 0 20 16" className="wiggle" style={{ animationDelay: '0.5s' }}>
              <path d="M2 14 L10 2 L18 14 Z" fill="#8B4513" stroke="#654321" strokeWidth="1"/>
              <path d="M4 12 L10 4 L16 12 Z" fill="#FFA500" opacity="0.8"/>
              <circle cx="8" cy="9" r="1" fill="#DC143C"/>
              <circle cx="12" cy="10" r="0.8" fill="#FF6347"/>
              {/* Eyes */}
              <circle cx="7" cy="7" r="1" fill="white"/>
              <circle cx="7" cy="7" r="0.6" fill="black"/>
              <circle cx="13" cy="7" r="1" fill="white"/>
              <circle cx="13" cy="7" r="0.6" fill="black"/>
              {/* Mouth */}
              <path d="M8 9 Q10 11 12 9" stroke="black" strokeWidth="0.5" fill="none"/>
            </svg>
          </div>

          {/* Speech Bubbles */}
          <div className="absolute -top-8 left-4">
            <div className="relative bg-white rounded-lg px-2 py-1 shadow-md text-xs">
              Hey slice!
              <div className="absolute bottom-0 left-4 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>
          
          <div className="absolute -top-8 right-4">
            <div className="relative bg-white rounded-lg px-2 py-1 shadow-md text-xs">
              Great day!
              <div className="absolute bottom-0 right-4 w-0 h-0 border-l-2 border-r-2 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>

          {/* Small Tree */}
          <div className="absolute top-0 right-2">
            <div className="w-1 h-8 bg-brown-600"></div>
            <div className="absolute -top-2 -left-2 w-5 h-5 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6 animate-fade-in drop-shadow-2xl text-bounce">
          Welcome to Donatello
        </h1>
        
        <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto animate-slide-up drop-shadow-lg text-center">
          Artisan Detroit & New York Style Pizzas
        </p>
        
        <button className="bg-tomato-red hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 animate-scale-in shadow-xl hover-lift hover:scale-110 mb-8">
          Ver Menú
        </button>

        {/* Animated Down Arrow */}
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#FFA500"></path>
        </svg>
      </div>
    </div>
  );
}