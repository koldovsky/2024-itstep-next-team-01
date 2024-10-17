import Cover from "./components/Home/Cover";
import Features from "./components/Home/Features";
import WorkingSectors from "./components/Home/WorkingSectors";
import SpecialCollectionsContainer from "./components/special-collections/SpecialCollectionsContainer";

export default function Home() {
  return (
    <div className=" max-w-[1220px] mx-auto flex flex-col items-center justify-center">
      <Cover />
      <Features />
      <WorkingSectors />
        <SpecialCollectionsContainer />
    </div>
  );
}

