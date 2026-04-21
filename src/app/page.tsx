'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { CustomEase } from 'gsap/CustomEase';

import ThreeBackground from '@/components/ThreeBackground';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CertificationsSection from '@/components/sections/CertificationsSection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';

import { roles, experiences, allProjects, skills, certifications } from '@/data';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, CustomEase);
  CustomEase.create('smooth', 'M0,0 C0.25,0.1 0.25,1 1,1');
}

const featuredProjects = allProjects.filter((p) => p.featured);
const extraProjects    = allProjects.filter((p) => !p.featured);

export default function Home() {
  const heroRoleRef = useRef<HTMLSpanElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);

  /* ─── GSAP master animation suite ──────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 1. Hero entrance */
      const heroTL = gsap.timeline({ delay: 0.2 });
      heroTL
        .from('.hero-badge', { opacity: 0, y: -30, scale: 0.85, duration: 0.7, ease: 'back.out(2)' })
        .from('.hero-title-line', { opacity: 0, y: 100, skewY: 6, rotateX: -25, duration: 1, stagger: 0.18, ease: 'power4.out', transformOrigin: 'top center' }, '-=0.3')
        .from('.hero-sub', { opacity: 0, y: 40, filter: 'blur(6px)', duration: 0.9, ease: 'power3.out' }, '-=0.5')
        .fromTo('.hero-ctas > *', { opacity: 0, y: 25, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.8)', clearProps: 'transform' }, '-=0.5')
        .fromTo('.hero-stats-item', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' }, '-=0.3')
        .fromTo('.hero-scroll', { opacity: 0 }, { opacity: 1, duration: 0.5 }, '-=0.1');

      /* 2. Role typewriter */
      if (heroRoleRef.current) {
        const el = heroRoleRef.current;
        let roleIdx = 0, charIdx = 0, deleting = false;
        let timer: ReturnType<typeof setTimeout>;
        const TYPING_SPEED = 65, DELETING_SPEED = 35, HOLD_AFTER_TYPE = 1800, HOLD_AFTER_DELETE = 400;

        const tick = () => {
          const currentRole = roles[roleIdx % roles.length];
          if (!deleting) {
            charIdx++;
            el.textContent = currentRole.slice(0, charIdx);
            if (charIdx === currentRole.length) { deleting = true; timer = setTimeout(tick, HOLD_AFTER_TYPE); return; }
            timer = setTimeout(tick, TYPING_SPEED);
          } else {
            charIdx--;
            el.textContent = currentRole.slice(0, charIdx);
            if (charIdx === 0) { deleting = false; roleIdx++; timer = setTimeout(tick, HOLD_AFTER_DELETE); return; }
            timer = setTimeout(tick, DELETING_SPEED);
          }
        };
        timer = setTimeout(tick, 2200);
        return () => clearTimeout(timer);
      }

      /* 3. Parallax orbs follow mouse */
      const orbs = document.querySelectorAll<HTMLElement>('.parallax-orb');
      const onMouseMove = (e: MouseEvent) => {
        const { clientX: x, clientY: y } = e;
        const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
        orbs.forEach((orb, i) => {
          const depth = i % 2 === 0 ? 0.025 : 0.015;
          gsap.to(orb, { x: (x - cx) * depth, y: (y - cy) * depth, duration: 1.5, ease: 'power1.out' });
        });
      };
      window.addEventListener('mousemove', onMouseMove);

      /* 4. Magnetic buttons */
      document.querySelectorAll<HTMLElement>('.magnetic-btn').forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
          gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' }));
      });

      /* 5. gsap-section fade-up */
      gsap.utils.toArray<HTMLElement>('.gsap-section').forEach((section) => {
        gsap.fromTo(section, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 85%' } });
      });

      /* 6. Section headings clip */
      gsap.utils.toArray<HTMLElement>('.section-heading').forEach((h) => {
        gsap.fromTo(h, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1, ease: 'power4.out', scrollTrigger: { trigger: h, start: 'top 88%' } });
      });

      /* 7. Section tags */
      gsap.utils.toArray<HTMLElement>('.section-tag').forEach((tag) => {
        gsap.fromTo(tag, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: tag, start: 'top 90%' } });
      });

      /* 8. Skill tags stagger */
      gsap.utils.toArray<HTMLElement>('.skill-tag').forEach((tag, i) => {
        gsap.fromTo(tag, { opacity: 0, scale: 0.8, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, delay: (i % 6) * 0.07, ease: 'back.out(2)', scrollTrigger: { trigger: tag, start: 'top 92%' } });
      });

      /* 9. Stagger containers */
      document.querySelectorAll<HTMLElement>('.stagger-container').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.fromTo(children, { opacity: 0, y: 50, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: container, start: 'top 85%' } });
      });

      /* 10. Timeline dots */
      document.querySelectorAll<HTMLElement>('.timeline-dot').forEach((dot) => {
        gsap.fromTo(dot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)', scrollTrigger: { trigger: dot, start: 'top 85%' } });
        gsap.to(dot, { boxShadow: '0 0 0 10px rgba(255,215,0,0)', scale: 1.3, duration: 1.2, ease: 'power2.out', repeat: -1, yoyo: true });
      });

      /* 11. Timeline cards */
      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, x: 60, rotateY: -8 }, { opacity: 1, x: 0, rotateY: 0, duration: 0.9, delay: i * 0.15, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
      });

      /* 12. Certification cards */
      gsap.utils.toArray<HTMLElement>('.cert-card').forEach((card, i) => {
        gsap.fromTo(card, { opacity: 0, y: 60, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, delay: i * 0.1, ease: 'back.out(1.5)', scrollTrigger: { trigger: card, start: 'top 88%' } });
      });

      /* 13. Contact form fields */
      gsap.utils.toArray<HTMLElement>('.form-field').forEach((field, i) => {
        gsap.fromTo(field, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.6, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: field, start: 'top 92%' } });
      });

      /* 14. Footer */
      gsap.fromTo('.footer-brand', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: '.footer-brand', start: 'top 95%' } });
      gsap.fromTo('.footer-link', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out', scrollTrigger: { trigger: '.footer-link', start: 'top 98%' } });

      /* 15. About skill bars */
      document.querySelectorAll<HTMLElement>('.about-skill-bar').forEach((bar) => {
        const pct = bar.getAttribute('data-pct') || '0';
        gsap.fromTo(bar, { width: 0 }, { width: `${pct}%`, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: bar, start: 'top 90%' } });
      });

      return () => window.removeEventListener('mousemove', onMouseMove);
    });

    return () => ctx.revert();
  }, []);

  /* ─── Stat counters (rAF — no GSAP dependency) ───────────── */
  useEffect(() => {
    const START_DELAY = 1800;
    const DURATION    = 2000;
    const timer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.stat-num').forEach((el) => {
        const target = parseInt(el.getAttribute('data-target') || '0', 10);
        if (!target) return;
        const startTime = performance.now();
        const step = (now: number) => {
          const elapsed  = now - startTime;
          const progress = Math.min(elapsed / DURATION, 1);
          const eased    = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target).toString();
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, START_DELAY);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full relative text-foreground">
      <ThreeBackground />
      <HeroSection heroRoleRef={heroRoleRef} statsRef={statsRef} />
      <AboutSection />
      <ExperienceSection experiences={experiences} />
      <SkillsSection skills={skills} />
      <ProjectsSection featuredProjects={featuredProjects} extraProjects={extraProjects} />
      <CertificationsSection certifications={certifications} />
      <ContactSection />
      <FooterSection />
    </main>
  );
}