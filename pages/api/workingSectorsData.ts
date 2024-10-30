import type { NextApiRequest, NextApiResponse } from "next";
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(services);
}