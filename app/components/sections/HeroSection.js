import { preload } from 'react-dom';
import ParallaxHero from '../ParallaxHero';

export default function HeroSection() {
  // The hero background (CSS background-image on .hero-bg) is the LCP element;
  // preload it with high priority so it doesn't wait on stylesheet parsing.
  preload('/images/hero/landing-hero.webp', { as: 'image', fetchPriority: 'high' });

  return (
    <section id="home" className="fade-section">
      <ParallaxHero>
        <div className="hero-content">
          <img
            className="hero-logo"
            src="/images/logos/sifra-logo.webp"
            alt="Sifra Birth Center"
            width={676}
            height={514}
            fetchPriority="high"
          />
          <h1>Welcoming New Life With Love & Care</h1>
          <p>
            A&nbsp;&nbsp;<span style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '1.5em', WebkitTextStroke: '.5px currentColor' }}>peaceful</span>, family-centered birthing experience{' '}
            <br className="hero-break" />
            supported by <span style={{ fontFamily: '"elaina-script", sans-serif', fontWeight: 400, fontStyle: 'normal', fontSize: '1.5em', WebkitTextStroke: '.5px currentColor' }}>compassionate</span> midwives delivering holistic care.
          </p>
        </div>
      </ParallaxHero>
    </section>
  );
}
