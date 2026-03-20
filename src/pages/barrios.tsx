import { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Pizza, ChevronRight } from "lucide-react";
import { barrios, Barrio } from "@/data/barrios";
import "leaflet/dist/leaflet.css";

declare global {
  interface Window {
    L: any;
  }
}

export default function BarriosPage() {
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [highlighted, setHighlighted] = useState<string | null>(null);
  const mapRef = useRef<any>(null);
  const geoJsonLayerRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const filtered = barrios.filter((b) =>
    b.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.title = "Pizza por Barrios en Santiago | Donatello - Mapa de Delivery";
    const updateOrCreateMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (tag) { tag.setAttribute("content", content); return; }
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      tag.setAttribute("content", content);
      document.head.appendChild(tag);
    };
    const updateOrCreateOG = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) { tag.setAttribute("content", content); return; }
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      tag.setAttribute("content", content);
      document.head.appendChild(tag);
    };
    updateOrCreateMeta("description", "Encuentra pizza Detroit estilo en tu barrio de Santiago de los Caballeros. Donatello Pizza hace delivery a todos los barrios de Santiago, RD.");
    updateOrCreateMeta("keywords", "pizza Santiago de los Caballeros barrios, pizza delivery Santiago RD, Detroit pizza delivery Santiago, pizza a domicilio Santiago, pizzería Santiago de los Caballeros, Donatello Pizza barrios");
    updateOrCreateOG("og:title", "Pizza por Barrios en Santiago de los Caballeros | Donatello Pizza");
    updateOrCreateOG("og:description", "Mapa interactivo de barrios de Santiago de los Caballeros. Busca pizza Detroit artesanal en tu barrio con entrega rápida.");
    updateOrCreateOG("og:type", "website");
    updateOrCreateOG("og:url", `${window.location.origin}/barrios`);
    updateOrCreateOG("og:site_name", "Donatello Pizza");
    updateOrCreateOG("og:locale", "es_DO");
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) { canonical.setAttribute("href", `${window.location.origin}/barrios`); }
    else {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", `${window.location.origin}/barrios`);
      document.head.appendChild(canonical);
    }
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    import("leaflet").then((L) => {
      const map = L.default.map(mapContainerRef.current!, {
        center: [19.465, -70.675],
        zoom: 12,
        scrollWheelZoom: false,
      });

      L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(map);

      mapRef.current = map;

      fetch("/barrios_santiago.geojson")
        .then((r) => r.json())
        .then((data) => {
          const layer = L.default.geoJSON(data, {
            style: (feature: any) => ({
              color: "#c0392b",
              weight: 2,
              opacity: 0.9,
              fillColor: "#e74c3c",
              fillOpacity: 0.15,
            }),
            onEachFeature: (feature: any, featureLayer: any) => {
              const nombre = feature.properties?.nombre || "";
              const slug = feature.properties?.slug || "";
              featureLayer.bindTooltip(nombre, { sticky: true, className: "barrio-tooltip" });
              featureLayer.on("click", () => {
                setLocation(`/barrios/${slug}`);
              });
              featureLayer.on("mouseover", () => {
                featureLayer.setStyle({ fillOpacity: 0.45, fillColor: "#c0392b" });
              });
              featureLayer.on("mouseout", () => {
                if (highlighted !== slug) {
                  featureLayer.setStyle({ fillOpacity: 0.15, fillColor: "#e74c3c" });
                }
              });
            },
          }).addTo(map);

          geoJsonLayerRef.current = layer;
        })
        .catch(console.error);
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!geoJsonLayerRef.current) return;
    geoJsonLayerRef.current.eachLayer((layer: any) => {
      const slug = layer.feature?.properties?.slug;
      if (slug && highlighted === slug) {
        layer.setStyle({ fillOpacity: 0.6, fillColor: "#f39c12", color: "#e67e22", weight: 3 });
        layer.bringToFront();
      } else {
        layer.setStyle({ fillOpacity: 0.15, fillColor: "#e74c3c", color: "#c0392b", weight: 2 });
      }
    });
  }, [highlighted]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const match = barrios.find((b) =>
      b.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (match && mapRef.current) {
      setHighlighted(match.slug);
      mapRef.current.flyTo([match.lat, match.lng], 14, { animate: true, duration: 1 });
    }
  };

  const restaurantListSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Donatello Pizza",
    "description": "Pizzería artesanal con delivery en todos los barrios de Santiago de los Caballeros, República Dominicana.",
    "telephone": "(809) 555-1234",
    "email": "hola@donatello.pizza",
    "servesCuisine": ["Pizza Estilo Detroit", "Pizza Estilo Nueva York", "Pizza Siciliana"],
    "url": typeof window !== "undefined" ? window.location.origin : "",
    "hasMenu": typeof window !== "undefined" ? `${window.location.origin}/menu` : "",
    "priceRange": "RD$",
    "currenciesAccepted": "DOP",
    "areaServed": barrios.map((b) => ({
      "@type": "Place",
      "name": `${b.nombre}, Santiago de los Caballeros`,
    })),
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
      "latitude": "19.4517",
      "longitude": "-70.6970"
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantListSchema) }}
      />
      <Header />
      <main className="pt-20 min-h-screen bg-gradient-to-b from-garlic-cream to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-10">
            <Badge className="bg-tomato-red text-white mb-4">Delivery por barrio</Badge>
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4">
              Pizza Detroit en tu Barrio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Donatello lleva pizza auténtica estilo Detroit a todos los barrios de Santiago de los Caballeros. Busca tu barrio en el mapa.
            </p>
          </div>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex gap-3 max-w-xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                data-testid="input-barrio-search"
                type="text"
                placeholder="Busca tu barrio (ej: Los Jardines)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              data-testid="button-buscar-barrio"
              type="submit"
              className="bg-tomato-red hover:bg-red-600 text-white"
            >
              <Pizza className="w-4 h-4 mr-2" />
              Buscar
            </Button>
          </form>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 mb-12">
            <div
              ref={mapContainerRef}
              style={{ height: "500px", width: "100%" }}
              data-testid="map-barrios"
            />
          </div>
          <p className="text-center text-sm text-gray-500 mb-12">
            Haz clic en cualquier barrio del mapa para ver más información y ordenar pizza con delivery.
          </p>

          {/* Barrio Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-playfair font-bold text-warm-gray text-center mb-8">
              Todos los Barrios con Delivery
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {filtered.map((barrio) => (
                <button
                  key={barrio.slug}
                  data-testid={`link-barrio-${barrio.slug}`}
                  onClick={() => setLocation(`/barrios/${barrio.slug}`)}
                  className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-200 hover:border-tomato-red hover:shadow-md transition-all duration-200 text-left group"
                >
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-tomato-red flex-shrink-0" />
                    <span className="text-sm font-medium text-warm-gray group-hover:text-tomato-red transition-colors">
                      {barrio.nombre}
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-tomato-red transition-colors flex-shrink-0" />
                </button>
              ))}
            </div>
            {filtered.length === 0 && (
              <p className="text-center text-gray-500 mt-8">
                No se encontró ningún barrio con ese nombre.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
