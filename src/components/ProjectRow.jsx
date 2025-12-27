import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const ProjectRow = ({ project }) => {
  return (
    <div className="group relative bg-gray-900/40 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300">
      <div className="flex flex-col md:flex-row">
        
        {/* Left: Image Section */}
        <div className="w-full md:w-[50%] relative border-b md:border-b-0 md:border-r border-gray-800 shrink-0 overflow-hidden">
          
          <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto block object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Content Section */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-gradient-to-br from-transparent to-gray-900/50">
          <div className="flex justify-between items-start mb-4">
            <div>
              <span className="text-blue-400 text-xs font-bold tracking-wider uppercase mb-1 block">
                {project.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
            </div>
            
            <div className="flex gap-3">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={20} />
                </a>
              )}
              <a href={project.githubLink} target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium text-gray-300 bg-gray-800 rounded-full border border-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;