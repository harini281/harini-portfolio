import React from 'react';
import {
  Puzzle,
  Sparkles,
  Lightbulb,
  Users,
  Compass,
  CheckCircle2,
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
            <span>Undergraduate &amp; Developer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mt-3"></div>
        </div>

        {/* Narrative Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 border border-slate-800/90 shadow-xl space-y-4">
          {PROFILE_DATA.aboutBio.map((paragraph, idx) => (
            <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Technical Interests Chips */}
        <div className="mb-16">
          <div className="text-center sm:text-left mb-5">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Technical Interests</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Core fields and disciplines I am actively focused on across research, coursework, and personal projects
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {PROFILE_DATA.technicalInterests.map((interest) => (
              <div
                key={interest}
                className="p-3.5 rounded-xl bg-dark-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-dark-800/90 transition-all flex items-center gap-2.5 group"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Personal-Strength Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Personal <span className="text-gradient-purple-cyan">Strengths</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Attributes I bring to development teams, academic collaborations, and engineering workflows
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
