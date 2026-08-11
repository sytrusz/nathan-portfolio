import React, { useState } from 'react';
import { Github, Mail, Linkedin, Copy, Check, Terminal } from 'lucide-react';
import { profile } from '../data/projects';

const Hero = ({ onContactClick }) => {
  return (
    <section 
      id="about" 
      className="relative min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center pt-20 pb-10 gap-10 md:gap-4 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="flex-[1.2] lg:flex-[1.3] w-full flex flex-col justify-center items-start z-10">
        {/* Intro Badge */}
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold mb-8 hover:bg-cyan-500/20 transition-colors cursor-default drop-shadow-md">
          <Terminal size={14} className="animate-pulse" />
          <span>WEB & AI DEVELOPER</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-[4rem] lg:text-[5rem] xl:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.1] whitespace-nowrap">
          <span className="flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl text-slate-300 font-medium tracking-normal mb-2 md:mb-4">
            Hi! I am <span className="inline-block animate-wave origin-bottom-right">👋</span>
          </span>
          NATHAN RENER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white animate-gradient-x py-2 pr-2">
            MALAGAPO
          </span>
        </h1>

        <div className="max-w-2xl">
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 border-l-2 border-slate-700 pl-6 hover:border-purple-500 transition-colors duration-300">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={onContactClick}
              className="group relative px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all overflow-hidden shadow-lg border border-white/5 hover:border-white/20"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <div className="flex items-center gap-3">
                 <Mail size={18} className="text-cyan-400 group-hover:scale-110 transition-transform"/>
                 <span>Send Me an Email</span>
              </div>
            </button>

            <a href={profile.linkedin} target="_blank" className="group px-6 py-3.5 bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 hover:bg-[#0077b5] hover:text-white font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg">
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" /> LinkedIn
            </a>
            
            <a href="https://github.com/sytrusz" target="_blank" className="group px-6 py-3.5 bg-white/5 text-slate-300 border border-white/10 hover:bg-white hover:text-black font-medium rounded-lg transition-all flex items-center gap-2 shadow-lg">
              <Github size={18} className="group-hover:scale-110 transition-transform" /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Floating Code Graphic for Right Side */}
      <div className="hidden lg:flex flex-1 w-full justify-center items-center relative z-10 pt-10">
        <div className="relative w-full max-w-[400px] bg-slate-900/60 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl group hover:border-purple-500/50 transition-colors duration-500 hover:-translate-y-2">
          {/* Mac window dots */}
          <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            <span className="text-slate-600 text-xs font-mono ml-4">developer.js</span>
          </div>
          
          {/* Code block */}
          <div className="space-y-4 font-mono text-[13px] leading-relaxed relative min-h-[200px]">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '200ms' }}>
              <div className="flex items-center gap-2 text-slate-400">
                 <span className="text-purple-400 font-bold">const</span> 
                 <span className="text-white">developer</span> 
                 <span className="text-cyan-400">=</span> 
                 <span className="text-yellow-300">{"{"}</span>
              </div>
            </div>

            <div className="pl-6 flex flex-col gap-2">
               <div className="text-slate-300 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '600ms' }}>
                 <span className="text-cyan-400">name:</span> <span className="text-green-400">'Nathan Rener Malagapo'</span>,
               </div>
               <div className="text-slate-300 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '1000ms' }}>
                 <span className="text-cyan-400">role:</span> <span className="text-green-400">'Web & AI Developer'</span>,
               </div>
               <div className="text-slate-300 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '1400ms' }}>
                 <span className="text-cyan-400">skills:</span> <span className="text-slate-400">['React', 'Python', 'AWS', 'LLMs']</span>,
               </div>
               <div className="text-slate-300 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '1800ms' }}>
                 <span className="text-cyan-400">passionate:</span> <span className="text-purple-400">true</span>
               </div>
            </div>

            <div className="text-yellow-300 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '2200ms' }}>
              {"}"}
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 mt-6 pt-4 border-t border-white/5 animate-in fade-in slide-in-from-bottom-2 duration-500 fill-mode-both" style={{ animationDelay: '2800ms' }}>
               <span className="text-purple-400 font-bold">await</span> 
               <span className="text-white">developer</span>.
               <span className="text-cyan-400">buildFuture()</span>;
               <span className="w-2 h-4 bg-cyan-400 animate-blink inline-block ml-1 relative top-0.5"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;