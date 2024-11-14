import Cover from "./components/Home/Cover";
import Features from "./components/Home/Features";
import WorkingSectors from "./components/Home/WorkingSectors";
import Gallery from "@/app/components/Home/Gallery/Gallery";
import SpecialCollections from "@/app/components/Home/SpecialCollections/SpecialCollectionsContainer";
import AboutUsHome from "./components/Home/AboutUsHome";
import Description from "./components/Home/Description";
import NewInShop from "./components/Home/NewInShop";
import Testimonials from "./components/Home/Testimonials";
import Instagram from "./components/Home/Gallery";
import ServicesSection from "./components/Home/ServiceSection/ServicesSection";
import Cta from "./components/Home/Cta";

export default function Home() {
  return (
    <div className=" max-w-[1220px] mx-auto flex flex-col items-center justify-center">
      <Cover />
      <Features />
      <AboutUsHome />
      <NewInShop />
      <ServicesSection />
      <Cta />
      <WorkingSectors />
      <Description />
      <Gallery />
      <SpecialCollections />
      <Testimonials />
      <Instagram />
    </div>
  );
}

