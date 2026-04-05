import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/** Approx. Av. Juan Pablo Duarte, Santiago de los Caballeros */
const LOCATION = { lat: 19.4517, lng: -70.697 };

export default function ContactLocationMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<{ remove: () => void } | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let cancelled = false;

    import("leaflet").then((Leaflet) => {
      if (cancelled || !containerRef.current) return;
      const L = Leaflet.default;

      const DefaultIcon = L.icon({
        iconUrl: markerIcon,
        iconRetinaUrl: markerIcon2x,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });
      L.Marker.prototype.options.icon = DefaultIcon;

      const map = L.map(containerRef.current, {
        center: [LOCATION.lat, LOCATION.lng],
        zoom: 14,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18,
      }).addTo(map);

      L.marker([LOCATION.lat, LOCATION.lng])
        .addTo(map)
        .bindPopup("<strong>Donatello Pizza</strong><br/>Av. Juan Pablo Duarte, Santiago");

      map.whenReady(() => {
        requestAnimationFrame(() => map.invalidateSize());
      });

      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-64 w-full rounded-xl overflow-hidden border border-gray-200 shadow-sm relative z-0"
      aria-label="Mapa de ubicación Donatello Pizza"
    />
  );
}
