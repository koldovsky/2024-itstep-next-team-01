import Link from "next/link";

export default function FooterNav() {
  return (
    <nav className="flex flex-col space-y-3 md:flex-row md:space-x-6 md:space-y-0 lg:w-full lg:justify-center">
      {[
        { href: "/about", label: "About us" },
        { href: "/services", label: "Services" },
        { href: "/flowers", label: "Flowers" },
        { href: "/collections", label: "Collections" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/contacts", label: "Contacts" },
      ].map((link) => (
        <Link key={link.href} href={link.href} className="hover:text-footerHoverText">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
