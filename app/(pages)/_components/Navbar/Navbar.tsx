'use client';

import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import { useDisplayNav } from '../../_hooks/useDisplayNav';

export default function Navbar() {
  const pathname = usePathname();

  const bgAboutText = pathname === '/about' ? 'bg-white' : '';

  const bgWorkText =
    pathname === '/' || pathname === '/hackdavis' || pathname === '/sage'
      ? 'bg-white'
      : '';

  const bgPlayText = pathname === '/play' ? 'bg-white' : '';
  const invisible = pathname === '/login';

  const isVisible = useDisplayNav();

  const navItems = [
    {
      href: '/',
      label: 'Work',
      bgColor: bgWorkText,
    },
    {
      href: '/about',
      label: 'About',
      bgColor: bgAboutText,
    },
    {
      href: 'https://drive.google.com/file/d/1JaJ5ppcmlcFHTJpduY-MQ9OY-nYny3V5/view',
      label: 'Resume',
      bgColor: bgPlayText,
    },
  ];

  return !invisible ? (
    <header
      className={`fixed top-0 left-[39%] z-50 flex justify-center bg-transparent pt-12 transition-all duration-300  ${isVisible ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}
    >
      <nav className="flex items-center justify-center bg-[#F1F1F1] w-fit rounded-[100px] font-dm-sans">
        <ul className="flex gap-4 p-2 font-dm-sans text-black text-xl leading-none">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  ) : null;
}
