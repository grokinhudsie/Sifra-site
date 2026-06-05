import { headers } from 'next/headers';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

export const metadata = {
  title: 'Sifra Birthing Center — Where New Life Begins',
  description:
    'A peaceful, family-centered birthing experience with compassionate midwives and modern care.',
};

export default function RootLayout({ children }) {
  const pathname = headers().get('x-pathname');
  const bare = pathname === '/unlock' || pathname === '/qr-donate';

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zbu8uzu.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css" />
      </head>
      <body>
        <SmoothScroll />
        {!bare && <Navbar />}
        <main>{children}</main>
        {!bare && <Footer />}
      </body>
    </html>
  );
}
