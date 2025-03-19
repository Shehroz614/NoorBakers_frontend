import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CakeSlice, Coffee, Star, MapPin, Clock, Phone, ChevronRight, ShoppingBag, Award, Heart, Mail, Send, ArrowRight, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import MobileMenu from "@/components/layout/MobileMenu";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import logodark from "/Mediamodifier-Design (4) (1).svg";
import logowhite from "/Mediamodifier-Design (5) (1).svg";


const Index = () => {
  const { theme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

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

  const instagramPosts = [
    "https://images.unsplash.com/photo-1572897306051-abf270479682?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681826507324-0b3c43928753?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623246123320-0d6636755796?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553452118-621e1f860f43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   "https://images.unsplash.com/photo-1572897306051-abf270479682?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681826507324-0b3c43928753?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623246123320-0d6636755796?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1553452118-621e1f860f43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#221F26] text-white' : 'bg-[#FFFCF7]'}`}>
      {/* Navigation - Modified to hide/show on scroll */}
      <Navbar/>

      {/* Redesigned Hero Section with large background image */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <img 
            src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Bakery hero" 
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 w-full h-full ${theme === 'dark' ? 'bg-[#221F26]/70' : 'bg-[#FFFCF7]/60'}`}></div>
        </div>
        
        {/* Animated Pastry Elements floating in from sides */}
        <div className="absolute -left-20 top-1/4 opacity-70 animate-slide-in-left">
          <img 
            src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
            alt="Floating pastry" 
            className="w-64 h-64 object-contain rounded-full rotate-12 shadow-xl" 
          />
        </div>
        <div className="absolute -right-20 top-1/3 opacity-70 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
          <img 
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
            alt="Floating cake" 
            className="w-64 h-64 object-contain rounded-full -rotate-12 shadow-xl" 
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="max-w-2xl mx-auto text-center py-12 md:py-20">
            <div className="slide-in">
              <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-[#c39d5e]/30 text-[#c39d5e] mb-4">
                Artisan Bakery Excellence
              </span>
            </div>
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} leading-tight mb-6 fade-in`}>
              <span className="text-[#c39d5e]">Sweet</span> Moments <span className="text-[#c39d5e]">Begin</span> Here
            </h1>
            <p className={`${theme === 'dark' ? 'text-gray-100' : 'text-[#403E43]'} text-lg md:text-xl mb-8 fade-in delay-200 max-w-xl mx-auto`}>
              Experience the magic of tradition blended with innovation in every handcrafted delight for every occasion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in delay-300">
              
              <NavLink to={"/services"}>

              <Button className="bg-[#c39d5e] hover:bg-[#b38d4e] text-white rounded-md px-6 py-3 transition-transform hover:scale-105 animate-pulse-gold">
                Services <ShoppingBag className="ml-1 h-4 w-4" />
              </Button>

              </NavLink>
              <NavLink to={"/about"}>


              <Button variant="outline" className={`border-[#c39d5e] text-[#c39d5e] rounded-md px-6 py-3 ${theme === 'dark' ? 'hover:bg-[#c39d5e]/20' : ''} transition-transform hover:scale-105`}>
                About us <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              </NavLink>
            </div>
            
            {/* Enhanced social proof with awards */}
            <div className="mt-10 flex items-center gap-3 justify-center slide-in delay-400">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#c39d5e]">
                    <img 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className={`text-sm ${theme === 'dark' ? 'text-gray-100' : 'text-[#403E43]'}`}>
                <span className="font-bold text-[#c39d5e]">4.9/5 </span> 
                <span>from 2k+ happy customers</span>
              </div>
              <div className="flex items-center ml-2">
                <Star className="h-4 w-4 text-[#c39d5e] fill-[#c39d5e]" />
                <Star className="h-4 w-4 text-[#c39d5e] fill-[#c39d5e]" />
                <Star className="h-4 w-4 text-[#c39d5e] fill-[#c39d5e]" />
                <Star className="h-4 w-4 text-[#c39d5e] fill-[#c39d5e]" />
                <Star className="h-4 w-4 text-[#c39d5e] fill-[#c39d5e]" />
              </div>
            </div>
            
            {/* Awards badge */}
            <div className="mt-6 flex justify-center slide-in delay-500">
              
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Added "Handcrafted Delights" text here */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-[#F1F1F1]'} transition-colors duration-300 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          {/* Animated pastry floating in the background */}
          <div className="absolute -right-20 top-20 opacity-20 float">
            <img 
              src="https://images.unsplash.com/photo-1600617953089-c42ac12fe5db?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="Floating pastry" 
              className="w-64 h-64 object-contain rounded-full rotate-12" 
            />
          </div>
          
          <div className="text-center mb-12 animate-on-scroll" style={{ transition: 'all 0.6s ease-out' }}>
            <div className="inline-block mb-2">
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e]`}>Why Choose Us</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>
              <span className="text-[#c39d5e]">Handcrafted Delights</span> For Every Occasion
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} max-w-2xl mx-auto`}>
              Our commitment to quality ingredients and expert craftsmanship makes us the premier destination for your sweet cravings
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <CakeSlice className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Premium Quality", 
                description: "We use only the finest ingredients to create our delicious baked goods and sweets" 
              },
              { 
                icon: <Coffee className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Artisan Crafted", 
                description: "Each item is handcrafted with attention to detail by our skilled pastry chefs" 
              },
              { 
                icon: <Star className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Exceptional Service", 
                description: "Our friendly staff is dedicated to providing you with a delightful experience" 
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className={`${theme === 'dark' ? 'bg-[#2d2a33] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)]' : 'bg-white shadow-sm'} p-8 rounded-lg text-center animate-on-scroll hover:translate-y-[-5px] transition-all duration-300`} 
                style={{ transition: 'all 0.6s ease-out', transitionDelay: `${index * 150}ms` }}
              >
                <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-[#FEF7CD]/10' : 'bg-[#FEF7CD]'} rounded-full flex justify-center items-center mx-auto mb-4 float`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-2`}>{feature.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} transition-colors duration-300 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          {/* Animated bakery elements floating */}
          <div className="absolute -left-16 bottom-20 opacity-20 float">
            <img 
              src="https://picsum.photos/seed/cake1/300/300" 
              alt="Floating cake" 
              className="w-48 h-48 object-contain rounded-full -rotate-12" 
            />
          </div>
          
          <div className="text-center mb-12 animate-on-scroll" style={{ transition: 'all 0.6s ease-out' }}>
            <div className="inline-block mb-2">
              <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e]`}>Customer Favorites</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>Our <span className="text-[#c39d5e]">Best</span> Sellers</h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} max-w-2xl mx-auto`}>Discover our most popular treats that customers can't get enough of</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Premium Chocolate Cake", price: "$24.99", image: "https://images.unsplash.com/photo-1553452118-621e1f860f43?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Artisan Croissants", price: "$3.99", image: "https://images.unsplash.com/photo-1737700089482-e6ce492f712f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Classic Baklava", price: "$18.99", image: "https://images.unsplash.com/photo-1598110750624-207050c4f28c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
              { name: "Signature Cookies", price: "$12.99", image: "https://images.unsplash.com/photo-1604908552986-eb22824b2150?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-[#F1F0FB]'} rounded-lg overflow-hidden group animate-on-scroll hover:shadow-lg transition-all duration-300`} 
                style={{ transition: 'all 0.6s ease-out', transitionDelay: `${index * 150}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                <div className="p-4">
                  <h3 className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} font-bold group-hover:text-[#c39d5e] transition-colors duration-300`}>{item.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-[#c39d5e] font-semibold">{item.price}</span>
                    <button className="text-sm text-white bg-[#c39d5e] hover:bg-[#b38d4e] px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 transform">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Occasions Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-[#F9F8FF]'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>Special Occasions</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-6`}>
              Make Your <span className="text-[#c39d5e]">Celebrations</span> Sweeter
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} max-w-2xl mx-auto`}>
              From weddings to birthdays, our custom creations add that special touch to your memorable moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Cakes",
                description: "Elegant multi-tiered cakes customized to your wedding theme",
                image: "https://plus.unsplash.com/premium_photo-1716484116881-01a900990846?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Birthday Celebrations",
                description: "Fun and creative cakes that bring joy to your special day",
                image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              },
              {
                title: "Corporate Events",
                description: "Sophisticated desserts for your business gatherings",
                image: "https://images.unsplash.com/photo-1624006229221-2abd931f266b?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
            ].map((occasion, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl animate-on-scroll" style={{ transition: 'all 0.6s ease-out', transitionDelay: `${index * 150}ms` }}>
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={occasion.image} 
                    alt={occasion.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{occasion.title}</h3>
                  <p className="text-gray-200 mb-4">{occasion.description}</p>
                  <Button className="w-fit bg-[#c39d5e] hover:bg-[#b38d4e] text-white">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>Testimonials</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-6`}>
              What Our <span className="text-[#c39d5e]">Customers</span> Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Wedding Client",
                image: "https://picsum.photos/seed/sarah/200/200",
                quote: "The wedding cake was absolutely stunning and tasted even better! Everyone couldn't stop talking about it."
              },
              {
                name: "Michael Chen",
                role: "Regular Customer",
                image: "https://picsum.photos/seed/michael/200/200",
                quote: "Their croissants are the best I've had outside of Paris. I'm here every weekend for my pastry fix!"
              },
              {
                name: "Emily Davis",
                role: "Corporate Event Planner",
                image: "https://picsum.photos/seed/emily/200/200",
                quote: "Professional service and exceptional quality. Our company events are always a hit with their desserts."
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-[#F9F8FF]'} p-6 rounded-xl animate-on-scroll`}
                style={{ transition: 'all 0.6s ease-out', transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>{testimonial.name}</h3>
                    <p className="text-[#c39d5e]">{testimonial.role}</p>
                  </div>
                </div>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} italic`}>"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-[#F9F8FF]'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>@noorbakery</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-6`}>
              Follow Us On <span className="text-[#c39d5e]">Instagram</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {instagramPosts.map((image, index) => (
    <div 
      key={index} 
      className="relative group overflow-hidden rounded-xl animate-on-scroll" 
      style={{ transition: 'all 0.6s ease-out', transitionDelay: `${index * 100}ms` }}
    >
      <img 
        src={image} 
        alt={`Instagram post ${index + 1}`} 
        className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Heart className="w-8 h-8 text-white" />
      </div>
    </div>
  ))}
</div>;
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className={`py-20 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>Recognition</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-6`}>
              Our <span className="text-[#c39d5e]">Awards</span> & Achievements
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { title: "Best Bakery 2023", icon: <Award className="w-12 h-12 text-[#c39d5e]" /> },
              { title: "Master Baker Award", icon: <Star className="w-12 h-12 text-[#c39d5e]" /> },
              { title: "Customer Choice", icon: <Heart className="w-12 h-12 text-[#c39d5e]" /> },
              { title: "Quality Excellence", icon: <CakeSlice className="w-12 h-12 text-[#c39d5e]" /> }
            ].map((award, index) => (
              <div 
                key={index}
                className={`${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-[#F9F8FF]'} p-6 rounded-xl text-center animate-on-scroll hover:transform hover:scale-105 transition-all duration-300`}
                style={{ transition: 'all 0.6s ease-out', transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex justify-center mb-4">{award.icon}</div>
                <h3 className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>{award.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
