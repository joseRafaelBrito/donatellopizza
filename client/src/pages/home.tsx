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
        
        {/* Curved top divider */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#fff"></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-white mb-4 animate-fade-in drop-shadow-lg">
            We believe in the craft
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto animate-slide-up drop-shadow-md">
            Every pizza is a masterpiece, hand-crafted with passion and baked to perfection in our wood-fired ovens.
          </p>
        </div>

        {/* Curved bottom divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-16" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M1200,120L0,16.48V0H1200V120Z" fill="#fff"></path>
          </svg>
        </div>
      </section>
      {/* Curved divider before pizza sections */}
      <div className="bg-white relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#f8f9fa"></path>
          </svg>
        </div>
        <PizzaSections />
      </div>
      {/* Curved divider before craft process */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8f9fa"></path>
          </svg>
        </div>
        <CraftProcess />
      </div>
      {/* Curved divider before testimonials */}
      <div className="bg-white relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="#f3f4f6"></path>
          </svg>
        </div>
        <Testimonials />
      </div>
      {/* Curved divider before contact */}
      <div className="relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="#f8f9fa"></path>
          </svg>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}
