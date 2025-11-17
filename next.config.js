/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para GitHub Pages sem CNAME (com subpath)
  // O site será servido em http://s4nts.github.io/restored_memories/
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [],
  },
  // Configuração para GitHub Pages com subpath
  basePath: "/restored_memories",
  assetPrefix: "/restored_memories",
};

module.exports = nextConfig;
