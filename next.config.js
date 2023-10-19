/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn6.agoda.net'
      },
      {
        hostname: 'pix8.agoda.net',
      },
    ],
  },
}

module.exports = nextConfig