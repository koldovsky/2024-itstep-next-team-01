import Image from 'next/image'

export default function PhotoGallery() {
    return (
        <section className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-3">
                <Image
                    src="/features/gallery-feature-photos/bouquet-photo-1.jpg"
                    alt="Person holding a bouquet"
                    width={400}
                    height={600}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="col-span-2">
                <div className="mb-4">
                    <Image
                        src="/features/gallery-feature-photos/bouquet-photo-2.jpg"
                        alt="Colorful flower arrangements"
                        width={200}
                        height={200}
                        className=" object-cover w-full h-full"
                    />
                </div>
                <div>
                    <Image
                        src="/features/gallery-feature-photos/flower-shop.jpg"
                        alt="Flower shop display"
                        width={200}
                        height={200}
                        className=" object-cover w-full h-full"
                    />
                </div>
            </div>
            <div className="col-span-4">
                <div className="mb-5">
                    <Image
                        src="/features/gallery-feature-photos/two-women-photo.jpg"
                        alt="Close-up of flower arrangement"
                        width={300}
                        height={200}
                        className=" object-cover w-full h-72"
                    />
                </div>
                <div>
                    <Image
                        src="/features/gallery-feature-photos/boquet-photo-3.jpg"
                        alt="Woman arranging flowers"
                        width={300}
                        height={200}
                        className=" object-cover w-full h-48"
                    />
                </div>
            </div>
            <div className="col-span-3">
                <Image
                    src="/features/gallery-feature-photos/women-photo.jpg"
                    alt="Women working with flowers"
                    width={300}
                    height={600}
                    className=" object-cover w-full h-full"
                />
            </div>
        </section>
    )
}