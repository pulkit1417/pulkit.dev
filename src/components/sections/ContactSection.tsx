'use client';

import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import FormField from '@/components/FormField';

type FormStatus = 'idle' | 'sending' | 'sent';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  const socials = [
    { href: 'https://github.com/pulkit1417',                          icon: 'fa-github'    },
    { href: 'https://www.linkedin.com/in/pulkit-gupta-708941287/',   icon: 'fa-linkedin'  },
    { href: 'https://www.instagram.com/pulkit__24/',                  icon: 'fa-instagram' },
  ];

  return (
    <section id="contact" className="py-20 sm:py-32 relative z-10 glass-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 gsap-section">
        <div className="text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Say Hello</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 sm:mb-16 text-center text-white">
          Get In <span className="text-gradient">Touch</span>
        </h2>

        <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col md:flex-row border border-white/10">
          {/* Left info panel */}
          <div className="md:w-5/12 glass-primary-panel p-7 sm:p-12 text-black flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black mb-4">Let&apos;s build something great.</h3>
              <p className="text-black/70 font-semibold leading-relaxed">
                Open to full-time roles, freelance projects, and interesting collaborations. I typically reply within 24 hours.
              </p>
            </div>

            <div className="space-y-5 relative z-10 mt-12">
              <div className="flex items-center gap-4">
                <MapPin size={20} />
                <span className="font-bold">Delhi-NCR, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={20} />
                <a href="mailto:gupta.pulkit2408@gmail.com" className="font-bold hover:underline">
                  gupta.pulkit2408@gmail.com
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                {socials.map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target="_blank"
                    className="p-3 bg-black text-primary rounded-full hover:scale-110 transition-transform"
                  >
                    <i className={`fa-brands ${s.icon} text-xl`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="md:w-7/12 p-7 sm:p-12 glass-dark-panel">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {formStatus === 'sent' ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                  <div className="w-20 h-20 bg-primary text-black rounded-full flex items-center justify-center text-3xl">✓</div>
                  <h3 className="text-2xl font-bold text-white">Message received!</h3>
                  <p className="text-gray-400">I&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField label="Your Name"  type="text"  value={formData.name}  onChange={(v) => setFormData({ ...formData, name: v })}  disabled={formStatus === 'sending'} />
                    <FormField label="Your Email" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} disabled={formStatus === 'sending'} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">Message</label>
                    <textarea
                      rows={5}
                      required
                      disabled={formStatus === 'sending'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-white/15 pb-2 text-white outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="mt-4 px-10 py-4 bg-white text-black font-bold rounded-full w-full sm:w-max flex items-center justify-center gap-3 hover:bg-primary transition-colors group disabled:opacity-40"
                  >
                    {formStatus === 'sending' ? 'Sending…' : 'Send Message'}
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
