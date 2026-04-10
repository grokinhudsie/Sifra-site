'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxHero({ children }) {
  const heroRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const isMobile = window.innerWidth <= 768;
        const xPos = isMobile ? '71%' : 'center';
        heroRef.current.style.backgroundPosition = `${xPos} calc(30% + ${scrollY * 0.4}px)`;
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      {children}
    </header>
  );
}
