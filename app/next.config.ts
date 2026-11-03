import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'outmanelbouhali.online' }],
        destination: 'https://www.outmanelbouhali.online/:path*',
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.outmanelbouhali.online',
      },
      {
        protocol: 'https',
        hostname: 'studionamma.vercel.app',
      },
    ],
  },
};

export default nextConfig;
