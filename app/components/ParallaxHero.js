'use client';

import { useEffect, useRef } from 'react';
import { onLenis } from './lenisInstance';

export default function ParallaxHero({ children }) {
  const heroRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    let rafId = 0;

    const apply = (scrollY) => {
      if (!bgRef.current) return;
      bgRef.current.style.transform = `translate3d(0, ${scrollY * 0.4}px, 0)`;
    };

    const onLenisScroll = ({ scroll }) => {
      apply(typeof scroll === 'number' ? scroll : window.scrollY);
    };

    const onNativeScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        apply(window.scrollY);
        rafId = 0;
      });
    };

    let activeLenis = null;
    const detachNative = () => window.removeEventListener('scroll', onNativeScroll);
    const attachNative = () => window.addEventListener('scroll', onNativeScroll, { passive: true });

    attachNative();

    const unsubLenis = onLenis((lenis) => {
      if (lenis) {
        detachNative();
        lenis.on('scroll', onLenisScroll);
        activeLenis = lenis;
      } else if (activeLenis) {
        activeLenis.off('scroll', onLenisScroll);
        activeLenis = null;
        attachNative();
      }
    });

    apply(window.scrollY);

    return () => {
      unsubLenis();
      if (activeLenis) activeLenis.off('scroll', onLenisScroll);
      detachNative();
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      <div className="hero-bg" ref={bgRef} />
      <div className="hero-overlay" />
      {children}
    </header>
  );
}
