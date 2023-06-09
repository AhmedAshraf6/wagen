import React, { lazy, Suspense } from 'react';
import Script from 'next/script';
import Loading from './Loading';
const Hero = lazy(() => import('./components/Hero'));
const Stats = lazy(() => import('./components/Stats'));
const Offers = lazy(() => import('./components/Offers'));
const Clients = lazy(() => import('./components/Clients'));
const Packages = lazy(() => import('./components/Packages'));
const GooMap = lazy(() => import('./components/GooMap'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTopCom = lazy(() => import('./components/ScrollToTopCom'));
const Whattsapp = lazy(() => import('./components/Whattsapp'));
const HubSpotForm = lazy(() => import('./components/HubSpotForm'));
export default async function Page({ params: { lng } }) {
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
      <Suspense fallback={<Loading />}>
        <Hero lng={lng} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Stats lng={lng} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Offers lng={lng} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Clients lng={lng} />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Packages lng={lng} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <HubSpotForm />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <GooMap />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Footer lng={lng} />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <ScrollToTopCom />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Whattsapp />
      </Suspense>
    </main>
  );
}
