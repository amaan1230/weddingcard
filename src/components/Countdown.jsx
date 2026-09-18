import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GoldStar, GoldDots } from './Ornaments';
import { weddingData } from '../data/weddingData';

function useCountdown(isoTarget) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, done: false });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(isoTarget).getTime() - Date.now();
      if (diff <= 0) { setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, done: true }); return; }
      setTime({
        days:    Math.floor(diff / 864e5),
        hours:   Math.floor((diff % 864e5) / 36e5),
        minutes: Math.floor((diff % 36e5) / 6e4),
        seconds: Math.floor((diff % 6e4) / 1e3),
        done: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [isoTarget]);

  return time;
}

export default function Countdown() {
  const t = useCountdown(weddingData.isoDate);

  const units = [
    { label: 'Days',    value: t.days },
    { label: 'Hours',   value: t.hours },
    { label: 'Minutes', value: t.minutes },
    { label: 'Seconds', value: t.seconds },
  ];

  return (
    <section
      id="countdown"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden"
    >
      {/* ── Background: arch empty ── */}
      <div
        className="absolute inset-0 bg-cover bg-[center_top] bg-no-repeat"
        style={{ backgroundImage: `url(${weddingData.images.archCouple})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/88 via-[#FDFBF7]/72 to-[#FDFBF7]/88" />

      <div className="relative z-10 max-w-sm mx-auto text-center">
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
          className="font-sans text-[10px] tracking-[0.38em] uppercase text-[#8B6914] font-semibold mb-8"
        >
          {weddingData.countdown.eyebrow}
        </motion.p>

        {/* ── 2 × 2 arched countdown grid ── */}
        <div className="grid grid-cols-2 gap-4 max-w-[260px] mx-auto mb-8">
          {units.map((u, i) => (
            <motion.div
              key={u.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.08 }}
              /* Arched pill top */
              className="rounded-t-[999px] rounded-b-xl border border-[#8B6914]/35 bg-[#FDFBF7]/92 backdrop-blur-sm shadow-md py-6 px-3 text-center"
            >
              <p className="font-serif text-[2.4rem] sm:text-[2.8rem] text-[#1E1410] font-semibold leading-none">
                {String(u.value).padStart(2, '0')}
              </p>
              <p className="font-sans text-[10px] text-[#5C4E46] font-medium mt-1 tracking-wide">
                {u.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <GoldDots />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="font-script text-[1.6rem] sm:text-2xl text-[#4A3728] mt-4"
        >
          {weddingData.countdown.tagline}
        </motion.p>
      </div>
    </section>
  );
}
