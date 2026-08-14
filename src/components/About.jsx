import React from 'react';
import { Github, Mail, Linkedin, Terminal, Sparkles } from 'lucide-react';
import { profile } from '../data/projects';

const About = ({ onContactClick }) => {
  return (
    <section id="about" className="scroll-mt-32 py-16 lg:py-24">
      <div className="flex items-center gap-4 mb-24 lg:mb-32">
        <span className="text-green-400 font-mono text-xl font-bold">00.</span>
        <h2 className="text-3xl font-bold text-white tracking-tight">About Me</h2>
        <div className="h-px bg-slate-800 flex-1 ml-4 hidden md:block"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 lg:gap-12">
        
        {/* Left Side: Perfectly Balanced Text Content */}
        <div className="flex-[1.4] w-full flex flex-col justify-center items-start">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Hi! I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Nathan</span> <span className="inline-block animate-wave origin-bottom-right">👋</span>
          </h3>
          
          <div className="mb-14 max-w-2xl">
            {/* Professional Summary */}
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10">
              Web and AI Developer with experience in building scalable web applications. Skilled in integrating artificial intelligence, such as RAG pipelines, into practical software solutions.
            </p>
            
            {/* Personal/Hobbies Box */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/40 border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/50"></div>
              <div className="text-xl opacity-80 group-hover:opacity-100 transition-opacity mt-0.5">🎸</div>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-300 font-medium block mb-1">Off-screen</strong> 
                When I'm not coding, I'm usually playing the guitar and piano, playing video games, or working on DIY tech repairs. I just love taking things apart to see how they work.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 w-full">
            <button 
              onClick={onContactClick}
              className="group px-6 py-3 bg-white text-slate-950 font-bold rounded-lg transition-all shadow-lg hover:bg-cyan-400 hover:text-slate-950 flex items-center gap-2"
            >
               <Mail size={18} />
               <span>Contact Me</span>
            </button>

            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group px-6 py-3 bg-slate-800 text-slate-300 border border-white/10 hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" /> LinkedIn
            </a>
            
            <a href="https://github.com/sytrusz" target="_blank" rel="noreferrer" className="group px-6 py-3 bg-slate-800 text-slate-300 border border-white/10 hover:bg-white hover:border-white hover:text-slate-950 font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg">
              <Github size={18} className="group-hover:scale-110 transition-transform" /> GitHub
            </a>
          </div>
        </div>

        {/* Right Side: Profile Picture */}
        <div className="hidden lg:flex flex-1 w-full justify-center items-center relative z-10 pt-4">
          <div className="relative w-full max-w-[260px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
             {/* Decorative glowing background elements behind image */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent z-10"></div>
             
             <img 
               src="/images/profile/grad-pic.jpg" 
               alt="Nathan's Graduation" 
               className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             
             {/* Overlay subtle glow on hover */}
             <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
