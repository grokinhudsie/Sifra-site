'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const link = (href, label) => (
    <li>
      <Link
        href={href}
        className={pathname === href ? 'active' : ''}
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          Sifra<span> Birthing Center</span>
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(o => !o)}
        >
          ☰
        </button>
        <ul className={`nav-links${open ? ' open' : ''}`}>
          {link('/', 'Home')}
          {link('/about', 'About')}
          {link('/contact', 'Contact')}
        </ul>
      </div>
    </nav>
  );
}
