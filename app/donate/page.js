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
    <section className="donate-page">
      <div className="donate-card">
        <div className="donate-main">
          <div className="donate-logo">
            <img
              src="/Logos/Sifra Birth Center Logo With Tagline_Vertical Lockup_Two-Color_QR.webp"
              alt="Sifra Birth Center"
            />
          </div>

          <div className="donate-cta">
            <h1>Donate</h1>
            <span className="donate-rule" />
            <p className="donate-tagline">
              Every gift helps bring{' '}
              <span style={{ whiteSpace: 'nowrap' }}>Sifra Birth Center</span>{' '}
              closer to completion.
            </p>

            <div className="donate-buttons">
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
                    padding: '1rem 0.5rem',
                  }}
                >
                  <BrandLogo name={opt.name} />
                  {opt.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <footer className="donate-credit">
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
