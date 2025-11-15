/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para GitHub Pages com domínio customizado (CNAME)
  // Com domínio customizado, o site é servido na raiz, então basePath deve ser vazio
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [],
  },
  // Com domínio customizado (CNAME), não usar basePath
  // O GitHub Pages serve o site na raiz do domínio
  basePath: "",
  assetPrefix: "",
};

module.exports = nextConfig;
