/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mevcut diğer ayarlarınız burada olabilir...

  // Bu bloğu ekleyin veya mevcutsa düzenleyin
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'manage.lindegazmarket.com',
        port: '',
        pathname: '/Media/**', // Resimlerin geldiği yolu belirtiyoruz
      },
    ],
  },
};

module.exports = nextConfig;