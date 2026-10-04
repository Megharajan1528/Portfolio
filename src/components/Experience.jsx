import React from 'react';
import { 
  Briefcase, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight,
  Sparkles,
  Terminal,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship & <span className="text-gradient-primary">Full-Stack Training</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Hands-on software development internship at Elevate Labs paired with corporate full-stack program at KodNest Technologies.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Bar */}
          <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-500 opacity-30" />

          <div className="space-y-10">
            {experience.map((item, idx) => {
              const isInternship = item.type === 'Internship';

              return (
                <div key={item.id} className="relative flex flex-col md:flex-row gap-6 items-start">
                  
                  {/* Timeline Node Indicator */}
                  <div className="hidden md:flex w-16 h-16 rounded-2xl bg-navy-950 border border-indigo-500/40 items-center justify-center shrink-0 z-10 shadow-lg shadow-indigo-950/50">
                    {isInternship ? (
                      <Briefcase className="w-7 h-7 text-sky-400" />
                    ) : (
                      <Award className="w-7 h-7 text-purple-400" />
                    )}
                  </div>

                  {/* Main Content Card */}
                  <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-indigo-500/40 w-full space-y-5 transition-all">
                    
                    {/* Top Row: Role, Organization & Time Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                              isInternship
                                ? 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                                : 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                            }`}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mt-1.5">
                          {item.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-300 mt-1">
                          <span className="font-semibold text-sky-300">{item.organization}</span>
                          {item.location && (
                            <>
                              <span className="text-slate-600">•</span>
                              <span className="flex items-center gap-1 text-slate-400 text-xs">
                                <MapPin className="w-3 h-3 text-slate-500" />
                                {item.location}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-navy-950/80 border border-slate-800 text-xs font-mono text-slate-300 shrink-0 self-start sm:self-center">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    {/* Summary Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Key Contributions & Learnings */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                        Core Responsibilities & Milestones:
                      </span>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skill Chips */}
                    <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono text-slate-400 mr-1">Technologies:</span>
                      {item.skillsUsed.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 text-xs font-mono rounded bg-slate-800/70 border border-slate-700/60 text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
