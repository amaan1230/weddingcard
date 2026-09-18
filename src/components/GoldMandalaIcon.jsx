import React from 'react';

export default function GoldMandalaIcon({ className = "w-7 h-7 text-[#C5A059] mx-auto my-2" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.9">
        {/* Diamond Outer Rays */}
        <path d="M20 2L23 15L36 18L23 21L20 34L17 21L4 18L17 15L20 2Z" fill="#C5A059" opacity="0.8" />
        {/* Diagonal Petals */}
        <path d="M20 8L24 16L32 20L24 24L20 32L16 24L8 20L16 16L20 8Z" fill="#E6C594" opacity="0.9" />
        {/* Inner Circle */}
        <circle cx="20" cy="20" r="3" fill="#FAF6F0" stroke="#C5A059" strokeWidth="1" />
      </g>
    </svg>
  );
}
