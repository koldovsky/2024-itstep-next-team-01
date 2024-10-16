import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function FooterSocials() {
  return (
    <div className="flex space-x-4 mt-4 lg:mt-0">
      {[
        { href: "https://www.youtube.com", icon: <FaYoutube size={20} /> },
        { href: "https://www.twitter.com", icon: <FaTwitter size={20} /> },
        { href: "https://www.instagram.com", icon: <FaInstagram size={20} /> },
        { href: "https://www.facebook.com", icon: <FaFacebook size={20} /> },
      ].map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-footerText hover:text-footerHoverText"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
}
