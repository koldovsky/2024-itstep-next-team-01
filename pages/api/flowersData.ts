import { NextApiRequest, NextApiResponse } from "next";

interface FlowerItem {
    id:number;
    Img: string;
    Name: string;
    price: number;
    inStock: boolean;
    sale?: number;
    label?: string;
    currency: string;
}

const flowerItem: FlowerItem[] = [
    {
        id: 1,
        Img: "/flower.png",
        Name: "Red Rose",
        price: 15.99,
        inStock: true,
        sale: 13.99,
        label: "Valentine's Special",
        currency: "USD"
    },
    {
        id: 2,
        Img: "/flower.png",
        Name: "Yellow Tulip",
        price: 10.49,
        inStock: true,
        currency: "USD"
    },
    {
        id: 3,
        Img: "/flower.png",
        Name: "Purple Orchid",
        price: 25.00,
        inStock: false,
        label: "Sold Out",
        currency: "USD"
    },
    {
        id: 4,
        Img: "/flower.png",
        Name: "Sunflower Bouquet",
        price: 20.00,
        inStock: true,
        sale: 16.00,
        label: "Summer Sale",
        currency: "USD"
    },
    {
        id: 5,
        Img: "/flower.png",
        Name: "White Lily",
        price: 18.75,
        inStock: true,
        label: "Limited Edition",
        currency: "USD"
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(flowerItem)
}