import ParallaxHero from './ParallaxHero';
import ContactForm from './ContactForm';

export default function HomeSections() {
  return (
    <>
      <section id="home" className="fade-section">
        <ParallaxHero>
          <div className="hero-content">
            <h1>Welcoming New Life With Love & Care</h1>
            <p>
              A peaceful, family-centered birthing experience supported by
              compassionate midwives and holistic care.
            </p>
          </div>
        </ParallaxHero>
      </section>

      <section id="about" className="fade-section" style={{ background: '#fff8f3' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '3rem' }}>About Us</h2>
          <div className="about-grid">
            <img
              src="/About us hero image/AdobeStock_269043563.jpeg"
              alt="Midwife with mother and newborn"
            />
            <div className="about-text">
              <p>
                Sifra Birthing Center was founded on a simple belief: birth is a
                sacred, natural journey that deserves to be honored. &apos;Sifra&apos; is taken from the Bible in Exodus chapter 1, and derives
                from the Hebrew midwife called &apos;Shiprah&apos;, who is recorded as
                having disobeyed Pharoah&apos;s order to kill all male Hebrew
                infants. This name choice attaches the birth center to a
                strong, biblical value system that recognises the sacredness
                and dignity of all life.
              </p>
              <p>
                Our certified midwives and nurses are committed to providing
                safe, holistic, and empowering care — where you and your
                child&apos;s needs always come first.
              </p>
            </div>
          </div>

          <h3 className="section-title our-values-title" style={{ marginTop: '5rem' }}>Anabaptist Health Ministries</h3>
          <p className="section-subtitle">Placeholder text describing our connection to Anabaptist Health Ministries and the shared mission of compassionate, faith-rooted care.</p>

          <h3 className="section-title our-values-title" style={{ marginTop: '5rem' }}>Our Values</h3>
          <p className="section-subtitle">The principles that guide everything we do.</p>
          <div className="features">
            <div className="feature">
              <div className="feature-img-circle">
                <img src="/Our Values images/AdobeStock_96188994.jpeg" alt="Natural & Holistic" />
              </div>
              <h3>Natural & Holistic</h3>
              <p>We honor the body&apos;s innate ability to birth, supporting it with gentle, evidence-based care.</p>
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

          <h3 className="section-title our-values-title" style={{ marginTop: '5rem' }}>Leadership & Staff</h3>
          <p className="section-subtitle">Placeholder text introducing the leadership team and staff members who serve at Sifra Birthing Center.</p>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="why" className="fade-section bg-sand">
        <div className="container">
          <h2 className="section-title">Why Sifra</h2>
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

      <hr className="section-divider" />

      <section id="construction" className="fade-section bg-sage">
        <div className="container">
          <h2 className="section-title">Construction Update</h2>
          <p className="section-subtitle">
            Follow along as Sifra Birthing Center takes shape.
          </p>
          <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
            <p>Construction progress updates coming soon.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="midwife" className="fade-section bg-sand">
        <div className="container">
          <h2 className="section-title">Midwife Education Program</h2>
          <p className="section-subtitle">
            Training the next generation of compassionate, skilled midwives.
          </p>
          <div style={{ textAlign: 'center', color: 'var(--muted)' }}>
            <p>Program details coming soon.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="contact" className="fade-section bg-sage">
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Get In Touch</h2>
          <p className="section-subtitle">
            We&apos;d love to hear from you and answer any questions.
          </p>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Visit Us</h3>
              <div className="contact-items-wrap">
                <div className="contact-item">
                  <span className="icon"><i className="fi fi-rs-marker"></i></span>
                  <div>
                    <strong>Address</strong>
                    <span>Coming soon!</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon"><i className="fi fi-rr-phone-flip"></i></span>
                  <div>
                    <strong>Phone</strong>
                    <span>715-873-3440</span>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="icon"><i className="fi fi-rr-envelope"></i></span>
                  <div>
                    <strong>Email</strong>
                    <span>questions@sifrabirth.com</span>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
