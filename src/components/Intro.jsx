import React from 'react';
import { motion } from 'framer-motion';
import { GoldStar, GoldDots } from './Ornaments';
import { weddingData } from '../data/weddingData';

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative py-24 px-6 flex flex-col items-center justify-center bg-[#FAF6F0]/70 text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto"
      >
        <p className="font-script text-[2.4rem] sm:text-[2.8rem] text-[#8B6914] leading-tight mb-3">
          With joyful hearts
        </p>
        <p className="font-serif italic text-[1.1rem] sm:text-xl text-[#3C2A1E] leading-relaxed mb-5">
          "We invite you to celebrate the beginning of our forever."
        </p>
        <GoldDots />
        <p className="font-serif text-[1rem] tracking-[0.25em] uppercase text-[#4A3728] mt-4">
          {weddingData.groom} &amp; {weddingData.bride}
        </p>
      </motion.div>
    </section>
  );
}
