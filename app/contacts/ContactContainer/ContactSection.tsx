import Image from 'next/image';
import flowerShop from '@/public/contact-container/flower-shop.png';
import ContactTitle from './ContactTitle';
import ContactShop from "@/app/contacts/ContactContainer/ContactShop";

export default function ContactSection({ }) {
    return (
        <section className="flex flex-col md:flex-row h-auto w-full mt-14 px-5">
            <div className="w-full md:w-1/2 h-full p-4 flex justify-center md:mr-12">
                <Image
                    src={flowerShop}
                    alt="Main flower"
                    width={450}
                    height={450}
                    className="object-center"
                />
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center ">
                <ContactTitle/>
                <ContactShop/>
            </div>
        </section>
    );
}