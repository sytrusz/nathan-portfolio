import React from 'react';
import { education, skills } from '../data/projects';
import { GraduationCap, ShieldCheck, Code2, Wrench, Users } from 'lucide-react';

// --- COMPONENT 1: EDUCATION ---
export const Education = () => (
  <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm flex flex-col h-full hover:border-gray-700 transition-colors">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
        <GraduationCap size={20} />
      </div>
      <h3 className="font-bold text-white text-lg">Education</h3>
    </div>

    <div className="space-y-8 relative flex-1">
      {/* Vertical Line */}
      <div className="absolute left-2.5 top-3 bottom-3 w-px bg-gray-800"></div>

      {education.map((edu, idx) => (
        <div key={idx} className="relative pl-10">
          {/* Timeline Dot */}
          <div className="absolute left-0.5 top-1.5 w-4 h-4 bg-gray-900 border-2 border-purple-500 rounded-full z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
          
          <div className="flex flex-col gap-1">
            <h4 className="text-white font-bold text-lg leading-tight">{edu.school}</h4>
            <p className="text-purple-400 font-medium text-sm">{edu.degree}</p>
            <span className="text-gray-500 text-xs font-mono mt-1 bg-gray-800/50 self-start px-2 py-1 rounded border border-gray-700/50">
              {edu.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- COMPONENT 2: CERTIFICATIONS ---
export const Certifications = () => (
  <section className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm h-full hover:border-gray-700 transition-colors">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
        <ShieldCheck size={20} />
      </div>
      <h3 className="font-bold text-white text-lg">Certifications</h3>
    </div>

    <div className="space-y-4">
      {education.flatMap(edu => edu.certifications || []).map((cert, i) => (
        <div key={i} className="bg-gray-800/30 rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-colors group">
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-gray-200 text-sm font-bold group-hover:text-white transition-colors">
                {cert.name}
              </h5>
              <p className="text-gray-500 text-xs mt-1">{cert.issuer}</p>
            </div>
            <span className="text-gray-600 text-xs font-mono bg-gray-900 px-2 py-1 rounded border border-gray-800">
              {cert.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- COMPONENT 3: SKILLS ---
export const Skills = () => {
  const icons = {
    languages: <Code2 size={20} className="text-blue-400" />,
    frameworks: <Wrench size={20} className="text-green-400" />,
    soft: <Users size={20} className="text-pink-400" />
  };

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white">Tech Stack and Skills</h2>
        <div className="h-px bg-gray-800 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gray-900/40 border border-gray-800 rounded-xl p-5 hover:border-gray-700 transition-colors h-full">
            <h4 className="text-gray-200 capitalize font-semibold mb-4 flex items-center gap-3">
              {icons[category] || <Code2 size={20}/>}
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 bg-gray-800 hover:bg-gray-750 text-gray-300 text-sm rounded-lg border border-gray-700/50 transition-all cursor-default select-none hover:text-white hover:border-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};