// D:\linde-nextjs-Api-test\next.config.ts

import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        // Gelen istekte /api-proxy/api/ kısmı yakalanacak
        source: '/api-proxy/api/:path*',
        // Hedef adreste sadece yakalanan kısım (:path*) eklenecek
        destination: 'https://linde-v2-api.wdtajans.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;