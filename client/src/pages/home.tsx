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
        <div className="absolute inset-0 opacity-30">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-cheese-gold/70 to-yellow-400/60"></div>
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
