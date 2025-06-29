import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-garlic-cream to-white relative">
      {/* Curved bottom divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#3c4142"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-warm-gray mb-4">
            Visit Our Kitchen
          </h2>
          <p className="text-xl text-gray-600">Experience the craft firsthand</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-warm-gray mb-2">Name</Label>
                <Input 
                  id="name"
                  type="text" 
                  required
                  className="w-full focus:ring-2 focus:ring-tomato-red focus:border-transparent transition-colors duration-300"
                />
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-warm-gray mb-2">Email</Label>
                <Input 
                  id="email"
                  type="email" 
                  required
                  className="w-full focus:ring-2 focus:ring-tomato-red focus:border-transparent transition-colors duration-300"
                />
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-warm-gray mb-2">Message</Label>
                <Textarea 
                  id="message"
                  rows={4} 
                  required
                  className="w-full focus:ring-2 focus:ring-tomato-red focus:border-transparent transition-colors duration-300"
                />
              </div>
              <Button 
                type="submit" 
                disabled={isSubmitting || isSubmitted}
                className={`font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isSubmitted 
                    ? 'bg-green-500 hover:bg-green-600' 
                    : 'bg-tomato-red hover:bg-red-600'
                } text-white`}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-warm-gray mb-6">Location & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-map-marker-alt text-tomato-red text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-warm-gray">123 Artisan Street</p>
                    <p className="text-gray-600">Craft District, CD 12345</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-clock text-tomato-red text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-warm-gray">Opening Hours</p>
                    <p className="text-gray-600">Mon-Thu: 11am - 10pm</p>
                    <p className="text-gray-600">Fri-Sat: 11am - 11pm</p>
                    <p className="text-gray-600">Sun: 12pm - 9pm</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-phone text-tomato-red text-xl mt-1"></i>
                  <div>
                    <p className="font-semibold text-warm-gray">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-300 h-64 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <i className="fas fa-map text-4xl text-gray-500 mb-2"></i>
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Google Maps integration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
