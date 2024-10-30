import type { NextApiRequest, NextApiResponse } from "next";

interface CardItem {
    imgSrc: string;
    title: string;
    text: string;
}

const cardItems: CardItem[] = [
    {
        imgSrc: '/features/delivery_img.svg',
        title: 'Fast Delivery 24/7',
        text: 'Forgot about an important date? Order flowers right now!',
    },
    {
        imgSrc: '/features/flowers_img.svg',
        title: 'Only Fresh Flowers',
        text: 'All flowers are freshly cut and always meet your expectations.',
    },
    {
        imgSrc: '/features/made_img.svg',
        title: 'Made by Artists',
        text: 'We create not just bouquets but real works of floral art.',
    },
    {
        imgSrc: '/features/services_img.svg',
        title: 'Range of Services',
        text: 'We also offer decoration, floral design, and other services.',
    },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(cardItems)
}