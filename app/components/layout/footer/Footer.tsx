import FooterContactInfo from "./FooterContactInfo";
import FooterNav from "./FooterNav";
import FooterDescription from "./FooterDescription";
import FooterSocials from "./FooterSocials";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="text-footerText py-8 px-4 text-center">
      <div className="container mx-auto flex flex-col items-center space-y-6 md:px-8 max-w-[1220px]">
        <FooterContactInfo />
        <FooterNav />
        <FooterDescription />
        <FooterSocials />
        <FooterCopyright />
      </div>
    </footer>
  );
}
