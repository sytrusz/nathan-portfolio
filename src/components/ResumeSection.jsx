import React from 'react';
import { education, skills, experience } from '../data/projects';
import { GraduationCap, ShieldCheck, Code2, Cpu, Users, Briefcase, BrainCircuit, Cloud, MapPin, Calendar, ChevronRight } from 'lucide-react';

export const Education = () => (
  <section className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/40 transition-colors h-full">
    <div className="flex items-center gap-3 mb-6">
      <GraduationCap size={24} className="text-purple-400" />
      <h3 className="font-bold text-white text-xl">Education</h3>
    </div>

    <div className="space-y-8">
      {education.map((edu, idx) => (
        <div key={idx} className="relative border-l-2 border-slate-700 pl-6 pb-2">
           <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-purple-500"></div>
           <h4 className="text-white font-bold text-lg">{edu.school}</h4>
           <p className="text-slate-400 text-sm mb-1">{edu.degree}</p>
           <span className="text-slate-500 text-xs font-mono block mb-4">{edu.year}</span>

           {edu.roles && (
             <div className="mt-3 pt-3 border-t border-white/5">
               {edu.roles.map((role, i) => (
                 <p key={i} className="text-slate-300 text-sm font-medium flex items-start gap-2">
                   <span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 shrink-0"></span>
                   {role}
                 </p>
               ))}
             </div>
           )}
        </div>
      ))}
    </div>
  </section>
);

export const Experience = () => {
  return (
    <div className="flex flex-col gap-10">
      {experience.map((exp, idx) => (
        <div 
          key={idx} 
          className="group relative rounded-2xl bg-slate-900/40 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 p-8 md:p-10"
        >
          {/* Card Glow Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <div className="relative z-10 flex flex-col">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8 pb-6 border-b border-white/5">
              <div>
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {exp.role}
                </h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-slate-300 font-medium">
                  <span className="text-lg">{exp.company}</span>
                  <span className="text-slate-600 hidden sm:block">•</span>
                  <div className="flex items-center gap-1.5 text-sm text-slate-400">
                    <MapPin size={14} />
                    {exp.location.split(',')[exp.location.split(',').length - 2]?.trim() || exp.location}
                  </div>
                  <span className="text-slate-600 hidden sm:block">•</span>
                  <span className="text-sm text-amber-400/80 font-bold tracking-wide">{exp.workType}</span>
                </div>
              </div>
              
              <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-slate-300 uppercase tracking-widest">
                  <Calendar size={12} className="text-amber-500" />
                  {exp.period}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.types?.map((type, i) => (
                    <span key={i} className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] font-bold text-amber-500 uppercase tracking-widest shadow-sm">
                      {type}
                    </span>
                  ))}
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {exp.months} mos
                  </span>
                </div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="space-y-4 mb-8 md:pl-2">
              {exp.achievements.map((achievement, i) => (
                <div key={i} className="flex gap-4 text-slate-300 text-sm leading-relaxed">
                  <span className="text-amber-500/50 mt-1.5 shrink-0 text-xs">▹</span>
                  <p>{achievement}</p>
                </div>
              ))}
            </div>

            {/* Footer Section */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {exp.tech.map((t, i) => (
                <span key={i} className="px-3 py-1.5 text-[11px] font-bold text-slate-400 bg-[#020617] rounded-lg border border-white/5 hover:border-amber-500/30 transition-colors">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Certifications = () => (
  <section className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/40 transition-colors h-full">
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

export const Skills = ({ onTechHover, activeTech }) => {
  const categories = {
    languages: {
      label: "Languages & Core",
      icon: <Code2 size={24} className="text-blue-400" />
    },
    frameworks: {
      label: "Frameworks",
      icon: <Cpu size={24} className="text-pink-400" />
    },
    ai_ml: {
      label: "AI / ML & Data",
      icon: <BrainCircuit size={24} className="text-purple-400" />
    },
    cloud_devops: {
      label: "Cloud & Tools",
      icon: <Cloud size={24} className="text-cyan-400" />
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(categories).map(([key, config]) => (
        <div key={key} className="bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-1 duration-300">
          <h4 className="text-white capitalize font-bold mb-6 flex items-center gap-3">
            {config.icon}
            {config.label}
          </h4>
          <div className="flex flex-wrap gap-2">
            {(skills[key] || []).map((skill) => {
              const isActive = activeTech === skill;
              return (
                <span 
                  key={skill} 
                  onMouseEnter={() => onTechHover(skill)}
                  onMouseLeave={() => onTechHover(null)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all cursor-default border ${
                    isActive 
                      ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.15)] scale-105" 
                      : "bg-white/5 text-slate-300 border-transparent hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {skill}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};