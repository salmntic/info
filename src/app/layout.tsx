import type { Metadata } from 'next';
import { Viga } from 'next/font/google';
import './globals.css';

const viga = Viga({ subsets: ['latin'], weight: '400', variable: '--font-viga' });

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
      <body className={`${viga.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
