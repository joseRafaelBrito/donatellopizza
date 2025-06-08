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
      <section className="py-16 bg-gradient-to-r from-garlic-cream to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4">
            We believe in the craft
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
