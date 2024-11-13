'use client';

import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import { useDisplayNav } from '../../_hooks/useDisplayNav';
import { useDarkModeSwitch } from '../../_hooks/useDarkModeSwitch';

export default function Navbar() {
  const pathname = usePathname();

  const darkMode = useDarkModeSwitch();

  const bgColor = darkMode ? 'bg-black' : 'bg-white';

  const bgAboutText = pathname === '/about' ? bgColor : '';

  const bgWorkText =
    pathname === '/' ||
    pathname === '/hackdavis' ||
    pathname === '/sage' ||
    pathname === '/paramount/EPG' ||
    pathname === '/paramount/errorMessaging'
      ? bgColor
      : '';

  const bgPlayText = pathname === '/play' ? bgColor : '';

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
      href: 'https://drive.google.com/file/d/1iWHeb_M7NPPgxQrANJpO_P6_7xIW5EB-/view',
      label: 'Resume',
      bgColor: bgPlayText,
      newTab: true,
    },
  ];

  return !invisible ? (
    <header
      className={`fixed top-0 z-50 flex w-full justify-center bg-transparent pt-6 transition-all duration-300  ${isVisible ? 'opacity-1 translate-y-0' : 'opacity-0 -translate-y-full'}`}
    >
      <nav
        className={`flex items-center justify-center ${darkMode ? 'bg-[#38373C] text-white' : 'bg-[#EBEBEC] text-black'} w-fit rounded-[100px] font-dm-sans`}
      >
        <ul className="flex items-center gap-6 p-3 h-[56px] font-dm-sans text-xl leading-none">
          {navItems.map((item, index) => (
            <NavItem key={index} {...item} />
          ))}
        </ul>
      </nav>
    </header>
  ) : null;
}
