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
