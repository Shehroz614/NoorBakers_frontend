import React from "react";
import { useTheme } from "@/contexts/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowLeft, Cookie, Settings, Lock, Info, Bell, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[#221F26]' : 'bg-[#FFFCF7]'}`}>
      <Navbar />
      
      {/* Hero Section with Cookie Animation */}
      <div className={`relative overflow-hidden ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-gradient-to-br from-[#FEF7CD]/40 via-white to-[#FEC6A1]/20'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-[#c39d5e]/10 animate-bounce-slow">
                <Cookie className="w-12 h-12 text-[#c39d5e] animate-spin-slow" />
              </div>
            </div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
              Cookie Policy
            </h1>
            <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Understanding how we use cookies to enhance your browsing experience
            </p>
          </div>
        </div>

        {/* Floating Cookie Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <Cookie className="w-8 h-8 text-[#c39d5e]/20 animate-float" />
          </div>
          <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 -translate-y-1/2">
            <Cookie className="w-12 h-12 text-[#c39d5e]/20 animate-float-delay-2" />
          </div>
          <div className="absolute bottom-1/4 left-1/3 transform -translate-x-1/2 translate-y-1/2">
            <Cookie className="w-10 h-10 text-[#c39d5e]/20 animate-float-delay-1" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-[#c39d5e] mb-10 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
          </Link>

          {/* Cookie Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                icon: <CheckCircle className="w-8 h-8 text-green-500" />,
                title: "Essential Cookies",
                description: "Required for the website to function properly. These cannot be disabled.",
                type: "essential"
              },
              {
                icon: <Bell className="w-8 h-8 text-blue-500" />,
                title: "Preference Cookies",
                description: "Remember your settings and preferences for a better experience.",
                type: "preference"
              },
              {
                icon: <Info className="w-8 h-8 text-yellow-500" />,
                title: "Analytics Cookies",
                description: "Help us understand how visitors interact with our website.",
                type: "analytics"
              },
              {
                icon: <Settings className="w-8 h-8 text-purple-500" />,
                title: "Marketing Cookies",
                description: "Track your online activity to help advertisers deliver more relevant ads.",
                type: "marketing"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg transform hover:scale-105 transition-transform duration-300`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${theme === 'dark' ? 'bg-opacity-20' : 'bg-opacity-10'} bg-current`}>
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

          {/* Cookie Information Sections */}
          <div className="space-y-8">
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} flex items-center`}>
                <Cookie className="w-6 h-6 text-[#c39d5e] mr-3" />
                What Are Cookies
              </h2>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide a better user experience.
              </p>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} flex items-center`}>
                <Settings className="w-6 h-6 text-[#c39d5e] mr-3" />
                How We Use Cookies
              </h2>
              <ul className={`space-y-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Essential cookies: Required for the website to function properly</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Analytical cookies: To understand how visitors interact with our website</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Preference cookies: To remember your preferences and settings</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <span>Marketing cookies: To deliver more relevant advertisements</span>
                </li>
              </ul>
            </div>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg`}>
              <h2 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} flex items-center`}>
                <Lock className="w-6 h-6 text-[#c39d5e] mr-3" />
                Managing Cookies
              </h2>
              <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.
              </p>
              <div className={`${theme === 'dark' ? 'bg-[#221F26]' : 'bg-gray-50'} p-4 rounded-lg`}>
                <h3 className={`text-lg font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
                  Browser Settings
                </h3>
                <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>• Firefox: Options → Privacy & Security → Cookies</li>
                  <li>• Safari: Preferences → Privacy → Cookies</li>
                  <li>• Edge: Settings → Privacy & Security → Cookies</li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className={`p-8 rounded-xl ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-lg relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c39d5e]/10 rounded-full transform translate-x-16 -translate-y-16"></div>
              <h2 className={`text-2xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} text-center`}>
                Questions About Cookies?
              </h2>
              <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-center`}>
                If you have any questions about our Cookie Policy, please contact us:
              </p>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-4">
                  <Cookie className="w-5 h-5 text-[#c39d5e]" />
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    privacy@noorbakers.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Settings className="w-5 h-5 text-[#c39d5e]" />
                  <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Cookie Settings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add animations to the document */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          @keyframes float-delay-1 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          @keyframes float-delay-2 {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-25px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delay-1 {
            animation: float-delay-1 8s ease-in-out infinite;
          }
          .animate-float-delay-2 {
            animation: float-delay-2 7s ease-in-out infinite;
          }
          .animate-bounce-slow {
            animation: bounce 3s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin 8s linear infinite;
          }
        `}
      </style>

      <Footer />
    </div>
  );
};

export default CookiePolicy; 