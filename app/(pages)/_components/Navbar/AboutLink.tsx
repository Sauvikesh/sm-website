'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AboutLink() {
  const pathname = usePathname();
  const boldAboutText = pathname === '/about' ? 'font-bold' : 'font-normal';

  return (
    <li>
      <Link
        href="/about"
        className={`${boldAboutText} text-white font-dm-sans text-xl leading-none`}
      >
        About
      </Link>
    </li>
  );
}
