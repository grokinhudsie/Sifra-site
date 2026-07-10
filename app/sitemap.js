import { SITE_URL } from './lib/seo';

// Generated at build time, so lastModified reflects each deploy and the list
// never goes stale. Noindexed routes (/build-log, /qr-donate) are excluded.
const PATHS = [
  '/',
  '/why-sifra',
  '/about',
  '/construction-update',
  '/midwife-ed-program',
  '/contact',
  '/donate',
  '/employment',
];

export default function sitemap() {
  const lastModified = new Date();
  return PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
  }));
}
