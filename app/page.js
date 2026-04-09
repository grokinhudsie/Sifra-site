import Link from 'next/link';
import ParallaxHero from './components/ParallaxHero';

export default function HomePage() {
  return (
    <>
      <ParallaxHero>
        <div className="hero-content">
          <h1>Welcoming New Life With Love & Care</h1>
          <p>
            A peaceful, family-centered birthing experience supported by
            compassionate midwives and holistic care.
          </p>
          <Link href="/contact" className="btn">Learn More</Link>
        </div>
      </ParallaxHero>

      <section>
        <div className="container">
          <h2 className="section-title">The Sifra Difference</h2>
          <p className="section-subtitle">
            At Sifra, every birth story matters. We blend gentle, evidence-based care
            with the warmth of home.
          </p>
          <div className="features">
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Landing card images/AdobeStock_457881926.jpeg" alt="Personalized Care" />
              </div>
              <h3>Personalized Care</h3>
              <p>One-on-one support from dedicated midwives throughout your pregnancy and birth.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Landing card images/t2_8 - Photo.jpg" alt="Homelike Suites" />
              </div>
              <h3>Homelike Suites</h3>
              <p>Private, calming birthing rooms designed for comfort, privacy, and family presence.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Landing card images/AdobeStock_265649187.jpeg" alt="Postpartum Support" />
              </div>
              <h3>Postpartum Support</h3>
              <p>Continued care for you and your newborn, including lactation and wellness visits.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'linear-gradient(135deg, var(--cream), #fce4d6)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Begin Your Journey With Us</h2>
          <Link href="/contact" className="btn">Get In Touch</Link>
        </div>
      </section>
    </>
  );
}
