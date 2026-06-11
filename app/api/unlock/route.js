import { NextResponse } from 'next/server';
import crypto from 'node:crypto';

export const runtime = 'nodejs';

function sha256(value) {
  return crypto.createHash('sha256').update(String(value)).digest();
}

function safeNext(value) {
  if (typeof value !== 'string') return '/';
  if (!value.startsWith('/') || value.startsWith('//')) return '/';
  return value;
}

export async function POST(req) {
  const form = await req.formData();
  const submittedUser = String(form.get('username') || '');
  const submittedPass = String(form.get('passcode') || '');
  const next = safeNext(form.get('next'));

  const expectedUser = process.env.SITE_USERNAME || '';
  const expectedPass = process.env.SITE_PASSCODE || '';
  const secret = process.env.SITE_GATE_SECRET || '';

  const userOk = expectedUser.length > 0 &&
    crypto.timingSafeEqual(sha256(submittedUser), sha256(expectedUser));
  const passOk = expectedPass.length > 0 &&
    crypto.timingSafeEqual(sha256(submittedPass), sha256(expectedPass));

  // Bitwise AND so both comparisons always run (no short-circuit timing leak).
  const ok = (userOk & passOk) === 1;

  if (!ok || !secret) {
    const url = new URL('/unlock', req.url);
    url.searchParams.set('error', '1');
    if (next !== '/') url.searchParams.set('next', next);
    return NextResponse.redirect(url, 303);
  }

  const token = crypto.createHmac('sha256', secret).update('unlocked').digest('hex');
  const res = NextResponse.redirect(new URL(next, req.url), 303);
  res.cookies.set('sifra_gate', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
