import React from "react";
import { Link } from "react-router-dom";
import { CakeSlice, Coffee, Star, MapPin, Clock, Phone, ChevronRight, ShoppingBag, Heart, Mail, Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import logodark from "/Mediamodifier-Design (4) (1).svg";
import logowhite from "/Mediamodifier-Design (5) (1).svg";

const Footer = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative ${theme === 'dark' ? 'bg-[#1a181d]' : 'bg-[#221F26]'} text-white py-16 transition-colors duration-300`}>
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-0">
        <svg className="relative block w-full h-[40px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" 
                className={`${theme === 'dark' ? 'fill-[#2d2a33]' : 'fill-[#FFFCF7]'}`}></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <img 
                src={theme === 'dark' ? logowhite : logodark} 
                alt="Noor Bakers Logo" 
                className="h-16 w-auto mx-auto md:mx-0"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Bringing sweetness to your everyday life with our premium baked goods and confections. 
              Experience the perfect blend of tradition and innovation in every bite.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              {[
                { icon: <Facebook className="h-5 w-5" />, href: "#" },
                { icon: <Instagram className="h-5 w-5" />, href: "#" },
                { icon: <Twitter className="h-5 w-5" />, href: "#" },
                { icon: <Youtube className="h-5 w-5" />, href: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-[#2d2a33]/90'} p-3 rounded-full text-[#c39d5e] hover:text-white hover:bg-[#c39d5e] transition-all duration-300 hover:scale-110`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#c39d5e] text-center md:text-left">Quick Links</h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-[#c39d5e] transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#c39d5e] text-center md:text-left">Our Products</h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {[
                { icon: <CakeSlice className="h-4 w-4" />, name: "Custom Cakes" },
                { icon: <Coffee className="h-4 w-4" />, name: "Fresh Pastries" },
                { icon: <ShoppingBag className="h-4 w-4" />, name: "Artisan Breads" },
                { icon: <Heart className="h-4 w-4" />, name: "Sweet Treats" }
              ].map((product, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-[#c39d5e] transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 group-hover:scale-110 transition-transform duration-300">
                      {product.icon}
                    </span>
                    <span>{product.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#c39d5e] text-center md:text-left">Contact Info</h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              {[
                { 
                  icon: <MapPin className="h-5 w-5" />, 
                  content: "123 Bakery Street,\nSweet Avenue, NY 10001",
                  isMultiline: true 
                },
                { 
                  icon: <Phone className="h-5 w-5" />, 
                  content: "(123) 456-7890" 
                },
                { 
                  icon: <Mail className="h-5 w-5" />, 
                  content: "info@noorbakers.com" 
                },
                { 
                  icon: <Clock className="h-5 w-5" />, 
                  content: "Mon - Sun: 7:00 AM - 8:00 PM" 
                }
              ].map((info, index) => (
                <li key={index} className="flex items-start group">
                  <span className="mr-3 text-[#c39d5e] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </span>
                  <span className="text-gray-400">
                    {info.isMultiline ? info.content.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < info.content.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    )) : info.content}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t border-[#3a3741] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} NOOR Bakers & Sweets. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
                { name: "Cookie Policy", path: "/cookie-policy" }
              ].map((item, index) => (
                <Link 
                  key={index}
                  to={item.path}
                  className="text-gray-400 hover:text-[#c39d5e] text-sm transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c39d5e] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className={`absolute right-0 -top-6 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-[#2d2a33]/90'} p-3 rounded-full text-[#c39d5e] hover:text-white hover:bg-[#c39d5e] transition-all duration-300 hover:scale-110 shadow-lg`}
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 