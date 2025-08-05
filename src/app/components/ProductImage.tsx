// src/app/components/ProductImage.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductImage({ src, alt }: { src?: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || '/images/placeholder.jpg');

  return (
    <div className="image-container">
      <Image
        src={imgSrc}
        alt={alt}
        width={300}
        height={200}
        className="img-fluid"
        onError={() => setImgSrc('/images/placeholder.jpg')}
        unoptimized={process.env.NODE_ENV !== 'production'} // Geliştirme ortamında optimizasyonu kapat
      />
    </div>
  );
}