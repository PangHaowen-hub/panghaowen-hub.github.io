export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Award {
  title: string;
  date: string;
  description: string;
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Award {
  title: string;
  date: string;
  description: string;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}

export const SectionId = {
  HERO: 'home',
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];
