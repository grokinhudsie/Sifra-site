export const metadata = {
  title: 'About — Sifra Birthing Center',
  description: 'Rooted in compassion. Built for families.',
};

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <h1>About Sifra</h1>
        <p>Rooted in compassion. Built for families.</p>
      </header>

      <section>
        <div className="container">
          <div className="about-grid">
            <img
              src="https://images.unsplash.com/photo-1544126592-807ade215a0b?w=900"
              alt="Midwife with mother and newborn"
            />
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Sifra Birthing Center was founded on a simple belief: birth is a
                sacred, natural journey that deserves to be honored. For over a
                decade, we have supported thousands of families in welcoming
                their little ones into the world.
              </p>
              <p>
                Our certified midwives and nurses are committed to providing
                safe, holistic, and empowering care — where your voice, your
                body, and your story come first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do.
          </p>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🌿</div>
              <h3>Natural & Holistic</h3>
              <p>We honor the body's innate ability to birth, supporting it with gentle, evidence-based care.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🤝</div>
              <h3>Family-Centered</h3>
              <p>We welcome partners, siblings, and loved ones as part of your birth team.</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✨</div>
              <h3>Excellence In Care</h3>
              <p>Our experienced team meets the highest standards of safety and medical practice.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
