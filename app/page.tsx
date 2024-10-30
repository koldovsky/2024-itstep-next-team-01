import Cover from "./components/Home/Cover";
import Features from "./components/Home/Features";
import WorkingSectors from "./components/Home/WorkingSectors";
import SpecialCollections from "@/app/components/Home/SpecialCollections/SpecialCollectionsContainer";
import AboutUs from "./components/Home/AboutUs";
import NewInShop from "./components/Home/NewInShop";
import Testimonials from "./components/Home/Testimonials";
import Instagram from "./components/Home/Instagram";
import ServicesSection from "./components/Home/ServiceSection/ServicesSection";



export default function Home() {
  return (
    <div className=" max-w-[1220px] mx-auto flex flex-col items-center justify-center">
      <Cover />
      <Features />
      <AboutUs />
      <NewInShop />
      <ServicesSection />
      <WorkingSectors />
        <SpecialCollections />
      <Testimonials />
      <Instagram />
    </div>
  );
}

