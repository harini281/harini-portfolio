import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  FileDown,
  Terminal,
  Brain,
  Sparkles,
  MapPin,
  Briefcase,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profile';

export const Hero: React.FC = () => {
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [cvExists, setCvExists] = useState(true);

  // Check if cv.pdf actually exists in public folder
  useEffect(() => {
    fetch('/cv.pdf', { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          setCvExists(true);
        } else {
          setCvExists(false);
        }
      })
      .catch(() => setCvExists(false));
  }, []);

  // Smooth typewriter/rotator effect
  useEffect(() => {
    const fullText = PROFILE_DATA.rotatingHeadlines[currentHeadlineIndex];
    const typingSpeed = isDeleting ? 25 : 55;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentHeadlineIndex((prev) => (prev + 1) % PROFILE_DATA.rotatingHeadlines.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentHeadlineIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-700/15 via-blue-600/15 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Bio, Rotating Text, CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 w-fit backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              {PROFILE_DATA.heroBadge}
            </span>
          </div>

          {/* Greeting & Name */}
          <div className="space-y-1.5">
            <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium tracking-wide flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>&gt;_ Hi, I'm</span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ravichandran{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Harini
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium pt-1 leading-relaxed">
              {PROFILE_DATA.tagline}
            </p>
          </div>

          {/* Animated Dynamic Typewriter - Flexible container without clipping */}
          <div className="w-full py-1 min-h-[44px] flex items-center">
            <div className="inline-flex items-center gap-2 text-sm sm:text-base lg:text-lg font-mono text-purple-300 bg-purple-950/40 px-3.5 py-2 rounded-xl border border-purple-800/50 shadow-inner max-w-full">
              <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 shrink-0" />
              <span className="break-words leading-tight">{displayText}</span>
              <span className="inline-block w-2 h-4 sm:h-5 bg-cyan-400 animate-pulse shrink-0 ml-0.5" />
            </div>
          </div>

          {/* Natural Hero Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {PROFILE_DATA.heroDescription}
          </p>

          {/* Compact Hero Information Row */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-300 pt-1 pb-1">
            <span className="flex items-center gap-1.5 bg-dark-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{PROFILE_DATA.heroInfo.location}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-dark-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
              <Briefcase className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>{PROFILE_DATA.heroInfo.role}</span>
            </span>
            <span className="flex items-center gap-1.5 bg-dark-900/80 px-2.5 py-1 rounded-lg border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{PROFILE_DATA.heroInfo.opportunity}</span>
            </span>
          </div>

          {/* Hero Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* View Projects Primary CTA */}
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-sm hover:from-blue-500 hover:to-purple-500 shadow-md shadow-purple-900/30 hover:shadow-purple-700/50 transition-all flex items-center gap-2 group"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* View GitHub */}
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-dark-900 text-slate-200 text-sm font-medium border border-slate-700/80 hover:bg-dark-800 hover:border-slate-600 transition-all flex items-center gap-2 shadow-sm"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>View GitHub</span>
            </a>

            {/* Connect on LinkedIn */}
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-dark-900 text-slate-200 text-sm font-medium border border-slate-700/80 hover:bg-dark-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all flex items-center gap-2 shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>Connect on LinkedIn</span>
            </a>

            {/* Download CV - Gracefully handles presence of cv.pdf */}
            {cvExists ? (
              <a
                href={PROFILE_DATA.cvPath}
                download="Ravichandran_Harini_CV.pdf"
                className="px-4 py-2.5 rounded-xl bg-slate-800/60 text-slate-300 text-sm font-medium border border-slate-700/60 hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2"
                title="Download CV"
              >
                <FileDown className="w-4 h-4 text-slate-400" />
                <span>Download CV</span>
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="px-4 py-2.5 rounded-xl bg-slate-900/60 text-slate-500 text-sm font-medium border border-slate-800/80 cursor-not-allowed flex items-center gap-2"
                title="CV available upon request"
              >
                <FileDown className="w-4 h-4 text-slate-600" />
                <span>CV Upon Request</span>
              </button>
            )}
          </div>
        </div>

        {/* Right Column: Profile Image / Futuristic Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Soft background glow behind image frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/30 via-indigo-500/30 to-purple-500/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

            <div className="glass-card rounded-3xl p-3 sm:p-4 border border-slate-700/60 shadow-2xl relative overflow-hidden group">
              {/* Corner accent decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-purple-400/80 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-400/80 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-400/80 rounded-br-sm pointer-events-none" />

              {/* Profile Image container with photo.jpg / SVG fallback */}
              <div className="relative aspect-[4/4.5] rounded-2xl overflow-hidden bg-dark-900/90 border border-slate-800 flex items-center justify-center">
                {!imageError ? (
                  <img
                    src="/photo.jpg"
                    alt="Ravichandran Harini"
                    className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src={PROFILE_DATA.photoPlaceholder}
                      alt="Ravichandran Harini Profile Graphic"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Overlaid Pill Badge */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 bg-dark-950/90 backdrop-blur-md rounded-xl border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[11px] font-semibold text-slate-200 tracking-wide">
                      AI / ML Explorer
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-800/50">
                    SLIIT AI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
