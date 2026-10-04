import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Award,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const { personal, education, experience, skills, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const resumeText = `
============================================================
                     MEGHA RAJAN
============================================================
Role: Full Stack Web & Software Developer
Email: ${personal.contact.email}
Phone: ${personal.contact.formattedPhone}
LinkedIn: ${personal.contact.linkedin}
GitHub: ${personal.contact.github}
Location: ${personal.contact.location}

------------------------------------------------------------
PROFESSIONAL SUMMARY
------------------------------------------------------------
${personal.bio}

------------------------------------------------------------
EDUCATION
------------------------------------------------------------
* ${education[0].degree}
  Institution: ${education[0].institution}
  Duration: ${education[0].period} | Result: ${education[0].score}
  Key Coursework: ${education[0].highlights.join(', ')}

* ${education[1].degree}
  Institution: ${education[1].institution}
  Duration: ${education[1].period} | Result: ${education[1].score}

------------------------------------------------------------
TECHNICAL SKILLS
------------------------------------------------------------
* Languages: Java, Python, JavaScript, SQL
* Frameworks: Spring Boot, Django, React.js, Node.js, Express.js
* Databases: MySQL, PostgreSQL, Oracle, MongoDB
* Core Engineering: REST APIs, OOP, DSA, Debugging, Manual Testing, SDLC
* Tools & Platforms: Git, GitHub, Linux, Windows, AWS Fundamentals

------------------------------------------------------------
PROFESSIONAL EXPERIENCE & TRAINING
------------------------------------------------------------
* ${experience[0].role}
  Company: ${experience[0].organization} (${experience[0].period})
  - Developed and maintained modular software components using Java and web tech.
  - Tested, debugged, and integrated frontend components with backend services.
  - Followed agile SDLC and Git version control practices.

* ${experience[1].role}
  Organization: ${experience[1].organization}, ${experience[1].location} (${experience[1].period})
  - Enterprise Full Stack development covering Java, Spring Boot, React, and SQL.
  - In-depth training on DSA, OOP, REST APIs, schema design, and manual testing.

------------------------------------------------------------
KEY PROJECTS
------------------------------------------------------------
1. Sales Savvy
   Tech: Java, Spring Boot, React, MySQL, REST APIs
   Scope: Products catalog, shopping cart pipeline, order processing workflows.
   Highlights: Frontend/backend API integration and SQL query optimization.

2. MealPro
   Tech: Python, Django, MySQL
   Scope: Dietary planning and recipe management platform.
   Highlights: Backend logic, database SQL tuning, index strategy, and data-access debugging.
============================================================
    `.trim();

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Megha_Rajan_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    onShowToast('Downloaded Megha_Rajan_Resume.txt');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-navy-950 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar (Hidden when printing) */}
        <div className="no-print flex items-center justify-between px-6 py-4 bg-navy-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <h3 className="text-sm font-bold text-white font-mono">Megha_Rajan_Resume.pdf</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={handleDownloadTxt}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              title="Download Plaintext Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .txt</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Document Sheet */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-navy-950 text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-black/20 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
                Megha Rajan
              </h1>
              <span className="text-sm font-semibold text-sky-400 print:text-blue-700">
                Full Stack Web & Software Developer
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400 print:text-gray-700 font-mono">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                {personal.contact.formattedPhone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 print:text-black" />
                {personal.contact.email}
              </span>
              <span className="flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                linkedin.com/in/megharajan15
              </span>
              <span className="flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-purple-400 print:text-black" />
                github.com/Megharajan1528
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-blue-800">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              {personal.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-blue-800">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 print:text-gray-800">
              <div>
                <strong className="text-white print:text-black">Languages:</strong> Java, Python, JavaScript, SQL
              </div>
              <div>
                <strong className="text-white print:text-black">Frameworks:</strong> Spring Boot, Django, React.js, Node.js, Express.js
              </div>
              <div>
                <strong className="text-white print:text-black">Databases:</strong> MySQL, PostgreSQL, Oracle, MongoDB
              </div>
              <div>
                <strong className="text-white print:text-black">Core Concepts:</strong> REST APIs, OOP, DSA, Debugging, Manual Testing, SDLC
              </div>
              <div className="sm:col-span-2">
                <strong className="text-white print:text-black">Tools & Platforms:</strong> Git, GitHub, Linux, Windows, AWS Fundamentals
              </div>
            </div>
          </div>

          {/* Professional Experience & Training */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-blue-800">
              Experience & Professional Training
            </h2>

            {/* Elevate Labs */}
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-white print:text-black">
                  Java Developer Intern & Web Development Intern — <span className="text-sky-300 print:text-blue-700">Elevate Labs</span>
                </span>
                <span className="text-xs font-mono text-slate-400 print:text-gray-600">Nov 2025 – Dec 2025</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-gray-800 space-y-1 pl-1">
                <li>Developed and tested modular application features utilizing Java and modern web development standards.</li>
                <li>Collaborated within cross-functional teams adhering to structured SDLC and agile development cycles.</li>
                <li>Conducted module testing, debugging, and API integration for web modules.</li>
              </ul>
            </div>

            {/* KodNest */}
            <div className="space-y-1.5 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-white print:text-black">
                  Certified Full Stack Development Program — <span className="text-sky-300 print:text-blue-700">KodNest Technologies, Bengaluru</span>
                </span>
                <span className="text-xs font-mono text-slate-400 print:text-gray-600">Jun 2025 – Feb 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-300 print:text-gray-800 space-y-1 pl-1">
                <li>Intensive corporate-level software development program specializing in Java, Spring Boot, React.js, and SQL.</li>
                <li>Comprehensive implementation of REST APIs, database normalization, query tuning, and index optimization.</li>
                <li>Algorithmic problem solving with Data Structures & Algorithms, OOP principles, and manual testing suites.</li>
              </ul>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-blue-800">
              Featured Projects
            </h2>

            {/* Sales Savvy */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-white print:text-black">
                  Sales Savvy — <span className="text-slate-400 font-mono text-xs">Java, Spring Boot, React, MySQL, REST APIs</span>
                </span>
              </div>
              <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                Engineered full-stack e-commerce architecture including product catalogs, persistent shopping cart management, and order checkout flows. Executed end-to-end frontend/backend API integration and optimized SQL relational queries.
              </p>
            </div>

            {/* MealPro */}
            <div className="space-y-1 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-white print:text-black">
                  MealPro — <span className="text-slate-400 font-mono text-xs">Python, Django, MySQL</span>
                </span>
              </div>
              <p className="text-xs text-slate-300 print:text-gray-800 leading-relaxed">
                Constructed dietary planning and recipe platform in Python/Django. Implemented backend architecture, performed database SQL query tuning, configured index strategies for high-frequency attributes, and carried out data-access debugging.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 print:text-blue-800">
              Education
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
              <div>
                <strong className="text-white print:text-black">B.Tech in Computer Science and Engineering</strong>
                <div className="text-xs text-slate-400 print:text-gray-600">College of Engineering Trikaripur</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400 print:text-black">CGPA: 7.09</span>
                <span className="text-xs text-slate-400 block">2021 – 2025</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm pt-2">
              <div>
                <strong className="text-white print:text-black">Higher Secondary Education</strong>
                <div className="text-xs text-slate-400 print:text-gray-600">Durga Higher Secondary School</div>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400 print:text-black">Score: 90.6%</span>
                <span className="text-xs text-slate-400 block">2019 – 2021</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
