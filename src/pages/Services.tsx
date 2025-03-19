import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cake, Utensils, GlassWater, Clock, DollarSign, Truck, ArrowLeft, Calendar, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import MobileMenu from "@/components/layout/MobileMenu";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Services = () => {
  const { theme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
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
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#221F26] text-white' : 'bg-[#FFFCF7]'}`}>
      {/* Navigation */}
      <Navbar/>


      {/* Services Hero Section */}
      <section className={`py-16 md:py-24 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-gradient-to-r from-[#FEC6A1]/30 to-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 animate-on-scroll">
              <Link to="/" className="inline-flex items-center text-[#c39d5e] mb-6 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
              </Link>
              <h1 className={`text-3xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-6`}>
                Our <span className="text-[#c39d5e]">Premium</span> Services
              </h1>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} text-lg mb-8`}>
                From custom cakes for special occasions to catering for large events, we offer a comprehensive range of bakery services tailored to your needs.
              </p>
              <div className="flex gap-3 items-center mb-6">
                <div className="p-2 rounded-full bg-[#c39d5e]/20">
                  <Globe className="w-6 h-6 text-[#c39d5e]" />
                </div>
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
                  Serving the community with excellence since 1995
                </p>
              </div>
            </div>
            <div className="md:w-1/2 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Custom cake decoration" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/10'}`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-[#F1F1F1]'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>What We Offer</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
              Our <span className="text-[#c39d5e]">Specialty</span> Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                icon: <Cake className="w-10 h-10 text-[#c39d5e]" />, 
                title: "Custom Cakes", 
                description: "Unique, made-to-order cakes for birthdays, weddings, anniversaries and special events",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              },
              { 
                icon: <Utensils className="w-10 h-10 text-[#c39d5e]" />, 
                title: "Event Catering", 
                description: "Full-service bakery catering for corporate events, parties, and special occasions",
                image: "https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              },
              { 
                icon: <Truck className="w-10 h-10 text-[#c39d5e]" />, 
                title: "Delivery Services", 
                description: "Convenient delivery options to bring our fresh baked goods directly to your doorstep",
                image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              },
              { 
                icon: <Calendar className="w-10 h-10 text-[#c39d5e]" />, 
                title: "Baking Classes", 
                description: "Learn the art of baking with our professional instructors in a fun, hands-on environment",
                image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className={`${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} rounded-lg overflow-hidden animate-on-scroll hover:shadow-lg transition-all duration-300 group`} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${theme === 'dark' ? 'bg-[#c39d5e]/20' : 'bg-[#FEF7CD]'}`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>{service.title}</h3>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} mt-2`}>{service.description}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-2 border-[#c39d5e] text-[#c39d5e] hover:bg-[#c39d5e]/10">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>Our Process</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>
              How We <span className="text-[#c39d5e]">Work</span>
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} max-w-2xl mx-auto`}>
              From consultation to delivery, we ensure a seamless experience every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className={`hidden md:block absolute top-1/4 left-1/2 h-0.5 w-[70%] -translate-x-1/2 ${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-[#FEC6A1]/30'}`}></div>
            
            {[
              { 
                icon: <Calendar className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Consultation", 
                description: "Schedule a meeting to discuss your needs and preferences", 
                step: "01"
              },
              { 
                icon: <Utensils className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Creation", 
                description: "Our expert bakers craft your order with precision and care", 
                step: "02"
              },
              { 
                icon: <Truck className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Delivery", 
                description: "We deliver your order fresh and on time to your location", 
                step: "03"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className={`relative text-center animate-on-scroll z-10`} 
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-[#FEF7CD]'} rounded-full flex justify-center items-center mx-auto mb-6 relative`}>
                  {step.icon}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#c39d5e] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {step.step}
                  </span>
                </div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-2`}>{step.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-[#F1F1F1]'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>Our Creations</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>
              Gallery of <span className="text-[#c39d5e]">Our Work</span>
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} max-w-2xl mx-auto`}>
              Browse through a selection of our custom creations and let your imagination run wild
            </p>
          </div>

          <div className="image-gallery animate-on-scroll">
            <div className="image-gallery-item aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Wedding cake" />
            </div>
            <div className="image-gallery-item aspect-square">
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Fruit cake" />
            </div>
            <div className="image-gallery-item aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Birthday cake" />
            </div>
            <div className="image-gallery-item aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Cupcakes" />
            </div>
            <div className="image-gallery-item aspect-square">
              <img src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Fruit cake" />
            </div>
            <div className="image-gallery-item aspect-square">
              <img src="https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Pastries" />
            </div>
            <div className="image-gallery-item aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1606188074044-fcd750f6996a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Custom cake" />
            </div>
            <div className="image-gallery-item aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Birthday cake" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Info Cards */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>Service Details</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>
              Pricing & <span className="text-[#c39d5e]">Information</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <DollarSign className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Transparent Pricing", 
                description: "Our pricing is clear and upfront with no hidden fees or charges" 
              },
              { 
                icon: <Clock className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Advance Booking", 
                description: "Custom cakes require 3-7 days notice depending on complexity" 
              },
              { 
                icon: <GlassWater className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Dietary Options", 
                description: "We offer gluten-free, vegan, and dairy-free options upon request" 
              }
            ].map((info, index) => (
              <div 
                key={index} 
                className={`${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-[#F1F1F1]'} p-8 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300`} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-[#c39d5e]/20' : 'bg-[#FEF7CD]'} rounded-full flex justify-center items-center mb-6`}>
                  {info.icon}
                </div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-2`}>{info.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#1a181d]' : 'bg-[#FEC6A1]/20'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-6`}>
              Ready to <span className="text-[#c39d5e]">Order?</span>
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} mb-8`}>
              Contact us today to discuss your requirements and let us create something special for your next event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#c39d5e] hover:bg-[#b38d4e] text-white rounded-md px-8 py-3 transition-transform hover:scale-105 animate-pulse-gold">
                Get a Quote
              </Button>
              <Button variant="outline" className="border-[#c39d5e] text-[#c39d5e] rounded-md px-8 py-3 hover:bg-[#c39d5e]/10 transition-transform hover:scale-105">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
