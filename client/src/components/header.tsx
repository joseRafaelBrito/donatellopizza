import { useState, useEffect } from "react";
import logoImage from "@assets/logo_1_1_320x320_1749689353534.png";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PizzaSliceButton from "@/components/pizza-slice-button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPreorderModalOpen, setIsPreorderModalOpen] = useState(false);
  const [preorderForm, setPreorderForm] = useState({
    name: '',
    phone: '',
    pizza: '',
    quantity: '1',
    pickupTime: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handlePreorderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate preorder submission
    toast({
      title: "Preorder Confirmed!",
      description: `Your ${preorderForm.pizza} pizza will be ready for pickup at ${preorderForm.pickupTime}. We'll call you at ${preorderForm.phone}.`,
    });
    setIsPreorderModalOpen(false);
    setPreorderForm({
      name: '',
      phone: '',
      pizza: '',
      quantity: '1',
      pickupTime: ''
    });
  };

  return (
    <header 
      id="header" 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-warm-gray bg-opacity-95 nav-blur shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover-glow transition-all duration-300 overflow-hidden animate-float">
              <img 
                src={logoImage} 
                alt="Donatello Logo" 
                className="w-full h-full object-cover rounded-full transform hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-playfair font-bold text-white">Donatello</h1>
              <p className="text-sm text-garlic-cream font-dancing">We believe in the craft</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 animate-fade-in">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => window.location.href = '/menu'}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              Order
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-cheese-gold transition-colors duration-300 font-medium"
            >
              Contact
            </button>
            <PizzaSliceButton onClick={() => setIsPreorderModalOpen(true)}>
              Preordenar
            </PizzaSliceButton>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-cheese-gold transition-colors duration-300"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-warm-gray bg-opacity-95 nav-blur rounded-lg mt-2 mx-4`}>
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              Home
            </button>
            <button 
              onClick={() => window.location.href = '/menu'}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              Menu
            </button>
            <button 
              onClick={() => scrollToSection('order')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              Order
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-white hover:text-cheese-gold transition-colors duration-300 font-medium py-2"
            >
              Contact
            </button>
            <div className="mt-2 flex justify-center">
              <PizzaSliceButton onClick={() => setIsPreorderModalOpen(true)}>
                Preordenar
              </PizzaSliceButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Preorder Modal */}
      <Dialog open={isPreorderModalOpen} onOpenChange={setIsPreorderModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-playfair text-warm-gray text-bounce">Preordena Tu Pizza</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePreorderSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={preorderForm.name}
                onChange={(e) => setPreorderForm({...preorderForm, name: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={preorderForm.phone}
                onChange={(e) => setPreorderForm({...preorderForm, phone: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="pizza">Pizza Type</Label>
              <Select value={preorderForm.pizza} onValueChange={(value) => setPreorderForm({...preorderForm, pizza: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose your pizza" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="detroit-classic">Detroit Classic</SelectItem>
                  <SelectItem value="detroit-pepperoni">Detroit Pepperoni</SelectItem>
                  <SelectItem value="ny-margherita">NY Margherita</SelectItem>
                  <SelectItem value="ny-pepperoni">NY Pepperoni</SelectItem>
                  <SelectItem value="meat-lovers">Meat Lovers</SelectItem>
                  <SelectItem value="veggie-deluxe">Veggie Deluxe</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="quantity">Quantity</Label>
              <Select value={preorderForm.quantity} onValueChange={(value) => setPreorderForm({...preorderForm, quantity: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="pickupTime">Pickup Time</Label>
              <Input
                id="pickupTime"
                type="time"
                value={preorderForm.pickupTime}
                onChange={(e) => setPreorderForm({...preorderForm, pickupTime: e.target.value})}
                required
              />
            </div>
            <Button type="submit" className="w-full bg-tomato-red hover:bg-red-600 hover-lift transition-all duration-300">
              Confirmar Preorden
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </header>
  );
}
