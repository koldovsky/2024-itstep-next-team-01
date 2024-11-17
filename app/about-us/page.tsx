import PageTitle from "@/app/components/PageTitle";
import MasterClasses from "@/app/about-us/MasterClasses/MasterClassesSection";
import About from "./About";
import Partners from "./partners";

export const metadata = {
  title: "About Us - Sami's Flowers",
  description: "Learn more about Sami's Flowers and our journey.",
};


export default function AboutUsPage() {
  return (
    <div className="max-w-[1220px] mx-auto flex flex-col items-center justify-center">
      <PageTitle title={metadata.title} subtitle={metadata.description}/>
      <About />
      <Partners />
      <MasterClasses />
    </div>
  );
}

