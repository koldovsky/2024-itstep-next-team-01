import Link from 'next/link';

type MobileMenuProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  return (
    <div
      className={`${isOpen ? 'fixed' : 'hidden'} top-[112px] left-0 w-full h-[calc(100%-112px)] bg-overlayBg text-primaryText flex flex-col items-center z-40`}
    >
      <nav className="space-y-14 text-center text-sm font-normal">
        {[
          { href: '/about', label: 'ABOUT US' },
          { href: '/services', label: 'SERVICES' },
          { href: '/flowers', label: 'FLOWERS' },
          { href: '/testimonials', label: 'TESTIMONIALS' },
          { href: '/contacts', label: 'CONTACTS' },
        ].map(({ href, label }) => (
          <Link key={href} href={href} passHref>
            <span onClick={() => setIsOpen(false)} className="cursor-pointer block p-1">{label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-8 text-sm">
        Call us: +1 (234) 567 89 00
      </div>
    </div>
  );
}
