import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { GoldStar, GoldDots } from './Ornaments';
import { weddingData } from '../data/weddingData';

export default function Venue() {
  return (
    <section
      id="venue"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* ── Background: arch + couple ── */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat"
        style={{ backgroundImage: `url(${weddingData.images.archCouple})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/75 to-[#FDFBF7]/90" />

      <div className="relative z-10 max-w-sm mx-auto text-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GoldStar />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8B6914] font-semibold mb-4"
        >
          {weddingData.venue.heading}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-[1.05rem] text-[#3C2A1E] leading-relaxed mb-6 max-w-[260px] mx-auto"
        >
          {weddingData.venue.subheading}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mb-8"
        >
          <p className="font-serif text-[1.1rem] font-semibold text-[#1E1410]">
            {weddingData.venueName}
          </p>
          <p className="font-sans text-[0.8rem] text-[#5C4E46] mt-1 max-w-[260px] mx-auto">
            {weddingData.venueAddress}
          </p>
        </motion.div>

        {/* VIEW ON GOOGLE MAPS button – dark brown pill */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a
            href={weddingData.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full max-w-[280px] py-3.5 rounded-full text-[11px] tracking-[0.22em] font-semibold uppercase text-[#FAF6F0] bg-[#6B4F2C] hover:bg-[#3C2A1E] transition-colors shadow-md cursor-pointer"
          >
            <MapPin className="w-4 h-4" />
            <span>VIEW ON GOOGLE MAPS</span>
          </a>
        </motion.div>

        {/* Maps URL as text link */}
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href={weddingData.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block font-sans text-[10px] text-[#8B6914] mt-3 underline underline-offset-2 hover:text-[#3C2A1E] break-all max-w-[280px] mx-auto"
        >
          {weddingData.mapsUrl}
        </motion.a>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="my-6"
        >
          <GoldDots />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-script text-[1.6rem] sm:text-2xl text-[#4A3728]"
        >
          {weddingData.venue.tagline}
        </motion.p>
      </div>
    </section>
  );
}
