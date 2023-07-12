import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Lato } from 'next/font/google';
import classNames from 'classnames';
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
    {/* Google Tag Manager */}
    {process.env.NODE_ENV !== 'development' && (
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5J976B');
          `,
        }}
      />
    )}
    <body className={classNames(font.className, 'text-neutral-400 bg-neutral-900')}>
    {children}
    <footer className="flex justify-center my-10">© 2023 | DGtech</footer>
    </body>
    </html>
  );
}
