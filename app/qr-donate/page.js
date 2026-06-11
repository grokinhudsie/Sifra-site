import BrandLogo from '../components/BrandLogo';

export const metadata = {
  title: 'Donate — Sifra Birthing Center',
  description:
    'Support Sifra Birthing Center. Give via Venmo, PayPal, or card (Stripe).',
};

// Three ways to give. Brand-colored buttons, official marks.
// TODO: swap the placeholder hrefs below for the real destinations.
const OPTIONS = [
  // Temporarily hidden until real links are ready:
  // {
  //   name: 'venmo',
  //   label: 'Donate with Venmo',
  //   color: '#008CFF',
  //   href: 'https://venmo.com/u/YOUR-VENMO-HANDLE', // TODO: real Venmo link
  // },
  {
    name: 'paypal',
    label: 'Donate with PayPal',
    color: '#003087',
    href: 'https://www.paypal.com/donate/?hosted_button_id=NYBAXGYRU7JUU',
  },
  {
    name: 'stripe',
    label: 'Donate with Card',
    color: '#635BFF',
    href: 'https://donate.stripe.com/8x228q5OC3Wd7Ts2Eg3ZK00',
  },
];

export default function DonatePage() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 1.5rem',
        background:
          'radial-gradient(120% 120% at 50% 0%, var(--white) 0%, var(--cream) 70%)',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '440px',
          background: 'var(--white)',
          borderRadius: '24px',
          border: '1px solid rgba(92, 49, 96, 0.10)',
          boxShadow: '0 24px 60px rgba(92, 49, 96, 0.16)',
          padding: '3.25rem 2.5rem 2.5rem',
          textAlign: 'center',
        }}
      >
        <img
          src="/Logos/Sifra Birth Center Logo With Tagline_Vertical Lockup_Two-Color_QR.webp"
          alt="Sifra Birth Center"
          style={{
            display: 'block',
            width: '180px',
            maxWidth: '70%',
            height: 'auto',
            margin: '0 auto 2rem',
          }}
        />
        <h1
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
            color: 'var(--primary-dark)',
            marginBottom: '1.1rem',
          }}
        >
          Donate
        </h1>

        <span
          style={{
            display: 'block',
            width: '54px',
            height: '2px',
            margin: '0 auto 1.4rem',
            background: 'var(--accent)',
            borderRadius: '2px',
          }}
        />

        <p
          style={{
            color: 'var(--text)',
            fontStyle: 'italic',
            fontSize: '1.15rem',
            lineHeight: 1.6,
            margin: '0 auto 2.5rem',
            maxWidth: '340px',
          }}
        >
          Every gift helps bring Sifra Birth Center closer to completion.
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
          }}
        >
          {OPTIONS.map((opt) => (
            <a
              key={opt.name}
              href={opt.href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                background: opt.color,
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
              }}
            >
              <BrandLogo name={opt.name} />
              {opt.label}
            </a>
          ))}
        </div>

        <footer
          style={{
            marginTop: '2.25rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(92, 49, 96, 0.10)',
            color: 'var(--muted)',
            fontSize: '0.8rem',
            lineHeight: 1.6,
            background: 'transparent',
            textAlign: 'center',
          }}
        >
          Official{' '}
          <a href="/" style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>
            Sifra Birth Center
          </a>{' '}
          donation portal, a project of Anabaptist Health Ministries, Inc.
        </footer>
      </div>
    </section>
  );
}
