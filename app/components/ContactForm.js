'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus({ ok: true, msg: 'Thank you! We will be in touch soon.' });
      e.target.reset();
    } catch {
      setStatus({ ok: false, msg: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Send Us A Message</h3>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <select id="subject" name="subject" defaultValue="General Inquiry">
          <option>General Inquiry</option>
          <option>Schedule a Tour</option>
          <option>Prenatal Care</option>
          <option>Postpartum Support</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required />
      </div>
      <button type="submit" className="btn" disabled={loading}>
        {loading ? 'Sending…' : 'Send Message'}
      </button>
      {status && (
        <p className="form-status" style={{ color: status.ok ? 'var(--primary-dark)' : '#b00020' }}>
          {status.msg}
        </p>
      )}
    </form>
  );
}
