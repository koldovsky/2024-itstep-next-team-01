import Image from 'next/image';
import cta_home from '@/public/cta-home.png';

export default function FlowerShopBanner() {
  return (
    <section className="relative bg-[#b5b88f] overflow-hidden w-full h-[500px] my-8">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={cta_home}
          alt="Background with person holding a colorful bouquet"
          layout="fill"
          objectFit="cover"
          objectPosition="center right"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-gray-800 mb-4">
            Beautiful <span className="text-white">Compositions</span> for Any <span className="underline decoration-gray-800">Occasion</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Surprise your loved ones and make any holiday even happier!
          </p>
          <ul className="mb-8 space-y-2">
            {['Wedding Flowers;', 'Prom Flowers;', 'Flower Crowns.'].map((item, index) => (
              <li key={index} className="flex items-center text-gray-700 text-base">
                <span className="text-white mr-2 text-xl">✽</span> {item}
              </li>
            ))}
          </ul>
          <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition duration-300 text-base">
            ORDER FLOWERS
          </button>
        </div>
      </div>
    </section>
  )
}