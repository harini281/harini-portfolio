import { SkillCategory, LearningTopic } from '../types/portfolio';

export const TECH_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages used for data analysis, machine learning models, and application logic.',
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
    description: 'Foundations of predictive modeling, data transformations, and model verification.',
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
    title: 'Generative & Agentic AI',
    description: 'Next-generation intelligent agent architectures, contextual reasoning, and orchestration.',
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
    title: 'Frontend Development',
    description: 'Building responsive, modern, and accessible client interfaces.',
    icon: 'Layout',
    skills: [
      { name: 'React' },
      { name: 'JavaScript' },
      { name: 'HTML5' },
      { name: 'CSS3 / Tailwind' },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'Architecting robust server-side services, microservices, and RESTful APIs.',
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
    title: 'Databases & Cloud Storage',
    description: 'Relational data stores, document databases, and backend-as-a-service platforms.',
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
    title: 'Developer Tools & Platforms',
    description: 'Version control, interactive notebooks, and containerization.',
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

export const CURRENTLY_LEARNING: LearningTopic[] = [
  {
    title: 'Agentic AI',
    category: 'Intelligent Systems',
    status: 'In Progress',
    description: 'Autonomous goal-driven reasoning, multi-agent workflows, and stateful agent coordination.',
  },
  {
    title: 'Retrieval-Augmented Generation (RAG)',
    category: 'Generative AI',
    status: 'In Progress',
    description: 'Connecting vector databases and embeddings to ground LLM completions in real-time knowledge.',
  },
  {
    title: 'LangChain & LangGraph',
    category: 'Agent Orchestration',
    status: 'In Progress',
    description: 'Constructing cyclical graphs, tool execution loops, and robust conversational memory.',
  },
  {
    title: 'Deep Learning',
    category: 'Neural Networks',
    status: 'In Progress',
    description: 'Exploring Convolutional Neural Networks (CNNs), transfer learning, and deep computer vision models.',
  },
  {
    title: 'Model Evaluation',
    category: 'Data Science',
    status: 'Active Exploration',
    description: 'Rigorous validation using MAE, RMSE, R², cross-validation, and drift detection metrics.',
  },
  {
    title: 'Machine Learning Pipelines',
    category: 'Data Engineering',
    status: 'Active Exploration',
    description: 'End-to-end data transformation, outlier treatment, and scalable feature engineering.',
  },
  {
    title: 'Data Analytics',
    category: 'Insights & BI',
    status: 'Active Exploration',
    description: 'Deriving spatial, temporal, and clustering insights from multi-million-row structured datasets.',
  },
  {
    title: 'High-Performance REST APIs',
    category: 'Backend',
    status: 'Next Milestone',
    description: 'Building asynchronous endpoints with FastAPI and ASP.NET Core for low-latency ML inference.',
  },
  {
    title: 'Full-Stack Intelligent Apps',
    category: 'Systems Architecture',
    status: 'Next Milestone',
    description: 'Bridging modern React client experiences with scalable containerized AI backend services.',
  },
];
