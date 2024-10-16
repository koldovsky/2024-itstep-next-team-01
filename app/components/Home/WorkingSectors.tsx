import Image from 'next/image';
import restaurant_img from '@/public/working-sectors/restaurant_img.svg';
import wedding_img from '@/public/working-sectors/wedding_img.svg';
import parties_img from '@/public/working-sectors/parties_img.svg';
import funeral_img from '@/public/working-sectors/funeral_img.svg';
import sports_img from '@/public/working-sectors/sports_img.svg';

interface ServiceItem {
    icon: string;
    title: string;
    description: string;
}

const services: ServiceItem[] = [
  {
    icon: restaurant_img,
    title: "Restaurants",
    description: "Flower decorations for restaurants and cafes."
  },
  {
    icon: wedding_img,
    title: "Weddings",
    description: "Beautiful bridal bouquets and flower archs."
  },
  {
    icon: parties_img,
    title: "Parties",
    description: "Bright flower arrangements for themed parties."
  },
  {
    icon: funeral_img,
    title: "Funerals",
    description: "Express your grief with the right flowers."
  },
  {
    icon: sports_img,
    title: "Sports & Media",
    description: "Identical bouquets for competition winners."
  }
]

export default function WorkingSectors() {
  return (
    <div className="bg-overlayBg py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <Image 
                  src={service.icon} 
                  alt={service.title}
                  width={100}
                  height={100}
                  className="text-white"
                />
              </div>
              <h3 className="text-xl font-serif text-primaryText mb-2">{service.title}</h3>
              <hr className="w-2/12 border-2 border-hrColor my-3" />
              <p className="text-base text-contentText">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}