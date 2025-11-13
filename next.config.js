/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Comentado para funcionar em modo dev
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    remotePatterns: [],
  },
};

// Para produção, descomente a linha output: 'export' acima
if (process.env.NODE_ENV === 'production' && process.env.STATIC_EXPORT === 'true') {
  nextConfig.output = 'export';
}

module.exports = nextConfig;
