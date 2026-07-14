import WhySection from '../components/sections/WhySection';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: "Why Sifra | Northern Wisconsin's Maternity Care Crisis",
  description:
    'Rural hospitals across Northern Wisconsin keep closing their delivery units. Learn why the region needs a freestanding birth center and how Sifra will help.',
  path: '/why-sifra',
});

export default function WhySifraPage() {
  return <WhySection />;
}
