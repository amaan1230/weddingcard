import React from 'react';
import { motion } from 'framer-motion';
import { GoldStar, GoldDots } from './Ornaments';
import { weddingData } from '../data/weddingData';

export default function FinalSection() {
  return (
    <section className="relative py-28 px-6 flex flex-col items-center justify-center overflow-hidden bg-[#FDFBF7]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35 pointer-events-none"
        style={{ backgroundImage: `url(${weddingData.images.archEmpty})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/70 to-[#FDFBF7]/90 pointer-events-none" />

      <div className="relative z-10 text-center max-w-sm mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <GoldStar />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-script text-[2.6rem] sm:text-[3.2rem] text-[#8B6914] leading-tight mb-1"
        >
          Forever Begins Here
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-serif text-[clamp(2.5rem,10vw,4rem)] tracking-wider text-[#1E1410] uppercase font-normal my-3"
        >
          {weddingData.groom} &amp; {weddingData.bride}
        </motion.h2>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
          <GoldDots />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-[11px] tracking-[0.38em] uppercase text-[#8B6914] mt-4"
        >
          {weddingData.numericDate}
        </motion.p>
      </div>
    </section>
  );
}
