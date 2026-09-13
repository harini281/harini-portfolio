import React, { useState } from 'react';
import {
  Code2,
  Brain,
  Bot,
  Layout,
  Server,
  Database,
  Wrench,
  Layers,
  Sparkles,
} from 'lucide-react';
import { TECH_CATEGORIES } from '../data/skills';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Brain: <Brain className="w-5 h-5 text-purple-400" />,
  Bot: <Bot className="w-5 h-5 text-indigo-400" />,
  Layout: <Layout className="w-5 h-5 text-blue-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-amber-400" />,
  Wrench: <Wrench className="w-5 h-5 text-rose-400" />,
};

export const TechStack: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((cat) => cat.title.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-4">
            Technologies I've worked with and am currently developing my skills in.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-purple-600 text-white shadow-glow-sm'
                : 'bg-dark-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Categories ({TECH_CATEGORIES.length})
          </button>
          <button
            onClick={() => setActiveTab('AI')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'AI'
                ? 'bg-purple-600 text-white shadow-glow-sm'
                : 'bg-dark-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            AI &amp; Machine Learning
          </button>
          <button
            onClick={() => setActiveTab('Generative')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'Generative'
                ? 'bg-purple-600 text-white shadow-glow-sm'
                : 'bg-dark-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Generative / Agentic AI
          </button>
          <button
            onClick={() => setActiveTab('Backend')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              activeTab === 'Backend'
                ? 'bg-purple-600 text-white shadow-glow-sm'
                : 'bg-dark-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            Backend / APIs
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800/80 hover:border-slate-700 transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-700 flex items-center justify-center">
                    {CATEGORY_ICONS[category.icon] || <Sparkles className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white tracking-tight">{category.title}</h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {category.skills.length} tools &amp; concepts
                    </span>
                  </div>
                </div>

                {category.description && (
                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {category.description}
                  </p>
                )}

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
