import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  Phone, 
  Terminal, 
  CheckCircle, 
  Sparkles, 
  Database, 
  Server, 
  Code2, 
  Layers,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume, onShowToast }) {
  const { personal } = portfolioData;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.contact.email);
    onShowToast(`Copied ${personal.contact.email} to clipboard!`);
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-600/15 via-indigo-600/20 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-500/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-sky-500/30 text-sky-300 text-xs font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personal.statusBadge}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-slate-400 font-mono text-sm tracking-wide">
                <span>Hello, I'm</span>
                <span className="h-px w-8 bg-sky-500/60 inline-block"></span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                <span className="text-gradient-primary">Megha Rajan</span>
              </h1>
              
              <p className="text-lg sm:text-xl font-semibold text-sky-200/90 flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Full Stack Web & Software Developer</span>
              </p>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed">
              B.Tech in Computer Science & Engineering graduate specializing in{' '}
              <span className="text-sky-300 font-medium">Java</span>,{' '}
              <span className="text-indigo-300 font-medium">Spring Boot</span>,{' '}
              <span className="text-purple-300 font-medium">Python & Django</span>,{' '}
              <span className="text-cyan-300 font-medium">React.js</span>, and{' '}
              <span className="text-emerald-300 font-medium">SQL database optimization</span>.
              Experienced through software engineering internship at <span className="text-white font-medium">Elevate Labs</span> and intensive full stack training at <span className="text-white font-medium">KodNest</span>.
            </p>

            {/* Fast Stats / Credentials Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-900/60 border border-slate-800/80 backdrop-blur-sm">
                <GraduationCap className="w-5 h-5 text-sky-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs text-slate-400">Education</div>
                  <div className="text-xs font-semibold text-slate-200">B.Tech CSE '25</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-900/60 border border-slate-800/80 backdrop-blur-sm">
                <Briefcase className="w-5 h-5 text-indigo-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs text-slate-400">Internship</div>
                  <div className="text-xs font-semibold text-slate-200">Elevate Labs</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-navy-900/60 border border-slate-800/80 backdrop-blur-sm col-span-2 sm:col-span-1">
                <Database className="w-5 h-5 text-purple-400 shrink-0" />
                <div className="text-left">
                  <div className="text-xs text-slate-400">Training</div>
                  <div className="text-xs font-semibold text-slate-200">KodNest Certified</div>
                </div>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-purple-600 hover:from-sky-400 hover:via-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-navy-900/80 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 hover:text-white transition-all duration-200"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-sky-400" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-sky-300 hover:text-white bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 hover:border-sky-400/50 transition-all duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                Kerala, India
              </span>
              <span className="text-slate-600">•</span>
              <button 
                onClick={handleCopyEmail}
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>{personal.contact.email}</span>
              </button>
              <span className="text-slate-600">•</span>
              <a 
                href={`tel:${personal.contact.phone}`} 
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personal.contact.formattedPhone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Developer Profile / Code Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-sky-500/30 via-indigo-500/20 to-purple-500/30 blur-lg opacity-70"></div>
              
              {/* Terminal Card */}
              <div className="relative rounded-2xl bg-navy-900/95 border border-indigo-500/30 shadow-2xl backdrop-blur-xl overflow-hidden font-mono text-xs">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-navy-950/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-[11px] text-slate-400 ml-2">megha_developer.json</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[10px]">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>bash</span>
                  </div>
                </div>

                {/* Terminal Code Body */}
                <div className="p-5 text-slate-300 space-y-2.5 leading-relaxed overflow-x-auto">
                  <div className="text-slate-500">// Candidate Profile & Core Competencies</div>
                  <div>
                    <span className="text-indigo-400">const</span>{' '}
                    <span className="text-sky-300">developer</span>{' '}
                    <span className="text-slate-400">=</span> {'{'}
                  </div>

                  <div className="pl-4 space-y-1">
                    <div>
                      <span className="text-purple-300">name</span>: <span className="text-emerald-300">"Megha Rajan"</span>,
                    </div>
                    <div>
                      <span className="text-purple-300">degree</span>: <span className="text-emerald-300">"B.Tech CSE (2021-2025)"</span>,
                    </div>
                    <div>
                      <span className="text-purple-300">cgpa</span>: <span className="text-amber-300">7.09</span>,
                    </div>
                    <div>
                      <span className="text-purple-300">internship</span>: <span className="text-emerald-300">"Elevate Labs (Java & Web Dev)"</span>,
                    </div>
                    <div>
                      <span className="text-purple-300">training</span>: <span className="text-emerald-300">"KodNest Full Stack Program"</span>,
                    </div>
                    
                    <div className="pt-1">
                      <span className="text-purple-300">primaryStack</span>: [
                      <div className="pl-4 text-sky-300">
                        <span className="text-emerald-300">"Java"</span>,{' '}
                        <span className="text-emerald-300">"Spring Boot"</span>,{' '}
                        <span className="text-emerald-300">"React.js"</span>,{' '}
                        <span className="text-emerald-300">"Python"</span>,{' '}
                        <span className="text-emerald-300">"Django"</span>,{' '}
                        <span className="text-emerald-300">"MySQL"</span>
                      </div>
                      ],
                    </div>

                    <div>
                      <span className="text-purple-300">featuredProjects</span>: [
                      <div className="pl-4 text-slate-300">
                        <span className="text-sky-300">"Sales Savvy"</span> <span className="text-slate-500">// Spring Boot + React + Cart/Orders</span>,
                        <br />
                        <span className="text-sky-300">"MealPro"</span> <span className="text-slate-500">// Django + SQL Tuning & Indexing</span>
                      </div>
                      ],
                    </div>

                    <div>
                      <span className="text-purple-300">status</span>: <span className="text-emerald-400 font-semibold">"Ready for Impact"</span>
                    </div>
                  </div>

                  <div>{'}'};</div>

                  {/* Terminal Interactive Action */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">megha@github:~$ status</span>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 text-[11px] bg-slate-800 hover:bg-slate-700 text-sky-300 rounded border border-slate-700 transition-colors flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-sky-400" />
                      <span>Copy Email</span>
                    </button>
                  </div>
                </div>

              </div>

              {/* Floating badges on corner */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-navy-950/90 border border-emerald-500/30 shadow-lg backdrop-blur-md">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-semibold text-slate-200">REST APIs & SQL Tuning</span>
              </div>

              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-950/90 border border-purple-500/30 shadow-lg backdrop-blur-md">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span className="text-xs font-medium text-slate-300">Spring Boot & React</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
