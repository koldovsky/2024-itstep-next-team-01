import Cover from "./components/Home/Cover";
import Features from "./components/Home/Features";
import WorkingSectors from "./components/Home/WorkingSectors";
import AboutUs from "./components/Home/AboutUs";
import NewInShop from "./components/Home/NewInShop";

export default function Home() {
  return (
    <div className=" max-w-[1220px] mx-auto flex flex-col items-center justify-center">
      <Cover />
      <Features />
      <AboutUs />
      <NewInShop />
      <WorkingSectors />
    </div>
  );
}
