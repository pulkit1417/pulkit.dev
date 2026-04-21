import type { SkillGroup } from '@/types';

export default function SkillsSection({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="skills" className="py-20 sm:py-32 relative z-10 glass-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 gsap-section">
        <div className="section-tag text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Expertise</div>
        <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-center text-white">
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          A curated breakdown of my technical abilities across the full development lifecycle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
          {skills.map((sg, i) => (
            <div
              key={i}
              className="glass-card p-5 sm:p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all"
            >
              <div className="flex items-center gap-3 mb-8">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: `${sg.color}20`, border: `1px solid ${sg.color}40` }}
                >
                  <sg.icon size={20} style={{ color: sg.color }} />
                </div>
                <h3 className="text-xl font-bold text-white">{sg.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {sg.items.map((sk) => (
                  <span
                    key={sk}
                    className="skill-tag px-4 py-2 rounded-xl text-sm font-semibold cursor-default hover:scale-105 transition-transform"
                    style={{ background: `${sg.color}12`, color: sg.color, border: `1px solid ${sg.color}35` }}
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
