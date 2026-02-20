import { useState } from 'react';

interface ProjectData {
  id: string;
  title: string;
  category: string;
  period: string;
  company?: string;
  techStack: string[];
  description: string;
  highlights?: string[];
  bodyHtml: string;
}

interface Props {
  projects: ProjectData[];
}

const categoryLabels: Record<string, string> = {
  all: '전체',
  infra: 'Infrastructure',
  cloud: 'Cloud',
  devops: 'DevOps',
  personal: 'Personal',
};

const categoryOrder = ['all', 'infra', 'cloud', 'devops', 'personal'];

export default function ProjectFilter({ projects }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = categoryOrder.filter(
    (cat) => cat === 'all' || projects.some((p) => p.category === cat)
  );

  const filtered =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-[#0ae8d8]/20 text-[#0ae8d8] border border-[#0ae8d8]/50'
                : 'bg-transparent text-[#8594ab] border border-[#394353] hover:border-[#0ae8d8]/30 hover:text-[#0ae8d8]/80'
            }`}
          >
            {categoryLabels[cat] ?? cat}
            {cat !== 'all' && (
              <span className="ml-1.5 text-xs opacity-60">
                {projects.filter((p) => p.category === cat).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group bg-white/5 dark:bg-[#1e2433]/50 backdrop-blur-sm border border-[#d5dae2] dark:border-[#394353] rounded-xl p-6 transition-all duration-300 hover:border-[#0ae8d8]/50 hover:shadow-lg hover:shadow-[#0ae8d8]/5"
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#0ae8d8]/10 text-[#00a39e] dark:text-[#0ae8d8] border border-[#0ae8d8]/20">
                {categoryLabels[project.category] ?? project.category}
              </span>
              <span className="text-xs text-[#8594ab] font-mono">
                {project.period}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#1e2433] dark:text-white mb-1 group-hover:text-[#0ae8d8] transition-colors">
              {project.title}
            </h3>

            {/* Company */}
            {project.company && (
              <p className="text-sm text-[#00a39e] dark:text-[#0ae8d8]/80 mb-3">
                {project.company}
              </p>
            )}

            {/* Description */}
            <p className="text-sm text-[#667791] dark:text-[#b0b9c9] mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <ul className="text-sm text-[#516078] dark:text-[#b0b9c9] space-y-1.5 mb-4">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0ae8d8] mt-0.5 shrink-0">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#0ae8d8]/5 text-[#00827f] dark:text-[#3ffff5]/70 border border-[#0ae8d8]/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-12 text-[#8594ab]">
          해당 카테고리의 프로젝트가 없습니다.
        </div>
      )}
    </div>
  );
}
