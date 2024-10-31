import Image from 'next/image'

export default function DescriptionInfo() {
    return (
        <div className="flex flex-col md:flex-row mb-8">
            <div className="w-full md:w-2/3 md:pr-8 mb-6 md:mb-0">
                <p className="mb-4 text-base sm:text-lg text-contentText">
                    Buying flowers for your loved ones is an important way to show them that <u>you care.</u> Flowers have a
                    powerful emotional impact, conveying love, sympathy, and other heartfelt sentiments. Giving flowers is a gesture of kindness that can make a difference in someone's life and make them feel special.
                </p>
            </div>
            <div className="w-full md:w-1/3">
                <div className="flex items-center rounded-lg p-4">
                    <div className="bg-[#606c38] rounded-full p-3 mr-4 flex-shrink-0">
                        <Image
                            src="/features/gallery-feature-photos/call-us.png"
                            alt="Phone icon"
                            width={48}
                            height={48}
                            className="w-8 h-8 sm:w-12 sm:h-12"
                        />
                    </div>
                    <div>
                        <h3 className="text-xl sm:text-2xl text-primaryText font-serif">Order Flowers Now</h3>
                        <div className="text-sm sm:text-base text-contentText">
                            Call us: <a href="tel:+12345678900" className="font-bold text-primaryText hover:underline">+1 (234) 567 89 00</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}