import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  BookOpen, 
  CheckCircle2, 
  School,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-gradient-primary">Qualifications</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Formal engineering degree and pre-university credentials establishing strong problem-solving and software foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {education.map((edu, idx) => {
            const isBtech = edu.id === 'btech-cse';

            return (
              <div
                key={edu.id}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800/90 hover:border-emerald-500/40 flex flex-col justify-between transition-all group"
              >
                <div className="space-y-5">
                  {/* Top Bar: Icon, Period & Degree */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      {isBtech ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-navy-950/80 border border-slate-800 text-xs font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-sky-300 mt-1">
                      {edu.institution}
                    </p>
                  </div>

                  {/* Score Highlight Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-sm font-bold">
                    <Award className="w-4 h-4 text-emerald-400" />
                    <span>{edu.score}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Coursework & Focus Areas */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      {isBtech ? 'Key Coursework & Domains' : 'Academic Focus'}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2.5 py-1 text-xs rounded-lg bg-navy-950/80 border border-slate-800 text-slate-300 font-medium"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">2021–2025</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
