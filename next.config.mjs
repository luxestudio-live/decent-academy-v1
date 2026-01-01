/** @type {import('next').NextConfig} */

const repoName = 'decent-academy-v1';
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
}

export default nextConfig
