import React, { createContext, useContext, useState } from 'react';

interface LogoAnimationContextType {
  hasAnimated: boolean;
  setHasAnimated: (value: boolean) => void;
  showNavbarLogo: boolean;
  setShowNavbarLogo: (value: boolean) => void;
}

const LogoAnimationContext = createContext<LogoAnimationContextType | undefined>(undefined);

export const LogoAnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);

  return (
    <LogoAnimationContext.Provider value={{ hasAnimated, setHasAnimated, showNavbarLogo, setShowNavbarLogo }}>
      {children}
    </LogoAnimationContext.Provider>
  );
};

export const useLogoAnimation = () => {
  const context = useContext(LogoAnimationContext);
  if (context === undefined) {
    throw new Error('useLogoAnimation must be used within a LogoAnimationProvider');
  }
  return context;
}; 