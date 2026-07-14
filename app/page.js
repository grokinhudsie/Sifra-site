import HeroSection from './components/sections/HeroSection';
import { pageMetadata } from './lib/seo';

export const metadata = pageMetadata({
  title: 'Sifra Birth Center | Freestanding Birth Center in Merrill, WI',
  description:
    'A proposed freestanding birth center and midwife education ministry in Merrill, Wisconsin — bringing family-centered midwifery care to Northern Wisconsin.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* Additional home content goes here, between the hero and the footer. */}
    </>
  );
}
