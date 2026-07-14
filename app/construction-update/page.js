import ConstructionSection from '../components/sections/ConstructionSection';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Construction Updates | Sifra Birth Center, Merrill WI',
  description:
    'Follow construction progress on Sifra Birth Center in Merrill, Wisconsin — timeline, architectural renderings, and updates as the birth center takes shape.',
  path: '/construction-update',
});

export default function ConstructionUpdatePage() {
  return <ConstructionSection />;
}
