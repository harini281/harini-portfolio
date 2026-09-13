import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShieldCheck, Database } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-blue-400" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline marker with pulsing live beacon */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1 flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-dark-900 border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 animate-ping" />
                </div>
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl">
                {/* Header row: Role, Company, Period badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-800/80">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Current Role
                      </span>
                    </div>
                    <p className="text-base font-semibold text-cyan-400 mt-1 flex items-center gap-2">
                      <span>{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="text-xs text-slate-400 font-normal flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-900/90 border border-slate-700 text-xs font-mono text-slate-300 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-purple-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Body bullets */}
                <div className="pt-5 space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Database className="w-3.5 h-3.5 text-cyan-400" /> Core Responsibilities & Impact
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.description.map((item, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="pt-6 border-t border-slate-800/80 mt-6">
                  <span className="text-xs font-mono text-slate-400 block mb-2.5 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Professional Competencies Exercised:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800/60 text-slate-300 border border-slate-700/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
