import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import './globals.css';

const inconsolata = Inconsolata({ subsets: ['latin'], variable: '--font-code' });

export const metadata: Metadata = {
  title: 'Salman Fares',
  description: 'Personal page for Salman Fares',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inconsolata.variable} font-code antialiased`}>
        {children}
      </body>
    </html>
  );
}
