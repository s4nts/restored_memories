import StaticImage from './StaticImage';

interface ImageCompareProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function ImageCompare({
  beforeImage,
  afterImage,
  beforeLabel = 'Antes',
  afterLabel = 'Depois',
}: ImageCompareProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" role="group" aria-label="Comparação de imagens antes e depois">
      <figure className="relative w-full h-[400px] md:h-[600px] bg-gray-100 rounded-lg shadow-xl flex items-center justify-center overflow-hidden border-2 border-gray-200">
        <StaticImage
          src={beforeImage}
          alt={`${beforeLabel}: Foto antes da restauração`}
          width={800}
          height={600}
          className="object-contain max-w-full max-h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <figcaption className="absolute top-4 left-4 bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
          {beforeLabel}
        </figcaption>
      </figure>

      <figure className="relative w-full h-[400px] md:h-[600px] bg-gray-100 rounded-lg shadow-xl flex items-center justify-center overflow-hidden border-2 border-orange-200">
        <StaticImage
          src={afterImage}
          alt={`${afterLabel}: Foto depois da restauração`}
          width={800}
          height={600}
          className="object-contain max-w-full max-h-full"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        <figcaption className="absolute top-4 right-4 bg-orange-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
          {afterLabel}
        </figcaption>
      </figure>
    </div>
  );
}
