import AboutSection from '../components/sections/AboutSection';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Who We Are | Midwives & Leadership at Sifra Birth Center',
  description:
    'Meet the midwives and leadership behind Sifra Birth Center — a faith-based nonprofit bringing compassionate midwifery care to Merrill and Northern Wisconsin.',
  path: '/about',
});

export default function AboutPage() {
  return <AboutSection />;
}
