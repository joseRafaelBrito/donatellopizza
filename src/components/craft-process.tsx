export default function CraftProcess() {
  const PLACEHOLDER_VIDEOS = [
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  ];

  const cards = [
    {
      src: PLACEHOLDER_VIDEOS[0],
      title: "Artesanía Estilo Detroit",
      desc: "Pizza auténtica estilo Detroit con la característica forma cuadrada y bordes caramelizados, perfeccionada durante décadas.",
    },
    {
      src: PLACEHOLDER_VIDEOS[1],
      title: "Tradición Nueva York",
      desc: "Clásica pizza estilo Nueva York de corteza delgada, lanzada a mano y doblada a la manera tradicional.",
    },
    {
      src: PLACEHOLDER_VIDEOS[2],
      title: "Maestría al Horno de Leña",
      desc: "Nuestros hornos de leña crean el tostado y sabor perfectos que hacen de cada bocado una experiencia inolvidable.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-garlic-cream to-white relative">
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z" fill="#fff"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4">
            El Arte de Hacer Pizza
          </h2>
          <p className="text-xl text-gray-600">Cada pizza cuenta una historia de pasión y tradición</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div key={card.title} className="text-center group">
              <div className="relative w-full h-[420px] rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 mb-6 transform group-hover:scale-[1.02] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  data-testid={`video-craft-${card.title.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  <source src={card.src} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                  <h3 className="text-xl font-playfair font-bold text-white drop-shadow mb-1">
                    {card.title}
                  </h3>
                  <p className="text-white/85 text-sm leading-relaxed drop-shadow">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
