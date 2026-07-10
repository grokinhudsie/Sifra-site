import { headers } from 'next/headers';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import { SITE_URL, SITE_NAME, OG_IMAGE } from './lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Sifra Birth Center | Freestanding Birth Center in Merrill, WI',
  description:
    'A proposed freestanding birth center and midwife education ministry in Merrill, Wisconsin — bringing family-centered midwifery care to Northern Wisconsin.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    images: [OG_IMAGE],
  },
  twitter: { card: 'summary_large_image' },
};

// Sitewide Organization schema. @id lets other JSON-LD blocks (e.g. the
// DonateAction on /donate) reference this entity instead of redefining it.
const ORGANIZATION_JSONLD = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'NGO'],
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: 'Anabaptist Health Ministries, Inc.',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logos/sifra-logo.webp`,
  description:
    'A freestanding birth center and midwife education ministry proposed for Merrill, Wisconsin, offering family-centered midwifery care to Northern Wisconsin.',
  telephone: '+1-715-873-3440',
  email: 'contact@sifrabirth.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'N5265 County Rd X',
    addressLocality: 'Gleason',
    addressRegion: 'WI',
    postalCode: '54435',
    addressCountry: 'US',
  },
  areaServed: 'Northern Wisconsin',
  nonprofitStatus: 'Nonprofit501c3',
};

export default function RootLayout({ children }) {
  const pathname = headers().get('x-pathname');
  const bare = pathname === '/qr-donate';

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://p.typekit.net" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.typekit.net/zbu8uzu.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_JSONLD) }}
        />
        <SmoothScroll />
        {!bare && <Navbar />}
        <main>{children}</main>
        {!bare && <Footer />}
      </body>
    </html>
  );
}
