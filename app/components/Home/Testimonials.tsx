'use client'

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import karin_img from '@/public/testimonials/karin_img.png';
import lisamatt_img from '@/public/testimonials/lisamatt_img.png';
import katarina_img from '@/public/testimonials/katarina_img.png';


interface TestimonialItem {
    name: string;
    image: StaticImageData;
    quote: string;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Karin Peterson',
    image: karin_img,
    quote: 'The flower arrangements from Sami\'s Flowers are always chic, classy, and fresh. I enjoy the designs, and I enjoy the service too.'
  },
  {
    name: 'Lisa + Matt Welsh',
    image: lisamatt_img,
    quote: ' They\'ve helped to turn our wedding into a fairytale! Lisa likes how they\'ve listened to her vision, and I believe they\'ve actually exceeded our expectations.'
  },
  {
    name: 'Katarina Erwing',
    image: katarina_img,
    quote: 'I\'m an event planner, and I always turn to Sami\'s Flowers. They haven\'t failed me even once, and they always pick the perfect flowers for the occasion!'
  }
]

export default function TestimonialSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <section className="bg-overlayBg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <label className="text-specialText font-mrsSaint text-4xl">Testimonials</label>
        <h2 className="text-4xl sm:text-4xl font-serif text-primaryText mb-4">Our Clients About Us</h2>
        <p className="text-xl text-contentText mb-12">We&apos;re happy to make so many people happy!</p>

        <div className="relative">
          <div className="flex items-center justify-center mb-8">
            <Image
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <h3 className="text-2xl font-serif text-primaryText mb-4">{testimonials[currentSlide].name}</h3>
          <p className="text-xl text-contentText italic mb-8">&quot;{testimonials[currentSlide].quote}&quot;</p>

          <div className="flex justify-center space-x-2 mb-8">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute top-1/2 left-0 transform -translate-y-1/2 ${
              currentSlide === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-primary'
            }`}
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === testimonials.length - 1}
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 ${
              currentSlide === testimonials.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-primary'
            }`}
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}