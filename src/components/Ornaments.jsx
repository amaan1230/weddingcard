import React from 'react';

/** Small diamond-star ornament used as section divider / heading accent */
export function GoldStar({ className = "mx-auto my-3 w-7 h-7 text-[#8B6914]" }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 4-point star */}
      <path d="M16 2L18.4 13.6L30 16L18.4 18.4L16 30L13.6 18.4L2 16L13.6 13.6L16 2Z"
        fill="currentColor" opacity="0.85"/>
      {/* Inner small diamond */}
      <path d="M16 10L17.5 14.5L22 16L17.5 17.5L16 22L14.5 17.5L10 16L14.5 14.5L16 10Z"
        fill="#FAF6F0" opacity="0.9"/>
    </svg>
  );
}

/** Three-dot ornament used between text sections */
export function GoldDots({ className = "my-3" }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="w-1 h-1 rounded-full bg-[#8B6914]/50" />
      <span className="w-1.5 h-1.5 rotate-45 border border-[#8B6914]/70 inline-block" />
      <span className="w-1 h-1 rounded-full bg-[#8B6914]/50" />
    </div>
  );
}

/** Thin gold horizontal rule */
export function GoldLine({ className = "w-16 mx-auto my-3" }) {
  return (
    <div className={`h-px bg-gradient-to-r from-transparent via-[#8B6914]/60 to-transparent ${className}`} />
  );
}
