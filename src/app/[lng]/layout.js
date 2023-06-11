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
import Script from 'next/script';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export const metadata = {
  title: 'وجين منيو',
  description:
    'أفضل تطبيق لإدارة قائمة المنتجات الخاصة بك وتوفير الوقت والجهد وتحسين تجربة العملاء.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'وجين منيو',
    description:
      'أفضل تطبيق لإدارة قائمة المنتجات الخاصة بك وتوفير الوقت والجهد وتحسين تجربة العملاء.',
  },
  alternates: {
    canonical: 'https://wagen.vercel.app',
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
        <Script async src='https://js.hs-scripts.com/139691288.js' />
        {children}
        <TransitionEffect />
      </body>
    </html>
  );
}
