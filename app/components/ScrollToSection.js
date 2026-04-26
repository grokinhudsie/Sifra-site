'use client';

import { useEffect } from 'react';

export default function ScrollToSection({ target }) {
  useEffect(() => {
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    requestAnimationFrame(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [target]);
  return null;
}
