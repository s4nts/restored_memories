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
    // Detecta basePath em runtime baseado na URL atual
    if (typeof window !== "undefined") {
      // Tenta usar NEXT_PUBLIC_BASE_PATH primeiro (definido em build time)
      // Isso é injetado pelo Next.js durante o build
      const envBasePath = (window as any).__NEXT_DATA__?.assetPrefix || 
                         process.env.NEXT_PUBLIC_BASE_PATH || "";
      
      if (envBasePath) {
        // Se há basePath definido, usa ele
        const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
        setImageSrc(`${envBasePath}/${cleanSrc}`);
        return;
      }
      
      // Se não há basePath definido, tenta detectar da URL
      // Para GitHub Pages, se a URL é username.github.io/repo-name/
      // o basePath seria /repo-name
      const hostname = window.location.hostname;
      const pathname = window.location.pathname;
      
      // Se não é localhost e há um pathname, pode haver basePath
      if (hostname.includes("github.io") && pathname !== "/") {
        const pathParts = pathname.split("/").filter(Boolean);
        if (pathParts.length > 0) {
          // O primeiro segmento é geralmente o basePath
          const detectedBasePath = `/${pathParts[0]}`;
          const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
          setImageSrc(`${detectedBasePath}/${cleanSrc}`);
          return;
        }
      }
      
      // Fallback: usa src original
      setImageSrc(src);
    } else {
      // Server-side: usa basePath do env ou src original
      const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
      if (envBasePath) {
        const cleanSrc = src.startsWith("/") ? src.slice(1) : src;
        setImageSrc(`${envBasePath}/${cleanSrc}`);
      } else {
        setImageSrc(src);
      }
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

