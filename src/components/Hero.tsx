import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Github,
  Linkedin,
  FileDown,
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

  // Smooth typewriter/rotator effect
  useEffect(() => {
    const fullText = PROFILE_DATA.rotatingHeadlines[currentHeadlineIndex];
    const typingSpeed = isDeleting ? 25 : 50;

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

  // Robust path resolution for assets (works on both root domains & GitHub Pages subpaths)
  const cvUrl =
    import.meta.env.BASE_URL === '/'
      ? PROFILE_DATA.cvPath
      : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${PROFILE_DATA.cvPath}`;

  const photoUrl =
    import.meta.env.BASE_URL === '/'
      ? '/photo.jpg'
      : `${import.meta.env.BASE_URL.replace(/\/$/, '')}/photo.jpg`;

  const placeholderUrl =
    import.meta.env.BASE_URL === '/'
      ? PROFILE_DATA.photoPlaceholder
      : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${PROFILE_DATA.photoPlaceholder}`;

  return (
    <section
      id="home"
      className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center pt-28 pb-12 sm:pb-16 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background subtle ambient lighting glows */}
      <div className="absolute top-1/4 -left-28 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-12 -right-28 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-purple-700/10 via-blue-600/10 to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle tech grid background with soft radial mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3341550a_1px,transparent_1px),linear-gradient(to_bottom,#3341550a_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_60%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
        {/* Left Column: Bio, Typewriter, Metadata, CTAs (60% width on desktop) */}
        <div className="lg:col-span-7 flex flex-col space-y-4 sm:space-y-4.5 text-left">
          {/* 1. Status Badge - Compact & Lightweight */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 w-fit backdrop-blur-md shadow-sm hover:border-emerald-500/40 transition-colors">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              {PROFILE_DATA.heroBadge}
            </span>
          </div>

          {/* 2. Single Terminal Prefix & Greeting */}
          <div className="space-y-1 pt-0.5">
            <p className="text-sm sm:text-base font-mono text-cyan-400 font-semibold tracking-wide flex items-center gap-1.5">
              <span>&gt;_</span>
              <span className="text-slate-200 font-medium">Hi, I'm</span>
            </p>

            {/* 3. Name - Responsive clamp sizing */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Ravichandran{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Harini
              </span>
            </h1>

            {/* 4. Professional Title */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-medium pt-0.5 leading-snug">
              {PROFILE_DATA.tagline}
            </p>
          </div>

          {/* 5. Animated Typewriter Card - Natural sizing, no clipping */}
          <div className="w-fit max-w-full py-0.5">
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm md:text-base font-mono text-purple-300 bg-purple-950/30 px-3.5 py-1.5 rounded-lg border border-purple-800/40 shadow-inner">
              <Brain className="w-4 h-4 text-purple-400 shrink-0" />
              <span className="break-words leading-tight">{displayText}</span>
              <span className="inline-block w-1.5 h-4 bg-cyan-400 animate-pulse shrink-0 ml-0.5" />
            </div>
          </div>

          {/* 6. Hero Description with subtle highlights */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-[780px]">
            I enjoy turning data and ideas into practical intelligent applications. My interests span{' '}
            <span className="text-cyan-300 font-medium">Machine Learning</span>, Data Science, Computer Vision, Generative AI and intelligent software development. I am currently exploring{' '}
            <span className="text-purple-300 font-medium">Agentic AI</span>,{' '}
            <span className="text-blue-300 font-medium">RAG</span> and modern AI application development while gaining professional experience in data processing at Soundmouse.
          </p>

          {/* 7. Lightweight Metadata Row with subtle separators */}
          <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1.5 text-xs sm:text-sm text-slate-300 pt-0.5 pb-1">
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{PROFILE_DATA.heroInfo.location}</span>
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Briefcase className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <span>{PROFILE_DATA.heroInfo.role}</span>
            </span>
            <span className="hidden lg:inline text-slate-600">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>{PROFILE_DATA.heroInfo.opportunity}</span>
            </span>
          </div>

          {/* 8. CTA Buttons Group - Consistent height, clear hierarchy */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* View Projects (Primary CTA) */}
            <a
              href="#projects"
              className="h-10 px-5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-sm hover:from-blue-500 hover:to-purple-500 shadow-md shadow-purple-900/30 hover:shadow-purple-700/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* View GitHub (Secondary) */}
            <a
              href={PROFILE_DATA.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-xl bg-dark-900/90 text-slate-200 text-sm font-medium border border-slate-700/80 hover:bg-dark-800 hover:border-slate-500 hover:text-white transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <Github className="w-4 h-4 text-slate-300" />
              <span>View GitHub</span>
            </a>

            {/* Connect on LinkedIn (Secondary) */}
            <a
              href={PROFILE_DATA.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-xl bg-dark-900/90 text-slate-200 text-sm font-medium border border-slate-700/80 hover:bg-dark-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200 flex items-center gap-2 shadow-sm"
            >
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>Connect on LinkedIn</span>
            </a>

            {/* Download CV (Secondary) */}
            <a
              href={cvUrl}
              download="Ravichandran_Harini_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-4 rounded-xl bg-dark-900/90 text-slate-200 text-sm font-medium border border-slate-700/80 hover:bg-dark-800 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-200 flex items-center gap-2 shadow-sm"
              title="Download CV"
            >
              <FileDown className="w-4 h-4 text-purple-400" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Right Column: Profile Image Card (40% width on desktop) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[420px]">
            {/* Soft background glow behind image frame */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-cyan-500/25 via-indigo-500/25 to-purple-500/25 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 -z-10" />

            <div className="glass-card rounded-3xl p-3 sm:p-3.5 border border-slate-700/60 shadow-2xl relative overflow-hidden group">
              {/* Corner accent decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400/80 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-purple-400/80 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-blue-400/80 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-purple-400/80 rounded-br-sm pointer-events-none" />

              {/* Profile Image container with photo.jpg / SVG fallback */}
              <div className="relative aspect-[4/4.6] rounded-2xl overflow-hidden bg-dark-900/90 border border-slate-800 flex items-center justify-center">
                {!imageError ? (
                  <img
                    src={photoUrl}
                    alt="Ravichandran Harini"
                    className="w-full h-full object-cover object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                    <img
                      src={placeholderUrl}
                      alt="Ravichandran Harini Profile Graphic"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                {/* Overlaid Pill Badge at the bottom of the card */}
                <div className="absolute bottom-3 left-3 right-3 py-2 px-3 bg-dark-950/85 backdrop-blur-md rounded-xl border border-slate-700/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
