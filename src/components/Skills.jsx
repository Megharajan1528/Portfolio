import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  Layers, 
  Database, 
  Cpu, 
  Wrench, 
  Search, 
  Sparkles,
  CheckCircle,
  Terminal,
  Server,
  Cloud
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layers: Layers,
  Database: Database,
  Cpu: Cpu,
  Wrench: Wrench
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { categories } = portfolioData.skills;

  // Flatten all items for search & filtering
  const filteredCategories = useMemo(() => {
    return categories
      .map((cat) => {
        if (selectedCategory !== 'all' && cat.id !== selectedCategory) {
          return null;
        }

        const filteredItems = cat.items.filter((item) => {
          if (!searchQuery.trim()) return true;
          const query = searchQuery.toLowerCase();
          return (
            item.name.toLowerCase().includes(query) ||
            item.highlight.toLowerCase().includes(query) ||
            item.level.toLowerCase().includes(query) ||
            cat.name.toLowerCase().includes(query)
          );
        });

        if (filteredItems.length === 0) return null;

        return {
          ...cat,
          items: filteredItems
        };
      })
      .filter(Boolean);
  }, [categories, selectedCategory, searchQuery]);

  const totalSkillsCount = categories.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Categorized <span className="text-gradient-primary">Technical Skills</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Strictly curated from verified academic coursework, industrial training at KodNest, and hands-on internship experience at Elevate Labs.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-navy-950/80 border border-slate-800 overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-xl whitespace-nowrap transition-all ${
                selectedCategory === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              All Skills ({totalSkillsCount})
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Real-time Search */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search (e.g. Spring, SQL, React)..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-navy-950/80 border border-slate-800 focus:border-sky-500 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-slate-300"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Categories & Skills Grid */}
        <div className="space-y-10">
          {filteredCategories.length === 0 ? (
            <div className="glass-card rounded-2xl p-12 text-center max-w-md mx-auto">
              <p className="text-slate-400 text-sm">No skills found matching "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs text-sky-400 hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((cat) => {
              const Icon = iconMap[cat.icon] || Cpu;
              return (
                <div key={cat.id} className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white">{cat.name}</h3>
                        <p className="text-xs text-slate-400 hidden sm:block">{cat.description}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {cat.items.length} {cat.items.length === 1 ? 'skill' : 'skills'}
                    </span>
                  </div>

                  {/* Skills Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {cat.items.map((skill, sIdx) => {
                      const isAdvanced = skill.level === 'Advanced';
                      const isProficient = skill.level === 'Proficient';

                      return (
                        <div
                          key={sIdx}
                          className="glass-card glass-card-hover rounded-xl p-4 flex flex-col justify-between border border-slate-800/80 hover:border-indigo-500/40 group relative overflow-hidden"
                        >
                          {/* Accent Top Border */}
                          <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                            isAdvanced ? 'bg-gradient-to-r from-sky-400 to-indigo-500' :
                            isProficient ? 'bg-gradient-to-r from-indigo-500 to-purple-500' :
                            'bg-slate-700'
                          }`} />

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                                {skill.name}
                              </h4>
                              <span
                                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                                  isAdvanced
                                    ? 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                                    : isProficient
                                    ? 'bg-purple-500/10 text-purple-300 border-purple-500/30'
                                    : 'bg-slate-800 text-slate-300 border-slate-700'
                                }`}
                              >
                                {skill.level}
                              </span>
                            </div>

                            <p className="text-xs text-slate-400 leading-snug">
                              {skill.highlight}
                            </p>
                          </div>

                          {/* Skill Level Progress Bar */}
                          <div className="pt-3 mt-2 border-t border-slate-800/60">
                            <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  isAdvanced
                                    ? 'w-[90%] bg-gradient-to-r from-sky-400 to-indigo-500'
                                    : isProficient
                                    ? 'w-[75%] bg-gradient-to-r from-indigo-500 to-purple-500'
                                    : 'w-[60%] bg-slate-500'
                                }`}
                              />
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
}
