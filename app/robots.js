import { SITE_URL } from './lib/seo';

// /build-log and /qr-donate are intentionally NOT disallowed here: they carry
// a noindex meta tag instead, which only works if crawlers can fetch the page.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
