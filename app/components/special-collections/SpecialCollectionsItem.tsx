import Image, { StaticImageData } from 'next/image';
import { Button } from '../button';

interface SpecialCollectionsItemProps {
    imageSrc: StaticImageData
    title: string
    description: string
}

export default function SpecialCollectionsItem({ imageSrc, title, description }: SpecialCollectionsItemProps) {
    return (
        <div className="w-full md:w-[48%] lg:w-[30%] h-[500px] p-1 mt-4">
            <div className="relative w-full h-[300px]">
                <Image
                    src={imageSrc}
                    alt="Flower from collection"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </div>

            <p className="text-xl font-serif text-primaryText mt-4">{title}</p>
            <p className="text-contentText mt-4">{description}</p>
            <Button variant="primary" className="font-bold mt-10">
                Order now
            </Button>
        </div>
    )
}