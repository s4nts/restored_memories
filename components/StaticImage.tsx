"use client";

import Image from "next/image";

interface StaticImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
}

export default function StaticImage({
  src,
  alt,
  width,
  height,
  className,
  priority,
  loading,
  sizes,
}: StaticImageProps) {
  // O Next.js gerencia automaticamente o basePath configurado no next.config.js
  // Basta passar o src diretamente que o Next.js adiciona o basePath automaticamente
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={loading}
      sizes={sizes}
    />
  );
}

