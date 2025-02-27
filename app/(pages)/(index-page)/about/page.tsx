'use client';
import { useDarkModeSwitch } from '../../_hooks/useDarkModeSwitch';
import Bio from './_components/Bio/Bio';
import Hobbies from './_components/Hobbies/Hobbies';
import Philosophy from './_components/Philosophy/Philosophy';
import Play from './_components/Play/Play';

export default function About() {
  const darkMode = useDarkModeSwitch();

  return (
    <main
      className={`flex flex-col overflow-x-clip relative gap-40 pb-10 ${darkMode ? 'text-white bg-dark-bg' : 'text-black bg-white'} font-dm-sans transition-colors duration-500`}
    >
      <Bio />
      <Philosophy />
      <Hobbies />
      <Play />
    </main>
  );
}
