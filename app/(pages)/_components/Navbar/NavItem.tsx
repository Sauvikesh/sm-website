// components/NavItem.tsx

import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  bgColor: string;
  newTab?: boolean;
}

export default function NavItem({
  href,
  label,
  bgColor,
  newTab,
}: NavItemProps) {
  if (newTab) {
    return (
      <li
        className={`${bgColor} flex items-center py-2 px-6 h-[40px] rounded-[100px] text-[18px]`}
      >
        <a href={href} target="_blank">
          {label}
        </a>
      </li>
    );
  } else {
    return (
      <li
        className={`${bgColor} flex items-center py-2 px-6 h-[40px] rounded-[100px] text-[18px]`}
      >
        <Link href={href}>{label}</Link>
      </li>
    );
  }
}
