import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Heart, Calendar, Clock, MapPin } from 'lucide-react';
import { GoldStar } from './Ornaments';
import { weddingData } from '../data/weddingData';

const NAV = [
  { label: 'Home',         href: '#home',         Icon: Home },
  { label: 'Our Story',    href: '#story',         Icon: Heart },
  { label: 'Wedding Day',  href: '#wedding-date',  Icon: Calendar },
  { label: 'Countdown',    href: '#countdown',     Icon: Clock },
  { label: 'Event Details',href: '#events',        Icon: Calendar },
  { label: 'The Venue',    href: '#venue',         Icon: MapPin },
];

export default function FloatingNavigation({ open, onToggle }) {
  const go = (href) => {
    onToggle(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  return (
    <>
      {/* Trigger button – fixed top-right */}
      <button
        onClick={() => onToggle(!open)}
        aria-label="Toggle menu"
        className="fixed top-5 right-5 z-[55] flex items-center justify-center w-10 h-10 rounded-sm bg-[#FDFBF7]/90 backdrop-blur-sm border border-[#8B6914]/30 shadow-sm cursor-pointer hover:bg-[#FDFBF7] transition-colors"
      >
        {open
          ? <X className="w-5 h-5 text-[#3C2A1E]" />
          : <Menu className="w-5 h-5 text-[#3C2A1E]" />}
      </button>

      {/* Full-screen overlay drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[54] bg-[#FDFBF7]/97 backdrop-blur-lg flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#8B6914]/15">
              <p className="font-serif text-xl tracking-widest text-[#1E1410] uppercase">
                {weddingData.groom} &amp; {weddingData.bride}
              </p>
              <button
                onClick={() => onToggle(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#8B6914]/30 cursor-pointer"
              >
                <X className="w-5 h-5 text-[#3C2A1E]" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="flex-1 flex flex-col items-center justify-center gap-5 py-8">
              <GoldStar className="w-7 h-7 text-[#8B6914] mb-2" />
              {NAV.map(({ label, href, Icon }, i) => (
                <motion.button
                  key={href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => go(href)}
                  className="group flex items-center gap-3 text-xl font-serif tracking-[0.18em] text-[#1E1410] uppercase hover:text-[#8B6914] transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4 text-[#8B6914]" />
                  {label}
                </motion.button>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center pb-6 border-t border-[#8B6914]/15 pt-4">
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#8B6914]">
                {weddingData.numericDate}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
