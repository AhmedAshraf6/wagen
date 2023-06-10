import React, { lazy, Suspense } from 'react';
import Loading from '../Loading';
const HubSpotForm = lazy(() => import('../components/HubSpotForm'));

export default async function Page({ params: { lng } }) {
  return (
    <main className={lng === 'en' ? 'font-eng' : 'font-arb'}>
      <Suspense fallback={<Loading />}>
        <HubSpotForm />
      </Suspense>
    </main>
  );
}
