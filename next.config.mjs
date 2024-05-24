/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    mdxRs: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
