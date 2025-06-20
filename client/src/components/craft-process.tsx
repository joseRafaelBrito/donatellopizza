export default function CraftProcess() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-garlic-cream to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4">
            The Art of Pizza Making
          </h2>
          <p className="text-xl text-gray-600">Every pizza tells a story of passion and tradition</p>
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
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4 animate-fade-in">Detroit Style Craft</h3>
            <p className="text-gray-600 animate-slide-up">Authentic Detroit-style pizza with signature square shape and caramelized edges, perfected over decades.</p>
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
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4 animate-fade-in">New York Tradition</h3>
            <p className="text-gray-600 animate-slide-up">Classic thin-crust New York style pizza, hand-tossed and folded the traditional way.</p>
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
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4 animate-fade-in">Wood-Fired Mastery</h3>
            <p className="text-gray-600 animate-slide-up">Our authentic wood-fired ovens create the perfect char and flavor that makes every bite memorable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
