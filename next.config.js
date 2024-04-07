/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  output: 'standalone',
  images: { unoptimized: true },
  basePath: '/developer-portfolio',
  assetPrefix: '/developer-portfolio/',
  distDir: 'build',
}

module.exports = nextConfig
