/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  
    formats: ['image/webp'], 
    deviceSizes: [640, 750, 828, 1080, 1200],  
    minimumCacheTTL: 60,  
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
