import { useState, useEffect } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl sm:text-8xl font-playfair font-bold mb-4">
          <span className="text-cheese-gold animate-pulse">Donatello</span>
        </h1>
        <p className="text-2xl sm:text-3xl text-warm-gray font-semibold mb-8 animate-fade-in">
          Detroit Pizza
        </p>
        
        {/* Loading bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto mb-4">
          <div 
            className="h-full bg-gradient-to-r from-cheese-gold to-tomato-red rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-warm-gray animate-bounce-gentle">
          Preparing your artisan experience...
        </p>
      </div>
    </div>
  );
}