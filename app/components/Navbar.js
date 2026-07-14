'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/why-sifra', label: 'Why Sifra' },
  { href: '/about', label: 'Who We Are' },
  { href: '/construction-update', label: 'Construction Updates' },
  { href: '/midwife-ed-program', label: 'Midwife Education Program' },
  { href: '/contact', label: 'Get In Touch' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // True while the hero logo is still within the viewport. In that state the
  // header logo is hidden (and on desktop the nav + Donate button are centered);
  // once the hero logo scrolls up past the top, this flips false and the header
  // reverts to the logo + spread-out layout.
  const [heroLogoVisible, setHeroLogoVisible] = useState(false);

  // Re-runs on every navigation: the hero logo only exists on the home page,
  // so on all other routes this immediately settles into the header-logo layout.
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
  }, [pathname]);

  return (
    <nav className={`nav${heroLogoVisible ? ' nav--hero-logo' : ''}`}>
      <div className="nav-inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)}>
          <img src="/images/logos/sifra-logo-horizontal-tagline.webp" alt="Sifra Birth Center" width={579} height={191} />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
                onClick={() => setOpen(false)}
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
