// ─── Central wedding data ─────────────────────────────────────────────────────
// Edit ONLY this file to update all wedding details
// ─────────────────────────────────────────────────────────────────────────────

export const weddingData = {
  // ── Couple ────────────────────────────────────────────────────────────────
  groom: "Aadil Ansari",
  bride: "Hadiya Ansari",

  // ── Date helpers ──────────────────────────────────────────────────────────
  dayOfWeek: "SATURDAY",
  dayNumber: "07",
  monthName: "NOVEMBER",
  yearNumber: "2026",
  dateDisplay: "07 NOVEMBER 2026",
  numericDate: "07 · 11 · 2026",
  isoDate: "2026-11-07T20:00:00+05:30",

  // ── Venue ─────────────────────────────────────────────────────────────────
  venueName: "Kokni Community Hall",
  venueAddress: "Morland Rd, Madanpura, Mumbai, Maharashtra 400008",
  mapsUrl: "https://maps.app.goo.gl/bhj3s17KfcBz1zhv9",

  // ── Audio ─────────────────────────────────────────────────────────────────
  audioPath: "/audio/wedding-music.mp3",

  // ── Background images ────────────────────────────────────────────────────
  images: {
    // Screen 1 – opening: ribbon/bow arch
    openingBg:    "/images/opening-bg.jpg",
    // Screen 2 & 3 – hero + story: couple inside floral arch
    archCouple:   "/images/bg-arch-couple.jpg",
    // Screen 4, 5, 7 – save the date / countdown / venue: empty arch view
    archEmpty:    "/images/bg-arch-empty.jpg",
  },

  // ── Copy ─────────────────────────────────────────────────────────────────
  opening: {
    eyebrow:   "THE WEDDING OF",
    subtitle:  "A beautiful beginning awaits...",
    scroll:    "SCROLL FOR A SNEAK PEEK",
  },

  home: {
    eyebrow:   "TOGETHER WITH THEIR FAMILIES",
    tagline:   "INVITE YOU TO CELEBRATE THE BEGINNING OF OUR FOREVER",
  },

  story: {
    eyebrow:   "OUR STORY",
    heading:   "Two Hearts, One Journey",
    body:      "Different paths, beautiful places, and a destiny that brought us here. We are so grateful for the love, support and moments that have shaped our story, and we can't wait to begin this new chapter together.",
    script:    "Better Together",
  },

  weddingDay: {
    eyebrow:   "THE WEDDING DAY",
    script:    "Save the Date",
    tagline:   "Two souls, one beautiful journey.",
  },

  countdown: {
    eyebrow:   "COUNTDOWN TO OUR FOREVER",
    tagline:   "A new chapter. A lifetime of love.",
  },

  eventsHeading: "THE CELEBRATIONS",
  eventsTagline: "We can't wait to celebrate with you.",
  events: [
    {
      label:     "NIKAH",
      dateText:  "Friday, 6 November 2026",
      timeText:  "8:00 PM – 11:00 PM",
      venueText: "Kokni Community Hall, Morland Rd, Madanpura, Mumbai, Maharashtra 400008",
    },
    {
      label:     "WALIMA",
      dateText:  "Saturday, 7 November 2026",
      timeText:  "8:00 PM – 11:00 PM",
      venueText: "Kokni Community Hall, Morland Rd, Madanpura, Mumbai, Maharashtra 400008",
    },
  ],

  venue: {
    heading:    "THE VENUE",
    subheading: "We can't wait to celebrate with you at our special venue.",
    tagline:    "Beautiful places make beautiful memories.",
  },

};
