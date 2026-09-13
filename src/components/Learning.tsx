import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/skills';

export const Learning: React.FC = () => {
  return (
    <section id="learning" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/40 border border-violet-800/40 text-violet-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Active Knowledge Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Exploring</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full mt-3"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-4">
            Emerging concepts, frameworks, and methodologies I am actively studying, practicing in experimental codebases, and preparing for future systems.
          </p>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {CURRENTLY_EXPLORING.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 hover:border-violet-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-dark-900 text-slate-400 border border-slate-800">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-950/70 text-purple-300 border border-purple-800/50">
                    Exploring
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs text-slate-400 leading-relaxed mt-2">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="pt-3 mt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-violet-400" /> Academic &amp; Self-Study
                </span>
                <span className="text-violet-400 font-medium">In Progress</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
