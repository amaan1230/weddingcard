import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../data/weddingData';

function CoupleIcon() {
  return (
    <svg className="w-16 h-auto text-[#8B6914] mb-6" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="42" cy="26" r="14" stroke="currentColor" strokeWidth="2.5" />
      <path d="M42 42 C24 46 20 62 20 90 L20 130 L64 130 L64 90 C64 62 60 46 42 42Z" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="84" cy="24" r="13" stroke="currentColor" strokeWidth="2.5" />
      <path d="M84 39 C66 44 62 60 62 92 L62 132 L108 132 L108 92 C108 60 102 44 84 39Z" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function DateRow({ day, dateNumber, month, time, year }) {
  return (
    <>
      <div className="flex items-end justify-center gap-6 sm:gap-8">
        <span className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-[#1E1410] border-t border-[#8B6914]/40 pt-2 whitespace-nowrap">
          {day}
        </span>
        <div className="text-center">
          <p className="font-serif text-[3rem] sm:text-[3.4rem] font-semibold leading-none text-[#1E1410]">
            {dateNumber}
          </p>
          <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-[#8B6914]">
            {month}
          </span>
        </div>
      </div>
      <p className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-[#1E1410] mt-4">
        {time}
      </p>
      <p className="font-sans text-[10px] tracking-[0.3em] text-[#5C4E46] mt-2 mb-7">
        {year}
      </p>
    </>
  );
}

function VenueBlock() {
  return (
    <>
      <p className="font-serif text-[1.1rem] font-semibold text-[#1E1410] mb-1">
        {weddingData.venueCard.name}
      </p>
      <p className="font-sans text-[10px] tracking-[0.03em] uppercase text-[#5C4E46] leading-relaxed max-w-[240px] mx-auto">
        {weddingData.venueCard.address}
      </p>
    </>
  );
}

export default function Events() {
  const { nikah, walima } = weddingData;

  return (
    <section
      id="events"
      className="relative flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-[#FAF6F0]"
    >
      <div className="relative z-10 max-w-sm mx-auto text-center w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8B6914] font-semibold mb-8"
        >
          {weddingData.eventsHeading}
        </motion.p>

        {/* ── Nikah card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="w-full rounded-2xl border border-[#8B6914]/25 bg-[#FDFBF7] shadow-md px-6 py-10"
        >
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase font-semibold text-[#8B6914] mb-2">
            {nikah.eyebrow}
          </p>
          <p className="font-sans text-[9px] tracking-[0.12em] uppercase text-[#3C2A1E] mb-7">
            {nikah.hijriDate}
          </p>

          <p className="font-script text-[2.3rem] sm:text-[2.6rem] text-[#1E1410] leading-none mb-6">
            {nikah.familyName}
          </p>

          <p className="font-sans text-[10px] tracking-[0.06em] uppercase leading-relaxed text-[#3C2A1E] font-medium max-w-[260px] mx-auto mb-7">
            {nikah.bodyText}
          </p>

          <p className="font-script text-[2.5rem] sm:text-[2.8rem] text-[#8B6914] leading-none">
            {weddingData.groom}
          </p>
          <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#5C4E46] mt-2">
            {nikah.groomParent}
          </p>

          <p className="font-script text-[1.6rem] text-[#8B6914] my-3">&amp;</p>

          <p className="font-script text-[2.5rem] sm:text-[2.8rem] text-[#8B6914] leading-none">
            {weddingData.bride}
          </p>
          <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#5C4E46] mt-2 mb-8">
            {nikah.brideParent}
          </p>

          <p className="font-sans text-[10px] tracking-[0.28em] uppercase font-semibold text-[#1E1410] mb-6">
            {nikah.inviteLine}
          </p>

          <DateRow day={nikah.day} dateNumber={nikah.dateNumber} month={nikah.month} time={nikah.time} year={nikah.year} />

          <VenueBlock />
        </motion.div>

        {/* ── Walima card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full rounded-2xl border border-[#8B6914]/25 bg-[#FDFBF7] shadow-md px-6 py-10 mt-8"
        >
          <p className="font-sans text-[10px] tracking-[0.06em] uppercase leading-relaxed text-[#3C2A1E] font-medium max-w-[260px] mx-auto mb-2">
            {walima.bodyText}
          </p>

          <div className="flex justify-center">
            <CoupleIcon />
          </div>

          <p className="font-script text-[2.7rem] sm:text-[3rem] text-[#8B6914] leading-none mb-7">
            {walima.title}
          </p>

          <DateRow day={walima.day} dateNumber={walima.dateNumber} month={walima.month} time={walima.time} year={walima.year} />

          <VenueBlock />
        </motion.div>
      </div>
    </section>
  );
}
