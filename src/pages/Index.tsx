import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CakeSlice, Coffee, Star, MapPin, Clock, Phone, ChevronRight, ShoppingBag, Award, Heart, Mail, Send, ArrowRight, MessageCircle, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import MobileMenu from "@/components/layout/MobileMenu";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import logodark from "/Mediamodifier-Design (4) (1).svg";
import logowhite from "/Mediamodifier-Design (5) (1).svg";
import heropic from "../assets/heropic.svg";
import cookies from "../assets/cookies.svg";
import image1 from "../assets/Screenshot 2025-06-02 010620.png";
import { toast } from "sonner";






const Index = () => {
  const { theme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    position: "",
    employmentType: "",
    workEligibility: "",
    startDate: "",
    experience: ""
  });
  const [cvFile, setCvFile] = useState<File | null>(null);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      position: "",
      employmentType: "",
      workEligibility: "",
      startDate: "",
      experience: ""
    });
    setCvFile(null);
    // Reset the file input
    const fileInput = document.getElementById('cv') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if all fields are filled
    const isAllFieldsFilled = Object.values(formData).every(value => value.trim() !== '');
    
    if (!isAllFieldsFilled) {
      toast.error('Please fill in all fields');
      return;
    }

    if (!cvFile) {
      toast.error('Please upload your CV');
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      
      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      // Append CV file if exists
      if (cvFile) {
        submitData.append('cv', cvFile);
      }

      const response = await fetch('https://api.noorbakersandsweets.co.uk/api/email/send-form', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      toast.success('Application submitted successfully! We will get back to you soon.');
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit application. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
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
      <Navbar />

      {/* Redesigned Hero Section with large background image */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Hero Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <img
            src={heropic}
            alt="Bakery hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className={`absolute inset-0 w-full h-full ${theme === 'dark' ? '' : ''}`}></div>
        </div>



        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className=" mx-auto text-center">

            <h1 className={`text-3xl md:text-4xl lg:text-7xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} leading-tight mb-6 fade-in`}>
              Something Delicious is Baking...
            </h1>



            {/* Enhanced social proof with awards */}


            {/* Awards badge */}

          </div>
        </div>
      </section>

      {/* Features Section - Added "Handcrafted Delights" text here */}
      <section className={`py-16 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-white'} transition-colors duration-300 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
          {/* Animated pastry floating in the background */}
          {/* <div className="absolute -right-20 top-20 opacity-20 float">
            <img 
              src="https://images.unsplash.com/photo-1600617953089-c42ac12fe5db?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
              alt="Floating pastry" 
              className="w-64 h-64 object-contain rounded-full rotate-12" 
            />
          </div> */}

          <div className="text-center mb-12 animate-on-scroll" style={{ transition: 'all 0.6s ease-out' }}>
            <div className="inline-block mb-2">
              <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>
                <span className="text-[#c39d5e]">Handcrafted Delights</span> For Every Occasion
              </h2>
              <h1 className={`inline-block px-4 py-1 rounded-full  text-3xl  text-[#c39d5e] font-bold `}>About Us</h1>
            </div>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}  text-center`}>
              At Noor Bakers & Sweets, we believe every bite should bring joy. Founded with a passion for quality and tradition,
              we're here to serve freshly baked goods, handcrafted cakes, and authentic sweets that make every moment special. <br />

              Whether you're after a buttery biscuit with your chai, a custom cake for your celebration, or a box of classic mithai for someone you love
              we've got you covered. Every item we create is made with care, premium ingredients, and that unmistakable Noor touch. <br />

              Rooted in tradition, inspired by flavour, and baked for today
              Noor Bakers & Sweets is your go-to spot for taste that speaks for itself.            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div> */}
        </div>
      </section>


      <div className=" inset-0 w-full h-full overflow-hidden z-0">
        <img
          src={image1}
          alt="Bakery hero"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 w-full h-full ${theme === 'dark' ? "" : ""}`}></div>
      </div>

      <div className=" inset-0 w-full h-full overflow-hidden z-0">
        <img
          src={cookies}
          alt="Bakery hero"
          className="w-full h-full object-cover opacity-50"
        />
        <div className={`absolute inset-0 w-full h-full ${theme === 'dark' ? "" : ""}`}></div>
      </div>

      <div className="relative overflow-hidden min-h-[90vh] flex items-center bg-gradient-to-b from-white via-[#FEF7CD]/10 to-white py-24">
        <div className="w-full md:w-4/5 mx-auto px-4 md:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-[#c39d5e]/10 text-[#c39d5e] mb-4 animate-fade-in">Join Our Team</span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6">We're Hiring!</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">Join our passionate team and be part of creating delightful moments for our customers</p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6 md:space-y-8 bg-white/80 backdrop-blur-lg p-6 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            {/* Personal Information Section */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 flex items-center">
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c39d5e]/10 flex items-center justify-center mr-2 md:mr-3">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#c39d5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                Personal Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2 group">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Your city, country"
                  />
                </div>
              </div>
            </div>

            {/* Job Details Section */}
            <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 flex items-center">
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c39d5e]/10 flex items-center justify-center mr-2 md:mr-3">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#c39d5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                Job Details
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="space-y-2 group">
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Position</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select a position</option>
                    <option value="baker">Baker</option>
                    <option value="counter">Front Counter Staff</option>
                    <option value="kitchen">Kitchen Assistant</option>
                    <option value="driver">Delivery Driver</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="employmentType" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Employment Type</label>
                  <select
                    id="employmentType"
                    name="employmentType"
                    value={formData.employmentType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    <option value="">Select employment type</option>
                    <option value="fullTime">Full-Time</option>
                    <option value="partTime">Part-Time</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="workEligibility" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Work Eligibility</label>
                  <select
                    id="workEligibility"
                    name="workEligibility"
                    value={formData.workEligibility}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm appearance-none cursor-pointer"
                  >
                    <option value="">Are you eligible to work in the UK?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Available Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="space-y-4 md:space-y-6 pt-4 md:pt-6">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 flex items-center">
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#c39d5e]/10 flex items-center justify-center mr-2 md:mr-3">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[#c39d5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Experience & CV
              </h3>

              <div className="space-y-4">
                <div className="space-y-2 group">
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 group-focus-within:text-[#c39d5e] transition-colors">Work Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    rows={4}
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 md:px-5 py-2.5 md:py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#c39d5e] focus:border-transparent outline-none transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your relevant work experience"
                  ></textarea>
                </div>

                {/* CV Upload Section */}
                <div className="space-y-2">
                  <label htmlFor="cv" className="block text-sm font-medium text-gray-700">Upload CV</label>
                  <div className="flex items-center justify-center w-full">
                    <label htmlFor="cv" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-200 border-dashed rounded-xl cursor-pointer hover:bg-gray-50/50 transition-all duration-200 group relative">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-10 h-10 mb-4 text-gray-400 group-hover:text-[#c39d5e] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 group-hover:text-gray-600">
                          <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 group-hover:text-gray-600">PDF, DOC, DOCX (MAX. 2MB)</p>
                        {cvFile && (
                          <p className="mt-2 text-sm text-[#c39d5e]">Selected: {cvFile.name}</p>
                        )}
                      </div>
                      <input 
                        id="cv" 
                        type="file" 
                        className="hidden" 
                        accept=".pdf,.doc,.docx" 
                        onChange={handleFileChange}
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-6 md:pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 bg-[#c39d5e] text-white rounded-xl hover:bg-[#b38d4e] transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:ring-[#c39d5e] transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Best Sellers Section */}
      {/* <section className={`py-16 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} transition-colors duration-300 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative">
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
      </section> */}

      {/* Special Occasions Section */}
      {/* <section className={`py-20 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-[#F9F8FF]'} transition-colors duration-300`}>
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
      </section> */}

      {/* Testimonials Section */}
      {/* <section className={`py-20 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} transition-colors duration-300`}>
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
      </section> */}

      {/* Instagram Feed Section */}
      {/* <section className={`py-20 ${theme === 'dark' ? 'bg-[#1e1c22]' : 'bg-[#F9F8FF]'} transition-colors duration-300`}>
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
      </section> */}

      {/* Awards and Recognition */}
      {/* <section className={`py-20 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} transition-colors duration-300`}>
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
      </section> */}

      <Footer />
    </div>
  );
};

export default Index;
