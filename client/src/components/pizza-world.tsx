export default function PizzaWorld() {
  return (
    <div className="relative min-h-[400px] bg-gradient-to-b from-orange-300 via-yellow-200 to-orange-100 overflow-hidden">
      {/* Pizza World Background */}
      <div className="absolute inset-0">
        {/* Floating Pizza Slices */}
        <div className="absolute top-10 left-10 w-16 h-16 card-float">
          <svg viewBox="0 0 60 60" className="w-full h-full hover-rotate">
            <path d="M10 50 L30 10 L50 50 Z" fill="#D2691E" stroke="#8B4513" strokeWidth="2"/>
            <path d="M15 45 L30 15 L45 45 Z" fill="#FFD700" opacity="0.8"/>
            <circle cx="25" cy="35" r="3" fill="#DC143C"/>
            <circle cx="35" cy="30" r="2" fill="#228B22"/>
          </svg>
        </div>

        <div className="absolute top-20 right-20 w-20 h-20 card-float" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 60 60" className="w-full h-full hover-rotate">
            <path d="M5 55 L30 5 L55 55 Z" fill="#8B4513" stroke="#654321" strokeWidth="2"/>
            <path d="M10 50 L30 10 L50 50 Z" fill="#FFD700" opacity="0.9"/>
            <circle cx="20" cy="40" r="2.5" fill="#DC143C"/>
            <circle cx="35" cy="35" r="2" fill="#FF6347"/>
            <circle cx="25" cy="25" r="1.5" fill="#228B22"/>
          </svg>
        </div>

        <div className="absolute bottom-20 left-1/4 w-14 h-14 card-float" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 60 60" className="w-full h-full hover-rotate">
            <path d="M12 48 L30 12 L48 48 Z" fill="#CD853F" stroke="#8B4513" strokeWidth="2"/>
            <path d="M16 44 L30 16 L44 44 Z" fill="#FFA500" opacity="0.8"/>
            <circle cx="28" cy="32" r="2" fill="#DC143C"/>
            <circle cx="32" cy="38" r="1.5" fill="#228B22"/>
          </svg>
        </div>

        {/* Pizza Planets */}
        <div className="absolute top-1/3 left-1/3 w-24 h-24 hover-scale">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-300 to-orange-400 opacity-80"></div>
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-red-600"></div>
            <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-green-600"></div>
            <div className="absolute top-8 right-4 w-2.5 h-2.5 rounded-full bg-red-700"></div>
          </div>
        </div>

        <div className="absolute top-1/2 right-1/4 w-20 h-20 hover-scale" style={{ animationDelay: '0.5s' }}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl relative overflow-hidden">
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-200 to-yellow-400 opacity-70"></div>
            <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-red-500"></div>
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-green-500"></div>
          </div>
        </div>

        {/* Cheese Meteors */}
        <div className="absolute top-16 left-2/3 w-8 h-16 hover-rotate">
          <div className="w-full h-full bg-gradient-to-b from-yellow-300 to-orange-400 rounded-full shadow-lg transform rotate-45"></div>
          <div className="absolute -top-2 -right-2 w-4 h-8 bg-gradient-to-b from-yellow-200 to-orange-300 rounded-full opacity-60 transform rotate-45"></div>
        </div>

        <div className="absolute bottom-1/3 right-1/3 w-6 h-12 hover-rotate" style={{ animationDelay: '1.5s' }}>
          <div className="w-full h-full bg-gradient-to-b from-orange-300 to-red-400 rounded-full shadow-md transform rotate-12"></div>
        </div>

        {/* Pepperoni Asteroids */}
        <div className="absolute top-1/4 right-1/2 w-12 h-12 hover-scale pulse-glow">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-lg relative">
            <div className="absolute inset-1 rounded-full bg-gradient-to-br from-red-500 to-red-700 opacity-80"></div>
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-red-900"></div>
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-red-900"></div>
          </div>
        </div>

        {/* Floating Herbs */}
        <div className="absolute top-2/3 left-1/5 w-8 h-8 card-float" style={{ animationDelay: '3s' }}>
          <div className="w-full h-full rounded-full bg-green-500 shadow-md relative">
            <div className="absolute inset-1 rounded-full bg-green-400 opacity-70"></div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-2/3 w-6 h-6 card-float" style={{ animationDelay: '2.5s' }}>
          <div className="w-full h-full rounded-full bg-green-600 shadow-sm"></div>
        </div>
      </div>

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full py-16">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold text-center mb-4 text-bounce">
          <span className="bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
            Pizza World
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-warm-gray text-center max-w-2xl mb-8 animate-fade-in">
          A universe where every ingredient tells a story
        </p>

        {/* Animated Down Arrow */}
        <div className="animate-bounce">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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