import Link from 'next/link';
import React, { lazy, Suspense } from 'react';
import { useTranslation } from '../i18n';
import Loading from './Loading';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Offers from './components/Offers';
import Clients from './components/Clients';
import Packages from './components/Packages';
import Contact from './components/Contact';
import GooMap from './components/GooMap';
import Footer from './components/Footer';
// import Loading from './Loading';
// import { Footer } from './components/Footer';

// const Stats = lazy(() => import('./components/Stats'));
// const Footer = lazy(() => import('./components/Footer'));

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <main className={lng === 'en' ? 'font-eng' : 'font-arb'}>
      {/* <h1>{t('title')}</h1>
      <Link href={`/${lng}/second-page`}>{t('to-second-page')}</Link> */}
      {/* <Suspense fallback={<Loading />}>
        <Stats lng={lng} />
      </Suspense> */}
      {/* <Footer lng={lng} /> */}
      {/* <Suspense fallback={<Loading />}>
      </Suspense> */}
      <Hero lng={lng} />
      <Stats lng={lng} />
      <Offers lng={lng} />
      <Clients lng={lng} />
      <Packages lng={lng} />
      <Contact lng={lng} />
      <GooMap />
      <Footer lng={lng} />
    </main>
  );
}
