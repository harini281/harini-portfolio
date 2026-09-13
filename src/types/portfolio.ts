export interface Project {
  id: string;
  title: string;
  isFlagship?: boolean;
  tagline: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  gradient: string;
  accentColor: string;
  metricsBadge?: string;
}

export interface SkillCategory {
  title: string;
  description?: string;
  icon: string;
  skills: {
    name: string;
    level?: 'Exploring' | 'Proficient' | 'Learning';
  }[];
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  employment?: string;
  period?: string;
  status?: string;
  summary?: string;
  bullets: string[];
  skillsGained?: string[];
  writerProfileUrl?: string;
}

export interface PersonalStrength {
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface LearningTopic {
  title: string;
  category: string;
  status?: 'In Progress' | 'Active Exploration' | 'Next Milestone';
  description?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  credentialUrl?: string;
  skills?: string[];
  category?: 'AI & Machine Learning' | 'Software Engineering' | 'Productivity';
  badgeIcon?: string;
}
