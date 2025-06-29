import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import MobileMenu from "@/components/layout/MobileMenu";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { AnimatedLogo } from "@/components/common/AnimatedLogo";
import heropic from "../assets/heropic.svg";
import cookies from "../assets/cookies.svg";
import first from "../assets/Group 1.svg";
import second from "../assets/Group 13.svg";
import fourth from "../assets/Group 4.svg";
import fifth from "../assets/Group 5.svg";
import six from "../assets/Group 6.svg";
import seven from "../assets/Group 7.svg";
import eight from "../assets/Group 8.svg";
import nine from "../assets/Group 9.svg";
import ten from "../assets/Group 10.svg";
import eleven from "../assets/Group 11.svg";
import twelve from "../assets/Group 12.svg";
import third from "../assets/Group 19.svg";

import { toast } from "sonner";

const Index = () => {
  const { theme } = useTheme();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
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
            {/* Animated Logo - positioned above the headline */}
            <div className="mb-8 flex justify-center">
              <AnimatedLogo variant="hero" className="scale-125" />
            </div>

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

          <div className="text-center mb-12 animate-on-scroll" style={{ transition: 'all 0.6s ease-out' }}>
            <div className="inline-block mb-2">
              <h2 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} mb-4`}>
                <span className="text-[#c39d5e]">Handcrafted Delights</span> For every Occasion
              </h2>
              <h1 className={`inline-block px-4 py-1 rounded-full  text-3xl  text-[#c39d5e] font-bold `}>About Us</h1>
            </div>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-black'}  text-center`}>
              At Noor Bakers & Sweets, we believe every bite should bring joy. Founded with a passion for quality and tradition,
              we're here to serve freshly baked goods, handcrafted cakes, and authentic sweets that make every moment special. <br />
              <br />

              Whether you're after a buttery biscuit with your chai, a custom cake for your celebration, or a box of classic mithai for someone you love
              we've got you covered. Every item we create is made with care, premium ingredients, and that unmistakable Noor touch. <br />
              <br />
              Rooted in tradition, inspired by flavour, and baked for today
              Noor Bakers & Sweets is your go-to spot for taste that speaks for itself.            </p>
          </div>
        </div>
      </section>
      <div className="bg-white openSans  ">


        <div className="grid grid-cols-4 gap-y-8   max-w-6xl  mx-auto py-10 px-10 bg-white mb-9">
          {/* Row 1 */}
          <div className="flex flex-col items-center">
            <img src={first} alt="Chocolates" className="w-16 h-16" />
            <span className="mt-2 text-center  font-bold text-black text-[16px]">Chocolates</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={third} alt="Savouries" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Desserts</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={second} alt="Desserts" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Savouries</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={fourth} alt="Mithai" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Mithai  (Traditional <br />Sweets)</span>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center">
            <img src={fifth} alt="Ready Meals" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Ready Meals</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={six} alt="Hot & Cold Drinks" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Hot & Cold Drinks</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={seven} alt="Celebration Cakes" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Celebration Cakes</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={eight} alt="Pastries" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Pastries</span>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col items-center">
            <img src={nine} alt="Fresh Bread" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Fresh Bread</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={ten} alt="Handmade Biscuits" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Handmade Biscuits</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={eleven} alt="Handmade Cookies" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Handmade Cookies</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={twelve} alt="Baklava & Middle Eastern Sweets" className="w-16 h-16" />
            <span className="mt-2 text-center font-bold text-black text-[16px]">Baklava & <br /> Middle Eastern <br /> Sweets</span>
          </div>
        </div>
        {/* <div className=" inset-0 w-full h-full overflow-hidden z-0">
        <img
          src={image1}
          alt="Bakery hero"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 w-full h-full ${theme === 'dark' ? "" : ""}`}></div>
      </div> */}

        <div className=" inset-0 w-full h-full overflow-hidden z-0 pt-20 ">
          <img
            src={cookies}
            alt="Bakery hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className={`absolute inset-0 w-full h-full ${theme === 'dark' ? "" : ""}`}></div>
        </div>
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

      <Footer />
    </div>
  );
};

export default Index;
