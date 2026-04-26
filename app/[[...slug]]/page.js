import { notFound } from 'next/navigation';
import HomeSections from '../components/HomeSections';
import ScrollToSection from '../components/ScrollToSection';
import FadeInSections from '../components/FadeInSections';

const SLUG_TO_SECTION = {
  'about': 'about',
  'construction-update': 'construction',
  'why-sifra': 'why',
  'midwife-ed-program': 'midwife',
  'contact': 'contact',
};

const SLUG_TO_META = {
  'about':               { title: 'About — Sifra Birthing Center' },
  'construction-update': { title: 'Construction Update — Sifra Birthing Center' },
  'why-sifra':           { title: 'Why Sifra — Sifra Birthing Center' },
  'midwife-ed-program':  { title: 'Midwife Education — Sifra Birthing Center' },
  'contact':             { title: 'Contact — Sifra Birthing Center' },
};

export function generateStaticParams() {
  return [{ slug: [] }, ...Object.keys(SLUG_TO_SECTION).map((s) => ({ slug: [s] }))];
}

export function generateMetadata({ params }) {
  const slug = params.slug?.[0];
  return SLUG_TO_META[slug] ?? { title: 'Sifra Birthing Center — Where New Life Begins' };
}

export default function Page({ params }) {
  const slug = params.slug?.[0];
  if (slug && !(slug in SLUG_TO_SECTION)) notFound();
  const target = slug ? SLUG_TO_SECTION[slug] : null;

  return (
    <>
      <ScrollToSection target={target} />
      <FadeInSections />
      <HomeSections />
    </>
  );
}
