export const SITE_URL = 'https://www.sifrabirth.com';
export const SITE_NAME = 'Sifra Birth Center';

export const OG_IMAGE = {
  url: '/og/og-default.png',
  width: 1200,
  height: 630,
  alt: 'Architectural rendering of Sifra Birth Center in Merrill, Wisconsin',
};

// Builds the full Metadata object for a page: title, description, canonical,
// Open Graph, and Twitter card. Relative URLs resolve against metadataBase
// (set in app/layout.js). `path` must start with "/".
export function pageMetadata({ title, description, path, noindex = false, canonical }) {
  return {
    title,
    description,
    alternates: { canonical: canonical ?? path },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
