// components/NavItem.tsx

import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  bgColor: string;
}

export default function NavItem({ href, label, bgColor }: NavItemProps) {
  return (
    <li
      className={`${bgColor} flex items-center py-2 px-6 h-[48px] rounded-[100px] text-[18px]`}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
}
