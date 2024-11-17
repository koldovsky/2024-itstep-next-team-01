

export default function CTA() {
    return (
        <section className="bg-backgroundContact w-full h-full bg-cover bg-center flex flex-col justify-center ">
            <div className="relative container px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-left space-y-6 my-32 ml-6">
                    <div className="text-gray-300 text-sm font-light tracking-wider mb-2">
                        % % % %
                    </div>
                    <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-frank text-white leading-tight">
                        Get Your First Order with a 15% Discount!
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl font-inter text-cardTitleText max-w-2xl">
                        Get advantage of our special offer applicable to any bouquet or service.
                    </p>

                    {/* Promo code */}
                    <p className="text-sm font-inter text-cardTitleText italic">
                        * To get the discount, use the promo code{" "}
                        <span className="italic">SAMIFLO</span> when submitting your
                        order.
                    </p>

                    {/* Decorative signature */}
                    <div className="cursor-pointer pt-6">
                        <p className="font-mrsSaint text-cardTitleText text-3xl border-b border-cardTitleText inline-block pb-1">
                            Make first order
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}