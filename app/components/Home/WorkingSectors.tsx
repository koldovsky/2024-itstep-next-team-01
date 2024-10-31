"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react'
interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export default function WorkingSectors() {

  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/api/workingSectorsData');
      const data = await res.json();
      setServices(data);
    }
    fetchData();
  }, []);

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