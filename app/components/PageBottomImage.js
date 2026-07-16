'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Full-width image strip shown above the footer. Each page's image lives at
// /images/all-pages/<pagename>.webp (home page = home.webp); pages listed
// here don't get one. If an image is missing, the strip hides itself
// instead of showing a broken image.
const EXCLUDED = ['/qr-donate', '/employment', '/build-log'];

export default function PageBottomImage() {
  const pathname = usePathname();
  const [failed, setFailed] = useState(null);

  useEffect(() => setFailed(null), [pathname]);

  if (!pathname || EXCLUDED.includes(pathname)) return null;

  const name = pathname === '/' ? 'home' : pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-');
  const src = `/images/all-pages/${name}.webp`;
  if (failed === src) return null;

  return (
    <div className="page-bottom-image">
      <img src={src} alt="" loading="lazy" onError={() => setFailed(src)} />
    </div>
  );
}
