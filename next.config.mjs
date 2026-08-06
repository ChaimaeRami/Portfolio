/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',
  images: {
    unoptimized: true, // ضروري لمشاريع Next.js المصدّرة كـ Static
  },
};

export default nextConfig;