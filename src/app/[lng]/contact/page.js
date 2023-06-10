import React, { lazy, Suspense } from 'react';
import Loading from '../Loading';
const HubSpotForm = lazy(() => import('../components/HubSpotForm'));

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HubSpotForm />
      </Suspense>
    </main>
  );
}
