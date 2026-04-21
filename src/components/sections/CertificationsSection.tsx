import { Shield } from 'lucide-react';
import type { Certification } from '@/types';

const achievements = [
  { icon: '🏆', color: '#ffd700', title: 'LeetCode — 450+ Problems',         sub: 'Overall Contest Rating: 1446'              },
  { icon: '🚀', color: '#a78bfa', title: 'Connect-SRM Co-Founder',           sub: 'Student platform · 1000+ active users'     },
  { icon: '🌐', color: '#34d399', title: "GirlScript Summer of Code '24",    sub: 'Open Source Contributor'                   },
];

export default function CertificationsSection({ certifications }: { certifications: Certification[] }) {
  return (
    <section id="certifications" className="py-16 sm:py-24 relative z-10 glass-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 gsap-section">
        <div className="section-tag text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Credentials</div>
        <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl font-black mb-10 sm:mb-16 text-center text-white">
          Certifications &amp; <span className="text-gradient">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="cert-card glass-card p-5 sm:p-8 rounded-2xl border border-white/10 hover:border-orange-400/40 transition-all flex items-start gap-4 sm:gap-6"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}40` }}
              >
                {cert.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Shield size={14} className="text-orange-400" />
                  <span className="text-xs text-orange-400 font-bold uppercase tracking-widest">Certified</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                <p className="text-gray-400 text-sm">
                  {cert.issuer} · <span className="text-white">{cert.year}</span>
                </p>
              </div>
            </div>
          ))}

          {achievements.map((ach, i) => (
            <div
              key={i}
              className="glass-card p-5 sm:p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all flex items-start gap-4 sm:gap-6"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: `${ach.color}10`, border: `1px solid ${ach.color}30` }}
              >
                {ach.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{ach.title}</h3>
                <p className="text-sm text-gray-400">{ach.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
