import React from 'react';
import SpecialCollectionsTitle from './SpecialCollectionsTitle';
import SpecialCollectionsItem from './SpecialCollectionsItem';
import mother_image from '@/public/special-collections/mother_img.jpg';
import valentine_image from '@/public/special-collections/valentine_img.jpg';
import autumn_image from '@/public/special-collections/autumn_img.jpg';

export default function SpecialCollectionsContainer() {
    return (
        <section className="px-5">
            <SpecialCollectionsTitle/>
            <div className="flex flex-wrap justify-center my-10 sm:gap-4 gap-12">
                <SpecialCollectionsItem
                    imageSrc={mother_image}
                    title="Mother's Day Collection "
                    description="One of the best and the most elegant ways to show your mother how much you love her is to present her a beautiful flower composition."
                />
                <SpecialCollectionsItem
                    imageSrc={valentine_image}
                    title="Valentine's Day Collection "
                    description="If you're looking for a unique gift to your loved one, check out this fantastic collection. It'll help you make Valentine's Day really special!"
                />
                <SpecialCollectionsItem
                    imageSrc={autumn_image}
                    title="Autumn Collection"
                    description="Order bouquets from this beautiful special collection and focus on picking the presents to match them, while we'll arrange the flowers."
                />
            </div>
        </section>
    );
}