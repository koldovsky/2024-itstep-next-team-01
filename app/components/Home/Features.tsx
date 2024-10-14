import Image from 'next/image'
import delivery_img from "@/public/features/delivery_img.svg"
import flowers_img from "@/public/features/flowers_img.svg"
import made_img from "@/public/features/made_img.svg"
import services_img from "@/public/features/services_img.svg"

interface CardItem {
    imgSrc: string
    title: string
    text: string
}

const cardItems: CardItem[] = [
    {
        imgSrc: delivery_img,
        title: 'Fast Delivery 24/7',
        text: 'Forgot about an important date? Order flowers right now!',
    },
    {
        imgSrc: flowers_img,
        title: 'Only Fresh Flowers',
        text: 'All flowers are freshly cut and always meet your expectations.',
    },
    {
        imgSrc: made_img,
        title: 'Made by Artists',
        text: 'We create not just bouquets but real works of floral art.',
    },
    {
        imgSrc: services_img,
        title: 'Range of Services',
        text: 'We also offer decoration, floral design, and other services.',
    },
]

export default function Features() {
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
                        <h2 className="text-xl font-serif mb-2 text-primaryText ">{item.title}</h2>
                        <hr className='text-hrColor w-2/12 md:w-3/12 border-2 my-3' />
                        <p className="text-center text-contentText">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}