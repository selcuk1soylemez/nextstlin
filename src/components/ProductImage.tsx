// src/components/ProductImage.tsx
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProductImage({ 
  src, 
  alt, 
  className = '',
  width = 300,
  height = 200
}: { 
  src?: string; 
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const [imgSrc, setImgSrc] = useState(src || '/images/placeholder.jpg');

  return (
    <div className={`image-container ${className}`} style={{ textAlign: 'center' }}>
      <Image
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className="img-fluid"
        onError={() => setImgSrc('/images/placeholder.jpg')}
        style={{ 
          maxWidth: '100%',
          height: 'auto',
          objectFit: 'contain',
          backgroundColor: '#f5f5f5',
          padding: '10px',
          borderRadius: '50%'
        }}
      />
    </div>
  );
}