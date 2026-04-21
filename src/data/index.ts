import { Code2, Database, Layout, Server } from 'lucide-react';
import type { Project, Experience, SkillGroup, Certification } from '@/types';

export const roles = [
  'Full Stack Developer',
  'Open Source Contributor',
  'Cloud Enthusiast',
  'Problem Solver',
];

export const experiences: Experience[] = [
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

export const allProjects: Project[] = [
  {
    name: 'Contently',
    tech: 'Next.js · Convex · TypeScript · Tailwind',
    desc: 'Full-stack content creation platform with real-time feeds, comments, AI-powered writing tools, rich-text editor, image uploads via ImageKit, and full auth & analytics.',
    link: 'https://getcontently.vercel.app/',
    featured: true,
  },
  {
    name: 'Spott',
    tech: 'Next.js · Convex · Tailwind · shadcn/ui',
    desc: 'Event discovery and management platform enabling users to explore events, create tickets, and track activity with a clean responsive UI, deployed on Vercel.',
    link: 'https://haveaspott.vercel.app/',
    featured: true,
  },
  {
    name: 'BloggingByte',
    tech: 'Node.js · MongoDB · Express · EJS',
    desc: 'Scalable blogging platform with JWT authentication, dynamic author profiles, and interactive features like comments, hosted on AWS Elastic Beanstalk.',
    link: 'https://blogging-byte.vercel.app/',
    featured: true,
  },
  {
    name: 'Memories',
    tech: 'JavaScript · Node.js · MongoDB',
    desc: 'A simple and intuitive platform to post, update, delete, and like your cherished memories. Users can sign up, log in, and securely manage their memories.',
    link: 'https://memories-mu-six.vercel.app/posts',
    featured: false,
  },
  {
    name: 'BookMyStay',
    tech: 'Next.js · TypeScript · Tailwind CSS',
    desc: 'A modern travel website providing an interactive interface to explore destinations, book hotels, read reviews, and stay updated with the latest travel deals.',
    link: 'https://book-my-stay-iota.vercel.app/',
    featured: false,
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
    name: 'CodeBin',
    tech: 'TypeScript · Angular · Firebase',
    desc: 'Collaborative space for developers to share and discover code snippets. Simplifies managing and accessing snippets with a seamless, responsive experience.',
    link: 'https://code-bin.vercel.app/',
    featured: false,
  },
];

export const skills: SkillGroup[] = [
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

export const certifications: Certification[] = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    year: '2026',
    icon: '☁️',
    color: '#f97316',
  },
];
