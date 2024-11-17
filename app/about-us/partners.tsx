"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Імпорт логотипів
import harryAndDavid from '@/public/partners/harry-and-david.svg';
import costaFarms from '@/public/partners/costa-farms.svg';
import funza from '@/public/partners/funza.svg';
import gifttree from '@/public/partners/gifttree.svg';
import smithAndSmith from '@/public/partners/smith-and-smith.svg';
import euroflor from '@/public/partners/euroflor.svg';

const partners = [
  { name: 'Harry & David', logo: harryAndDavid },
  { name: 'Costa Farms', logo: costaFarms },
  { name: 'Funza', logo: funza },
  { name: 'Gifttree', logo: gifttree },
  { name: 'Smith & Smith', logo: smithAndSmith },
  { name: 'Euroflor', logo: euroflor },
];

export default function PartnerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visiblePartners, setVisiblePartners] = useState(partners);

  useEffect(() => {
    const updateVisiblePartners = () => {
      const newVisiblePartners = [...partners, ...partners].slice(currentIndex, currentIndex + 5);
      setVisiblePartners(newVisiblePartners);
    };
    updateVisiblePartners();
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length);
  };

  return (
    <section className="bg-overlayBg py-20 my-16">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-600 mb-12 text-lg">
          Our pride is in working with exceptional companies to deliver stunning bouquets and create flower decorations.
        </p>
        <div className="relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronLeft className="w-8 h-8 text-gray-600" />
          </button>
          <div className="overflow-hidden">
            <div className="flex justify-between items-center space-x-8">
              {visiblePartners.map((partner, index) => (
                <div key={index} className="w-1/5">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className="mx-auto filter grayscale opacity-50 hover:filter-none hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
          >
            <ChevronRight className="w-8 h-8 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}