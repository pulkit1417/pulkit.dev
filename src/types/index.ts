import type { LucideIcon } from 'lucide-react';

export interface Project {
  name: string;
  tech: string;
  desc: string;
  link: string;
  featured: boolean;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  color: string;
  desc: string[];
}

export interface SkillGroup {
  category: string;
  icon: LucideIcon;
  color: string;
  items: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  color: string;
}
