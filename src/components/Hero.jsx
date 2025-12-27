import React, { useState } from 'react';
import { Github, Mail, MapPin, Linkedin, Copy, Check } from 'lucide-react';
import { profile } from '../data/projects';

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="relative scroll-mt-28">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start p-8 rounded-2xl bg-gray-900/40 border border-gray-800 backdrop-blur-sm shadow-xl">
        
        <div className="relative group shrink-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <img 
            src="/images/profile.jpg" 
            alt={profile.name} 
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl object-cover border-2 border-gray-800 shadow-2xl"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
              {profile.name}
            </h1>
            <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
              {profile.role}
            </h2>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <button 
              onClick={handleCopyEmail}
              className="group flex items-center gap-3 px-3 py-1.5 bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-blue-500/50 rounded-lg transition-all cursor-pointer"
              title="Click to copy email"
            >
              <Mail size={14} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
              <span className="text-sm text-gray-300 font-mono tracking-wide">{profile.email}</span>
              
              <div className="relative w-4 h-4 ml-1">
                <Copy 
                  size={14} 
                  className={`absolute top-0 left-0 text-gray-500 transition-all ${copied ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`} 
                />
                <Check 
                  size={14} 
                  className={`absolute top-0 left-0 text-green-400 transition-all ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} 
                />
              </div>
            </button>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            {profile.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
            
            <a href={`mailto:${profile.email}`} className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2">
              <Mail size={18} /> Contact Me
            </a>

            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-[#0077b5] hover:bg-[#006396] text-white rounded-lg text-sm font-medium transition-colors shadow-lg shadow-blue-900/20 flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>

            <a href="https://github.com/sytrusz" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition-colors border border-gray-700 flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
            
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 text-sm text-gray-500 pt-4 border-t border-gray-800/50 mt-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <span className="flex items-center gap-1.5">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-green-500/80">Available for work</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;