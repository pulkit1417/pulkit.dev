'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const outerGlowRef = useRef<HTMLDivElement>(null);
  const innerGlowRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const dotRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerGlowRef.current;
    const inner = innerGlowRef.current;
    const dot = dotRef.current;
    const ring = dotRingRef.current;
    if (!outer || !inner || !dot || !ring) return;

    document.documentElement.style.cursor = 'none';

    // Position all elements off-screen initially
    gsap.set([outer, inner, dot, ring], { xPercent: -50, yPercent: -50, x: -500, y: -500 });

    let prevX = -500, prevY = -500;
    let velX = 0, velY = 0;

    /* ── Mouse tracking ── */
    const onMove = (e: MouseEvent) => {
      velX = e.clientX - prevX;
      velY = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;

      const speed = Math.hypot(velX, velY);

      // Outer glow: very lazy, breathes on speed
      gsap.to(outer, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.85,
        ease: 'power3.out',
        // Stretch in direction of movement
        scaleX: 1 + Math.min(velX * 0.012, 0.35),
        scaleY: 1 + Math.min(velY * 0.012, 0.35),
      });

      // Inner glow: medium lag
      gsap.to(inner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: 'power2.out',
      });

      // Dot: instant
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.06, ease: 'none' });

      // Ring: slight lag
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.18, ease: 'power1.out' });

      // Pulse outer opacity on fast movement
      if (speed > 15) {
        gsap.to(outer, { opacity: 0.18, duration: 0.1, yoyo: true, repeat: 1 });
      }
    };
    window.addEventListener('mousemove', onMove);

    /* ── Idle breathing ── */
    const breathe = gsap.timeline({ repeat: -1, yoyo: true })
      .to(outer, { scale: 1.08, opacity: 0.13, duration: 2, ease: 'sine.inOut' })
      .to(inner, { scale: 1.12, opacity: 0.25, duration: 2, ease: 'sine.inOut' }, 0);

    /* ── Hover on interactive elements ── */
    const interactives = document.querySelectorAll<HTMLElement>('a, button');

    const onEnter = (e: Event) => {
      const tag = (e.currentTarget as HTMLElement).tagName;
      const isBtn = tag === 'BUTTON';
      const glowColor = isBtn ? 'rgba(114,9,183,0.25)' : 'rgba(255,215,0,0.2)';
      const innerColor = isBtn ? 'rgba(114,9,183,0.15)' : 'rgba(255,215,0,0.12)';

      breathe.pause();

      gsap.to(outer, {
        width: 480, height: 480, opacity: 0.22,
        background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
        duration: 0.5, ease: 'power2.out',
      });
      gsap.to(inner, {
        width: 160, height: 160, opacity: 0.3,
        background: `radial-gradient(circle, ${innerColor} 0%, transparent 70%)`,
        duration: 0.4, ease: 'power2.out',
      });
      gsap.to(ring, {
        width: 36, height: 36,
        borderColor: isBtn ? 'rgba(114,9,183,0.8)' : 'rgba(255,215,0,0.8)',
        opacity: 1,
        duration: 0.35, ease: 'back.out(2)',
      });
      gsap.to(dot, { opacity: 0, duration: 0.2 });
    };

    const onLeave = () => {
      breathe.play();
      gsap.to(outer, {
        width: 380, height: 380, opacity: 0.1,
        background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0.04) 40%, transparent 70%)',
        duration: 0.5, ease: 'power2.out',
      });
      gsap.to(inner, {
        width: 100, height: 100, opacity: 0.18,
        background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
        duration: 0.4, ease: 'power2.out',
      });
      gsap.to(ring, {
        width: 20, height: 20,
        borderColor: 'rgba(255,255,255,0.25)',
        opacity: 0.6,
        duration: 0.4, ease: 'elastic.out(1, 0.5)',
      });
      gsap.to(dot, { opacity: 1, duration: 0.3 });
    };

    interactives.forEach((el) => {
      el.style.cursor = 'none';
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    /* ── Click pulse ── */
    const onClick = () => {
      gsap.timeline()
        .to([outer, inner], { scale: 1.35, opacity: 0.28, duration: 0.12, ease: 'power2.out' })
        .to([outer, inner], { scale: 1, opacity: 0.1, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
      gsap.timeline()
        .to(ring, { scale: 2.5, opacity: 0, duration: 0.4, ease: 'power2.out' })
        .set(ring, { scale: 1, opacity: 0.6 });
    };
    window.addEventListener('click', onClick);

    /* ── Visibility ── */
    const hide = () => gsap.to([outer, inner, dot, ring], { opacity: 0, duration: 0.3 });
    const show = () => {
      gsap.to([outer, inner], { opacity: 0.1, duration: 0.4 });
      gsap.to([dot, ring], { opacity: 1, duration: 0.4 });
    };
    document.addEventListener('mouseleave', hide);
    document.addEventListener('mouseenter', show);

    return () => {
      document.documentElement.style.cursor = '';
      breathe.kill();
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      document.removeEventListener('mouseleave', hide);
      document.removeEventListener('mouseenter', show);
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Large lazy outer ambient glow */}
      <div
        ref={outerGlowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9990] rounded-full"
        style={{
          width: 380,
          height: 380,
          background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0.04) 40%, transparent 70%)',
          mixBlendMode: 'screen',
          willChange: 'transform',
        }}
      />

      {/* Medium inner glow — faster */}
      <div
        ref={innerGlowRef}
        className="pointer-events-none fixed top-0 left-0 z-[9991] rounded-full"
        style={{
          width: 100,
          height: 100,
          background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
          mixBlendMode: 'screen',
          willChange: 'transform',
        }}
      />

      {/* Thin ring — medium lag */}
      <div
        ref={dotRingRef}
        className="pointer-events-none fixed top-0 left-0 z-[9992] rounded-full border"
        style={{
          width: 20,
          height: 20,
          borderColor: 'rgba(255,255,255,0.25)',
          opacity: 0.6,
          willChange: 'transform',
        }}
      />

      {/* Precise dot — instant */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9993] rounded-full"
        style={{
          width: 4,
          height: 4,
          backgroundColor: '#ffffff',
          boxShadow: '0 0 6px rgba(255,255,255,1)',
          willChange: 'transform',
        }}
      />
    </>
  );
}
