import ContactForm from './ContactForm';

export const metadata = {
  title: 'Contact — Sifra Birthing Center',
  description: "We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <>
      <header className="page-header">
        <h1>Get In Touch</h1>
        <p>We&apos;d love to hear from you and answer any questions.</p>
      </header>

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Visit Us</h3>
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <span>123 Serenity Lane<br />Wellness District, CA 90210</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <span>(555) 123-4567</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <span>hello@sifrabirthing.com</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">🕒</span>
                <div>
                  <strong>Hours</strong>
                  <span>Mon–Fri: 8am – 6pm<br />24/7 for birthing families</span>
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
