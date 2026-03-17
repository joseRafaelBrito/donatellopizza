export default function CraftProcess() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-garlic-cream to-white relative">
      {/* Curved bottom divider */}
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
          <div className="text-center group">
            <div className="relative w-full h-64 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 transform group-hover:scale-105 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4 animate-fade-in">Artesanía Estilo Detroit</h3>
            <p className="text-gray-600 animate-slide-up">Pizza auténtica estilo Detroit con la característica forma cuadrada y bordes caramelizados, perfeccionada durante décadas.</p>
          </div>

          <div className="text-center group">
            <div className="relative w-full h-64 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 transform group-hover:scale-105 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69417c150a9905a775749bf38c861c7e9&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4 animate-fade-in">Tradición Nueva York</h3>
            <p className="text-gray-600 animate-slide-up">Clásica pizza estilo Nueva York de corteza delgada, lanzada a mano y doblada a la manera tradicional.</p>
          </div>

          <div className="text-center group">
            <div className="relative w-full h-64 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 transform group-hover:scale-105 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://player.vimeo.com/external/429553244.sd.mp4?s=bf98f4e9a029b95ea05d8b902c43e462e9e83e0a&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4 animate-fade-in">Maestría al Horno de Leña</h3>
            <p className="text-gray-600 animate-slide-up">Nuestros hornos de leña crean el tostado y sabor perfectos que hacen de cada bocado una experiencia inolvidable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
