import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => {
      setIsHidden(true);
    };

    const handleMouseEnter = () => {
      setIsHidden(false);
    };

    const addHoverListeners = () => {
      const hoverElements = document.querySelectorAll(
        'a, button, input, select, textarea, [role="button"], .interactive-element'
      );
      hoverElements.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true));
        el.addEventListener('mouseleave', () => setIsHovering(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Initial attach
    addHoverListeners();

    // Re-attach occasionally or on mutations to support dynamic elements
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  // Deactivate custom cursor on mobile / touch devices
  if (
    typeof window !== 'undefined' && 
    (window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches)
  ) {
    return null;
  }

  return (
    <div
      className={`cx-cursor ${isHovering ? 'is-hovering' : ''} ${isHidden ? 'is-hidden' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}
