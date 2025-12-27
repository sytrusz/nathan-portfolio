import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px" } 
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Stack", href: "#stack" },
    { name: "Education", href: "#education" },
  ];

  return (
    <div className="fixed w-full z-50 top-6 flex justify-center px-4">
      <nav className="flex items-center gap-2 p-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl overflow-x-auto max-w-full">
        
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.href.substring(1))}
              className={`
                px-4 md:px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap
                ${isActive 
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg shadow-purple-500/25" 
                  : "text-slate-400 hover:text-white hover:bg-white/5"}
              `}
            >
              {link.name}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;