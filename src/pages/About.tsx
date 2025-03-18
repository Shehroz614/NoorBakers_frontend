import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChefHat, Users, History, Award, Goal, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import MobileMenu from "@/components/layout/MobileMenu";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const About = () => {
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

      {/* About Hero Section */}
      <section className={`py-16 md:py-24 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-gradient-to-r from-[#FEF7CD]/40 to-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 animate-on-scroll">
              <Link to="/" className="inline-flex items-center text-[#c39d5e] mb-6 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
              </Link>
              <h1 className={`text-3xl md:text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-6`}>
                Our <span className="text-[#c39d5e]">Story</span> & Journey
              </h1>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} text-lg mb-8`}>
                Since 1995, Noor Bakers & Sweets has been dedicated to bringing joy to our community through delicious, handcrafted baked goods. Our journey began with a simple passion for quality pastries and has grown into a beloved local institution.
              </p>
              <div className="flex gap-3 items-center mb-6">
                <div className="p-2 rounded-full bg-[#c39d5e]/20">
                  <Award className="w-6 h-6 text-[#c39d5e]" />
                </div>
                <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
                  Award-winning bakery with over 25 years of excellence
                </p>
              </div>
            </div>
            <div className="md:w-1/2 animate-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Our bakery team" 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-black/20' : 'bg-white/10'}`}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-[#F1F1F1]'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>Our Core Values</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
              What Makes Us <span className="text-[#c39d5e]">Special</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ChefHat className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Master Craftsmanship", 
                description: "Our pastry chefs train for years to perfect their craft and bring innovation to traditional recipes" 
              },
              { 
                icon: <History className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Rich Heritage", 
                description: "Drawing from generations of baking traditions to create authentic flavors with a modern twist" 
              },
              { 
                icon: <Users className="w-8 h-8 text-[#c39d5e]" />, 
                title: "Community First", 
                description: "We believe in creating a warm and welcoming environment for our customers and community" 
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} p-8 rounded-lg animate-on-scroll hover:shadow-lg transition-all duration-300 group`} 
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 ${theme === 'dark' ? 'bg-[#c39d5e]/20' : 'bg-[#FEF7CD]'} rounded-full flex justify-center items-center mb-6 mx-auto group-hover:bg-[#c39d5e]/30 transition-colors`}>
                  {value.icon}
                </div>
                <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4 text-center`}>{value.title}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} text-center`}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team & Kitchen Gallery Section */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16 animate-on-scroll">
            <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-[#c39d5e]/30' : 'bg-[#c39d5e]/20'} text-[#c39d5e] mb-4`}>Behind The Scenes</span>
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>
              Our <span className="text-[#c39d5e]">Team</span> & Kitchen
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} max-w-2xl mx-auto`}>
              Meet the talented individuals who pour their hearts into creating delicious treats every day and get a glimpse of our kitchen
            </p>
          </div>

          <div className="image-gallery animate-on-scroll">
            <div className="image-gallery-item aspect-square md:aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Our head chef" />
            </div>
            <div className="image-gallery-item aspect-[4/5]">
              <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Baker preparing dough" />
            </div>
            <div className="image-gallery-item aspect-square">
              <img src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Freshly baked bread" />
            </div>
            <div className="image-gallery-item aspect-[3/4] md:aspect-[3/2]">
              <img src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Our kitchen" />
            </div>
            <div className="image-gallery-item aspect-[4/3]">
              <img src="https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Team collaboration" />
            </div>
            <div className="image-gallery-item aspect-[3/2]">
              <img src="https://images.unsplash.com/photo-1481833761820-0509d3217039?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" alt="Pastry decoration" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#1a181d]' : 'bg-[#FEF7CD]/30'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
          <div className="max-w-2xl mx-auto animate-on-scroll">
            <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-6`}>
              Experience the <span className="text-[#c39d5e]">Noor</span> Difference
            </h2>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} mb-8`}>
              Visit our bakery today and discover why our customers keep coming back for more. From delightful pastries to custom cakes, we have something for every occasion.
            </p>
            <Button className="bg-[#c39d5e] hover:bg-[#b38d4e] text-white rounded-md px-8 py-3 text-lg transition-transform hover:scale-105 animate-pulse-gold">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
