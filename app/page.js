import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Welcoming New Life With Love & Care</h1>
          <p>
            A peaceful, family-centered birthing experience supported by
            compassionate midwives and modern care.
          </p>
          <Link href="/contact" className="btn">Schedule a Visit</Link>
        </div>
      </header>

      <section>
        <div className="container">
          <h2 className="section-title">Our Promise To You</h2>
          <p className="section-subtitle">
            At Sifra, every birth story matters. We blend evidence-based care
            with the warmth of home.
          </p>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🤱</div>
              <h3>Personalized Care</h3>
              <p>One-on-one support from dedicated midwives throughout your pregnancy and birth.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏡</div>
              <h3>Homelike Suites</h3>
              <p>Private, calming birthing rooms designed for comfort, privacy, and family presence.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">💗</div>
              <h3>Postpartum Support</h3>
              <p>Continued care for you and your baby, including lactation and wellness visits.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fce4d6' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Begin Your Journey With Us</h2>
          <p className="section-subtitle">
            Tour our center and meet the team who will walk beside you.
          </p>
          <Link href="/contact" className="btn">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
