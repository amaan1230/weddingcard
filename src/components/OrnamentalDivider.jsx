import React from 'react';

export default function OrnamentalDivider({ className = "my-8", dark = false }) {
  const strokeColor = dark ? "#9A7732" : "#C5A059";
  
  return (
    <div className={`flex items-center justify-center gap-3 w-full max-w-md mx-auto ${className}`}>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
      
      {/* Ornamental Central Mandala/Flower SVG */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C5A059] flex-shrink-0">
        <path d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z" fill={strokeColor} opacity="0.85"/>
        <circle cx="12" cy="10" r="1.5" fill="#FAF6F0"/>
        <path d="M12 5V15M7 10H17" stroke={strokeColor} strokeWidth="0.5" strokeDasharray="1 1"/>
      </svg>

      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
    </div>
  );
}
