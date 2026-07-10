'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { getLenis } from './lenisInstance';

const LINKS = [
  { href: '/', id: 'home', label: 'Home' },
  { href: '/why-sifra', id: 'why', label: 'Why Sifra' },
  { href: '/about', id: 'about', label: 'Who We Are' },
  { href: '/construction-update', id: 'construction', label: 'Construction Updates' },
  { href: '/midwife-ed-program', id: 'midwife', label: 'Midwife Education Program' },
  { href: '/contact', id: 'contact', label: 'Get In Touch' },
];

const ID_TO_HREF = Object.fromEntries(LINKS.map((l) => [l.id, l.href]));

const getSectionOrder = () =>
  Array.from(document.querySelectorAll('section[id]')).map((s) => s.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  // True while the hero logo is still within the viewport. In that state the
  // header logo is hidden (and on desktop the nav + Donate button are centered);
  // once the hero logo scrolls up past the top, this flips false and the header
  // reverts to the logo + spread-out layout.
  const [heroLogoVisible, setHeroLogoVisible] = useState(false);
  const activeIdRef = useRef('home');
  const linksRef = useRef(null);

  useEffect(() => {
    activeIdRef.current = activeId;
  }, [activeId]);

  useEffect(() => {
    const heroLogo = document.querySelector('.hero-logo');
    if (!heroLogo) {
      setHeroLogoVisible(false);
      return;
    }
    // The switch fires when the hero logo's bottom crosses behind the sticky
    // nav. A single threshold flickers when you scroll slowly and hover right
    // on the line, so use a hysteresis band: once switched, you must scroll a
    // full BAND past the line before it switches back. Fast scrolls already
    // jump the band in one frame; this only tames the slow-scroll jitter.
    const BAND = 60;
    const getNavH = () =>
      document.querySelector('nav.nav')?.getBoundingClientRect().height ?? 120;

    let raf = 0;
    const update = () => {
      raf = 0;
      const bottom = heroLogo.getBoundingClientRect().bottom;
      const navH = getNavH();
      setHeroLogoVisible((prev) =>
        prev ? bottom > navH - BAND : bottom > navH + BAND
      );
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    // Seed synchronously so the centered/hidden-logo layout is right on first
    // paint (the page loads at the top with the hero logo showing).
    setHeroLogoVisible(heroLogo.getBoundingClientRect().bottom > getNavH());

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    let raf = 0;
    let urlTimer = 0;
    let lastY = window.scrollY;
    let firstRun = true;
    const getNavHeight = () => document.querySelector('nav.nav')?.getBoundingClientRect().height ?? 0;

    const syncUrl = () => {
      const href = ID_TO_HREF[activeIdRef.current];
      if (!href) return;
      // Scroll-spy only applies to the single-page home route. On dedicated
      // routes (e.g. /employment) the section doesn't exist and activeId is a
      // stale leftover from the home page, so never rewrite the URL to it —
      // doing so would "redirect" /employment to /contact, etc.
      if (!document.getElementById(activeIdRef.current)) return;
      if (window.location.pathname !== href && window.history?.replaceState) {
        window.history.replaceState(null, '', href);
      }
    };

    const computeActive = () => {
      const navH = getNavHeight();
      const currentY = window.scrollY;
      const y = currentY + navH;
      const order = getSectionOrder();
      // No scroll-spy sections on this route (e.g. /employment): clear any
      // stale active link carried over from the home page so no nav item is
      // wrongly highlighted.
      if (!order.length) {
        setActiveId((curr) => (curr ? '' : curr));
        return;
      }

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
          if (dir === 'down' && idx + 1 < order.length) {
            const nextEl = document.getElementById(order[idx + 1]);
            if (nextEl && y >= nextEl.offsetTop) {
              id = order[idx + 1];
              continue;
            }
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
    <nav className={`nav${heroLogoVisible ? ' nav--hero-logo' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={(e) => handleNavClick(e, LINKS[0])}>
          <img src="/images/logos/sifra-logo-horizontal-tagline.webp" alt="Sifra Birth Center" width={579} height={191} />
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
        <Link href="/donate" className="btn nav-donate nav-donate-desktop" onClick={() => setOpen(false)}>
          Donate
        </Link>
      </div>
      <div className="nav-donate-row">
        <Link href="/donate" className="btn nav-donate" onClick={() => setOpen(false)}>
          Donate
        </Link>
      </div>
    </nav>
  );
}
