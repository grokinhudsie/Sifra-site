/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
  },
  async redirects() {
    return [
      // Canonical host is www.sifrabirth.com; 308 the apex there. The `has`
      // host match means this can never loop on the www host.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sifrabirth.com' }],
        destination: 'https://www.sifrabirth.com/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'X-Content-Type-Options', value: 'nosniff' }],
      },
      // Public images are stable but not content-hashed, so cache for a day
      // and serve stale while revalidating (no `immutable` — filenames can be
      // reused). Next's own /_next/static assets are already immutable.
      {
        source: '/(images|og)/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ];
  },
};

export default nextConfig;
