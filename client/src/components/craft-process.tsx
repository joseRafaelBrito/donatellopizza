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
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Hands kneading pizza dough" 
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 transform group-hover:scale-105"
            />
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4">Hand-Crafted Dough</h3>
            <p className="text-gray-600">Our dough is made fresh daily using traditional techniques passed down through generations.</p>
          </div>
          
          <div className="text-center group">
            <img 
              src="https://pixabay.com/get/ga387524d60ab3c557a52230b3015944d7d24d8480a1807f9690d8db1142d68092dfe648f6361ff6959a3bf74fec6dde23704cfe9b0884f9168280b4e420788f1_1280.jpg" 
              alt="Fresh pizza ingredients" 
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 transform group-hover:scale-105"
            />
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4">Premium Ingredients</h3>
            <p className="text-gray-600">We source only the finest ingredients, from imported Italian tomatoes to local artisan cheeses.</p>
          </div>
          
          <div className="text-center group">
            <img 
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Wood-fired pizza oven with flames" 
              className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 mb-6 transform group-hover:scale-105"
            />
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-4">Wood-Fired Perfection</h3>
            <p className="text-gray-600">Our authentic wood-fired ovens create the perfect char and flavor that makes every bite memorable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
