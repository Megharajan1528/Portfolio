import React from 'react';
import { 
  User, 
  Code, 
  Database, 
  CheckCircle2, 
  Sparkles, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  Target,
  FileCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const { personal, education, experience } = portfolioData;

  const highlights = [
    {
      icon: Code,
      title: "Backend Engineering",
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
      description: "Building structured REST APIs and services in Java (Spring Boot) and Python (Django) with clean separation of concerns."
    },
    {
      icon: Database,
      title: "Database Optimization",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Designing normalized schemas in MySQL, PostgreSQL, Oracle, with hands-on focus on query tuning, indexing, and data-access debugging."
    },
    {
      icon: Layers,
      title: "Full-Stack Integration",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      description: "Connecting scalable backends with dynamic React.js frontends, ensuring synchronized state, cart flows, and seamless user experiences."
    },
    {
      icon: ShieldCheck,
      title: "Quality & Testing",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      description: "Thorough understanding of SDLC, manual testing procedures, edge-case validation, OOP principles, and Data Structures & Algorithms."
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-primary">Megha Rajan</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            A software developer with an engineering foundation in Computer Science, enterprise Java training, and practical web development internship experience.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Narrative & Story */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Engineering Profile</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I hold a <strong className="text-white font-semibold">Bachelor of Technology in Computer Science & Engineering</strong> from the <span className="text-sky-300">College of Engineering Trikaripur</span> (2021–2025, CGPA 7.09) and completed my higher secondary education at <span className="text-sky-300">Durga Higher Secondary School</span> with an aggregate of <strong className="text-emerald-400 font-semibold">90.6%</strong>.
                </p>
                <p>
                  My engineering journey is driven by practical implementation. During my internship at <strong className="text-white font-semibold">Elevate Labs</strong> as a <span className="text-indigo-300 font-medium">Java Developer Intern and Web Development Intern</span>, I gained valuable firsthand exposure to software development cycles, teamwork, and component testing.
                </p>
                <p>
                  To further hone industry-level production skills, I completed the comprehensive <strong className="text-white font-semibold">Certified Full Stack Development Program</strong> at <span className="text-purple-300 font-medium">KodNest Technologies, Bengaluru</span> (Jun 2025 – Feb 2026), mastering the Java/Spring Boot ecosystem, React.js frontend architecture, complex SQL database schema design, query indexing, and algorithmic problem-solving.
                </p>
              </div>

              {/* Fast fact badges */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">B.Tech CSE</div>
                  <div className="text-sm font-bold text-sky-400">7.09 CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">Higher Sec.</div>
                  <div className="text-sm font-bold text-emerald-400">90.6%</div>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">Internship</div>
                  <div className="text-sm font-bold text-indigo-400">Elevate Labs</div>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800 text-center">
                  <div className="text-xs text-slate-400">Training</div>
                  <div className="text-sm font-bold text-purple-400">KodNest Tech</div>
                </div>
              </div>
            </div>

            {/* Resume Callout Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-sky-950/60 via-indigo-950/40 to-navy-900/80 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
                  <FileCheck className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Full Resume Available</h4>
                  <p className="text-xs text-slate-400">Review complete academic records, skills & verified milestones</p>
                </div>
              </div>
              <button
                onClick={onOpenResume}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white shadow-md transition-colors shrink-0"
              >
                View / Download CV
              </button>
            </div>
          </div>

          {/* Right Column: Pillars of Expertise */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <Target className="w-5 h-5 text-indigo-400" />
              <span>Core Development Strengths</span>
            </h3>

            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-slate-800/80 flex items-start gap-4 transition-all"
                >
                  <div className={`p-3 rounded-xl border ${item.color} shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
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
