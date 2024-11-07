import type { NextApiRequest, NextApiResponse } from 'next';
import decoration_img from '@/public/services/63f5c5ce79435c000dcf4854_optimized_987_c987x1316-0x0.webp';
import events_img from '@/public/services/63f5c6b4c5d512000d583b80_optimized_1120_c1009x1261-55x139.webp';
import floral_design_img from '@/public/services/63f5c6edc5d512000d583bb7_optimized_1039_c1019x1273-0x0.webp';

interface ServiceData {
    id: string;
    imageSrc: string;
    title: string;
    description: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const services: ServiceData[] = [
        {
            id: 'service-1',
            imageSrc: decoration_img.src,
            title: 'Decoration',
            description: 'We create elegant flower decorations for homes, offices, shops, and other locations. contacts-container us if you want to demonstrate your style and taste to your guests, clients, or visitors.'
        },
        {
            id: 'service-2',
            imageSrc: events_img.src,
            title: 'Events',
            description: "We know that details matter. That's why we provide and arrange flowers for private and corporate celebrations, charity galas, product launches, and other important events. Come to us to make your event an all-time memory."
        },
        {
            id: 'service-3',
            imageSrc: floral_design_img.src,
            title: 'Floral Design',
            description: 'Our design team is always here to arrange unique and beautiful bouquets and flower compositions. Hurry up to surprise your loved ones and add some personal touch to your gifts.'
        }
    ];

    res.status(200).json(services);
}
