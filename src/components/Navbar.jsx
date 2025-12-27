import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id], footer[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
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
    { name: "Tech Stack", href: "#tech" },
  ];

  return (
    <nav className="fixed w-full bg-slate-950/80 backdrop-blur-md border-b border-gray-800 z-50 transition-all duration-300">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="font-bold text-xl tracking-tight text-white hover:text-blue-400 transition-colors">
          sytrusz<span className="text-blue-500">.dev</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-1 bg-gray-900/50 p-1.5 rounded-full border border-gray-800/50">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.href.substring(1))}
              className={`
                px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300
                ${activeSection === link.href.substring(1) 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-900/50"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"}
              `}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;