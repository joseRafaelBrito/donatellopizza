import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Pizza, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-garlic-cream to-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <Pizza className="w-24 h-24 mx-auto text-tomato-red opacity-60 mb-4" />
          <h1 className="text-8xl font-playfair font-bold text-warm-gray mb-2">404</h1>
          <h2 className="text-3xl font-playfair font-bold text-warm-gray mb-4">
            ¡Página No Encontrada!
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Parece que la página que buscas se ha quemado en el horno.
          </p>
          <p className="text-lg text-gray-500">
            No te preocupes — aún tenemos pizza deliciosa esperándote.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => setLocation("/")}
            className="bg-tomato-red hover:bg-red-600 text-white"
            size="lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Ir al Inicio
          </Button>

          <Button
            onClick={() => setLocation("/menu")}
            variant="outline"
            size="lg"
          >
            <Pizza className="w-5 h-5 mr-2" />
            Ver el Menú
          </Button>

          <Button
            onClick={() => window.history.back()}
            variant="ghost"
            size="lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver Atrás
          </Button>
        </div>
      </div>
    </div>
  );
}
