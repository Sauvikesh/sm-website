'use client';

import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const boldAboutText = pathname === '/about' ? 'font-bold' : 'font-normal';
  const navBackGroundColor =
    pathname === '/sage' ? 'bg-[#e4edeb]' : 'bg-dark-bg';

  const navTextColor = pathname === '/sage' ? 'text-black' : 'text-white';

  const invisible = pathname === '/login';

  return !invisible ? (
    <header>
      <nav
        className={`${navBackGroundColor} flex items-center justify-between h-16 p-8 pt-0 pb-0`}
      >
        <ul>
          <li>
            <Link href="/">
              <Image
                src="/smLogo.png"
                alt="sm Logo"
                height={100}
                width={100}
                className="w-auto h-16"
              ></Image>
            </Link>
          </li>
        </ul>

        <ul className="flex gap-5 p-5">
          <li>
            <Link
              href="/about"
              className={`${boldAboutText} ${navTextColor} font-dm-sans text-xl leading-none`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="https://drive.google.com/file/d/1JaJ5ppcmlcFHTJpduY-MQ9OY-nYny3V5/view"
              className={`text-xl leading-none ${navTextColor} font-dm-sans"`}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  ) : null;
}
