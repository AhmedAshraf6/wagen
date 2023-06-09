import Link from 'next/link';
import React, { lazy, Suspense } from 'react';
import Script from 'next/script';

import { useTranslation } from '../i18n';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Offers from './components/Offers';
import Clients from './components/Clients';
import Packages from './components/Packages';
import GooMap from './components/GooMap';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTopCom';
import Whattsapp from './components/Whattsapp';
import HubSpotForm from './components/HubSpotForm';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);
  return (
    <main className={lng === 'en' ? 'font-eng' : 'font-arb'}>
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-GDGGMB6W6Z'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GDGGMB6W6Z');
        `}
      </Script>
      <Hero lng={lng} />
      <Stats lng={lng} />
      <Offers lng={lng} />
      {/* <Menu lng={lng} /> */}
      <Clients lng={lng} />
      <Packages lng={lng} />
      <HubSpotForm />
      <GooMap />
      <Footer lng={lng} />
      <ScrollToTop />
      <Whattsapp />
    </main>
  );
}
