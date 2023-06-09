import React, { lazy, Suspense } from 'react';
import Loading from './Loading';
const Hero = lazy(() => import('./components/Hero'));
const Stats = lazy(() => import('./components/Stats'));
const Offers = lazy(() => import('./components/Offers'));
const Clients = lazy(() => import('./components/Clients'));
const Packages = lazy(() => import('./components/Packages'));
// const GooMap = lazy(() => import('./components/GooMap'));
// const HubSpotForm = lazy(() => import('./components/HubSpotForm'));
const GoogleTag = lazy(() => import('./components/GoogleTag'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTopCom = lazy(() => import('./components/ScrollToTopCom'));
const Whattsapp = lazy(() => import('./components/Whattsapp'));
export default async function Page({ params: { lng } }) {
  return (
    <main className={lng === 'en' ? 'font-eng' : 'font-arb'}>
      <GoogleTag />
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
      {/* <Suspense fallback={<Loading />}>
        <HubSpotForm />
      </Suspense> */}
      {/* <Suspense fallback={<Loading />}>
        <GooMap />
      </Suspense> */}
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
