import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  // For now, log the inquiry server-side. Swap this for an email service
  // (Resend, SendGrid, etc.) or a database insert when ready.
  console.log('New contact inquiry:', { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
