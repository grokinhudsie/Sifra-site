export const metadata = {
  title: 'About — Sifra Birthing Center',
  description: 'Rooted in compassion. Built for families.',
};

export default function AboutPage() {
  return (
    <>
      <header className="page-header">
        <h1>Why Sifra</h1>

      </header>

      <section>
        <div className="container">
          <div className="about-grid">
            <img
              src="/About us hero image/AdobeStock_269043563.jpeg"
              alt="Midwife with mother and newborn"
            />
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Sifra Birthing Center was founded on a simple belief: birth is a
                sacred, natural journey that deserves to be honored. 'Sifra' is taken from the Bible in Exodus chapter 1, and derives
                from the Hebrew midwife called 'Shiprah', who is recorded as
                having disobeyed Pharoah's order to kill all male Hebrew
                infants. This name choice attaches the birth center to a
                strong, biblical value system that recognises the sacredness
                and dignity of all life.
              </p>
              <p>
                Our certified midwives and nurses are committed to providing
                safe, holistic, and empowering care — where you and your
                child's needs always come first.
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
              <div className="feature-img-circle">
                <img src="/Our Values images/AdobeStock_96188994.jpeg" alt="Natural & Holistic" />
              </div>
              <h3>Natural & Holistic</h3>
              <p>We honor the body's innate ability to birth, supporting it with gentle, evidence-based care.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Our Values images/AdobeStock_624866327.jpeg" alt="Family-Centered" />
              </div>
              <h3>Family-Centered</h3>
              <p>We welcome partners, and loved ones as part of your birth team.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Our Values images/AdobeStock_616208707.jpeg" alt="Excellence In Care" />
              </div>
              <h3>Excellence In Care</h3>
              <p>Our experienced team meets the highest standards of safety and medical practice.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
