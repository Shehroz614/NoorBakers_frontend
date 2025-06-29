import React, { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { useTheme } from "@/contexts/ThemeContext";
import MobileMenu from "@/components/layout/MobileMenu";
import { AnimatedLogo } from "@/components/common/AnimatedLogo";

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
            <AnimatedLogo variant="navbar" />
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
        <MobileMenu isOpen={mobileMenuOpen} toggleMenu={toggleMobileMenu} />
      </nav>
  )
}

export default Navbar