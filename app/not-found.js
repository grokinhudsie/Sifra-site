import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Sifra Birth Center',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div style={{ background: 'linear-gradient(135deg, var(--cream), #fce4d6)', flex: 1 }}>
      <header className="page-header" style={{ background: 'transparent' }}>
        <h1>Page Not Found</h1>
        <p>Sorry — we couldn&apos;t find the page you were looking for.</p>
      </header>
      <section>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            paddingBottom: '4rem',
          }}
        >
          <Link href="/" className="btn">Back to Home</Link>
          <Link href="/contact" className="btn">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}
