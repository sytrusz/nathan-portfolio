import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectRow from './components/ProjectRow';
import { Education, Skills, Certifications, Experience } from './components/ResumeSection';
import { projects, profile } from './data/projects';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';
import ContactModal from './components/ContactModal';

import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const [showAllProjects, setShowAllProjects] = useState(false);

  const categories = useMemo(() => {
    const allCats = projects.flatMap(p => p.categories);
    return ['All', ...new Set(allCats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.categories.includes(activeFilter));
  }, [activeFilter]);

  // Handle resetting the show more toggle when filter changes
  const handleFilterChange = (cat) => {
    setActiveFilter(cat);
    setShowAllProjects(false);
  };

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      
      <ScrollProgress />
      <AnimatedBackground />

      <Navbar />

      <main className="max-w-screen-2xl w-full mx-auto px-6 md:px-12 lg:px-24 pb-32 space-y-32">
        
        {/* MAIN PROFILE */}
        <ScrollReveal>
        <Hero onContactClick={() => setIsContactModalOpen(true)} />
        </ScrollReveal>

        {/* 01. EXPERIENCE */}
        <section id="experience" className="scroll-mt-32">
          <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
             <span className="text-amber-400 font-mono text-xl font-bold">01.</span>
             <h2 className="text-3xl font-bold text-white tracking-tight">Experience</h2>
             <div className="h-px bg-slate-800 flex-1 ml-4"></div>
          </div>
          
          <Experience />
          </ScrollReveal>
        </section>

        {/* 02. FEATURED PROJECTS */}
        <section id="projects" className="scroll-mt-32">
          <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="flex items-center gap-4 flex-1">
              <span className="text-cyan-400 font-mono text-xl font-bold">02.</span>
              <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
              <div className="h-px bg-slate-800 flex-1 ml-4 hidden md:block"></div>
            </div>

            {/* Project Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleFilterChange(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                    activeFilter === cat 
                      ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/20' 
                      : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {displayedProjects.map(project => (
              <ProjectRow 
                key={project.id} 
                project={project} 
                isHighlighted={hoveredTech && project.tech.includes(hoveredTech)}
              />
            ))}
          </div>

          {/* Show More / Show Less Toggle */}
          {filteredProjects.length > 3 && (
            <div className="flex justify-center mt-12 pt-8 border-t border-white/5">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="group relative px-8 py-3 bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/10 text-white rounded-full font-bold transition-all overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  {showAllProjects ? "View Less" : `View All ${filteredProjects.length} Projects`}
                </span>
              </button>
            </div>
          )}
          </ScrollReveal>
        </section>

        {/* 03. TECH STACK */}
        <section id="stack" className="scroll-mt-32">
          <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
             <span className="text-purple-400 font-mono text-xl font-bold">03.</span>
             <h2 className="text-3xl font-bold text-white tracking-tight">Tech Stack</h2>
             <div className="h-px bg-slate-800 flex-1 ml-4"></div>
          </div>
          
          <Skills onTechHover={setHoveredTech} activeTech={hoveredTech} />
          </ScrollReveal>
        </section>

        {/* 04. EDUCATION */}
        <section id="education" className="scroll-mt-32">
          <ScrollReveal>
          <div className="flex items-center gap-4 mb-12">
             <span className="text-pink-400 font-mono text-xl font-bold">04.</span>
             <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
             <div className="h-px bg-slate-800 flex-1 ml-4"></div>
          </div>
          
          <div className="flex flex-col gap-8">
            <Education />
            <Certifications />
          </div>
          </ScrollReveal>
        </section>

      </main>

      <footer id="contact" className="border-t border-slate-900 py-12 bg-[#050505] relative z-10">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-400 font-medium">© {new Date().getFullYear()} Nathan Rener Malagapo</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/sytrusz" target="_blank" rel="noreferrer" className="p-2 bg-white/5 text-slate-400 rounded-full hover:bg-white/10 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="p-2 bg-[#0077b5]/10 text-[#0077b5] rounded-full hover:bg-[#0077b5] hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <button onClick={() => setIsContactModalOpen(true)} className="p-2 bg-cyan-500/10 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-black transition-colors cursor-pointer">
              <Mail size={20} />
            </button>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-cyan-400 transition-colors"
          >
            Back to Top <ArrowUp size={16} />
          </button>
        </div>
      </footer>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default App;