import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { GoldStar, GoldDots } from './Ornaments';
import { weddingData } from '../data/weddingData';

export default function Events() {
  return (
    <section
      id="events"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden bg-[#FAF6F0]"
    >
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
          className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8B6914] font-semibold mb-6"
        >
          {weddingData.eventsHeading}
        </motion.p>

        {/* ── Event detail cards ── */}
        <div className="space-y-6">
          {weddingData.events.map((event, i) => (
            <motion.div
              key={event.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2 + i * 0.1 }}
              className="w-full rounded-2xl border border-[#8B6914]/25 bg-[#FDFBF7] shadow-md overflow-hidden"
            >
              <p className="font-serif text-[1.1rem] tracking-[0.25em] text-[#8B6914] font-semibold uppercase text-center pt-5">
                {event.label}
              </p>

              {/* Row 1: Date */}
              <div className="flex items-start gap-4 px-6 py-5">
                <div className="w-9 h-9 rounded-full border border-[#8B6914]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-4 h-4 text-[#3C2A1E]" />
                </div>
                <div className="text-left">
                  <p className="font-serif text-[1.05rem] text-[#1E1410] font-semibold leading-snug">
                    {event.dateText}
                  </p>
                </div>
              </div>

              <div className="mx-6 h-px bg-[#8B6914]/12" />

              {/* Row 2: Time */}
              <div className="flex items-start gap-4 px-6 py-5">
                <div className="w-9 h-9 rounded-full border border-[#8B6914]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-[#3C2A1E]" />
                </div>
                <div className="text-left">
                  <p className="font-serif text-[0.95rem] text-[#1E1410] font-semibold">Time</p>
                  <p className="font-sans text-[0.8rem] text-[#5C4E46] mt-0.5">{event.timeText}</p>
                </div>
              </div>

              <div className="mx-6 h-px bg-[#8B6914]/12" />

              {/* Row 3: Venue */}
              <div className="flex items-start gap-4 px-6 py-5">
                <div className="w-9 h-9 rounded-full border border-[#8B6914]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#3C2A1E]" />
                </div>
                <div className="text-left">
                  <p className="font-serif text-[0.95rem] text-[#1E1410] font-semibold">Venue</p>
                  <p className="font-sans text-[0.8rem] text-[#5C4E46] mt-0.5">{event.venueText}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="my-6"
        >
          <GoldDots />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="font-script text-[1.7rem] sm:text-[2rem] text-[#4A3728]"
        >
          {weddingData.eventsTagline}
        </motion.p>
      </div>
    </section>
  );
}
