export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Martínez",
      review: "¡La mejor pizza que he probado! El estilo Detroit es absolutamente increíble: bordes crujientes, queso perfecto y esa salsa por encima es un genio.",
      rating: 5
    },
    {
      name: "María Rodríguez",
      review: "Pizza auténtica estilo Nueva York que me transporta de vuelta a mis viajes. ¡El horno de leña marca la diferencia!",
      rating: 5
    },
    {
      name: "José Peña",
      review: "La artesanía y atención al detalle se nota en cada bocado. ¡Se siente la pasión que hay detrás de cada pizza!",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`fas fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600">Siente la diferencia que hace la pasión</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-garlic-cream p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cheese-gold rounded-full flex items-center justify-center mr-4">
                  <i className="fas fa-user text-white"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-warm-gray">{testimonial.name}</h4>
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
