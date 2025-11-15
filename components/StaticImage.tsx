"use client";

import { useEffect, useState } from "react";
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
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // Com domínio customizado (CNAME), o basePath é sempre vazio
    // O Next.js já gerencia o assetPrefix corretamente via next.config.js
    // Então podemos usar o src diretamente
    if (typeof window !== "undefined") {
      // Verifica se há assetPrefix configurado pelo Next.js
      const assetPrefix = (window as any).__NEXT_DATA__?.assetPrefix || "";
      
      if (assetPrefix) {
        // Se há assetPrefix, usa ele (para compatibilidade futura)
        const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
        setImageSrc(`${assetPrefix}/${cleanSrc}`);
      } else {
        // Sem basePath/assetPrefix, usa src original (domínio customizado)
        setImageSrc(src);
      }
    } else {
      // Server-side: usa src original
      setImageSrc(src);
    }
  }, [src]);

  return (
    <Image
      src={imageSrc}
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

