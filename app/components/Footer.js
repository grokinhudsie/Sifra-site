import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p>
        <Link href="/employment">Employment at Sifra</Link>
      </p>
      <p>
        © {new Date().getFullYear()} Sifra Birthing Center
      </p>
    </footer>
  );
}
