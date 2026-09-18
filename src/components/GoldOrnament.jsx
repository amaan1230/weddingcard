import React from 'react';

export default function GoldOrnament({ className = "my-4" }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
      <span className="w-2.5 h-2.5 rotate-45 border border-[#C5A059] bg-[#FAF6F0]" />
      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
    </div>
  );
}
