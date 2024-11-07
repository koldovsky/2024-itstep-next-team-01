
interface PageTitleProps {
    title: string;
    subtitle: string;
}


export default function PageTitle({ title, subtitle }: PageTitleProps) {
    return (
        <div className="px-5 w-full mt-12">
            <div className="w-full md:h-72 h-64 bg-backgroundTitle bg-cover bg-center flex flex-col justify-center ">
                <h1 className="text-5xl text-white font-frank mb-5 text-center">{title}</h1>
                <p className="text-center text-primaryText">Home &#62; <span
                    className="font-bold underline">{subtitle}</span></p>
            </div>
        </div>
    );
}
