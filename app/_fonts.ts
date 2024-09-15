import { DM_Sans } from 'next/font/google';
import { Fahkwang } from 'next/font/google';
import { Outfit } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmSans',
});

const fahkwang = Fahkwang({
  subsets: ['latin'],
  variable: '--font-fw',
  weight: ['200', '300', '400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export { dmSans, fahkwang, outfit };
