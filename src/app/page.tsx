'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { Code2, Database, Layout, UserCircle2, Mail, MapPin, Send, ExternalLink, Server, ChevronDown, ArrowRight, Award, Shield } from 'lucide-react';
import ThreeBackground from '@/components/ThreeBackground';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, TextPlugin, CustomEase);
  CustomEase.create('smooth', 'M0,0 C0.25,0.1 0.25,1 1,1');
}

/* ── Data ───────────────────────────────────────────────── */
const experiences = [
  {
    company: 'WriteCream',
    role: 'Full Stack Developer Intern',
    period: 'Feb 2025 – July 2025',
    color: '#ffd700',
    desc: [
      'Integrated AI APIs for content and image generation, enabling dynamic story creation and automated visual assets.',
      'Built responsive web interfaces and seamlessly connected them to AI-powered backends to deliver end-to-end generation workflows.',
    ],
  },
  {
    company: 'Grootz',
    role: 'Web Development Intern',
    period: 'Jul 2024 – Nov 2024',
    color: '#a78bfa',
    desc: [
      'Developed a production website with modern UI/UX using React and backend technologies.',
      'Collaborated with a team to build and ship an ed-tech community platform used by real users.',
    ],
  },
];

const allProjects = [
  {
    name: 'Contently',
    tech: 'Next.js · Convex · TypeScript · Tailwind',
    desc: 'Full-stack content creation platform with real-time feeds, comments, AI-powered writing tools, rich-text editor, image uploads via ImageKit, and full auth & analytics.',
    link: '#',
    featured: true,
  },
  {
    name: 'Spott',
    tech: 'Next.js · Convex · Tailwind · shadcn/ui',
    desc: 'Event discovery and management platform enabling users to explore events, create tickets, and track activity with a clean responsive UI, deployed on Vercel.',
    link: '#',
    featured: true,
  },
  {
    name: 'BloggingByte',
    tech: 'Node.js · MongoDB · Express',
    desc: 'Scalable blogging platform with JWT authentication, dynamic author profiles, and interactive features, hosted on AWS Elastic Beanstalk.',
    link: 'http://bloggingbyte.ap-south-1.elasticbeanstalk.com/',
    featured: true,
  },
  {
    name: 'KickVault',
    tech: 'Angular 17 · TypeScript · CSS',
    desc: 'High-performance e-commerce platform with responsive design for both desktop and mobile, featuring seamless product browsing and cart management.',
    link: 'https://kick-vault.vercel.app/',
    featured: false,
  },
  {
    name: 'Encrypto',
    tech: 'JavaScript · Crypto API',
    desc: 'Secure password manager that encrypts and stores your credentials locally. Supports multi-site password management with AES encryption.',
    link: 'https://password-manager-pulkit.vercel.app/',
    featured: false,
  },
  {
    name: 'Calculator',
    tech: 'HTML · CSS · JavaScript',
    desc: 'A clean, elegant web-based calculator supporting all basic arithmetic operations with smooth UI and keyboard support.',
    link: 'https://calculator-seven-beige-68.vercel.app/',
    featured: false,
  },
];

const skills = [
  {
    category: 'Languages',
    icon: Code2,
    color: '#ffd700',
    items: ['Java', 'C++', 'JavaScript', 'TypeScript', 'HTML/CSS', 'MySQL'],
  },
  {
    category: 'Frontend',
    icon: Layout,
    color: '#60a5fa',
    items: ['React', 'Next.js', 'Angular 17', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Backend & DB',
    icon: Server,
    color: '#34d399',
    items: ['Node.js', 'Express.js', 'MongoDB', 'Spring', 'Spring Boot', 'Firebase'],
  },
  {
    category: 'DevOps & Cloud',
    icon: Database,
    color: '#f472b6',
    items: ['Docker', 'Jenkins', 'Kubernetes', 'AWS', 'Git', 'CI/CD'],
  },
];

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    icon: '☁️',
    color: '#f97316',
  },
];

const roles = ['Full Stack Developer', 'Open Source Contributor', 'Cloud Enthusiast', 'Problem Solver'];

/* ── Component ──────────────────────────────────────────── */
export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [showAllProjects, setShowAllProjects] = useState(false);

  const heroTitleRef = useRef<HTMLSpanElement>(null);
  const heroRoleRef = useRef<HTMLSpanElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const featuredProjects = allProjects.filter((p) => p.featured);
  const extraProjects = allProjects.filter((p) => !p.featured);

  /* ─── GSAP master animation suite ──────────────────────── */
  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 1. Hero entrance — layered timeline */
      const heroTL = gsap.timeline({ delay: 0.2 });
      heroTL
        .from('.hero-badge', {
          opacity: 0, y: -30, scale: 0.85,
          duration: 0.7, ease: 'back.out(2)',
        })
        .from('.hero-title-line', {
          opacity: 0, y: 100, skewY: 6, rotateX: -25,
          duration: 1, stagger: 0.18, ease: 'power4.out',
          transformOrigin: 'top center',
        }, '-=0.3')
        .from('.hero-sub', {
          opacity: 0, y: 40, filter: 'blur(6px)',
          duration: 0.9, ease: 'power3.out',
        }, '-=0.5')
        .fromTo('.hero-ctas > *',
          { opacity: 0, y: 25, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: 'back.out(1.8)', clearProps: 'transform' },
        '-=0.5')
        .fromTo('.hero-stats-item',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
        '-=0.3')
        .fromTo('.hero-scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
        '-=0.1');

      /* 2. Role typewriter loop with cursor blink */
      if (heroRoleRef.current) {
        let i = 0;
        const cycle = () => {
          // First wipe out old text
          gsap.to(heroRoleRef.current, {
            opacity: 0, x: -10,
            duration: 0.3, ease: 'power2.in',
            onComplete: () => {
              gsap.set(heroRoleRef.current, { x: 10 });
              gsap.to(heroRoleRef.current, {
                duration: 0,
                text: roles[i % roles.length],
                onComplete: () => {
                  gsap.to(heroRoleRef.current, { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' });
                  gsap.delayedCall(2.5, cycle);
                  i++;
                },
              });
            },
          });
        };
        gsap.delayedCall(2, cycle);
      }

      /* 3. Parallax orbs follow mouse */
      const orbs = document.querySelectorAll<HTMLElement>('.parallax-orb');
      const onMouseMove = (e: MouseEvent) => {
        const { clientX: x, clientY: y } = e;
        const cx = window.innerWidth / 2;
        const cy = window.innerHeight / 2;
        orbs.forEach((orb, idx) => {
          const depth = (idx + 1) * 18;
          gsap.to(orb, {
            x: ((x - cx) / cx) * depth,
            y: ((y - cy) / cy) * depth,
            duration: 1.2, ease: 'power2.out',
          });
        });
      };
      window.addEventListener('mousemove', onMouseMove);

      /* 4. Magnetic CTA buttons */
      document.querySelectorAll<HTMLElement>('.magnetic-btn').forEach((btn) => {
        const onEnter = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.4, ease: 'power2.out' });
        };
        const onLeave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.5)' });
        btn.addEventListener('mousemove', onEnter);
        btn.addEventListener('mouseleave', onLeave);
      });

      /* 5. Section heading slide + reveal */
      gsap.utils.toArray<HTMLElement>('.section-tag').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('.section-heading').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60, filter: 'blur(4px)' },
          {
            opacity: 1, y: 0, filter: 'blur(0px)',
            duration: 1, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        );
      });

      /* 6. Section reveal with clip-path wipe */
      gsap.utils.toArray<HTMLElement>('.gsap-section').forEach((sec) => {
        gsap.fromTo(
          sec,
          { opacity: 0, y: 80 },
          {
            opacity: 1, y: 0,
            duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: sec, start: 'top 80%' },
          }
        );
      });

      /* 7. Staggered children with alternating x directions */
      gsap.utils.toArray<HTMLElement>('.stagger-container').forEach((container) => {
        const children = Array.from(container.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { opacity: 0, y: 50, scale: 0.92 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.75, stagger: 0.12,
            ease: 'back.out(1.4)',
            scrollTrigger: { trigger: container, start: 'top 85%' },
          }
        );
      });

      /* 8. Skill tag pop-in with rotation spring */
      gsap.utils.toArray<HTMLElement>('.skill-tag').forEach((tag, i) => {
        gsap.fromTo(tag,
          { opacity: 0, scale: 0.5, rotation: gsap.utils.random(-15, 15) },
          {
            opacity: 1, scale: 1, rotation: 0,
            duration: 0.5, delay: i * 0.04,
            ease: 'back.out(2)',
            scrollTrigger: { trigger: tag, start: 'top 92%' },
          }
        );
      });

      /* 9. Experience timeline dot pulse + card slide */
      gsap.utils.toArray<HTMLElement>('.timeline-dot').forEach((dot) => {
        gsap.fromTo(dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)',
            scrollTrigger: { trigger: dot, start: 'top 85%' },
          }
        );
        gsap.to(dot, {
          boxShadow: '0 0 0 10px rgba(255,215,0,0)', 
          scale: 1.3,
          duration: 1.2, ease: 'power2.out',
          repeat: -1, yoyo: true,
        });
      });

      gsap.utils.toArray<HTMLElement>('.timeline-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: 60, rotateY: -8 },
          {
            opacity: 1, x: 0, rotateY: 0,
            duration: 0.9, delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 85%' },
          }
        );
      });


      /* 11. Certification cards slide up with bounce */
      gsap.utils.toArray<HTMLElement>('.cert-card').forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 0.8, delay: i * 0.1,
            ease: 'back.out(1.5)',
            scrollTrigger: { trigger: card, start: 'top 88%' },
          }
        );
      });

      /* 12. Stats counter */
      if (statsRef.current) {
        statsRef.current.querySelectorAll<HTMLElement>('.stat-num').forEach((el) => {
          const target = parseInt(el.getAttribute('data-target') || '0', 10);
          gsap.fromTo(el,
            { textContent: 0 },
            {
              textContent: target,
              duration: 2.5, ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: { trigger: el, start: 'top 85%' },
            }
          );
        });
      }

      /* 13. Contact section: form fields stagger */
      gsap.utils.toArray<HTMLElement>('.form-field').forEach((field, i) => {
        gsap.fromTo(field,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0,
            duration: 0.6, delay: i * 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: field, start: 'top 92%' },
          }
        );
      });

      /* 14. Footer brand reveal */
      gsap.fromTo('.footer-brand',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: '.footer-brand', start: 'top 95%' },
        }
      );

      gsap.fromTo('.footer-link',
        { opacity: 0, y: 15 },
        {
          opacity: 1, y: 0,
          duration: 0.5, stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: { trigger: '.footer-link', start: 'top 98%' },
        }
      );

      return () => window.removeEventListener('mousemove', onMouseMove);
    });

    return () => ctx.revert();
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
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

  /* Animate extra project cards when they appear */
  useEffect(() => {
    if (!showAllProjects) return;
    // Small delay to let React render the new cards first
    const id = setTimeout(() => {
      const extraCards = document.querySelectorAll<HTMLElement>('.extra-project-card');
      if (!extraCards.length) return;
      gsap.fromTo(
        Array.from(extraCards),
        { opacity: 0, y: 60, scale: 0.92 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, stagger: 0.12,
          ease: 'back.out(1.4)',
        }
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
  }, [showAllProjects]);

  return (
    <main className="w-full relative text-foreground">
      <ThreeBackground />

      {/* ── HERO ────────────────────────────────────────── */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6"
      >
        {/* Parallax gradient orbs */}
        <div className="parallax-orb absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="parallax-orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[100px] pointer-events-none" />

        {/* Badge */}
        <div className="hero-badge glass-pill inline-flex items-center gap-2 px-5 py-2 rounded-full text-primary text-sm font-semibold mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </div>

        {/* Title */}
        <div className="overflow-hidden mb-2">
          <h2 className="hero-title-line text-2xl md:text-3xl font-light tracking-[0.25em] text-gray-400 uppercase text-center">
            Hi, I'm <span className="text-white font-semibold">Pulkit Gupta</span>
          </h2>
        </div>
        <div className="overflow-hidden mb-6">
          <h1 className="hero-title-line text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-center text-white leading-none">
            <span ref={heroRoleRef} className="text-gradient min-w-[12ch] inline-block">Full Stack Developer</span>
          </h1>
        </div>

        <p className="hero-sub text-gray-400 text-center max-w-xl text-lg leading-relaxed mb-10">
          Engineering impactful products at the intersection of AI, cloud, and beautiful UI — from scalable backends to pixel-perfect interfaces.
        </p>

        {/* CTAs */}
        <div className="hero-ctas flex flex-wrap gap-4 items-center justify-center mb-16">
          <a
            href="#works"
            className="magnetic-btn group px-8 py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,215,0,0.25)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)] flex items-center gap-2"
          >
            View My Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="magnetic-btn px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm"
          >
            Let's Talk
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="glass-stats flex gap-10 md:gap-20 px-10 py-6 rounded-2xl">
          {[
            { label: 'LeetCode Solved', value: 450, suffix: '+' },
            { label: 'Projects Built', value: 10, suffix: '+' },
            { label: 'CGPA', value: 994, suffix: '', display: '9.94' },
          ].map((s) => (
            <div key={s.label} className="hero-stats-item text-center">
              <div className="text-3xl md:text-4xl font-black text-white">
                {s.display ? (
                  <span>{s.display}</span>
                ) : (
                  <>
                    <span className="stat-num" data-target={s.value}>0</span>
                    <span className="text-primary">{s.suffix}</span>
                  </>
                )}
              </div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────── */}
      <section
        id="about"
        className="py-32 relative z-10 glass-section"
      >
        <div className="max-w-6xl mx-auto px-6 gsap-section">
          <div className="section-tag text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Who I am</div>
          <h2 className="section-heading text-4xl md:text-5xl font-black mb-16 text-center text-white">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                I'm a passionate <strong className="text-white">Full Stack Developer</strong> who loves engineering
                scalable, high-impact products. I'm driven by a deep curiosity for how things work—from distributed
                cloud systems to pixel-perfect interfaces.
              </p>
              <p>
                I've shipped a live ed-tech platform at <strong className="text-white">Grootz</strong> and integrated AI content workflows at <strong className="text-white">WriteCream</strong>. Outside work, I co-founded <strong className="text-white">Connect-SRM</strong>, a student community platform that has grown to <strong className="text-primary">1000+ active users</strong>.
              </p>
              <p>
                I've solved <strong className="text-primary">450+ problems on LeetCode</strong> (Contest Rank:{' '}
                <strong className="text-white">1446</strong>), and I'm always seeking problems worth solving.
              </p>

              <div className="flex gap-4 pt-4">
                <a
                  href="/assets/pulkit_gupta_resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-black transition-all"
                >
                  <UserCircle2 size={18} /> Resume
                </a>
                <a
                  href="https://github.com/pulkit1417"
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
                >
                  <i className="fa-brands fa-github" /> GitHub
                </a>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 stagger-container">
              {[
                { icon: Code2, label: 'Frontend Dev', sub: 'React · Next.js · Angular', color: 'text-primary' },
                { icon: Server, label: 'Backend Dev', sub: 'Node · Express · Spring', color: 'text-violet-400' },
                { icon: Database, label: 'Cloud & DevOps', sub: 'AWS · Docker · K8s', color: 'text-blue-400' },
                { icon: Award, label: 'Open Source', sub: 'GSSoC\'24 Contributor', color: 'text-green-400' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-3"
                >
                  <item.icon size={36} className={item.color} />
                  <span className="font-bold text-white">{item.label}</span>
                  <span className="text-xs text-gray-500">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 relative z-10">
        <div className="max-w-4xl mx-auto px-6 gsap-section">
          <div className="section-tag text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Career</div>
          <h2 className="section-heading text-4xl md:text-5xl font-black mb-16 text-center text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="relative pl-6 border-l-2 border-white/10 space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative">
                <div
                  className="timeline-dot absolute -left-[1.45rem] top-2 w-4 h-4 rounded-full border-2 border-current"
                  style={{ color: exp.color, background: exp.color, boxShadow: `0 0 14px ${exp.color}88` }}
                />
                <div className="timeline-card glass-card p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all ml-6">
                  <span className="inline-block px-3 py-1 bg-white/10 text-xs font-bold rounded-full mb-4 text-gray-300">
                    {exp.period}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-lg font-semibold mb-6" style={{ color: exp.color }}>
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

      {/* ── SKILLS ──────────────────────────────────────── */}
      <section
        id="skills"
        className="py-32 relative z-10 glass-section"
      >
        <div className="max-w-6xl mx-auto px-6 gsap-section">
          <div className="section-tag text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Expertise</div>
          <h2 className="section-heading text-4xl md:text-5xl font-black mb-4 text-center text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
            A curated breakdown of my technical abilities across the full development lifecycle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-container">
            {skills.map((sg, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all"
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

      {/* ── PROJECTS ────────────────────────────────────── */}
      <section id="works" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 gsap-section">
          <div className="text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Portfolio</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-center text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            Things I've built that I'm proud of. Each one taught me something new.
          </p>

          {/* Featured 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={i} p={p} />
            ))}
          </div>

          {/* Load More */}
          {!showAllProjects ? (
            <div className="flex justify-center mt-14">
              <button
                onClick={() => setShowAllProjects(true)}
                className="group px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-primary/50 transition-all flex items-center gap-3"
              >
                View More Projects
                <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {extraProjects.map((p, i) => (
                <ProjectCard key={i} p={p} extraClass="extra-project-card" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CERTIFICATIONS ──────────────────────────────── */}
      <section
        id="certifications"
        className="py-24 relative z-10 glass-section"
      >
        <div className="max-w-5xl mx-auto px-6 gsap-section">
          <div className="section-tag text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Credentials</div>
          <h2 className="section-heading text-4xl md:text-5xl font-black mb-16 text-center text-white">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cert card */}
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="cert-card glass-card p-8 rounded-2xl border border-white/10 hover:border-orange-400/40 transition-all flex items-start gap-6"
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

            {/* Achievement cards */}
            {[
              {
                icon: '🏆',
                color: '#ffd700',
                title: 'LeetCode — 450+ Problems',
                sub: 'Overall Contest Rank: 1446',
              },
              {
                icon: '🚀',
                color: '#a78bfa',
                title: 'Connect-SRM Co-Founder',
                sub: 'Student platform · 1000+ active users',
              },
              {
                icon: '🌐',
                color: '#34d399',
                title: 'GirlScript Summer of Code \'24',
                sub: 'Open Source Contributor',
              },
            ].map((ach, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-2xl border border-white/10 hover:border-white/25 transition-all flex items-start gap-6"
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

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section id="contact" className="py-32 relative z-10 glass-section">
        <div className="max-w-6xl mx-auto px-6 gsap-section">
          <div className="text-sm font-bold tracking-widest text-primary mb-2 uppercase text-center">Say Hello</div>
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <div className="glass-card rounded-[2rem] overflow-hidden flex flex-col md:flex-row border border-white/10">
            {/* Left info panel */}
            <div className="md:w-5/12 glass-primary-panel p-12 text-black flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Let's build something great.</h3>
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
                  {[
                    { href: 'https://github.com/pulkit1417', icon: 'fa-github' },
                    { href: 'https://www.linkedin.com/in/pulkit-gupta-708941287/', icon: 'fa-linkedin' },
                    { href: 'https://www.instagram.com/pulkit__24/', icon: 'fa-instagram' },
                  ].map((s) => (
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
            <div className="md:w-7/12 p-12 glass-dark-panel">
              <form className="flex flex-col gap-6" onSubmit={handleFormSubmit}>
                {formStatus === 'sent' ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-6">
                    <div className="w-20 h-20 bg-primary text-black rounded-full flex items-center justify-center text-3xl">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message received!</h3>
                    <p className="text-gray-400">I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        label="Your Name"
                        type="text"
                        value={formData.name}
                        onChange={(v) => setFormData({ ...formData, name: v })}
                        disabled={formStatus === 'sending'}
                      />
                      <FormField
                        label="Your Email"
                        type="email"
                        value={formData.email}
                        onChange={(v) => setFormData({ ...formData, email: v })}
                        disabled={formStatus === 'sending'}
                      />
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
                      className="mt-4 px-10 py-4 bg-white text-black font-bold rounded-full w-max flex items-center gap-3 hover:bg-primary transition-colors group disabled:opacity-40"
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

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="relative z-10 glass-section">
        <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="text-2xl font-black text-white tracking-tighter">
              Pulkit<span className="text-primary">.</span>dev
            </a>
            <p className="text-gray-600 text-sm mt-2 max-w-xs">
              Building impactful things for the web. Always learning, always shipping.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-500">
            {['About', 'Experience', 'Skills', 'Works', 'Certifications', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="footer-link hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { href: 'https://github.com/pulkit1417', icon: 'fa-github' },
              { href: 'https://www.linkedin.com/in/pulkit-gupta-708941287/', icon: 'fa-linkedin' },
              { href: 'https://www.instagram.com/pulkit__24/', icon: 'fa-instagram' },
            ].map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/50 transition-all"
              >
                <i className={`fa-brands ${s.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ── Sub-components ─────────────────────────────────────── */
function ProjectCard({ p, extraClass = '' }: { p: (typeof allProjects)[0]; extraClass?: string }) {
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

function FormField({
  label, type, value, onChange, disabled,
}: {
  label: string; type: string; value: string; onChange: (v: string) => void; disabled: boolean;
}) {
  return (
    <div className="form-field flex flex-col gap-2">
      <label className="text-xs font-bold tracking-widest text-gray-500 uppercase">{label}</label>
      <input
        type={type}
        required
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent border-b border-white/15 pb-2 text-white outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}
