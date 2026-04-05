import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import Header from "@/components/header";
import Hero from "@/components/hero";
import PizzaSections from "@/components/pizza-sections";
import CraftProcess from "@/components/craft-process";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PizzaPyramids from "@/components/pizza-pyramids";
import PizzaWorld from "@/components/pizza-world";
import { barrios } from "@/data/barrios";
import { MapPin, Pizza } from "lucide-react";
import { homeHashUrl } from "@/lib/publicAssetUrl";

export default function Home() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    document.title = "Donatello Pizza | Pizzería Detroit en Santiago de los Caballeros";

    const upsertMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) { tag.setAttribute("content", content); return; }
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      tag.setAttribute("content", content);
      document.head.appendChild(tag);
    };

    const upsertOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) { tag.setAttribute("content", content); return; }
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      tag.setAttribute("content", content);
      document.head.appendChild(tag);
    };

    upsertMeta("description", "Disfruta las mejores pizzas artesanales al estilo Detroit en Santiago de los Caballeros. RD$, entregas rápidas y deliciosas.");
    upsertMeta("keywords", "pizza Detroit Santiago, Donatello Pizza, pizza artesanal Santiago, pizza delivery Santiago, pizza Detroit DR, pizza Santiago de los Caballeros, pizzería Santiago RD");
    upsertOG("og:title", "Donatello Pizza | Pizzería Detroit en Santiago de los Caballeros");
    upsertOG("og:description", "Disfruta las mejores pizzas artesanales al estilo Detroit en Santiago de los Caballeros. Entregas rápidas y deliciosas.");
    upsertOG("og:type", "restaurant");
    upsertOG("og:url", window.location.origin);
    upsertOG("og:site_name", "Donatello Pizza");
    upsertOG("og:locale", "es_DO");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) { canonical.setAttribute("href", window.location.origin); }
    else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", window.location.origin);
      document.head.appendChild(canonical);
    }

    const restaurantSchema = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Donatello Pizza",
      "description": "Auténtica pizzería artesanal con pizzas estilo Detroit, Nueva York y Siciliana en Santiago de los Caballeros, República Dominicana.",
      "url": window.location.origin,
      "telephone": "(809) 555-1234",
      "email": "hola@donatello.pizza",
      "servesCuisine": ["Pizza Estilo Detroit", "Pizza Estilo Nueva York", "Pizza Siciliana"],
      "priceRange": "RD$",
      "hasMenu": `${window.location.origin}/menu`,
      "currenciesAccepted": "DOP",
      "paymentAccepted": "Efectivo, Tarjeta de crédito",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Juan Pablo Duarte",
        "addressLocality": "Santiago de los Caballeros",
        "addressRegion": "Santiago",
        "postalCode": "51000",
        "addressCountry": "DO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "19.4517",
        "longitude": "-70.6970"
      },
      "areaServed": {
        "@type": "City",
        "name": "Santiago de los Caballeros"
      },
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "11:00", "closes": "22:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Friday", "Saturday"], "opens": "11:00", "closes": "23:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "12:00", "closes": "21:00" }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": 4.8,
        "reviewCount": 47,
        "bestRating": 5
      }
    };

    let schemaScript = document.querySelector('script[data-schema="home-restaurant"]');
    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.setAttribute("type", "application/ld+json");
      schemaScript.setAttribute("data-schema", "home-restaurant");
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(restaurantSchema);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <section className="py-16 relative overflow-hidden">
        {/* Fondo en video */}
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
          {/* Superposición semitransparente amarilla */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/70 to-cheese-gold/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between min-h-[400px]">
            <div className="flex-1 pr-8">
              {/* Contador de producción diaria */}
              <div className="mb-6">
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 animate-bounce-in">
                  <span className="text-cheese-gold text-3xl font-bold mr-2">50</span>
                  <span className="text-white text-lg font-medium">pizzas al día</span>
                </div>
              </div>

              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 animate-fade-in drop-shadow-lg leading-tight [text-shadow:_2px_2px_0_#000,_-2px_-2px_0_#000,_2px_-2px_0_#000,_-2px_2px_0_#000]">
                Respeta el oficio
              </h2>
              <p className="text-xl text-white max-w-2xl animate-slide-up drop-shadow-md">
                Cada pizza es una obra maestra, elaborada a mano con pasión y horneada a la perfección en nuestros hornos de leña.
              </p>
            </div>

            {/* Video pequeño en la esquina superior derecha */}
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

        {/* Divisor curvo inferior de la sección amarilla */}
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

      {/* Delivery por Barrios */}
      <section className="py-16 bg-gradient-to-b from-white to-garlic-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-tomato-red/10 text-tomato-red rounded-full px-4 py-2 mb-4 text-sm font-semibold">
              <MapPin className="w-4 h-4" />
              Delivery en Santiago
            </div>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-warm-gray mb-4">
              Pizza Detroit en Tu Barrio
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hacemos delivery de auténtica pizza estilo Detroit a todos los barrios de Santiago de los Caballeros. Encuentra el tuyo.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-8">
            {barrios.map((barrio) => (
              <Link
                key={barrio.slug}
                href={`/barrios/${barrio.slug}`}
                data-testid={`home-link-barrio-${barrio.slug}`}
                className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-tomato-red hover:shadow-md transition-all text-left group text-sm"
              >
                <MapPin className="w-3 h-3 text-tomato-red flex-shrink-0" />
                <span className="text-warm-gray group-hover:text-tomato-red transition-colors font-medium truncate">
                  {barrio.nombre}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/barrios"
              className="inline-flex items-center gap-2 bg-tomato-red hover:bg-red-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              data-testid="home-button-ver-barrios"
            >
              <Pizza className="w-5 h-5" />
              Ver Mapa de Barrios y Pedir Pizza
            </Link>
          </div>
        </div>
      </section>

      {/* Bloque de enlaces internos SEO */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-playfair font-bold text-warm-gray mb-6 text-center">
            Explora Donatello Pizza — Santiago de los Caballeros
          </h2>
          <nav aria-label="Secciones principales del sitio" className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <Link href="/menu" className="flex flex-col items-center p-4 bg-garlic-cream rounded-xl hover:bg-cheese-gold/20 transition-colors group text-center">
              <Pizza className="w-6 h-6 text-tomato-red mb-2" />
              <span className="font-semibold text-warm-gray group-hover:text-tomato-red text-sm">Menú de Pizzas</span>
              <span className="text-xs text-gray-500 mt-1">Detroit, NY y Siciliana</span>
            </Link>
            <Link href="/barrios" className="flex flex-col items-center p-4 bg-garlic-cream rounded-xl hover:bg-cheese-gold/20 transition-colors group text-center">
              <MapPin className="w-6 h-6 text-tomato-red mb-2" />
              <span className="font-semibold text-warm-gray group-hover:text-tomato-red text-sm">Delivery por Barrios</span>
              <span className="text-xs text-gray-500 mt-1">25 barrios de Santiago</span>
            </Link>
            <Link href="/checkout" className="flex flex-col items-center p-4 bg-garlic-cream rounded-xl hover:bg-cheese-gold/20 transition-colors group text-center">
              <Pizza className="w-6 h-6 text-tomato-red mb-2" />
              <span className="font-semibold text-warm-gray group-hover:text-tomato-red text-sm">Ordenar Ahora</span>
              <span className="text-xs text-gray-500 mt-1">Pickup o delivery</span>
            </Link>
            <a href={homeHashUrl("contact")} className="flex flex-col items-center p-4 bg-garlic-cream rounded-xl hover:bg-cheese-gold/20 transition-colors group text-center">
              <MapPin className="w-6 h-6 text-tomato-red mb-2" />
              <span className="font-semibold text-warm-gray group-hover:text-tomato-red text-sm">Contáctanos</span>
              <span className="text-xs text-gray-500 mt-1">Av. Juan Pablo Duarte, Santiago</span>
            </a>
          </nav>
        </div>
      </section>

      <Footer />
    </div>
  );
}
