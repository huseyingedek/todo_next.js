/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 'firebasestorage.googleapis.com', 'storage.googleapis.com'],
  },
}

module.exports = nextConfig
