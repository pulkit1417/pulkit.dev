'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

export default function ProjectCard({
  p,
  extraClass = '',
}: {
  p: Project;
  extraClass?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
      gsap.to(card, {
        rotateY: x, rotateX: y,
        scale: 1.02,
        duration: 0.35, ease: 'power2.out',
        transformPerspective: 900,
      });
    };

    const onEnter = () => {
      gsap.to(card, {
        boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(255,215,0,0.12)',
        borderColor: 'rgba(255,215,0,0.3)',
        duration: 0.3,
      });
    };

    const onLeave = () => {
      gsap.to(card, {
        rotateY: 0, rotateX: 0, scale: 1,
        boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
        borderColor: 'rgba(255,255,255,0.08)',
        duration: 0.6, ease: 'elastic.out(1, 0.5)',
      });
    };

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mouseleave', onLeave);

    return () => {
      card.removeEventListener('mousemove', onMove);
      card.removeEventListener('mouseenter', onEnter);
      card.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${extraClass} glass-card rounded-2xl p-8 border border-white/10 group flex flex-col h-full relative overflow-hidden`}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10 flex-1">
        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
        <p className="text-xs font-mono text-gray-500 mb-5 pb-4 border-b border-white/10">{p.tech}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-8">{p.desc}</p>
      </div>
      <a
        href={p.link}
        target="_blank"
        className="relative z-10 inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-4 transition-all"
      >
        Live Demo <ExternalLink size={15} />
      </a>
    </div>
  );
}
