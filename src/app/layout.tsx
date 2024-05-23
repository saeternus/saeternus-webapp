import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { satoshi } from '@/utils/customfonts';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Saeternus',
  description: 'Innovating for your success',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen antialiased',
          `${satoshi.variable} font-satoshi`
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
