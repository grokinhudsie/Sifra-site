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
              compassionate midwives delivering holistic care.
            </p>
          </div>
        </ParallaxHero>
      </section>

      <section id="why" className="fade-section bg-sand">
        <div className="container">
          <h2 className="section-title">Why Sifra</h2>

          <div className="why-block">
            <h3 className="why-heading">The Maternal Healthcare Crisis</h3>
            <ol className="why-list">
              <li>
                Local midwives are overwhelmed. As a result, at least one out
                of three mothers seeking midwifery care is turned away due to
                the lack of midwives.
              </li>
            </ol>
            <img
              className="why-img"
              src="/Why Sifra images/maternal healthcare crisis graphic LARGE.webp"
              alt="Graphic illustrating the maternal healthcare crisis"
            />
            <ol className="why-list" start={2}>
              <li>
                The need to hire more midwives is urgent, however without a
                birth center it is almost impossible to recruit additional
                midwives.
              </li>
              <li>
                Rural hospitals in Wisconsin continue to close labor and
                delivery units.
              </li>
            </ol>
            <p className="why-img-title">
              Rural Hospitals in WI Offering Obstetric Delivery Services
            </p>
            <img
              className="why-img why-img--titled"
              src="/Why Sifra images/decline of hospital delivery units graph LARGE.webp"
              alt="Graph showing the decline of hospital labor and delivery units"
            />
            <ol className="why-list" start={4}>
              <li>
                Maternal death is rising and has doubled in the last two
                decades.
                <span className="why-cite">
                  (Shellpfeffer et al., 2015) (KFF/CDC) (March of Dimes, 2025)
                </span>
              </li>
              <li>
                As a result, women freebirth, drive too many miles to find a
                place to deliver, or settle for birth options they aren&apos;t
                comfortable with.
              </li>
            </ol>
          </div>

          <div className="why-block">
            <h3 className="why-heading">Sifra&apos;s Unique Offering</h3>
            <div className="why-split">
              <ol className="why-list why-list--arrow">
                <li>
                  Comprehensive Midwifery Care that includes:
                  <ul className="why-sublist">
                    <li>Compassionate, personal care</li>
                    <li>Regular, comprehensive prenatal visits</li>
                    <li>Routine labs and imaging</li>
                    <li>Personalized birth experience</li>
                    <li>Emotional support</li>
                    <li>Lactation support</li>
                    <li>Ability to retain your own decision making</li>
                  </ul>
                </li>
                <li>Newborn exams &amp; screening</li>
                <li>Homelike birth suites</li>
                <li>A 20 minute drive to emergency medical care</li>
                <li>Affordable &amp; transparent pricing</li>
                <li>Opportunities for midwifery students</li>
              </ol>
              <img
                className="why-img"
                src="/Why Sifra images/room rendering 1.jpg"
                alt="Rendering of a homelike birth suite at Sifra Birthing Center"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="about" className="fade-section" style={{ background: '#fff8f3' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '3rem' }}>Who We Are</h2>
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

          <h3 className="section-title" style={{ marginTop: '5rem' }}>Vision &amp; Mission</h3>
          <div className="vision-mission-grid">
            <div className="feature" style={{ textAlign: 'left' }}>
              <h3>Our Vision</h3>
              <p>We envision Northern Wisconsin to be a place where exceptional midwifery care is accessible, safe and affordable for everyone.</p>
            </div>
            <div className="feature" style={{ textAlign: 'left' }}>
              <h3>Our Mission</h3>
              <p>At Sifra we will build an exceptional team of midwives, and build a culture of life defined by our faith-based values, high standards of patient-centered care, and respect for our staff.</p>
            </div>
          </div>

          <h3 className="section-title" style={{ marginTop: '5rem' }}>Anabaptist Health Ministries</h3>
          <p className="section-subtitle">Placeholder text describing our connection to Anabaptist Health Ministries and the shared mission of compassionate, faith-rooted care.</p>

          <h3 className="section-title" style={{ marginTop: '5rem' }}>Our Values</h3>
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

          <h3 className="section-title" style={{ marginTop: '5rem' }}>Leadership & Staff</h3>
          <p className="section-subtitle">Placeholder text introducing the leadership team and staff members who serve at Sifra Birthing Center.</p>
          <div className="features">
            <div className="feature">
              <div className="feature-img-circle feature-img-placeholder">
                <span>Photo</span>
              </div>
              <h3>Name Placeholder</h3>
              <p>Role placeholder — a short bio introducing this team member and their role at Sifra Birthing Center.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle feature-img-placeholder">
                <span>Photo</span>
              </div>
              <h3>Name Placeholder</h3>
              <p>Role placeholder — a short bio introducing this team member and their role at Sifra Birthing Center.</p>
            </div>
            <div className="feature">
              <div className="feature-img-circle feature-img-placeholder">
                <span>Photo</span>
              </div>
              <h3>Name Placeholder</h3>
              <p>Role placeholder — a short bio introducing this team member and their role at Sifra Birthing Center.</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      <section id="construction" className="fade-section bg-sage">
        <div className="container">
          <h2 className="section-title">Construction Updates</h2>
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
