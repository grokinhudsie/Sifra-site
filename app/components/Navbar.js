'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { getLenis } from './lenisInstance';

const LINKS = [
  { href: '/', id: 'home', label: 'Home' },
  { href: '/about', id: 'about', label: 'About Us' },
  { href: '/why-sifra', id: 'why', label: 'Why Sifra' },
  { href: '/construction-update', id: 'construction', label: 'Construction Updates' },
  { href: '/midwife-ed-program', id: 'midwife', label: 'Midwife Education Program' },
  { href: '/contact', id: 'contact', label: 'Contact Us' },
];

const ID_TO_HREF = Object.fromEntries(LINKS.map((l) => [l.id, l.href]));

const getSectionOrder = () =>
  Array.from(document.querySelectorAll('section[id]')).map((s) => s.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const activeIdRef = useRef('home');
  const linksRef = useRef(null);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    let raf = 0;
    let urlTimer = 0;
    let lastY = window.scrollY;
    let firstRun = true;
    const getNavHeight = () => document.querySelector('nav.nav')?.getBoundingClientRect().height ?? 0;

    const syncUrl = () => {
      const href = ID_TO_HREF[activeIdRef.current];
      if (!href) return;
      if (window.location.pathname !== href && window.history?.replaceState) {
        window.history.replaceState(null, '', href);
      }
    };

    const computeActive = () => {
      const navH = getNavHeight();
      const currentY = window.scrollY;
      const y = currentY + navH;
      const order = getSectionOrder();
      if (!order.length) return;

      if (firstRun) {
        firstRun = false;
        lastY = currentY;
        let current = order[0];
        for (const id of order) {
          const el = document.getElementById(id);
          if (el && el.offsetTop <= y) current = id;
        }
        setActiveId(current);
        return;
      }

      const dir = currentY > lastY ? 'down' : currentY < lastY ? 'up' : null;
      lastY = currentY;
      if (!dir) return;

      setActiveId((curr) => {
        let id = order.includes(curr) ? curr : order[0];
        let safety = 20;
        while (safety-- > 0) {
          const idx = order.indexOf(id);
          const el = document.getElementById(id);
          if (!el) break;
          const top = el.offsetTop;
          const mid = top + el.offsetHeight / 2;
          if (dir === 'down' && idx + 1 < order.length && y >= mid) {
            id = order[idx + 1];
            continue;
          }
          if (dir === 'up' && idx > 0) {
            const prevEl = document.getElementById(order[idx - 1]);
            const atPageTop = idx - 1 === 0 && currentY <= 0;
            if (prevEl && (y <= prevEl.offsetTop || atPageTop)) {
              id = order[idx - 1];
              continue;
            }
          }
          break;
        }
        return id;
      });
    };

    const onScroll = () => {
      if (urlTimer) clearTimeout(urlTimer);
      urlTimer = setTimeout(syncUrl, 150);
      if (raf) return;
      raf = requestAnimationFrame(() => {
        computeActive();
        raf = 0;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    computeActive();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (urlTimer) clearTimeout(urlTimer);
    };
  }, []);

  const handleNavClick = (e, link) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
    setOpen(false);

    const targetEl = document.getElementById(link.id);
    if (!targetEl) return;

    e.preventDefault();

    const order = getSectionOrder();
    const currentIdx = order.indexOf(activeId);
    const targetIdx = order.indexOf(link.id);
    const adjacent = currentIdx === -1 || Math.abs(currentIdx - targetIdx) <= 1;
    const navHeight = document.querySelector('nav.nav')?.getBoundingClientRect().height ?? 0;
    const top = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;

    setActiveId(link.id);

    const lenis = getLenis();
    if (adjacent) {
      document
        .querySelectorAll('section.fade-section:not(.visible)')
        .forEach((s) => s.classList.add('visible'));
      if (lenis) lenis.scrollTo(top);
      else window.scrollTo({ top, behavior: 'smooth' });
    } else {
      targetEl.classList.remove('visible');
      void targetEl.offsetWidth;
      if (lenis) lenis.scrollTo(top, { immediate: true });
      else window.scrollTo({ top, behavior: 'auto' });
      requestAnimationFrame(() => targetEl.classList.add('visible'));
    }

    if (window.history?.replaceState) {
      window.history.replaceState(null, '', link.href);
    }
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={(e) => handleNavClick(e, LINKS[0])}>
          <img src="/Logos/Sifra Birth Center Logo With Tagline_Horizontal Lockup_Three-Line_Two-Color_RGB.svg" alt="Sifra Birth Center" />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <ul ref={linksRef} className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.id}>
              <Link
                href={l.href}
                className={activeId === l.id ? 'active' : ''}
                onClick={(e) => handleNavClick(e, l)}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
