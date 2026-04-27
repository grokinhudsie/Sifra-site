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
  const isUnlock = headers().get('x-pathname') === '/unlock';

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zbu8uzu.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css" />
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css" />
      </head>
      <body>
        <SmoothScroll />
        {!isUnlock && <Navbar />}
        <main>{children}</main>
        {!isUnlock && <Footer />}
      </body>
    </html>
  );
}
