import type { Experience } from '@/types';

export default function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section id="experience" className="py-20 sm:py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 gsap-section">
        <div className="section-tag text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Career</div>
        <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-black mb-10 sm:mb-16 text-center text-white">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="relative pl-4 sm:pl-6 border-l-2 border-white/10 space-y-8 sm:space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              <div
                className="timeline-dot absolute -left-[1.45rem] top-2 w-4 h-4 rounded-full border-2 border-current"
                style={{ color: exp.color, background: exp.color, boxShadow: `0 0 14px ${exp.color}88` }}
              />
              <div className="timeline-card glass-card p-5 sm:p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all ml-4 sm:ml-6">
                <span className="inline-block px-3 py-1 bg-white/10 text-xs font-bold rounded-full mb-4 text-gray-300">
                  {exp.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{exp.role}</h3>
                <h4 className="text-base sm:text-lg font-semibold mb-6" style={{ color: exp.color }}>
                  {exp.company}
                </h4>
                <ul className="space-y-3 text-gray-300">
                  {exp.desc.map((d, j) => (
                    <li key={j} className="flex gap-3">
                      <span style={{ color: exp.color }} className="mt-1 shrink-0">▹</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
