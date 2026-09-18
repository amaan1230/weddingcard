import React from 'react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[#8B6914]/15 bg-[#FDFBF7] text-center space-y-2">
      <p className="font-serif text-lg tracking-widest text-[#1E1410] uppercase">
        {weddingData.groom} &amp; {weddingData.bride}
      </p>
      <p className="font-sans text-[10px] tracking-[0.3em] text-[#8B6914] uppercase font-medium">
        {weddingData.dateDisplay}
      </p>
      <div className="flex items-center justify-center gap-1.5 text-xs text-[#5C4E46] pt-3 font-light">
        <span>Made with</span>
        <Heart className="w-3 h-3 text-[#8B6914] fill-[#8B6914]" />
        <span>for family &amp; friends</span>
      </div>
    </footer>
  );
}
