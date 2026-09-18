import React from 'react';

// Reusable luxury corner floral motif SVG
export function FloralCorner({ position = "top-left", className = "w-24 h-24 text-[#C5A059] opacity-70" }) {
  let rotateClass = "";
  if (position === "top-right") rotateClass = "rotate-90";
  if (position === "bottom-right") rotateClass = "rotate-180";
  if (position === "bottom-left") rotateClass = "-rotate-90";

  return (
    <svg 
      className={`${className} ${rotateClass} transition-all duration-700 pointer-events-none select-none`}
      viewBox="0 0 120 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 5V40C5 20.67 20.67 5 40 5H5Z" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2"/>
      <path d="M12 12V60C12 33.4903 33.4903 12 60 12H12Z" stroke="currentColor" strokeWidth="1.2"/>
      
      {/* Botanical leaves & rose petal strokes */}
      <path d="M18 18C28 35 45 42 70 42C45 42 35 52 18 80" stroke="currentColor" strokeWidth="0.75" fill="none"/>
      <circle cx="28" cy="28" r="4" fill="currentColor" opacity="0.4"/>
      <path d="M35 15C42 22 40 32 30 35C23 38 18 30 25 22Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M15 35C22 42 32 40 35 30C38 23 30 18 22 25Z" fill="currentColor" opacity="0.25" stroke="currentColor" strokeWidth="0.5"/>
      
      <circle cx="60" cy="12" r="2" fill="currentColor"/>
      <circle cx="12" cy="60" r="2" fill="currentColor"/>
    </svg>
  );
}

// Decorative luxury frame container wrapper
export function DecorativeFrame({ children, className = "" }) {
  return (
    <div className={`relative p-6 sm:p-10 border border-[#C5A059]/30 rounded-xs bg-[#FAF6F0]/80 backdrop-blur-xs ${className}`}>
      {/* Corner Ornaments */}
      <div className="absolute top-2 left-2 pointer-events-none">
        <FloralCorner position="top-left" className="w-16 h-16 sm:w-20 sm:h-20 text-[#C5A059]" />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none">
        <FloralCorner position="top-right" className="w-16 h-16 sm:w-20 sm:h-20 text-[#C5A059]" />
      </div>
      <div className="absolute bottom-2 left-2 pointer-events-none">
        <FloralCorner position="bottom-left" className="w-16 h-16 sm:w-20 sm:h-20 text-[#C5A059]" />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none">
        <FloralCorner position="bottom-right" className="w-16 h-16 sm:w-20 sm:h-20 text-[#C5A059]" />
      </div>

      {/* Inner Thin Border Line */}
      <div className="absolute inset-3 border border-[#C5A059]/15 pointer-events-none" />

      {/* Frame Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function GoldLine({ className = "w-16" }) {
  return (
    <div className={`h-[1.5px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent ${className} mx-auto my-3`} />
  );
}
