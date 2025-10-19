export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      review: "The best pizza I've ever had! The Detroit style is absolutely incredible - crispy edges, perfect cheese, and that sauce on top is genius!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      review: "Authentic New York style pizza that takes me back to my childhood in Brooklyn. The wood-fired oven makes all the difference!",
      rating: 5
    },
    {
      name: "Emily Chen",
      review: "The craft and attention to detail is evident in every bite. You can truly taste the passion that goes into every pizza!",
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600">Taste the difference that passion makes</p>
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
