import BrandLogo from '../components/BrandLogo';
import { pageMetadata, SITE_URL } from '../lib/seo';

export const metadata = pageMetadata({
  title: 'Donate | Support Sifra Birth Center',
  description:
    'Your gift helps build Sifra Birth Center, a freestanding birth center serving Northern Wisconsin families. Give securely online by PayPal or card.',
  path: '/donate',
});

// Attaches a DonateAction to the sitewide Organization entity (defined in
// app/layout.js) via its @id.
const DONATE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': `${SITE_URL}/#organization`,
  potentialAction: {
    '@type': 'DonateAction',
    name: 'Donate to Sifra Birth Center',
    target: `${SITE_URL}/donate`,
  },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(DONATE_JSONLD) }}
      />
      <div className="donate-card">
        <div className="donate-main">
          <div className="donate-logo">
            <img
              src="/images/logos/sifra-logo-vertical-tagline.webp"
              alt="Sifra Birth Center"
              width={524}
              height={386}
            />
          </div>

          <div className="donate-cta">
            <h1>Donate</h1>
            <span className="donate-rule" />
            <p className="donate-tagline">
              Every gift helps bring the urgently needed{' '}
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

        <p
          style={{
            marginTop: '1.25rem',
            color: 'var(--muted)',
            fontSize: '0.7rem',
            lineHeight: 1.6,
            textAlign: 'left',
          }}
        >
          Information concerning Anabaptist Health Ministries, Inc., including
          financial or charitable purposes, may be obtained, without cost, by
          writing to its principal place of business at the following address:
          Anabaptist Health Ministries, Inc., N5265 County Rd X, Gleason WI 54435
          or by calling 715-873-3440. Anabaptist Health Ministries, Inc. was
          formed in the state of Wisconsin for the purpose of: Show God&rsquo;s
          love by revolutionizing healthcare and health education based on
          Biblical values and principles. In addition, residents of the following
          states may obtain financial and/or licensing information from their
          states, as indicated. Your contributions may be eligible for a tax
          deduction in accordance with applicable law. Registration in a state
          does not imply endorsement, approval, or recommendation of Anabaptist
          Health Ministries, Inc. by the state. Wisconsin: A financial statement
          of the charitable organization disclosing assets, liabilities, fund
          balances, revenue, and expenses for the preceding fiscal year will be
          provided to any person upon request.
        </p>
      </div>
    </section>
  );
}
