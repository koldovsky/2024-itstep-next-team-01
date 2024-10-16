import Image from "next/image";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

export default function FooterContactInfo() {
  return (
    <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-8 md:space-y-0 md:w-full md:justify-between">
      <Link href="tel:+12345678900" className="hover:text-footerHoverText">
        +1 (234) 567 89 00
      </Link>
      <Image
        src="/logo-main.svg"
        alt="Sami's Flowers Logo"
        width={140}
        height={96}
      />
      <Link
        href="mailto:samisflowers@email.com"
        className="flex items-center space-x-2 hover:text-footerHoverText"
      >
        <FiMail />
        <span>samisflowers@email.com</span>
      </Link>
    </div>
  );
}
