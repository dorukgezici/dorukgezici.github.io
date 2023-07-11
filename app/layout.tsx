import React from 'react';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/globals.scss';

const font = Lato({ weight: '400', subsets: ['latin-ext'] });

export const metadata: Metadata = {
  title: 'Doruk Gezici | DGtech',
  description: 'Check out the portfolio of Doruk Gezici, Full Stack Developer & Entrepreneur.',
  authors: [{ name: 'Doruk Gezici' }],
  keywords: [
    'Doruk', 'Gezici', 'portfolio', 'full stack developer', 'entrepreneur',
    'dorukgezici', 'DGtech', 'Udext', 'Gamer Arena', 'ITUscheduler',
  ],
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={font.className}>
    {children}
    <footer className="flex justify-center my-10">© 2023 | DGtech</footer>
    </body>
    </html>
  );
}
