import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectRow from './components/ProjectRow';
import { Education, Skills, Certifications } from './components/ResumeSection';
import { projects } from './data/projects';

const App = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-slate-200 font-sans selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#050505]">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <Navbar />

      <main className="max-w-6xl mx-auto px-6 pb-32 space-y-32">
        
        {/* MAIN PROFILE */}
        <Hero />

        {/* 01. FEATURED PROJECTS */}
        <section id="projects" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-cyan-400 font-mono text-xl font-bold">01.</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div className="h-px bg-slate-800 flex-1 ml-4"></div>
          </div>

          <div className="flex flex-col gap-10">
            {projects.map(project => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 02. TECH STACK */}
        <section id="stack" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-purple-400 font-mono text-xl font-bold">02.</span>
             <h2 className="text-3xl font-bold text-white tracking-tight">Tech Stack</h2>
             <div className="h-px bg-slate-800 flex-1 ml-4"></div>
          </div>
          
          <Skills />
        </section>

        {/* 03. EDUCATION */}
        <section id="education" className="scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
             <span className="text-pink-400 font-mono text-xl font-bold">03.</span>
             <h2 className="text-3xl font-bold text-white tracking-tight">Education</h2>
             <div className="h-px bg-slate-800 flex-1 ml-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Education />
            <Certifications />
          </div>
        </section>

      </main>

      <footer id="contact" className="border-t border-slate-900 py-12 text-center text-slate-600 text-sm bg-[#050505]">
        <p>© {new Date().getFullYear()} Nathan Rener Malagapo</p>
      </footer>
    </div>
  );
};

export default App;