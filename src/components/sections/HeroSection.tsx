import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  heroRoleRef: React.RefObject<HTMLSpanElement | null>;
  statsRef: React.RefObject<HTMLDivElement | null>;
}

const stats = [
  { label: 'LeetCode Solved', value: 450, suffix: '+' },
  { label: 'Projects Built',  value: 10,  suffix: '+' },
  { label: 'CGPA',            value: 994, suffix: '', display: '9.94' },
];

export default function HeroSection({ heroRoleRef, statsRef }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      {/* Parallax gradient orbs */}
      <div className="parallax-orb absolute top-1/4 left-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full bg-primary/10 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="parallax-orb absolute bottom-1/4 right-1/4 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-violet-600/10 blur-[60px] sm:blur-[100px] pointer-events-none" />

      {/* Badge */}
      <div className="hero-badge glass-pill inline-flex items-center gap-2 px-5 py-2 rounded-full text-primary text-sm font-semibold mb-8">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Available for opportunities
      </div>

      {/* Title */}
      <div className="overflow-hidden mb-2">
        <h2 className="hero-title-line text-lg sm:text-2xl md:text-3xl font-light tracking-[0.15em] sm:tracking-[0.25em] text-gray-400 uppercase text-center">
          Hi, I&apos;m <span className="text-white font-semibold">Pulkit Gupta</span>
        </h2>
      </div>
      <div className="overflow-hidden mb-6">
        <h1 className="hero-title-line text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black tracking-tighter text-center text-white leading-none">
          <span className="inline-flex items-center justify-center min-w-[8ch] sm:min-w-[12ch]">
            <span ref={heroRoleRef} className="text-gradient">Full Stack Developer</span>
            <span className="typewriter-cursor ml-1 inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-primary align-middle rounded-sm" />
          </span>
        </h1>
      </div>

      <p className="hero-sub text-gray-400 text-center max-w-xl text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 px-2">
        Engineering impactful products at the intersection of AI, cloud, and beautiful UI — from scalable backends to pixel-perfect interfaces.
      </p>

      {/* CTAs */}
      <div className="hero-ctas flex flex-wrap gap-3 sm:gap-4 items-center justify-center mb-10 sm:mb-16">
        <a
          href="#works"
          className="magnetic-btn group px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.25)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] flex items-center gap-2"
        >
          View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="#contact"
          className="magnetic-btn px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
        >
          Let&apos;s Talk
        </a>
      </div>

      {/* Stats */}
      <div ref={statsRef} className="glass-stats flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-20 px-5 sm:px-10 py-4 sm:py-6 rounded-2xl w-[95%] sm:w-auto">
        {stats.map((s) => (
          <div key={s.label} className="hero-stats-item text-center">
            <div className="text-3xl md:text-4xl font-black text-white">
              {s.display ? (
                <span>{s.display}</span>
              ) : (
                <>
                  <span className="stat-num" data-target={s.value}>0</span>
                  <span className="text-primary">{s.suffix}</span>
                </>
              )}
            </div>
            <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
