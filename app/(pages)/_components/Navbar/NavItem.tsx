// components/NavItem.tsx

import Link from 'next/link';
import Image from 'next/image';
import { useDarkModeSwitch } from '../../_hooks/useDarkModeSwitch';

interface NavItemProps {
  href: string;
  label: string;
  bgColor: string;
}

export default function NavItem({ href, label, bgColor }: NavItemProps) {
  const darkMode = useDarkModeSwitch();

  return (
    <li
      className={`${bgColor} flex p-2 pl-6 pr-6 rounded-[100px] text-[18px] gap-2`}
    >
      <Link href={href}>{label}</Link>
      {label === 'Resume' && (
        <Image
          src="/navLinkArrow.svg"
          alt="nav link arrow"
          width={1000}
          height={1000}
          className={`w-[13px] ${darkMode ? 'filter invert' : ''}`}
        />
      )}
    </li>
  );
}
