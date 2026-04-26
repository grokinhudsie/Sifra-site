'use client';

import { useEffect } from 'react';

export default function FadeInSections() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    const observeAll = () => {
      document.querySelectorAll('section.fade-section').forEach((s) => {
        if (!s.classList.contains('visible')) observer.observe(s);
      });
    };
    observeAll();

    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
