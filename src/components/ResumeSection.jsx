import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { education, skills, experience } from '../data/projects';
import { GraduationCap, ShieldCheck, Code2, Cpu, Users, Briefcase, BrainCircuit, Cloud, MapPin, Calendar, ChevronRight, Database, X, ExternalLink, Network, Award, Terminal } from 'lucide-react';

const CertificateModal = ({ url, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Google Drive blocks iframes for /view URLs. Automatically convert them to /preview
  const embedUrl = url.includes('drive.google.com') 
    ? url.replace(/\/view(\?.*)?$/, '/preview')
    : url;

  return createPortal(
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 md:p-8 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-white/10">
          <div className="flex items-center gap-2 text-cyan-400 font-bold">
            <ShieldCheck size={20} />
            <h2>Certificate Viewer</h2>
          </div>
          <div className="flex items-center gap-4">
            <a href={url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
              Open in Drive <ExternalLink size={16} />
            </a>
            <button 
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        <div className="flex-1 w-full bg-slate-950">
          <iframe 
            src={embedUrl} 
            className="w-full h-full border-0" 
            title="Certificate PDF Viewer"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>,
    document.body
  );
};

export const Education = () => (
  <section className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/40 transition-colors">
    <div className="flex items-center gap-3 mb-6">
      <GraduationCap size={24} className="text-purple-400" />
      <h3 className="font-bold text-white text-xl">Education</h3>
    </div>

    <div className="grid grid-cols-1 gap-8">
      {education.map((edu, idx) => (
        <div key={idx} className="relative border-l-2 border-slate-700 pl-6 pb-2 flex flex-col gap-6">
           <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-purple-500"></div>
           <div>
             <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-1.5">
               <h4 className="text-white font-bold text-xl">{edu.school}</h4>
               <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[10px] font-bold text-purple-400 uppercase tracking-widest shadow-sm flex items-center gap-1.5">
                 🎓 {edu.year}
               </span>
             </div>
             <p className="text-slate-300 font-medium text-sm">{edu.degree}</p>
           </div>

           {edu.roles && (
            <div className="w-full md:w-4/5 lg:w-3/4 bg-slate-950/50 rounded-xl p-5 border border-white/5 shadow-inner">
              <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                <Award size={14} className="text-purple-500" />
                Leadership Experience
              </h5>
              <div className="space-y-2.5">
                {edu.roles.map((role, i) => (
                  <div key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                    <span className="text-purple-500/50 mt-1 shrink-0 text-xs">▹</span>
                    <p>{role}</p>
                  </div>
                ))}
              </div>
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
              
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 text-xs font-mono text-slate-300 uppercase tracking-widest">
                    <Calendar size={12} className="text-amber-500" />
                    {exp.period}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end">
                    {exp.types?.map((type, i) => (
                      <span key={i} className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-[10px] font-bold text-amber-500 uppercase tracking-widest shadow-sm">
                        {type}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {exp.months} months
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Section (Achievements + Logo on right) */}
            <div className="relative mb-8 md:pl-2">
              <div className="space-y-4 md:w-3/4">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex gap-4 text-slate-300 text-sm leading-relaxed">
                    <span className="text-amber-500/50 mt-1.5 shrink-0 text-xs">▹</span>
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
              
              {/* Logo on the right side (floating) */}
              {exp.company.toLowerCase().includes('innodata') && (
                <div className="hidden md:flex absolute top-[-1rem] right-0 z-0">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMJDucGkTlkttcCqMXu3Al-g5o4Qea0bfueF_KIrdJmXwuUarMhzHn3M&s=10" 
                    alt="Innodata Logo" 
                    className="h-28 w-auto object-contain opacity-70 rounded-xl bg-white/5 p-3 shadow-lg" 
                  />
                </div>
              )}
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

export const Certifications = () => {
  const [selectedCertUrl, setSelectedCertUrl] = useState(null);
  
  const allCerts = education.flatMap(edu => edu.certifications || []);
  const groupedCerts = allCerts.reduce((acc, cert) => {
    if (!acc[cert.issuer]) acc[cert.issuer] = [];
    acc[cert.issuer].push(cert);
    return acc;
  }, {});

  return (
    <section className="bg-slate-900/40 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/40 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck size={24} className="text-cyan-400" />
        <h3 className="font-bold text-white text-xl">Certifications</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(groupedCerts).map(([issuer, certs], idx) => {
          let Icon = ShieldCheck;
          let iconColor = "text-cyan-400";
          
          if (issuer.includes("AWS") || issuer.includes("Amazon")) {
            Icon = Cloud;
            iconColor = "text-[#FF9900]";
          } else if (issuer.includes("Cisco")) {
            Icon = Network;
            iconColor = "text-[#00bceb]";
          } else if (issuer.includes("TESDA")) {
            Icon = Award;
            iconColor = "text-blue-500";
          } else if (issuer.includes("CodeChum")) {
            Icon = Code2;
            iconColor = "text-teal-400";
          }

          return (
            <div key={idx} className="bg-slate-950 border border-white/5 rounded-xl p-5 flex flex-col shadow-lg shadow-black/20">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/5">
                <div className={`p-2 rounded-lg bg-white/5 ${iconColor}`}>
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-slate-200 text-sm leading-tight">{issuer}</h4>
              </div>
              
              <div className="space-y-3 flex-1 flex flex-col">
                {certs.map((cert, i) => {
                  const isClickable = Boolean(cert.link);
                  return (
                    <div 
                      key={i} 
                      onClick={() => isClickable && setSelectedCertUrl(cert.link)}
                      className={`p-4 rounded-lg bg-white/5 border transition-all flex flex-col justify-between ${
                        isClickable 
                          ? 'cursor-pointer hover:bg-white/10 border-transparent hover:border-cyan-500/30 hover:-translate-y-0.5 hover:shadow-lg shadow-cyan-500/10' 
                          : 'border-transparent'
                      }`}
                    >
                      <h5 className="text-slate-300 font-bold text-xs leading-relaxed">{cert.name}</h5>
                      <div className="flex justify-between items-end mt-4">
                        {isClickable ? (
                          <p className="text-cyan-400/80 text-[10px] uppercase tracking-wider font-bold flex items-center gap-1">
                            <ExternalLink size={10} /> View
                          </p>
                        ) : <div />}
                        <span className="text-slate-500 text-[10px] font-mono font-bold bg-black/50 px-2 py-0.5 rounded">{cert.year}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {selectedCertUrl && (
        <CertificateModal 
          url={selectedCertUrl} 
          onClose={() => setSelectedCertUrl(null)} 
        />
      )}
    </section>
  );
};

const VSCodeLogo = ({ className }) => (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" 
    alt="VS Code"
    className={`drop-shadow-[0_0_15px_rgba(31,156,240,0.3)] transition-transform group-hover/tool:scale-110 duration-300 ${className || 'w-16 h-16'}`}
  />
);

const AntigravityLogo = ({ className }) => (
  <svg 
    height="1em" 
    style={{ flex: 'none', lineHeight: 1 }} 
    viewBox="0 0 24 24" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
    className={`drop-shadow-[0_0_15px_rgba(66,133,244,0.4)] transition-transform group-hover/tool:scale-110 duration-300 ${className || 'w-16 h-16'}`}
  >
    <title>Antigravity</title>
    <mask height="23" id="lobe-icons-antigravity-0-_R_0_" maskUnits="userSpaceOnUse" width="24" x="0" y="1">
      <path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" fill="#fff" />
    </mask>
    <g mask="url(#lobe-icons-antigravity-0-_R_0_)">
      <g filter="url(#lobe-icons-antigravity-1-_R_0_)"><path d="M-1.018-3.992c-.408 3.591 2.686 6.89 6.91 7.37 4.225.48 7.98-2.043 8.387-5.633.408-3.59-2.686-6.89-6.91-7.37-4.225-.479-7.98 2.043-8.387 5.633z" fill="#FFE432" /></g>
      <g filter="url(#lobe-icons-antigravity-2-_R_0_)"><path d="M15.269 7.747c1.058 4.557 5.691 7.374 10.348 6.293 4.657-1.082 7.575-5.653 6.516-10.21-1.058-4.556-5.691-7.374-10.348-6.292-4.657 1.082-7.575 5.653-6.516 10.21z" fill="#FC413D" /></g>
      <g filter="url(#lobe-icons-antigravity-3-_R_0_)"><path d="M-12.443 10.804c1.338 4.703 7.36 7.11 13.453 5.378 6.092-1.733 9.947-6.95 8.61-11.652C8.282-.173 2.26-2.58-3.833-.848-9.925.884-13.78 6.1-12.443 10.804z" fill="#00B95C" /></g>
      <g filter="url(#lobe-icons-antigravity-4-_R_0_)"><path d="M-12.443 10.804c1.338 4.703 7.36 7.11 13.453 5.378 6.092-1.733 9.947-6.95 8.61-11.652C8.282-.173 2.26-2.58-3.833-.848-9.925.884-13.78 6.1-12.443 10.804z" fill="#00B95C" /></g>
      <g filter="url(#lobe-icons-antigravity-5-_R_0_)"><path d="M-7.608 14.703c3.352 3.424 9.126 3.208 12.896-.483 3.77-3.69 4.108-9.459.756-12.883C2.69-2.087-3.083-1.871-6.853 1.82c-3.77 3.69-4.108 9.458-.755 12.883z" fill="#00B95C" /></g>
      <g filter="url(#lobe-icons-antigravity-6-_R_0_)"><path d="M9.932 27.617c1.04 4.482 5.384 7.303 9.7 6.3 4.316-1.002 6.971-5.448 5.93-9.93-1.04-4.483-5.384-7.304-9.7-6.301-4.316 1.002-6.971 5.448-5.93 9.93z" fill="#3186FF" /></g>
      <g filter="url(#lobe-icons-antigravity-7-_R_0_)"><path d="M2.572-8.185C.392-3.329 2.778 2.472 7.9 4.771c5.122 2.3 11.042.227 13.222-4.63 2.18-4.855-.205-10.656-5.327-12.955-5.122-2.3-11.042-.227-13.222 4.63z" fill="#FBBC04" /></g>
      <g filter="url(#lobe-icons-antigravity-8-_R_0_)"><path d="M-3.267 38.686c-5.277-2.072 3.742-19.117 5.984-24.83 2.243-5.712 8.34-8.664 13.616-6.592 5.278 2.071 11.533 13.482 9.29 19.195-2.242 5.713-23.613 14.298-28.89 12.227z" fill="#3186FF" /></g>
      <g filter="url(#lobe-icons-antigravity-9-_R_0_)"><path d="M28.71 17.471c-1.413 1.649-5.1.808-8.236-1.878-3.135-2.687-4.531-6.201-3.118-7.85 1.412-1.649 5.1-.808 8.235 1.878s4.532 6.2 3.119 7.85z" fill="#749BFF" /></g>
      <g filter="url(#lobe-icons-antigravity-10-_R_0_)"><path d="M18.163 9.077c5.81 3.93 12.502 4.19 14.946.577 2.443-3.612-.287-9.727-6.098-13.658-5.81-3.931-12.502-4.19-14.946-.577-2.443 3.612.287 9.727 6.098 13.658z" fill="#FC413D" /></g>
      <g filter="url(#lobe-icons-antigravity-11-_R_0_)"><path d="M-.915 2.684c-1.44 3.473-.97 6.967 1.05 7.804 2.02.837 4.824-1.3 6.264-4.772 1.44-3.473.97-6.967-1.05-7.804-2.02-.837-4.824 1.3-6.264 4.772z" fill="#FFEE48" /></g>
    </g>
    <defs>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="17.587" id="lobe-icons-antigravity-1-_R_0_" width="19.838" x="-3.288" y="-11.917"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="1.117" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="38.565" id="lobe-icons-antigravity-2-_R_0_" width="38.9" x="4.251" y="-13.493"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="5.4" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.517" id="lobe-icons-antigravity-3-_R_0_" width="40.955" x="-21.889" y="-10.592"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.517" id="lobe-icons-antigravity-4-_R_0_" width="40.955" x="-21.889" y="-10.592"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="36.595" id="lobe-icons-antigravity-5-_R_0_" width="36.632" x="-19.099" y="-10.278"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.591" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="34.087" id="lobe-icons-antigravity-6-_R_0_" width="33.533" x=".981" y="8.758"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="4.363" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35.276" id="lobe-icons-antigravity-7-_R_0_" width="35.978" x="-6.143" y="-21.659"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.954" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.523" id="lobe-icons-antigravity-8-_R_0_" width="45.114" x="-11.96" y="-.46"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.531" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.054" id="lobe-icons-antigravity-9-_R_0_" width="25.094" x="10.485" y=".58"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.159" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.007" id="lobe-icons-antigravity-10-_R_0_" width="33.508" x="5.833" y="-12.467"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="2.669" /></filter>
      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26.151" id="lobe-icons-antigravity-11-_R_0_" width="22.194" x="-8.355" y="-8.876"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" /><feGaussianBlur result="effect1_foregroundBlur_977_115" stdDeviation="3.303" /></filter>
    </defs>
  </svg>
);

const ClaudeLogo = ({ className }) => (
  <svg viewBox="0 0 24 24" className={`drop-shadow-[0_0_15px_rgba(217,119,87,0.3)] transition-transform group-hover/tool:scale-110 duration-300 ${className || 'w-16 h-16'}`} xmlns="http://www.w3.org/2000/svg">
    <path d="M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z" fill="#D97757" fillRule="nonzero"></path>
  </svg>
);

export const Skills = ({ onTechHover, activeTech }) => {
  const categories = {
    languages: {
      label: "Languages & Core",
      icon: <Code2 size={24} className="text-blue-400" />,
      colSpan: "lg:col-span-2"
    },
    frameworks: {
      label: "Frameworks",
      icon: <Cpu size={24} className="text-pink-400" />,
      colSpan: "lg:col-span-2"
    },
    ai_ml: {
      label: "AI / ML & Data",
      icon: <BrainCircuit size={24} className="text-purple-400" />,
      colSpan: "lg:col-span-2"
    },
    databases: {
      label: "Databases",
      icon: <Database size={24} className="text-green-400" />,
      colSpan: "lg:col-span-3"
    },
    cloud_devops: {
      label: "Cloud & Tools",
      icon: <Cloud size={24} className="text-cyan-400" />,
      colSpan: "lg:col-span-3"
    }
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6">
      {/* Left Panel: Software and AI Tools */}
      <div className="lg:col-span-2 lg:row-span-2 bg-slate-900/40 border border-white/5 rounded-2xl p-6 flex flex-col hover:border-white/20 transition-all duration-300 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        <h4 className="text-white font-bold mb-8 flex items-center gap-3 relative z-10 text-lg">
          <Terminal size={24} className="text-indigo-400" />
          Software & AI
        </h4>
        
        <div className="flex flex-col gap-8 relative z-10 flex-1 justify-center py-4">
          {/* VS Code */}
          <div className="flex items-center gap-5 group/tool p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 cursor-default">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-slate-950 rounded-xl border border-white/5 shadow-inner">
               <VSCodeLogo className="w-10 h-10" />
            </div>
            <div>
              <h5 className="text-slate-100 font-bold text-base">VS Code</h5>
              <p className="text-slate-400 text-sm font-medium">Primary Editor</p>
            </div>
          </div>

          {/* Antigravity */}
          <div className="flex items-center gap-5 group/tool p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 cursor-default">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-slate-950 rounded-xl border border-white/5 shadow-inner group-hover/tool:border-indigo-500/30 transition-colors">
               <AntigravityLogo className="w-10 h-10" />
            </div>
            <div>
              <h5 className="text-slate-100 font-bold text-base">Antigravity</h5>
              <p className="text-slate-400 text-sm font-medium">AI Assistant</p>
            </div>
          </div>

          {/* Claude */}
          <div className="flex items-center gap-5 group/tool p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10 cursor-default">
            <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-slate-950 rounded-xl border border-white/5 shadow-inner group-hover/tool:border-orange-500/30 transition-colors">
               <ClaudeLogo className="w-10 h-10" />
            </div>
            <div>
              <h5 className="text-slate-100 font-bold text-base">Claude</h5>
              <p className="text-slate-400 text-sm font-medium">AI Assistant</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panels: Core Skills */}
      {Object.entries(categories).map(([key, config]) => (
        <div 
          key={key} 
          className={`${config.colSpan} bg-slate-900/40 border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-all hover:-translate-y-1 duration-300`}
        >
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