import React from 'react';
import Image from 'next/image';

interface ServiceItemProps {
  imageSrc: string;
  title: string;
  sectionKey: string;
  isActive: boolean;
  toggleSection: (section: string) => void;
  description: string;
}

export default function ServiceItem({ imageSrc, title, sectionKey, isActive, toggleSection, description }: ServiceItemProps) {
  return (
    <article className="flex flex-col items-center max-w-xs w-full">
      <div className="relative w-full aspect-[9/12] mb-4">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="flex items-center justify-between w-full mb-2">
        <h3 className="text-xl font-frank text-primaryText mr-4 flex-grow text-center">{title}</h3>
        <button
          onClick={() => toggleSection(sectionKey)}
          aria-expanded={isActive}
          className="text-2xl font-bold focus:outline-none ml-4"
        >
          {isActive ? '-' : '+'}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isActive ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isActive}
      >
        <p className="font-inter text-secondaryText text-sm mt-2">{description}</p>
      </div>
    </article>
  );
}
