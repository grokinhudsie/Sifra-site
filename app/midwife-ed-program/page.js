import MidwifeSection from '../components/sections/MidwifeSection';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Midwife Education Program | Sifra Birth Center',
  description:
    'Sifra Birth Center will train student midwives in Merrill, Wisconsin, offering clinical experience and a fellowship program for newly licensed midwives.',
  path: '/midwife-ed-program',
});

export default function MidwifeEdProgramPage() {
  return <MidwifeSection />;
}
