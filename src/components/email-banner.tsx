import { useState } from "react";

export default function EmailBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage("¡Listo! Tu oferta está en camino 🍕");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Algo salió mal, intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Intenta de nuevo.");
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-tomato-red via-red-600 to-tomato-red py-3 px-4 z-[60] relative shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-white">
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
