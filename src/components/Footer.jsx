import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  Heart,
  Code2,
  ShieldCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden text-slate-400">
      
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
                <span className="font-mono text-sm font-extrabold">MR</span>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                {personal.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Full Stack Web & Software Developer specializing in Java, Spring Boot, Python, Django, React.js, and SQL database tuning.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personal.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-slate-700 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.contact.email}`}
                aria-label="Email"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-300 hover:border-slate-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${personal.contact.phone}`}
                aria-label="Phone"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-sky-300 transition-colors">About Background</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-sky-300 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-sky-300 transition-colors">Featured Projects (Sales Savvy & MealPro)</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-sky-300 transition-colors">Elevate Labs & KodNest Training</a>
              </li>
              <li>
                <a href="#education" className="hover:text-sky-300 transition-colors">Education (B.Tech CSE)</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-300 transition-colors">Contact & Channels</a>
              </li>
            </ul>
          </div>

          {/* Verification & Resume */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Verified Candidate Records
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              All listed qualifications, CGPA (7.09), percentage (90.6%), internship, and project descriptions adhere strictly to the candidate's verified documentation.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 border border-slate-700 text-sky-300 transition-colors"
              >
                <span>Open Printable Resume Sheet</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Megha Rajan. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-[11px] font-mono">
            <span>Built with React + Vite + Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 p-2 rounded-lg bg-navy-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
