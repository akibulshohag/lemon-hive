/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [`raw.githubusercontent.com`]
    // domains: [`192.168.68.117`]
  }
}

module.exports = nextConfig
