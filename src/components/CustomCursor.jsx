import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = () => {
      const el = document.elementFromPoint(position.x, position.y);
      if (
        el && 
        (window.getComputedStyle(el).cursor === 'pointer' || 
         el.tagName.toLowerCase() === 'button' || 
         el.tagName.toLowerCase() === 'a' ||
         el.closest('button') ||
         el.closest('a'))
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    
    // Hide default cursor
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.documentElement.style.cursor = 'auto';
    };
  }, [position.x, position.y]);

  return (
    <>
      {/* Small dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-75 ease-out"
        style={{ 
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />
      {/* Outer ring */}
      <div 
        className={`fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[9998] mix-blend-screen transition-all duration-150 ease-out ${
          isPointer ? 'bg-cyan-500/10 border-cyan-400/80' : 'border-cyan-500/50'
        }`}
        style={{ 
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isPointer ? 1.75 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
