'use client';
import Link from 'next/link';
import Image from 'next/image';
import AboutLink from './AboutLink';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-8 pt-0 pb-0 h-16">
      <ul className="">
        <li className="">
          <Link href="/">
            <Image
              src="/smLogo.png"
              alt="sm Logo"
              height={100}
              width={100}
              className="h-16 w-auto"
            ></Image>
          </Link>
        </li>
      </ul>

      <ul className="flex">
        <AboutLink />
        <li className="p-5">
          <Link
            href="https://drive.google.com/file/d/1JaJ5ppcmlcFHTJpduY-MQ9OY-nYny3V5/view"
            className="text-white font-dm-sans text-xl leading-none"
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
