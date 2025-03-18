import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  const { theme } = useTheme();
  const [showPolicyLinks, setShowPolicyLinks] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-4 space-y-2">
      <Link to="/" onClick={toggleMenu} className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} block px-4 py-2 hover:text-[#c39d5e] transition-colors`}>Home</Link>
      <Link to="/services" onClick={toggleMenu} className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} block px-4 py-2 hover:text-[#c39d5e] transition-colors`}>Services</Link>
      <Link to="/about" onClick={toggleMenu} className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} block px-4 py-2 hover:text-[#c39d5e] transition-colors`}>About</Link>
      <Link to="/contact" onClick={toggleMenu} className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} block px-4 py-2 hover:text-[#c39d5e] transition-colors`}>Contact</Link>
      
      <div>
        <button 
          onClick={() => setShowPolicyLinks(!showPolicyLinks)}
          className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} w-full flex items-center justify-between px-4 py-2 hover:text-[#c39d5e] transition-colors`}
        >
          <span>Policies</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showPolicyLinks ? 'rotate-180' : ''}`} />
        </button>
        
        {showPolicyLinks && (
          <div className={`pl-6 space-y-2 ${theme === 'dark' ? 'bg-[#3a3741]/50' : 'bg-gray-50'} py-2`}>
            <Link 
              to="/privacy-policy" 
              onClick={toggleMenu}
              className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} block px-4 py-1 hover:text-[#c39d5e] transition-colors text-sm`}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              onClick={toggleMenu}
              className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} block px-4 py-1 hover:text-[#c39d5e] transition-colors text-sm`}
            >
              Terms of Service
            </Link>
            <Link 
              to="/cookie-policy" 
              onClick={toggleMenu}
              className={`${theme === 'dark' ? 'text-white' : 'text-[#403E43]'} block px-4 py-1 hover:text-[#c39d5e] transition-colors text-sm`}
            >
              Cookie Policy
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
