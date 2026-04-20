'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Works', 'Certifications', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let prevScrolled = false;

    const onScroll = () => {
      const y = window.scrollY;
      const isScrolled = y > 80;
      if (isScrolled === prevScrolled) return;
      prevScrolled = isScrolled;
      setScrolled(isScrolled);

      if (isScrolled) {
        gsap.to(pillRef.current, {
          maxWidth: 800,
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 20,
          paddingRight: 20,
          borderRadius: 9999,
          duration: 0.55,
          ease: 'power3.inOut',
        });
        gsap.to(headerRef.current, { paddingTop: 14, duration: 0.55, ease: 'power3.inOut' });
        gsap.to(linksRef.current, { gap: 20, duration: 0.4, ease: 'power2.out' });
      } else {
        gsap.to(pillRef.current, {
          maxWidth: 1280,
          paddingTop: 24,
          paddingBottom: 24,
          paddingLeft: 24,
          paddingRight: 24,
          borderRadius: 0,
          duration: 0.55,
          ease: 'power3.inOut',
        });
        gsap.to(headerRef.current, { paddingTop: 0, duration: 0.55, ease: 'power3.inOut' });
        gsap.to(linksRef.current, { gap: 28, duration: 0.4, ease: 'power2.out' });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-[100] flex justify-center pointer-events-none"
      style={{ paddingTop: 0 }}
    >
      <div
        ref={pillRef}
        className="pointer-events-auto w-full flex items-center justify-between"
        style={{
          maxWidth: 1280,
          paddingTop: 24,
          paddingBottom: 24,
          paddingLeft: 24,
          paddingRight: 24,
          borderRadius: 0,
          background: scrolled ? 'rgba(8,8,8,0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(22px) saturate(160%)' : 'none',
          border: scrolled ? '1px solid rgba(255,255,255,0.09)' : '1px solid transparent',
          boxShadow: scrolled
            ? '0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)'
            : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {/* Brand */}
        <a href="#home" className="text-xl font-black tracking-tighter text-primary shrink-0">
          Pulkit<span className="text-white">.</span>dev
        </a>

        {/* All nav links — spacing tightens on scroll via GSAP */}
        <div
          ref={linksRef}
          className="hidden md:flex items-center"
          style={{ gap: 28 }}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 hover:text-primary transition-colors duration-200 whitespace-nowrap text-sm"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center font-bold text-sm text-black rounded-full shrink-0 hover:scale-105 transition-transform"
          style={{
            background: '#ffd700',
            padding: scrolled ? '7px 14px' : '10px 20px',
            boxShadow: '0 0 18px rgba(255,215,0,0.2)',
            transition: 'padding 0.4s ease',
          }}
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}
