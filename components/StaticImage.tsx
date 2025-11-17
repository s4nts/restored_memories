"use client";

import { useMemo } from "react";

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
  loading = "lazy",
  sizes,
}: StaticImageProps) {
  // Com basePath configurado, precisamos adicionar manualmente o basePath
  // O Next.js Image component pode não fazer isso corretamente com output: 'export'
  const imageSrc = useMemo(() => {
    const basePath = "/restored_memories";

    // Se o src já começa com o basePath, não adiciona novamente
    if (src.startsWith(basePath)) {
      return src;
    }

    // Se o src começa com /, adiciona o basePath
    if (src.startsWith("/")) {
      return `${basePath}${src}`;
    }

    // Caso contrário, retorna o src original
    return src;
  }, [src]);

  // Com output: 'export' e images: { unoptimized: true },
  // usamos uma tag img normal para garantir que os caminhos funcionem
  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : loading}
      sizes={sizes}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
}
