'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getLenis } from './lenisInstance';

// Makes every navigation open the new page at the top. Next.js resets scroll
// itself on route change, but Lenis is often still mid-animation from the
// previous page and its raf loop drags the window back to the old position.
export default function ScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.location.hash) return; // let anchor landings behave natively
    const lenis = getLenis();
    // force: override any in-flight Lenis animation and reset its internal
    // target, so it can't lerp back to the previous page's position.
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname]);

  // Clicking a link to the page we're already on (e.g. "Home" while on the
  // homepage): the route doesn't change, so the effect above won't re-fire.
  // Intercept and smooth-scroll back to the top instead.
  useEffect(() => {
    const onClick = (e) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      const a = e.target.closest('a[href]');
      if (!a) return;

      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname || url.hash) return;

      e.preventDefault();
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
