import Image from 'next/image'

export default function DescriptionInfo() {
    return (
        <div className="flex mb-8">
            <div className="flex-grow pr-8">
                <p className=" mb-4 text-lg text-contentText">
                    Buying flowers for your loved ones is an important way to show them that <u>you care.</u> Flowers have a
                    powerful emotional impact, conveying love, sympathy, and other heartfelt sentiments. Giving flowers is a gesture of kindness that can make a difference in someone's life and make them feel special.
                </p>
            </div>
            <div className="flex-shrink-0 w-3/12 ">
                <div className="flex items-center bg-[#f5f5f5] rounded-lg">
                    <div className="bg-[#606c38] rounded-full p-3 mr-4">
                        <Image
                            src="/features/gallery-feature-photos/call-us.png"
                            alt="call us icon"
                            width={60}
                            height={60}
                            className=" object-cover w-full h-12"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl text-primaryText font-serif">Order Flowers Now</h3>
                        <p className="text-contentText">Call us:<p className="font-bold text-primaryText ">+1 (234) 567 89 00</p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}