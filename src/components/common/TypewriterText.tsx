import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorColor?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 100,
  delay = 500,
  className = "",
  cursorColor = "#c39d5e"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [cursorPosition, setCursorPosition] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Reset state when text changes
    setDisplayText('');
    setCurrentIndex(0);
    setCursorPosition(0);
    
    // Initial delay before starting
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCurrentIndex(prevIndex => {
          if (prevIndex < text.length) {
            setDisplayText(prevText => prevText + text[prevIndex]);
            return prevIndex + 1;
          } else {
            clearInterval(interval);
            return prevIndex;
          }
        });
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(initialDelay);
  }, [text, speed, delay]);

  // Update cursor position when displayText changes
  useEffect(() => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setCursorPosition(rect.width);
    }
  }, [displayText]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`inline-block relative ${className}`}>
      <span className="invisible">{text}</span>
      <span ref={textRef} className="absolute top-0 left-0">{displayText}</span>
      {showCursor && (
        <motion.span
          className="inline-block absolute"
          style={{ 
            width: '2px', 
            height: '1.2em', 
            backgroundColor: cursorColor,
            left: `${cursorPosition}px`,
            top: '0',
            verticalAlign: 'top'
          }}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        />
      )}
    </div>
  );
}; 