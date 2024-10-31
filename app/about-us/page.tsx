import PageTitle from "./AboutUsTitle/PageTitle";


export const metadata = {
  title: "About Us - Sami's Flowers",
  description: "Learn more about Sami's Flowers and our journey.",
};

export default function AboutUs() {
  return (
    <div className=" max-w-[1220px] mx-auto flex flex-col items-center justify-center">
      <PageTitle />
    </div>
  );
}