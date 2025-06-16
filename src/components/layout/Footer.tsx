import React from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowUp,MapPin } from "lucide-react"; // Only Mail remains from lucide-react
import { useTheme } from "@/contexts/ThemeContext";
import logowhite from "@/assets/Mediamodifier-Design (5) (1).svg";
import footerlogo from "@/assets/image copy 2.png";
import download_1 from "@/assets/download (1).svg";
import download_2 from "@/assets/download2.svg";
import footerlogonew from "@/assets/footerlogonew.svg";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import snapchat from "@/assets/snapchat.svg";
import tiktok1 from "@/assets/Group 18.svg";


const Footer = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative ${theme === 'dark' ? 'bg-[#161523]' : 'bg-[#161523]'} text-white py-16 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">
          {/* Left Column: Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className=" flex flex-col justify-center items-center md:justify-start">
              <img 
                 src={footerlogonew}
                 alt="Noor Bakers Logo" 
                 className="h-20 w-20"
               />
              <img 
                src={download_1}
                alt="Noor Bakers Logo" 
                className="h-20 w-25"
              />
            </div>
            <div>
              
            </div>
          </div>

          {/* Right Column: Contact Info and Social Links */}
          <div className="mx-auto">
            <div className=" flex flex-col items-start justify-start space-y-6">
              <h4 className="text-lg font-semibold mb-4 text-[#c39d5e] font-serif">Contact Info</h4>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 mr-3 text-[#c39d5e] mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-400 text-sm font-sans text-left leading-relaxed">
                  Noor Bakers & Sweets,<br />
                  Peace Mills, Hopbine Avenue,<br />
                  Bradford BD5 8ER
                </span>
              </div>
              <div className="flex items-center mb-6">
                <Mail className="h-5 w-5 mr-3 text-[#c39d5e] group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:info@noorbakersandsweets.com" className="text-gray-400 text-sm font-sans hover:text-[#c39d5e] text-left transition-colors duration-300">
                  info@noorbakersandsweets.com
                </a>
              </div>
              <h4 className="text-2xl font-semibold mb-4 text-[#c39d5e]">"Stay Connected!"</h4>
              <div className="flex items-center justify-center space-x-3">
                {[
                  { icon: <img src={facebook} alt="Facebook" className="h-5 w-5" />, href: "https://www.facebook.com/profile.php?id=61574051793643" },
                  { icon: <img src={instagram} alt="Instagram" className="h-5 w-5" />, href: "https://www.instagram.com/noor.bakers.official?igsh=MTVzNW5qdXhrOXdteg%3D%3D&utm_source=qr" },
                  { icon: <img src={snapchat} alt="Snapchat" className="h-5 w-5" />, href: "https://www.snapchat.com/add/noor-bakers?invite_id=8JWJ3T6h&locale=en_GB&share_id=glibEaMgTmmpb6SZWULzjw&sid=bd354140db494c9ab9ff0967d00351fd" },
                  { icon: <img src={tiktok1} alt="TikTok" className="h-5 w-5" />, href: "https://www.tiktok.com/@noorbakers?_t=ZN-8wqiTqXtdxO&_r=1" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-[#2d2a33]/90'} p-2 rounded-full text-[#c39d5e] hover:text-white hover:bg-[#c39d5e] transition-all duration-300 hover:scale-110`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t border-[#3a3741] pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs font-sans mb-3 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} NOOR Bakers & Sweets. All rights reserved.
            </p>
            <div className="flex items-center space-x-3">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms of Service", path: "/terms-of-service" },
                { name: "Cookie Policy", path: "/cookie-policy" }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <Link 
                    to={item.path}
                    className="text-gray-400 text-xs font-sans hover:text-[#c39d5e] transition-colors duration-300 relative group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c39d5e] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  {index < 2 && <span className="text-gray-400 text-xs mx-1">•</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className={`absolute right-0 -top-5 ${theme === 'dark' ? 'bg-[#2d2a33]' : 'bg-[#2d2a33]/90'} p-2 rounded-full text-[#c39d5e] hover:text-white hover:bg-[#c39d5e] transition-all duration-300 hover:scale-110 shadow-lg`}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;