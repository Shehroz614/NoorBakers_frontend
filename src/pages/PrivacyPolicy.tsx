import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Shield, Lock, UserCheck, FileCheck, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[#221F26]' : 'bg-[#FFFCF7]'}`}>
      <Navbar />
      
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-gradient-to-r from-[#FEF7CD]/40 to-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
              Privacy Policy
            </h1>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Your privacy is our priority. Learn how we protect and manage your personal information.
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c39d5e]/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#c39d5e]/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-[#c39d5e] mb-10 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <Shield className="w-8 h-8 text-[#c39d5e]" />,
                title: "Data Protection",
                description: "We implement industry-standard security measures to protect your personal information."
              },
              {
                icon: <Lock className="w-8 h-8 text-[#c39d5e]" />,
                title: "Secure Storage",
                description: "Your data is encrypted and stored securely on protected servers."
              },
              {
                icon: <UserCheck className="w-8 h-8 text-[#c39d5e]" />,
                title: "Your Control",
                description: "You have full control over your personal data and how it's used."
              },
              {
                icon: <FileCheck className="w-8 h-8 text-[#c39d5e]" />,
                title: "Transparency",
                description: "We're committed to being transparent about how we collect and use your data."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-[#c39d5e]/10">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
                      {item.title}
                    </h3>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`prose max-w-none ${theme === 'dark' ? 'prose-invert' : ''}`}>
            <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
            
            {[
              {
                title: "Information We Collect",
                content: "We collect information that you provide directly to us, including:",
                items: ["Name and contact information", "Order details and preferences", "Payment information", "Communication preferences"]
              },
              {
                title: "How We Use Your Information",
                content: "We use the information we collect to:",
                items: ["Process your orders and payments", "Communicate with you about your orders", "Send you marketing communications (with your consent)", "Improve our products and services"]
              },
              {
                title: "Information Sharing",
                content: "We do not sell or rent your personal information to third parties. We may share your information with:",
                items: ["Service providers who assist in our operations", "Legal authorities when required by law", "Business partners with your consent"]
              },
              {
                title: "Your Rights",
                content: "You have the right to:",
                items: ["Access your personal information", "Correct inaccurate information", "Request deletion of your information", "Opt-out of marketing communications"]
              }
            ].map((section, index) => (
              <section key={index} className="mb-12">
                <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg mb-6`}>
                  <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
                    {section.title}
                  </h2>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {section.content}
                  </p>
                  <ul className={`list-none space-y-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start space-x-3 hover:text-[#c39d5e] transition-colors">
                        <span className="text-[#c39d5e] mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            ))}

            <section className="mb-12">
              <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c39d5e]/10 rounded-full transform translate-x-16 -translate-y-16"></div>
                <h2 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} text-center`}>
                  Contact Us
                </h2>
                <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center`}>
                  If you have any questions about this Privacy Policy, please contact us:
                </p>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="w-5 h-5 text-[#c39d5e]" />
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      privacy@noorbakers.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Shield className="w-5 h-5 text-[#c39d5e]" />
                    <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      Data Protection Office
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 