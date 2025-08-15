import { NextResponse } from 'next/server';

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Replace with your image domain
    formats: ['image/avif', 'image/webp']
},
  optimizedImages: {
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: isProd, // Optimize images only in production
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
},
        ]
},
    ];
  }
};

export default nextConfig;