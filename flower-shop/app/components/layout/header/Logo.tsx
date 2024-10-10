import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" passHref>
        <Image src="/logo-main.svg" alt="My Company Logo" width={121} height={50} className="cursor-pointer" />
      </Link>
    </div>
  );
}
