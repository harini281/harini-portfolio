import React from 'react';
import {
  Github,
  ExternalLink,
  Crown,
  FolderGit2,
  CheckCircle,
  Database,
  Bot,
  Shield,
  CloudSun,
  Camera,
  Layers,
} from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Project } from '../types/portfolio';

// SVG Visual Wireframe representation for each project's thumbnail
const ProjectThumbnail: React.FC<{ project: Project }> = ({ project }) => {
  const renderIcon = () => {
    switch (project.id) {
      case 'urbanflow-ai':
        return <Database className="w-10 h-10 text-blue-400" />;
      case 'travelwise':
        return <Bot className="w-10 h-10 text-purple-400" />;
      case 'sentinelshield-ai':
        return <Shield className="w-10 h-10 text-cyan-400" />;
      case 'property-risk-intelligence':
        return <Layers className="w-10 h-10 text-emerald-400" />;
      case 'smart-weather-travel-assistant':
        return <CloudSun className="w-10 h-10 text-amber-400" />;
      case 'flower-classification':
        return <Camera className="w-10 h-10 text-pink-400" />;
      default:
        return <FolderGit2 className="w-10 h-10 text-slate-400" />;
    }
  };

  return (
    <div
      className={`w-full h-48 sm:h-52 rounded-xl bg-gradient-to-br ${project.gradient} border border-slate-700/60 relative overflow-hidden flex items-center justify-center p-6 group-hover:border-purple-500/50 transition-all`}
    >
      {/* Abstract geometric grid lines */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:16px_16px]" />

      {/* Decorative pulse ring */}
      <div className="absolute w-32 h-32 rounded-full border border-white/10 animate-pulse pointer-events-none" />

      {/* Central Visual Icon & Title Badge */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-2">
        <div className="p-3.5 rounded-2xl bg-dark-900/80 backdrop-blur-md border border-slate-700/80 shadow-lg">
          {renderIcon()}
        </div>
        <span className="text-xs font-mono font-medium text-slate-200 tracking-wider bg-dark-950/70 px-3 py-1 rounded-full border border-slate-800">
          {project.metricsBadge || 'Intelligent Architecture'}
        </span>
      </div>

      {/* Flagship Badge Ribbon if applicable */}
      {project.isFlagship && (
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-[11px] font-semibold backdrop-blur-md shadow-sm">
          <Crown className="w-3.5 h-3.5 text-amber-400" />
          <span>Flagship Project</span>
        </div>
      )}
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
            <span>Featured Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mt-3"></div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mt-4">
            Real-world systems spanning large-scale data analytics, multi-agent AI architectures, cybersecurity telemetry, and deep learning.
          </p>
        </div>

        {/* Flagship Project Showcase: UrbanFlow AI */}
        {PROJECTS.filter((p) => p.isFlagship).map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-blue-500/40 shadow-2xl relative overflow-hidden mb-12 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Graphic */}
              <div className="lg:col-span-5">
                <ProjectThumbnail project={project} />
              </div>

              {/* Description & Metrics */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-500/20 text-blue-400 border border-blue-500/40 flex items-center gap-1">
                      <Crown className="w-3 h-3 text-amber-400" />
                      FLAGSHIP DATA SCIENCE &amp; ML PROJECT
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400 mt-1 font-mono">
                    {project.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>

                {/* Key Points Bullet List */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    Core Technical Accomplishments:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-dark-900 text-slate-200 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-900/30 transition-all flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-dark-900 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-all flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="px-3 py-2 rounded-xl bg-slate-900/50 text-slate-500 border border-slate-800 text-[11px] font-mono">
                      Research &amp; Benchmark Codebase
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Other 5 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.filter((p) => !p.isFlagship).map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-slate-800/80 relative group"
            >
              <div className="space-y-4">
                {/* Thumbnail Graphic */}
                <ProjectThumbnail project={project} />

                {/* Header & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 mt-1 line-clamp-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Key Points */}
                <ul className="space-y-1.5 pt-1 border-t border-slate-800/60">
                  {project.keyPoints.slice(0, 3).map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span className="line-clamp-1">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-dark-900/90 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-5 mt-4 border-t border-slate-800/80">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-dark-900 hover:bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700/80 hover:border-slate-600 transition-all flex items-center justify-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                {project.liveDemoUrl ? (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 rounded-lg bg-dark-900 hover:bg-slate-800 text-cyan-400 text-xs font-medium border border-slate-700/80 transition-all flex items-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects on GitHub button */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/harini281?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-dark-900 text-slate-200 font-medium text-sm border border-slate-700 hover:border-cyan-400 hover:text-white shadow-lg hover:shadow-cyan-900/20 transition-all group"
          >
            <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>View All Repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
