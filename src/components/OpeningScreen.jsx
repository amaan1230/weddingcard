import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function OpeningScreen({ onOpen, onMenuClick }) {
  const [exiting, setExiting] = useState(false);

  const handleOpen = () => {
    if (exiting) return;
    setExiting(true);
    onOpen(); // notify parent immediately so music can start
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          key="opening"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[60] overflow-hidden select-none"
        >
          {/* ── Full-bleed background image ── */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${weddingData.images.openingBg})` }}
          />
          {/* Light scrim so text stays legible */}
          <div className="absolute inset-0 bg-[#FDFBF7]/30" />

          {/* ── Hamburger top-right ── */}
          <button
            onClick={onMenuClick}
            aria-label="Menu"
            className="absolute top-5 right-5 z-20 flex items-center justify-center w-10 h-10 rounded-sm bg-[#FDFBF7]/80 backdrop-blur-sm border border-[#8B6914]/30 shadow-sm cursor-pointer"
          >
            <Menu className="w-5 h-5 text-[#2C221E]" />
          </button>

          {/* ── Centre card ── */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-1"
            >
              <p className="font-sans text-[11px] tracking-[0.35em] uppercase text-[#3C2A1E] font-medium">
                {weddingData.opening.eyebrow}
              </p>

              <h1 className="font-serif text-[clamp(3rem,14vw,5.5rem)] tracking-wider text-[#1E1410] font-normal uppercase leading-[1.05]">
                {weddingData.groom}
              </h1>

              <p className="font-script text-[clamp(2.5rem,11vw,4.5rem)] text-[#8B6914] leading-none my-0.5">
                &amp;
              </p>

              <h1 className="font-serif text-[clamp(3rem,14vw,5.5rem)] tracking-wider text-[#1E1410] font-normal uppercase leading-[1.05]">
                {weddingData.bride}
              </h1>

              <p className="font-sans text-[13px] sm:text-sm tracking-[0.38em] text-[#3C2A1E] font-medium mt-3">
                {weddingData.numericDate}
              </p>
            </motion.div>

            {/* Ornament */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center gap-2 my-4"
            >
              <span className="w-10 h-px bg-[#8B6914]/50" />
              <span className="w-1.5 h-1.5 rotate-45 border border-[#8B6914]" />
              <span className="w-10 h-px bg-[#8B6914]/50" />
            </motion.div>

            {/* Italic subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="font-script text-[1.35rem] sm:text-2xl text-[#4A3728] mb-7"
            >
              {weddingData.opening.subtitle}
            </motion.p>

            {/* OPEN INVITATION button */}
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              onClick={handleOpen}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#3C2A1E]/70 bg-[#FDFBF7]/90 text-[#1E1410] text-xs tracking-[0.28em] font-medium uppercase hover:bg-[#3C2A1E] hover:text-[#FAF6F0] transition-all duration-300 shadow-md cursor-pointer"
            >
              <span>OPEN INVITATION</span>
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </div>

          {/* ── Scroll cue ── */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            onClick={handleOpen}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
          >
            <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#4A3728]">
              {weddingData.opening.scroll}
            </span>
            <ChevronDown className="w-4 h-4 text-[#8B6914] animate-bounce" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
