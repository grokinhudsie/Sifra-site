import ContactSection from '../components/sections/ContactSection';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Contact Sifra Birth Center | Merrill & Gleason, WI',
  description:
    'Questions about Sifra Birth Center? Call 715-873-3440, email contact@sifrabirth.com, or send a message — serving Merrill, Gleason, and Northern Wisconsin.',
  path: '/contact',
});

export default function ContactPage() {
  return <ContactSection />;
}
