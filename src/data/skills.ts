import { SkillCategory, LearningTopic } from '../types/portfolio';

export const TECH_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    description: "Core languages I've worked with for data analysis, machine learning models, and application logic.",
    icon: 'Code2',
    skills: [
      { name: 'Python' },
      { name: 'Java' },
      { name: 'JavaScript' },
      { name: 'C' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    title: 'AI / Machine Learning',
    description: "Foundational and modern techniques I've implemented in models, data processing, and evaluation.",
    icon: 'Brain',
    skills: [
      { name: 'Machine Learning' },
      { name: 'Deep Learning' },
      { name: 'Scikit-learn' },
      { name: 'TensorFlow' },
      { name: 'Pandas' },
      { name: 'NumPy' },
      { name: 'Feature Engineering' },
      { name: 'Data Preprocessing' },
      { name: 'Model Evaluation' },
    ],
  },
  {
    title: 'Generative / Agentic AI',
    description: 'Emerging architectures and frameworks for autonomous agents, RAG, and LLM orchestration.',
    icon: 'Bot',
    skills: [
      { name: 'Gemini API' },
      { name: 'LangChain' },
      { name: 'LangGraph' },
      { name: 'RAG' },
      { name: 'AI Agents' },
    ],
  },
  {
    title: 'Frontend',
    description: 'Building modern, responsive, and accessible user interfaces for web platforms.',
    icon: 'Layout',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
    ],
  },
  {
    title: 'Backend / APIs',
    description: 'Designing server-side services, endpoints, and microservice architectures.',
    icon: 'Server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'Flask' },
      { name: 'FastAPI' },
      { name: 'ASP.NET Core' },
      { name: 'Spring Boot' },
      { name: 'REST APIs' },
    ],
  },
  {
    title: 'Databases',
    description: 'Relational, document, and cloud-hosted data stores for persistent application states.',
    icon: 'Database',
    skills: [
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'PostgreSQL' },
      { name: 'SQLite' },
      { name: 'Supabase' },
    ],
  },
  {
    title: 'Tools',
    description: 'Essential developer tools, notebooks, version control, and containerization platforms.',
    icon: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Jupyter Notebook' },
      { name: 'Google Colab' },
      { name: 'Docker' },
    ],
  },
];

export const CURRENTLY_EXPLORING: LearningTopic[] = [
  {
    title: 'Machine Learning',
    category: 'Applied Intelligence',
    description: 'Supervised and unsupervised learning, feature optimization, and robust cross-validation.',
  },
  {
    title: 'Deep Learning',
    category: 'Neural Networks',
    description: 'Convolutional neural networks, transfer learning, and deep architectural foundations.',
  },
  {
    title: 'Agentic AI',
    category: 'Intelligent Systems',
    description: 'Multi-agent decision loops, state machines, and autonomous reasoning agents.',
  },
  {
    title: 'RAG',
    category: 'Generative AI',
    description: 'Retrieval-Augmented Generation architectures with vector stores and semantic search.',
  },
  {
    title: 'LangChain',
    category: 'LLM Orchestration',
    description: 'Building composable prompt chains, tool integrations, and structured LLM outputs.',
  },
  {
    title: 'LangGraph',
    category: 'Agent Workflows',
    description: 'Cyclic graph orchestration, agent memory checkpoints, and human-in-the-loop flows.',
  },
  {
    title: 'Computer Vision',
    category: 'Visual Intelligence',
    description: 'Image classification, feature extraction, and convolutional pipelines.',
  },
  {
    title: 'Generative AI',
    category: 'Modern AI',
    description: 'Multimodal model prompting, grounding techniques, and contextual AI assistants.',
  },
  {
    title: 'Model Evaluation',
    category: 'Data Science',
    description: 'Rigorous benchmark metrics including MAE, RMSE, R², ROC-AUC, and error distributions.',
  },
  {
    title: 'Data Analytics',
    category: 'Data Insights',
    description: 'Exploratory data analysis, spatial-temporal trends, and business intelligence reporting.',
  },
  {
    title: 'REST APIs',
    category: 'Backend Architecture',
    description: 'Asynchronous endpoint design, request validation, and low-latency model inference pipelines.',
  },
  {
    title: 'Full-Stack Development',
    category: 'Software Engineering',
    description: 'Connecting intuitive React interfaces with scalable, containerized backend services.',
  },
];
