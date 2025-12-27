import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const ProjectRow = ({ project }) => {
  return (
    <div className="group relative rounded-2xl bg-slate-900/40 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300">
      
      {/* Card Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* 1. Content Section (Left) */}
        <div className="lg:col-span-7 p-8 flex flex-col justify-center relative z-10 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-cyan-400 font-bold text-xs tracking-widest uppercase">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all">
            {project.title}
          </h3>
          
          <p className="text-slate-400 leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full border border-white/5">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-6 mt-auto">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                Visit Website <ArrowUpRight size={16} />
              </a>
            )}
            <a href={project.githubLink} target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
              View Source Code <Github size={16} />
            </a>
          </div>
        </div>

        {/* 2. Image Section (Right) */}
        <div className="lg:col-span-5 relative min-h-[200px] h-auto bg-[#020617] flex items-center justify-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="relative w-full h-auto object-contain p-2 z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
};

export default ProjectRow;