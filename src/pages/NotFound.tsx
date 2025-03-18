import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { CakeSlice, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";

const NotFound = () => {
  const location = useLocation();
  const { theme } = useTheme();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-[#221F26]' : 'bg-[#FFFCF7]'}`}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 md:px-8 my-20">
        <div className="max-w-4xl w-full">
          <div className={`relative rounded-2xl overflow-hidden ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-white'} shadow-2xl p-8 md:p-12`}>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-10 transform -translate-x-16 -translate-y-16">
              <div className="w-full h-full rounded-full bg-[#c39d5e]" />
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 transform translate-x-16 translate-y-16">
              <div className="w-full h-full rounded-full bg-[#c39d5e]" />
            </div>

            <div className="relative z-10">
              {/* Main content */}
              <div className="text-center mb-12">
                <div className="inline-block animate-bounce-slow">
                  <CakeSlice className="w-24 h-24 mx-auto text-[#c39d5e] mb-6" />
                </div>
                <h1 className={`text-8xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} font-display`}>
                  4<span className="text-[#c39d5e]">0</span>4
                </h1>
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
                  Oops! This page is like a recipe gone wrong
                </h2>
                <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'} max-w-2xl mx-auto mb-8`}>
                  Looks like we can't find the page you're looking for. Don't worry, our master bakers are working on it!
                </p>

                {/* Decorative divider */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className={`h-0.5 w-16 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} />
                  <CakeSlice className="w-6 h-6 text-[#c39d5e] animate-spin-slow" />
                  <div className={`h-0.5 w-16 ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`} />
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/">
                    <Button className="bg-[#c39d5e] hover:bg-[#b38d4e] text-white rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group">
                      <Home className="w-5 h-5" />
                      Return Home
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Fun facts section */}
              <div className={`mt-12 pt-8 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Did you know?",
                      description: "The term '404' comes from the response code in HTTP when a page is not found."
                    },
                    {
                      title: "While you're here",
                      description: "Why not check out our delicious menu of freshly baked goods?"
                    },
                    {
                      title: "Need help?",
                      description: "Our friendly team is always here to assist you find what you're looking for."
                    }
                  ].map((fact, index) => (
                    <div key={index} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-[#3a3741]' : 'bg-[#FEF7CD]/30'}`}>
                      <h3 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-[#403E43]'}`}>
                        {fact.title}
                      </h3>
                      <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-[#8A898C]'}`}>
                        {fact.description}
                      </p>
                    </div>
                  ))}
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

export default NotFound;

// Add these animations to your global CSS or tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce-slow {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;
document.head.appendChild(style);
