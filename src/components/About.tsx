import React from 'react';
import {
  Puzzle,
  Sparkles,
  Lightbulb,
  Users,
  GraduationCap,
  Target,
  Compass,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

const STRENGTH_ICONS: Record<string, React.ReactNode> = {
  Puzzle: <Puzzle className="w-5 h-5 text-cyan-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
  Lightbulb: <Lightbulb className="w-5 h-5 text-amber-400" />,
  Users: <Users className="w-5 h-5 text-blue-400" />,
};

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-purple-400" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-cyan-400" />
              <span>Undergraduate at SLIIT & Aspiring AI Engineer</span>
            </h3>

            {PROFILE_DATA.aboutBio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-2 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-dark-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1 font-mono">Academic Focus</span>
                <span className="text-sm font-semibold text-slate-100">BSc (Hons) in IT at SLIIT</span>
              </div>
              <div className="bg-dark-900/60 p-3.5 rounded-xl border border-slate-800">
                <span className="text-xs text-slate-400 block mb-1 font-mono">Core Trajectory</span>
                <span className="text-sm font-semibold text-slate-100">AI / ML Software Engineering</span>
              </div>
            </div>
          </div>

          {/* Career Objective & Engineering Philosophy */}
          <div className="lg:col-span-5 space-y-5">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border-l-4 border-l-purple-500 space-y-3">
              <div className="flex items-center gap-2 text-purple-300 font-semibold text-base">
                <Target className="w-5 h-5 text-purple-400" />
                <h4>Career Vision</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                My immediate goal is to contribute to high-impact teams as an AI/ML or Software Engineering Intern.
                I focus on architecting useful, real-world intelligent systems that merge solid mathematical foundations
                with resilient, maintainable production software.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-7 border-l-4 border-l-cyan-500 space-y-3">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold text-base">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <h4>Engineering Principles</h4>
              </div>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                  <span><strong>Pragmatism over Hype:</strong> Select models and architectures based on data clarity and measurable benchmarks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                  <span><strong>Data Integrity:</strong> Rigorous preprocessing and validation are the bedrock of any intelligent application.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span><strong>Full-Stack Awareness:</strong> An AI model is only as impactful as the user interface and APIs that deliver it.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Personal-Strength Cards */}
        <div className="mt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Personal <span className="text-gradient-purple-cyan">Strengths</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Core attributes I bring to engineering projects and development teams
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROFILE_DATA.personalStrengths.map((strength) => (
              <div
                key={strength.title}
                className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between space-y-3 relative group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-dark-900 border border-slate-700/80 flex items-center justify-center mb-4 group-hover:border-purple-500/50 transition-colors">
                    {STRENGTH_ICONS[strength.icon]}
                  </div>
                  <h4 className="text-base font-bold text-white">{strength.title}</h4>
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wide block mt-0.5">
                    {strength.tagline}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5">
                    {strength.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
