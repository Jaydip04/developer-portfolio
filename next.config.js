/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // This line enables standalone output
  images: { unoptimized: true }, // Optional: Enables control over image optimization
  basePath: '/developer-portfolio', // Optional: Sets the base path for routing
  assetPrefix: '/developer-portfolio/', // Optional: Configures asset paths
  // distDir: 'build', // Optional: Sets the output directory name (default: '.next')
  distDir: '.next', // Optional: Sets the output directory name (default: '.next')
}

module.exports = nextConfig
