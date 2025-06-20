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
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600" 
            alt="Detroit style pizza background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cheese-gold/60 to-yellow-400/40"></div>
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
