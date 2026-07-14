import ContactForm from '../ContactForm';

export default function ContactSection() {
  return (
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
                  <span>N5265 County Rd X<br />Gleason WI, 54435</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><i className="fi fi-rr-phone-flip"></i></span>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+17158733440">715-873-3440</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon"><i className="fi fi-rr-envelope"></i></span>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:contact@sifrabirth.com">contact@sifrabirth.com</a>
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
