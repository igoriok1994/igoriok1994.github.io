import React, { useState, useMemo } from 'react';
import type { Project } from '../data/cv';
import { Search, Sparkles, Smartphone, Layers, Server, Calendar, CheckCircle2, ExternalLink } from 'lucide-react';

interface ProjectFilterProps {
  projects: Project[];
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'AI & LLM': <Sparkles className="w-4 h-4 text-amber-500" />,
  'Mobile': <Smartphone className="w-4 h-4 text-sky-500" />,
  'High-Load & Web': <Server className="w-4 h-4 text-emerald-500" />,
  'Enterprise': <Layers className="w-4 h-4 text-indigo-500" />,
};

export default function ProjectFilter({ projects }: ProjectFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map(p => p.category)));
    return ['All', ...cats];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query)) ||
        project.bullets.some(b => b.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between bg-white dark:bg-slate-900/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map(category => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700/80'
                }`}
              >
                {category !== 'All' && CATEGORY_ICONS[category]}
                <span>{category}</span>
                <span className={`ml-1 text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-200/80 dark:bg-slate-700 text-slate-500 dark:text-slate-400'
                }`}>
                  {category === 'All'
                    ? projects.length
                    : projects.filter(p => p.category === category).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tech, title, keyword..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* Projects List */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900/60 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
          <p className="text-slate-500 dark:text-slate-400 text-sm">No projects match the current filter or search criteria.</p>
          <button
            type="button"
            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
            className="mt-3 text-xs text-indigo-600 dark:text-indigo-400 font-semibold hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="glow-card bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 md:p-8 space-y-4 shadow-xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900/50">
                    {CATEGORY_ICONS[project.category] || <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      {project.category}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors inline-flex items-center gap-1.5 group"
                        >
                          <span>{project.title}</span>
                          <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                        </a>
                      ) : (
                        <span>{project.title}</span>
                      )}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 self-start sm:self-auto">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-800/60 transition-colors"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/70 px-3 py-1 rounded-full font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Bullets */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Key Deliverables & Responsibilities:
                </div>
                <ul className="space-y-2">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-block px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-700/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
