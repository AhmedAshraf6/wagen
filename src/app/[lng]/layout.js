import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { Tajawal, Josefin_Sans } from 'next/font/google';

const arb = Tajawal({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-tajawal',
});

const eng = Josefin_Sans({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-josefin-sans',
});

import '../globals.css';
import Navbar from './components/Navbar';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export const metadata = {
  title: 'ويجن',
  description: 'ويجن',
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${arb.variable} ${eng.variable}`}
    >
      <head />
      <body>
        <Navbar lng={lng} />
        {children}
      </body>
      {/*  */}
    </html>
  );
}
