import Header from "@/components/header";
import Hero from "@/components/hero";
import PizzaSections from "@/components/pizza-sections";
import CraftProcess from "@/components/craft-process";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
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
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-playfair font-bold text-white mb-4 animate-fade-in drop-shadow-lg leading-tight">
                We believe in the craft
              </h2>
              <p className="text-xl text-white max-w-2xl animate-slide-up drop-shadow-md">
                Every pizza is a masterpiece, hand-crafted with passion and baked to perfection in our wood-fired ovens.
              </p>
            </div>
            
            {/* Small video in top right corner */}
            <div className="hidden lg:block w-80 h-48 rounded-2xl overflow-hidden shadow-2xl ml-8">
              <video 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://videos.pexels.com/video-files/4252965/4252965-hd_1920_1080_30fps.mp4" type="video/mp4" />
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
      <CraftProcess />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
