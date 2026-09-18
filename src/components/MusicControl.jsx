import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2 } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export default function MusicControl({ autoStartTrigger = false }) {
  const [playing, setPlaying] = useState(false);
  const [synthetic, setSynthetic] = useState(false);
  const audioRef = useRef(null);
  const ctxRef = useRef(null);
  const timerRef = useRef(null);

  // ── Web Audio harp synth fallback ─────────────────────────────────────────
  const startSynth = () => {
    try {
      if (!ctxRef.current) {
        const AC = window.AudioContext || window.webkitAudioContext;
        ctxRef.current = new AC();
      }
      const ctx = ctxRef.current;
      if (ctx.state === 'suspended') ctx.resume();
      const freqs = [261.63, 329.63, 392, 493.88, 587.33];
      let step = 0;
      timerRef.current = setInterval(() => {
        const f = freqs[step++ % freqs.length];
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.value = f;
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.07, ctx.currentTime + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.4);
        osc.connect(gain); gain.connect(ctx.destination);
        osc.start(); osc.stop(ctx.currentTime + 2.5);
      }, 1300);
    } catch (_) {}
  };

  const stopSynth = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    if (ctxRef.current?.state === 'running') ctxRef.current.suspend();
  };

  useEffect(() => {
    const audio = new Audio(weddingData.audioPath);
    audio.loop = true;
    audioRef.current = audio;
    audio.addEventListener('error', () => setSynthetic(true));
    return () => { audio.pause(); stopSynth(); };
  }, []);

  useEffect(() => {
    if (autoStartTrigger && !playing) toggle(true);
  }, [autoStartTrigger]);

  const toggle = (force) => {
    const next = force !== undefined ? force : !playing;
    if (next) {
      if (!synthetic && audioRef.current) {
        audioRef.current.play().then(() => setPlaying(true)).catch(() => {
          setSynthetic(true); startSynth(); setPlaying(true);
        });
      } else { startSynth(); setPlaying(true); }
    } else {
      audioRef.current?.pause(); stopSynth(); setPlaying(false);
    }
  };

  return (
    <div className="absolute bottom-6 right-5 sm:right-8 z-10 flex flex-col items-center gap-1">
      <button
        onClick={() => toggle()}
        aria-label={playing ? 'Pause Music' : 'Play Music'}
        className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg border transition-all duration-300 cursor-pointer ${
          playing
            ? 'bg-[#3C2A1E] border-[#8B6914] text-[#FAF6F0]'
            : 'bg-[#FDFBF7]/90 border-[#8B6914]/40 text-[#3C2A1E] hover:border-[#8B6914]'
        }`}
      >
        {playing ? <Volume2 className="w-5 h-5 text-[#C5A059]" /> : <Music className="w-5 h-5" />}
      </button>
      <span className="font-sans text-[9px] tracking-widest uppercase text-[#4A3728] bg-[#FDFBF7]/80 px-2 py-0.5 rounded-full">
        {playing ? 'Pause Music' : 'Play Music'}
      </span>
    </div>
  );
}
