import React from 'react';
import { Github, Code2, Terminal, Database } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:shadow-xl hover:border-blue-500 transition-all duration-300 group flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-gray-900 rounded-md group-hover:bg-blue-900/30 transition-colors">
          {project.category.includes("AI") ? <Database size={20} className="text-blue-400"/> : 
           project.category.includes("Software") ? <Terminal size={20} className="text-green-400"/> :
           <Code2 size={20} className="text-purple-400"/>}
        </div>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <Github size={20} />
        </a>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((t, i) => (
          <span key={i} className="px-2 py-1 text-xs font-medium text-blue-300 bg-blue-900/20 rounded border border-blue-900/50">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;