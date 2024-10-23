'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Image {
  id: string;
  src: string;
  alt: string;
}

export default function Instagram() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/instagram');
        if (response.ok) {
          const data: Image[] = await response.json();
          setImages(data);
        } else {
          console.error('Failed to fetch images');
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {images.map((image) => (
        <div key={image.id} className="overflow-hidden">
          <Image className="w-full h-auto object-cover" src={image.src} alt={image.alt} width={500} height={500} />
        </div>
      ))}
    </div>
  );
}