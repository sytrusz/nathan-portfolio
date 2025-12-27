import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectRow from './components/ProjectRow';
import { Education, Skills, Certifications } from './components/ResumeSection';
import { projects } from './data/projects';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 font-sans selection:bg-blue-500 selection:text-white relative">
      
      <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950">
        {/* 1. The Grid Pattern */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        
        {/* 2. The Top Spotlight (Blue/Purple Gradient) */}
        <div className="absolute top-[-20%] left-0 right-0 h-[500px] w-full bg-[radial-gradient(circle_farthest-side,rgba(37,99,235,0.15),rgba(255,255,255,0))]"></div>
        <div className="absolute top-[-10%] left-0 right-0 h-[500px] w-full bg-[radial-gradient(circle_farthest-side,rgba(168,85,247,0.15),rgba(255,255,255,0))] mix-blend-screen"></div>
      </div>

      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-28 pb-20 space-y-20">
        
        {/* 1. HERO & INTRO */}
        <Hero />

        {/* 2. FEATURED PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">Selected Works</h2>
            <div className="h-px bg-gradient-to-r from-gray-800 to-transparent flex-1"></div>
          </div>

          <div className="flex flex-col gap-8">
            {projects.map(project => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* 3. RESUME SECTION */}
        <section id="tech" className="scroll-mt-24">
        <div className="flex flex-col gap-8">
          
          {/* Row 1: Skills */}
          <Skills />
          
          {/* Row 2: Education & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Education />
            <Certifications />
          </div>

        </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t border-gray-800/50 py-8 text-center text-gray-500 text-sm bg-slate-950/80 backdrop-blur-sm scroll-mt-20">
        <p>© {new Date().getFullYear()} Nathan Rener Malagapo</p>
      </footer>
    </div>
  );
};

export default App;