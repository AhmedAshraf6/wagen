import React, { lazy, Suspense } from 'react';
import Loading from '../Loading';
const HubspotContactForm = lazy(() =>
  import('../components/HubspotContactForm')
);

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<Loading />}>
        <HubspotContactForm />
      </Suspense>
    </main>
  );
}
