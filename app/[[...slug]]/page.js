import { notFound } from 'next/navigation';
import HomeSections from '../components/HomeSections';
import ScrollToSection from '../components/ScrollToSection';
import FadeInSections from '../components/FadeInSections';
import { pageMetadata } from '../lib/seo';

const SLUG_TO_SECTION = {
  'about': 'about',
  'construction-update': 'construction',
  'why-sifra': 'why',
  'midwife-ed-program': 'midwife',
  'contact': 'contact',
};

// Each route gets unique, location-targeted metadata even though they all
// render the same one-page content (the route just scrolls to its section).
const SLUG_TO_META = {
  '': {
    title: 'Sifra Birth Center | Freestanding Birth Center in Merrill, WI',
    description:
      'A proposed freestanding birth center and midwife education ministry in Merrill, Wisconsin — bringing family-centered midwifery care to Northern Wisconsin.',
    path: '/',
  },
  'why-sifra': {
    title: "Why Sifra | Northern Wisconsin's Maternity Care Crisis",
    description:
      'Rural hospitals across Northern Wisconsin keep closing their delivery units. Learn why the region needs a freestanding birth center and how Sifra will help.',
    path: '/why-sifra',
  },
  'about': {
    title: 'Who We Are | Midwives & Leadership at Sifra Birth Center',
    description:
      'Meet the midwives and leadership behind Sifra Birth Center — a faith-based nonprofit bringing compassionate midwifery care to Merrill and Northern Wisconsin.',
    path: '/about',
  },
  'construction-update': {
    title: 'Construction Updates | Sifra Birth Center, Merrill WI',
    description:
      'Follow construction progress on Sifra Birth Center in Merrill, Wisconsin — timeline, architectural renderings, and updates as the birth center takes shape.',
    path: '/construction-update',
  },
  'midwife-ed-program': {
    title: 'Midwife Education Program | Sifra Birth Center',
    description:
      'Sifra Birth Center will train student midwives in Merrill, Wisconsin, offering clinical experience and a fellowship program for newly licensed midwives.',
    path: '/midwife-ed-program',
  },
  'contact': {
    title: 'Contact Sifra Birth Center | Merrill & Gleason, WI',
    description:
      'Questions about Sifra Birth Center? Call 715-873-3440, email contact@sifrabirth.com, or send a message — serving Merrill, Gleason, and Northern Wisconsin.',
    path: '/contact',
  },
};

export function generateStaticParams() {
  return [{ slug: [] }, ...Object.keys(SLUG_TO_SECTION).map((s) => ({ slug: [s] }))];
}

export function generateMetadata({ params }) {
  const slug = params.slug?.[0] ?? '';
  const meta = SLUG_TO_META[slug];
  if (!meta) return {};
  return pageMetadata(meta);
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
