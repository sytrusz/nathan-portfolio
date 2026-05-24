import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, ArrowUpRight, Layers, X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon, ShieldAlert } from 'lucide-react';

const getImgSrc = (img) => typeof img === 'string' ? img : img?.src;
const getImgCaption = (img, index, title) => typeof img === 'string' ? `${title} Screenshot ${index + 1}` : (img?.caption || `${title} Screenshot ${index + 1}`);

const ProjectModal = ({ project, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const images = project.images || [];

  const handleNext = (e) => {
    e.stopPropagation();
    if (images.length) setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (images.length) setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 backdrop-blur-md p-4 md:p-10 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110]"
      >
        <X size={32} />
      </button>

      <div className="relative w-full max-w-6xl h-full flex flex-col items-center justify-center gap-6" onClick={(e) => e.stopPropagation()}>
        <div className="relative group w-full flex-1 flex items-center justify-center min-h-0">
          {images.length > 1 && (
            <>
              <button 
                onClick={handlePrev}
                className="absolute left-4 z-[110] p-3 bg-black/50 text-white rounded-full hover:bg-cyan-500 hover:text-black transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-4 z-[110] p-3 bg-black/50 text-white rounded-full hover:bg-cyan-500 hover:text-black transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          
          {images.length > 0 ? (
            <img 
              src={getImgSrc(images[currentIndex])} 
              alt={`${project.title} screenshot ${currentIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-500 gap-4">
              <ImageIcon size={64} className="opacity-50" />
              <p>No images available for this project.</p>
            </div>
          )}
        </div>

        <div className="text-center shrink-0 w-full max-w-3xl">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          
          {images.length > 0 && (
            <p className="text-slate-300 text-lg font-medium leading-relaxed mb-2">
              {getImgCaption(images[currentIndex], currentIndex, project.title)}
            </p>
          )}

          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? 'bg-cyan-500 w-8' : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectRow = ({ project, isHighlighted }) => {
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  
  const isConfidential = project.status === 'Confidential';
  const isPrivateRepo = isConfidential || project.privateNote;
  const images = project.images || [];

  useEffect(() => {
    let interval;
    if (isHovering && images.length > 1 && !showArchitecture) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 2000);
    } else {
      setCurrentImageIndex(0);
    }
    return () => clearInterval(interval);
  }, [isHovering, images.length, showArchitecture]);

  return (
    <>
      <div className={`group relative rounded-2xl bg-slate-900/40 border transition-all duration-500 overflow-hidden ${
        isHighlighted 
          ? 'border-cyan-500/50 shadow-[0_0_30px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/30 -translate-y-1' 
          : 'border-white/5 hover:border-white/20'
      }`}>
        
        {/* Card Glow Effect on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 transition-opacity duration-500 pointer-events-none ${
          isHighlighted ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* 1. Content Section (Left) */}
          <div className="lg:col-span-7 p-8 flex flex-col justify-center relative z-10 order-2 lg:order-1">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex gap-2">
                  {project.categories.map((cat, i) => (
                    <span key={i} className="text-cyan-400 font-bold text-[10px] tracking-widest uppercase px-2 py-0.5 bg-cyan-500/5 border border-cyan-500/10 rounded">
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="h-1 w-1 rounded-full bg-slate-700"></div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  isConfidential 
                    ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                    : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {project.status}
                </span>
              </div>
              
              {/* View Architecture Button */}
              {project.architecture && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowArchitecture(!showArchitecture);
                  }}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all border ${
                    showArchitecture 
                      ? 'bg-purple-500/20 text-purple-400 border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                      : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {showArchitecture ? <X size={14} /> : <Layers size={14} />}
                  {showArchitecture ? 'Close Architecture' : 'View Architecture'}
                </button>
              )}
            </div>            
            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all">
              {project.title}
            </h3>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full border border-white/5">
                  {t}
                </span>
              ))}
            </div>

            {project.privateNote && (
              <div className="flex items-start gap-3 p-4 mb-8 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 text-sm leading-relaxed">
                <ShieldAlert size={18} className="shrink-0 mt-0.5 text-amber-500" />
                <p>{project.privateNote}</p>
              </div>
            )}

            <div className="flex flex-wrap gap-6 mt-auto">
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors">
                  Visit Website <ArrowUpRight size={16} />
                </a>
              )}

              {isPrivateRepo ? (
                <div className="flex items-center gap-2 text-sm font-bold text-slate-500 cursor-not-allowed">
                  Private Repository <Github size={16} />
                </div>
              ) : (
                <a href={project.githubLink} target="_blank" className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                  View Source Code <Github size={16} />
                </a>
              )}
            </div>
          </div>

          {/* 2. Image/Architecture Section (Right) */}
          <div 
            className="lg:col-span-5 relative min-h-[300px] bg-[#020617] flex items-center justify-center order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5 overflow-hidden cursor-pointer group/image"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => { if(!showArchitecture) setShowModal(true); }}
          >
            {/* Click to Expand Indicator */}
            {!showArchitecture && (
              <div className="absolute top-4 right-4 z-30 p-2 bg-black/50 rounded-full text-white/70 opacity-0 group-hover/image:opacity-100 transition-opacity">
                <Maximize2 size={16} />
              </div>
            )}

            {/* Architecture Overlay - Solid Background to fix blur issues */}
            {showArchitecture && project.architecture ? (
              <div className="absolute inset-0 p-8 bg-[#020617] z-40 flex flex-col justify-start overflow-y-auto animate-in fade-in slide-in-from-right-4 duration-300">
                <h4 className="text-sm font-bold text-purple-400 uppercase tracking-widest mb-8 shrink-0 flex items-center gap-2">
                  <Layers size={14} /> System Architecture
                </h4>
                  <div className="space-y-6">
                    {project.architecture.map((step, idx) => (
                      <div key={idx} className="flex gap-4 group/step">
                        <div className="flex flex-col items-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-purple-500 group-hover/step:scale-125 transition-transform shadow-[0_0_8px_rgba(168,85,247,0.5)]"></div>
                          {idx !== project.architecture.length - 1 && <div className="w-px h-full bg-slate-800 mt-2"></div>}
                        </div>
                        <div className="pb-2">
                          <p className="text-sm font-bold text-white mb-1">{step.component}</p>
                          <p className="text-xs text-slate-500 leading-relaxed">{step.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {/* Scrolling Image Carousel */}
              <div className="relative w-full h-full flex items-center p-6 overflow-hidden">
                <div 
                  className={`flex w-full h-full items-center transition-transform duration-700 ease-in-out ${showArchitecture ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
                  style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                  {images.length > 0 ? (
                    images.map((img, idx) => (
                      <div key={idx} className="w-full h-full shrink-0 flex items-center justify-center px-4">
                        <img
                          src={getImgSrc(img)}
                          alt={`${project.title} screenshot ${idx}`}
                          className="max-w-[100%] max-h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover/image:scale-105"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="w-full h-full shrink-0 flex items-center justify-center">
                      <div className="w-[90%] aspect-video bg-slate-800/20 rounded-2xl flex flex-col items-center justify-center border border-white/5 text-slate-500">
                        <ImageIcon size={32} className="mb-3 opacity-50" />
                        <span className="text-xs font-mono uppercase tracking-widest font-bold">Screenshot Pending</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Image Progress Dots (Hover only) */}
              {isHovering && images.length > 1 && !showArchitecture && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                  {images.map((_, i) => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-cyan-500 w-4 shadow-[0_0_8px_rgba(6,182,212,0.5)]' : 'bg-white/30'}`} />
                  ))}
                </div>
              )}
              </div>

              </div>
              </div>
      {showModal && (
        <ProjectModal 
          project={project} 
          onClose={() => setShowModal(false)} 
          initialIndex={currentImageIndex}
        />
      )}
    </>
  );
};

export default ProjectRow;