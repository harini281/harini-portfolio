import React from 'react';
import { ArrowUp, Github, Linkedin, Heart, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-dark-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Brand & Quote */}
        <div className="text-center md:text-left space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-base tracking-tight">
              Ravichandran Harini
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400 font-mono">SLIIT Undergraduate</span>
          </div>
          <p className="text-xs text-slate-400 italic flex items-center justify-center md:justify-start gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            "Exploring today, building a smarter tomorrow."
          </p>
        </div>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PROFILE_DATA.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all shadow-sm"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PROFILE_DATA.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all shadow-sm"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-purple-500/50 transition-all shadow-sm flex items-center gap-1.5 text-xs font-mono"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 text-purple-400" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>
      </div>

      {/* Copyright Subline */}
      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <p>Designed &amp; built by Ravichandran Harini</p>
        <p className="flex items-center gap-1">
          Crafted with React, TypeScript &amp; Tailwind CSS <Heart className="w-3 h-3 text-rose-500 fill-rose-500 inline ml-1" />
        </p>
      </div>
    </footer>
  );
};
