/** @type {import('next').NextConfig} */
const nextConfig = {
  // O GitHub Actions com static_site_generator: next configura automaticamente
  // output: 'export' e basePath, então não definimos aqui
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [],
  },
  // Garantir que assets estáticos sejam copiados corretamente
  // O Next.js copia automaticamente a pasta public/ para out/ quando usa output: 'export'
  // Se basePath estiver definido, usar; senão, deixar vazio para desenvolvimento
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

module.exports = nextConfig;
