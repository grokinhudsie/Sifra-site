import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <p className="footer-cta">
        <Link href="/donate" className="btn">Donate</Link>
      </p>
      <p>
        <Link href="/employment">Employment at Sifra</Link>
      </p>
      <Link
        href="/build-log"
        className="build-log-icon build-log-icon--footer"
        aria-label="Build Log"
        title="Build Log"
      >
        <i className="fi fi-rr-time-past" aria-hidden="true"></i>
      </Link>
      <p>
        © {new Date().getFullYear()} Sifra Birthing Center
      </p>
    </footer>
  );
}
