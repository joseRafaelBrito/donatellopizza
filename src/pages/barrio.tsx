import { useEffect, useRef } from "react";
import { useParams, useLocation } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, ArrowLeft, Pizza, Phone, Clock, Star } from "lucide-react";
import { getBarrioBySlug, barrios } from "@/data/barrios";
import "leaflet/dist/leaflet.css";

export default function BarrioPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, setLocation] = useLocation();
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  const barrio = getBarrioBySlug(slug || "");

  const pageTitle = barrio
    ? `Detroit Pizza en ${barrio.nombre} | Donatello - Santiago, DR`
    : "Barrio no encontrado | Donatello Pizza";

  const pageDescription = barrio
    ? `Encuentra la mejor pizza estilo Detroit en ${barrio.nombre}, Santiago de los Caballeros. Donatello Pizza ofrece delivery auténtico en ${barrio.nombre} y alrededores.`
    : "";

  useEffect(() => {
    if (!barrio) return;

    document.title = pageTitle;
    const canonicalUrl = `${window.location.origin}/barrios/${barrio.slug}`;

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

    upsertMeta("description", pageDescription);
    upsertMeta("keywords", `pizza ${barrio.nombre} Santiago, pizza Detroit ${barrio.nombre} Santiago de los Caballeros, pizza delivery ${barrio.nombre}, pizza a domicilio Santiago DR, pizzería ${barrio.nombre}, Donatello Pizza Santiago`);
    upsertOG("og:locale", "es_DO");
    upsertOG("og:title", pageTitle);
    upsertOG("og:description", pageDescription);
    upsertOG("og:type", "restaurant");
    upsertOG("og:url", canonicalUrl);
    upsertOG("og:site_name", "Donatello Pizza");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) { canonical.setAttribute("href", canonicalUrl); }
    else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonical);
    }
  }, [barrio, pageTitle, pageDescription]);

  useEffect(() => {
    if (!barrio || !mapContainerRef.current || mapRef.current) return;

    import("leaflet").then((L) => {
      const map = L.default.map(mapContainerRef.current!, {
        center: [barrio.lat, barrio.lng],
        zoom: 14,
        scrollWheelZoom: false,
        zoomControl: true,
      });

      L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      fetch("/barrios_santiago.geojson")
        .then((r) => r.json())
        .then((data) => {
          L.default.geoJSON(data, {
            style: (feature: any) => {
              const isThis = feature.properties?.slug === barrio.slug;
              return {
                color: isThis ? "#e67e22" : "#c0392b",
                weight: isThis ? 3 : 1,
                fillColor: isThis ? "#f39c12" : "#e74c3c",
                fillOpacity: isThis ? 0.5 : 0.1,
                opacity: isThis ? 1 : 0.5,
              };
            },
            onEachFeature: (feature: any, layer: any) => {
              const nombre = feature.properties?.nombre || "";
              const slug = feature.properties?.slug || "";
              layer.bindTooltip(nombre, { sticky: true });
              layer.on("click", () => setLocation(`/barrios/${slug}`));
            },
          }).addTo(map);
        })
        .catch(console.error);

      mapRef.current = map;
    });

    return () => {
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  }, [barrio]);

  if (!barrio) {
    return (
      <>
        <Header />
        <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-playfair font-bold text-warm-gray mb-4">Barrio no encontrado</h1>
            <p className="text-gray-600 mb-8">El barrio que buscas no existe en nuestra lista.</p>
            <Button onClick={() => setLocation("/barrios")} className="bg-tomato-red text-white">
              <ArrowLeft className="w-4 h-4 mr-2" /> Ver todos los barrios
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Donatello Pizza",
    "description": `Auténtica pizza estilo Detroit con delivery en ${barrio.nombre}, Santiago de los Caballeros, República Dominicana.`,
    "telephone": "(809) 555-1234",
    "email": "hola@donatello.pizza",
    "servesCuisine": ["Pizza Estilo Detroit", "Pizza Estilo Nueva York", "Pizza Siciliana"],
    "url": `${window.location.origin}/barrios/${barrio.slug}`,
    "hasMenu": `${window.location.origin}/menu`,
    "priceRange": "RD$",
    "currenciesAccepted": "DOP",
    "areaServed": {
      "@type": "Place",
      "name": `${barrio.nombre}, Santiago de los Caballeros`,
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Juan Pablo Duarte",
      "addressLocality": "Santiago de los Caballeros",
      "addressRegion": "Santiago",
      "postalCode": "51000",
      "addressCountry": "DO",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": barrio.lat,
      "longitude": barrio.lng,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 47,
      "bestRating": 5,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": `${window.location.origin}/` },
      { "@type": "ListItem", "position": 2, "name": "Barrios", "item": `${window.location.origin}/barrios` },
      { "@type": "ListItem", "position": 3, "name": barrio.nombre, "item": `${window.location.origin}/barrios/${barrio.slug}` },
    ],
  };

  const nearbyBarrios = barrios.filter((b) => b.slug !== barrio.slug).slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <button onClick={() => setLocation("/")} className="hover:text-tomato-red transition-colors">Inicio</button>
            <span>/</span>
            <button onClick={() => setLocation("/barrios")} className="hover:text-tomato-red transition-colors">Barrios</button>
            <span>/</span>
            <span className="text-warm-gray font-medium">{barrio.nombre}</span>
          </nav>

          <Button
            variant="ghost"
            onClick={() => setLocation("/barrios")}
            className="mb-6 text-warm-gray hover:text-tomato-red"
            data-testid="button-back-barrios"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Todos los barrios
          </Button>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-tomato-red text-white">Delivery disponible</Badge>
                <div className="flex items-center gap-1 text-yellow-500">
                  {[1,2,3,4,5].map((s) => <Star key={s} className={`w-4 h-4 ${s <= 4 ? "fill-current" : ""}`} />)}
                  <span className="text-sm text-gray-600 ml-1">4.8 (47 reseñas)</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4">
                Detroit Pizza en {barrio.nombre}
              </h1>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Donatello Pizza lleva su auténtica pizza estilo Detroit directamente a <strong>{barrio.nombre}</strong>, Santiago de los Caballeros. Masa espesa y esponjosa, queso caramelizado hasta los bordes, y la salsa por encima — una experiencia única en la ciudad.
              </p>

              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <MapPin className="w-5 h-5 text-tomato-red flex-shrink-0" />
                <span>{barrio.nombre}, Santiago de los Caballeros, República Dominicana</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <Clock className="w-5 h-5 text-tomato-red flex-shrink-0" />
                <span>Tiempo de entrega: 30–45 minutos</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 mb-8">
                <Phone className="w-5 h-5 text-tomato-red flex-shrink-0" />
                <span>(809) 555-1234</span>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => setLocation("/menu")}
                  className="bg-tomato-red hover:bg-red-600 text-white font-bold px-8 py-3"
                  data-testid="button-ver-menu-barrio"
                >
                  <Pizza className="w-4 h-4 mr-2" />
                  Ver Menú y Ordenar
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setLocation("/barrios")}
                  className="border-tomato-red text-tomato-red hover:bg-tomato-red hover:text-white"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver Mapa de Barrios
                </Button>
              </div>
            </div>

            {/* Mini Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <div
                ref={mapContainerRef}
                style={{ height: "400px", width: "100%" }}
                data-testid={`map-barrio-${slug}`}
              />
            </div>
          </div>

          {/* SEO Content Block */}
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">
            <h2 className="text-2xl font-playfair font-bold text-warm-gray mb-4">
              Pizza Detroit Auténtica en {barrio.nombre}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              {barrio.descripcion} Donatello Pizza trae el sabor original de Detroit a {barrio.nombre}. Nuestras pizzas se preparan con masa de fermentación lenta, queso Wisconsin brick, y la icónica salsa aplicada por encima — fiel a la tradición de Motor City.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hacemos delivery en {barrio.nombre} y todos los barrios de Santiago de los Caballeros. También puedes ordenar en nuestra pizzería o recoger personalmente. Cada pizza es artesanal y preparada por pedido para garantizar la mejor calidad.
            </p>
          </section>

          {/* Other Barrios */}
          <section>
            <h2 className="text-2xl font-playfair font-bold text-warm-gray mb-6">
              También hacemos delivery en...
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {nearbyBarrios.map((b) => (
                <button
                  key={b.slug}
                  onClick={() => setLocation(`/barrios/${b.slug}`)}
                  data-testid={`link-nearby-barrio-${b.slug}`}
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-tomato-red hover:shadow-md transition-all text-left group"
                >
                  <MapPin className="w-4 h-4 text-tomato-red flex-shrink-0" />
                  <span className="text-sm font-medium text-warm-gray group-hover:text-tomato-red transition-colors">
                    {b.nombre}
                  </span>
                </button>
              ))}
              <button
                onClick={() => setLocation("/barrios")}
                className="flex items-center gap-2 p-3 bg-garlic-cream rounded-xl border border-dashed border-tomato-red hover:shadow-md transition-all text-left"
              >
                <Pizza className="w-4 h-4 text-tomato-red flex-shrink-0" />
                <span className="text-sm font-medium text-tomato-red">Ver todos los barrios →</span>
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
