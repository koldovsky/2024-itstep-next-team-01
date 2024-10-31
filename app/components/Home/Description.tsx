import Image from 'next/image';
import description_img from '@/public/features/description-img.png';
import flowers_img from '@/public/description.png';


export default function Description() {
    return (
        <section className="bg-overlayBg py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-sm text-contentText tracking-wider text-specialText">How we create
                            bouquets</h3>
                        <h2 className="text-3xl sm:text-4xl font-serif text-primaryText leading-tight">
                            Natural Fresh Bouquets </h2>
                        <hr className='text-hrColor w-2/12 border-2 my-3'/>
                        <p className="text-base  text-contentText font-bold">
                            We work with only fresh-cut and high-quality flowers. </p>
                        <p className="text-base text-contentText">
                            Creating bouquets is an art, and our florists are artists. We use the highest quality
                            flowers from local greenhouses and suppliers from the Netherlands and France to create
                            unique arrangements.
                        </p>
                        <div className="flex items-center space-x-4 pt-4">
                            <div className="bg-primary">
                                <Image
                                    alt="flowers"
                                    src={flowers_img}
                                    width={400}
                                    height={400}
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-serif text-primaryText text-2xl hover:underline">Special Flower Collections →</h3>
                                <p className="text-base text-contentText ">
                                    Do you have a wedding or children&apos;s birthday? Or do you just want to please loved ones while being far away? Our florists will do everything possible to create the best bouquet for you.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                    <div className="overflow-hidden h-120">
                            <Image
                                src={description_img}
                                alt="Florist arranging flowers"
                                width={450}
                                height={700}
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}