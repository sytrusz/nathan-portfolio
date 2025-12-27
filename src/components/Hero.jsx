import React, { useState } from 'react';
import { Github, Mail, Linkedin, Copy, Check, Terminal } from 'lucide-react';
import { profile } from '../data/projects';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex flex-col justify-center items-start pt-20"
    >
      
      {/* Intro Badge */}
      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold mb-6">
        <Terminal size={12} />
        <span>BACKEND & AI DEVELOPER</span>
      </div>

      <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
        NATHAN RENER <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-white animate-gradient-x py-2 pr-2">
          MALAGAPO
        </span>
      </h1>

      <div className="max-w-2xl">
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 border-l-2 border-slate-800 pl-6">
          {profile.summary}
        </p>

        <div className="flex flex-wrap gap-4">
          <button 
            onClick={handleCopyEmail}
            className="group relative px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg transition-all overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <div className="flex items-center gap-3">
               {copied ? <Check size={18} className="text-green-400"/> : <Mail size={18} className="text-cyan-400"/>}
               <span>{copied ? "Email Copied!" : "nathanrenermalagapo@gmail.com"}</span>
            </div>
          </button>

          <a href={profile.linkedin} target="_blank" className="px-6 py-3 bg-[#0077b5]/10 text-[#0077b5] border border-[#0077b5]/20 hover:bg-[#0077b5] hover:text-white font-medium rounded-lg transition-all flex items-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </a>
          
          <a href="https://github.com/sytrusz" target="_blank" className="px-6 py-3 bg-white/5 text-slate-300 border border-white/10 hover:bg-white hover:text-black font-medium rounded-lg transition-all flex items-center gap-2">
            <Github size={18} /> GitHub
          </a>
        </div>
      </div>

    </section>
  );
};

export default Hero;