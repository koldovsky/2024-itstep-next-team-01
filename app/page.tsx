import Cover from "./components/Home/Cover";
import Features from "./components/Home/Features";
import SpecialCollections from "./components/special-collections/SpecialCollectionsContainer";

export default function Home() {
    return (
        <>
            <Cover/>
            <Features/>
            <SpecialCollections/>
        </>
    );
}