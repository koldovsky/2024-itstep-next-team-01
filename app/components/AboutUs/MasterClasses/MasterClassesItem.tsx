import Image, { StaticImageData } from 'next/image';

interface MasterClassesItemProps {
    title: string;
    price: string;
    description: string;
    imageSrc: StaticImageData;
}

export default function MasterClassesItem({ title, price, description, imageSrc }: MasterClassesItemProps) {
    return (
        <div className="w-full flex my-10">
            <div className="w-24 h-24 flex items-center justify-center mx-3 md:w-32 md:h-32">
                <Image src={imageSrc} width={80} height={80} alt={title}/>
            </div>
            <div className="flex flex-col sm:w-52 md:w-full justify-center">
                <div className="flex justify-between">
                    <h3 className="text-3xl font-frank text-primaryText">{title}</h3>
                    <span className="text-2xl font-frank text-primaryText">{price}</span>
                </div>
                <p className="font-inter text-secondaryText">{description}</p>
            </div>
        </div>
    );
}

