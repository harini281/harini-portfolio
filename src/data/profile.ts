import { PersonalStrength } from '../types/portfolio';

export const PROFILE_DATA = {
  name: 'Ravichandran Harini',
  preferredName: 'Harini',
  tagline: 'AI / ML Undergraduate | Machine Learning Enthusiast | AI Application Developer',
  institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
  degree: 'BSc (Hons) in Information Technology',
  currentRole: 'Data Processing Associate at BMI',
  currentPeriod: 'May 2026 – Present',
  emailPlaceholder: 'YOUR_PUBLIC_EMAIL', // Replace with your real public email e.g. harini.ravichandran@example.com
  githubUsername: 'harini281',
  githubUrl: 'https://github.com/harini281',
  linkedinUrl: 'https://www.linkedin.com/in/ravichandran-harini-601858354/',
  cvPath: '/cv.pdf',
  photoPlaceholder: '/photo-placeholder.svg',

  rotatingHeadlines: [
    'Building Intelligent Systems',
    'Exploring Machine Learning',
    'Turning Data Into Insights',
    'Learning Agentic AI',
    'Building AI-Powered Applications',
  ],

  aboutBio: [
    "I'm an Information Technology undergraduate at SLIIT with a dedicated focus on Artificial Intelligence, Machine Learning, Data Science, and intelligent software engineering.",
    "I love the process of transforming messy raw data and ideas into practical, dependable applications that solve genuine problems. Rather than viewing machine learning in a silo, I'm passionate about the full lifecycle—from data preprocessing and feature engineering to model evaluation, robust backend APIs, and modern responsive user interfaces.",
    "Right now, I am deeply engaged in exploring the frontiers of Agentic AI, Retrieval-Augmented Generation (RAG), LangChain, and LangGraph. My goal is to grow into an AI/ML-focused Software Engineer who builds robust, human-centered intelligent systems that deliver measurable value.",
  ],

  personalStrengths: [
    {
      title: 'Problem Solver',
      tagline: 'Analytical & Methodical',
      description: 'Comfortable breaking down complex datasets and algorithmic challenges into clean, structured engineering solutions.',
      icon: 'Puzzle',
    },
    {
      title: 'Continuous Learner',
      tagline: 'Curious & Fast-Paced',
      description: 'Consistently experimenting with state-of-the-art tools—from PyTorch and Scikit-learn to LangChain and Agentic AI patterns.',
      icon: 'Sparkles',
    },
    {
      title: 'Creative Thinker',
      tagline: 'Applied Intelligence',
      description: 'Focused on designing intuitive, responsive interfaces that make complex AI predictions easy for users to understand.',
      icon: 'Lightbulb',
    },
    {
      title: 'Team Player',
      tagline: 'Collaborative & Adaptable',
      description: 'Enjoys cross-functional collaboration, clear documentation, code reviews, and building together toward shared milestones.',
      icon: 'Users',
    },
  ] as PersonalStrength[],
};
