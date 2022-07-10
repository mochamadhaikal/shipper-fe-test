/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['randomuser.me'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
