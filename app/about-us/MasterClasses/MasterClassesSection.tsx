import Image from 'next/image';
import MasterClassesTitle from "./MasterClassesTitle";
import MasterClassesItem from "./MasterClassesItem";
import spring_flower from '@/public/master-classes/spring-flower.png';
import rosy_flower from '@/public/master-classes/rosy-flower.png';
import main_flower from '@/public/master-classes/main-flower.png';
import {Button} from '../../components/button';

export default function MasterClassesSection() {
    return (
        <section className="flex flex-col md:flex-row h-auto w-full mt-14 px-5">
            <div className="w-full md:w-1/2 h-full">
                <MasterClassesTitle/>
                <MasterClassesItem
                    title="Spring Flowers Composition"
                    price="$50"
                    description="Create your own flower arrangement with tulips and daffodils."
                    imageSrc={spring_flower}
                />
                <MasterClassesItem
                    title="Summer Bouquet"
                    price="$60"
                    description="Learn to make a vibrant summer bouquet with sunflowers and roses."
                    imageSrc={rosy_flower}
                />

                <Button variant="primary" className="font-bold">Sign up</Button>
            </div>

            <div className="w-full md:w-1/2 h-full p-4 flex justify-center mt-8 md:mt-0 ml-0 md:ml-8">
                <Image
                    src={main_flower}
                    alt="Main flower"
                    width={450}
                    height={450}
                    className="object-center"
                />
            </div>
        </section>
    );
}