import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Memórias Restauradas - Restauração Profissional de Fotos Antigas',
  description: 'Restaure suas fotos antigas, danificadas ou desbotadas com qualidade profissional. Preserve suas memórias familiares para sempre.',
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
