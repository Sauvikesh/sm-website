// components/NavItem.tsx

import Link from 'next/link';

interface NavItemProps {
  href: string;
  label: string;
  bgColor: string;
  navTextColor: string;
}

export default function NavItem({
  href,
  label,
  bgColor,
  navTextColor,
}: NavItemProps) {
  return (
    <li className={`${bgColor} p-2 pl-6 pr-6 rounded-[100px] text-[18px]`}>
      <Link href={href} className={`${navTextColor}`}>
        {label}
      </Link>
    </li>
  );
}
