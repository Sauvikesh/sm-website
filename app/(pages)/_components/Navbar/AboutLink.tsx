'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AboutLink() {
  const pathname = usePathname();

  const getLinkClass = (path: string) =>
    pathname === path
      ? 'font-bold text-white font-dm-sans text-xl leading-none'
      : 'font-normal text-white font-dm-sans text-xl leading-none';
  return (
    <li className="p-5">
      <Link href="/about" className={getLinkClass('/about')}>
        About
      </Link>
    </li>
  );
}
