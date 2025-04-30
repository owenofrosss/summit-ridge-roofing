"use client";

import { FC } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showText?: boolean;
}

const Logo: FC<LogoProps> = ({ 
  className, 
  variant = "dark", 
  showText = true 
}) => {
  const isDark = variant === "dark";
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 60 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300 hover:scale-105"
        >
          {/* Mountain peak with roof */}
          <path 
            d="M30 5L55 45H5L30 5Z" 
            fill={isDark ? "#1e2a38" : "#ffffff"} 
            stroke={isDark ? "#1e2a38" : "#ffffff"} 
            strokeWidth="2"
          />
          <path 
            d="M18 45L30 25L42 45H18Z" 
            fill={isDark ? "#ffffff" : "#1e2a38"} 
            stroke={isDark ? "#ffffff" : "#1e2a38"} 
            strokeWidth="1.5"
          />
          <path 
            d="M25 45L30 37L35 45H25Z" 
            fill={isDark ? "#1e2a38" : "#ffffff"} 
            stroke={isDark ? "#1e2a38" : "#ffffff"} 
            strokeWidth="1"
          />
          
          {/* Horizontal lines representing shingles */}
          <line 
            x1="19" 
            y1="41" 
            x2="41" 
            y2="41" 
            stroke={isDark ? "#1e2a38" : "#ffffff"} 
            strokeWidth="1"
          />
          <line 
            x1="21" 
            y1="37" 
            x2="39" 
            y2="37" 
            stroke={isDark ? "#1e2a38" : "#ffffff"} 
            strokeWidth="1"
          />
          <line 
            x1="24" 
            y1="33" 
            x2="36" 
            y2="33" 
            stroke={isDark ? "#1e2a38" : "#ffffff"} 
            strokeWidth="1"
          />
          <line 
            x1="26" 
            y1="29" 
            x2="34" 
            y2="29" 
            stroke={isDark ? "#1e2a38" : "#ffffff"} 
            strokeWidth="1"
          />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-lg leading-tight tracking-wide ${isDark ? 'text-[#1e2a38]' : 'text-white'}`}>
            SUMMIT RIDGE
          </span>
          <span className={`text-sm font-medium tracking-wider ${isDark ? 'text-[#1e2a38]/80' : 'text-white/90'}`}>
            ROOFING
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo; 