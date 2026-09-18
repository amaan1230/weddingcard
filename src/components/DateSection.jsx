import React from 'react';
import { motion } from 'framer-motion';
import { GoldStar, GoldDots } from './Ornaments';
import { weddingData } from '../data/weddingData';

export default function DateSection() {
  return (
    <section
      id="wedding-date"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* ── Background: empty arch ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${weddingData.images.archEmpty})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/75 to-[#FDFBF7]/90" />

      <div className="relative z-10 max-w-sm mx-auto text-center">
        {/* Gold star icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GoldStar />
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8B6914] font-semibold mb-3"
        >
          {weddingData.weddingDay.eyebrow}
        </motion.p>

        {/* Script heading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-script text-[2.8rem] sm:text-[3.4rem] text-[#3C2A1E] leading-none mb-8"
        >
          {weddingData.weddingDay.script}
        </motion.p>

        {/* ── Arched window date card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          /* Pill top = arch shape */
          className="relative mx-auto w-48 sm:w-56 rounded-t-[999px] rounded-b-2xl border border-[#8B6914]/40 bg-[#FDFBF7]/92 backdrop-blur-sm shadow-xl py-9 px-6 text-center"
        >
          {/* inner border accent */}
          <div className="absolute inset-[6px] rounded-t-[999px] rounded-b-xl border border-[#8B6914]/20 pointer-events-none" />

          <p className="font-sans text-[9px] tracking-[0.35em] uppercase text-[#5C4E46] font-medium mb-2">
            {weddingData.dayOfWeek}
          </p>
          <p className="font-serif text-[5.5rem] sm:text-[6.5rem] leading-none text-[#1E1410] font-semibold -mt-1">
            {weddingData.dayNumber}
          </p>
          <p className="font-serif text-[1.1rem] tracking-[0.25em] text-[#8B6914] uppercase font-medium mt-1">
            {weddingData.monthName}
          </p>
          <p className="font-serif text-[1.3rem] tracking-[0.2em] text-[#3C2A1E] font-light mt-0.5">
            {weddingData.yearNumber}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="my-6"
        >
          <GoldDots />
        </motion.div>

        {/* Bottom script tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-script text-[1.6rem] sm:text-2xl text-[#4A3728]"
        >
          {weddingData.weddingDay.tagline}
        </motion.p>
      </div>
    </section>
  );
}
