import {Button} from '../../components/button';

export default function ContactShop({ }) {
    return (
        <div className="w-full flex-col flex">
            <div className="w-full flex flex-col md:flex-row font-inter text-secondaryText">
                <div className="w-full md:w-1/2">
                    <p>Goddard Hall 80</p>
                    <p>Washington Square E,</p>
                    <p>New York, NY 10003, USA</p>
                </div>
                <div className="w-full md:w-1/2">
                    <p>+1 (234) 567 89 01</p>
                    <p>+1 (234) 567 89 01</p>
                    <p>samisflowers@email.com</p>
                </div>
            </div>
            <hr className="w-full md:my-8 my-4"></hr>
            <div className="w-full flex flex-col md:flex-row font-inter text-secondaryText">
                <div className="w-full md:w-1/2">
                    <p>Monday – Friday:</p>
                    <p>7am – 7pm</p>
                </div>
                <div className="w-full md:w-1/2">
                    <p>Saturday – Sunday:</p>
                    <p>8am – 7pm</p>
                </div>
            </div>
            <Button className="w-36 md:mt-24 mt-14 whitespace-nowrap">View on map</Button>
        </div>
    );
}