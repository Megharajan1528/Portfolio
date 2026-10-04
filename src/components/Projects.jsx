import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Database, 
  Server, 
  Layers, 
  CheckCircle2, 
  Info, 
  ShoppingCart, 
  UtensilsCrossed, 
  ArrowUpRight, 
  ShieldAlert,
  Code,
  Sliders,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onShowToast }) {
  const { projects } = portfolioData;

  const handleMissingUrlNotice = (projectName) => {
    onShowToast(`The repository and live demo for "${projectName}" are currently in preparation. Please reach out via the contact form to request source code or walkthrough.`);
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production & Academic <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Detailed engineering breakdown of featured systems showcasing Spring Boot, Django, React, RESTful architectures, and database query optimization.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, idx) => {
            const isSalesSavvy = project.id === 'sales-savvy';
            const Icon = isSalesSavvy ? ShoppingCart : UtensilsCrossed;

            return (
              <div
                key={project.id}
                className="glass-card rounded-2xl border border-slate-800/90 hover:border-indigo-500/40 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-xl"
              >
                {/* Glow Accent Top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 ${
                    isSalesSavvy
                      ? 'bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-500'
                      : 'bg-gradient-to-r from-emerald-400 via-teal-500 to-sky-500'
                  }`}
                />

                <div className="space-y-6">
                  {/* Top Bar: Icon, Category & Truthful Status Badge */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border shadow-md ${
                          isSalesSavvy
                            ? 'bg-sky-500/15 border-sky-500/30 text-sky-400'
                            : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-slate-400 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="shrink-0 text-right">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono">
                        <Info className="w-3 h-3 text-amber-400" />
                        <span>Private Repo</span>
                      </span>
                    </div>
                  </div>

                  {/* Headline & Description */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-sky-200">
                      {project.headline}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Core Technologies
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg bg-navy-950/80 border border-indigo-500/25 text-slate-200 text-xs font-mono font-medium shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Implementation Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Engineering Highlights
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-800/80">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="p-2.5 rounded-lg bg-navy-950/60 border border-slate-800/70 text-center">
                        <span className="text-[10px] text-slate-400 block">{metric.label}</span>
                        <span className="text-xs font-bold text-sky-300 block truncate">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Honest Notice Card regarding Missing URL */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
                    <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{project.repositoryStatus.message}</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => handleMissingUrlNotice(project.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 transition-colors"
                  >
                    <span>Check Repository Status</span>
                    <Info className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white px-3.5 py-2 rounded-lg bg-sky-500/15 hover:bg-sky-500/30 border border-sky-500/30 transition-all"
                  >
                    <span>Request Code Walkthrough</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
