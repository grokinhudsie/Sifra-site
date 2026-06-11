import { NextResponse } from 'next/server';

// The site is fully public. This middleware exists only to expose the request
// path to the root layout (via the x-pathname header) so it can render a bare
// layout for /qr-donate.
export function middleware(req) {
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-pathname', req.nextUrl.pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|svg|webp|avif|ico|woff|woff2|ttf|css|js|map|mp4|webm)$).*)',
  ],
};
