// components/NavItem.tsx

import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  bgColor: string;
  textColor: string;
  newTab?: boolean;
}

export default function NavItem({
  href,
  label,
  bgColor,
  textColor,
  newTab,
}: NavItemProps) {
  if (newTab) {
    return (
      <li
        className={`${bgColor} ${textColor} flex items-center py-2 px-6 pl-0 h-[48px] rounded-xl text-[18px]`}
      >
        <a href={href} target="_blank">
          {label}
        </a>
      </li>
    );
  } else {
    return (
      <li
        className={`${bgColor} ${textColor} flex items-center py-2 px-6 h-[48px] rounded-xl text-[18px]`}
      >
        <Link href={href}>{label}</Link>
      </li>
    );
  }
}
