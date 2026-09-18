import React, { useState } from 'react';
import OpeningScreen    from './components/OpeningScreen';
import FloatingNavigation from './components/FloatingNavigation';
import Hero             from './components/Hero';
import Intro            from './components/Intro';
import Story            from './components/Story';
import DateSection      from './components/DateSection';
import Countdown        from './components/Countdown';
import Events           from './components/Events';
import Venue            from './components/Venue';
import FinalSection     from './components/FinalSection';
import Footer           from './components/Footer';
import PetalsCanvas     from './components/PetalsCanvas';

export default function App() {
  const [opened, setOpened]     = useState(false);
  const [musicTrigger, setMT]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setMT(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FDFBF7] text-[#1E1410] overflow-x-hidden selection:bg-[#E6C594]/60">

      {/* Subtle ambient petals */}
      <PetalsCanvas />

      {/* ── Screen 1: Opening ── */}
      <OpeningScreen
        onOpen={handleOpen}
        onMenuClick={() => setMenuOpen(true)}
      />

      {/* ── Global Hamburger Nav (visible after opening) ── */}
      <FloatingNavigation open={menuOpen} onToggle={setMenuOpen} />

      {/* ── Screens 2–7 + extras ── */}
      <main className="relative z-20">
        <Hero      musicTrigger={musicTrigger} />   {/* Screen 2 */}
        <Intro />
        <Story />                                    {/* Screen 3 */}
        <DateSection />                              {/* Screen 4 */}
        <Countdown />                                {/* Screen 5 */}
        <Events />                                   {/* Screen 6 */}
        <Venue />                                    {/* Screen 7 */}
        <FinalSection />
        <Footer />
      </main>
    </div>
  );
}
