import React, { useState } from 'react';
import { Terminal, ChevronDown, ArrowRight, Mail } from 'lucide-react';

const Hero = ({ onContactClick }) => {
  const [activeTab, setActiveTab] = useState('developer.js');

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col lg:flex-row justify-center lg:justify-between items-center pt-20 pb-10 gap-10 lg:gap-4"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="flex-[1.2] lg:flex-[1.3] w-full flex flex-col justify-center items-start z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold mb-8 hover:bg-cyan-500/20 transition-colors cursor-default drop-shadow-md">
          <Terminal size={14} className="animate-pulse" />
          <span>WEB & AI DEVELOPER</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] font-black text-white tracking-tighter mb-10 leading-tight group relative">
          {/* Subtle text glow effect on hover */}
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"></div>
          NATHAN RENER <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white animate-gradient-x relative inline-block">
            MALAGAPO
            {/* Small decorative dot */}
            <span className="absolute -bottom-2 -right-6 w-3 h-3 bg-cyan-400 rounded-full hidden md:block shadow-[0_0_15px_rgba(34,211,238,0.8)]"></span>
          </span>
        </h1>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          {/* Minimalist Command Bar */}
          <div className="w-full max-w-sm lg:max-w-md bg-slate-900/60 border border-white/10 rounded-2xl p-2 pl-6 flex items-center justify-between shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl group hover:border-cyan-500/30 transition-all duration-500">
            <div className="flex items-center gap-4 text-slate-300 font-mono text-sm md:text-base">
              <span className="text-purple-400 font-bold hidden sm:inline">~</span>
              <span className="text-cyan-400 font-bold">❯</span>
              <div className="flex items-center">
                <span className="text-white">npx view-portfolio</span>
                <span className="w-2.5 h-5 bg-cyan-400 animate-blink ml-1.5 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
              </div>
            </div>
            
            <a href="#projects" className="flex items-center gap-2 px-6 py-2.5 bg-white text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-all duration-300 shrink-0">
              Enter
              <ArrowRight size={16} />
            </a>
          </div>

          <button onClick={onContactClick} className="w-full sm:w-auto flex justify-center items-center gap-2 px-6 py-3.5 sm:py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-cyan-500/20 hover:text-cyan-400 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 shrink-0 shadow-lg">
             <Mail size={18} />
             Send Me an Email
          </button>
        </div>
      </div>

      {/* Floating Code Graphic for Right Side with Tabbed UI */}
      <div className="hidden lg:flex flex-1 w-full justify-center items-center relative z-20 pt-10" style={{ animation: 'float 6s ease-in-out infinite' }}>
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
          `}
        </style>

        <div className="relative w-full max-w-[420px] bg-slate-900/80 border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] backdrop-blur-xl group hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
          
          {/* IDE Window Header & Tabs */}
          <div className="flex items-end gap-2 bg-[#161b22]/50 border-b border-white/5 pt-3 px-4">
            <div className="flex gap-2 pb-3 pl-2 pr-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            <button 
              onClick={() => setActiveTab('developer.js')}
              className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-colors border-b-2 ${activeTab === 'developer.js' ? 'bg-white/10 text-cyan-400 border-cyan-400' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5 border-transparent'}`}
            >
              developer.js
            </button>
            <button 
              onClick={() => setActiveTab('config.json')}
              className={`px-4 py-2 text-xs font-mono rounded-t-lg transition-colors border-b-2 ${activeTab === 'config.json' ? 'bg-white/10 text-purple-400 border-purple-400' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5 border-transparent'}`}
            >
              config.json
            </button>
          </div>
          
          {/* Code block content */}
          <div className="p-6 font-mono text-[13px] leading-relaxed relative min-h-[260px]">
            {activeTab === 'developer.js' ? (
              <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-2 text-slate-400">
                   <span className="text-purple-400 font-bold">const</span> 
                   <span className="text-white">developer</span> 
                   <span className="text-cyan-400">=</span> 
                   <span className="text-yellow-300">{"{"}</span>
                </div>

                <div className="pl-6 flex flex-col gap-2">
                   <div className="text-slate-300 hover:translate-x-1 transition-transform cursor-default">
                     <span className="text-cyan-400">name:</span> <span className="text-green-400">'Nathan Rener Malagapo'</span>,
                   </div>
                   <div className="text-slate-300 hover:translate-x-1 transition-transform cursor-default">
                     <span className="text-cyan-400">role:</span> <span className="text-green-400">'Web & AI Developer'</span>,
                   </div>
                   <div className="text-slate-300 hover:translate-x-1 transition-transform cursor-default">
                     <span className="text-cyan-400">skills:</span> <span className="text-slate-400">['React', 'Python', 'AWS', 'LLMs']</span>,
                   </div>
                   <div className="text-slate-300 hover:translate-x-1 transition-transform cursor-default">
                     <span className="text-cyan-400">passionate:</span> <span className="text-purple-400">true</span>
                   </div>
                </div>

                <div className="text-yellow-300">
                  {"}"}
                </div>
                
                <div className="flex items-center gap-2 text-slate-400 mt-6 pt-4 border-t border-white/5">
                   <span className="text-purple-400 font-bold group-hover:text-fuchsia-400 transition-colors">await</span> 
                   <span className="text-white">developer</span>.
                   <span className="text-cyan-400">buildFuture()</span>;
                   <span className="w-2 h-4 bg-cyan-400 animate-blink inline-block ml-1 relative top-0.5 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
                </div>
              </div>
            ) : (
              <div className="space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="flex items-center gap-2 text-slate-400">
                   <span className="text-yellow-300">{"{"}</span>
                </div>

                <div className="pl-6 flex flex-col gap-2 text-slate-300">
                   <div className="hover:translate-x-1 transition-transform cursor-default">
                     <span className="text-purple-400">"status"</span><span className="text-slate-400">:</span> <span className="text-green-400">"Open to work"</span>,
                   </div>
                   <div className="hover:translate-x-1 transition-transform cursor-default">
                     <span className="text-purple-400">"location"</span><span className="text-slate-400">:</span> <span className="text-green-400">"Cebu City, PH"</span>,
                   </div>
                   <div className="hover:translate-x-1 transition-transform cursor-default">
                     <span className="text-purple-400">"focus"</span><span className="text-slate-400">:</span> <span className="text-yellow-300">{"["}</span>
                   </div>
                   
                   <div className="pl-6 flex flex-col gap-1 text-green-400">
                      <div className="hover:translate-x-1 transition-transform cursor-default">"Scalable Architectures",</div>
                      <div className="hover:translate-x-1 transition-transform cursor-default">"AI Integrations",</div>
                      <div className="hover:translate-x-1 transition-transform cursor-default">"Performant UI/UX"</div>
                   </div>
                   
                   <div className="text-yellow-300">
                     {"]"}
                   </div>
                </div>

                <div className="text-yellow-300">
                  {"}"}
                </div>
                <div className="mt-8">
                   <span className="w-2 h-4 bg-purple-400 animate-blink inline-block shadow-[0_0_10px_rgba(168,85,247,0.8)]"></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-slate-400 tracking-[0.2em] uppercase group-hover:text-cyan-400 transition-colors">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2 group-hover:border-cyan-400 transition-colors relative">
          <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce group-hover:bg-cyan-400 transition-colors"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;