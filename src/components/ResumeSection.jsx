import React from 'react';
import { education, skills } from '../data/projects';
import { GraduationCap, ShieldCheck, Code2, Cpu, Users } from 'lucide-react';

export const Education = () => (
  <section className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/40 transition-colors">
    <div className="flex items-center gap-3 mb-6">
      <GraduationCap size={24} className="text-purple-400" />
      <h3 className="font-bold text-white text-xl">Education</h3>
    </div>

    <div className="space-y-6">
      {education.map((edu, idx) => (
        <div key={idx} className="border-l-2 border-slate-700 pl-6 relative">
           <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-purple-500"></div>
           <h4 className="text-white font-bold text-lg">{edu.school}</h4>
           <p className="text-slate-400 text-sm mb-1">{edu.degree}</p>
           <span className="text-slate-500 text-xs font-mono">{edu.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export const Certifications = () => (
  <section className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/40 transition-colors">
    <div className="flex items-center gap-3 mb-6">
      <ShieldCheck size={24} className="text-cyan-400" />
      <h3 className="font-bold text-white text-xl">Certifications</h3>
    </div>

    <div className="space-y-4">
      {education.flatMap(edu => edu.certifications || []).map((cert, i) => (
        <div key={i} className="flex justify-between items-start p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-cyan-500/20">
          <div>
            <h5 className="text-slate-200 font-bold text-sm">
              {cert.name}
            </h5>
            <p className="text-slate-500 text-xs mt-1">{cert.issuer}</p>
          </div>
          <span className="text-cyan-400 text-xs font-mono font-bold">{cert.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export const Skills = () => {
  const icons = {
    languages: <Code2 size={24} className="text-blue-400" />,
    frameworks: <Cpu size={24} className="text-pink-400" />,
    soft: <Users size={24} className="text-yellow-400" />
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
          <h4 className="text-white capitalize font-bold mb-6 flex items-center gap-3">
            {icons[category]}
            {category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span 
                key={skill} 
                className="px-3 py-1.5 bg-white/5 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/10 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};