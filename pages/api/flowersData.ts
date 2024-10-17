import { NextApiRequest, NextApiResponse } from "next";

interface FlowerItem {
    Img: string;
    Name: string;
    price: number;
    inStock: boolean;
    sale: number | null;
    lable: string | null;
    currency: string;
}

const flowerItem: FlowerItem[] = [
    {
        Img: "https://example.com/images/rose.jpg",
        Name: "Red Rose",
        price: 15.99,
        inStock: true,
        sale: 0.1,
        lable: "Valentine's Special",
        currency: "USD"
    },
    {
        Img: "https://example.com/images/tulip.jpg",
        Name: "Yellow Tulip",
        price: 10.49,
        inStock: true,
        sale: null,
        lable: null,
        currency: "USD"
    },
    {
        Img: "https://example.com/images/orchid.jpg",
        Name: "Purple Orchid",
        price: 25.00,
        inStock: false,
        sale: null,
        lable: "Sold Out",
        currency: "USD"
    },
    {
        Img: "https://example.com/images/sunflower.jpg",
        Name: "Sunflower Bouquet",
        price: 20.00,
        inStock: true,
        sale: 0.15,
        lable: "Summer Sale",
        currency: "USD"
    },
    {
        Img: "https://example.com/images/lily.jpg",
        Name: "White Lily",
        price: 18.75,
        inStock: true,
        sale: null,
        lable: "Limited Edition",
        currency: "USD"
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(flowerItem)
}