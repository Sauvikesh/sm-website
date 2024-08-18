import Link from 'next/link';
import Image from 'next/image';
import AboutLink from './AboutLink';

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between h-16 p-8 pt-0 pb-0">
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
          <AboutLink />
          <li>
            <Link
              href="https://drive.google.com/file/d/1JaJ5ppcmlcFHTJpduY-MQ9OY-nYny3V5/view"
              className="text-xl leading-none text-white font-dm-sans"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
