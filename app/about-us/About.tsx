import Image from 'next/image';
import about_img from '@/public/features/about-cover.png';
import { Button } from '../components/button'


export default function About() {
    return (
        <section className="bg-overlayBg py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center">
                        <hr className="text-hrColor border-2 my-3"/>
                        <h2 className="text-3xl sm:text-4xl font-serif text-primaryText leading-tight">
                            We Create Flower Bouquets and Arrangements for Any Occasion
                        </h2>
                        <hr className="text-hrColor border-2 my-3"/>
                        <p className="text-base text-contentText">
                            We are a small yet professional flower studio based in NY. Our mission is to make your lives
                            brighter and beautiful, help you impress guests during important events, and make your loved
                            ones happy with wonderful bouquets and flower arrangements.
                        </p>
                        <Button variant="secondary" className="text-white bg-secondaryButton mx-auto">ORDER
                            FLOWERS</Button>
                    </div>
                    <div className="relative">
                        <div className="overflow-hidden h-120">
                            <Image
                                src={about_img}
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