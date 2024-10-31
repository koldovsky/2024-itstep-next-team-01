'use client';

import React, { useEffect, useState, useCallback } from 'react';
import ServicesHeader from './ServicesHeader';
import ServiceItem from './ServiceItem';

interface ServiceData {
  id: string;
  imageSrc: string;
  title: string;
  description: string;
}

export default function ServicesSection() {
  const [services, setServices] = useState<ServiceData[]>([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/api/servicesSection');
        if (response.ok) {
          const data: ServiceData[] = await response.json();
          setServices(data);
        } else {
          console.error('Failed to fetch services');
        }
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = useCallback((section: string) => {
    setActiveSection(prevSection => (prevSection === section ? null : section));
  }, []);

  return (
    <section className="flex flex-col items-center text-center p-8 bg-[#f7f2ed]">
      <ServicesHeader />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ id, imageSrc, title, description }) => (
          <ServiceItem
            key={id}
            imageSrc={imageSrc}
            title={title}
            sectionKey={id}
            isActive={activeSection === id}
            toggleSection={toggleSection}
            description={description}
          />
        ))}
      </div>
    </section>
  );
}