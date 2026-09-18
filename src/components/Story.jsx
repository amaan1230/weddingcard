import React from 'react';
import { motion } from 'framer-motion';
import { GoldStar, GoldDots } from './Ornaments';
import { weddingData } from '../data/weddingData';

export default function Story() {
  return (
    <section
      id="story"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* ── Background: arch + couple (same image as hero) ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${weddingData.images.archCouple})` }}
      />
      {/* Strong ivory overlay so editorial text stays on top */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/92 via-[#FDFBF7]/78 to-[#FDFBF7]/92" />

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
          className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8B6914] font-semibold mb-5"
        >
          {weddingData.story.eyebrow}
        </motion.p>

        {/* Main Serif Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-[clamp(2rem,9vw,3.2rem)] text-[#1E1410] font-medium leading-tight mb-5"
        >
          {weddingData.story.heading}
        </motion.h2>

        {/* Body text */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-[0.95rem] sm:text-base italic text-[#4A3728] leading-[1.8] mb-7"
        >
          {weddingData.story.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <GoldDots />
        </motion.div>

        {/* Script tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-script text-[2.4rem] sm:text-[2.8rem] text-[#4A3728] mt-4"
        >
          {weddingData.story.script}
        </motion.p>
      </div>
    </section>
  );
}
