import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CakeSlice, Coffee, Star, MapPin, Clock, Phone, ChevronRight, ShoppingBag, Award, Heart, Mail, Send, ArrowRight, MessageCircle, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import MobileMenu from "@/components/layout/MobileMenu";
// import logowhite from "@/assets/Mediamodifier-Design (4) (1).svg";
import logodark from "@/assets/Mediamodifier-Design (5) (1).svg";
import logowhite from "@/assets/NOOR_LOGO.svg";
import NOOR_BAKERS_LOGO from "@/assets/NOOR_BAKERS_LOGO.svg";
import Noor_LOGO__DARK from "@/assets/download.svg";
import download_1 from "@/assets/download (1).svg";






const Navbar = () => {
    const { theme } = useTheme();
 const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav className={`${theme === 'dark' ? 'bg-[#2d2a33] border-[#3a3741]' : 'bg-white border-[#FEC6A1]/20'} 
        border-b py-4 px-2 md:px-4 sticky top-0 z-50 shadow-sm transition-all duration-300 
        ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="flex justify-between items-center">
          <div className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} text-2xl md:text-3xl w-1/2 font-bold`}>
          {theme === 'dark' ? <div className="flex items-center ">
            <img src={Noor_LOGO__DARK} alt="" className="w-40 h-16" /> 
                        <img src={download_1} alt="" className="w-40 h-16" /> 

          </div>:<>
          <div className="flex items-center ">

           <img src={logowhite} alt="" className="w-40 h-16" /> 
                      <img src={NOOR_BAKERS_LOGO} alt="" className="w-40 h-16" /> 

          </div>
          </>}
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            {/* <Link to="/" className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} hover:text-[#c39d5e] transition-colors`}>Home</Link>
            <Link to="/services" className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} hover:text-[#c39d5e] transition-colors`}>Services</Link>
            <Link to="/about" className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} hover:text-[#c39d5e] transition-colors`}>About</Link>
            <Link to="/contact" className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} hover:text-[#c39d5e] transition-colors`}>Contact</Link> */}
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            {/* <button onClick={toggleMobileMenu} className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} hover:text-[#c39d5e]`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button> */}
          </div>
        </div>
        <MobileMenu isOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
      </nav>
  )
}

export default Navbar