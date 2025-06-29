import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { useLogoAnimation } from "@/contexts/LogoAnimationContext";
import logowhite from "@/assets/NOOR_LOGO.svg";
import NOOR_BAKERS_LOGO from "@/assets/NOOR_BAKERS_LOGO.svg";
import Noor_LOGO__DARK from "@/assets/download.svg";
import download_1 from "@/assets/download (1).svg";

interface AnimatedLogoProps {
  variant: "hero" | "navbar";
  className?: string;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ variant, className = "" }) => {
  const { theme } = useTheme();
  const { hasAnimated, setHasAnimated, showNavbarLogo, setShowNavbarLogo } = useLogoAnimation();
  const controls = useAnimation();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      // On mobile/tablet, always show navbar logo
      if (!desktop) {
        setShowNavbarLogo(true);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [variant, setShowNavbarLogo]);

  useEffect(() => {
    if (variant === "hero" && isDesktop && !hasAnimated) {
      const handleScroll = () => {
        if (!hasAnimated) {
          setHasAnimated(true);
          
          // Show navbar logo slightly before animation completes (1ms earlier)
          const animationDuration = 800; // 0.8 seconds in ms
          const earlyTrigger = 200; // 1ms earlier
          
          setTimeout(() => {
            setShowNavbarLogo(true);
          }, animationDuration - earlyTrigger);
          
          // Simple animation to navbar position
          controls.start({
            x: -window.innerWidth / 2 + 100, // Move to left side
            y: -window.innerHeight / 2 + 50, // Move to top
            scale: 0.7,
            transition: {
              duration: 0.8,
              ease: "easeInOut"
            }
          });
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [variant, isDesktop, hasAnimated, controls, setHasAnimated, setShowNavbarLogo]);

  const renderLogo = () => {
    if (theme === 'dark') {
      return (
        <div className="flex items-center">
          <img src={Noor_LOGO__DARK} alt="Noor Bakers Logo" className="w-40 h-16" /> 
          <img src={download_1} alt="Noor Bakers Logo" className="w-40 h-16" /> 
        </div>
      );
    } else {
      return (
        <div className="flex items-center">
          <img src={logowhite} alt="Noor Bakers Logo" className="h-16" /> 
          <img src={NOOR_BAKERS_LOGO} alt="Noor Bakers Logo" className="w-40 h-16" /> 
        </div>
      );
    }
  };

  // For navbar variant on desktop, hide initially and show only after animation completes
  if (variant === "navbar" && isDesktop && !showNavbarLogo) {
    return null;
  }

  // On mobile/tablet, always show normally
  if (!isDesktop) {
    return (
      <div className={className}>
        {renderLogo()}
      </div>
    );
  }

  // On desktop, render with animation for hero, slide-up animation for navbar
  if (variant === "hero") {
    return (
      <motion.div
        className={className}
        animate={controls}
        initial={{ x: 0, y: 0, scale: 2 }}
        style={{ position: 'relative', zIndex: 1000 }}
      >
        {renderLogo()}
      </motion.div>
    );
  }

  // Navbar variant on desktop after animation - with slide-up animation
  return (
    <motion.div
      className={className}
      initial={{ y: 50, x:30, opacity: 0 }}
      animate={{ y: 0, x:0, opacity: 1 }}
      transition={{
        duration: 0.05,
        ease: "easeOut",
        delay: 0 // Small delay for smooth transition
      }}
    >
      {renderLogo()}
    </motion.div>
  );
}; 