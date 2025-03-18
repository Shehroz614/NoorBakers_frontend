import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Scale, FileText, ShieldCheck, AlertCircle, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[#221F26]' : 'bg-[#FFFCF7]'}`}>
      <Navbar />
      
      {/* Hero Section with Geometric Pattern */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-[#c39d5e]/10">
                <Scale className="w-12 h-12 text-[#c39d5e]" />
              </div>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
              Terms of Service
            </h1>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>

        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-20 h-20 absolute top-10 left-10 border-2 border-[#c39d5e] rounded-lg transform rotate-45"></div>
            <div className="w-32 h-32 absolute top-40 right-20 border-2 border-[#c39d5e] rounded-full"></div>
            <div className="w-24 h-24 absolute bottom-20 left-1/4 border-2 border-[#c39d5e] transform rotate-12"></div>
            <div className="w-16 h-16 absolute top-1/3 right-1/3 border-2 border-[#c39d5e] rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-[#c39d5e] mb-10 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>

          {/* Key Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <FileText className="w-6 h-6 text-[#c39d5e]" />,
                title: "Legal Agreement",
                description: "These terms constitute a legally binding agreement between you and Noor Bakers."
              },
              {
                icon: <ShieldCheck className="w-6 h-6 text-[#c39d5e]" />,
                title: "Your Protection",
                description: "We ensure fair and transparent terms to protect both parties' interests."
              },
              {
                icon: <Handshake className="w-6 h-6 text-[#c39d5e]" />,
                title: "Mutual Understanding",
                description: "By using our services, you agree to comply with these terms."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg text-center`}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-[#c39d5e]/10">
                    {item.icon}
                  </div>
                </div>
                <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
                  {item.title}
                </h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} flex items-center`}>
                <span className="p-2 rounded-full bg-[#c39d5e]/10 mr-3">
                  <FileText className="w-6 h-6 text-[#c39d5e]" />
                </span>
                Acceptance of Terms
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} flex items-center`}>
                <span className="p-2 rounded-full bg-[#c39d5e]/10 mr-3">
                  <ShieldCheck className="w-6 h-6 text-[#c39d5e]" />
                </span>
                Use License
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.
              </p>
              <div className={`${theme === 'dark' ? 'bg-[#221F26]' : 'bg-gray-50'} p-4 rounded-lg`}>
                <p className={`mb-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>Under this license you may not:</p>
                <ul className={`list-none space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {[
                    "Modify or copy the materials",
                    "Use the materials for any commercial purpose",
                    "Attempt to decompile or reverse engineer any software",
                    "Remove any copyright or other proprietary notations"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 hover:text-[#c39d5e] transition-colors">
                      <span className="text-[#c39d5e] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} flex items-center`}>
                <span className="p-2 rounded-full bg-[#c39d5e]/10 mr-3">
                  <Handshake className="w-6 h-6 text-[#c39d5e]" />
                </span>
                Ordering and Payment
              </h2>
              <div className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <p>When placing an order through our website:</p>
                <ul className={`list-none space-y-3`}>
                  {[
                    "You agree to provide current, complete, and accurate purchase and account information",
                    "You agree to promptly update your account and other information",
                    "We reserve the right to refuse any order you place with us",
                    "All prices are subject to change without notice"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 hover:text-[#c39d5e] transition-colors">
                      <span className="text-[#c39d5e] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} flex items-center`}>
                <span className="p-2 rounded-full bg-[#c39d5e]/10 mr-3">
                  <AlertCircle className="w-6 h-6 text-[#c39d5e]" />
                </span>
                Disclaimer
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                The materials on Noor Bakers's website are provided on an 'as is' basis. Noor Bakers makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            {/* Contact Section */}
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c39d5e]/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <h2 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} text-center`}>
                Contact Information
              </h2>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center`}>
                For any questions regarding these Terms of Service, please contact us:
              </p>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">
                  <FileText className="w-5 h-5 text-[#c39d5e]" />
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    legal@noorbakers.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Scale className="w-5 h-5 text-[#c39d5e]" />
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Legal Department
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService; 