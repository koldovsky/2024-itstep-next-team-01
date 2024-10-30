
import Image from 'next/image';
import history_cover from '../../../public/history-cover.png';
import history_img from '../../../public/history.png';


export default function History() {
    return (
        <section className="bg-overlayBg py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="overflow-hidden h-120">
                            <Image
                                src={history_cover}
                                alt="Florist arranging flowers"
                                width={450}
                                height={700}
                                style={{objectFit: 'cover'}}
                            />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-mrsSaint tracking-wider text-specialText">History</h3>
                        <h2 className="text-3xl sm:text-4xl font-serif text-primaryText leading-tight">
                            How Our Studio Started </h2>
                        <hr className='border-specialText w-1/12 border-2 my-3'/>
                        <p className="text-base  text-contentText font-bold">
                            It all started with a great love for flowers. </p>
                        <p className="text-base text-contentText font-inter">
                            In <b><i>early 2015</i></b>, Sami Smith was walking down the street and saw florists working in one of the trendy florist shops. She was impressed by the beauty of freshly-cut flowers and bouquets. <br />
                            <br />
                                She borrowed some money, took a florist course, and opened her small studio in the Bronx. Very quickly, her bouquets became very popular. Six months later, <b><i> Mioko Sudoru</i></b> joined Sami, and together they continued to develop their business and moved to Manhattan.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 py-4">
                            <div className="flex-shrink-0">
                                <div className="overflow-hidden w-[130px] h-[130px]">
                                    <Image
                                        alt="Our flower shop in 2015"
                                        src={history_img}
                                        width={400}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-serif text-2xl text-primaryText">
                                    Our Studio in 2015
                                </h3>
                                <p className="text-contentText text-base">
                                    This is what our flower shop looked like when it opened.
                                </p>
                                <p className="text-secondaryText text-sm italic">
                                    ph. by Michael Nilson ( 2015, 15 of April)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
