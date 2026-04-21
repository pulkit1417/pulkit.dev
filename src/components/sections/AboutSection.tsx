import React from 'react';
import { UserCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-32 relative z-10 glass-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 gsap-section">
        <div className="section-tag text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Who I am</div>
        <h2 className="section-heading text-4xl md:text-5xl font-black mb-10 sm:mb-16 text-center text-white">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* ── Left col: bio ── */}
          <div className="lg:w-1/2 space-y-6 w-full">
            <div className="flex items-center gap-4 mb-2 justify-center lg:justify-start">
              <div className="relative shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-violet-500/30 border border-primary/30 flex items-center justify-center text-3xl select-none">
                  👨‍💻
                </div>
                <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-[#050505]" />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-tight">Pulkit Gupta</p>
                <p className="text-primary text-sm font-semibold">Full Stack Developer</p>
                <p className="text-gray-500 text-xs">Delhi-NCR, India · Open to work</p>
              </div>
            </div>

            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light text-center lg:text-left">
              <p>
                I&apos;m a passionate <strong className="text-white">Full Stack Developer</strong> and{' '}
                <strong className="text-white">AWS Certified practitioner</strong> who loves engineering
                scalable, high-impact products — from distributed cloud backends to pixel-perfect interfaces.
              </p>
              <p>
                Currently interning at <strong className="text-primary">WriteCream</strong> integrating AI-powered
                content pipelines. Previously built and shipped a real-world ed-tech platform at{' '}
                <strong className="text-white">Grootz</strong>. I also co-founded{' '}
                <strong className="text-white">Connect-SRM</strong>, a student community that grew to{' '}
                <strong className="text-primary">1,000+ active users</strong>.
              </p>
              <p>
                When I&apos;m not shipping features, you&apos;ll find me grinding{' '}
                <strong className="text-primary">450+ LeetCode problems</strong>{' '}
                (Contest Rating <strong className="text-white">1446</strong>) or contributing to open source.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              <a
                href="/assets/pulkit_gupta_resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-black transition-all text-sm"
              >
                <UserCircle2 size={16} /> Resume
              </a>
              <a
                href="https://github.com/pulkit1417"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all text-sm"
              >
                <i className="fa-brands fa-github" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/pulkit-gupta-708941287/"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 border border-blue-500/30 text-blue-400 font-semibold rounded-full hover:bg-blue-500/10 transition-all text-sm"
              >
                <i className="fa-brands fa-linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          {/* ── Right col: premium panel ── */}
          <div className="lg:w-1/2 flex flex-col gap-5 w-full">

            {/* Currently Status Board */}
            <div
              className="rounded-2xl border border-white/10 overflow-hidden"
              style={{ background: 'rgba(10,10,15,0.6)', backdropFilter: 'blur(20px)' }}
            >
              <div
                className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]"
                style={{ background: 'rgba(255,255,255,0.025)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">Currently</span>
                </div>
                <span className="text-[10px] text-gray-600 font-mono">April 2026</span>
              </div>

              <div className="divide-y divide-white/[0.04]">
                {[
                  { emoji: '🔨', label: 'Building',  value: 'AI-Powered Projects',            sub: 'Next.js · TypeScript',              color: '#ffd700' },
                  { emoji: '📖', label: 'Learning',  value: 'System Design & Kubernetes',     sub: 'Distributed systems · LLD / HLD',   color: '#a78bfa' },
                  { emoji: '🎯', label: 'Goal',      value: 'Land a full-time SDE role',      sub: 'Available from July 2025',          color: '#34d399' },
                  { emoji: '🤝', label: 'Open to',   value: 'Full-time · Freelance · Collabs',sub: 'Remote or Delhi-NCR · Reach out!',  color: '#60a5fa' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3.5 px-5 py-3.5 hover:bg-white/[0.02] transition-colors group"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0 mt-0.5"
                      style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                    >
                      {item.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: item.color }}>
                          {item.label}
                        </span>
                      </div>
                      <p className="text-white text-sm font-semibold leading-tight group-hover:text-primary transition-colors truncate">
                        {item.value}
                      </p>
                      <p className="text-gray-600 text-[11px] mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Stack */}
            <div className="rounded-2xl border border-white/10 p-5 sm:p-6" style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(20px)' }}>
              <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">Daily Stack</p>
              <div className="flex flex-wrap gap-2">
                {(
                  [
                    { name: 'React',       icon: 'fa-react',    color: '#61dafb' },
                    {
                      name: 'Next.js', color: '#ffffff',
                      svg: (
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" className="group-hover:scale-110 transition-transform shrink-0">
                          <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15.5 16.5L9 8.5V16.5H7.5V7.5H9.5L16 15.5V7.5H17.5V16.5H15.5Z" fill="white"/>
                        </svg>
                      ),
                    },
                    { name: 'TypeScript',  icon: 'fa-js',       color: '#3178c6' },
                    { name: 'Node.js',     icon: 'fa-node-js',  color: '#68a063' },
                    {
                      name: 'MongoDB', color: '#4db33d',
                      svg: (
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" className="group-hover:scale-110 transition-transform shrink-0">
                          <path d="M12 2C12 2 6.5 7.8 6.5 13.5C6.5 17.1 8.9 20.2 12 21.5C15.1 20.2 17.5 17.1 17.5 13.5C17.5 7.8 12 2 12 2Z" fill="#4db33d"/>
                          <path d="M12 2L12 21.5" stroke="#1a5c1a" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>
                      ),
                    },
                    { name: 'AWS',         icon: 'fa-aws',      color: '#ff9900' },
                    { name: 'Docker',      icon: 'fa-docker',   color: '#2496ed' },
                    { name: 'Git',         icon: 'fa-git-alt',  color: '#f05032' },
                    { name: 'Angular',     icon: 'fa-angular',  color: '#dd0031' },
                    { name: 'Spring Boot', icon: 'fa-java',     color: '#6db33f' },
                  ] as { name: string; color: string; icon?: string; svg?: React.ReactNode }[]
                ).map((t) => (
                  <div
                    key={t.name}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-white/8 hover:border-white/20 transition-all cursor-default group"
                    style={{ background: `${t.color}0d` }}
                  >
                    {t.svg ? t.svg : (
                      <i
                        className={`fa-brands ${t.icon} text-sm group-hover:scale-110 transition-transform`}
                        style={{ color: t.color }}
                      />
                    )}
                    <span className="text-[11px] font-semibold text-gray-400 group-hover:text-white transition-colors">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
