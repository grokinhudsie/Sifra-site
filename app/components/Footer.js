import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Sifra Birthing Center · Made with love ·{' '}
        <Link href="/contact">Contact Us</Link>
      </p>
    </footer>
  );
}
