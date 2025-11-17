import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Memórias Restauradas - Restauração Profissional de Fotos Antigas',
  description: 'Restaure suas fotos antigas, danificadas ou desbotadas com qualidade profissional. Preserve suas memórias familiares para sempre.',
  icons: {
    icon: [
      { url: '/restored_memories/images/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/restored_memories/images/logo.png', sizes: '64x64', type: 'image/png' },
      { url: '/restored_memories/images/logo.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/restored_memories/images/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
