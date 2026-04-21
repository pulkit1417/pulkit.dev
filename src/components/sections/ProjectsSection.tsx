'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types';

interface ProjectsSectionProps {
  featuredProjects: Project[];
  extraProjects: Project[];
}

export default function ProjectsSection({ featuredProjects, extraProjects }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!showAll) return;
    const id = setTimeout(() => {
      const extraCards = document.querySelectorAll<HTMLElement>('.extra-project-card');
      if (!extraCards.length) return;
      gsap.fromTo(
        Array.from(extraCards),
        { opacity: 0, y: 60, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.12, ease: 'back.out(1.4)' }
      );
      extraCards.forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
          const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
          gsap.to(card, { rotateY: x, rotateX: y, duration: 0.4, ease: 'power2.out', transformPerspective: 800 });
        };
        const onLeave = () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        card.addEventListener('mousemove', onMove);
        card.addEventListener('mouseleave', onLeave);
      });
    }, 50);
    return () => clearTimeout(id);
  }, [showAll]);

  return (
    <section id="works" className="py-20 sm:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 gsap-section">
        <div className="text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Portfolio</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center text-white">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
          Things I&apos;ve built that I&apos;m proud of. Each one taught me something new.
        </p>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
          {featuredProjects.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>

        {/* Load More / Extra grid */}
        {!showAll ? (
          <div className="flex justify-center mt-14">
            <button
              onClick={() => setShowAll(true)}
              className="group px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-primary/50 transition-all flex items-center gap-3"
            >
              View More Projects
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {extraProjects.map((p, i) => <ProjectCard key={i} p={p} extraClass="extra-project-card" />)}
          </div>
        )}
      </div>
    </section>
  );
}
