import Header from "@/components/header";
import Hero from "@/components/hero";
import PizzaSections from "@/components/pizza-sections";
import CraftProcess from "@/components/craft-process";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PizzaPyramids from "@/components/pizza-pyramids";
import PizzaWorld from "@/components/pizza-world";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <section className="py-16 relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://videos.pexels.com/video-files/3196170/3196170-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/4252965/4252965-hd_1920_1080_30fps.mp4" type="video/mp4" />
          </video>
          {/* Semi-transparent yellow overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/70 to-cheese-gold/60"></div>
        </div>
        


        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between min-h-[400px]">
            <div className="flex-1 pr-8">
              {/* Daily Production Counter */}
              <div className="mb-6">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 animate-bounce-in">
                  <span className="text-cheese-gold text-3xl font-bold mr-2">50</span>
                  <span className="text-white text-lg font-medium">pizzas a day</span>
                </div>
              </div>
              
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 animate-fade-in drop-shadow-lg leading-tight [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]">
                Respect the craft
              </h2>
              <p className="text-xl text-white max-w-2xl animate-slide-up drop-shadow-md">
                Every pizza is a masterpiece, hand-crafted with passion and baked to perfection in our wood-fired ovens.
              </p>
            </div>
            
            {/* Small video in top right corner */}
            <div className="w-80 h-48 rounded-2xl overflow-hidden shadow-2xl bg-black flex-shrink-0">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                onLoadedData={(e) => {
                  const video = e.target as HTMLVideoElement;
                  video.play().catch(console.error);
                }}
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* Curved bottom divider for yellow section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#fff"></path>
          </svg>
        </div>
      </section>
      <PizzaSections />
      <PizzaPyramids />
      <CraftProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
