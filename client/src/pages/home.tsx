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
      <section className="py-16 bg-gradient-to-r from-garlic-cream to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat animate-pulse-gentle"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600')",
              filter: 'sepia(40%) saturate(1.5) brightness(1.2)'
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cheese-gold/60 to-yellow-400/50"></div>
          <div className="absolute inset-0 animate-float" style={{ opacity: 0.6 }}>
            <video 
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover mix-blend-overlay"
              style={{ filter: 'sepia(50%) saturate(2) brightness(1.3)' }}
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4 animate-fade-in">
            We believe in the craft
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slide-up">
            Every pizza is a masterpiece, hand-crafted with passion and baked to perfection in our wood-fired ovens.
          </p>
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
