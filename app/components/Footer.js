import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()} Sifra Birthing Center
      </p>
    </footer>
  );
}
