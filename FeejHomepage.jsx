import React from "react";
import { Play, Plus, Search, Bell, Star, ChevronLeft, ChevronRight, ChevronRight as Chevron } from "lucide-react";

// ---------- Shared bits ----------

const NAV_LINKS = ["Home", "Explore", "Movies", "Series", "AI Shorts", "Channels", "Studios", "Festivals"];

function Pill({ children, variant = "outline" }) {
  const base = "inline-flex items-center gap-2 rounded text-xs font-medium px-2.5 py-1.5 whitespace-nowrap";
  const styles = {
    outline: "border border-zinc-700 text-zinc-300 rounded-md",
    filled: "bg-zinc-900 text-zinc-300 rounded-full",
  };
  return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}

function SectionHeader({ label, showViewAll = true }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-xs font-semibold tracking-widest text-zinc-400">{label}</h2>
      {showViewAll && (
        <button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-0.5">
          View All <Chevron className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}

function Rating({ value, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-1 text-lime-300 text-xs font-medium ${className}`}>
      <Star className="w-3 h-3 fill-lime-300 text-lime-300" /> {value}
    </span>
  );
}

// ---------- Navbar ----------

function Navbar() {
  return (
    <header className="flex items-center justify-between px-12 py-5 border-b border-zinc-900">
      <div className="flex items-center gap-12">
        <span className="text-xl font-bold tracking-tight">feej</span>
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition-colors ${
                i === 0 ? "text-lime-300" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-5">
        <button aria-label="Search" className="text-zinc-400 hover:text-white transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button aria-label="Notifications" className="text-zinc-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
        </button>
        <div className="w-9 h-9 rounded-full bg-zinc-700" />
      </div>
    </header>
  );
}

// ---------- Hero ----------

const AI_CAST = [
  { name: "Luna Aria", role: "as Elara" },
  { name: "Nova Reed", role: "as Kael" },
  { name: "Atlas Quinn", role: "as The Oracle" },
  { name: "Echo Vega", role: "as Nyra" },
];

function Hero() {
  return (
    <section className="relative w-full h-[480px] bg-zinc-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />

      <div className="relative h-full flex flex-col justify-center max-w-xl px-12 gap-4">
        <span className="text-xs font-semibold tracking-widest text-lime-300">FEATURED FILM</span>
        <h1 className="text-5xl font-black leading-[1.05] tracking-tight">THE LAST SIGNAL</h1>
        <p className="text-zinc-300 text-base max-w-md">
          In a world on the edge of silence, one signal can change everything.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {["2h 14m", "Sci-Fi", "2024", "4K", "5.1"].map((m) => (
            <Pill key={m} variant="outline">
              {m}
            </Pill>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button className="flex items-center gap-2 bg-lime-300 hover:bg-lime-200 text-black font-semibold text-sm px-6 py-3 rounded-md transition-colors">
            <Play className="w-4 h-4 fill-black" /> Play Trailer
          </button>
          <button className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors">
            <Plus className="w-4 h-4" /> Watchlist
          </button>
        </div>

        <div className="pt-2">
          <span className="text-[10px] font-medium tracking-widest text-zinc-500">TOOLS USED</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {["Midjourney", "Kling AI", "Runway", "Pika", "Suno", "+3"].map((t) => (
              <Pill key={t} variant="filled">
                {t}
              </Pill>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute top-[70px] right-12 flex-col items-end gap-3.5 w-52">
        <span className="text-[11px] font-semibold tracking-widest text-zinc-400">AI CAST</span>
        {AI_CAST.map((c) => (
          <div key={c.name} className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-zinc-700 border border-lime-300" />
            <div className="text-right">
              <p className="text-xs font-semibold text-white leading-tight">{c.name}</p>
              <p className="text-[11px] text-zinc-400 leading-tight">{c.role}</p>
            </div>
          </div>
        ))}
        <button className="text-[11px] font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-0.5">
          View All Cast <Chevron className="w-3 h-3" />
        </button>
      </div>
    </section>
  );
}

// ---------- Trending Now ----------

const TRENDING = [
  { num: "01", title: "THE LAST SIGNAL", rating: "9.6", featured: true },
  { num: "02", title: "ORIGIN CODE", rating: "9.2" },
  { num: "03", title: "NEO DAWN", rating: "8.7" },
  { num: "04", title: "LUCID DREAMS", rating: "8.6" },
  { num: "05", title: "THE CODEX", rating: "8.5" },
  { num: "06", title: "SAND MEMORIES", rating: "8.3" },
  { num: "07", title: "BEYOND ORBIT", rating: "8.1" },
];

function TrendingCard({ num, title, rating, featured }) {
  return (
    <div
      className={`relative shrink-0 w-[170px] h-[250px] rounded-lg overflow-hidden bg-zinc-800 ${
        featured ? "ring-2 ring-lime-300" : ""
      }`}
    >
      <span
        className={`absolute top-2 left-2.5 text-3xl font-black ${
          featured ? "text-lime-300" : "text-zinc-600"
        }`}
      >
        {num}
      </span>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-3 left-2.5 right-2.5">
        <p className="text-sm font-semibold leading-snug">{title}</p>
        <Rating value={rating} className="mt-1" />
      </div>
    </div>
  );
}

function TrendingNow() {
  return (
    <section className="px-12 py-8">
      <SectionHeader label="TRENDING NOW" />
      <div className="flex gap-4 overflow-x-auto pb-2 -mx-1 px-1 [scrollbar-width:none]">
        {TRENDING.map((m) => (
          <TrendingCard key={m.num} {...m} />
        ))}
      </div>
    </section>
  );
}

// ---------- New Series + AI Shorts ----------

const NEW_SERIES = [
  { title: "ORIGIN CODE", episodes: "8 Episodes" },
  { title: "SUBMERGED", episodes: "6 Episodes" },
];

function NewSeriesAndShorts() {
  return (
    <section className="px-12 pb-8 flex flex-col lg:flex-row gap-6">
      <div className="flex-[1.4]">
        <SectionHeader label="NEW SERIES" showViewAll={false} />
        <div className="grid grid-cols-2 gap-4">
          {NEW_SERIES.map((s) => (
            <div key={s.title} className="relative h-[170px] rounded-lg overflow-hidden bg-zinc-800">
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="text-sm font-semibold">{s.title}</p>
                <p className="text-xs text-zinc-400 mt-0.5">{s.episodes}</p>
              </div>
              <button className="absolute bottom-3 left-4 translate-y-7 text-[10px] font-medium border border-zinc-600 rounded px-3 py-1.5 hover:border-zinc-400 transition-colors">
                Watch Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <SectionHeader label="AI SHORTS" showViewAll={true} />
        <div className="grid grid-cols-4 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-[170px] rounded-md bg-zinc-900" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Continue Watching + Best Film ----------

const CONTINUE_WATCHING = [
  { title: "The Last Signal", pct: 68 },
  { title: "Lucid Dreams", pct: 42 },
  { title: "Origin Code", pct: 75 },
  { title: "Neo Dawn", pct: 37 },
  { title: "The Codex", pct: 90 },
];

function ContinueWatchingAndBestFilm() {
  return (
    <section className="px-12 pb-8 flex flex-col lg:flex-row gap-6 items-start">
      <div className="flex-[2]">
        <SectionHeader label="CONTINUE WATCHING" showViewAll={true} />
        <div className="grid grid-cols-5 gap-3.5">
          {CONTINUE_WATCHING.map((c) => (
            <div key={c.title}>
              <div className="relative aspect-square rounded-md bg-zinc-800 flex items-center justify-center">
                <Play className="w-7 h-7 fill-white text-white opacity-90" />
              </div>
              <p className="text-xs font-medium mt-2 truncate">{c.title}</p>
              <div className="h-[3px] rounded-full bg-zinc-700 mt-1.5 overflow-hidden">
                <div className="h-full bg-lime-300" style={{ width: `${c.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[420px] rounded-xl border border-lime-300/70 bg-zinc-950 p-5">
        <span className="text-[10px] font-semibold tracking-widest text-lime-300">
          BEST AI FILM OF THE WEEK
        </span>
        <h3 className="text-2xl font-bold mt-2">BEYOND THE HORIZON</h3>
        <p className="text-xs text-zinc-400 mt-1.5 flex items-center gap-1">
          <Star className="w-3 h-3 fill-zinc-400 text-zinc-400" /> 9.5 &nbsp;•&nbsp; 2024 &nbsp;•&nbsp; 2h 03m
          &nbsp;•&nbsp; 4K
        </p>
        <div className="flex items-center gap-2.5 mt-4">
          <button className="flex items-center gap-2 bg-lime-300 hover:bg-lime-200 text-black font-semibold text-xs px-4 py-2 rounded-md transition-colors">
            <Play className="w-3.5 h-3.5 fill-black" /> Play Now
          </button>
          <button className="flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 text-white font-semibold text-xs px-4 py-2 rounded-md transition-colors">
            <Plus className="w-3.5 h-3.5" /> Watchlist
          </button>
        </div>
      </div>
    </section>
  );
}

// ---------- Curated Collections ----------

const COLLECTIONS = [
  "Mind-Bending Sci-Fi",
  "Dystopian Futures",
  "AI Generated Masterpieces",
  "Cyberpunk Chronicles",
  "Surreal Dreamscapes",
  "Emotional Journeys",
  "Cosmic Adventures",
  "Beyond Reality",
];

function CuratedCollections() {
  return (
    <section className="px-12 pb-8">
      <SectionHeader label="CURATED COLLECTIONS" showViewAll={false} />
      <div className="flex flex-wrap gap-3">
        {COLLECTIONS.map((c) => (
          <button
            key={c}
            className="flex items-center gap-2.5 bg-zinc-950 border border-zinc-800 hover:border-zinc-600 rounded-lg px-4 py-3 text-sm font-medium transition-colors"
          >
            <span className="w-4 h-4 rounded-full bg-lime-300 shrink-0" />
            {c}
          </button>
        ))}
      </div>
    </section>
  );
}

// ---------- Featured Creators + Festival ----------

const CREATORS = [
  { name: "NovaFrame", films: "12 Films" },
  { name: "EchoForge", films: "9 Films" },
  { name: "KinoCraft AI", films: "15 Films" },
  { name: "SynthScape", films: "8 Films" },
  { name: "VisionaryX", films: "11 Films" },
  { name: "DeepFrame", films: "7 Films" },
];

function FeaturedCreatorsAndFestival() {
  return (
    <section className="px-12 pb-8 flex flex-col lg:flex-row gap-6 items-start">
      <div className="flex-[2]">
        <SectionHeader label="FEATURED CREATORS" showViewAll={true} />
        <div className="flex gap-6 flex-wrap">
          {CREATORS.map((c) => (
            <div key={c.name} className="flex flex-col items-center text-center w-16">
              <div className="w-16 h-16 rounded-full bg-zinc-800 border border-lime-300" />
              <p className="text-xs font-semibold mt-2">{c.name}</p>
              <p className="text-[11px] text-zinc-400">{c.films}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[380px] rounded-xl bg-zinc-950 p-5">
        <span className="text-[11px] font-semibold tracking-widest text-lime-300">AI FILM FESTIVAL 2026</span>
        <h3 className="text-lg font-bold mt-2 leading-snug">
          Celebrating the World's Best AI Filmmakers
        </h3>
        <button className="mt-4 border border-white/80 hover:bg-white hover:text-black text-xs font-semibold rounded-md px-4 py-2 transition-colors">
          Explore Festival
        </button>
      </div>
    </section>
  );
}

// ---------- Top Studios + New Releases ----------

const STUDIOS = [
  { name: "Synthic Studios", films: "24 Films" },
  { name: "Neon Narrative", films: "18 Films" },
  { name: "FutureFrame AI", films: "16 Films" },
  { name: "Pixel Horizon", films: "14 Films" },
  { name: "Deep Cinema AI", films: "12 Films" },
];

const NEW_RELEASES = [
  { title: "PARALLEL", rating: "9.1" },
  { title: "ECHOES OF EDEN", rating: "8.9" },
  { title: "BLACK SUN RISING", rating: "9.3" },
  { title: "THE SILENT CORE", rating: "8.8" },
  { title: "AFTERGLOW", rating: "9.0" },
  { title: "CHILDREN OF ATLAS", rating: "9.2" },
];

function TopStudiosAndNewReleases() {
  return (
    <section className="px-12 pb-8 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-[280px] rounded-xl border border-zinc-800 p-5 shrink-0">
        <SectionHeader label="TOP STUDIOS" showViewAll={true} />
        <ul className="flex flex-col gap-4">
          {STUDIOS.map((s, i) => (
            <li key={s.name} className="flex items-center justify-between">
              <span className="flex items-center gap-3.5">
                <span className="text-sm font-bold text-lime-300">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm font-medium">{s.name}</span>
              </span>
              <span className="text-xs text-zinc-400">{s.films}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1">
        <SectionHeader label="NEW RELEASES" showViewAll={true} />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3.5">
          {NEW_RELEASES.map((r) => (
            <div key={r.title} className="relative h-[200px] rounded-lg overflow-hidden bg-zinc-800">
              <span className="absolute top-2 left-2 bg-lime-300 text-black text-[9px] font-bold rounded px-2 py-0.5">
                NEW
              </span>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5">
                <p className="text-[11px] font-semibold leading-snug">{r.title}</p>
                <Rating value={r.rating} className="mt-1 text-[10px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Newsletter ----------

function Newsletter() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-5 px-12 py-7 border-t border-zinc-900">
      <div className="flex flex-col md:flex-row md:items-center gap-1.5 md:gap-6 text-center md:text-left">
        <h3 className="text-sm font-bold tracking-wide">STAY IN THE LOOP</h3>
        <p className="text-xs text-zinc-400">
          Get the latest AI cinema drops, festival updates, and exclusive content.
        </p>
      </div>
      <div className="flex items-center gap-2.5 w-full md:w-auto">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent border border-zinc-800 rounded-md px-4 py-3 text-xs text-zinc-300 placeholder:text-zinc-500 outline-none focus:border-zinc-500 w-full md:w-64"
        />
        <button className="bg-lime-300 hover:bg-lime-200 text-black font-semibold text-xs px-5 py-3 rounded-md whitespace-nowrap transition-colors">
          Subscribe
        </button>
      </div>
    </section>
  );
}

// ---------- Footer ----------

const FOOTER_COLS = [
  { heading: "EXPLORE", links: ["Movies", "Series", "AI Shorts", "Channels"] },
  { heading: "COMPANY", links: ["About Us", "Careers", "Press", "Contact"] },
  { heading: "RESOURCES", links: ["Help Center", "Community", "Blog", "API"] },
  { heading: "LEGAL", links: ["Terms of Service", "Privacy Policy", "Cookies Policy"] },
];

function Footer() {
  return (
    <footer className="bg-black px-12 pt-10 pb-7">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div>
          <span className="text-xl font-bold">feej</span>
          <p className="text-xs text-zinc-500 mt-1.5">Your Home for AI Cinema</p>
        </div>
        <div className="flex flex-wrap gap-12">
          {FOOTER_COLS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h4 className="text-[11px] font-semibold tracking-widest text-zinc-500">{col.heading}</h4>
              {col.links.map((l) => (
                <a key={l} href="#" className="text-xs text-zinc-400 hover:text-white transition-colors">
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col items-start lg:items-end gap-3">
          <h4 className="text-[11px] font-semibold tracking-widest text-zinc-500">FOLLOW US</h4>
          <div className="flex gap-2.5">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="w-7 h-7 rounded-full bg-zinc-900" />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-900 mt-10 pt-5">
        <p className="text-[11px] text-zinc-600">© 2026 feej, All rights reserved.</p>
      </div>
    </footer>
  );
}

// ---------- Page ----------

export default function FeejHomepage() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <TrendingNow />
      <NewSeriesAndShorts />
      <ContinueWatchingAndBestFilm />
      <CuratedCollections />
      <FeaturedCreatorsAndFestival />
      <TopStudiosAndNewReleases />
      <Newsletter />
      <Footer />
    </div>
  );
}
