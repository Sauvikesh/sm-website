import type { Metadata } from 'next';
import '../.././globals.css';
import Navbar from '../_components/Navbar/Navbar';
import Footer from '../_components/Footer/Footer';
import { fahkwang, dmSans } from '../../_fonts';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Samantha Mah's portfolio website. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fahkwang.variable} ${dmSans.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
