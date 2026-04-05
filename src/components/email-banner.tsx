import { useState, useEffect } from "react";
import { submitBannerLead } from "@/lib/subscribeEmail";

interface EmailBannerProps {
  onDismiss: () => void;
  hidden?: boolean;
}

export default function EmailBanner({ onDismiss, hidden = false }: EmailBannerProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "success") {
      const t = setTimeout(onDismiss, 3000);
      return () => clearTimeout(t);
    }
  }, [status, onDismiss]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const result = await submitBannerLead(email);
      if (result.ok) {
        setStatus("success");
        setMessage("¡Listo! Tu oferta está en camino 🍕");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(result.error);
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Intenta de nuevo.");
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-tomato-red via-red-600 to-tomato-red py-[14px] px-4 z-[70] shadow-md"
      style={{
        transform: hidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 0.35s ease",
      }}
    >
      <button
        onClick={onDismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-lg leading-none"
        aria-label="Cerrar"
      >✕</button>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white pr-6">
        {status === "success" ? (
          <p className="font-semibold text-sm sm:text-base text-center animate-fade-in">
            {message}
          </p>
        ) : (
          <>
            <p className="text-sm sm:text-base font-semibold whitespace-nowrap drop-shadow">
              🍕 <span className="font-bold">10% de descuento</span> en tu primera orden —
              <span className="hidden sm:inline"> deja tu correo y reclama la oferta</span>
              <span className="sm:hidden"> reclamar</span>
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 w-full sm:w-auto"
              data-testid="email-banner-form"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                disabled={status === "loading"}
                data-testid="input-banner-email"
                className="flex-1 sm:w-56 px-3 py-1.5 rounded-full text-sm text-gray-900 placeholder-gray-400 border-2 border-white/40 focus:outline-none focus:border-white bg-white/95 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                data-testid="button-banner-submit"
                className="bg-cheese-gold hover:bg-yellow-400 text-warm-gray font-bold text-sm px-4 py-1.5 rounded-full transition-colors whitespace-nowrap disabled:opacity-60 shadow"
              >
                {status === "loading" ? "..." : "Reclamar"}
              </button>
              {status === "error" && (
                <p className="text-xs text-yellow-200 whitespace-nowrap">{message}</p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
