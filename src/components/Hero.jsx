import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import MusicControl from './MusicControl';

export default function Hero({ musicTrigger }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-between pt-16 pb-10 px-5 overflow-hidden"
    >
      {/* ── Background: arch + couple image ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${weddingData.images.archCouple})` }}
      />
      {/* Top fade keeps text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/85 via-[#FDFBF7]/20 to-[#FDFBF7]/85" />

      {/* ── Center Text ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center mt-4">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-[10px] sm:text-[11px] tracking-[0.38em] uppercase text-[#3C2A1E] font-medium mb-4"
        >
          {weddingData.home.eyebrow}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="space-y-0.5"
        >
          <h1 className="font-serif text-[clamp(3.2rem,15vw,6rem)] tracking-wider text-[#1E1410] font-normal uppercase leading-[1.05]">
            {weddingData.groom}
          </h1>
          <p className="font-script text-[clamp(2.8rem,12vw,5rem)] text-[#8B6914] leading-none">
            &amp;
          </p>
          <h1 className="font-serif text-[clamp(3.2rem,15vw,6rem)] tracking-wider text-[#1E1410] font-normal uppercase leading-[1.05]">
            {weddingData.bride}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#3C2A1E] max-w-[260px] text-center mt-5 mb-4 leading-relaxed"
        >
          {weddingData.home.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-base sm:text-xl tracking-[0.3em] text-[#1E1410] font-medium uppercase"
        >
          {weddingData.dateDisplay}
        </motion.p>
      </div>

      {/* ── Music Control (bottom-right) ── */}
      <MusicControl autoStartTrigger={musicTrigger} />

      {/* ── Scroll cue ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1, delay: 0.8 }}
        onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
        className="relative z-10 flex flex-col items-center gap-1 cursor-pointer"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#4A3728]">
          SCROLL TO EXPLORE
        </span>
        <ChevronDown className="w-4 h-4 text-[#8B6914]" />
      </motion.button>
    </section>
  );
}
