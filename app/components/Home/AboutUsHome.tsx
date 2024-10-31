import Image from 'next/image';
import aboutus_img from '@/public/aboutus_img.png';

export default function AboutUsHome() {
  return (
    <section className="bg-overlayBg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-w-4 aspect-h-5 overflow-hidden">
              <Image
                src={aboutus_img}
                alt="Florist arranging flowers"
                width={550}
                height={400}
                style={{ objectFit: 'cover' }}
                className="rounded-t-full"
              />
            </div>
          </div>
          <div className="space-y-6">
            <label className="text-specialText font-mrsSaint text-4xl">About us</label>
            <h2 className="text-3xl sm:text-4xl font-serif text-primaryText leading-tight">
              Our Mission is to Make Your Lives Beautiful
            </h2>
            <p className="text-base text-contentText">
              We are a small yet professional flower studio based in NY.
            </p>
            <p className="text-base text-contentText">
              Our mission is to make your lives brighter and beautiful, help you impress
              guests during important events, and make your loved ones happy with
              wonderful bouquets and flower arrangements.
            </p>
            <div className="flex items-center space-x-4 pt-4">
              <div className="bg-primary rounded-full p-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-serif text-primaryText">Elegant Compositions from $59</h3>
                <p className="text-base text-contentText">
                  Order fresh and stylish flower arrangements at Sami&apos;s Flowers! We offer different bouquets for fair prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}