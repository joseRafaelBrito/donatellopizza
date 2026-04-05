import { Link, useLocation } from "wouter";
import { barrios } from "@/data/barrios";
import { homeHashUrl } from "@/lib/publicAssetUrl";

export default function Footer() {
  const [, setLocation] = useLocation();
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-gray text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cheese-gold to-tomato-red rounded-full flex items-center justify-center">
                <i className="fas fa-pizza-slice text-white text-lg"></i>
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold">Donatello</h3>
                <p className="text-sm text-cheese-gold font-dancing">Creemos en el oficio</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Elaboramos pizzas artesanales con pasión y tradición desde el primer día.
              Cada pizza cuenta una historia de calidad, artesanía y excelencia culinaria.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook de Donatello Pizza"
                className="w-10 h-10 bg-tomato-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                aria-label="Instagram de Donatello Pizza"
                className="w-10 h-10 bg-tomato-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="Twitter de Donatello Pizza"
                className="w-10 h-10 bg-tomato-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                aria-label="Yelp de Donatello Pizza"
                className="w-10 h-10 bg-tomato-red rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
              >
                <i className="fab fa-yelp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-cheese-gold transition-colors duration-300">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-cheese-gold transition-colors duration-300">
                  Menú de Pizzas
                </Link>
              </li>
              <li>
                <Link href="/barrios" className="text-gray-300 hover:text-cheese-gold transition-colors duration-300">
                  Pizza por Barrios
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-gray-300 hover:text-cheese-gold transition-colors duration-300">
                  Ordenar Ahora
                </Link>
              </li>
              <li>
                <a href={homeHashUrl("contact")} className="text-gray-300 hover:text-cheese-gold transition-colors duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Delivery en Santiago</h4>
            <ul className="space-y-1">
              {barrios.slice(0, 10).map((barrio) => (
                <li key={barrio.slug}>
                  <Link
                    href={`/barrios/${barrio.slug}`}
                    className="text-gray-400 hover:text-cheese-gold transition-colors duration-300 text-sm"
                  >
                    Pizza en {barrio.nombre}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/barrios"
                  className="text-tomato-red hover:text-cheese-gold transition-colors duration-300 text-sm font-medium"
                >
                  Ver todos los barrios →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Información de Contacto</h4>
            <div className="space-y-2 text-gray-300">
              <p>Av. Juan Pablo Duarte</p>
              <p>Santiago de los Caballeros, RD</p>
              <p>(809) 555-1234</p>
              <p>hola@donatello.pizza</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Donatello Pizza. Todos los derechos reservados.
            <span className="text-tomato-red font-dancing ml-2">Hecho con ❤️ por Jose Estevez</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
