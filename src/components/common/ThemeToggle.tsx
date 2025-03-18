import React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      aria-label="Toggle theme"
      className="rounded-full transition-all duration-300 hover:bg-[#c39d5e]/10"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-[#c39d5e]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-[#c39d5e]" />
      )}
    </Button>
  );
}
