'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Works', 'Certifications'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Animate mobile drawer in/out
  useEffect(() => {
    const el = mobileMenuRef.current;
    if (!el) return;
    if (menuOpen) {
      gsap.fromTo(el,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
    } else {
      gsap.to(el, { opacity: 0, y: -10, duration: 0.2, ease: 'power2.in' });
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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

          {/* Desktop nav links */}
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

          {/* Desktop CTA */}
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden p-2 rounded-xl border border-white/10 text-gray-300 hover:text-primary hover:border-primary/30 transition-all"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed top-[72px] left-4 right-4 z-[99] rounded-2xl border border-white/10 px-6 py-6 flex flex-col gap-4"
          style={{
            background: 'rgba(8,8,8,0.92)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            boxShadow: '0 16px 60px rgba(0,0,0,0.7)',
          }}
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
              className="text-gray-300 hover:text-primary transition-colors font-semibold text-lg py-1 border-b border-white/5 last:border-0"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-2 w-full text-center font-bold text-sm text-black rounded-full py-3 bg-primary hover:opacity-90 transition-opacity"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </>
  );
}
