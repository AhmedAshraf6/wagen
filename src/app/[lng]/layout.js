import { dir } from 'i18next';
import { languages } from '../i18n/settings';
import { Tajawal, Josefin_Sans } from 'next/font/google';

// import img from '../../../public/favicon.ico';
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
import TransitionEffect from './components/anmition-components/TransitionEffect';
import TopHeaderEffect from './components/anmition-components/TopHeaderEffect';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export const metadata = {
  title: 'وجين منيو',
  description: 'وجين منيو',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={`${arb.variable} ${eng.variable}`}
    >
      <body>
        <TopHeaderEffect />
        <Navbar lng={lng} />
        {children}
        <TransitionEffect />
      </body>
    </html>
  );
}
