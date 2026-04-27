import { NextResponse } from 'next/server';

const PUBLIC_PATHS = new Set(['/unlock', '/api/unlock']);

async function expectedToken(secret) {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode('unlocked'));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-pathname', pathname);

  if (PUBLIC_PATHS.has(pathname)) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const secret = process.env.SITE_GATE_SECRET;
  const token = req.cookies.get('sifra_gate')?.value;

  if (secret && token) {
    const expected = await expectedToken(secret);
    if (token === expected) {
      return NextResponse.next({ request: { headers: requestHeaders } });
    }
  }

  if (pathname.startsWith('/api/')) {
    return NextResponse.json({ error: 'locked' }, { status: 401 });
  }

  const url = req.nextUrl.clone();
  url.pathname = '/unlock';
  url.search = '';
  url.searchParams.set('next', pathname + (req.nextUrl.search || ''));
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|woff|woff2|ttf|css|js|map|mp4|webm)$).*)',
  ],
};
