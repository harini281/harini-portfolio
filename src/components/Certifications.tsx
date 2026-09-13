import React from 'react';
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Brain,
  Code2,
  Database,
  Cloud,
  Camera,
  Bot,
  Layers,
  FileCode,
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/certifications';
import { PROFILE_DATA } from '../data/profile';

const BADGE_ICONS: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Brain: <Brain className="w-5 h-5 text-purple-400" />,
  Bot: <Bot className="w-5 h-5 text-indigo-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-400" />,
  Cloud: <Cloud className="w-5 h-5 text-blue-400" />,
  Camera: <Camera className="w-5 h-5 text-rose-400" />,
  Layers: <Layers className="w-5 h-5 text-emerald-400" />,
  FileCode: <FileCode className="w-5 h-5 text-teal-400" />,
  Database: <Database className="w-5 h-5 text-sky-400" />,
};

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Credentials &amp; Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Continuous Learning</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-3"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-4">
            Structured coursework, vendor programs, and professional skill validations supporting academic studies and technical implementation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-dark-900 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    {cert.badgeIcon && BADGE_ICONS[cert.badgeIcon] ? (
                      BADGE_ICONS[cert.badgeIcon]
                    ) : (
                      <Award className="w-5 h-5 text-cyan-400" />
                    )}
                  </div>
                  {cert.category && (
                    <span className="text-[11px] font-mono text-slate-400 bg-dark-900/90 px-2.5 py-1 rounded-full border border-slate-800">
                      {cert.category}
                    </span>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-purple-400 mt-1">
                  {cert.issuer}
                </p>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>Issued {cert.issuedDate}</span>
                </div>

                {/* Skills tags */}
                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-slate-800/60">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-dark-900 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* View Credential Button (Rendered ONLY if credentialUrl exists) */}
              {cert.credentialUrl ? (
                <div className="pt-4 mt-4 border-t border-slate-800/60">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="pt-3 mt-3 border-t border-slate-800/40 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified Coursework
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Certifications Button */}
        <div className="mt-14 text-center">
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-dark-900 text-slate-200 font-medium text-sm border border-slate-700 hover:border-purple-400 hover:text-white shadow-lg hover:shadow-purple-900/20 transition-all group"
          >
            <Award className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>View All Certifications on LinkedIn</span>
            <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
