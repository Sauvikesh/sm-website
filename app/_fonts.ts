import { DM_Sans } from 'next/font/google';
import { Fraunces } from 'next/font/google';
import { Outfit } from 'next/font/google';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmSans',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['200', '300', '400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['200', '300', '400', '500', '600', '700'],
});

export { dmSans, fraunces, outfit };