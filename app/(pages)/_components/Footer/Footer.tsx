'use client';
import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';

// NOTE: maybe I should refactor this to use grid instead of flex boxes ???
export default function Footer() {
  const pathname = usePathname();
  const footerBackGroundColor =
    pathname === '/sage' ? 'bg-[#e4edeb]' : 'bg-dark-b-bg';
  const footerTextColor = pathname === '/sage' ? 'text-black' : 'text-white';

  const invisible = pathname === '/login';

  return !invisible ? (
    <footer
      className={`${footerBackGroundColor} ${footerTextColor} flex justify-between pb-20 p-53 pt-14`}
    >
      <div className="flex flex-col gap-10">
        <h1 className="text-2xl font-f-w">
          Thanks for visiting! Let's stay in touch.
        </h1>
        <span className=" font-dm-sans">© Samantha Mah 2024</span>
      </div>

      <nav className="flex flex-col gap-7">
        <div className="flex items-center justify-end gap-3">
          <a className="text-2xl font-f-w" href="mailto:stmah@ucdavis.edu">
            Email
          </a>
          <Image
            src="/linkArrow.png"
            alt="Link Arrow"
            height={100}
            width={100}
            className="w-auto h-3"
          ></Image>
        </div>

        <Link
          href="https://www.linkedin.com/in/sam-mah/"
          className="flex items-center justify-end gap-3"
        >
          <h1 className="text-2xlfont-f-w">LinkedIn</h1>
          <Image
            src="/linkArrow.png"
            alt="Link Arrow"
            height={100}
            width={100}
            className="w-auto h-3"
          ></Image>
        </Link>
      </nav>
    </footer>
  ) : null;
}
