'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface CardItem {
    imgSrc: string;
    title: string;
    text: string;
}


export default function Features() {
    const [cardItems, setCardItems] = useState<CardItem[]>([])

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/featuresData');
            const data = await res.json();
            setCardItems(data);
        }
        fetchData();

    }, []);

    return (
        <section className=" px-4 py-8 bg-overlayBg w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {cardItems.map((item, index) => (
                    <div key={index} className="flex flex-col md:items-center items-start p-4">
                        <Image
                            src={item.imgSrc}
                            alt={`Image for ${item.title}`}
                            width={100}
                            height={100}
                            className="mb-4"
                        />
                        <h2 className="text-xl font-inter mb-2 text-primaryText ">{item.title}</h2>
                        <hr className='text-hrColor w-2/12 md:w-3/12 border-2 my-3' />
                        <p className="text-center text-contentText">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}