'use client';

import { useEffect } from 'react';
import { getLenis } from './lenisInstance';

export default function ScrollToSection({ target }) {
  useEffect(() => {
    const lenis = getLenis();
    if (!target) {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    requestAnimationFrame(() => {
      const el = document.getElementById(target);
      if (!el) return;
      if (lenis) {
        const navHeight = document.querySelector('nav.nav')?.getBoundingClientRect().height ?? 0;
        lenis.scrollTo(el, { offset: -navHeight });
      } else {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }, [target]);
  return null;
}
