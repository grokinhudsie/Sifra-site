import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await sgMail.send({
      to: 'questions@sifrabirth.com',
      from: process.env.SENDGRID_FROM_EMAIL,
      replyTo: email,
      subject: `${subject || 'Contact Form'} — from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('SendGrid error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
