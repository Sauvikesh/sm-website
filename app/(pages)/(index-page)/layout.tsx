import type { Metadata } from 'next';
import '../.././globals.css';
import Navbar from '../_components/Navbar/Navbar';
import Footer from '../_components/Footer/Footer';
import { fraunces, dmSans, outfit } from '../../_fonts';
import '../../globals.css';

export const metadata: Metadata = {
  title: 'Samantha Mah | Portfolio',
  description: "Samantha Mah's portfolio website.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${dmSans.variable} ${outfit.variable} bg-white text-black`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
