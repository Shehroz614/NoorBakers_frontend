import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { CakeSlice, Coffee, Star, MapPin, Clock, Phone, ChevronRight, ShoppingBag, Award, Heart, Mail, Send, ArrowRight, MessageCircle, User } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Contact = () => {


  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 useEffect(() => {
    // Animation for elements on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    // Handle navbar visibility on scroll
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = prevScrollPos < currentScrollPos;
      const isScrolledUp = prevScrollPos > currentScrollPos;
      const isAtTop = currentScrollPos < 10;
      
      // Only hide navbar when scrolling down and not at the top
      if (isScrolledDown && !isAtTop && currentScrollPos > 100) {
        setVisible(false);
      } else if (isScrolledUp || isAtTop) {
        setVisible(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    // Reset form after submission
    setName("");
    setEmail("");
    setMessage("");
    // Show a success message (in a real app you'd use a toast notification)
    alert("Thank you for your message! We'll get back to you soon.");
  };

  

  return (
    <div className={` ${theme === 'dark' ? 'bg-[#221F26] text-white' : 'bg-[#FFFCF7]'}`}>
     <Navbar/>
      {/* Contact Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-gradient-to-r from-[#F1F1F1] to-[#FFFCF7]'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="bg-cover bg-center rounded-lg h-[300px] md:h-auto animate-on-scroll overflow-hidden" style={{ transition: 'all 0.6s ease-out' }}>adcadc
              <img 
                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Our bakery" 
                className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-700" 
              />
            </div>
            <div className="flex flex-col justify-center items-center animate-on-scroll text-center" style={{ transition: 'all 0.6s ease-out', transitionDelay: '150ms' }}>
              <div className="text-center mb-2">
                <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e]`}>Get In Touch</span>
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-8 text-center`}>Visit <span className="text-[#c39d5e]">Our</span> Office</h2>
              <div className="space-y-6 w-full max-w-md mx-auto">
                <div className="flex flex-col items-center gap-4">
                  <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-white'} shadow-sm`}>
                    <MapPin className="w-5 h-5 text-[#c39d5e]" />
                  </div>
                  <div className="text-center">
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} text-lg mb-1`}>Location</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>123 Bakery Street, Sweet Avenue, NY 10001</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-white'} shadow-sm`}>
                    <Clock className="w-5 h-5 text-[#c39d5e]" />
                  </div>
                  <div className="text-center">
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} text-lg mb-1`}>Hours</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>Monday - Friday: 7:00 AM - 8:00 PM</p>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                  <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-white'} shadow-sm`}>
                    <Phone className="w-5 h-5 text-[#c39d5e]" />
                  </div>
                  <div className="text-center">
                    <h3 className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} text-lg mb-1`}>Contact</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>Phone: (123) 456-7890</p>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>Email: info@noorbakers.com</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full text-center mt-6">
                <Button className="bg-[#c39d5e] hover:bg-[#b38d4e] text-white rounded-md px-8 py-3 mx-auto transition-transform hover:scale-105">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beautiful Contact Us Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} transition-colors duration-300 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="inline-block mb-2">
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e]`}>Contact Us</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>
              We'd Love To <span className="text-[#c39d5e]">Hear</span> From You
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} max-w-2xl mx-auto`}>
              Have a question, special request, or want to place an order? Drop us a message below and we'll get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form with enhanced styling */}
            <div className={`${theme === 'dark' ? 'bg-[#3a3741] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.3)]' : 'bg-[#F9F8FF] shadow-lg'} rounded-2xl p-8 md:p-10 animate-on-scroll`} style={{ transition: 'all 0.6s ease-out' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-[#403E43]'}`}>
                    Your Name
                  </label>
                  <div className={`relative rounded-md shadow-sm ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-[#c39d5e]" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`block w-full rounded-md border-0 py-3 pl-10 ${theme === 'dark' ? 'bg-[#2d2a33] text-white placeholder:text-gray-400' : 'bg-white text-[#403E43] placeholder:text-gray-500'} focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none`}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-[#403E43]'}`}>
                    Email Address
                  </label>
                  <div className={`relative rounded-md shadow-sm ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'}`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-[#c39d5e]" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`block w-full rounded-md border-0 py-3 pl-10 ${theme === 'dark' ? 'bg-[#2d2a33] text-white placeholder:text-gray-400' : 'bg-white text-[#403E43] placeholder:text-gray-500'} focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none`}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-200' : 'text-[#403E43]'}`}>
                    Your Message
                  </label>
                  <div className={`relative rounded-md shadow-sm ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'}`}>
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <MessageCircle className="h-5 w-5 text-[#c39d5e]" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className={`block w-full rounded-md border-0 py-3 pl-10 ${theme === 'dark' ? 'bg-[#2d2a33] text-white placeholder:text-gray-400' : 'bg-white text-[#403E43] placeholder:text-gray-500'} focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none`}
                      placeholder="Tell us about your inquiry or special order request..."
                      required
                    />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-[#c39d5e] hover:bg-[#b38d4e] text-white rounded-md py-3 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
            
            {/* Decorative Side with Images */}
            <div className="hidden lg:block relative h-[500px] animate-on-scroll" style={{ transition: 'all 0.6s ease-out', transitionDelay: '150ms' }}>
              {/* Main bakery image */}
              <div className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Our bakery" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Smaller image 1 - top right */}
              <div className="absolute top-10 right-0 w-1/2 h-1/2 overflow-hidden rounded-lg shadow-lg" style={{ animationDelay: "0.3s" }}>
                <img 
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Delicious cake" 
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500" 
                />
              </div>
              
              {/* Smaller image 2 - bottom right */}
              <div className="absolute bottom-0 right-10 w-1/2 h-1/2 overflow-hidden rounded-lg shadow-lg" style={{ animationDelay: "0.6s" }}>
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Fresh croissants" 
                  className="w-full h-full object-cover hover:scale-110 transition-all duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;