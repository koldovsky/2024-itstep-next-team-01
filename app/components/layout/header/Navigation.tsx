import Link from 'next/link';

type NavigationProps = {
  isDesktop: boolean;
};

export default function Navigation({ isDesktop }: NavigationProps) {
  return (
    <nav className={`${isDesktop ? 'hidden md:flex flex-row space-x-8 text-sm font-normal' : 'text-center text-sm font-normal'}`}>
      {[
        { href: '/about-us', label: 'ABOUT US' },
        { href: '/services', label: 'SERVICES' },
        { href: '/flowers', label: 'FLOWERS' },
        { href: '/testimonials', label: 'TESTIMONIALS' },
        { href: '/contacts', label: 'CONTACTS' },
      ].map(({ href, label }) => (
        <Link key={href} href={href} passHref>
          <span className="hover:text-hoverText cursor-pointer block">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
